  (function() {
            const translations = {
                en: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ PAGE',
                    dark: 'DARK',
                    light: 'LIGHT',
                    primaryTheme: 'ðŸŽ¨ PRIMARY THEME',
                    background12: 'ðŸ–¼ï¸ BACKGROUND (12 preloads)',
                    pagesClickEdit: 'ðŸ“‘ PAGES (click to edit)',
                    pageTitle: 'ðŸ“Œ PAGE TITLE',
                    pageNamePlaceholder: 'Page name',
                    elements: 'ðŸ§© ELEMENTS',
                    dragLivePreview: 'drag & live preview',
                    addTitle: 'âž• TITLE',
                    addText: 'ðŸ“„ TEXT',
                    addButton: 'ðŸ”˜ BUTTON',
                    addMedia: 'ðŸ–¼ï¸ MEDIA',
                    addEmbed: 'ðŸ“Ž EMBED/HTML',
                    downloadZip: 'ðŸ“¦ DOWNLOAD itaha_builder.zip',
                    fullCodeView: 'ðŸ” FULL CODE VIEW',
                    krakenChain: 'âš¡ iTAHA BUILDER | Created by TAHA MUJTABA',
                    productionCode: 'âœ¨ PRODUCTION CODE (RAW)',
                    generating: 'ðŸ”„ generating site...',
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
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'title text',
                    paragraphTextPlaceholder: 'paragraph text',
                    buttonLabelPlaceholder: 'Button label',
                    linkURLPlaceholder: 'Link URL',
                    imageVideoURLPlaceholder: 'Image/Video URL',
                    embedRawPlaceholder: 'Embed raw HTML / iframe',
                    fullStackOutput: 'ðŸ“„ FULL STACK OUTPUT â€“ ITAHA BUILDER',
                    closeModal: 'âœ– CLOSE',
                    zipCreated: 'âœ… itaha_builder.zip created',
                    projectArchived: 'âœ… Project archived',
                    mediaAlt: 'media',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITLE',
                    elementTypeText: 'TEXT',
                    elementTypeButton: 'BUTTON',
                    elementTypeMedia: 'MEDIA',
                    elementTypeEmbed: 'EMBED/HTML',
                    krakenTitleTag: 'iTAHA BUILDER | Created by TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š lines: {0} | chars: {1} | pages: {2}',
                },
                ru: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ Ð¡Ð¢Ð ÐÐÐ˜Ð¦Ð',
                    dark: 'Ð¢ÐÐœÐÐÐ¯',
                    light: 'Ð¡Ð’Ð•Ð¢Ð›ÐÐ¯',
                    primaryTheme: 'ðŸŽ¨ ÐžÐ¡ÐÐžÐ’ÐÐÐ¯ Ð¢Ð•ÐœÐ',
                    background12: 'ðŸ–¼ï¸ Ð¤ÐžÐ (12 Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¾Ðº)',
                    pagesClickEdit: 'ðŸ“‘ Ð¡Ð¢Ð ÐÐÐ˜Ð¦Ð« (Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ)',
                    pageTitle: 'ðŸ“Œ Ð—ÐÐ“ÐžÐ›ÐžÐ’ÐžÐš',
                    pageNamePlaceholder: 'ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹',
                    elements: 'ðŸ§© Ð­Ð›Ð•ÐœÐ•ÐÐ¢Ð«',
                    dragLivePreview: 'Ð¿ÐµÑ€ÐµÑ‚Ð°Ñ‰Ð¸Ñ‚Ðµ Ð¸ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€',
                    addTitle: 'âž• Ð—ÐÐ“ÐžÐ›ÐžÐ’ÐžÐš',
                    addText: 'ðŸ“„ Ð¢Ð•ÐšÐ¡Ð¢',
                    addButton: 'ðŸ”˜ ÐšÐÐžÐŸÐšÐ',
                    addMedia: 'ðŸ–¼ï¸ ÐœÐ•Ð”Ð˜Ð',
                    addEmbed: 'ðŸ“Ž Ð’Ð¡Ð¢Ð ÐÐ˜Ð’ÐÐÐ˜Ð•',
                    downloadZip: 'ðŸ“¦ Ð¡ÐšÐÐ§ÐÐ¢Ð¬ ZIP',
                    fullCodeView: 'ðŸ” ÐŸÐžÐ›ÐÐ«Ð™ ÐšÐžÐ”',
                    krakenChain: 'âš¡ iTAHA BUILDER | ÐÐ²Ñ‚Ð¾Ñ€: TAHA MUJTABA',
                    productionCode: 'âœ¨ Ð“ÐžÐ¢ÐžÐ’Ð«Ð™ ÐšÐžÐ” (RAW)',
                    generating: 'ðŸ”„ Ð³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ñ ÑÐ°Ð¹Ñ‚Ð°...',
                    lines: 'ÑÑ‚Ñ€Ð¾Ðº',
                    chars: 'ÑÐ¸Ð¼Ð²',
                    pagesStat: 'ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†',
                    none: 'ÐÐ•Ð¢',
                    newFrame: 'ÐÐ¾Ð²Ñ‹Ð¹ Ñ„Ñ€ÐµÐ¹Ð¼',
                    blankCanvas: 'ÐŸÑƒÑÑ‚Ð¾Ð¹ Ñ…Ð¾Ð»ÑÑ‚',
                    clickMe: 'ÐÐ°Ð¶Ð¼Ð¸ Ð¼ÐµÐ½Ñ',
                    headline: 'Ð—Ð°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº',
                    writeSomething: 'ÐÐ°Ð¿Ð¸ÑˆÐ¸Ñ‚Ðµ Ñ‡Ñ‚Ð¾-Ð½Ð¸Ð±ÑƒÐ´ÑŒ...',
                    exploreNow: 'Ð˜ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÑŒ',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'Ñ‚ÐµÐºÑÑ‚ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐ°',
                    paragraphTextPlaceholder: 'Ñ‚ÐµÐºÑÑ‚ Ð°Ð±Ð·Ð°Ñ†Ð°',
                    buttonLabelPlaceholder: 'Ð¢ÐµÐºÑÑ‚ ÐºÐ½Ð¾Ð¿ÐºÐ¸',
                    linkURLPlaceholder: 'URL ÑÑÑ‹Ð»ÐºÐ¸',
                    imageVideoURLPlaceholder: 'URL Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ/Ð²Ð¸Ð´ÐµÐ¾',
                    embedRawPlaceholder: 'Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ HTML / iframe',
                    fullStackOutput: 'ðŸ“„ ÐŸÐžÐ›ÐÐ«Ð™ Ð’Ð«Ð’ÐžÐ” â€“ ITAHA BUILDER',
                    closeModal: 'âœ– Ð—ÐÐšÐ Ð«Ð¢Ð¬',
                    zipCreated: 'âœ… ZIP ÑÐ¾Ð·Ð´Ð°Ð½',
                    projectArchived: 'âœ… ÐŸÑ€Ð¾ÐµÐºÑ‚ Ð°Ñ€Ñ…Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ð½',
                    mediaAlt: 'Ð¼ÐµÐ´Ð¸Ð°',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'Ð—ÐÐ“ÐžÐ›ÐžÐ’ÐžÐš',
                    elementTypeText: 'Ð¢Ð•ÐšÐ¡Ð¢',
                    elementTypeButton: 'ÐšÐÐžÐŸÐšÐ',
                    elementTypeMedia: 'ÐœÐ•Ð”Ð˜Ð',
                    elementTypeEmbed: 'Ð’Ð¡Ð¢Ð ÐÐ˜Ð’ÐÐÐ˜Ð•',
                    krakenTitleTag: 'iTAHA BUILDER | ÐÐ²Ñ‚Ð¾Ñ€: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š ÑÑ‚Ñ€Ð¾Ðº: {0} | ÑÐ¸Ð¼Ð²: {1} | ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†: {2}',
                },
                ja: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ ãƒšãƒ¼ã‚¸',
                    dark: 'ãƒ€ãƒ¼ã‚¯',
                    light: 'ãƒ©ã‚¤ãƒˆ',
                    primaryTheme: 'ðŸŽ¨ ãƒ¡ã‚¤ãƒ³ãƒ†ãƒ¼ãƒž',
                    background12: 'ðŸ–¼ï¸ èƒŒæ™¯ (12ç¨®)',
                    pagesClickEdit: 'ðŸ“‘ ãƒšãƒ¼ã‚¸ (ã‚¯ãƒªãƒƒã‚¯ã§ç·¨é›†)',
                    pageTitle: 'ðŸ“Œ ãƒšãƒ¼ã‚¸ã‚¿ã‚¤ãƒˆãƒ«',
                    pageNamePlaceholder: 'ãƒšãƒ¼ã‚¸å',
                    elements: 'ðŸ§© è¦ç´ ',
                    dragLivePreview: 'ãƒ‰ãƒ©ãƒƒã‚°ï¼†ãƒ—ãƒ¬ãƒ“ãƒ¥ãƒ¼',
                    addTitle: 'âž• ã‚¿ã‚¤ãƒˆãƒ«',
                    addText: 'ðŸ“„ ãƒ†ã‚­ã‚¹ãƒˆ',
                    addButton: 'ðŸ”˜ ãƒœã‚¿ãƒ³',
                    addMedia: 'ðŸ–¼ï¸ ãƒ¡ãƒ‡ã‚£ã‚¢',
                    addEmbed: 'ðŸ“Ž åŸ‹ã‚è¾¼ã¿',
                    downloadZip: 'ðŸ“¦ ZIPãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰',
                    fullCodeView: 'ðŸ” å…¨ã‚³ãƒ¼ãƒ‰è¡¨ç¤º',
                    krakenChain: 'âš¡ iTAHA BUILDER | ä½œè€…: TAHA MUJTABA',
                    productionCode: 'âœ¨ ç”Ÿæˆã‚³ãƒ¼ãƒ‰ (RAW)',
                    generating: 'ðŸ”„ ã‚µã‚¤ãƒˆç”Ÿæˆä¸­...',
                    lines: 'è¡Œ',
                    chars: 'æ–‡å­—',
                    pagesStat: 'ãƒšãƒ¼ã‚¸',
                    none: 'ãªã—',
                    newFrame: 'æ–°è¦ãƒ•ãƒ¬ãƒ¼ãƒ ',
                    blankCanvas: 'ç©ºç™½ã‚­ãƒ£ãƒ³ãƒã‚¹',
                    clickMe: 'ã‚¯ãƒªãƒƒã‚¯',
                    headline: 'è¦‹å‡ºã—',
                    writeSomething: 'æ„å‘³ã®ã‚ã‚‹ã“ã¨ã‚’æ›¸ã...',
                    exploreNow: 'æŽ¢ç´¢ã™ã‚‹',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'ã‚¿ã‚¤ãƒˆãƒ«ãƒ†ã‚­ã‚¹ãƒˆ',
                    paragraphTextPlaceholder: 'æ®µè½ãƒ†ã‚­ã‚¹ãƒˆ',
                    buttonLabelPlaceholder: 'ãƒœã‚¿ãƒ³ãƒ©ãƒ™ãƒ«',
                    linkURLPlaceholder: 'ãƒªãƒ³ã‚¯URL',
                    imageVideoURLPlaceholder: 'ç”»åƒ/å‹•ç”»URL',
                    embedRawPlaceholder: 'HTML / iframeã‚’åŸ‹ã‚è¾¼ã¿',
                    fullStackOutput: 'ðŸ“„ ãƒ•ãƒ«ã‚¹ã‚¿ãƒƒã‚¯å‡ºåŠ› â€“ ITAHA BUILDER',
                    closeModal: 'âœ– é–‰ã˜ã‚‹',
                    zipCreated: 'âœ… ZIPä½œæˆå®Œäº†',
                    projectArchived: 'âœ… ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚¢ãƒ¼ã‚«ã‚¤ãƒ–',
                    mediaAlt: 'ãƒ¡ãƒ‡ã‚£ã‚¢',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'ã‚¿ã‚¤ãƒˆãƒ«',
                    elementTypeText: 'ãƒ†ã‚­ã‚¹ãƒˆ',
                    elementTypeButton: 'ãƒœã‚¿ãƒ³',
                    elementTypeMedia: 'ãƒ¡ãƒ‡ã‚£ã‚¢',
                    elementTypeEmbed: 'åŸ‹ã‚è¾¼ã¿',
                    krakenTitleTag: 'iTAHA BUILDER | ä½œè€…: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š è¡Œ: {0} | æ–‡å­—: {1} | ãƒšãƒ¼ã‚¸: {2}',
                },
                de: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ SEITE',
                    dark: 'DUNKEL',
                    light: 'HELL',
                    primaryTheme: 'ðŸŽ¨ HAUPTTHEMA',
                    background12: 'ðŸ–¼ï¸ HINTERGRUND (12)',
                    pagesClickEdit: 'ðŸ“‘ SEITEN (anklicken)',
                    pageTitle: 'ðŸ“Œ SEITENTITEL',
                    pageNamePlaceholder: 'Seitenname',
                    elements: 'ðŸ§© ELEMENTE',
                    dragLivePreview: 'ziehen & Vorschau',
                    addTitle: 'âž• TITEL',
                    addText: 'ðŸ“„ TEXT',
                    addButton: 'ðŸ”˜ SCHALTFLÃ„CHE',
                    addMedia: 'ðŸ–¼ï¸ MEDIEN',
                    addEmbed: 'ðŸ“Ž EINBETTEN',
                    downloadZip: 'ðŸ“¦ ZIP HERUNTERLADEN',
                    fullCodeView: 'ðŸ” VOLLSTÃ„NDIGER CODE',
                    krakenChain: 'âš¡ iTAHA BUILDER | Erstellt von TAHA MUJTABA',
                    productionCode: 'âœ¨ PRODUKTIONSCODE (RAW)',
                    generating: 'ðŸ”„ generiere Website...',
                    lines: 'Zeilen',
                    chars: 'Zeichen',
                    pagesStat: 'Seiten',
                    none: 'KEINE',
                    newFrame: 'Neuer Frame',
                    blankCanvas: 'Leere Leinwand',
                    clickMe: 'Klick mich',
                    headline: 'Ãœberschrift',
                    writeSomething: 'Schreibe etwas...',
                    exploreNow: 'Jetzt entdecken',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'Titeltext',
                    paragraphTextPlaceholder: 'Absatztext',
                    buttonLabelPlaceholder: 'Button-Text',
                    linkURLPlaceholder: 'Link-URL',
                    imageVideoURLPlaceholder: 'Bild/Video URL',
                    embedRawPlaceholder: 'HTML / iframe einbetten',
                    fullStackOutput: 'ðŸ“„ VOLLSTÃ„NDIGE AUSGABE â€“ ITAHA BUILDER',
                    closeModal: 'âœ– SCHLIESSEN',
                    zipCreated: 'âœ… ZIP erstellt',
                    projectArchived: 'âœ… Projekt archiviert',
                    mediaAlt: 'Medien',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITEL',
                    elementTypeText: 'TEXT',
                    elementTypeButton: 'SCHALTFLÃ„CHE',
                    elementTypeMedia: 'MEDIEN',
                    elementTypeEmbed: 'EINBETTEN',
                    krakenTitleTag: 'iTAHA BUILDER | Erstellt von TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š Zeilen: {0} | Zeichen: {1} | Seiten: {2}',
                },
                es: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ PÃGINA',
                    dark: 'OSCURO',
                    light: 'CLARO',
                    primaryTheme: 'ðŸŽ¨ TEMA PRINCIPAL',
                    background12: 'ðŸ–¼ï¸ FONDO (12 precargas)',
                    pagesClickEdit: 'ðŸ“‘ PÃGINAS (clic para editar)',
                    pageTitle: 'ðŸ“Œ TÃTULO DE PÃGINA',
                    pageNamePlaceholder: 'Nombre de pÃ¡gina',
                    elements: 'ðŸ§© ELEMENTOS',
                    dragLivePreview: 'arrastrar y vista previa',
                    addTitle: 'âž• TÃTULO',
                    addText: 'ðŸ“„ TEXTO',
                    addButton: 'ðŸ”˜ BOTÃ“N',
                    addMedia: 'ðŸ–¼ï¸ MEDIOS',
                    addEmbed: 'ðŸ“Ž INCRUSTAR',
                    downloadZip: 'ðŸ“¦ DESCARGAR ZIP',
                    fullCodeView: 'ðŸ” CÃ“DIGO COMPLETO',
                    krakenChain: 'âš¡ iTAHA BUILDER | Creado por TAHA MUJTABA',
                    productionCode: 'âœ¨ CÃ“DIGO DE PRODUCCIÃ“N (RAW)',
                    generating: 'ðŸ”„ generando sitio...',
                    lines: 'lÃ­neas',
                    chars: 'caracteres',
                    pagesStat: 'pÃ¡ginas',
                    none: 'NINGUNO',
                    newFrame: 'Nuevo Frame',
                    blankCanvas: 'Lienzo en blanco',
                    clickMe: 'Haz clic',
                    headline: 'Titular',
                    writeSomething: 'Escribe algo significativo...',
                    exploreNow: 'Explorar ahora',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'texto del tÃ­tulo',
                    paragraphTextPlaceholder: 'texto del pÃ¡rrafo',
                    buttonLabelPlaceholder: 'Etiqueta del botÃ³n',
                    linkURLPlaceholder: 'URL del enlace',
                    imageVideoURLPlaceholder: 'URL de imagen/video',
                    embedRawPlaceholder: 'Incrustar HTML / iframe',
                    fullStackOutput: 'ðŸ“„ SALIDA COMPLETA â€“ ITAHA BUILDER',
                    closeModal: 'âœ– CERRAR',
                    zipCreated: 'âœ… ZIP creado',
                    projectArchived: 'âœ… Proyecto archivado',
                    mediaAlt: 'medios',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TÃTULO',
                    elementTypeText: 'TEXTO',
                    elementTypeButton: 'BOTÃ“N',
                    elementTypeMedia: 'MEDIOS',
                    elementTypeEmbed: 'INCRUSTAR',
                    krakenTitleTag: 'iTAHA BUILDER | Creado por TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š lÃ­neas: {0} | caracteres: {1} | pÃ¡ginas: {2}',
                },
                fr: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ PAGE',
                    dark: 'SOMBRE',
                    light: 'CLAIR',
                    primaryTheme: 'ðŸŽ¨ THÃˆME PRINCIPAL',
                    background12: 'ðŸ–¼ï¸ ARRIÃˆRE-PLAN (12)',
                    pagesClickEdit: 'ðŸ“‘ PAGES (cliquer pour Ã©diter)',
                    pageTitle: 'ðŸ“Œ TITRE DE PAGE',
                    pageNamePlaceholder: 'Nom de la page',
                    elements: 'ðŸ§© Ã‰LÃ‰MENTS',
                    dragLivePreview: 'glisser & aperÃ§u',
                    addTitle: 'âž• TITRE',
                    addText: 'ðŸ“„ TEXTE',
                    addButton: 'ðŸ”˜ BOUTON',
                    addMedia: 'ðŸ–¼ï¸ MÃ‰DIA',
                    addEmbed: 'ðŸ“Ž INTÃ‰GRER',
                    downloadZip: 'ðŸ“¦ TÃ‰LÃ‰CHARGER ZIP',
                    fullCodeView: 'ðŸ” CODE COMPLET',
                    krakenChain: 'âš¡ iTAHA BUILDER | CrÃ©Ã© par TAHA MUJTABA',
                    productionCode: 'âœ¨ CODE DE PRODUCTION (RAW)',
                    generating: 'ðŸ”„ gÃ©nÃ©ration du site...',
                    lines: 'lignes',
                    chars: 'caractÃ¨res',
                    pagesStat: 'pages',
                    none: 'AUCUN',
                    newFrame: 'Nouveau Frame',
                    blankCanvas: 'Toile vierge',
                    clickMe: 'Cliquez-moi',
                    headline: 'Titre',
                    writeSomething: 'Ã‰crivez quelque chose...',
                    exploreNow: 'Explorer',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'texte du titre',
                    paragraphTextPlaceholder: 'texte du paragraphe',
                    buttonLabelPlaceholder: 'Texte du bouton',
                    linkURLPlaceholder: 'URL du lien',
                    imageVideoURLPlaceholder: 'URL image/vidÃ©o',
                    embedRawPlaceholder: 'IntÃ©grer HTML / iframe',
                    fullStackOutput: 'ðŸ“„ SORTIE COMPLÃˆTE â€“ ITAHA BUILDER',
                    closeModal: 'âœ– FERMER',
                    zipCreated: 'âœ… ZIP crÃ©Ã©',
                    projectArchived: 'âœ… Projet archivÃ©',
                    mediaAlt: 'mÃ©dia',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'TITRE',
                    elementTypeText: 'TEXTE',
                    elementTypeButton: 'BOUTON',
                    elementTypeMedia: 'MÃ‰DIA',
                    elementTypeEmbed: 'INTÃ‰GRER',
                    krakenTitleTag: 'iTAHA BUILDER | CrÃ©Ã© par TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š lignes: {0} | caractÃ¨res: {1} | pages: {2}',
                },
                hi: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ à¤ªà¥‡à¤œ',
                    dark: 'à¤¡à¤¾à¤°à¥à¤•',
                    light: 'à¤²à¤¾à¤‡à¤Ÿ',
                    primaryTheme: 'ðŸŽ¨ à¤®à¥à¤–à¥à¤¯ à¤¥à¥€à¤®',
                    background12: 'ðŸ–¼ï¸ à¤ªà¥ƒà¤·à¥à¤ à¤­à¥‚à¤®à¤¿ (12)',
                    pagesClickEdit: 'ðŸ“‘ à¤ªà¥‡à¤œ (à¤¸à¤‚à¤ªà¤¾à¤¦à¤¿à¤¤ à¤•à¤°à¥‡à¤‚)',
                    pageTitle: 'ðŸ“Œ à¤ªà¥‡à¤œ à¤¶à¥€à¤°à¥à¤·à¤•',
                    pageNamePlaceholder: 'à¤ªà¥‡à¤œ à¤•à¤¾ à¤¨à¤¾à¤®',
                    elements: 'ðŸ§© à¤¤à¤¤à¥à¤µ',
                    dragLivePreview: 'à¤–à¥€à¤‚à¤šà¥‡à¤‚ à¤”à¤° à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨',
                    addTitle: 'âž• à¤¶à¥€à¤°à¥à¤·à¤•',
                    addText: 'ðŸ“„ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ',
                    addButton: 'ðŸ”˜ à¤¬à¤Ÿà¤¨',
                    addMedia: 'ðŸ–¼ï¸ à¤®à¥€à¤¡à¤¿à¤¯à¤¾',
                    addEmbed: 'ðŸ“Ž à¤à¤®à¥à¤¬à¥‡à¤¡',
                    downloadZip: 'ðŸ“¦ ZIP à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡',
                    fullCodeView: 'ðŸ” à¤ªà¥‚à¤°à¤¾ à¤•à¥‹à¤¡',
                    krakenChain: 'âš¡ iTAHA BUILDER | à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤: TAHA MUJTABA',
                    productionCode: 'âœ¨ à¤‰à¤¤à¥à¤ªà¤¾à¤¦à¤¨ à¤•à¥‹à¤¡ (RAW)',
                    generating: 'ðŸ”„ à¤¸à¤¾à¤‡à¤Ÿ à¤‰à¤¤à¥à¤ªà¤¨à¥à¤¨ à¤¹à¥‹ à¤°à¤¹à¥€ à¤¹à¥ˆ...',
                    lines: 'à¤ªà¤‚à¤•à¥à¤¤à¤¿à¤¯à¤¾à¤',
                    chars: 'à¤…à¤•à¥à¤·à¤°',
                    pagesStat: 'à¤ªà¥‡à¤œ',
                    none: 'à¤•à¥‹à¤ˆ à¤¨à¤¹à¥€à¤‚',
                    newFrame: 'à¤¨à¤¯à¤¾ à¤«à¥à¤°à¥‡à¤®',
                    blankCanvas: 'à¤–à¤¾à¤²à¥€ à¤•à¥ˆà¤¨à¤µà¤¾à¤¸',
                    clickMe: 'à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚',
                    headline: 'à¤¶à¥€à¤°à¥à¤·à¤•',
                    writeSomething: 'à¤•à¥à¤› à¤¸à¤¾à¤°à¥à¤¥à¤• à¤²à¤¿à¤–à¥‡à¤‚...',
                    exploreNow: 'à¤…à¤­à¥€ à¤–à¥‹à¤œà¥‡à¤‚',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'à¤¶à¥€à¤°à¥à¤·à¤• à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ',
                    paragraphTextPlaceholder: 'à¤ªà¥ˆà¤°à¤¾à¤—à¥à¤°à¤¾à¤« à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ',
                    buttonLabelPlaceholder: 'à¤¬à¤Ÿà¤¨ à¤²à¥‡à¤¬à¤²',
                    linkURLPlaceholder: 'à¤²à¤¿à¤‚à¤• URL',
                    imageVideoURLPlaceholder: 'à¤›à¤µà¤¿/à¤µà¥€à¤¡à¤¿à¤¯à¥‹ URL',
                    embedRawPlaceholder: 'HTML / iframe à¤à¤®à¥à¤¬à¥‡à¤¡ à¤•à¤°à¥‡à¤‚',
                    fullStackOutput: 'ðŸ“„ à¤ªà¥‚à¤°à¥à¤£ à¤†à¤‰à¤Ÿà¤ªà¥à¤Ÿ â€“ ITAHA BUILDER',
                    closeModal: 'âœ– à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚',
                    zipCreated: 'âœ… ZIP à¤¬à¤¨à¤¾à¤¯à¤¾ à¤—à¤¯à¤¾',
                    projectArchived: 'âœ… à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤¸à¤‚à¤—à¥à¤°à¤¹à¥€à¤¤',
                    mediaAlt: 'à¤®à¥€à¤¡à¤¿à¤¯à¤¾',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'à¤¶à¥€à¤°à¥à¤·à¤•',
                    elementTypeText: 'à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ',
                    elementTypeButton: 'à¤¬à¤Ÿà¤¨',
                    elementTypeMedia: 'à¤®à¥€à¤¡à¤¿à¤¯à¤¾',
                    elementTypeEmbed: 'à¤à¤®à¥à¤¬à¥‡à¤¡',
                    krakenTitleTag: 'iTAHA BUILDER | à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š à¤ªà¤‚à¤•à¥à¤¤à¤¿à¤¯à¤¾à¤: {0} | à¤…à¤•à¥à¤·à¤°: {1} | à¤ªà¥‡à¤œ: {2}',
                },
                zh: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ é¡µé¢',
                    dark: 'æ·±è‰²',
                    light: 'æµ…è‰²',
                    primaryTheme: 'ðŸŽ¨ ä¸»ä¸»é¢˜',
                    background12: 'ðŸ–¼ï¸ èƒŒæ™¯ (12ç§)',
                    pagesClickEdit: 'ðŸ“‘ é¡µé¢ (ç‚¹å‡»ç¼–è¾‘)',
                    pageTitle: 'ðŸ“Œ é¡µé¢æ ‡é¢˜',
                    pageNamePlaceholder: 'é¡µé¢åç§°',
                    elements: 'ðŸ§© å…ƒç´ ',
                    dragLivePreview: 'æ‹–æ‹½é¢„è§ˆ',
                    addTitle: 'âž• æ ‡é¢˜',
                    addText: 'ðŸ“„ æ–‡æœ¬',
                    addButton: 'ðŸ”˜ æŒ‰é’®',
                    addMedia: 'ðŸ–¼ï¸ åª’ä½“',
                    addEmbed: 'ðŸ“Ž åµŒå…¥',
                    downloadZip: 'ðŸ“¦ ä¸‹è½½ ZIP',
                    fullCodeView: 'ðŸ” å®Œæ•´ä»£ç ',
                    krakenChain: 'âš¡ iTAHA BUILDER | åˆ›å»ºè€…: TAHA MUJTABA',
                    productionCode: 'âœ¨ ç”Ÿäº§ä»£ç  (RAW)',
                    generating: 'ðŸ”„ æ­£åœ¨ç”Ÿæˆç½‘ç«™...',
                    lines: 'è¡Œ',
                    chars: 'å­—ç¬¦',
                    pagesStat: 'é¡µ',
                    none: 'æ— ',
                    newFrame: 'æ–°æ¡†æž¶',
                    blankCanvas: 'ç©ºç™½ç”»å¸ƒ',
                    clickMe: 'ç‚¹å‡»æˆ‘',
                    headline: 'æ ‡é¢˜',
                    writeSomething: 'å†™ç‚¹æœ‰æ„ä¹‰çš„å†…å®¹...',
                    exploreNow: 'ç«‹å³æŽ¢ç´¢',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'æ ‡é¢˜æ–‡æœ¬',
                    paragraphTextPlaceholder: 'æ®µè½æ–‡æœ¬',
                    buttonLabelPlaceholder: 'æŒ‰é’®æ ‡ç­¾',
                    linkURLPlaceholder: 'é“¾æŽ¥URL',
                    imageVideoURLPlaceholder: 'å›¾ç‰‡/è§†é¢‘URL',
                    embedRawPlaceholder: 'åµŒå…¥ HTML / iframe',
                    fullStackOutput: 'ðŸ“„ å®Œæ•´è¾“å‡º â€“ ITAHA BUILDER',
                    closeModal: 'âœ– å…³é—­',
                    zipCreated: 'âœ… ZIP å·²åˆ›å»º',
                    projectArchived: 'âœ… é¡¹ç›®å·²å½’æ¡£',
                    mediaAlt: 'åª’ä½“',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'æ ‡é¢˜',
                    elementTypeText: 'æ–‡æœ¬',
                    elementTypeButton: 'æŒ‰é’®',
                    elementTypeMedia: 'åª’ä½“',
                    elementTypeEmbed: 'åµŒå…¥',
                    krakenTitleTag: 'iTAHA BUILDER | åˆ›å»ºè€…: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š è¡Œ: {0} | å­—ç¬¦: {1} | é¡µé¢: {2}',
                },
                ar: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ ØµÙØ­Ø©',
                    dark: 'Ø¯Ø§ÙƒÙ†',
                    light: 'ÙØ§ØªØ­',
                    primaryTheme: 'ðŸŽ¨ Ø§Ù„Ø³Ù…Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
                    background12: 'ðŸ–¼ï¸ Ø§Ù„Ø®Ù„ÙÙŠØ© (12)',
                    pagesClickEdit: 'ðŸ“‘ Ø§Ù„ØµÙØ­Ø§Øª (Ø§Ø¶ØºØ· Ù„Ù„ØªØ¹Ø¯ÙŠÙ„)',
                    pageTitle: 'ðŸ“Œ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„ØµÙØ­Ø©',
                    pageNamePlaceholder: 'Ø§Ø³Ù… Ø§Ù„ØµÙØ­Ø©',
                    elements: 'ðŸ§© Ø§Ù„Ø¹Ù†Ø§ØµØ±',
                    dragLivePreview: 'Ø§Ø³Ø­Ø¨ ÙˆÙ…Ø¹Ø§ÙŠÙ†Ø©',
                    addTitle: 'âž• Ø¹Ù†ÙˆØ§Ù†',
                    addText: 'ðŸ“„ Ù†Øµ',
                    addButton: 'ðŸ”˜ Ø²Ø±',
                    addMedia: 'ðŸ–¼ï¸ ÙˆØ³Ø§Ø¦Ø·',
                    addEmbed: 'ðŸ“Ž ØªØ¶Ù…ÙŠÙ†',
                    downloadZip: 'ðŸ“¦ ØªØ­Ù…ÙŠÙ„ ZIP',
                    fullCodeView: 'ðŸ” Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„ÙƒØ§Ù…Ù„',
                    krakenChain: 'âš¡ iTAHA BUILDER | Ø¨ÙˆØ§Ø³Ø·Ø©: TAHA MUJTABA',
                    productionCode: 'âœ¨ ÙƒÙˆØ¯ Ø§Ù„Ø¥Ù†ØªØ§Ø¬ (RAW)',
                    generating: 'ðŸ”„ Ø¬Ø§Ø±ÙŠ Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ù…ÙˆÙ‚Ø¹...',
                    lines: 'Ø³Ø·Ø±',
                    chars: 'Ø­Ø±Ù',
                    pagesStat: 'ØµÙØ­Ø§Øª',
                    none: 'Ø¨Ø¯ÙˆÙ†',
                    newFrame: 'Ø¥Ø·Ø§Ø± Ø¬Ø¯ÙŠØ¯',
                    blankCanvas: 'Ù„ÙˆØ­Ø© ÙØ§Ø±ØºØ©',
                    clickMe: 'Ø§Ø¶ØºØ·',
                    headline: 'Ø¹Ù†ÙˆØ§Ù† Ø±Ø¦ÙŠØ³ÙŠ',
                    writeSomething: 'Ø§ÙƒØªØ¨ Ø´ÙŠØ¦Ø§Ù‹ Ø°Ø§ Ù…Ø¹Ù†Ù‰...',
                    exploreNow: 'Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø¢Ù†',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'Ù†Øµ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
                    paragraphTextPlaceholder: 'Ù†Øµ Ø§Ù„ÙÙ‚Ø±Ø©',
                    buttonLabelPlaceholder: 'ØªØ³Ù…ÙŠØ© Ø§Ù„Ø²Ø±',
                    linkURLPlaceholder: 'Ø±Ø§Ø¨Ø· URL',
                    imageVideoURLPlaceholder: 'Ø±Ø§Ø¨Ø· Ø§Ù„ØµÙˆØ±Ø©/Ø§Ù„ÙÙŠØ¯ÙŠÙˆ',
                    embedRawPlaceholder: 'ØªØ¶Ù…ÙŠÙ† HTML / iframe',
                    fullStackOutput: 'ðŸ“„ Ø§Ù„Ø¥Ø®Ø±Ø§Ø¬ Ø§Ù„ÙƒØ§Ù…Ù„ â€“ ITAHA BUILDER',
                    closeModal: 'âœ– Ø¥ØºÙ„Ø§Ù‚',
                    zipCreated: 'âœ… ØªÙ… Ø¥Ù†Ø´Ø§Ø¡ ZIP',
                    projectArchived: 'âœ… ØªÙ… Ø£Ø±Ø´ÙØ© Ø§Ù„Ù…Ø´Ø±ÙˆØ¹',
                    mediaAlt: 'ÙˆØ³Ø§Ø¦Ø·',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'Ø¹Ù†ÙˆØ§Ù†',
                    elementTypeText: 'Ù†Øµ',
                    elementTypeButton: 'Ø²Ø±',
                    elementTypeMedia: 'ÙˆØ³Ø§Ø¦Ø·',
                    elementTypeEmbed: 'ØªØ¶Ù…ÙŠÙ†',
                    krakenTitleTag: 'iTAHA BUILDER | Ø¨ÙˆØ§Ø³Ø·Ø©: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š Ø§Ù„Ø£Ø³Ø·Ø±: {0} | Ø§Ù„Ø£Ø­Ø±Ù: {1} | Ø§Ù„ØµÙØ­Ø§Øª: {2}',
                },
                ur: {
                    krakenFrameWeaver: 'ðŸ™ ITAHA BUILDER',
                    addPage: '+ ØµÙØ­Û',
                    dark: 'ÚˆØ§Ø±Ú©',
                    light: 'Ù„Ø§Ø¦Ù¹',
                    primaryTheme: 'ðŸŽ¨ Ù…Ø±Ú©Ø²ÛŒ ØªÚ¾ÛŒÙ…',
                    background12: 'ðŸ–¼ï¸ Ù¾Ø³ Ù…Ù†Ø¸Ø± (12)',
                    pagesClickEdit: 'ðŸ“‘ ØµÙØ­Ø§Øª (ØªØ±Ù…ÛŒÙ… Ú©Ø±ÛŒÚº)',
                    pageTitle: 'ðŸ“Œ ØµÙØ­Û Ø¹Ù†ÙˆØ§Ù†',
                    pageNamePlaceholder: 'ØµÙØ­Û Ú©Ø§ Ù†Ø§Ù…',
                    elements: 'ðŸ§© Ø¹Ù†Ø§ØµØ±',
                    dragLivePreview: 'Ú¯Ú¾Ø³ÛŒÙ¹ÛŒÚº Ø§ÙˆØ± Ù¾ÛŒØ´ Ù†Ø¸Ø§Ø±Û',
                    addTitle: 'âž• Ø¹Ù†ÙˆØ§Ù†',
                    addText: 'ðŸ“„ Ù…ØªÙ†',
                    addButton: 'ðŸ”˜ Ø¨Ù¹Ù†',
                    addMedia: 'ðŸ–¼ï¸ Ù…ÛŒÚˆÛŒØ§',
                    addEmbed: 'ðŸ“Ž Ø§ÛŒÙ…Ø¨ÛŒÚˆ',
                    downloadZip: 'ðŸ“¦ ZIP ÚˆØ§Ø¤Ù†Ù„ÙˆÚˆ',
                    fullCodeView: 'ðŸ” Ù…Ú©Ù…Ù„ Ú©ÙˆÚˆ',
                    krakenChain: 'âš¡ iTAHA BUILDER | ØªØ®Ù„ÛŒÙ‚ Ú©Ø§Ø±: TAHA MUJTABA',
                    productionCode: 'âœ¨ Ù¾Ø±ÙˆÚˆÚ©Ø´Ù† Ú©ÙˆÚˆ (RAW)',
                    generating: 'ðŸ”„ Ø³Ø§Ø¦Ù¹ ØªÛŒØ§Ø± ÛÙˆ Ø±ÛÛŒ ÛÛ’...',
                    lines: 'Ù„Ø§Ø¦Ù†ÛŒÚº',
                    chars: 'Ø­Ø±ÙˆÙ',
                    pagesStat: 'ØµÙØ­Ø§Øª',
                    none: 'Ú©ÙˆØ¦ÛŒ Ù†ÛÛŒÚº',
                    newFrame: 'Ù†ÛŒØ§ ÙØ±ÛŒÙ…',
                    blankCanvas: 'Ø®Ø§Ù„ÛŒ Ú©ÛŒÙ†ÙˆØ³',
                    clickMe: 'Ú©Ù„Ú© Ú©Ø±ÛŒÚº',
                    headline: 'Ø³Ø±Ø®ÛŒ',
                    writeSomething: 'Ú©Ú†Ú¾ Ù…Ø¹Ù†ÛŒ Ø®ÛŒØ² Ù„Ú©Ú¾ÛŒÚº...',
                    exploreNow: 'Ø§Ø¨Ú¾ÛŒ Ø¯Ø±ÛŒØ§ÙØª Ú©Ø±ÛŒÚº',
                    closeSymbol: 'âœ•',
                    titleTextPlaceholder: 'Ø¹Ù†ÙˆØ§Ù† Ú©Ø§ Ù…ØªÙ†',
                    paragraphTextPlaceholder: 'Ù¾ÛŒØ±Ø§Ú¯Ø±Ø§Ù Ù…ØªÙ†',
                    buttonLabelPlaceholder: 'Ø¨Ù¹Ù† Ù„ÛŒØ¨Ù„',
                    linkURLPlaceholder: 'Ù„Ù†Ú© URL',
                    imageVideoURLPlaceholder: 'ØªØµÙˆÛŒØ±/ÙˆÛŒÚˆÛŒÙˆ URL',
                    embedRawPlaceholder: 'HTML / iframe Ø§ÛŒÙ…Ø¨ÛŒÚˆ Ú©Ø±ÛŒÚº',
                    fullStackOutput: 'ðŸ“„ Ù…Ú©Ù…Ù„ Ø¢Ø¤Ù¹ Ù¾Ù¹ â€“ ITAHA BUILDER',
                    closeModal: 'âœ– Ø¨Ù†Ø¯ Ú©Ø±ÛŒÚº',
                    zipCreated: 'âœ… ZIP ØªÛŒØ§Ø± ÛÙˆ Ú¯ÛŒØ§',
                    projectArchived: 'âœ… Ù…Ù†ØµÙˆØ¨Û Ù…Ø­ÙÙˆØ¸',
                    mediaAlt: 'Ù…ÛŒÚˆÛŒØ§',
                    frameworld: 'ITAHA BUILDER',
                    elementTypeTitle: 'Ø¹Ù†ÙˆØ§Ù†',
                    elementTypeText: 'Ù…ØªÙ†',
                    elementTypeButton: 'Ø¨Ù¹Ù†',
                    elementTypeMedia: 'Ù…ÛŒÚˆÛŒØ§',
                    elementTypeEmbed: 'Ø§ÛŒÙ…Ø¨ÛŒÚˆ',
                    krakenTitleTag: 'iTAHA BUILDER | ØªØ®Ù„ÛŒÙ‚ Ú©Ø§Ø±: TAHA MUJTABA',
                    statsTemplate: 'ðŸ“Š Ù„Ø§Ø¦Ù†ÛŒÚº: {0} | Ø­Ø±ÙˆÙ: {1} | ØµÙØ­Ø§Øª: {2}',
                },
            };

            const langMeta = [
                { code: 'en', name: 'English', flag: 'ðŸ‡¬ðŸ‡§' },
                { code: 'ru', name: 'Ð ÑƒÑÑÐºÐ¸Ð¹', flag: 'ðŸ‡·ðŸ‡º' },
                { code: 'ja', name: 'æ—¥æœ¬èªž', flag: 'ðŸ‡¯ðŸ‡µ' },
                { code: 'de', name: 'Deutsch', flag: 'ðŸ‡©ðŸ‡ª' },
                { code: 'es', name: 'EspaÃ±ol', flag: 'ðŸ‡ªðŸ‡¸' },
                { code: 'fr', name: 'FranÃ§ais', flag: 'ðŸ‡«ðŸ‡·' },
                { code: 'hi', name: 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', flag: 'ðŸ‡®ðŸ‡³' },
                { code: 'zh', name: 'ä¸­æ–‡', flag: 'ðŸ‡¨ðŸ‡³' },
                { code: 'ar', name: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', flag: 'ðŸ‡¸ðŸ‡¦' },
                { code: 'ur', name: 'Ø§Ø±Ø¯Ùˆ', flag: 'ðŸ‡µðŸ‡°' },
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
                toast.textContent = 'ðŸŒ ' + (langInfo ? langInfo.flag + ' ' + langInfo.name : langCode) +
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
                    title: 'ðŸ  Home',
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
                    '<span style="color:var(--primary);">ðŸ™ iTAHA BUILDER</span>';
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
                    document.getElementById('globalModeIcon').textContent = 'ðŸŒ™';
                } else {
                    document.body.classList.add('light-mode');
                    document.getElementById('globalModeIcon').textContent = 'â˜€ï¸';
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
                return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(t('frameworld'))} â€¢ Created by TAHA MUJTABA</title><style>
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
