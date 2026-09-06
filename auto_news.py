#!/usr/bin/env python3
"""
Автопостинг новостей для CustomBroker.ge
- Генерирует уникальные SEO-статьи о таможне Грузии
- Публикует в /news/ с полным HTML в стиле сайта
- Обновляет индекс новостей и sitemap.xml
- Деплоит через git push → Cloudflare Pages
- Запуск: python3 auto_news.py [опционально: "Заголовок" "Описание" "ключи"]
- Cron: 2 раза в неделю (понедельник и четверг в 08:00 UTC)
"""

import os, re, json, hashlib, subprocess, urllib.request
from datetime import date, datetime
from pathlib import Path

# ─── CONFIG ───
BASE = Path('/root/.openclaw/workspace/custombroker')
NEWS_DIR = BASE / 'news'
ANTHROPIC_KEY = os.environ.get('ANTHROPIC_API_KEY', '')
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN', '')
SITE_URL = 'https://custombroker.ge'
TODAY = str(date.today())
TODAY_RU = datetime.now().strftime('%-d %B %Y').replace(
    'January','января').replace('February','февраля').replace('March','марта').replace(
    'April','апреля').replace('May','мая').replace('June','июня').replace(
    'July','июля').replace('August','августа').replace('September','сентября').replace(
    'October','октября').replace('November','ноября').replace('December','декабря')

