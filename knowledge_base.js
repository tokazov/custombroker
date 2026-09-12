// CustomAI Knowledge Base v1.0
// Last updated: 2025-06-01
// Sources: matsne.gov.ge, rs.ge, nfa.gov.ge, ncdc.gov.ge, economy.ge, fiz.com.ge
// Verification: manual, next check due 2025-09-01

const KNOWLEDGE_BASE = [

// ══════════════════════════════════════════
// РАЗДЕЛ 1: НДС И БАЗОВЫЕ СТАВКИ
// ══════════════════════════════════════════
{
  id: "ndv-001",
  title: "Налоговый кодекс Грузии, ст.168 — НДС на импорт",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Стандартная ставка НДС при импорте товаров в Грузию — 18%. Исчисляется от таможенной стоимости CIF плюс сумма ввозной пошлины плюс акциз (если применяется). НДС уплачивается до выпуска товара с таможни.",
  summary_en: "Standard VAT rate on imports into Georgia is 18%, calculated on CIF customs value plus import duty plus excise.",
  hs_codes: [],
  topics: ["ндс","импорт","ставки"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "ndv-002",
  title: "Налоговый кодекс Грузии, ст.168(3) — освобождение от НДС при импорте",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "От НДС при импорте освобождены: лекарственные препараты (HS гл.30), активная медтехника (HS 9018, 9019, 9021, 9022), базовые продукты питания — хлеб, мука (HS 1101), сахар (HS 1701), растительное масло (HS 15), свежие овощи и фрукты (HS гл.07, 08), зерно (HS гл.10), молоко и молочные продукты (HS 0401–0406), мясо (HS гл.02), рыба (HS гл.03). НДС = 0% на все эти позиции.",
  summary_en: "VAT-exempt imports: medicines (HS ch.30), medical devices (HS 9018,9019,9021,9022), bread, flour, sugar, vegetable oil, fresh vegetables/fruits, grain, dairy, meat, fish.",
  hs_codes: ["3001","3002","3003","3004","9018","9019","9021","9022","1101","1701","0201","0301"],
  topics: ["ндс","освобождение","медицина","продукты"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "ndv-003",
  title: "НДС при экспорте из Грузии — нулевая ставка",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "При экспорте товаров из Грузии применяется нулевая ставка НДС (0%). Это стандартная международная практика. Экспортёр может применить вычет входного НДС. Нулевая ставка подтверждается таможенной декларацией на вывоз.",
  summary_en: "Georgia applies 0% VAT on exports. Exporters can reclaim input VAT. Zero rate confirmed by export customs declaration.",
  hs_codes: [],
  topics: ["ндс","экспорт","нулевая ставка"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-001",
  title: "Тарифный кодекс Грузии — три ставки ввозной пошлины",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "В Грузии действуют три ставки ввозной таможенной пошлины: 0%, 5% и 12%. Ставка определяется по коду ТН ВЭД (HS-коду) товара. Подавляющее большинство товаров — около 90% тарифных линий — облагается по ставке 0%. Ставка 5% применяется к отдельным сельхозтоварам. Ставка 12% — к ряду потребительских товаров. Официальный тариф: rs.ge.",
  summary_en: "Georgia has three import duty rates: 0% (most goods ~90% of lines), 5% (some agricultural goods), 12% (selected consumer goods).",
  hs_codes: [],
  topics: ["пошлина","ставки","классификация"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-002",
  title: "Пошлина 0% — перечень основных товарных групп",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "Нулевая ввозная пошлина (0%) применяется к: легковым и грузовым автомобилям (HS 8703, 8704), электронике и компьютерам (HS гл.84, 85), промышленному оборудованию (HS гл.84), химическому сырью (HS гл.28, 29), фармацевтике (HS гл.30), топливу и нефтепродуктам (HS 2710), удобрениям (HS гл.31), металлопрокату (HS гл.72, 73), строительным материалам (цемент, стекло, кабель), тканям-сырью (HS гл.50–55).",
  summary_en: "0% duty: cars (8703,8704), electronics (ch.84,85), industrial equipment, chemicals, pharma, fuel, fertilizers, steel, construction materials.",
  hs_codes: ["8703","8704","8471","8517","3004","2710"],
  topics: ["пошлина","нулевая ставка","электроника","авто"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-003",
  title: "Пошлина 5% — сельскохозяйственные товары",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "Ставка 5% применяется к отдельным сельскохозяйственным товарам: мука пшеничная (HS 1101), крупы и хлопья (HS 1104), некоторые виды растительных масел (HS 1507–1515), отдельные овощи переработанные, часть позиций гл.06 (живые растения и черенки). Конкретные позиции следует проверять в официальном тарифе rs.ge по точному HS-коду.",
  summary_en: "5% duty applies to: wheat flour (HS 1101), certain cereals, some vegetable oils, specific agricultural products.",
  hs_codes: ["1101","1104","1507"],
  topics: ["пошлина","сельское хозяйство","продукты"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-004",
  title: "Пошлина 12% — потребительские товары",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "Ставка 12% применяется к: одежде трикотажной (HS гл.61), одежде тканой (HS гл.62), обуви (HS гл.64), мебели (HS 9401–9403), игрушкам (HS 9503), сантехническому фаянсу (HS 6910–6912), кожгалантерее и сумкам (HS гл.42), отдельным видам мяса и рыбы (HS гл.02, 03 — 12%), изделиям из пластика (HS гл.39 — частично). Уточняйте точную позицию на rs.ge.",
  summary_en: "12% duty: clothing (ch.61,62), footwear (ch.64), furniture (9401-9403), toys (9503), ceramic sanitaryware (6910-6912), leather goods.",
  hs_codes: ["6109","6209","6403","9401","9403","9503","6910"],
  topics: ["пошлина","одежда","мебель","потребительские товары"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-005",
  title: "Пошлина при экспорте из Грузии",
  url: "https://rs.ge",
  summary_ru: "При экспорте из Грузии пошлина = 0% для подавляющего большинства товаров. Исключение: лом чёрных металлов (HS 7204) — экспортная пошлина существует для ограничения вывоза. Для стандартных коммерческих грузов, готовой продукции, сельхозтоваров — экспортная пошлина не взимается. Экспорт из СЭЗ — пошлина также 0%.",
  summary_en: "Export duty = 0% for almost all goods. Exception: ferrous metal scrap (HS 7204). No duty on standard commercial exports or FIZ exports.",
  hs_codes: ["7204"],
  topics: ["экспорт","пошлина","нулевая ставка"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-006",
  title: "Таможенная стоимость — метод CIF",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Таможенная стоимость в Грузии определяется методом CIF (Cost, Insurance, Freight): стоимость товара по инвойсу + стоимость фрахта до грузинской границы + страховка. Пошлина = таможенная стоимость CIF × ставку%. НДС = (таможенная стоимость + пошлина + акциз) × 18%. Если таможня сочтёт инвойсную цену заниженной — применит корректировку по справочным ценам.",
  summary_en: "Customs value in Georgia = CIF method: invoice price + freight to Georgian border + insurance. Duty = CIF value × duty rate. VAT = (CIF + duty + excise) × 18%.",
  hs_codes: [],
  topics: ["таможенная стоимость","расчёт","cif"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "duty-007",
  title: "Сроки уплаты таможенных платежей",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "При импорте: все таможенные платежи (пошлина, НДС, акциз) уплачиваются до выпуска товара таможней. Без оплаты груз не выдаётся. При экспорте: специальных сборов нет, оплачивается только брокерская услуга. Способы оплаты: банковский перевод на счёт Службы доходов Грузии (rs.ge), через банкоматы и платёжные терминалы.",
  summary_en: "Import: all duties (customs, VAT, excise) must be paid before goods release. Export: no payment required. Payment via bank transfer to Revenue Service.",
  hs_codes: [],
  topics: ["оплата","сроки","процедура"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 2: АКЦИЗЫ
// ══════════════════════════════════════════
{
  id: "excise-001",
  title: "Акциз на автомобили — формула расчёта",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Акцизный налог на ввоз автомобилей рассчитывается по формуле: объём двигателя (куб.см) × ставка (GEL/куб.см) × количество лет эксплуатации сверх 3-х льготных. Авто возрастом до 3 лет — акциз минимальный. Электромобили до 2026 года — акциз 0. Акциз уплачивается вместе с другими таможенными платежами до выпуска.",
  summary_en: "Car excise = engine volume (cc) × rate (GEL/cc) × (years old − 3 grace years). EVs: 0 excise until 2026.",
  hs_codes: ["8703"],
  topics: ["акциз","авто","расчёт"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-002",
  title: "Ставки акциза на автомобили — таблица 2024–2025",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ставки акциза на авто по объёму двигателя (за 1 куб.см за 1 год): до 3000 куб.см — 0.05 GEL; от 3001 до 4000 куб.см — 0.07 GEL; свыше 4000 куб.см — 0.10 GEL. Пример: авто 2.0л (2000 куб.см), возраст 7 лет → 2000 × 0.05 × (7−3) = 400 GEL акциза. Уточняйте актуальные ставки на rs.ge или у брокера.",
  summary_en: "Car excise rates: up to 3000cc — 0.05 GEL/cc/yr; 3001-4000cc — 0.07; over 4000cc — 0.10. Example: 2.0L, 7yo → 2000×0.05×4 = 400 GEL.",
  hs_codes: ["8703"],
  topics: ["акциз","авто","ставки"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-003",
  title: "Акциз на авто старше 8 лет — повышение с 2025 года",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "С 2025 года для автомобилей возрастом свыше 8 лет введён повышающий коэффициент к акцизу. Базовый акциз умножается на 1.5. Это существенно увеличивает стоимость растаможки старых авто. Электромобили под эту меру не подпадают (акциз 0 до 2026). Рекомендуем уточнять расчёт у специалиста до покупки авто.",
  summary_en: "From 2025: cars older than 8 years get excise ×1.5 multiplier. EVs exempt (0 excise until 2026). Verify current amounts before purchasing.",
  hs_codes: ["8703"],
  topics: ["акциз","авто","2025"],
  last_verified: "2025-06-01",
  effective_date: "2025-01-01"
},
{
  id: "excise-004",
  title: "Акциз на бензин — ставка",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Акцизный налог на бензин (HS 2710.12): 0.594 GEL за литр. Применяется при импорте бензина в Грузию. Уплачивается импортёром-оператором АЗС или трейдером нефтепродуктов. Для частных лиц, ввозящих авто с баком — акциз на топливо в баке не взимается.",
  summary_en: "Petrol (HS 2710.12) excise: 0.594 GEL/litre. Paid by importers/fuel traders. Private cars — no excise on tank fuel.",
  hs_codes: ["2710"],
  topics: ["акциз","топливо","бензин"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-005",
  title: "Акциз на дизельное топливо — ставка",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Акцизный налог на дизельное топливо (HS 2710.19): 0.368 GEL за литр. Ниже чем на бензин, что отражает политику поддержки грузового транспорта. Взимается с коммерческих импортёров топлива.",
  summary_en: "Diesel (HS 2710.19) excise: 0.368 GEL/litre. Lower than petrol to support freight transport.",
  hs_codes: ["2710"],
  topics: ["акциз","топливо","дизель"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-006",
  title: "Акциз на природный газ",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Акцизный налог на сжиженный нефтяной газ (LPG, HS 2711.13): 0.2 GEL за 1 кг. На сжатый природный газ (CNG, HS 2711.21): 0.15 GEL за 1 куб.м. Применяется при коммерческом импорте. Газобаллонные автомобили частных лиц — без акциза на заправку.",
  summary_en: "LPG (HS 2711.13): 0.20 GEL/kg excise. CNG (HS 2711.21): 0.15 GEL/m³. Commercial imports only.",
  hs_codes: ["2711"],
  topics: ["акциз","газ","топливо"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-007",
  title: "Акциз на алкогольную продукцию",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ставки акциза на алкоголь (HS 2203–2208): пиво — 0.15 GEL/литр; вино тихое и игристое — 0.30 GEL/литр; вермут и аналоги — 0.80 GEL/литр; спирт этиловый и крепкие напитки (>25% об.) — 2.00 GEL/литр. Дополнительно: НДС 18%. Импортная пошлина на большинство алкоголя — 0%.",
  summary_en: "Alcohol excise: beer 0.15 GEL/L; still/sparkling wine 0.30 GEL/L; vermouth 0.80 GEL/L; spirits (>25%) 2.00 GEL/L. Plus 18% VAT. Import duty usually 0%.",
  hs_codes: ["2203","2204","2205","2206","2207","2208"],
  topics: ["акциз","алкоголь","вино","ставки"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "excise-008",
  title: "Акциз на табак и сигареты",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ставки акциза на табачные изделия: сигареты (HS 2402.20) — 2.00 GEL за пачку 20 штук + 15% от максимальной розничной цены; сигары (HS 2402.10) — 3.50 GEL/штука; табак курительный (HS 2403.19) — 2.50 GEL/100г; нагреваемый табак (стики) — отдельная ставка. Обязательна маркировка акцизными марками.",
  summary_en: "Cigarettes excise: 2.00 GEL/pack of 20 + 15% of max retail price. Cigars: 3.50 GEL/pc. Smoking tobacco: 2.50 GEL/100g. Excise stamps required.",
  hs_codes: ["2402","2403"],
  topics: ["акциз","табак","сигареты"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 3: СЭЗ И ФИЗ
// ══════════════════════════════════════════
{
  id: "sez-001",
  title: "СЭЗ Поти (Free Industrial Zone) — налоговые льготы",
  url: "https://fiz.com.ge",
  summary_ru: "Свободная индустриальная зона Поти (Poti FIZ): 0% ввозная пошлина на товары, ввозимые в зону; 0% НДС на операции внутри зоны; 0% налог на прибыль компаний-резидентов; 0% налог на имущество; 0% налог на дивиденды при реинвестировании. Зона работает с 2008 года, инфраструктура: склады, холодильники, производственные цеха. Оператор: DP World.",
  summary_en: "Poti FIZ: 0% import duty, 0% VAT, 0% corporate income tax, 0% property tax, 0% dividend tax on reinvestment. Operated by DP World since 2008.",
  hs_codes: [],
  topics: ["сэз","поти","льготы","реэкспорт"],
  last_verified: "2025-06-01",
  effective_date: "2008-01-01"
},
{
  id: "sez-002",
  title: "СЭЗ Кутаиси (Kutaisi Free Industrial Zone) — условия",
  url: "https://economy.ge",
  summary_ru: "Свободная индустриальная зона Кутаиси: аналогичные налоговые льготы — 0% пошлина, 0% НДС, 0% налог на прибыль. Специализация — лёгкая промышленность, сборка, деревообработка, текстиль. Расположена в 220 км от Тбилиси. Площадь 200+ га. Хорошее ж/д и автомобильное сообщение. Целевой рынок — производство для экспорта в ЕС (DCFTA) и Турцию.",
  summary_en: "Kutaisi FIZ: same 0% duty/VAT/income tax benefits. Specializes in light manufacturing, assembly, textiles. 220km from Tbilisi, good rail/road access.",
  hs_codes: [],
  topics: ["сэз","кутаиси","производство","льготы"],
  last_verified: "2025-06-01",
  effective_date: "2012-01-01"
},
{
  id: "sez-003",
  title: "ФИЗ vs СЭЗ — различия и применение",
  url: "https://fiz.com.ge",
  summary_ru: "В Грузии термины FIZ (Free Industrial Zone) и SEZ (Special Economic Zone) используются почти взаимозаменяемо. FIZ Поти и FIZ Кутаиси — это зоны со специальным налоговым режимом для производства и реэкспорта. Ключевое отличие от бондовых складов (customs warehouse): в FIZ разрешено производство и переработка, в бондовом — только хранение без переработки.",
  summary_en: "FIZ (Free Industrial Zone) allows manufacturing/processing. Bonded warehouse = storage only. FIZ Poti and Kutaisi both allow production and re-export.",
  hs_codes: [],
  topics: ["сэз","физ","различия"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "sez-004",
  title: "Разрешённые операции в СЭЗ Грузии",
  url: "https://fiz.com.ge",
  summary_ru: "В СЭЗ/ФИЗ Грузии разрешено: хранение товаров без уплаты пошлин; переработка и производство готовой продукции; сортировка, упаковка, маркировка; реэкспорт в третьи страны без уплаты пошлин; торговля между резидентами зоны; экспортно-импортные операции через зону. Запрещено: розничная торговля физлицам без подачи импортной декларации в Грузию.",
  summary_en: "FIZ permitted: storage, manufacturing, processing, sorting/packing, re-export to third countries, inter-zone trade. Prohibited: retail to individuals without import declaration.",
  hs_codes: [],
  topics: ["сэз","операции","хранение","производство"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "sez-005",
  title: "СЭЗ: выход товара на грузинский рынок",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "При перемещении товара из СЭЗ/ФИЗ на грузинский рынок (внутреннее потребление) необходимо подать полноценную импортную декларацию и уплатить все таможенные платежи: пошлину по ставке для данного HS-кода + НДС 18% + акциз (если применяется). Расчёт ведётся от рыночной стоимости товара на момент выпуска. Льготы СЭЗ при этом не действуют.",
  summary_en: "Moving goods from FIZ to Georgian domestic market requires full import declaration + paying all duties (import duty + 18% VAT + excise). FIZ benefits don't apply.",
  hs_codes: [],
  topics: ["сэз","импорт","грузинский рынок"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "sez-006",
  title: "Документы для работы в СЭЗ Поти",
  url: "https://fiz.com.ge",
  summary_ru: "Для резидента СЭЗ: контракт с оператором зоны (DP World), лицензия резидента FIZ, инвойс на ввозимый товар, упаковочный лист, транспортная накладная (CMR/B/L). При ввозе товаров в зону — зональная декларация (не стандартная таможенная). При реэкспорте — экспортная декларация с указанием зоны происхождения. Брокер помогает оформить все зональные документы.",
  summary_en: "FIZ residency: contract with zone operator + FIZ license. Imports into zone: zone declaration (not standard customs). Re-export: export declaration. Broker assists with zone documents.",
  hs_codes: [],
  topics: ["сэз","документы","процедура"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "sez-007",
  title: "Реэкспорт из СЭЗ в СНГ — оптимальная схема",
  url: "https://fiz.com.ge",
  summary_ru: "Схема реэкспорта через СЭЗ Поти: товар из Китая/Турции/ЕС → ввозится в ФИЗ Поти без пошлин → хранится или перерабатывается → отправляется напрямую в Россию, Казахстан, Армению, Азербайджан. Пошлины в Грузии = 0. Покупатель в СНГ платит пошлины по законодательству своей страны. Это законная и распространённая схема параллельного импорта.",
  summary_en: "Poti FIZ re-export: goods arrive from China/Turkey/EU → stored at FIZ duty-free → shipped to CIS countries. 0% Georgian duties. Legal and common parallel import scheme.",
  hs_codes: [],
  topics: ["сэз","реэкспорт","снг","поти"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "sez-008",
  title: "СЭЗ: консультация и вступление — как начать",
  url: "https://fiz.com.ge",
  summary_ru: "Для начала работы в СЭЗ Поти: связаться с оператором DP World Poti (fiz.com.ge), согласовать вид деятельности и площади, подписать договор аренды склада/площадки. Регистрация юрлица в Грузии необязательна — можно работать через иностранную компанию. Наша компания CustomBroker Georgia оказывает консультации по оформлению грузов для СЭЗ бесплатно.",
  summary_en: "To join Poti FIZ: contact DP World Poti (fiz.com.ge), agree on activity type and space, sign lease. No Georgian entity required. Free consulting available.",
  hs_codes: [],
  topics: ["сэз","регистрация","начало работы"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 4: ДОКУМЕНТЫ ДЛЯ ИМПОРТА
// ══════════════════════════════════════════
{
  id: "docs-001",
  title: "Стандартный пакет документов для импорта в Грузию",
  url: "https://rs.ge",
  summary_ru: "Минимальный стандартный пакет для таможенного оформления импорта: 1) Коммерческий инвойс (с описанием товара, количеством, ценой, условиями поставки Incoterms); 2) Упаковочный лист / packing list; 3) Транспортная накладная: CMR (автотранспорт), коносамент B/L (море), авианакладная AWB (авиа). Для части товаров требуются дополнительные разрешения и сертификаты.",
  summary_en: "Minimum import documents: commercial invoice (description, quantity, price, Incoterms) + packing list + transport document (CMR/B/L/AWB). Additional permits for specific goods.",
  hs_codes: [],
  topics: ["документы","импорт","инвойс","cmr"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-002",
  title: "Сертификат происхождения — когда нужен и какие бывают",
  url: "https://rs.ge",
  summary_ru: "Сертификат происхождения необходим для применения преференциальных (льготных) ставок пошлин по соглашениям о свободной торговле. Виды: Form CT-1 — для стран СНГ/ЕАЭС (Россия, Казахстан и др.); EUR.1 — для товаров из ЕС по DCFTA; Form G — для товаров из Китая по FTA. Без сертификата применяется базовая ставка (MFN). Сертификат выдаёт торгово-промышленная палата страны экспортёра.",
  summary_en: "Certificate of Origin needed for preferential tariff rates: CT-1 for CIS/EAEU, EUR.1 for EU (DCFTA), Form G for China FTA. Without it — MFN (standard) rates apply.",
  hs_codes: [],
  topics: ["документы","сертификат происхождения","преференции","fta"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-003",
  title: "Фитосанитарный сертификат — требования NFA",
  url: "https://nfa.gov.ge",
  summary_ru: "Фитосанитарный сертификат выдаётся уполномоченным органом страны-экспортёра и подтверждает отсутствие карантинных вредителей. Обязателен для: свежих овощей и фруктов (HS гл.07, 08), живых растений и черенков (HS гл.06), зерна и семян (HS гл.10, 12), сухофруктов и орехов. Грузинский уполномоченный орган — Национальное агентство продовольствия (NFA, nfa.gov.ge). При отсутствии сертификата — товар может быть задержан или возвращён.",
  summary_en: "Phytosanitary certificate (from exporting country's authority): required for fresh vegetables/fruits, live plants, grain, seeds, dried fruits. Georgian authority: NFA (nfa.gov.ge).",
  hs_codes: ["0601","0602","0701","0801","1001","1201"],
  topics: ["документы","фитосанитарный","растения","продукты"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-004",
  title: "Ветеринарный сертификат — требования NFA",
  url: "https://nfa.gov.ge",
  summary_ru: "Ветеринарный (санитарный) сертификат выдаётся государственной ветеринарной службой страны-экспортёра. Обязателен для: мяса и субпродуктов (HS гл.02), рыбы и морепродуктов (HS гл.03), молочных продуктов (HS 0401–0406), яиц (HS 0407), живых животных (HS гл.01). Без ветсертификата товар задерживается на границе до получения документа или возвращается. Ветеринарный контроль в Грузии осуществляет NFA.",
  summary_en: "Veterinary certificate from exporting country required for: meat (ch.02), fish (ch.03), dairy (0401-0406), eggs, live animals. Georgian control: NFA (nfa.gov.ge).",
  hs_codes: ["0101","0201","0301","0401","0407"],
  topics: ["документы","ветеринарный","мясо","рыба"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-005",
  title: "Регистрация лекарств в НЦЭЛМП — обязательная процедура",
  url: "https://ncdc.gov.ge",
  summary_ru: "Все лекарственные препараты (HS 3001–3006) для ввоза в Грузию с целью продажи или применения должны быть зарегистрированы в Национальном центре по контролю заболеваний и общественного здоровья (НЦЭЛМП/NCDC, ncdc.gov.ge). Срок регистрации: 3–6 месяцев для новых препаратов. Без регистрационного удостоверения таможня не выпустит груз. Личное использование (до 3 месячных доз) — без регистрации, с рецептом.",
  summary_en: "All medicines (HS 3001-3006) for sale in Georgia must be registered with NCDC (ncdc.gov.ge). Registration: 3-6 months. Personal use (up to 3-month supply) with prescription — no registration needed.",
  hs_codes: ["3001","3002","3003","3004","3005","3006"],
  topics: ["документы","лекарства","регистрация","нцэлмп"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-006",
  title: "Медицинская техника — регистрация и уведомление в НЦЭЛМП",
  url: "https://ncdc.gov.ge",
  summary_ru: "Активная медицинская техника (работает от электричества или иного источника энергии): HS 9018, 9019, 9021, 9022 — требует регистрации в НЦЭЛМП. Пассивная медтехника (HS 9020, перевязочные материалы HS 3005) — уведомительная процедура, без полной регистрации. Расходные медматериалы (перчатки, маски) — только инвойс. НДС = 0%, пошлина = 0% для всей медтехники.",
  summary_en: "Active medical devices (HS 9018,9019,9021,9022): NCDC registration required. Passive devices: notification only. Consumables: invoice only. 0% duty + 0% VAT.",
  hs_codes: ["9018","9019","9020","9021","9022"],
  topics: ["документы","медтехника","регистрация"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-007",
  title: "Документы на ввоз автомобиля в Грузию",
  url: "https://rs.ge",
  summary_ru: "Для таможенного оформления автомобиля: 1) ПТС или автомобильный Title (американские авто) / свидетельство о регистрации страны отправки; 2) Коммерческий инвойс (договор купли-продажи) с ценой в USD/EUR; 3) CMR или коносамент B/L (при морской перевозке); 4) Страховой полис. Если авто ввозит не владелец — нотариальная доверенность. Брокер проверит комплект до подачи декларации.",
  summary_en: "Car import documents: vehicle title/registration certificate + purchase invoice + CMR or B/L + insurance. If non-owner imports: notarized power of attorney.",
  hs_codes: ["8703"],
  topics: ["документы","авто","импорт"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-008",
  title: "Разрешение МГБ — товары двойного назначения",
  url: "https://ssg.gov.ge",
  summary_ru: "Разрешение Службы государственной безопасности Грузии (МГБ/SSG) требуется для: средств шифрования и криптографии; специальных технических средств слежки; приборов ночного видения и тепловизоров; лазерного оборудования военного класса; беспилотных летательных аппаратов (дронов) профессионального класса; товаров из санкционного списка двойного назначения. Срок рассмотрения: 15–30 рабочих дней.",
  summary_en: "SSG/MGB permit required for: encryption devices, surveillance equipment, night vision, military-grade lasers, professional drones, dual-use controlled items. Processing: 15-30 business days.",
  hs_codes: [],
  topics: ["документы","разрешение","мгб","двойное назначение"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-009",
  title: "Разрешение Министерства экономики Грузии",
  url: "https://economy.ge",
  summary_ru: "Разрешение Министерства экономики и устойчивого развития Грузии требуется для: прекурсоров наркотических веществ (Список I и II ООН); отдельных химических веществ двойного назначения; пестицидов и гербицидов; отходов и вторичного сырья (в рамках Базельской конвенции). Разовое или периодическое разрешение. Срок получения: 2–4 недели.",
  summary_en: "Ministry of Economy permit for: drug precursors (UN List I/II), dual-use chemicals, pesticides, hazardous waste (Basel Convention). Processing: 2-4 weeks.",
  hs_codes: [],
  topics: ["документы","разрешение","химия","прекурсоры"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "docs-010",
  title: "Стандарты и сертификация товаров для рынка Грузии",
  url: "https://meconomy.ge",
  summary_ru: "Грузия не требует обязательной сертификации для большинства товаров при таможенном оформлении. Однако для продажи на грузинском рынке ряд товаров должен соответствовать техническим регламентам: игрушки (CE), электрооборудование (CE или GOST), строительные материалы (GOST либо EN). Сертификат CE европейских производителей принимается. Пожарная и электробезопасность — требования МВД. Подтверждение соответствия — не таможенная процедура, а рыночный надзор.",
  summary_en: "Most goods need no certification for customs clearance. For retail in Georgia: toys/electrics/construction may need CE or GOST. CE certificates accepted. Market surveillance, not customs.",
  hs_codes: [],
  topics: ["документы","сертификация","стандарты","рынок"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 5: ТРАНЗИТ T1
// ══════════════════════════════════════════
{
  id: "transit-001",
  title: "Транзитная декларация T1 — оформление у нас",
  url: "https://rs.ge",
  summary_ru: "✅ НОВАЯ УСЛУГА: CustomBroker.ge теперь оформляет транзитные декларации T1. Транзитная декларация T1 оформляется при перемещении иностранного груза через Грузию без уплаты пошлин и НДС. Товар следует по определённому маршруту с таможенными пломбами. Финансовое обеспечение (гарантия) — на сумму потенциальных пошлин. По завершении транзита — закрытие декларации на таможне назначения. Работаем на всех КПП: Красный мост (Азербайджан), Садахло (Армения), Казбеги (Россия), порт Поти, порт Батуми. Стоимость: от 100 $ за декларацию, от 80 $ для перевозчиков 10+/мес.",
  summary_en: "NEW SERVICE: CustomBroker.ge now issues T1 transit declarations. Moves foreign goods through Georgia duty-free on fixed route with customs seals. Financial guarantee required. Works at all checkpoints: Red Bridge (AZ), Sadakhlo (AM), Kazbegi (RU), Poti/Batumi ports. Price: 100–150 GEL per declaration.",
  hs_codes: [],
  topics: ["транзит","t1","декларация","процедура","транзитное оформление"],
  last_verified: "2026-09-06",
  effective_date: "2026-09-06"
},
{
  id: "transit-002",
  title: "Грузия как транзитный коридор — маршруты",
  url: "https://rs.ge",
  summary_ru: "Грузия — ключевой транзитный узел на маршруте Восток–Запад: Китай → Казахстан/Азербайджан → порт Алят → паромная переправа → порт Поти/Батуми → Грузия (автодорога/ж/д) → Турция/Европа. Также: Иран → Армения → Грузия → Европа. Основные транзитные маршруты: Красный мост (Азербайджан), Садахло (Армения), Казбеги (Россия — только грузовой, ограниченный режим), порт Поти, порт Батуми.",
  summary_en: "Georgia as transit hub: China→Kazakhstan/Azerbaijan→ferry→Poti/Batumi→Turkey/EU. Also Iran→Armenia→Georgia→EU. Key crossings: Red Bridge (AZ), Sadakhlo (AM), Kazbegi (RU freight), Poti/Batumi ports.",
  hs_codes: [],
  topics: ["транзит","маршрут","коридор"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "transit-003",
  title: "Пограничные переходы и КПП Грузии",
  url: "https://rs.ge",
  summary_ru: "Действующие КПП Грузии: Красный мост / Садахло (граница с Азербайджаном и Арменией, загруженные, 24/7); Казбеги/Ларси (граница с Россией — только грузовые ТС, ограничения в зимний период); Карцахи (граница с Арменией, Джавахети); порты Поти и Батуми (морской грузооборот, паромы); аэропорты Тбилиси и Кутаиси (грузовые авиарейсы).",
  summary_en: "Georgian border crossings: Red Bridge/Sadakhlo (AZ/AM, 24/7), Kazbegi/Larsi (RU freight, winter restrictions), Kartsakhi (AM), Poti/Batumi ports, Tbilisi/Kutaisi airports.",
  hs_codes: [],
  topics: ["транзит","кпп","граница"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "transit-004",
  title: "Требования к транзитным грузам через Грузию",
  url: "https://rs.ge",
  summary_ru: "Для транзита через Грузию: груз должен быть упакован и опломбирован; транзитная декларация T1 оформляется на первом КПП въезда; маршрут и срок фиксируются в декларации (нельзя менять без уведомления таможни); при смене транспортного средства — перегрузочная декларация; финансовое обеспечение = потенциальная сумма пошлин и НДС. Транзит опасных грузов — дополнительные разрешения.",
  summary_en: "Transit requirements: sealed cargo, T1 declaration at entry point, fixed route and timeline, cargo transfer requires additional declaration, financial guarantee = potential duties/VAT.",
  hs_codes: [],
  topics: ["транзит","требования","пломбы"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "transit-005",
  title: "Сроки транзитной декларации",
  url: "https://rs.ge",
  summary_ru: "Максимальные сроки транзита через Грузию: автомобильный транспорт — до 30 дней; железнодорожный — до 30 дней; морской транзит через порт — до 60 дней; авиатранзит — до 10 дней. При необходимости продления — обращение в таможенный орган до истечения срока. Нарушение сроков без продления = уплата полных пошлин + штраф.",
  summary_en: "Transit deadlines: road/rail up to 30 days, sea via port up to 60 days, air transit up to 10 days. Extension possible upon application. Overrun = duties + penalty.",
  hs_codes: [],
  topics: ["транзит","сроки"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 6: СПЕЦИАЛЬНЫЕ ТОВАРЫ
// ══════════════════════════════════════════
{
  id: "goods-auto-001",
  title: "Легковые автомобили (HS 8703) — полный расчёт при ввозе",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ввоз легкового авто в Грузию: пошлина 0% (не взимается); НДС 18% от таможенной стоимости; акциз — по формуле (объём двигателя куб.см × ставку GEL/куб.см × количество лет свыше 3). Электромобили (HS 8703.80) — акциз 0 до 2026. Итоговая стоимость = НДС + акциз. Важно: нотариально заверенный перевод ПТС/Title при необходимости.",
  summary_en: "Car import: 0% duty + 18% VAT on customs value + excise (cc × rate × (years - 3)). EVs: 0 excise until 2026. Total = VAT + excise only.",
  hs_codes: ["8703"],
  topics: ["авто","импорт","акциз","ндс"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-auto-002",
  title: "Авто б/у — оценка таможенной стоимости",
  url: "https://rs.ge",
  summary_ru: "Таможня Грузии вправе скорректировать заявленную стоимость б/у автомобиля, если инвойс кажется заниженным. Используются рыночные базы (Eurotax, Schwacke, DAT, NADA, Kelley Blue Book). При корректировке доначисляется НДС и акциз. Оспорить корректировку можно в письменном заявлении с аргументами (техническое состояние, пробег, аварии). Реальная рыночная цена = надёжная база для декларирования.",
  summary_en: "Georgia customs may adjust declared value of used cars using Eurotax/Schwacke/NADA/KBB references. Additional VAT and excise assessed. Can appeal with written justification (condition, mileage).",
  hs_codes: ["8703"],
  topics: ["авто","оценка","таможенная стоимость"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-pharma-001",
  title: "Лекарственные препараты (HS 3001–3006) — импорт в Грузию",
  url: "https://ncdc.gov.ge",
  summary_ru: "Импорт лекарств в Грузию: пошлина 0%, НДС 0% — полное освобождение. Обязательное условие: регистрация препарата в НЦЭЛМП (ncdc.gov.ge) до начала ввоза. Без регистрационного удостоверения таможня товар не выпускает. Исключение — личное использование (до 3-месячного запаса при наличии рецепта). Регистрация нового препарата: 3–6 месяцев. Параллельный импорт уже зарегистрированных препаратов — разрешён.",
  summary_en: "Medicines import: 0% duty + 0% VAT. NCDC registration mandatory before import. Personal use (≤3 months supply + prescription) — no registration. New registration: 3-6 months.",
  hs_codes: ["3001","3002","3003","3004","3005","3006"],
  topics: ["лекарства","медицина","нцэлмп","импорт"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-med-001",
  title: "Медицинское оборудование — ввоз в Грузию",
  url: "https://ncdc.gov.ge",
  summary_ru: "Медтехника в Грузии: пошлина 0%, НДС 0%. Активная медтехника (HS 9018 — инструменты, 9019 — аппараты механотерапии, 9021 — протезы, 9022 — рентген и облучатели) — регистрация в НЦЭЛМП обязательна. Уведомительная процедура (быстрее регистрации). Расходные материалы типа перчаток (HS 4015), масок (HS 6307) — только стандартные документы. CE-маркировка принимается.",
  summary_en: "Medical equipment: 0% duty + 0% VAT. Active devices (9018,9019,9021,9022): NCDC registration. Notification procedure available. Consumables (gloves, masks): standard docs only. CE mark accepted.",
  hs_codes: ["9018","9019","9021","9022"],
  topics: ["медтехника","нцэлмп","импорт"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-food-001",
  title: "Продукты питания — ставки пошлин и НДС",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ключевые ставки на продукты: свежие овощи и фрукты (HS гл.07, 08) — пошлина 0%, НДС 0%; зерновые (HS гл.10) — пошлина 0-5%, НДС 0%; мука (HS 1101) — пошлина 5%, НДС 0%; сахар (HS 1701) — пошлина 12%, НДС 0%; растительное масло (HS гл.15) — пошлина 0-5%, НДС 0%; консервы (HS гл.20) — пошлина 0-12%, НДС 18% (готовые продукты); кондитерские изделия (HS гл.17, 18) — пошлина 0-12%, НДС 18%.",
  summary_en: "Food rates: fresh vegetables/fruits (ch.07,08) 0%+0%; grain (ch.10) 0-5%+0%; flour (1101) 5%+0%; sugar (1701) 12%+0%; vegetable oil 0-5%+0%; canned goods 0-12%+18%; confectionery 0-12%+18%.",
  hs_codes: ["0701","0801","1001","1101","1507","1601","1701"],
  topics: ["продукты","ставки","ндс","пошлина"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-meat-001",
  title: "Мясо и птица (HS 0201–0210) — особенности ввоза",
  url: "https://nfa.gov.ge",
  summary_ru: "Импорт мяса в Грузию: пошлина 12% (большинство видов мяса и птицы); НДС 0% (мясо — освобождено). Обязательны: ветеринарный сертификат страны-экспортёра (заверенный государственной ветслужбой) и ветеринарный пограничный контроль NFA при въезде в Грузию. Для халяль/кошерной продукции — дополнительный сертификат соответствия. Охлаждённое мясо — температурный режим при перевозке документируется.",
  summary_en: "Meat import: 12% duty + 0% VAT. Mandatory: exporting country veterinary certificate + NFA border inspection. Halal/kosher needs additional certificate. Chilled: documented temperature control.",
  hs_codes: ["0201","0202","0203","0204","0207","0210"],
  topics: ["мясо","ветеринарный","пошлина","нфа"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-alco-001",
  title: "Алкогольные напитки — пошлины, НДС, акциз",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Ввоз алкоголя в Грузию: пошлина 0% (для большинства вин и спиртных напитков); НДС 18%; акцизный налог: вино тихое/игристое — 0.30 GEL/л, пиво — 0.15 GEL/л, крепкий алкоголь (>25% об.) — 2.00 GEL/л. Итого на 1 литр вина: ~0.30 GEL акциза + 18% НДС от CIF. Для реэкспорта через СЭЗ — пошлина и НДС не взимаются. Маркировка акцизными марками при продаже в Грузии.",
  summary_en: "Alcohol import: 0% duty + 18% VAT + excise (wine 0.30 GEL/L; beer 0.15; spirits >25% = 2.00 GEL/L). FIZ re-export: no duties/VAT. Excise stamps required for Georgian retail.",
  hs_codes: ["2203","2204","2205","2207","2208"],
  topics: ["алкоголь","акциз","ндс","вино"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-clothes-001",
  title: "Одежда и текстиль (HS 61–62) — импорт",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "Ввоз одежды в Грузию: пошлина 12% (трикотажная одежда HS гл.61, тканая одежда HS гл.62); НДС 18%; итого налоговая нагрузка на партию одежды стоимостью CIF $10,000: пошлина $1,200 + НДС от $11,200 = $2,016; итого $3,216. Обувь (HS гл.64): аналогично 12%+18%. Для применения льготных ставок по DCFTA (ЕС) или FTA (Турция) — обязателен сертификат происхождения EUR.1.",
  summary_en: "Clothing (ch.61,62) + footwear (ch.64): 12% duty + 18% VAT. Example $10k CIF: duty $1,200 + VAT $2,016 = $3,216 total. EU DCFTA / Turkey FTA: EUR.1 certificate for reduced rates.",
  hs_codes: ["6101","6201","6301","6401"],
  topics: ["одежда","текстиль","обувь","12%"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-electronics-001",
  title: "Электроника (HS 84–85) — импорт в Грузию",
  url: "https://rs.ge/CommodityCodes-en",
  summary_ru: "Электроника и бытовая техника в Грузии: пошлина 0% практически для всех позиций — смартфоны (HS 8517.12), ноутбуки (HS 8471.30), телевизоры (HS 8528.72), холодильники (HS 8418.10), стиральные машины (HS 8450.11), кондиционеры (HS 8415.10), принтеры (HS 8443.32); НДС 18%; акциза нет. Стандартный документальный пакет (инвойс, CMR/AWB).",
  summary_en: "Electronics (ch.84-85): 0% duty + 18% VAT, no excise. Standard docs (invoice, CMR/AWB). Covers: smartphones, laptops, TVs, appliances, printers.",
  hs_codes: ["8517","8471","8528","8418","8450","8415"],
  topics: ["электроника","импорт","нулевая пошлина"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-chem-001",
  title: "Химические вещества — требования при ввозе",
  url: "https://rs.ge",
  summary_ru: "При ввозе химических веществ в Грузию обязателен паспорт безопасности (MSDS/SDS) на русском или английском языке — для опасных грузов (классы ADR/IMDG). Пошлина: большинство химического сырья — 0%; готовые химикаты (краски, клеи, чистящие средства HS гл.32-34) — 0-12%. НДС 18%. Прекурсоры наркотиков (Список ООН) — требуется разрешение Минэкономики. Отдельные вещества — заявка в МГБ.",
  summary_en: "Chemical imports: MSDS/SDS required for hazardous goods (ADR/IMDG classes). Duty: raw chemicals 0%, finished chemicals 0-12%. VAT 18%. Drug precursors: Ministry of Economy permit.",
  hs_codes: ["2801","2901","3208","3214","3402"],
  topics: ["химия","msds","требования","опасные грузы"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-cosm-001",
  title: "Косметика и парфюмерия (HS 3303–3307) — ввоз",
  url: "https://ncdc.gov.ge",
  summary_ru: "Импорт косметики в Грузию: пошлина 0%, НДС 18%. Косметика не требует регистрации, только уведомление в НЦЭЛМП для отдельных категорий (средства с SPF выше 30, детская косметика). Перечень ингредиентов на грузинском или английском языке при розничной продаже. Парфюмерия (HS 3303) — стандартный пакет документов. Маркировка: язык, состав, срок годности.",
  summary_en: "Cosmetics import: 0% duty + 18% VAT. No registration required, only notification for SPF>30 and children's products. Ingredient list in Georgian or English for retail. Standard docs.",
  hs_codes: ["3303","3304","3305","3306","3307"],
  topics: ["косметика","парфюмерия","нцэлмп"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-fert-001",
  title: "Удобрения (HS 3101–3105) — особенности импорта",
  url: "https://nfa.gov.ge",
  summary_ru: "Удобрения в Грузию: пошлина 0%, НДС 0% (с/х назначение). Фитосанитарный сертификат обязателен для органических удобрений (навоз, торф), биопрепаратов. Для минеральных удобрений (HS 3102–3105) — стандартные документы + сертификат качества. Аммиачная селитра (HS 3102.30) — ограниченный ввоз, разрешение Министерства внутренних дел. Норма ввоза для с/х предприятий — без ограничений при наличии договора.",
  summary_en: "Fertilizers: 0% duty + 0% VAT. Phytosanitary cert for organic fertilizers. Ammonium nitrate (3102.30): restricted, MoI permit required. Other mineral fertilizers: standard docs + quality cert.",
  hs_codes: ["3101","3102","3103","3104","3105"],
  topics: ["удобрения","сельское хозяйство","нулевая пошлина"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-fuel-001",
  title: "Топливо и нефтепродукты (HS 2710) — импорт",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Нефтепродукты в Грузию: пошлина 0%, НДС 18%, акциз: бензин 0.594 GEL/л, дизель 0.368 GEL/л, керосин 0.20 GEL/л. Документы: инвойс + паспорт качества (сертификат соответствия) + CMR/танкер-коносамент. Импортёр должен иметь лицензию на торговлю нефтепродуктами. Перевозка автоцистернами — ADR-требования (знаки опасности, разрешение водителя).",
  summary_en: "Fuel import: 0% duty + 18% VAT + excise (petrol 0.594 GEL/L, diesel 0.368 GEL/L, kerosene 0.20 GEL/L). Importer needs fuel trading license. ADR requirements for tanker trucks.",
  hs_codes: ["2710"],
  topics: ["топливо","акциз","нефтепродукты","лицензия"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-weapons-001",
  title: "Оружие и военная техника — ввоз в Грузию",
  url: "https://ssg.gov.ge",
  summary_ru: "Ввоз гражданского огнестрельного оружия (охотничье, спортивное) физлицами: разрешение Полиции Грузии + декларирование. Военное оружие, боеприпасы — только для государственных структур по межправительственным соглашениям. Разрешение МГБ (SSG) на товары военного назначения. Для частных лиц — практически невозможно легально ввезти нарезное боевое оружие. Ответственность: уголовная, конфискация, депортация.",
  summary_en: "Civilian firearms (hunting/sport): Georgian Police permit + customs declaration. Military weapons: government-to-government only (SSG permit). Private import of combat firearms: practically impossible legally.",
  hs_codes: ["9301","9302","9303","9304","9305"],
  topics: ["оружие","мгб","запреты","разрешения"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "goods-cultural-001",
  title: "Культурные ценности — вывоз из Грузии",
  url: "https://mculture.gov.ge",
  summary_ru: "Вывоз культурных ценностей из Грузии строго регулируется. Предметы возрастом более 100 лет, произведения грузинских художников, иконы, рукописи, нумизматика — требуют разрешения Министерства культуры, спорта и молодёжи Грузии. Экспертиза на предмет культурной ценности проводится в музее или аттестованной организации. Незаконный вывоз — уголовная ответственность. Для личных вещей и современного искусства — без ограничений.",
  summary_en: "Export of cultural items 100+ years old, Georgian art, icons, manuscripts, coins requires Ministry of Culture permit. Expert appraisal needed. Illegal export = criminal liability.",
  hs_codes: ["9701","9702","9703","9705","9706"],
  topics: ["культурные ценности","экспорт","разрешение","ограничения"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 7: FTA / ПРЕФЕРЕНЦИИ
// ══════════════════════════════════════════
{
  id: "fta-eu-001",
  title: "DCFTA с ЕС — преференциальные ставки для европейских товаров",
  url: "https://matsne.gov.ge",
  summary_ru: "Соглашение об Ассоциации и Углублённой зоне свободной торговли (DCFTA) между Грузией и ЕС действует с 2014 года. Товары происхождением из ЕС ввозятся в Грузию по льготным ставкам (многие — 0%). Подтверждение происхождения: сертификат EUR.1 (для партий свыше €6000) или декларация на инвойсе (до €6000). Без документа о происхождении применяется базовая ставка (MFN).",
  summary_en: "EU-Georgia DCFTA (since 2014): preferential/zero rates for EU-origin goods. Proof: EUR.1 certificate (>€6000) or invoice declaration (≤€6000). Without proof: MFN rates apply.",
  hs_codes: [],
  topics: ["fta","dcfta","ес","преференции","происхождение"],
  last_verified: "2025-06-01",
  effective_date: "2014-07-01"
},
{
  id: "fta-cis-001",
  title: "Зона свободной торговли СНГ — льготы для товаров из СНГ",
  url: "https://matsne.gov.ge",
  summary_ru: "Грузия участвует в соглашениях о свободной торговле со странами СНГ. Товары из России, Украины, Беларуси, Казахстана и других стран СНГ при наличии сертификата происхождения CT-1 могут ввозиться по льготным (нулевым) ставкам пошлин. Сертификат CT-1 выдаёт торгово-промышленная палата или уполномоченный орган страны-экспортёра. Актуальность применения — уточнять с учётом санкционного контекста.",
  summary_en: "Georgia has FTAs with CIS countries. With CT-1 certificate: preferential/zero rates for goods from Russia, Ukraine, Belarus, Kazakhstan and other CIS states. Verify applicability given sanctions context.",
  hs_codes: [],
  topics: ["fta","снг","ct-1","преференции"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "fta-china-001",
  title: "Соглашение о свободной торговле Грузия–Китай (2018)",
  url: "https://economy.ge",
  summary_ru: "Соглашение о ЗСТ между Грузией и Китаем действует с 2018 года. Охватывает 96% тарифных линий с нулевыми или сниженными ставками для товаров китайского происхождения. Подтверждение: сертификат происхождения Form G, выдаётся CCPIT (Китайский совет по международной торговле) или уполномоченными торговыми палатами. Применяется по запросу — без сертификата ставка MFN.",
  summary_en: "China-Georgia FTA (since 2018): 0% or reduced rates for 96% of tariff lines for Chinese-origin goods. Proof: Form G certificate from CCPIT. Without certificate: MFN rates.",
  hs_codes: [],
  topics: ["fta","китай","form-g","преференции"],
  last_verified: "2025-06-01",
  effective_date: "2018-01-01"
},
{
  id: "fta-turkey-001",
  title: "Соглашение о свободной торговле Грузия–Турция",
  url: "https://economy.ge",
  summary_ru: "Соглашение о ЗСТ с Турцией: льготные ставки для товаров турецкого происхождения при ввозе в Грузию. Подтверждение происхождения: сертификат происхождения Form A (GSP) или EUR.1, а также декларация на инвойсе. Турция — крупнейший торговый партнёр Грузии. Особенно актуально для строительных материалов, текстиля, продовольствия турецкого производства.",
  summary_en: "Turkey-Georgia FTA: preferential rates for Turkish-origin goods. Proof: Form A (GSP) or EUR.1, or invoice declaration. Key sectors: construction materials, textiles, food.",
  hs_codes: [],
  topics: ["fta","турция","преференции","происхождение"],
  last_verified: "2025-06-01",
  effective_date: "2008-01-01"
},
{
  id: "fta-apply-001",
  title: "Как применить преференциальную ставку на таможне",
  url: "https://rs.ge",
  summary_ru: "Для получения льготной ставки по FTA: 1) Получить сертификат происхождения у экспортёра (EUR.1, CT-1, Form G, Form A) или убедиться в наличии инвойсной декларации; 2) В таможенной декларации указать код преференции (поле 36); 3) Предъявить оригинал сертификата таможенному инспектору. Инспектор вправе запросить дополнительные документы. При сомнениях — товар выпускается под обеспечение до верификации.",
  summary_en: "To apply FTA preference: obtain origin certificate (EUR.1/CT-1/Form G) → declare preference code in customs declaration box 36 → present original to inspector. Inspector may request additional docs.",
  hs_codes: [],
  topics: ["fta","преференции","процедура","декларация"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 8: ЗАПРЕТЫ И ОГРАНИЧЕНИЯ
// ══════════════════════════════════════════
{
  id: "prohib-001",
  title: "Товары, запрещённые к ввозу в Грузию",
  url: "https://rs.ge",
  summary_ru: "Абсолютно запрещены к ввозу: наркотические вещества (кроме в составе зарегистрированных лекарств); оружие без разрешения; пиратская продукция (нарушение интеллектуальной собственности); радиоактивные материалы без специальных лицензий; химическое и биологическое оружие; товары, ввоз которых запрещён международными конвенциями (Базель, CITES, Монреальский протокол). При обнаружении — конфискация, уголовное преследование.",
  summary_en: "Prohibited imports: narcotics (except registered medicines), weapons without permit, counterfeit goods, radioactive materials, chemical/biological weapons, items banned by international conventions (Basel, CITES, Montreal Protocol).",
  hs_codes: [],
  topics: ["запреты","запрещённые товары","наркотики"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "prohib-002",
  title: "Товары двойного назначения — разрешительный порядок",
  url: "https://ssg.gov.ge",
  summary_ru: "Товары двойного назначения требуют разрешения МГБ/SSG: шифровальное ПО и оборудование с ключом >128 бит; приборы ночного видения и тепловизоры (для гражданских — разрешение); БПЛА/дроны с нагрузкой >5 кг или дальностью >10 км; военная и специальная электроника; лазерное оборудование высокой мощности; биотехнологии и патогены (Список ООН). Перечень контролируемых товаров — на сайте SSG.",
  summary_en: "Dual-use items requiring SSG permit: encryption >128-bit, night vision/thermal, drones >5kg payload or >10km range, military electronics, high-power lasers, biotech/pathogens.",
  hs_codes: [],
  topics: ["двойное назначение","мгб","разрешение","контроль экспорта"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "prohib-003",
  title: "Санкционные товары — риски при транзите через Грузию",
  url: "https://rs.ge",
  summary_ru: "Грузия не является членом НАТО и ЕС, но следит за соблюдением международных санкций во избежание вторичных санкций. Товары, находящиеся под санкциями США (OFAC), ЕС или ООН, не должны транзитироваться через Грузию в Россию/Беларусь. Нарушение — риск для грузинских банков и компаний. Конкретные санкционные списки: OFAC SDN List, EU Consolidated List. Рекомендуем юридическую проверку для чувствительных грузов.",
  summary_en: "Georgia monitors sanctions compliance to avoid secondary sanctions. US (OFAC), EU, UN sanctioned goods must not transit to Russia/Belarus. Check OFAC SDN List and EU Consolidated List. Legal review recommended for sensitive cargo.",
  hs_codes: [],
  topics: ["санкции","транзит","риски","компплайенс"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "prohib-004",
  title: "Ограничения на вывоз из Грузии",
  url: "https://mculture.gov.ge",
  summary_ru: "Ограниченный вывоз из Грузии: культурные ценности возрастом >100 лет — разрешение Минкультуры; лом чёрных металлов (HS 7204) — экспортная пошлина и ограничения; ядерные материалы — полный запрет без государственного разрешения; охраняемые виды (CITES) — разрешение MLARO. Для обычных коммерческих грузов и стандартных товаров — без ограничений, пошлина 0%.",
  summary_en: "Georgian export restrictions: cultural items >100yr (Ministry of Culture permit); ferrous scrap (duty+restrictions); nuclear materials (banned without govt permit); CITES species (MLARO permit). Standard commercial goods: no restrictions, 0% duty.",
  hs_codes: ["7204","9706"],
  topics: ["экспорт","ограничения","культурные ценности","лом"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "prohib-005",
  title: "CITES — охраняемые виды при импорте и экспорте",
  url: "https://nfa.gov.ge",
  summary_ru: "Конвенция CITES регулирует торговлю дикими животными и растениями. Ввоз/вывоз охраняемых видов (слоновая кость, шкуры редких животных, орхидеи CITES-I, попугаи, черепахи и др.) требует сертификата CITES от обеих стран — экспортёра и импортёра. В Грузии сертификаты CITES выдаёт Национальное агентство окружающей среды. Нарушение = конфискация + уголовная ответственность.",
  summary_en: "CITES regulates trade in protected species. Import/export of ivory, rare animal skins, CITES Appendix I plants, parrots, tortoises requires CITES certificate from both countries. Georgian authority: National Environment Agency.",
  hs_codes: ["0106","0301","0408","0507","9601"],
  topics: ["cites","охраняемые виды","запреты","разрешения"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 9: РАСЧЁТ СТОИМОСТИ
// ══════════════════════════════════════════
{
  id: "calc-001",
  title: "Формула расчёта таможенных платежей — пошаговый расчёт",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Пошаговый расчёт: 1) Таможенная стоимость CIF = стоимость товара EXW + фрахт до границы + страховка; 2) Пошлина = таможенная стоимость CIF × ставку пошлины (%); 3) Акциз (если применяется) = рассчитывается отдельно по ставке; 4) НДС = (таможенная стоимость CIF + пошлина + акциз) × 18%; 5) Итого к уплате = пошлина + акциз + НДС. Услуги брокера не включаются в налоговую базу.",
  summary_en: "Step-by-step: 1) CIF = EXW + freight + insurance; 2) Duty = CIF × duty%; 3) Excise separately; 4) VAT = (CIF + duty + excise) × 18%; 5) Total = duty + excise + VAT. Broker fees not in tax base.",
  hs_codes: [],
  topics: ["расчёт","формула","пошлина","ндс"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "calc-002",
  title: "Пример расчёта — одежда $10,000 CIF",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Пример расчёта для партии одежды (HS 6109, пошлина 12%, НДС 18%): таможенная стоимость CIF = $10,000; пошлина 12% = $1,200; НДС 18% × (10,000 + 1,200) = 18% × $11,200 = $2,016; итого таможенные платежи = $3,216. Услуги брокера: от $300. Конвертация в GEL по курсу Национального банка Грузии на день декларирования.",
  summary_en: "Example — clothing $10,000 CIF (12% duty, 18% VAT): duty $1,200 + VAT ($11,200 × 18%) $2,016 = total duties $3,216. Broker fee from $300. Convert to GEL at NBG rate on declaration date.",
  hs_codes: ["6109"],
  topics: ["расчёт","пример","одежда"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "calc-003",
  title: "Пример расчёта — авто $20,000, двигатель 2.0л, 7 лет",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Пример для авто: цена $20,000 CIF; пошлина 0%; НДС 18% от $20,000 = $3,600; акциз: 2000 куб.см × 0.05 GEL/куб.см × (7-3) лет = 400 GEL ≈ $148; итого: $3,600 + 148 = ~$3,748. Важно: реальные цифры зависят от актуального курса GEL/USD и точных ставок — уточняйте у брокера перед покупкой.",
  summary_en: "Car example: $20,000 CIF, 2.0L, 7 years: 0% duty + VAT $3,600 + excise 400 GEL ≈ $148 = total ~$3,748. Real figures depend on current GEL/USD rate and exact applicable rates.",
  hs_codes: ["8703"],
  topics: ["расчёт","пример","авто","акциз"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "calc-004",
  title: "Корректировка таможенной стоимости — риски занижения",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Таможня Грузии вправе отказать в принятии заявленной стоимости, если она значительно ниже рыночной. Используются индикативные базы цен (UNCTAD/WCO, Comtrade). При корректировке: доначисляется пошлина и НДС от скорректированной стоимости + штраф 100% от недоплаченной суммы. Оспаривание: письменное заявление с обоснованием (счёт, платёжные документы, переписка). Реальная рыночная цена в инвойсе = лучшая защита.",
  summary_en: "Customs may reject declared value if significantly below market price (UNCTAD/WCO reference). Correction: additional duty+VAT + 100% fine on underpaid amount. Appeal with invoices and payment docs. Market price in invoice = best protection.",
  hs_codes: [],
  topics: ["таможенная стоимость","корректировка","штраф","риски"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "calc-005",
  title: "Что включается в таможенную стоимость CIF",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "В таможенную стоимость CIF включаются: стоимость товара по инвойсу (EXW/FOB); стоимость фрахта (перевозки) до первого таможенного пункта в Грузии; страховка груза в пути. НЕ включаются: пошлины и налоги; услуги таможенного брокера; расходы после прибытия в Грузию (хранение, выгрузка, доставка внутри страны); роялти и лицензионные платежи — спорный вопрос, иногда включаются.",
  summary_en: "CIF includes: invoice price + freight to Georgian customs point + cargo insurance. NOT included: duties/taxes, broker fees, post-arrival costs (storage, unloading, domestic delivery). Royalties: debated, sometimes included.",
  hs_codes: [],
  topics: ["таможенная стоимость","cif","состав"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},

// ══════════════════════════════════════════
// РАЗДЕЛ 10: АПЕЛЛЯЦИИ И СПОРЫ
// ══════════════════════════════════════════
{
  id: "appeal-001",
  title: "Обжалование решения таможни — первый уровень",
  url: "https://rs.ge",
  summary_ru: "Первый уровень обжалования решений Службы доходов Грузии: письменная жалоба в Департамент апелляции и разбора жалоб Службы доходов в течение 30 дней с момента вынесения решения. Жалоба должна содержать: описание нарушения, правовое обоснование, прилагаемые доказательства. Срок рассмотрения: 30 рабочих дней. Товар может быть выпущен под обеспечение на время рассмотрения.",
  summary_en: "First appeal level: written complaint to Revenue Service Appeals Department within 30 days of decision. Include: violation description, legal grounds, supporting documents. Review: 30 business days. Goods may be released under guarantee.",
  hs_codes: [],
  topics: ["апелляция","обжалование","служба доходов"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "appeal-002",
  title: "Административное обжалование — Апелляционный совет",
  url: "https://mof.gov.ge",
  summary_ru: "Второй уровень: Апелляционный совет при Министерстве финансов Грузии. Жалоба подаётся в течение 20 дней после отказа первого уровня. Совет независим от Службы доходов. Срок рассмотрения: до 60 рабочих дней. Третий уровень — суд общей юрисдикции. Параллельно возможна жалоба в Прокуратуру при наличии признаков злоупотреблений таможенным инспектором.",
  summary_en: "Second appeal: Finance Ministry Appeals Council. File within 20 days of first-level rejection. Independent from Revenue Service. Review: up to 60 business days. Third level: court. Prosecution complaint possible for inspector misconduct.",
  hs_codes: [],
  topics: ["апелляция","минфин","обжалование"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "appeal-003",
  title: "Задержание груза — что делать немедленно",
  url: "https://rs.ge",
  summary_ru: "При задержании груза таможней: немедленно позвоните своему таможенному брокеру; потребуйте письменный протокол задержания с указанием причины (это ваше право); не вскрывайте пломбы и не перемещайте груз самостоятельно; зафиксируйте состояние груза фото/видео; выясните, можно ли выпустить товар под финансовое обеспечение (залог) на период обжалования. Наш брокер подключается к урегулированию ситуации в течение 1-2 часов.",
  summary_en: "On cargo detention: immediately contact your broker; demand written detention protocol with reason; don't break seals; document cargo condition with photos; ask about release under financial guarantee. Our brokers respond within 1-2 hours.",
  hs_codes: [],
  topics: ["задержание","апелляция","процедура","срочно"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
},
{
  id: "appeal-004",
  title: "Штрафы за таможенные нарушения в Грузии",
  url: "https://matsne.gov.ge/ka/document/view/1043717",
  summary_ru: "Штрафы за таможенные нарушения: занижение таможенной стоимости — доначисление + штраф 100% от недоплаченной суммы; неправильная классификация (ошибка HS-кода) — доначисление + 50% штраф; непредоставление документов по требованию — фиксированный штраф; контрабанда — уголовная ответственность, конфискация + штраф до 10-кратного размера стоимости; незадекларированная валюта сверх нормы — конфискация 50% суммы превышения.",
  summary_en: "Penalties: understated customs value = back duties + 100% fine; wrong HS code = back duties + 50% fine; document failure = fixed fine; smuggling = criminal charges, confiscation + fine up to 10× value; undeclared currency (over limit) = 50% of excess confiscated.",
  hs_codes: [],
  topics: ["штрафы","нарушения","ответственность"],
  last_verified: "2025-06-01",
  effective_date: "2024-01-01"
}

];

// ══════════════════════════════════════════
// METADATA
// ══════════════════════════════════════════
const KB_META = {
  version: "1.0",
  last_updated: "2025-06-01",
  total_sources: 73,
  next_review: "2025-09-01",
  jurisdiction: "GE",
  sources: ["matsne.gov.ge", "rs.ge", "nfa.gov.ge", "ncdc.gov.ge", "economy.ge", "fiz.com.ge", "ssg.gov.ge", "mof.gov.ge", "mculture.gov.ge"],
  topics_index: {
    "ндс": ["ndv-001","ndv-002","ndv-003","calc-001","calc-002"],
    "пошлина": ["duty-001","duty-002","duty-003","duty-004","duty-005","duty-006","duty-007"],
    "акциз": ["excise-001","excise-002","excise-003","excise-004","excise-005","excise-006","excise-007","excise-008"],
    "сэз": ["sez-001","sez-002","sez-003","sez-004","sez-005","sez-006","sez-007","sez-008"],
    "документы": ["docs-001","docs-002","docs-003","docs-004","docs-005","docs-006","docs-007","docs-008","docs-009","docs-010"],
    "транзит": ["transit-001","transit-002","transit-003","transit-004","transit-005"],
    "авто": ["goods-auto-001","goods-auto-002","excise-001","excise-002","excise-003"],
    "лекарства": ["goods-pharma-001","docs-005","ndv-002"],
    "fta": ["fta-eu-001","fta-cis-001","fta-china-001","fta-turkey-001","fta-apply-001"],
    "запреты": ["prohib-001","prohib-002","prohib-003","prohib-004","prohib-005"],
    "расчёт": ["calc-001","calc-002","calc-003","calc-004","calc-005"],
    "апелляция": ["appeal-001","appeal-002","appeal-003","appeal-004"]
  }
};

// ── Поиск по базе ──────────────────────────────────────────
function kb_search(query, maxResults = 5) {
  const q = query.toLowerCase();
  const scores = KNOWLEDGE_BASE.map(item => {
    let score = 0;
    const text = (item.title + ' ' + item.summary_ru + ' ' + item.topics.join(' ')).toLowerCase();
    // Точные совпадения по topics
    item.topics.forEach(t => { if (q.includes(t)) score += 10; });
    // HS-код
    if (item.hs_codes) item.hs_codes.forEach(hs => { if (q.includes(hs)) score += 15; });
    // Слова из запроса
    q.split(/\s+/).forEach(word => {
      if (word.length > 3 && text.includes(word)) score += 3;
    });
    // Частичные совпадения
    const keywords = ['ндс','пошлин','акциз','сэз','авто','лекарств','документ','транзит','штраф','апелляц','происхожден','косметик','одежд','алкогол','топлив','мяс','рыб','удобрен','химик','санкц','fta'];
    keywords.forEach(kw => { if (q.includes(kw) && text.includes(kw)) score += 5; });
    return { item, score };
  });
  return scores
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(x => x.item);
}

function kb_format_context(results) {
  if (!results.length) return '';
  return results.map(r =>
    `[${r.id}] ${r.title}\n${r.summary_ru}\nИсточник: ${r.url} (верифицировано: ${r.last_verified})`
  ).join('\n\n');
}
