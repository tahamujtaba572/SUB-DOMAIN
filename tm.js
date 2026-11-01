 (function() {
            const translations = {
                en: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ PAGE',
                    dark: 'DARK',
                    light: 'LIGHT',
                    primaryTheme: '🎨 PRIMARY THEME',
                    background12: '🖼️ BACKGROUND (12 preloads)',
                    pagesClickEdit: '📑 PAGES (click to edit)',
                    pageTitle: '📌 PAGE TITLE',
                    pageNamePlaceholder: 'Page name',
                    elements: '🧩 ELEMENTS',
                    dragLivePreview: 'drag & live preview',
                    addTitle: '➕ TITLE',
                    addText: '📄 TEXT',
                    addButton: '🔘 BUTTON',
                    addMedia: '🖼️ MEDIA',
                    addEmbed: '📎 EMBED/HTML',
                    downloadZip: '📦 DOWNLOAD itaha_builder.zip',
                    fullCodeView: '🔍 FULL CODE VIEW',
                    krakenChain: '⚡ iTAHA BUILDER | Created by TAHA MUJTABA',
                    productionCode: '✨ PRODUCTION CODE (RAW)',
                    generating: '🔄 generating site...',
                    lines: 'lines',
                    chars: 'chars',
                    pagesStat: 'pages',
                    none: 'NONE',
                    newFrame: 'New Frame',
                    blankCanvas: 'Blank Canvas',
                    clickMe: 'Click me',
                    headline: 'Headline',
                    writeSomething: 'Write something meaningful...',
                    exploreNow: 'Explore Now',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'title text',
                    paragraphTextPlaceholder: 'paragraph text',
                    buttonLabelPlaceholder: 'Button label',
                    linkURLPlaceholder: 'Link URL',
                    imageVideoURLPlaceholder: 'Image/Video URL',
                    embedRawPlaceholder: 'Embed raw HTML / iframe',
                    fullStackOutput: '📄 FULL STACK OUTPUT – ITAHA BUILDER',
                    closeModal: '✖ CLOSE',
                    zipCreated: '✅ itaha_builder.zip created',
                    projectArchived: '✅ Project archived',
                    mediaAlt: 'media',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITLE',
                    elementTypeText: 'TEXT',
                    elementTypeButton: 'BUTTON',
                    elementTypeMedia: 'MEDIA',
                    elementTypeEmbed: 'EMBED/HTML',
                    krakenTitleTag: 'iTAHA BUILDER | Created by TAHA MUJTABA',
                    statsTemplate: '📊 lines: {0} | chars: {1} | pages: {2}',
                },
                ru: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ СТРАНИЦА',
                    dark: 'ТЁМНАЯ',
                    light: 'СВЕТЛАЯ',
                    primaryTheme: '🎨 ОСНОВНАЯ ТЕМА',
                    background12: '🖼️ ФОН (12 загрузок)',
                    pagesClickEdit: '📑 СТРАНИЦЫ (нажмите)',
                    pageTitle: '📌 ЗАГОЛОВОК',
                    pageNamePlaceholder: 'Название страницы',
                    elements: '🧩 ЭЛЕМЕНТЫ',
                    dragLivePreview: 'перетащите и просмотр',
                    addTitle: '➕ ЗАГОЛОВОК',
                    addText: '📄 ТЕКСТ',
                    addButton: '🔘 КНОПКА',
                    addMedia: '🖼️ МЕДИА',
                    addEmbed: '📎 ВСТРАИВАНИЕ',
                    downloadZip: '📦 СКАЧАТЬ ZIP',
                    fullCodeView: '🔍 ПОЛНЫЙ КОД',
                    krakenChain: '⚡ iTAHA BUILDER | Автор: TAHA MUJTABA',
                    productionCode: '✨ ГОТОВЫЙ КОД (RAW)',
                    generating: '🔄 генерация сайта...',
                    lines: 'строк',
                    chars: 'симв',
                    pagesStat: 'страниц',
                    none: 'НЕТ',
                    newFrame: 'Новый фрейм',
                    blankCanvas: 'Пустой холст',
                    clickMe: 'Нажми меня',
                    headline: 'Заголовок',
                    writeSomething: 'Напишите что-нибудь...',
                    exploreNow: 'Исследовать',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'текст заголовка',
                    paragraphTextPlaceholder: 'текст абзаца',
                    buttonLabelPlaceholder: 'Текст кнопки',
                    linkURLPlaceholder: 'URL ссылки',
                    imageVideoURLPlaceholder: 'URL изображения/видео',
                    embedRawPlaceholder: 'Вставить HTML / iframe',
                    fullStackOutput: '📄 ПОЛНЫЙ ВЫВОД – ITAHA BUILDER',
                    closeModal: '✖ ЗАКРЫТЬ',
                    zipCreated: '✅ ZIP создан',
                    projectArchived: '✅ Проект архивирован',
                    mediaAlt: 'медиа',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'ЗАГОЛОВОК',
                    elementTypeText: 'ТЕКСТ',
                    elementTypeButton: 'КНОПКА',
                    elementTypeMedia: 'МЕДИА',
                    elementTypeEmbed: 'ВСТРАИВАНИЕ',
                    krakenTitleTag: 'iTAHA BUILDER | Автор: TAHA MUJTABA',
                    statsTemplate: '📊 строк: {0} | симв: {1} | страниц: {2}',
                },
                ja: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ ページ',
                    dark: 'ダーク',
                    light: 'ライト',
                    primaryTheme: '🎨 メインテーマ',
                    background12: '🖼️ 背景 (12種)',
                    pagesClickEdit: '📑 ページ (クリックで編集)',
                    pageTitle: '📌 ページタイトル',
                    pageNamePlaceholder: 'ページ名',
                    elements: '🧩 要素',
                    dragLivePreview: 'ドラッグ＆プレビュー',
                    addTitle: '➕ タイトル',
                    addText: '📄 テキスト',
                    addButton: '🔘 ボタン',
                    addMedia: '🖼️ メディア',
                    addEmbed: '📎 埋め込み',
                    downloadZip: '📦 ZIPダウンロード',
                    fullCodeView: '🔍 全コード表示',
                    krakenChain: '⚡ iTAHA BUILDER | 作者: TAHA MUJTABA',
                    productionCode: '✨ 生成コード (RAW)',
                    generating: '🔄 サイト生成中...',
                    lines: '行',
                    chars: '文字',
                    pagesStat: 'ページ',
                    none: 'なし',
                    newFrame: '新規フレーム',
                    blankCanvas: '空白キャンバス',
                    clickMe: 'クリック',
                    headline: '見出し',
                    writeSomething: '意味のあることを書く...',
                    exploreNow: '探索する',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'タイトルテキスト',
                    paragraphTextPlaceholder: '段落テキスト',
                    buttonLabelPlaceholder: 'ボタンラベル',
                    linkURLPlaceholder: 'リンクURL',
                    imageVideoURLPlaceholder: '画像/動画URL',
                    embedRawPlaceholder: 'HTML / iframeを埋め込み',
                    fullStackOutput: '📄 フルスタック出力 – ITAHA BUILDER',
                    closeModal: '✖ 閉じる',
                    zipCreated: '✅ ZIP作成完了',
                    projectArchived: '✅ プロジェクトアーカイブ',
                    mediaAlt: 'メディア',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'タイトル',
                    elementTypeText: 'テキスト',
                    elementTypeButton: 'ボタン',
                    elementTypeMedia: 'メディア',
                    elementTypeEmbed: '埋め込み',
                    krakenTitleTag: 'iTAHA BUILDER | 作者: TAHA MUJTABA',
                    statsTemplate: '📊 行: {0} | 文字: {1} | ページ: {2}',
                },
                de: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ SEITE',
                    dark: 'DUNKEL',
                    light: 'HELL',
                    primaryTheme: '🎨 HAUPTTHEMA',
                    background12: '🖼️ HINTERGRUND (12)',
                    pagesClickEdit: '📑 SEITEN (anklicken)',
                    pageTitle: '📌 SEITENTITEL',
                    pageNamePlaceholder: 'Seitenname',
                    elements: '🧩 ELEMENTE',
                    dragLivePreview: 'ziehen & Vorschau',
                    addTitle: '➕ TITEL',
                    addText: '📄 TEXT',
                    addButton: '🔘 SCHALTFLÄCHE',
                    addMedia: '🖼️ MEDIEN',
                    addEmbed: '📎 EINBETTEN',
                    downloadZip: '📦 ZIP HERUNTERLADEN',
                    fullCodeView: '🔍 VOLLSTÄNDIGER CODE',
                    krakenChain: '⚡ iTAHA BUILDER | Erstellt von TAHA MUJTABA',
                    productionCode: '✨ PRODUKTIONSCODE (RAW)',
                    generating: '🔄 generiere Website...',
                    lines: 'Zeilen',
                    chars: 'Zeichen',
                    pagesStat: 'Seiten',
                    none: 'KEINE',
                    newFrame: 'Neuer Frame',
                    blankCanvas: 'Leere Leinwand',
                    clickMe: 'Klick mich',
                    headline: 'Überschrift',
                    writeSomething: 'Schreibe etwas...',
                    exploreNow: 'Jetzt entdecken',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'Titeltext',
                    paragraphTextPlaceholder: 'Absatztext',
                    buttonLabelPlaceholder: 'Button-Text',
                    linkURLPlaceholder: 'Link-URL',
                    imageVideoURLPlaceholder: 'Bild/Video URL',
                    embedRawPlaceholder: 'HTML / iframe einbetten',
                    fullStackOutput: '📄 VOLLSTÄNDIGE AUSGABE – ITAHA BUILDER',
                    closeModal: '✖ SCHLIESSEN',
                    zipCreated: '✅ ZIP erstellt',
                    projectArchived: '✅ Projekt archiviert',
                    mediaAlt: 'Medien',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITEL',
                    elementTypeText: 'TEXT',
                    elementTypeButton: 'SCHALTFLÄCHE',
                    elementTypeMedia: 'MEDIEN',
                    elementTypeEmbed: 'EINBETTEN',
                    krakenTitleTag: 'iTAHA BUILDER | Erstellt von TAHA MUJTABA',
                    statsTemplate: '📊 Zeilen: {0} | Zeichen: {1} | Seiten: {2}',
                },
                es: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ PÁGINA',
                    dark: 'OSCURO',
                    light: 'CLARO',
                    primaryTheme: '🎨 TEMA PRINCIPAL',
                    background12: '🖼️ FONDO (12 precargas)',
                    pagesClickEdit: '📑 PÁGINAS (clic para editar)',
                    pageTitle: '📌 TÍTULO DE PÁGINA',
                    pageNamePlaceholder: 'Nombre de página',
                    elements: '🧩 ELEMENTOS',
                    dragLivePreview: 'arrastrar y vista previa',
                    addTitle: '➕ TÍTULO',
                    addText: '📄 TEXTO',
                    addButton: '🔘 BOTÓN',
                    addMedia: '🖼️ MEDIOS',
                    addEmbed: '📎 INCRUSTAR',
                    downloadZip: '📦 DESCARGAR ZIP',
                    fullCodeView: '🔍 CÓDIGO COMPLETO',
                    krakenChain: '⚡ iTAHA BUILDER | Creado por TAHA MUJTABA',
                    productionCode: '✨ CÓDIGO DE PRODUCCIÓN (RAW)',
                    generating: '🔄 generando sitio...',
                    lines: 'líneas',
                    chars: 'caracteres',
                    pagesStat: 'páginas',
                    none: 'NINGUNO',
                    newFrame: 'Nuevo Frame',
                    blankCanvas: 'Lienzo en blanco',
                    clickMe: 'Haz clic',
                    headline: 'Titular',
                    writeSomething: 'Escribe algo significativo...',
                    exploreNow: 'Explorar ahora',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'texto del título',
                    paragraphTextPlaceholder: 'texto del párrafo',
                    buttonLabelPlaceholder: 'Etiqueta del botón',
                    linkURLPlaceholder: 'URL del enlace',
                    imageVideoURLPlaceholder: 'URL de imagen/video',
                    embedRawPlaceholder: 'Incrustar HTML / iframe',
                    fullStackOutput: '📄 SALIDA COMPLETA – ITAHA BUILDER',
                    closeModal: '✖ CERRAR',
                    zipCreated: '✅ ZIP creado',
                    projectArchived: '✅ Proyecto archivado',
                    mediaAlt: 'medios',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TÍTULO',
                    elementTypeText: 'TEXTO',
                    elementTypeButton: 'BOTÓN',
                    elementTypeMedia: 'MEDIOS',
                    elementTypeEmbed: 'INCRUSTAR',
                    krakenTitleTag: 'iTAHA BUILDER | Creado por TAHA MUJTABA',
                    statsTemplate: '📊 líneas: {0} | caracteres: {1} | páginas: {2}',
                },
                fr: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ PAGE',
                    dark: 'SOMBRE',
                    light: 'CLAIR',
                    primaryTheme: '🎨 THÈME PRINCIPAL',
                    background12: '🖼️ ARRIÈRE-PLAN (12)',
                    pagesClickEdit: '📑 PAGES (cliquer pour éditer)',
                    pageTitle: '📌 TITRE DE PAGE',
                    pageNamePlaceholder: 'Nom de la page',
                    elements: '🧩 ÉLÉMENTS',
                    dragLivePreview: 'glisser & aperçu',
                    addTitle: '➕ TITRE',
                    addText: '📄 TEXTE',
                    addButton: '🔘 BOUTON',
                    addMedia: '🖼️ MÉDIA',
                    addEmbed: '📎 INTÉGRER',
                    downloadZip: '📦 TÉLÉCHARGER ZIP',
                    fullCodeView: '🔍 CODE COMPLET',
                    krakenChain: '⚡ iTAHA BUILDER | Créé par TAHA MUJTABA',
                    productionCode: '✨ CODE DE PRODUCTION (RAW)',
                    generating: '🔄 génération du site...',
                    lines: 'lignes',
                    chars: 'caractères',
                    pagesStat: 'pages',
                    none: 'AUCUN',
                    newFrame: 'Nouveau Frame',
                    blankCanvas: 'Toile vierge',
                    clickMe: 'Cliquez-moi',
                    headline: 'Titre',
                    writeSomething: 'Écrivez quelque chose...',
                    exploreNow: 'Explorer',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'texte du titre',
                    paragraphTextPlaceholder: 'texte du paragraphe',
                    buttonLabelPlaceholder: 'Texte du bouton',
                    linkURLPlaceholder: 'URL du lien',
                    imageVideoURLPlaceholder: 'URL image/vidéo',
                    embedRawPlaceholder: 'Intégrer HTML / iframe',
                    fullStackOutput: '📄 SORTIE COMPLÈTE – ITAHA BUILDER',
                    closeModal: '✖ FERMER',
                    zipCreated: '✅ ZIP créé',
                    projectArchived: '✅ Projet archivé',
                    mediaAlt: 'média',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITRE',
                    elementTypeText: 'TEXTE',
                    elementTypeButton: 'BOUTON',
                    elementTypeMedia: 'MÉDIA',
                    elementTypeEmbed: 'INTÉGRER',
                    krakenTitleTag: 'iTAHA BUILDER | Créé par TAHA MUJTABA',
                    statsTemplate: '📊 lignes: {0} | caractères: {1} | pages: {2}',
                },
                hi: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ पेज',
                    dark: 'डार्क',
                    light: 'लाइट',
                    primaryTheme: '🎨 मुख्य थीम',
                    background12: '🖼️ पृष्ठभूमि (12)',
                    pagesClickEdit: '📑 पेज (संपादित करें)',
                    pageTitle: '📌 पेज शीर्षक',
                    pageNamePlaceholder: 'पेज का नाम',
                    elements: '🧩 तत्व',
                    dragLivePreview: 'खींचें और पूर्वावलोकन',
                    addTitle: '➕ शीर्षक',
                    addText: '📄 टेक्स्ट',
                    addButton: '🔘 बटन',
                    addMedia: '🖼️ मीडिया',
                    addEmbed: '📎 एम्बेड',
                    downloadZip: '📦 ZIP डाउनलोड',
                    fullCodeView: '🔍 पूरा कोड',
                    krakenChain: '⚡ iTAHA BUILDER | द्वारा निर्मित: TAHA MUJTABA',
                    productionCode: '✨ उत्पादन कोड (RAW)',
                    generating: '🔄 साइट उत्पन्न हो रही है...',
                    lines: 'पंक्तियाँ',
                    chars: 'अक्षर',
                    pagesStat: 'पेज',
                    none: 'कोई नहीं',
                    newFrame: 'नया फ्रेम',
                    blankCanvas: 'खाली कैनवास',
                    clickMe: 'क्लिक करें',
                    headline: 'शीर्षक',
                    writeSomething: 'कुछ सार्थक लिखें...',
                    exploreNow: 'अभी खोजें',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'शीर्षक टेक्स्ट',
                    paragraphTextPlaceholder: 'पैराग्राफ टेक्स्ट',
                    buttonLabelPlaceholder: 'बटन लेबल',
                    linkURLPlaceholder: 'लिंक URL',
                    imageVideoURLPlaceholder: 'छवि/वीडियो URL',
                    embedRawPlaceholder: 'HTML / iframe एम्बेड करें',
                    fullStackOutput: '📄 पूर्ण आउटपुट – ITAHA BUILDER',
                    closeModal: '✖ बंद करें',
                    zipCreated: '✅ ZIP बनाया गया',
                    projectArchived: '✅ परियोजना संग्रहीत',
                    mediaAlt: 'मीडिया',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'शीर्षक',
                    elementTypeText: 'टेक्स्ट',
                    elementTypeButton: 'बटन',
                    elementTypeMedia: 'मीडिया',
                    elementTypeEmbed: 'एम्बेड',
                    krakenTitleTag: 'iTAHA BUILDER | द्वारा निर्मित: TAHA MUJTABA',
                    statsTemplate: '📊 पंक्तियाँ: {0} | अक्षर: {1} | पेज: {2}',
                },
                zh: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ 页面',
                    dark: '深色',
                    light: '浅色',
                    primaryTheme: '🎨 主主题',
                    background12: '🖼️ 背景 (12种)',
                    pagesClickEdit: '📑 页面 (点击编辑)',
                    pageTitle: '📌 页面标题',
                    pageNamePlaceholder: '页面名称',
                    elements: '🧩 元素',
                    dragLivePreview: '拖拽预览',
                    addTitle: '➕ 标题',
                    addText: '📄 文本',
                    addButton: '🔘 按钮',
                    addMedia: '🖼️ 媒体',
                    addEmbed: '📎 嵌入',
                    downloadZip: '📦 下载 ZIP',
                    fullCodeView: '🔍 完整代码',
                    krakenChain: '⚡ iTAHA BUILDER | 创建者: TAHA MUJTABA',
                    productionCode: '✨ 生产代码 (RAW)',
                    generating: '🔄 正在生成网站...',
                    lines: '行',
                    chars: '字符',
                    pagesStat: '页',
                    none: '无',
                    newFrame: '新框架',
                    blankCanvas: '空白画布',
                    clickMe: '点击我',
                    headline: '标题',
                    writeSomething: '写点有意义的内容...',
                    exploreNow: '立即探索',
                    closeSymbol: '✕',
                    titleTextPlaceholder: '标题文本',
                    paragraphTextPlaceholder: '段落文本',
                    buttonLabelPlaceholder: '按钮标签',
                    linkURLPlaceholder: '链接URL',
                    imageVideoURLPlaceholder: '图片/视频URL',
                    embedRawPlaceholder: '嵌入 HTML / iframe',
                    fullStackOutput: '📄 完整输出 – ITAHA BUILDER',
                    closeModal: '✖ 关闭',
                    zipCreated: '✅ ZIP 已创建',
                    projectArchived: '✅ 项目已归档',
                    mediaAlt: '媒体',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: '标题',
                    elementTypeText: '文本',
                    elementTypeButton: '按钮',
                    elementTypeMedia: '媒体',
                    elementTypeEmbed: '嵌入',
                    krakenTitleTag: 'iTAHA BUILDER | 创建者: TAHA MUJTABA',
                    statsTemplate: '📊 行: {0} | 字符: {1} | 页面: {2}',
                },
                ar: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ صفحة',
                    dark: 'داكن',
                    light: 'فاتح',
                    primaryTheme: '🎨 السمة الرئيسية',
                    background12: '🖼️ الخلفية (12)',
                    pagesClickEdit: '📑 الصفحات (اضغط للتعديل)',
                    pageTitle: '📌 عنوان الصفحة',
                    pageNamePlaceholder: 'اسم الصفحة',
                    elements: '🧩 العناصر',
                    dragLivePreview: 'اسحب ومعاينة',
                    addTitle: '➕ عنوان',
                    addText: '📄 نص',
                    addButton: '🔘 زر',
                    addMedia: '🖼️ وسائط',
                    addEmbed: '📎 تضمين',
                    downloadZip: '📦 تحميل ZIP',
                    fullCodeView: '🔍 الكود الكامل',
                    krakenChain: '⚡ iTAHA BUILDER | بواسطة: TAHA MUJTABA',
                    productionCode: '✨ كود الإنتاج (RAW)',
                    generating: '🔄 جاري إنشاء الموقع...',
                    lines: 'سطر',
                    chars: 'حرف',
                    pagesStat: 'صفحات',
                    none: 'بدون',
                    newFrame: 'إطار جديد',
                    blankCanvas: 'لوحة فارغة',
                    clickMe: 'اضغط',
                    headline: 'عنوان رئيسي',
                    writeSomething: 'اكتب شيئاً ذا معنى...',
                    exploreNow: 'استكشف الآن',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'نص العنوان',
                    paragraphTextPlaceholder: 'نص الفقرة',
                    buttonLabelPlaceholder: 'تسمية الزر',
                    linkURLPlaceholder: 'رابط URL',
                    imageVideoURLPlaceholder: 'رابط الصورة/الفيديو',
                    embedRawPlaceholder: 'تضمين HTML / iframe',
                    fullStackOutput: '📄 الإخراج الكامل – ITAHA BUILDER',
                    closeModal: '✖ إغلاق',
                    zipCreated: '✅ تم إنشاء ZIP',
                    projectArchived: '✅ تم أرشفة المشروع',
                    mediaAlt: 'وسائط',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'عنوان',
                    elementTypeText: 'نص',
                    elementTypeButton: 'زر',
                    elementTypeMedia: 'وسائط',
                    elementTypeEmbed: 'تضمين',
                    krakenTitleTag: 'iTAHA BUILDER | بواسطة: TAHA MUJTABA',
                    statsTemplate: '📊 الأسطر: {0} | الأحرف: {1} | الصفحات: {2}',
                },
                ur: {
                    krakenFrameWeaver: '🐙 ITAHA BUILDER',
                    addPage: '+ صفحہ',
                    dark: 'ڈارک',
                    light: 'لائٹ',
                    primaryTheme: '🎨 مرکزی تھیم',
                    background12: '🖼️ پس منظر (12)',
                    pagesClickEdit: '📑 صفحات (ترمیم کریں)',
                    pageTitle: '📌 صفحہ عنوان',
                    pageNamePlaceholder: 'صفحہ کا نام',
                    elements: '🧩 عناصر',
                    dragLivePreview: 'گھسیٹیں اور پیش نظارہ',
                    addTitle: '➕ عنوان',
                    addText: '📄 متن',
                    addButton: '🔘 بٹن',
                    addMedia: '🖼️ میڈیا',
                    addEmbed: '📎 ایمبیڈ',
                    downloadZip: '📦 ZIP ڈاؤنلوڈ',
                    fullCodeView: '🔍 مکمل کوڈ',
                    krakenChain: '⚡ iTAHA BUILDER | تخلیق کار: TAHA MUJTABA',
                    productionCode: '✨ پروڈکشن کوڈ (RAW)',
                    generating: '🔄 سائٹ تیار ہو رہی ہے...',
                    lines: 'لائنیں',
                    chars: 'حروف',
                    pagesStat: 'صفحات',
                    none: 'کوئی نہیں',
                    newFrame: 'نیا فریم',
                    blankCanvas: 'خالی کینوس',
                    clickMe: 'کلک کریں',
                    headline: 'سرخی',
                    writeSomething: 'کچھ معنی خیز لکھیں...',
                    exploreNow: 'ابھی دریافت کریں',
                    closeSymbol: '✕',
                    titleTextPlaceholder: 'عنوان کا متن',
                    paragraphTextPlaceholder: 'پیراگراف متن',
                    buttonLabelPlaceholder: 'بٹن لیبل',
                    linkURLPlaceholder: 'لنک URL',
                    imageVideoURLPlaceholder: 'تصویر/ویڈیو URL',
                    embedRawPlaceholder: 'HTML / iframe ایمبیڈ کریں',
                    fullStackOutput: '📄 مکمل آؤٹ پٹ – ITAHA BUILDER',
                    closeModal: '✖ بند کریں',
                    zipCreated: '✅ ZIP تیار ہو گیا',
                    projectArchived: '✅ منصوبہ محفوظ',
                    mediaAlt: 'میڈیا',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'عنوان',
                    elementTypeText: 'متن',
                    elementTypeButton: 'بٹن',
                    elementTypeMedia: 'میڈیا',
                    elementTypeEmbed: 'ایمبیڈ',
                    krakenTitleTag: 'iTAHA BUILDER | تخلیق کار: TAHA MUJTABA',
                    statsTemplate: '📊 لائنیں: {0} | حروف: {1} | صفحات: {2}',
                },
            };

            const langMeta = [
                { code: 'en', name: 'English', flag: '🇬🇧' },
                { code: 'ru', name: 'Русский', flag: '🇷🇺' },
                { code: 'ja', name: '日本語', flag: '🇯🇵' },
                { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
                { code: 'es', name: 'Español', flag: '🇪🇸' },
                { code: 'fr', name: 'Français', flag: '🇫🇷' },
                { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
                { code: 'zh', name: '中文', flag: '🇨🇳' },
                { code: 'ar', name: 'العربية', flag: '🇸🇦' },
                { code: 'ur', name: 'اردو', flag: '🇵🇰' },
            ];

            let currentLang = 'en';

            function t(key, replacements) {
                let str = (translations[currentLang] && translations[currentLang][key]) ?
                    translations[currentLang][key] :
                    (translations['en'][key] || key);
                if (replacements && Array.isArray(replacements)) {
                    replacements.forEach((rep, i) => {
                        str = str.replace('{' + i + '}', rep);
                    });
                }
                return str;
            }

            function changeLanguage(langCode) {
                if (!translations[langCode]) return;
                currentLang = langCode;
                updateLangSelectorUI();
                document.getElementById('langDropdown').classList.remove('open');
                document.title = t('krakenTitleTag');
                renderAllUI();
                const toast = document.getElementById('globalToast');
                const langInfo = langMeta.find(l => l.code === langCode);
                toast.textContent = '🌐 ' + (langInfo ? langInfo.flag + ' ' + langInfo.name : langCode) +
                    ' activated';
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2200);
            }

            function toggleLangDropdown() {
                const dropdown = document.getElementById('langDropdown');
                dropdown.classList.toggle('open');
            }

            function updateLangSelectorUI() {
                const langInfo = langMeta.find(l => l.code === currentLang) || langMeta[0];
                document.getElementById('currentLangFlag').textContent = langInfo.flag;
                document.getElementById('currentLangName').textContent = langInfo.name;
                const items = document.querySelectorAll('.lang-dropdown-item');
                items.forEach(item => {
                    item.classList.toggle('active-lang', item.getAttribute('data-lang') ===
                        currentLang);
                });
            }

            function buildLangDropdown() {
                const dropdown = document.getElementById('langDropdown');
                dropdown.innerHTML = langMeta.map(l =>
                    `<div class="lang-dropdown-item${l.code === currentLang ? ' active-lang' : ''}" data-lang="${l.code}" onclick="changeLanguage('${l.code}')"><span class="lang-item-flag">${l.flag}</span> ${l.name}</div>`
                ).join('');
            }

            document.addEventListener('click', function(e) {
                const wrap = document.querySelector('.lang-selector-wrap');
                const dropdown = document.getElementById('langDropdown');
                if (wrap && dropdown && !wrap.contains(e.target)) {
                    dropdown.classList.remove('open');
                }
            });

            window.changeLanguage = changeLanguage;
            window.toggleLangDropdown = toggleLangDropdown;

            let currentThemeID = 'indigo';
            let currentBackgroundURL = 'none';
            let isDarkGlobal = true;

            const themePalette = {
                indigo: { p: '#6366f1', a: '#a855f7',
                    bg: 'radial-gradient(circle at 0% 0%, #1e1b4b 0%, #0f172a 100%)' },
                rose: { p: '#ec4899', a: '#f43f5e',
                    bg: 'radial-gradient(circle at 0% 0%, #4c0519 0%, #0f172a 100%)' },
                emerald: { p: '#10b981', a: '#059669',
                    bg: 'radial-gradient(circle at 0% 0%, #064e3b 0%, #020617 100%)' },
                amber: { p: '#f59e0b', a: '#d97706',
                    bg: 'radial-gradient(circle at 0% 0%, #451a03 0%, #0f172a 100%)' }
            };

            let masterPages = [
                {
                    id: 'p_home',
                    title: '🏠 Home',
                    elements: [
                        { type: 'title', val1: 'ITAHA BUILDER' },
                        { type: 'text',
                            val1: 'Created by TAHA MUJTABA. Powered by iTAHA BUILDER frame weaver engine.' },
                        { type: 'button', val1: 'Visit Nexura OneApp', val2: 'https://itaha.duckdns.org/' }
                    ]
                }
            ];
            let activePageId = 'p_home';

            const backgroundGalleryList = [
                'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500',
                'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500',
                'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=500',
                'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=500',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500',
                'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=500',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500',
                'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=500',
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=500',
                'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=500',
                'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=500'
            ];

            function getActivePage() { return masterPages.find(p => p.id === activePageId); }

            function renderAllUI() {
                updateAllStaticLabels();
                renderTabs();
                renderActiveEditorFields();
                renderPreviewAndCode();
                updateLangSelectorUI();
            }

            function updateAllStaticLabels() {
                document.title = t('krakenTitleTag');
                const editorTitle = document.getElementById('editorMainTitle');
                if (editorTitle) editorTitle.innerHTML =
                    '<span style="color:var(--primary);">🐙 iTAHA BUILDER</span>';
                const addPageBtn = document.getElementById('addPageBtn');
                if (addPageBtn) addPageBtn.textContent = t('addPage');
                const modeLabel = document.getElementById('globalModeLabel');
                if (modeLabel) modeLabel.textContent = isDarkGlobal ? t('dark') : t('light');
                const primaryThemeLabel = document.getElementById('primaryThemeLabel');
                if (primaryThemeLabel) primaryThemeLabel.textContent = t('primaryTheme');
                const backgroundLabel = document.getElementById('backgroundLabel');
                if (backgroundLabel) backgroundLabel.textContent = t('background12');
                const pagesLabel = document.getElementById('pagesLabel');
                if (pagesLabel) pagesLabel.textContent = t('pagesClickEdit');
                const pageTitleLabel = document.getElementById('pageTitleLabel');
                if (pageTitleLabel) pageTitleLabel.textContent = t('pageTitle');
                const elementsLabel = document.getElementById('elementsLabel');
                if (elementsLabel) elementsLabel.textContent = t('elements');
                const dragPreviewLabel = document.getElementById('dragPreviewLabel');
                if (dragPreviewLabel) dragPreviewLabel.textContent = t('dragLivePreview');
                const addTitleBtn = document.getElementById('addTitleBtn');
                if (addTitleBtn) addTitleBtn.textContent = t('addTitle');
                const addTextBtn = document.getElementById('addTextBtn');
                if (addTextBtn) addTextBtn.textContent = t('addText');
                const addButtonBtn = document.getElementById('addButtonBtn');
                if (addButtonBtn) addButtonBtn.textContent = t('addButton');
                const addMediaBtn = document.getElementById('addMediaBtn');
                if (addMediaBtn) addMediaBtn.textContent = t('addMedia');
                const addEmbedBtn = document.getElementById('addEmbedBtn');
                if (addEmbedBtn) addEmbedBtn.textContent = t('addEmbed');
                const downloadZipBtn = document.getElementById('downloadZipBtn');
                if (downloadZipBtn) downloadZipBtn.textContent = t('downloadZip');
                const fullCodeViewBtn = document.getElementById('fullCodeViewBtn');
                if (fullCodeViewBtn) fullCodeViewBtn.textContent = t('fullCodeView');
                const krakenChainLabel = document.getElementById('krakenChainLabel');
                if (krakenChainLabel) krakenChainLabel.textContent = t('krakenChain');
                const productionCodeLabel = document.getElementById('productionCodeLabel');
                if (productionCodeLabel) productionCodeLabel.textContent = t('productionCode');
                const modalTitleText = document.getElementById('modalTitleText');
                if (modalTitleText) modalTitleText.textContent = t('fullStackOutput');
                const modalCloseBtn = document.getElementById('modalCloseBtn');
                if (modalCloseBtn) modalCloseBtn.textContent = t('closeModal');
                const pageTitleField = document.getElementById('pageTitleField');
                if (pageTitleField && pageTitleField.placeholder !== t('pageNamePlaceholder')) {
                    pageTitleField.placeholder = t('pageNamePlaceholder');
                }
                const codeOutputBlock = document.getElementById('codeOutputBlock');
                if (codeOutputBlock && codeOutputBlock.innerText.includes('generating')) {
                    codeOutputBlock.innerText = t('generating');
                }
                const noneThumb = document.querySelector('.bg-thumb.none-thumb');
                if (noneThumb) noneThumb.textContent = t('none');
            }

            function renderTabs() {
                const container = document.getElementById('pageTabsContainer');
                if (!container) return;
                container.innerHTML = masterPages.map(p =>
                    `<div class="page-tab ${p.id === activePageId ? 'active' : ''}" onclick="switchToPage('${p.id}')">${p.title}</div>`
                ).join('');
            }

            function switchToPage(id) { activePageId = id; renderAllUI(); }

            function addNewMasterPage() {
                const newId = 'p_' + Date.now();
                masterPages.push({ id: newId, title: t('newFrame'), elements: [{ type: 'title', val1: t('blankCanvas') }] });
                activePageId = newId;
                renderAllUI();
            }

            function updateCurrentPageTitle() {
                getActivePage().title = document.getElementById('pageTitleField').value;
                renderTabs();
                renderPreviewAndCode();
            }

            function injectElement(type) {
                let defaultVal1 = '';
                let defaultVal2 = '';
                if (type === 'title') defaultVal1 = t('headline');
                else if (type === 'text') defaultVal1 = t('writeSomething');
                else if (type === 'button') { defaultVal1 = t('clickMe'); defaultVal2 = 'https://itaha.duckdns.org/'; }
                getActivePage().elements.push({ type, val1: defaultVal1, val2: defaultVal2 });
                renderActiveEditorFields();
                renderPreviewAndCode();
            }

            function removeElementFromPage(idx) { getActivePage().elements.splice(idx, 1); renderActiveEditorFields(); renderPreviewAndCode(); }

            function getElementTypeLabel(type) {
                const map = {
                    'title': 'elementTypeTitle',
                    'text': 'elementTypeText',
                    'button': 'elementTypeButton',
                    'media': 'elementTypeMedia',
                    'embed': 'elementTypeEmbed'
                };
                return t(map[type] || type.toUpperCase());
            }

            function renderActiveEditorFields() {
                const page = getActivePage();
                const titleField = document.getElementById('pageTitleField');
                if (titleField) {
                    titleField.value = page.title;
                    titleField.placeholder = t('pageNamePlaceholder');
                }
                const listDiv = document.getElementById('elementsDynamicList');
                if (!listDiv) return;
                listDiv.innerHTML = '';
                page.elements.forEach((el, idx) => {
                    const card = document.createElement('div');
                    card.className = 'section-card';
                    const removeBtn = document.createElement('button');
                    removeBtn.innerText = t('closeSymbol');
                    removeBtn.className = 'remove-btn';
                    removeBtn.onclick = () => removeElementFromPage(idx);
                    card.appendChild(removeBtn);
                    const label = document.createElement('label');
                    label.innerText = getElementTypeLabel(el.type);
                    card.appendChild(label);
                    if (el.type === 'title' || el.type === 'text') {
                        const ta = document.createElement('textarea');
                        ta.value = el.val1 || '';
                        ta.placeholder = el.type === 'title' ? t('titleTextPlaceholder') : t('paragraphTextPlaceholder');
                        ta.oninput = (e) => { el.val1 = e.target.value; renderPreviewAndCode(); };
                        card.appendChild(ta);
                    } else if (el.type === 'button') {
                        const inp1 = document.createElement('input');
                        inp1.placeholder = t('buttonLabelPlaceholder');
                        inp1.value = el.val1 || '';
                        inp1.oninput = (e) => { el.val1 = e.target.value; renderPreviewAndCode(); };
                        const inp2 = document.createElement('input');
                        inp2.placeholder = t('linkURLPlaceholder');
                        inp2.value = el.val2 || '';
                        inp2.oninput = (e) => { el.val2 = e.target.value; renderPreviewAndCode(); };
                        card.appendChild(inp1);
                        card.appendChild(inp2);
                    } else if (el.type === 'media') {
                        const inp = document.createElement('input');
                        inp.placeholder = t('imageVideoURLPlaceholder');
                        inp.value = el.val1 || '';
                        inp.oninput = (e) => { el.val1 = e.target.value; renderPreviewAndCode(); };
                        card.appendChild(inp);
                    } else if (el.type === 'embed') {
                        const ta = document.createElement('textarea');
                        ta.rows = 3;
                        ta.placeholder = t('embedRawPlaceholder');
                        ta.value = el.val1 || '';
                        ta.oninput = (e) => { el.val1 = e.target.value; renderPreviewAndCode(); };
                        card.appendChild(ta);
                    }
                    listDiv.appendChild(card);
                });
            }

            function renderPreviewAndCode() {
                const page = getActivePage();
                let previewHTML = '';
                for (let el of page.elements) {
                    if (el.type === 'title') previewHTML +=
                        `<h2 style="font-size:2.8rem; font-weight:800; background: linear-gradient(135deg, var(--primary), #fff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin:10px 0;">${escapeHtml(el.val1)}</h2>`;
                    else if (el.type === 'text') previewHTML +=
                        `<p style="font-size:1.1rem; line-height:1.5; color:var(--preview-text); margin:15px 0;">${escapeHtml(el.val1)}</p>`;
                    else if (el.type === 'button') previewHTML +=
                        `<div style="margin:20px 0;"><a href="${escapeHtml(el.val2||'#')}" target="_blank" style="background:linear-gradient(135deg, var(--primary), var(--accent)); padding:12px 28px; border-radius:40px; color:white; text-decoration:none; font-weight:bold; display:inline-block;">${escapeHtml(el.val1)}</a></div>`;
                    else if (el.type === 'media') previewHTML +=
                        `<img src="${escapeHtml(el.val1)}" style="width:100%; border-radius:28px; margin:15px 0; border:1px solid var(--canvas-border);" onerror="this.src='https://placehold.co/600x400?text=Media+Missing'" alt="${t('mediaAlt')}">`;
                    else if (el.type === 'embed') previewHTML +=
                        `<div style="margin:20px 0; border-radius:20px; overflow:hidden;">${el.val1}</div>`;
                }
                const navHTML = masterPages.map(p =>
                    `<span class="nav-link" onclick="switchToPage('${p.id}')">${p.title}</span>`).join('');
                document.getElementById('navPreviewDynamic').innerHTML = navHTML;
                document.getElementById('canvasContentRender').innerHTML = previewHTML;
                applyCanvasBackground();
                const fullCode = generateFullSiteCode();
                document.getElementById('codeOutputBlock').innerText = fullCode;
                const lines = fullCode.split('\n').length;
                const chars = fullCode.length;
                document.getElementById('codeStatsBar').innerHTML = t('statsTemplate', [lines, chars.toLocaleString(), masterPages.length]);
                window.liveSiteCode = fullCode;
            }

            function applyCanvasBackground() {
                const canvas = document.getElementById('liveCanvas');
                if (currentBackgroundURL === 'none') canvas.style.backgroundImage = '';
                else canvas.style.backgroundImage =
                    `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${currentBackgroundURL}')`;
                canvas.style.backgroundSize = 'cover';
            }

            function escapeHtml(str) {
                if (!str) return '';
                return str.replace(/[&<>]/g, function(m) {
                    if (m === '&') return '&amp;';
                    if (m === '<') return '&lt;';
                    if (m === '>') return '&gt;';
                    return m;
                });
            }

            function setMasterTheme(themeId, el) {
                currentThemeID = themeId;
                const t = themePalette[themeId];
                document.getElementById('themeStyles')?.remove();
                const styleTag = document.createElement('style');
                styleTag.id = 'themeStyles';
                styleTag.innerHTML =
                    `:root { --primary: ${t.p}; --accent: ${t.a}; --bg-gradient: ${t.bg}; }`;
                document.head.appendChild(styleTag);
                document.querySelectorAll('.theme-dot').forEach(d => d.classList.remove('active'));
                if (el) el.classList.add('active');
                renderPreviewAndCode();
            }

            function toggleGlobalMode() {
                isDarkGlobal = !isDarkGlobal;
                if (isDarkGlobal) {
                    document.body.classList.remove('light-mode');
                    document.getElementById('globalModeIcon').textContent = '🌙';
                } else {
                    document.body.classList.add('light-mode');
                    document.getElementById('globalModeIcon').textContent = '☀️';
                }
                updateAllStaticLabels();
                renderPreviewAndCode();
            }

            function setBgImage(url, thumbEl) {
                currentBackgroundURL = url;
                document.querySelectorAll('.bg-thumb').forEach(el => el.classList.remove('active'));
                if (thumbEl) thumbEl.classList.add('active');
                applyCanvasBackground();
                renderPreviewAndCode();
            }

            function generateFullSiteCode() {
                const theme = themePalette[currentThemeID];
                let finalBg = theme.bg;
                if (currentBackgroundURL !== 'none') finalBg =
                    `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${currentBackgroundURL}')`;
                let navLinks = masterPages.map(p => `<a href="#${p.id}">${p.title}</a>`).join('\n');
                let sectionsHtml = '';
                for (let p of masterPages) {
                    let inner = '';
                    for (let el of p.elements) {
                        if (el.type === 'title') inner +=
                            `<h2 class="grad-title">${escapeHtml(el.val1)}</h2>`;
                        else if (el.type === 'text') inner += `<p>${escapeHtml(el.val1)}</p>`;
                        else if (el.type === 'button') inner +=
                            `<a href="${escapeHtml(el.val2||'#')}" class="btn-kraken">${escapeHtml(el.val1)}</a>`;
                        else if (el.type === 'media') inner +=
                            `<img src="${escapeHtml(el.val1)}" alt="${t('mediaAlt')}" loading="lazy">`;
                        else if (el.type === 'embed') inner +=
                            `<div class="embed-zone">${el.val1}</div>`;
                    }
                    sectionsHtml +=
                    `<section id="${p.id}" class="page-section">${inner}</section>`;
                }
                return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(t('frameworld'))} • Created by TAHA MUJTABA</title><style>
                :root{--pri:${theme.p};--acc:${theme.a};}body{background:${finalBg};background-attachment:fixed;color:white;font-family:system-ui;margin:0;}nav{background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);padding:18px;text-align:center;position:sticky;top:0;z-index:99;}nav a{margin:0 18px;color:white;text-decoration:none;font-weight:600;}nav a:hover{color:var(--pri)}.container{max-width:900px;margin:auto;padding:40px 24px;}.page-section{display:none;animation:fade 0.5s;}.page-section:target{display:block;}h2.grad-title{font-size:3rem;background:linear-gradient(135deg,white,var(--pri));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}p{font-size:1.2rem;line-height:1.5;color:#cbd5e6;}.btn-kraken{display:inline-block;background:linear-gradient(135deg,var(--pri),var(--acc));padding:12px 32px;border-radius:60px;color:white;margin:20px 0;text-decoration:none;font-weight:bold;}img{width:100%;border-radius:28px;margin:20px 0;}@keyframes fade{from{opacity:0;}to{opacity:1;}}</style></head><body><nav>${navLinks}</nav><div class="container">${sectionsHtml}</div></body></html>`;
            }

            function downloadMasterZIP() {
                const siteHTML = generateFullSiteCode();
                const framedIndex =
                    `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>iTAHA BUILDER</title><style>*{margin:0;padding:0;}iframe{width:100vw;height:100vh;border:none;}</style></head><body><iframe src="my_site.html" sandbox="allow-scripts allow-same-origin allow-popups"></iframe></body></html>`;
                const readmeMD =
                    `# ITAHA BUILDER\n## CREATED BY TAHA MUJTABA\n- Website generated using iTAHA BUILDER\nNexura Link: https://itaha.duckdns.org/`;
                if (typeof JSZip === 'undefined') { alert('JSZip missing'); return; }
                const zip = new JSZip();
                zip.file('index.html', framedIndex);
                zip.file('my_site.html', siteHTML);
                zip.file('readme.md', readmeMD);
                zip.generateAsync({ type: 'blob', compression: "DEFLATE" }).then(blob => {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'itaha_builder.zip';
                    a.click();
                    URL.revokeObjectURL(a.href);
                    const toast = document.getElementById('globalToast');
                    toast.textContent = t('zipCreated');
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 3000);
                }).catch(e => alert('zip error'));
            }

            function openFullCodePreview() {
                const fullCode = generateFullSiteCode();
                const iframe = document.getElementById('fullCodeIframe');
                const enhanced =
                    `<!DOCTYPE html><html><head><style>body{background:#0a0f1c;color:#e2e8f0;font-family:monospace;padding:30px;white-space:pre-wrap;}</style></head><body><pre style="font-size:13px;">${escapeHtml(fullCode)}</pre></body></html>`;
                iframe.srcdoc = enhanced;
                document.getElementById('modalTitleText').textContent = t('fullStackOutput');
                document.getElementById('modalCloseBtn').textContent = t('closeModal');
                document.getElementById('codeModalOverlay').style.display = 'flex';
            }

            function closeFullCodeModal() { document.getElementById('codeModalOverlay').style.display = 'none'; }

            function initBgGallery() {
                const gallery = document.getElementById('dynamicBgGallery');
                if (!gallery) return;
                gallery.innerHTML =
                    `<div class="bg-thumb none-thumb active" onclick="setBgImage('none', this)">${t('none')}</div>`;
                backgroundGalleryList.forEach(url => {
                    const thumb = document.createElement('div');
                    thumb.className = 'bg-thumb';
                    thumb.style.backgroundImage = `url(${url})`;
                    thumb.onclick = (e) => { setBgImage(url, thumb); e.stopPropagation(); };
                    gallery.appendChild(thumb);
                });
            }

            window.setMasterTheme = setMasterTheme;
            window.toggleGlobalMode = toggleGlobalMode;
            window.setBgImage = setBgImage;
            window.addNewMasterPage = addNewMasterPage;
            window.switchToPage = switchToPage;
            window.updateCurrentPageTitle = updateCurrentPageTitle;
            window.injectElement = injectElement;
            window.removeElementFromPage = removeElementFromPage;
            window.downloadMasterZIP = downloadMasterZIP;
            window.openFullCodePreview = openFullCodePreview;
            window.closeFullCodeModal = closeFullCodeModal;

            buildLangDropdown();
            updateLangSelectorUI();
            initBgGallery();
            renderAllUI();
            document.title = t('krakenTitleTag');
        })();