# Темы для ротации (используем хэш даты чтобы каждый раз выбирать разную)
TOPIC_POOL = [
    {
        "title_hint": "Таможенное оформление грузов из Китая в Грузию: документы и сроки",
        "keywords": "таможенное оформление Китай Грузия, импорт из Китая, документы для растаможки",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
    {
        "title_hint": "Ставки НДС и пошлин при импорте в Грузию: полный гид 2025",
        "keywords": "НДС импорт Грузия, ввозная пошлина Грузия, ставки пошлин 2025",
        "tag": "Пошлины", "tag_slug": "poshliny"
    },
    {
        "title_hint": "СЭЗ Поти для реэкспорта: как работает схема и кому подходит",
        "keywords": "СЭЗ Поти, свободная экономическая зона, реэкспорт Грузия",
        "tag": "Порт Поти", "tag_slug": "port-poti"
    },
    {
        "title_hint": "ТН ВЭД коды в Грузии: как правильно классифицировать товар",
        "keywords": "ТН ВЭД Грузия, классификация товаров, HS коды Грузия rs.ge",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
    {
        "title_hint": "Растаможка автомобиля в Грузии: акциз, пошлина, документы",
        "keywords": "растаможка авто Грузия, акциз автомобиль Грузия, таможенное оформление авто",
        "tag": "Пошлины", "tag_slug": "poshliny"
    },
    {
        "title_hint": "Транзит через Грузию: оформление T1 и маршруты Китай–Европа",
        "keywords": "транзит через Грузию, T1 декларация, Китай Европа маршрут Грузия",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
    {
        "title_hint": "Фитосанитарный и ветеринарный контроль при импорте продуктов в Грузию",
        "keywords": "фитосанитарный сертификат Грузия, ветеринарный контроль импорт, NFA Грузия",
        "tag": "Документы", "tag_slug": "dokumenty"
    },
    {
        "title_hint": "Экспорт из Грузии: нулевые пошлины и НДС, нужные документы",
        "keywords": "экспорт из Грузии, нулевая пошлина экспорт, документы для экспорта Грузия",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
    {
        "title_hint": "Соглашение DCFTA Грузия–ЕС: льготные ставки пошлин для европейских товаров",
        "keywords": "DCFTA Грузия ЕС, свободная торговля Европа Грузия, EUR.1 сертификат",
        "tag": "Пошлины", "tag_slug": "poshliny"
    },
    {
        "title_hint": "Таможенное оформление медикаментов и медтехники при импорте в Грузию",
        "keywords": "импорт лекарств Грузия, НЦЭЛМП регистрация, медтехника таможня Грузия",
        "tag": "Документы", "tag_slug": "dokumenty"
    },
    {
        "title_hint": "Акцизы в Грузии: топливо, алкоголь, табак — ставки и расчёт",
        "keywords": "акциз Грузия 2025, акциз бензин дизель, акциз алкоголь Грузия",
        "tag": "Пошлины", "tag_slug": "poshliny"
    },
    {
        "title_hint": "Импорт товаров из Турции в Грузию: соглашение о свободной торговле",
        "keywords": "импорт из Турции Грузия, таможня Турция Грузия, FTA Турция Грузия",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
    {
        "title_hint": "Апелляция и оспаривание решений таможни Грузии: пошаговое руководство",
        "keywords": "обжалование таможни Грузия, апелляция служба доходов, штрафы таможня Грузия",
        "tag": "Документы", "tag_slug": "dokumenty"
    },
    {
        "title_hint": "КПП Красный мост и Садахло: особенности таможенного оформления",
        "keywords": "КПП Красный мост Грузия, таможня Садахло, граница Грузия Азербайджан",
        "tag": "Таможня", "tag_slug": "tamoznya"
    },
]

def call_claude(prompt: str) -> str:
    """Вызов Claude Haiku — быстро и дёшево"""
    key = ANTHROPIC_KEY
    if not key:
        raise ValueError('ANTHROPIC_API_KEY not set')
    payload = json.dumps({
        'model': 'claude-haiku-4-5',
        'max_tokens': 4096,
        'messages': [{'role': 'user', 'content': prompt}]
    }).encode()
    req = urllib.request.Request(
        'https://api.anthropic.com/v1/messages',
        data=payload,
        headers={
            'x-api-key': key,
            'anthropic-version': '2023-06-01',
            'content-type': 'application/json'
        },
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=90) as r:
        data = json.loads(r.read())
    return data['content'][0]['text']

def make_slug(title: str) -> str:
    ru = {'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z',
          'и':'i','й':'j','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r',
          'с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh',
          'щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'}
    slug = title.lower()
    result = ''
    for ch in slug:
        result += ru.get(ch, ch)
    slug = re.sub(r'[^a-z0-9]+', '-', result).strip('-')
    return slug[:60]

def get_today_topic() -> dict:
    """Выбираем тему по хэшу даты — каждый день другая, не повторяется 14 дней"""
    idx = int(hashlib.md5(TODAY.encode()).hexdigest(), 16) % len(TOPIC_POOL)
    return TOPIC_POOL[idx]

def generate_article(topic: dict) -> dict:
    """Генерируем полную уникальную SEO-статью через Claude"""
    prompt = f"""Ты — SEO-копирайтер для сайта CustomBroker.ge — профессионального таможенного брокера в Грузии.

ЗАДАЧА: Напиши УНИКАЛЬНУЮ экспертную SEO-статью. Статья должна:
- Давать реальную ценность читателю (импортёрам, предпринимателям, логистам)
- Содержать точные факты о таможенном законодательстве Грузии
- Быть написана живым языком, не шаблонно
- НЕ быть копипастом — только оригинальный текст
- Для Google — каждое предложение должно нести новую информацию

ТЕМА: {topic['title_hint']}
КЛЮЧЕВЫЕ СЛОВА: {topic['keywords']}
САЙТ: {SITE_URL}

СТРУКТУРА (верни строго в этом формате):

TITLE: [SEO заголовок, 55-65 символов, с ключевым словом]
META: [мета-описание, 140-160 символов, с призывом к действию]
H1: [заголовок статьи, может отличаться от TITLE]
INTRO: [вводный абзац 50-80 слов — сразу отвечает на вопрос читателя]
CONTENT_HTML: [тело статьи в HTML — 600-900 слов]

Требования к CONTENT_HTML:
- Минимум 4 подзаголовка <h2>
- Конкретные цифры: ставки пошлин (0%, 5%, 12%), суммы в GEL/USD
- Ссылки на официальные источники: rs.ge, matsne.gov.ge, nfa.gov.ge (текстом, не href)
- Блок highlight: <div class="highlight"> с важным советом или предупреждением
- Финальный абзац с призывом обратиться к брокеру
- Теги: <h2>, <p>, <ul>, <li>, <strong>, <div class="highlight">
- НЕ использовать <h1> внутри (он уже есть на странице)
- Не добавлять ```html в начале и конце"""

    text = call_claude(prompt)

    # Очищаем от артефактов Markdown
    text = re.sub(r'^```html\s*', '', text, flags=re.MULTILINE)
    text = re.sub(r'^```\s*$', '', text, flags=re.MULTILINE)

    result = {}
    for field in ['TITLE', 'META', 'H1', 'INTRO']:
        m = re.search(rf'^{field}:\s*(.+?)(?=\n[A-Z_]+:|$)', text, re.MULTILINE | re.DOTALL)
        result[field.lower()] = m.group(1).strip() if m else ''

    m = re.search(r'CONTENT_HTML:\s*(.+)', text, re.DOTALL)
    result['content_html'] = m.group(1).strip() if m else ''
    # Ещё раз чистим от случайных ```
    result['content_html'] = re.sub(r'```html\s*', '', result['content_html'])
    result['content_html'] = re.sub(r'```\s*$', '', result['content_html']).strip()

    return result

def build_article_html(topic: dict, article: dict, slug: str) -> str:
    """Сборка полного HTML-файла статьи в стиле custombroker.ge"""
    post_url = f'{SITE_URL}/news/{slug}.html'
    schema = json.dumps({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article['title'],
        "description": article['meta'],
        "url": post_url,
        "datePublished": TODAY,
        "dateModified": TODAY,
        "author": {"@type": "Organization", "name": "CustomBroker.ge"},
        "publisher": {
            "@type": "Organization",
            "name": "CustomBroker.ge",
            "logo": {"@type": "ImageObject", "url": f"{SITE_URL}/favicon.ico"}
        },
        "keywords": topic['keywords'],
        "mainEntityOfPage": {"@type": "WebPage", "@id": post_url}
    }, ensure_ascii=False)

    schema_breadcrumb = json.dumps({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Главная", "item": f"{SITE_URL}/"},
            {"@type": "ListItem", "position": 2, "name": "Новости", "item": f"{SITE_URL}/news/"},
            {"@type": "ListItem", "position": 3, "name": article['title'][:50], "item": post_url}
        ]
    }, ensure_ascii=False)

    return f'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{article['title']} | CustomBroker.ge</title>
<meta name="description" content="{article['meta']}">
<link rel="canonical" href="{post_url}">
<meta property="og:title" content="{article['title']}">
<meta property="og:description" content="{article['meta']}">
<meta property="og:url" content="{post_url}">
<meta property="og:type" content="article">
<meta name="keywords" content="{topic['keywords']}">
<meta name="robots" content="index, follow">
<meta name="author" content="CustomBroker.ge">
<script type="application/ld+json">{schema}</script>
<script type="application/ld+json">{schema_breadcrumb}</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
:root{{--navy:#0d1f3c;--gold:#c8a96e;--gold2:#b8913e}}
body{{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#333;background:#f8f9fa}}
nav{{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(13,31,60,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(200,169,110,.15);padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between}}
.nav-logo{{color:#fff;font-weight:800;font-size:18px;text-decoration:none}}
.nav-logo span{{color:var(--gold)}}
.nav-links{{display:flex;gap:24px;align-items:center}}
.nav-links a{{color:rgba(255,255,255,.8);text-decoration:none;font-size:14px;transition:.2s}}
.nav-links a:hover{{color:var(--gold)}}
.nav-cta{{background:var(--gold);color:var(--navy)!important;padding:8px 18px;border-radius:8px;font-weight:700!important}}
.container{{max-width:820px;margin:0 auto;padding:90px 24px 60px}}
.breadcrumb{{display:flex;gap:8px;align-items:center;font-size:13px;color:#999;margin-bottom:28px;flex-wrap:wrap}}
.breadcrumb a{{color:#999;text-decoration:none}}
.breadcrumb a:hover{{color:var(--gold2)}}
.article-tag{{display:inline-block;background:rgba(200,169,110,.15);color:var(--gold2);font-size:12px;font-weight:700;padding:5px 12px;border-radius:20px;margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px}}
.article-title{{font-size:32px;font-weight:800;color:var(--navy);line-height:1.3;margin-bottom:14px}}
.article-meta{{font-size:14px;color:#999;margin-bottom:28px;display:flex;gap:20px;align-items:center;flex-wrap:wrap}}
.article-meta i{{color:var(--gold)}}
.article-intro{{font-size:17px;line-height:1.7;color:#555;border-left:4px solid var(--gold);padding:16px 20px;background:rgba(200,169,110,.06);border-radius:0 8px 8px 0;margin-bottom:32px}}
.article-body{{font-size:16px;line-height:1.8;color:#444}}
.article-body h2{{font-size:22px;font-weight:700;color:var(--navy);margin:36px 0 14px}}
.article-body p{{margin-bottom:18px}}
.article-body ul,.article-body ol{{margin:0 0 18px 22px}}
.article-body li{{margin-bottom:7px}}
.article-body .highlight{{background:rgba(200,169,110,.12);border-left:4px solid var(--gold);padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;font-size:15px}}
.article-body strong{{color:var(--navy)}}
.cta-box{{background:var(--navy);color:#fff;border-radius:16px;padding:32px;margin-top:48px;text-align:center}}
.cta-box h3{{font-size:22px;font-weight:700;margin-bottom:10px}}
.cta-box p{{color:rgba(255,255,255,.7);margin-bottom:20px;font-size:15px}}
.btn-gold{{background:var(--gold);color:var(--navy);padding:12px 28px;border-radius:10px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;font-size:15px}}
.btn-gold:hover{{background:var(--gold2)}}
.back-link{{display:inline-flex;align-items:center;gap:8px;color:var(--gold2);text-decoration:none;font-weight:600;margin-top:36px;font-size:14px}}
.back-link:hover{{color:var(--gold)}}
footer{{background:var(--navy);color:rgba(255,255,255,.5);text-align:center;padding:24px;font-size:13px;margin-top:60px}}
footer a{{color:var(--gold);text-decoration:none}}
@media(max-width:768px){{
  .article-title{{font-size:24px}}
  .nav-links{{display:none}}
  .container{{padding:80px 16px 40px}}
}}
</style>
</head>
<body>
<nav>
  <a href="/" class="nav-logo">Custom<span>Broker</span>.ge</a>
  <div class="nav-links">
    <a href="/#services">Услуги</a>
    <a href="/#how">Как работаем</a>
    <a href="/#pricing">Цены</a>
    <a href="/news/">Новости</a>
    <a href="/#contact" class="nav-cta">Консультация</a>
  </div>
</nav>
<div class="container">
  <div class="breadcrumb">
    <a href="/">Главная</a>
    <i class="fa-solid fa-chevron-right" style="font-size:10px"></i>
    <a href="/news/">Новости</a>
    <i class="fa-solid fa-chevron-right" style="font-size:10px"></i>
    <span>{article['title'][:55]}</span>
  </div>
  <span class="article-tag"><i class="fa-solid fa-file-contract"></i> {topic['tag']}</span>
  <h1 class="article-title">{article['h1'] or article['title']}</h1>
  <div class="article-meta">
    <span><i class="fa-regular fa-calendar"></i> {TODAY_RU}</span>
    <span><i class="fa-solid fa-building-columns"></i> CustomBroker.ge</span>
    <span><i class="fa-solid fa-clock"></i> 5 мин чтения</span>
  </div>
  <div class="article-intro">{article['intro']}</div>
  <div class="article-body">
    {article['content_html']}
  </div>
  <div class="cta-box">
    <h3>Нужна консультация по таможне?</h3>
    <p>Рассчитаем пошлины и подготовим документы для вашего груза за 30 минут — бесплатно.</p>
    <a href="/#contact" class="btn-gold"><i class="fa-solid fa-phone"></i> Получить консультацию</a>
  </div>
  <a href="/news/" class="back-link"><i class="fa-solid fa-arrow-left"></i> Все новости</a>
</div>
<footer>
  <p>© {date.today().year} <a href="/">CustomBroker.ge</a> — Таможенный брокер в Грузии. Лицензия Службы доходов Грузии.</p>
</footer>
</body>
</html>'''

def update_news_index(new_articles: list):
    """Обновляем index.html раздела новостей"""
    index_path = NEWS_DIR / 'index.html'
    if not index_path.exists():
        return

    idx_html = index_path.read_text(encoding='utf-8')

    for art in reversed(new_articles):
        card = f"""
    <a href="/news/{art['slug']}.html" class="news-card">
      <div class="news-img"><i class="fa-solid fa-file-contract" style="color:var(--gold)"></i></div>
      <div class="news-body">
        <span class="news-tag">{art['tag']}</span>
        <div class="news-date">{art['date_ru']}</div>
        <div class="news-title">{art['title']}</div>
        <div class="news-excerpt">{art['meta'][:150]}</div>
        <span class="read-more"><i class="fa-solid fa-arrow-right"></i> Читать</span>
      </div>
    </a>"""

        idx_html = idx_html.replace('<div class="news-grid">', '<div class="news-grid">' + card, 1)

    index_path.write_text(idx_html, encoding='utf-8')
    print(f"  ✓ news/index.html обновлён")

def update_sitemap(new_slugs: list):
    """Добавляем новые URL в sitemap.xml"""
    sitemap_path = BASE / 'sitemap.xml'
    if not sitemap_path.exists():
        print("  ⚠ sitemap.xml не найден — пропускаем")
        return

    content = sitemap_path.read_text(encoding='utf-8')
    new_entries = ''
    for slug in new_slugs:
        url = f'{SITE_URL}/news/{slug}.html'
        if url not in content:
            new_entries += f'''  <url>
    <loc>{url}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n'''

    if new_entries:
        content = content.replace('</urlset>', new_entries + '</urlset>')
        sitemap_path.write_text(content, encoding='utf-8')
        print(f"  ✓ sitemap.xml обновлён (+{len(new_slugs)} URL)")

def git_push(files: list, message: str):
    """Коммит и пуш через Git"""
    token = GITHUB_TOKEN
    if not token:
        print("  ⚠ GITHUB_TOKEN не задан — git push пропущен")
        return False
    try:
        subprocess.run(['git', '-C', str(BASE), 'add'] + files, check=True)
        subprocess.run(['git', '-C', str(BASE), 'commit', '-m', message], check=True)
        # Подставляем токен в remote URL
        result = subprocess.run(['git', '-C', str(BASE), 'remote', 'get-url', 'origin'],
                                capture_output=True, text=True, check=True)
        remote_url = result.stdout.strip()
        subprocess.run(['git', '-C', str(BASE), 'push', 'origin', 'master'],
                       check=True, capture_output=True)
        print(f"  ✓ git push выполнен")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ✗ git error: {e}")
        return False

def update_homepage_news(new_article: dict, topic: dict, date_ru: str):
    """Обновляем LATEST_NEWS в index.html — всегда показывает 3 последних"""
    index_path = BASE / 'index.html'
    if not index_path.exists():
        return
    html = index_path.read_text(encoding='utf-8')

    # Находим текущий массив LATEST_NEWS
    m = re.search(r'var LATEST_NEWS = \[(.*?)\];', html, re.DOTALL)
    if not m:
        print("  ⚠ LATEST_NEWS не найден в index.html")
        return

    try:
        # JS объекты без кавычек у ключей — парсим через regex по каждому полю
        js_content = m.group(1)
        current = []
        for obj_str in re.findall(r'\{([^}]+)\}', js_content, re.DOTALL):
            obj = {}
            for key in ['url', 'tag', 'icon', 'date', 'title', 'excerpt']:
                km = re.search(rf'{key}\s*:\s*"([^"]*)"', obj_str)
                if km:
                    obj[key] = km.group(1)
            if obj.get('url'):
                current.append(obj)
    except Exception:
        current = []

    # Новая статья — вставляем первой
    new_entry = {
        "url": f"/news/{new_article['slug']}.html",
        "tag": topic['tag'],
        "icon": "fa-file-contract",
        "date": date_ru,
        "title": new_article['title'],
        "excerpt": new_article['meta'][:150]
    }

    # Оставляем только 3 — новая + 2 старых
    current.insert(0, new_entry)
    current = current[:3]

    # Сериализуем обратно в JS-формат
    def obj_to_js(o):
        pairs = [f'          {k}:"{v}"' for k, v in o.items()]
        return "        {\n" + ",\n".join(pairs) + "\n        }"

    new_js = "\n" + ",\n".join([obj_to_js(o) for o in current]) + "\n      "
    html = re.sub(r'var LATEST_NEWS = \[.*?\];', f'var LATEST_NEWS = [{new_js}];', html, flags=re.DOTALL)

    index_path.write_text(html, encoding='utf-8')
    print(f"  ✓ index.html — LATEST_NEWS обновлён (3 последних)")

def main(title_hint=None, desc=None, keywords=None):
    print(f"\n📰 CustomBroker AutoNews — {TODAY}")
    print("=" * 50)

    if title_hint:
        topic = {'title_hint': title_hint, 'keywords': keywords or '', 'tag': 'Таможня', 'tag_slug': 'tamoznya'}
    else:
        topic = get_today_topic()

    print(f"  Тема: {topic['title_hint']}")

    # Генерируем статью
    print("  Генерирую статью через Claude Haiku...")
    article = generate_article(topic)

    if not article.get('title') or not article.get('content_html'):
        print("  ✗ Ошибка генерации — пустой ответ от AI")
        return

    # Slug из заголовка + дата для уникальности
    slug = make_slug(article['title']) + '-' + TODAY.replace('-', '')
    print(f"  Slug: {slug}")

    # Создаём HTML файл статьи
    html = build_article_html(topic, article, slug)
    article_path = NEWS_DIR / f'{slug}.html'
    article_path.write_text(html, encoding='utf-8')
    print(f"  ✓ {article_path.name} создан ({len(html)} байт)")

    # Обновляем индекс новостей
    date_ru_short = datetime.now().strftime('%-d %b %Y').replace(
        'Jan','янв').replace('Feb','фев').replace('Mar','мар').replace('Apr','апр').replace(
        'May','май').replace('Jun','июн').replace('Jul','июл').replace('Aug','авг').replace(
        'Sep','сен').replace('Oct','окт').replace('Nov','ноя').replace('Dec','дек')

    update_news_index([{
        'slug': slug,
        'title': article['title'],
        'meta': article['meta'],
        'tag': topic['tag'],
        'date_ru': date_ru_short
    }])

    # Обновляем sitemap
    update_sitemap([slug])

    # Обновляем LATEST_NEWS на главной странице
    update_homepage_news(
        {'slug': slug, 'title': article['title'], 'meta': article['meta']},
        topic, date_ru_short
    )

    # Git push
    files_to_commit = [
        f'news/{slug}.html',
        'news/index.html',
        'sitemap.xml'
    ]
    msg = f"news({TODAY}): {article['title'][:60]}"
    git_push([str(p) for p in files_to_commit], msg)

    print(f"\n✅ Готово! Статья: {SITE_URL}/news/{slug}.html")
    print(f"   Заголовок: {article['title']}")
    print(f"   Тег: {topic['tag']}")

if __name__ == '__main__':
    import sys
    args = sys.argv[1:]
    if len(args) >= 3:
        main(args[0], args[1], args[2])
    elif len(args) == 1:
        main(args[0])
    else:
        main()
