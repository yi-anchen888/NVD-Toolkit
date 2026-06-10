/**
 * NVD 自生活
 * 功能：工具資料渲染、即時搜尋、分類篩選、收藏、深淺色主題、多語言切換、使用說明 Modal。
 */

const translations = {
  zh: {
    brandName: "NVD 自生活",
    pageTitle: "NVD 自生活",
    navHome: "首頁",
    navValues: "核心理念",
    navSoftware: "綠色軟體",
    navResilience: "友善專案",
    navManifesto: "理念宣言",
    navLoop: "參與共創",
    navGuide: "使用說明",
    navCommunity: "社群",
    languageLabel: "選擇語言",
    themeLightLabel: "切換為淺色主題",
    themeDarkLabel: "切換為深色主題",
    heroKicker: "NVD 生態系入口",
    heroTitle: "讓科技重新變得好用，也讓社會重新變得可通行。",
    heroSubtitle: "<strong>獻給台灣師字輩專業者與企業決策者的友善 AI 工具入口</strong>，以公益協作補上非資訊本業在 AI 時代最需要的數位橋梁。<span class='tagline'>讓深厚專業與科技效率彼此成就。</span>",
    searchLabel: "搜尋工具名稱、標籤或痛點",
    searchPlaceholder: "搜尋工具名稱、標籤或痛點...",
    statsProcessedFiles: "小工具已下載",
    homePrimaryCta: "下載安全合規版 v2.1",
    homeSecondaryCta: "看友善道路專案",
    homeTertiaryCta: "讀 NVD 理念",
    gatewayEyebrow: "Ecosystem Gateway",
    gatewayTitle: "三個入口，對應同一個使命",
    gatewayLead:
      "NVD 不是先要求認同，而是先提供可感受到的幫助，再把幫助轉成理解與參與。",
    gatewaySoftwareTitle: "綠色友善軟體",
    gatewaySoftwareText:
      "從轉檔、簡報還原與日常效率開始，讓人不用註冊、不背指令也能完成任務。",
    gatewayResilienceTitle: "社會韌性友善專案",
    gatewayResilienceText:
      "用模擬資料盤呈現城市障礙如何被標記、被理解，並走向可協作的改善。",
    gatewayJoinTitle: "參與共創",
    gatewayJoinText:
      "讓同學、師資與種子使用者從測試、回饋、分享開始，進入 NVD 友善科技循環。",
    valuesEyebrow: "Core Values",
    valuesTitle: "從工具開始，走向友善社會系統",
    valuesLead:
      "我們先幫人少卡一次，再讓每一次下載、測試與回饋，成為社會韌性的一個節點。",
    valueFrictionTitle: "降低摩擦",
    valueFrictionText: "把複雜指令、黑色視窗與繁瑣流程，折成更直覺的一鍵操作。",
    valueAccessTitle: "友善可及",
    valueAccessText:
      "讓專業前輩、企業經營者、無礙需求者與照護同行者，都能以更低摩擦接上 AI 時代的工具能力。",
    valueActionTitle: "從工具到行動",
    valueActionText:
      "每一次使用、分享與回饋，都能推動下一個更友善的工具與專案。",
    dualFrictionEyebrow: "Dual Friction",
    dualFrictionTitle: "我們想解決的，不只是工具問題",
    dualFrictionLead:
      "數位流程會卡住人，城市空間也會卡住人。NVD 把這些摩擦視為可以被看見、被降低、被改善的系統問題。",
    digitalFrictionTitle: "數位摩擦",
    digitalFrictionText:
      "複雜指令、軟體門檻、轉檔流程與介面焦慮，讓很多人明明有需求，卻被工具擋在門外。",
    physicalFrictionTitle: "生活摩擦",
    physicalFrictionText:
      "高低差、斷裂人行道、資訊不透明與不友善動線，讓日常移動變成被迫繞路、等待或放棄。",
    softwareEyebrow: "Green Friendly Software",
    softwareLead:
      "不用註冊、不逼學指令、不製造更多焦慮，只為了讓人更快完成事情。",
    productEyebrow: "安全合規版 v2.1",
    productHeroTitle: "NVD 友善軟體與知識圖書館",
    productHeroLead:
      "整合本地端友善軟體、知識文件與安全說明，讓下載、使用與驗證流程更直覺，也更安心。",
    productHeroPrimaryCta: "下載安全合規版 v2.1 →",
    productHeroSecondaryCta: "查看使用流程 →",
    productCardKicker: "NVD LIFE OS",
    productCardTitle: "NVD 友善軟體與知識圖書館",
    productCardDescription:
      "一份獻給台灣師字輩專業者、企業經營者與跨域決策者的友善 AI 工具入口，以公益協作補上非資訊本業的數位落差。",
    productBadgeBusiness: "本地端",
    productBadgeBinding: "安全合規",
    productBadgeElite: "知識圖書館",
    productBadgeNoSerial: "免註冊",
    productPainEyebrow: "Executive Friction",
    productPainTitle: "你不該為了簡報，暫時變成 IT 管理員。",
    productPainLead:
      "醫師、律師、顧問、企業主與頂尖業務的時間，應該花在判斷、說服、成交與策略，而不是卡在序號、設定、格式還原與技術盲區。",
    productPainStrategyTitle: "高階思考，不該被低階設定中斷",
    productPainStrategyText:
      "當你正在準備關鍵簡報，真正稀缺的是注意力。這套工具包把繁瑣設定收進背景，讓你保持在決策節奏裡。",
    productPainBandwidthTitle: "非資訊本業，也能乾淨完成",
    productPainBandwidthText:
      "不需要理解技術細節、不需要找人救火，也不需要在黑色視窗和授權流程之間消耗專業能量。",
    productFeatureEyebrow: "Zero-Friction Features",
    productFeatureTitle: "把技術摩擦壓到最低，把專業價值放到最大。",
    productFeatureAutoTitle: "免序號自動綁定",
    productFeatureAutoText:
      "降低授權與設定摩擦，讓工具啟動後直接進入可用狀態。",
    productFeatureClickTitle: "點擊即用",
    productFeatureClickText:
      "以非技術使用者為核心設計，減少流程判斷與操作成本。",
    productFeatureDeckTitle: "聚焦關鍵簡報",
    productFeatureDeckText:
      "協助你把注意力留給內容、邏輯、客戶與決策，而不是工具本身。",
    productAudienceEyebrow: "Fit Check",
    productAudienceTitle: "先確認它是不是你需要的工具。",
    productAudienceDoctor: "適合：師字輩專業者、企業決策者，或希望降低 AI 工具門檻與設定風險的人。",
    productAudienceLawyer: "適合：需要本地端使用、清楚來源與安全驗證資訊的人。",
    productAudienceOwner: "不適合：需要雲端多人協作或企業 IT 大規模部署的人。",
    productAudienceSales: "不適合：不願意自行確認來源、掃描檔案或閱讀安全提醒的人。",
    productWorkflowEyebrow: "Workflow",
    productWorkflowTitle: "五步驟，把工具變成成果。",
    productStepOneTitle: "下載",
    productStepOneText: "從官方連結取得工具，保留清楚來源。",
    productStepTwoTitle: "開啟",
    productStepTwoText: "不需要先研究技術文件，直接進入操作。",
    productStepThreeTitle: "自動綁定",
    productStepThreeText: "免輸入序號，降低授權流程的干擾。",
    productStepFourTitle: "還原簡報",
    productStepFourText: "讓工具協助處理繁瑣還原工作。",
    productStepFiveTitle: "使用成果",
    productStepFiveText: "把時間交還給內容修整、演示與決策。",
    productSecurityEyebrow: "Trust & Safety",
    productSecurityTitle: "下載可以簡單，來源必須清楚。",
    productSecurityText: "這套工具包不要求註冊，保留官方下載連結、檔案版本、SHA-256 與安全提醒。執行任何 EXE 前，請確認來源並以系統防護工具掃描。",
    productSecurityDetailSummary: "查看安全下載提醒",
    productSecurityDetailOne:
      "僅從本頁提供的官方連結下載，避免使用來路不明的轉傳檔案。",
    productSecurityDetailTwo:
      "下載後先以 Windows Defender 或常用防毒軟體掃描，再執行 EXE。",
    productSecurityDetailThree:
      "若檔案來源、大小或發布說明與頁面不一致，請先停止執行並回報。",
    downloadCheckVersionLabel: "目前版本",
    downloadCheckVersionValue: "v2.1",
    downloadCheckTypeLabel: "檔案類型",
    downloadCheckTypeValue: "RAR 壓縮檔",
    downloadCheckAudienceLabel: "適合對象",
    downloadCheckAudienceValue: "師字輩專業者、企業經營者、跨域決策者",
    productVerificationSummary: "查看檔案驗證資訊",
    productVerificationFileLabel: "檔案名稱",
    productVerificationUpdatedLabel: "更新日期",
    productVerificationUpdatedValue: "2026-06-05",
    productVerificationShaLabel: "SHA-256",
    filterTitle: "先從一個真的好用的小工具開始",
    resultCount: "{count} 個工具",
    categoryAll: "全部",
    categoryOffice: "辦公效率",
    categoryFavorites: "我的收藏",
    categoryUnknown: "未分類",
    shareTool: "分享 {name} 連結",
    linkCopied: "已成功複製 {name} 的連結！",
    favoriteAdded: "已將 {name} 加入我的收藏！",
    favoriteRemoved: "已將 {name} 從我的收藏移除！",
    emptyTitle: "沒有找到符合條件的工具",
    emptyText: "換個關鍵字或切回全部分類試試看。",
    resilienceEyebrow: "Project B Simulation",
    resilienceTitle: "社會韌性友善專案模擬區",
    resilienceLead:
      "我們想做的不只是地圖，而是一套讓城市障礙被看見的公民科技系統。把生活中的障礙，變成可以被標記、被理解、被改善的資料。",
    resiliencePointOne: "群眾回報高低差、騎樓障礙與不友善動線。",
    resiliencePointTwo: "用模擬數據呈現熱區、改善點與參與節點。",
    resiliencePointThree: "讓同學、師資與種子使用者一起測試與微調。",
    dashboardTitle: "友善道路即時數據沙盤",
    metricParticipants: "市民參與數",
    metricReports: "障礙回報",
    metricImprovements: "促成改善點",
    metricHotspots: "熱區分布",
    metricHotspotsValue: "三民區 32%",
    demoFrontLabel: "Front-end Civic Capture",
    demoFrontTitle: "真實視角障礙回報端",
    demoGpsTitle: "自動抓取 GIS 座標中",
    demoTagHeight: "高低差",
    demoTagParking: "違停",
    demoTagGravel: "碎石",
    demoSubmit: "發起友善道路回報",
    demoStatusDetecting: "🔍 正在自動偵測周遭環境風險...",
    demoStatusLocation: "📍 鎖定位置：高雄市三民區",
    demoStatusLabel: "⚠️ 偵測到路面狀況：【高低落差】",
    demoStatusReady: "正在將現場數據 ➔ 轉化為社會韌性資產...",
    demoStatusEncrypting: "正在將現場數據 ➔ 轉化為社會韌性資產...",
    demoBackendStatus: "GIS Monitor / Kaohsiung Node",
    demoScoreLabel: "Social Resilience Score",
    demoSuccess: "現場數據已轉化為社會韌性資產",
    loopEyebrow: "Friendly Tech Loop",
    loopTitle: "從下載到認同：NVD 的友善科技循環",
    loopLead:
      "NVD 不是用注意力換點擊，而是用工具建立信任。從解決痛點，到建立認同，再到參與共創。",
    loopUseTitle: "使用工具",
    loopUseText: "從轉檔、整理、還原簡報這類小痛點開始，讓使用者先感受到省力。",
    loopTrustTitle: "建立認同",
    loopTrustText:
      "工具真的好用，使用者就會理解友善科技不是口號，而是少一次卡關。",
    loopCoCreateTitle: "參與共創",
    loopCoCreateText:
      "分享工具、回饋問題、協助測試，讓下一個人更容易使用科技。",
    frictionEyebrow: "Technology Friction",
    frictionTitle: "科技讓我們進化，還是退化？",
    frictionLead:
      "人類花了數百萬年學會挺直脊椎，卻在科技爆炸的今天，因為繁瑣指令與黑色視窗，再度駝下背。NVD 自生活誕生，就是為了用滑鼠右鍵的一鍵自動化，終結退化，還給每個人最直覺、最省力的自生活。",
    frictionCardOneTitle: "我們曾經學會直立",
    frictionCardOneText:
      "文明的演化，應該讓人更自由、更省力，而不是被工具反過來壓低姿態。",
    frictionCardTwoTitle: "科技不該讓人駝背",
    frictionCardTwoText:
      "黑色視窗、複雜指令與層層設定，都是不該由使用者承擔的摩擦力。",
    frictionCardThreeTitle: "每個人都會走向不同階段",
    frictionCardThreeText:
      "當我們走到生命後半段，難道就注定被現代科技拋棄，只能對著電腦發愁嗎？",
    manifestoEyebrow: "The Sovereign Manifesto",
    manifestoTitle: "核心主權宣言",
    manifestoQuote: "「現在的我們，就是未來的你們。」",
    manifestoLead:
      "我們不是在乞求同情，而是在以全人先驅者的姿態，為人類提前建設「社會友善韌性工程」。當世界還在討論被動扶助，NVD 已經在定義規則。",
    manifestoNatureSymbol: "N (Nature) —— 天生、本然、無所畏懼。",
    manifestoNatureTitle: "天生玩家",
    manifestoNatureText:
      "生命不是一場等待被拯救的苦旅，而是一場頂級的硬核遊戲。打破體制設定的局限，我們以天生的姿態，在社會韌性的沙盒中重新定義玩法。我們是規則的打破者，也是全新賽道的定義者。",
    manifestoValueSymbol: "V (Value) —— 本我價值、不容置疑。",
    manifestoValueTitle: "本我定值",
    manifestoValueText:
      "拒絕標籤，拒絕被社會殘留的估值系統定義。我們的存在，本身就是最高級別的資產。在集體意識共鳴的浪潮中，我們將被動的弱勢逆向轉譯，奪回價值的終極定價權。",
    manifestoDaysSymbol: "D (Days) —— 跨越過去、現在與未來的日子。",
    manifestoDaysTitle: "無礙永日",
    manifestoDaysText:
      "這不是一場短期的倡議，而是一場跨越時間軸的社會韌性工程。我們所建造的未來，是讓每一個推著嬰兒車的母親、意外受傷的強者、以及終將老去的靈魂，都能在時間的流逝中，擁有無所阻礙的永恆日常。",
    manifestoLogicSymbol: "Sovereign Logic —— 規則定義者。",
    manifestoLogicTitle: "全人先驅",
    manifestoLogicText:
      "領先時代的步伐，我們率先踏入高階資產工程學的實踐場。以傲然的姿態，站在人類集體演化的前沿。這不是為了特定族群而做的妥協，這是為全人類提前建構的社會韌性防線。",
    manifestoResilienceSymbol:
      "Social Resilience Engineering —— 社會韌性工程。",
    manifestoResilienceTitle: "韌性架構",
    manifestoResilienceText:
      "拒絕溫吞的文青呢喃，我們用跨域邏輯進行結構性壓制。將傳統公益的碎步，升級為系統化的社會韌性架構。NVD 是地基、是框架、是未來社會運行的頂層協議。",
    visitSite: "直達網站",
    favoriteTool: "收藏 {name}",
    footerCopy:
      "© 2026 NVD 自生活. Curated practical tools for smarter workflows.",
    footerIntroTitle: "把複雜科技，折成一鍵生活。",
    footerIntroText:
      "為台灣專業前輩與企業領袖整理更低摩擦的工具入口，讓每一次下載、驗證與導入都更安心、更體面。",
    footerProductsTitle: "產品",
    footerProductTools: "NVD 友善軟體與知識圖書館",
    footerProductConverter: "使用流程",
    footerProductSlides: "下載與安全",
    footerGuidesTitle: "理念",
    footerGuideQuickStart: "核心主權宣言",
    footerGuideRightClick: "科技摩擦",
    footerGuideSlides: "友善科技循環",
    footerGuideFriction: "NVD 生態入口",
    footerGuidePrivacy: "降低數位摩擦",
    footerGuideElderFriendly: "友善設計理念",
    footerCompareTitle: "專案",
    footerCompareNvdVsCommand: "社會韌性友善專案",
    footerCompareNvdVsManual: "參與共創",
    footerCompareNvdVsOnline: "高雄友善道路模擬",
    footerComparePptx: "種子測試",
    footerCompareWorkflow: "回饋與協作",
    footerCompanyTitle: "公司",
    footerCompanyAbout: "關於 NVD 自生活",
    footerCompanyFaq: "常見問題",
    footerCompanyUpdates: "更新日誌",
    footerCompanyPrivacy: "隱私權政策",
    footerCompanyTerms: "服務條款",
    footerPrivacyNote: "100% 本地優先 · 不收集敏感資料 · 無需帳戶",
    modalTitle: "使用說明手冊",
    privacyTitle: "隱私權政策",
    termsTitle: "服務條款",
    legalUpdated: "最後更新：2026 年 5 月 30 日",
    privacySectionScope: "我們如何保護你的資料",
    privacyScopeText:
      "NVD 自生活是純前端靜態網站。本網站不要求註冊帳號，也不會主動收集你的姓名、電子郵件、檔案內容或付款資料。",
    privacySectionStorage: "本機儲存資料",
    privacyStorageText:
      "網站會在你的瀏覽器 localStorage 中保存語言、深淺色主題與收藏清單，僅用於維持你的使用偏好。你可以隨時透過瀏覽器清除網站資料。",
    privacySectionThirdParty: "第三方服務",
    privacyThirdPartyText:
      "本網站透過 GitHub Pages 提供頁面，並可能載入 Google Fonts、Font Awesome 與 Google Drive 下載連結。這些服務可能依各自政策處理基本連線紀錄。",
    privacySectionDownloads: "下載與工具使用",
    privacyDownloadsText:
      "下載工具後，請確認來源並使用防毒軟體掃描。本網站不會讀取你的本機檔案內容；外部工具或第三方網站的資料處理方式，請以該服務提供者的政策為準。",
    termsSectionService: "服務內容",
    termsServiceText:
      "本網站提供實用工具推薦、下載連結、使用說明與相關資源整理。部分連結會導向第三方網站或雲端硬碟下載頁。",
    termsSectionUse: "使用責任",
    termsUseText:
      "使用者應自行確認工具是否符合需求，並遵守所在地法律與第三方服務規範。請勿使用本網站或相關工具處理、散布或侵害他人權利的內容。",
    termsSectionDownloads: "下載風險提醒",
    termsDownloadsText:
      "本站會盡力維護連結與說明的正確性，但無法保證所有第三方工具、下載檔案或外部網站永久可用或完全無風險。執行可執行檔前，請先確認來源並掃描檔案。",
    termsSectionChanges: "內容異動",
    termsChangesText:
      "我們可能依專案進度調整工具清單、連結、政策與條款。更新後的內容會公布於本頁，繼續使用網站即代表你了解並接受更新內容。",
    modalStepsTitle: "極簡 3 步驟輕鬆上手",
    stepOneTitle: "選功能與下載",
    stepOneText: "在網站中選擇您需要的工具分類，點擊直達連結或下載點取得工具。",
    stepTwoTitle: "一鍵自動化",
    stepTwoText:
      "程式皆經過極簡設計，開啟後只需一鍵點擊，便能自動啟動處理流程。",
    stepThreeTitle: "直達結果下載",
    stepThreeText:
      "無任何繁雜設定，處理完成的檔案將自動輸出，即刻下載並投入工作。",
    faqTitle: "常見問題 FAQ",
    faqOneQuestion: "Q: 使用這些工具需要付費或註冊嗎？",
    faqOneAnswer:
      "本站推薦的部分客製工具提供免費下載，其餘外部工具則視原廠政策而定，多數均有免註冊免費體驗額度。",
    faqTwoQuestion: "Q: 開啟打包工具時若被防毒軟體攔截該怎麼辦？",
    faqTwoAnswer:
      "由於本地工具通常是獨立可執行檔，Windows Defender 等可能會出現誤報。若您信任來源，可依系統提示選擇仍要執行。",
    faqThreeQuestion: "Q: 下載 EXE 工具前需要注意什麼？",
    faqThreeAnswer:
      "請只從本站卡片提供的官方連結下載，下載後可先使用防毒軟體掃描。若系統跳出未知來源提醒，請確認檔名與來源後再執行。",
    modalConfirm: "我知道了",
  },
  en: {
    brandName: "NVD Life",
    pageTitle: "NVD Life, Friendly Tech Ecosystem",
    navHome: "Home",
    navValues: "Values",
    navSoftware: "Green Software",
    navResilience: "Friendly Project",
    navManifesto: "Manifesto",
    navLoop: "Co-create",
    navGuide: "Guide",
    navCommunity: "Community",
    languageLabel: "Choose language",
    themeLightLabel: "Switch to light mode",
    themeDarkLabel: "Switch to dark mode",
    heroKicker: "NVD Ecosystem Gateway",
    heroTitle: "Make technology usable again, and make society passable again.",
    heroSubtitle: "<strong>A friendly AI tool gateway for Taiwan's senior professionals and business decision-makers</strong>, bridging non-technical leaders into the AI era through civic collaboration. <span class='tagline'>Let deep expertise and practical technology strengthen each other.</span>",
    searchLabel: "Search by tool name, tag, or pain point",
    searchPlaceholder: "Search by tool name, tag, or pain point...",
    statsProcessedFiles: "tools downloaded",
    homePrimaryCta: "Download Safe Compliance v2.1",
    homeSecondaryCta: "View friendly road project",
    homeTertiaryCta: "Read NVD manifesto",
    gatewayEyebrow: "Ecosystem Gateway",
    gatewayTitle: "Three gateways, one mission",
    gatewayLead:
      "NVD does not demand belief first. It offers tangible help, then turns help into understanding and participation.",
    gatewaySoftwareTitle: "Green Friendly Software",
    gatewaySoftwareText:
      "Start with conversion, slide recovery, and everyday workflows so people can finish tasks without accounts or commands.",
    gatewayResilienceTitle: "Social Resilience Friendly Project",
    gatewayResilienceText:
      "Use a simulated data board to show how city barriers can be marked, understood, and improved collaboratively.",
    gatewayJoinTitle: "Co-create",
    gatewayJoinText:
      "Invite classmates, mentors, and seed users to test, give feedback, share, and enter the NVD friendly tech loop.",
    valuesEyebrow: "Core Values",
    valuesTitle: "Start with tools, move toward a friendlier social system",
    valuesLead:
      "We help people get unstuck first, then turn every download, test, and feedback loop into a node of social resilience.",
    valueFrictionTitle: "Reduce Friction",
    valueFrictionText:
      "Fold complex commands, terminals, and tedious workflows into more intuitive one-click actions.",
    valueAccessTitle: "Accessible by Design",
    valueAccessText:
      "Help established professionals, business leaders, accessibility communities, and care partners connect with AI-era tools with less friction.",
    valueActionTitle: "From Tools to Action",
    valueActionText:
      "Every use, share, and feedback loop can push the next friendlier tool or project forward.",
    dualFrictionEyebrow: "Dual Friction",
    dualFrictionTitle: "We are solving more than a tooling problem",
    dualFrictionLead:
      "Digital workflows can block people. City spaces can block people too. NVD treats these frictions as system issues that can be seen, reduced, and improved.",
    digitalFrictionTitle: "Digital Friction",
    digitalFrictionText:
      "Complex commands, software barriers, conversion workflows, and interface anxiety keep people outside the tools they need.",
    physicalFrictionTitle: "Life Friction",
    physicalFrictionText:
      "Level differences, broken sidewalks, opaque information, and unfriendly routes turn everyday movement into detours, waiting, or giving up.",
    softwareEyebrow: "Green Friendly Software",
    softwareLead:
      "No registration pressure, no forced command learning, no extra anxiety. Just small tools that help people finish work faster.",
    productEyebrow: "Safe Compliance v2.1",
    productHeroTitle: "NVD Friendly Software and Knowledge Library",
    productHeroLead:
      "A local-first friendly software and knowledge package with clearer download, usage, and verification guidance for safer everyday workflows.",
    productHeroPrimaryCta: "Download Safe Compliance v2.1 →",
    productHeroSecondaryCta: "View workflow →",
    productCardKicker: "NVD LIFE OS",
    productCardTitle: "NVD Friendly Software and Knowledge Library",
    productCardDescription:
      "A refined AI tool gateway for senior professionals, business owners, and cross-domain decision-makers, reducing setup friction while preserving source clarity and safety checks.",
    productBadgeBusiness: "Local-first",
    productBadgeBinding: "Safety checks",
    productBadgeElite: "Knowledge library",
    productBadgeNoSerial: "No account",
    productPainEyebrow: "Executive Friction",
    productPainTitle:
      "You should not have to become an IT admin just to get a deck right.",
    productPainLead:
      "Doctors, lawyers, consultants, SME owners, and top sales professionals should spend time on judgment, persuasion, deals, and strategy, not serial codes, settings, deck recovery, and technical blind spots.",
    productPainStrategyTitle:
      "High-level thinking should not be interrupted by low-level setup",
    productPainStrategyText:
      "When a key presentation is on the line, attention is scarce. This toolkit moves tedious setup into the background so you can stay in decision rhythm.",
    productPainBandwidthTitle: "Clean execution for non-technical leaders",
    productPainBandwidthText:
      "No need to understand technical details, find emergency help, or burn expert energy inside terminals and license flows.",
    productFeatureEyebrow: "Zero-Friction Features",
    productFeatureTitle:
      "Minimize technical overhead. Maximize professional value.",
    productFeatureAutoTitle: "No-serial automatic binding",
    productFeatureAutoText:
      "Reduce license and setup friction so the tool opens into a usable state.",
    productFeatureClickTitle: "Click-to-use workflow",
    productFeatureClickText:
      "Designed around non-technical users to reduce process decisions and operating cost.",
    productFeatureDeckTitle: "Built for key presentations",
    productFeatureDeckText:
      "Keep your attention on content, logic, clients, and decisions instead of the tool itself.",
    productAudienceEyebrow: "Fit Check",
    productAudienceTitle: "Check whether this is the right tool for you.",
    productAudienceDoctor: "Good fit: senior professionals, business decision-makers, or anyone seeking lower-friction AI tool adoption.",
    productAudienceLawyer: "Good fit: people who need local-first use, clear sources, and verification details.",
    productAudienceOwner: "Not a fit: teams needing cloud collaboration or large-scale enterprise IT deployment.",
    productAudienceSales: "Not a fit: users unwilling to verify the source, scan files, or read safety notes.",
    productWorkflowEyebrow: "Workflow",
    productWorkflowTitle: "Five steps from tool to outcome.",
    productStepOneTitle: "Download",
    productStepOneText:
      "Get the tool from the official link with a clear source.",
    productStepTwoTitle: "Open",
    productStepTwoText:
      "Start directly without studying technical documentation first.",
    productStepThreeTitle: "Auto bind",
    productStepThreeText: "No serial input, less licensing interruption.",
    productStepFourTitle: "Recover deck",
    productStepFourText: "Let the tool handle tedious recovery work.",
    productStepFiveTitle: "Use result",
    productStepFiveText:
      "Spend time on content refinement, delivery, and decisions.",
    productSecurityEyebrow: "Trust & Safety",
    productSecurityTitle: "Downloads can be simple. Sources must stay clear.",
    productSecurityText: "This toolkit does not require account registration and keeps the official download link, version, SHA-256, and safety notes available. Before running any EXE, verify the source and scan it with system protection tools.",
    productSecurityDetailSummary: "View safe download reminders",
    productSecurityDetailOne:
      "Download only from the official link on this page and avoid forwarded files from unknown sources.",
    productSecurityDetailTwo:
      "Scan the downloaded file with Windows Defender or your preferred antivirus before running the EXE.",
    productSecurityDetailThree:
      "If the source, file size, or release note does not match this page, stop and report it first.",
    downloadCheckVersionLabel: "Current version",
    downloadCheckVersionValue: "v2.1",
    downloadCheckTypeLabel: "File type",
    downloadCheckTypeValue: "RAR archive",
    downloadCheckAudienceLabel: "Best for",
    downloadCheckAudienceValue: "Senior professionals, business leaders, and cross-domain decision-makers",
    productVerificationSummary: "View file verification details",
    productVerificationFileLabel: "File name",
    productVerificationUpdatedLabel: "Updated",
    productVerificationUpdatedValue: "2026-06-05",
    productVerificationShaLabel: "SHA-256",
    filterTitle: "Start with one tool that genuinely helps",
    resultCount: "{count} tools",
    categoryAll: "All",
    categoryOffice: "Office",
    categoryFavorites: "My Favorites",
    categoryUnknown: "Uncategorized",
    shareTool: "Share {name} link",
    linkCopied: "Successfully copied link for {name}!",
    favoriteAdded: "Added {name} to your favorites!",
    favoriteRemoved: "Removed {name} from your favorites!",
    emptyTitle: "No matching tools found",
    emptyText: "Try another keyword or switch back to all categories.",
    resilienceEyebrow: "Project B Simulation",
    resilienceTitle: "Social Resilience Friendly Project Simulation",
    resilienceLead:
      "We are not trying to build just another map. We are imagining a civic tech system that makes city barriers visible, understandable, and improvable.",
    resiliencePointOne:
      "Crowdsourced reports for level differences, sidewalk barriers, and unfriendly routes.",
    resiliencePointTwo:
      "Simulated metrics for hotspots, improvements, and participation nodes.",
    resiliencePointThree:
      "Classmates, mentors, and seed users can test and tune the concept together.",
    dashboardTitle: "Friendly Road Live Data Sandbox",
    metricParticipants: "Citizen participants",
    metricReports: "Barrier reports",
    metricImprovements: "Improvements sparked",
    metricHotspots: "Hotspot split",
    metricHotspotsValue: "Sanmin 32%",
    demoFrontLabel: "Front-end Civic Capture",
    demoFrontTitle: "Street-level barrier report terminal",
    demoGpsTitle: "Capturing GIS coordinates",
    demoTagHeight: "Height gap",
    demoTagParking: "Illegal parking",
    demoTagGravel: "Loose gravel",
    demoSubmit: "Report friendly road issue",
    demoStatusDetecting: "🔍 Auto-detecting nearby accessibility risks...",
    demoStatusLocation: "📍 Location locked: Sanmin District, Kaohsiung",
    demoStatusLabel: "⚠️ Road condition detected: height gap",
    demoStatusReady: "Turning field data into a social resilience asset...",
    demoStatusEncrypting:
      "Turning field data into a social resilience asset...",
    demoBackendStatus: "GIS Monitor / Kaohsiung Node",
    demoScoreLabel: "Social Resilience Score",
    demoSuccess: "Field data converted into a social resilience asset.",
    loopEyebrow: "Friendly Tech Loop",
    loopTitle: "From download to belief: the NVD friendly tech loop",
    loopLead:
      "NVD does not trade attention for clicks. It builds trust through useful tools, then turns solved pain points into belief and co-creation.",
    loopUseTitle: "Use a tool",
    loopUseText:
      "Begin with small pain points like conversion, organization, and slide recovery so users feel the relief first.",
    loopTrustTitle: "Build trust",
    loopTrustText:
      "When the tool truly helps, users understand that friendly technology means one less moment of being stuck.",
    loopCoCreateTitle: "Co-create",
    loopCoCreateText:
      "Share tools, report issues, and help test so the next person can use technology more easily.",
    frictionEyebrow: "Technology Friction",
    frictionTitle: "Does technology evolve us, or regress us?",
    frictionLead:
      "Humans spent millions of years learning to stand upright. Yet, in today's tech explosion, complex commands and black terminals have made us hunch again. NVD Life Toolkit is born to end this regression with one-click automation, restoring intuitive and effortless living for everyone.",
    frictionCardOneTitle: "We Once Learned to Stand Upright",
    frictionCardOneText:
      "Evolution of civilization should bring freedom and ease, not force us to bend down for our tools.",
    frictionCardTwoTitle: "Technology Shouldn't Make Us Hunch",
    frictionCardTwoText:
      "Terminal windows, cryptic commands, and complex settings are frictions that users should never have to bear.",
    frictionCardThreeTitle: "Everyone Journeys Through Different Stages",
    frictionCardThreeText:
      "As we reach the later stages of life, are we destined to be abandoned by modern tech, left to struggle in front of a computer screen?",
    manifestoEyebrow: "The Sovereign Manifesto",
    manifestoTitle: "Core Sovereign Manifesto",
    manifestoQuote: '"Who we are now is who you will become."',
    manifestoLead:
      "We are not asking for sympathy. We stand as whole-person pioneers, building social-friendly resilience engineering ahead of time. While the world still discusses passive support, NVD is already defining the rules.",
    manifestoNatureSymbol: "N (Nature) — innate, original, fearless.",
    manifestoNatureTitle: "Born Players",
    manifestoNatureText:
      "Life is not a bitter path waiting for rescue. It is a high-level hard-mode game. By breaking the limits of default systems, we redefine play inside the sandbox of social resilience. We are rule breakers and builders of a new track.",
    manifestoValueSymbol: "V (Value) — inherent value beyond dispute.",
    manifestoValueTitle: "Intrinsic Value",
    manifestoValueText:
      "We reject labels and refuse to be priced by outdated social valuation systems. Our existence is already a high-level asset. Through shared consciousness, we reverse passive disadvantage and reclaim the ultimate right to define value.",
    manifestoDaysSymbol: "D (Days) — days across past, present, and future.",
    manifestoDaysTitle: "Barrier-Free Days",
    manifestoDaysText:
      "This is not a short-term campaign. It is a social resilience project across time. The future we build lets mothers with strollers, strong people facing injury, and every aging soul keep an everyday life without barriers.",
    manifestoLogicSymbol: "Sovereign Logic — rule definers.",
    manifestoLogicTitle: "Whole-Person Pioneers",
    manifestoLogicText:
      "Ahead of our era, we enter the practice field of advanced asset engineering. This is not a compromise for a specific group. It is a social resilience defense line built early for all humanity.",
    manifestoResilienceSymbol: "Social Resilience Engineering.",
    manifestoResilienceTitle: "Resilience Architecture",
    manifestoResilienceText:
      "We move beyond gentle slogans and use cross-domain logic to reshape structures. We upgrade scattered charity into a systematic architecture for social resilience. NVD is the foundation, framework, and future protocol for society.",
    visitSite: "Visit site",
    favoriteTool: "Save {name}",
    footerCopy:
      "© 2026 NVD Life, Practical Toolkit. Curated practical tools for smarter workflows.",
    footerIntroTitle: "Fold complex technology into one-click living.",
    footerIntroText:
      "A refined tool gateway for established professionals and business leaders, making every download, verification step, and adoption decision feel safer and more dignified.",
    footerProductsTitle: "Product",
    footerProductTools: "NVD Friendly Software Library",
    footerProductConverter: "Workflow",
    footerProductSlides: "Download and safety",
    footerGuidesTitle: "Ideas",
    footerGuideQuickStart: "Sovereign manifesto",
    footerGuideRightClick: "Technology friction",
    footerGuideSlides: "Friendly tech loop",
    footerGuideFriction: "NVD ecosystem gateway",
    footerGuidePrivacy: "Reduce digital friction",
    footerGuideElderFriendly: "Friendly design principles",
    footerCompareTitle: "Projects",
    footerCompareNvdVsCommand: "Social resilience project",
    footerCompareNvdVsManual: "Co-create",
    footerCompareNvdVsOnline: "Kaohsiung road simulation",
    footerComparePptx: "Seed testing",
    footerCompareWorkflow: "Feedback and collaboration",
    footerCompanyTitle: "Company",
    footerCompanyAbout: "About NVD Life",
    footerCompanyFaq: "FAQ",
    footerCompanyUpdates: "Changelog",
    footerCompanyPrivacy: "Privacy Policy",
    footerCompanyTerms: "Terms of Service",
    footerPrivacyNote:
      "100% local-first · no sensitive data collection · no account required",
    modalTitle: "User Guide",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    legalUpdated: "Last updated: May 30, 2026",
    privacySectionScope: "How we protect your data",
    privacyScopeText:
      "NVD Life, Practical Toolkit is a static front-end website. This site does not require an account and does not actively collect your name, email address, file contents, or payment information.",
    privacySectionStorage: "Local browser storage",
    privacyStorageText:
      "The site stores language, theme, and favorite-tool preferences in your browser localStorage only to keep your experience consistent. You can clear this site data through your browser at any time.",
    privacySectionThirdParty: "Third-party services",
    privacyThirdPartyText:
      "This site is hosted on GitHub Pages and may load Google Fonts, Font Awesome, and Google Drive download links. These services may process basic connection logs under their own policies.",
    privacySectionDownloads: "Downloads and tool usage",
    privacyDownloadsText:
      "After downloading a tool, verify the source and scan the file with antivirus software. This website does not read your local file contents. Data handling by external tools or third-party websites is governed by those providers.",
    termsSectionService: "Service scope",
    termsServiceText:
      "This site provides practical tool recommendations, download links, usage notes, and related resources. Some links may lead to third-party websites or cloud-drive download pages.",
    termsSectionUse: "User responsibility",
    termsUseText:
      "You are responsible for confirming whether each tool fits your needs and for complying with local laws and third-party service rules. Do not use this site or related tools to process, distribute, or infringe content that violates others' rights.",
    termsSectionDownloads: "Download risk notice",
    termsDownloadsText:
      "We try to keep links and descriptions accurate, but cannot guarantee that every third-party tool, download file, or external website will remain available or risk-free. Before running executable files, verify the source and scan the file.",
    termsSectionChanges: "Changes",
    termsChangesText:
      "We may update the tool list, links, policies, and terms as the project evolves. Updated content will be posted on this page. Continued use of the site means you understand and accept the updates.",
    modalStepsTitle: "Get started in 3 simple steps",
    stepOneTitle: "Choose and download",
    stepOneText:
      "Pick the tool category you need, then use the direct link or download page to get the tool.",
    stepTwoTitle: "Run with one click",
    stepTwoText:
      "Each tool is designed to be simple. Open it, click once, and let the automated workflow begin.",
    stepThreeTitle: "Get your result",
    stepThreeText:
      "No complicated setup. Processed files are exported automatically so you can use them right away.",
    faqTitle: "FAQ",
    faqOneQuestion: "Q: Do these tools require payment or registration?",
    faqOneAnswer:
      "Some custom tools on this site are free to download. External tools follow their own policies, and many offer free trials.",
    faqTwoQuestion: "Q: What if antivirus software blocks a packaged tool?",
    faqTwoAnswer:
      "Local tools are often standalone executable files, so Windows Defender may warn you. If you trust the source, follow the system prompt to continue.",
    faqThreeQuestion: "Q: What should I check before downloading EXE tools?",
    faqThreeAnswer:
      "Only download from the official links shown on this site. After downloading, scan the file with antivirus software. If your system warns about an unknown source, confirm the filename and source before running it.",
    modalConfirm: "Got it",
  },
};

const tools = [
  {
    id: 1,
    categoryKey: "office",
    categoryLabelKey: "categoryOffice",
    url: "https://drive.google.com/file/d/1_5wVJ22QtDKWQ_ZuBXqF7FS2o-hesIRg/view?usp=sharing",
    sha256: "EA13205FB2BECB374AF93F04A335F5613B96B663C9CF46C341F80DC43486942C",
    imageIcon: "fa-solid fa-file-powerpoint",
    i18n: {
      zh: {
        name: "NVD友善軟體與知識圖書館_安全合規版_v2.1",
        description:
          "專為非資訊本業的頂尖專家與商務決策者打造。我們深知您的專業價值在於策略與洞察，不該耗費在繁瑣的技術盲區中。免輸入序號即刻自動綁定，用零設定的直覺操作，讓科技無縫配合您的思維，完美呈現關鍵簡報。",
        tags: ["商務簡報", "自動綁定", "跨界菁英首選", "免序號"],
        ctaText: "下載 NVD 友善軟體 →",
      },
      en: {
        name: "NVD Friendly Software and Knowledge Library Safe Compliance Edition v2.1",
        description:
          "Built for elite non-technical professionals and business decision makers. Your expertise belongs in strategy and insight, not in tedious technical setup. Automatic binding with no serial-number friction gives you a zero-configuration workflow that keeps technology aligned with your thinking and restores key presentations cleanly.",
        tags: [
          "Business decks",
          "Auto binding",
          "Elite operators",
          "No serial code",
        ],
        ctaText: "Download NVD Friendly Software →",
      },
    },
  },


];

const simulatedStats = {
  processedFilesBase: 1312619,
  dailyIncrement: 173,
};

const iconThemeCount = 4;

const savedFavorites = localStorage.getItem("nvd-favorites");
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("nvd-theme");
const htmlTranslationKeys = new Set(["heroSubtitle"]);

const state = {
  keyword: "",
  categoryKey: "all",
  language: localStorage.getItem("nvd-language") || "zh",
  theme: savedTheme || (systemThemeQuery.matches ? "dark" : "light"),
  favorites: new Set(parseStoredFavorites(savedFavorites)),
};

const toolGrid = document.querySelector("#toolGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const processedFilesCount = document.querySelector("#processedFilesCount");
const resultCount = document.querySelector("#resultCount");
const categoryTabs = document.querySelectorAll(".category-tab");
const languageMenu = document.querySelector("#languageMenu");
const languageToggle = document.querySelector("#languageToggle");
const languageOptions = document.querySelectorAll(".language-option");
const currentLanguageLabel = document.querySelector("#currentLanguageLabel");
const themeToggle = document.querySelector("#themeToggle");
const mobileNavToggle = document.querySelector("#mobileNavToggle");
const siteHeader = document.querySelector(".site-header");
const primaryNav = document.querySelector("#primaryNav");
const openGuideBtn = document.querySelector("#openGuideBtn");
const guideModal = document.querySelector("#guideModal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modalConfirmBtn = document.querySelector("#modalConfirmBtn");
const legalModal = document.querySelector("#legalModal");
const legalModalTitleText = document.querySelector("#legalModalTitleText");
const closeLegalModalBtn = document.querySelector("#closeLegalModalBtn");
const legalModalConfirmBtn = document.querySelector("#legalModalConfirmBtn");
const legalLinks = document.querySelectorAll("[data-legal-modal]");
const legalPanels = document.querySelectorAll("[data-legal-panel]");
const resilienceDemo = document.querySelector("#resilienceDemo");
const demoStepButtons = document.querySelectorAll("[data-demo-step]");
const demoCoordinates = document.querySelector("#demoCoordinates");
const demoStatusPrimary = document.querySelector("#demoStatusPrimary");
const demoStatusSecondary = document.querySelector("#demoStatusSecondary");
const demoSubmitHint = document.querySelector("#demoSubmitHint");
const phoneSubmitButton = document.querySelector(".phone-submit");
const resilienceScore = document.querySelector("#resilienceScore");
const taiwanMap = document.querySelector(".taiwan-map");
const logStream = document.querySelector(".log-stream");
const receiptModal = document.querySelector(".receipt-modal");
const receiptHash = document.querySelector("#receiptHash");
const manifestoModeToggle = document.querySelector("#manifestoModeToggle");
const manifestoGrid = document.querySelector("#manifestoGrid");
const manifestoCards = document.querySelectorAll("[data-manifesto-card]");
let processedFilesTimerId;
let resilienceScoreFrameId;
let resilienceResetTimerId;
let crowdSyncTimerId;
let receiptTypingTimerId;
let resilienceTimelineTimers = [];
let manifestoMode = "hardcore";

const manifestoModeContent = [
  {
    hardcore: "打破體制設定的局限，在社會韌性的沙盒中重新定義玩法...",
    human:
      "我們不抱怨路不平，而是直接開發工具，把路上的障礙變成手機裡精準的數據。",
  },
  {
    hardcore: "拒絕標籤...我們將被動的弱勢逆向轉譯，奪回價值的終極定價權。",
    human:
      "輪椅族不是負擔，而是城市裡最強的『無礙測試員』。我們的數據就是最高級的資產。",
  },
  {
    hardcore: "這是一場跨越時間軸的社會韌性工程...擁有所向披靡的永恆日常。",
    human:
      "今天我們幫推輪椅的人開路，明天就是幫推嬰兒車的父母、以及終將老去的你我鋪路。",
  },
  {
    hardcore: "率先踏入高階資產工程學的實踐場...為全人類提前建構防線。",
    human:
      "這不是同情做善事，而是用科技提前幫全台灣打造一條『不會讓人受傷』的安全防線。",
  },
  {
    hardcore: "我們用跨域邏輯進行結構性壓制...NVD是未來社會運行的頂層協議。",
    human:
      "丟掉只靠捐款的舊觀念！我們用程式碼與數據庫，直接幫台灣的交通環境進行系統大升級。",
  },
];

function t(key, replacements = {}) {
  const dictionary = translations[state.language] || translations.zh;
  const template = dictionary[key] || translations.zh[key] || key;

  return Object.entries(replacements).reduce((text, [name, value]) => {
    return text.replace(`{${name}}`, value);
  }, template);
}

function parseStoredFavorites(value) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((id) => Number.isFinite(Number(id))).map(Number)
      : [];
  } catch {
    localStorage.removeItem("nvd-favorites");
    return [];
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeText(text) {
  return String(text).trim().toLowerCase();
}

function getSimulatedProcessedFiles() {
  const launchDate = new Date("2026-05-30T00:00:00+08:00");
  const elapsedDays = Math.max(
    0,
    Math.floor((Date.now() - launchDate.getTime()) / 86400000),
  );
  const sessionBoost =
    Number(sessionStorage.getItem("nvd-session-stat-boost")) ||
    Math.floor(Math.random() * 28);
  sessionStorage.setItem("nvd-session-stat-boost", String(sessionBoost));

  return (
    simulatedStats.processedFilesBase +
    elapsedDays * simulatedStats.dailyIncrement +
    sessionBoost
  );
}

function getCurrentProcessedFilesValue() {
  return (
    Number(processedFilesCount?.dataset.currentValue) ||
    getSimulatedProcessedFiles()
  );
}

function formatNumber(value) {
  const locale = state.language === "zh" ? "zh-TW" : "en-US";
  return new Intl.NumberFormat(locale).format(value);
}

function animateNumber(element, targetValue) {
  if (!element) return;

  const startValue =
    Number(element.dataset.currentValue) || Math.max(0, targetValue - 820);
  const duration = 900;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(
      startValue + (targetValue - startValue) * easedProgress,
    );
    element.textContent = formatNumber(currentValue);

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    element.dataset.currentValue = String(targetValue);
  }

  requestAnimationFrame(tick);
}

function renderSimulatedStats(shouldAnimate = false) {
  const processedFiles = getCurrentProcessedFilesValue();

  if (shouldAnimate) {
    animateNumber(processedFilesCount, processedFiles);
    return;
  }

  if (processedFilesCount) {
    processedFilesCount.textContent = formatNumber(processedFiles);
    processedFilesCount.dataset.currentValue = String(processedFiles);
  }
}

function incrementProcessedFiles() {
  if (!processedFilesCount) return;

  const nextValue =
    getCurrentProcessedFilesValue() + Math.floor(Math.random() * 4) + 1;
  processedFilesCount.dataset.currentValue = String(nextValue);
  processedFilesCount.textContent = formatNumber(nextValue);
}

function startProcessedFilesTicker() {
  if (!processedFilesCount || processedFilesTimerId) return;

  processedFilesTimerId = window.setInterval(incrementProcessedFiles, 2600);
}

function clearResilienceTimeline() {
  resilienceTimelineTimers.forEach((timerId) => window.clearTimeout(timerId));
  resilienceTimelineTimers = [];
}

function queueResilienceTimeline(callback, delay) {
  const timerId = window.setTimeout(callback, delay);
  resilienceTimelineTimers.push(timerId);
}

function setResilienceDemoStep(step) {
  if (!resilienceDemo) return;

  const activeStep = Math.max(
    0,
    Math.min(4, Number.isFinite(Number(step)) ? Number(step) : 0),
  );
  window.clearTimeout(resilienceResetTimerId);
  resilienceDemo.classList.remove("is-submitting");
  resilienceDemo.classList.remove("show-receipt");
  resilienceDemo.dataset.step = String(activeStep);

  demoStepButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      Number(button.dataset.demoStep) === activeStep,
    );
  });

  if (demoCoordinates) {
    const coordinateOffset = activeStep * 0.0007;
    demoCoordinates.textContent = `${(22.6273 + coordinateOffset).toFixed(4)}°N, ${(120.3014 + coordinateOffset * 1.3).toFixed(4)}°E`;
  }

  updateResilienceDemoReadout(activeStep);

  if (activeStep === 4) {
    animateResilienceScore(92.21, 92.5);
  } else if (resilienceScore) {
    cancelAnimationFrame(resilienceScoreFrameId);
    resilienceScore.textContent = "92.21";
  }
}

function runResilienceTimelineStep(step, overrideKey) {
  setResilienceDemoStep(step);
  resilienceDemo.classList.add("is-submitting");
  resilienceDemo.classList.add("scanning");
  updateResilienceDemoReadout(step, overrideKey);
}

function addLogLine(text) {
  if (!logStream) return;

  const line = document.createElement("span");
  line.textContent = text;
  logStream.prepend(line);

  while (logStream.children.length > 4) {
    logStream.lastElementChild.remove();
  }
}

function addCrowdPulse() {
  if (!taiwanMap || resilienceDemo?.classList.contains("is-submitting")) return;

  const cities = ["台北", "台中", "台南", "桃園", "新竹", "屏東"];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const pulse = document.createElement("span");
  pulse.className = "crowd-pulse";
  pulse.style.left = `${28 + Math.random() * 48}%`;
  pulse.style.top = `${18 + Math.random() * 62}%`;
  taiwanMap.appendChild(pulse);
  addLogLine(`[系統] ${city} 數據同步中...`);
  pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
}

function startCrowdSync() {
  if (crowdSyncTimerId || !taiwanMap) return;

  addCrowdPulse();
  crowdSyncTimerId = window.setInterval(addCrowdPulse, 3000);
}

function typeReceiptHash() {
  if (!receiptHash) return;

  window.clearInterval(receiptTypingTimerId);
  const hash = `HASH 0x${Math.random().toString(16).slice(2, 10).toUpperCase()}${Date.now().toString(16).slice(-8).toUpperCase()}`;
  let index = 0;
  receiptHash.textContent = "";
  receiptTypingTimerId = window.setInterval(() => {
    receiptHash.textContent = hash.slice(0, index + 1);
    index += 1;
    if (index >= hash.length) {
      window.clearInterval(receiptTypingTimerId);
    }
  }, 28);
}

function updateResilienceDemoReadout(step, overrideKey) {
  if (!demoStatusPrimary || !demoStatusSecondary) return;

  if (overrideKey) {
    demoStatusPrimary.textContent = t(overrideKey);
    demoStatusSecondary.textContent = t("demoStatusLocation");
    if (demoSubmitHint) {
      demoSubmitHint.textContent = t("demoStatusReady");
    }
    return;
  }

  if (step >= 2) {
    demoStatusPrimary.textContent = t("demoStatusLabel");
  } else {
    demoStatusPrimary.textContent = t("demoStatusDetecting");
  }

  demoStatusSecondary.textContent = t("demoStatusLocation");

  if (demoSubmitHint) {
    demoSubmitHint.textContent = t("demoStatusReady");
  }
}

function animateResilienceScore(startValue, endValue) {
  if (!resilienceScore) return;

  cancelAnimationFrame(resilienceScoreFrameId);

  const duration = 920;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + (endValue - startValue) * easedProgress;
    resilienceScore.textContent = currentValue.toFixed(2);

    if (progress < 1) {
      resilienceScoreFrameId = requestAnimationFrame(tick);
    }
  }

  resilienceScoreFrameId = requestAnimationFrame(tick);
}

function triggerAutoDetection() {
  const targetBox = document.querySelector(".target-box");
  const statusText =
    document.querySelector(".status-text") ||
    document.querySelector("#demoStatusPrimary");
  const step03Label = document.querySelector("#step-03-label");
  const miniDataOverlay = document.querySelector(".mini-data-overlay");
  const resultCard = document.querySelector(".detection-result-card");
  const demoStage = document.querySelector("#resilienceDemo");

  if (!targetBox || !statusText || !step03Label) return;

  window.clearInterval(triggerAutoDetection.dataTimer);
  window.clearTimeout(triggerAutoDetection.lockTimer);
  resultCard?.classList.remove("is-visible");
  step03Label.classList.remove("active-step");
  targetBox.classList.remove("target-locked");
  targetBox.classList.add("scanning-active");
  demoStage?.classList.add("scanning");
  miniDataOverlay?.classList.add("is-active");
  statusText.innerHTML =
    '<span class="animate-pulse">🔍 正在自動辨識現場空間特徵...</span>';

  const updateMiniData = () => {
    if (!miniDataOverlay) return;

    const lngNoise = Math.floor(Math.random() * 900) + 100;
    const depth = (10 + Math.random() * 8).toFixed(1);
    const confidence = (90 + Math.random() * 8.9).toFixed(1);
    miniDataOverlay.innerHTML = `LAT: 22.639, LNG: 120.${lngNoise}<br>DEPTH: ${depth}cm<br>CONFIDENCE: ${confidence}%`;
  };

  updateMiniData();
  triggerAutoDetection.dataTimer = window.setInterval(updateMiniData, 80);

  triggerAutoDetection.lockTimer = window.setTimeout(() => {
    window.clearInterval(triggerAutoDetection.dataTimer);
    targetBox.classList.remove("scanning-active");
    targetBox.classList.add("target-locked");
    demoStage?.classList.remove("scanning");
    if (miniDataOverlay) {
      miniDataOverlay.innerHTML =
        "LAT: 22.639, LNG: 120.327<br>DEPTH: 16.8cm<br>CONFIDENCE: 98.7%";
    }
    statusText.innerHTML =
      '⚠️ 偵測到路面狀況：<span class="font-bold text-[#10b981]">【斜坡太靠近道路】</span>';
    step03Label.classList.add("active-step");
    resultCard?.classList.add("is-visible");
    showToast("📍 空間座標已鎖定：自動標記【斜坡太靠近道路】");
  }, 1500);
}

function resetAutoDetectionUi() {
  window.clearInterval(triggerAutoDetection.dataTimer);
  window.clearTimeout(triggerAutoDetection.lockTimer);
  document
    .querySelector(".target-box")
    ?.classList.remove("scanning-active", "target-locked");
  document.querySelector(".mini-data-overlay")?.classList.remove("is-active");
  document
    .querySelector(".detection-result-card")
    ?.classList.remove("is-visible");
  document.querySelector("#step-03-label")?.classList.remove("active-step");
}

function triggerResilienceSubmit() {
  if (!resilienceDemo || resilienceDemo.classList.contains("is-submitting")) {
    return;
  }

  clearResilienceTimeline();
  window.clearTimeout(resilienceResetTimerId);
  window.clearInterval(crowdSyncTimerId);
  crowdSyncTimerId = null;
  triggerAutoDetection();

  runResilienceTimelineStep(0);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(1);
    addLogLine("[系統] 自動定位高雄市三民區...");
  }, 420);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(2);
    addLogLine("[系統] 偵測到高低落差...");
  }, 980);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(3, "demoStatusEncrypting");
    if (demoSubmitHint) {
      demoSubmitHint.textContent = t("demoStatusEncrypting");
    }
    addLogLine("[系統] 高雄三民區現場數據上傳中...");
  }, 1540);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(4);
    addLogLine("[系統] 高雄節點已精準定位...");

    queueResilienceTimeline(() => {
      resilienceDemo.classList.add("show-receipt");
      typeReceiptHash();
    }, 960);

    resilienceResetTimerId = window.setTimeout(() => {
      clearResilienceTimeline();
      resilienceDemo.classList.remove("is-submitting");
      resilienceDemo.classList.remove("scanning");
      resilienceDemo.classList.remove("show-receipt");
      resetAutoDetectionUi();
      if (receiptHash) {
        receiptHash.textContent = "";
      }
      setResilienceDemoStep(0);
      startCrowdSync();
    }, 4460);
  }, 2200);
}

function setResilienceDemoStep(step) {
  if (!resilienceDemo) return;

  const activeStep = Math.max(
    0,
    Math.min(4, Number.isFinite(Number(step)) ? Number(step) : 0),
  );
  window.clearTimeout(resilienceResetTimerId);
  resilienceDemo.classList.remove("is-submitting", "scanning", "show-receipt");
  resilienceDemo.dataset.step = String(activeStep);

  demoStepButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      Number(button.dataset.demoStep) === activeStep,
    );
  });

  if (demoCoordinates) {
    demoCoordinates.textContent =
      activeStep >= 1 ? "22.6390°N, 120.3270°E" : "22.6273°N, 120.3014°E";
  }

  updateResilienceDemoReadout(activeStep);

  if (activeStep === 4) {
    animateResilienceScore(92.21, 92.5);
  } else if (resilienceScore) {
    cancelAnimationFrame(resilienceScoreFrameId);
    resilienceScore.textContent = "92.21";
  }
}

function runResilienceTimelineStep(step, overrideText) {
  setResilienceDemoStep(step);
  resilienceDemo.classList.add("is-submitting");
  if (step <= 3) {
    resilienceDemo.classList.add("scanning");
  }
  updateResilienceDemoReadout(step, overrideText);
}

function addLogLine(text) {
  if (!logStream) return;

  const line = document.createElement("span");
  line.textContent = text;
  logStream.prepend(line);

  while (logStream.children.length > 4) {
    logStream.lastElementChild.remove();
  }
}

function addCrowdPulse() {
  if (!taiwanMap || resilienceDemo?.classList.contains("is-submitting")) return;

  const cities = ["台北", "台中", "台南", "高雄", "新竹", "屏東"];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const pulse = document.createElement("span");
  pulse.className = "crowd-pulse";
  pulse.style.left = `${28 + Math.random() * 48}%`;
  pulse.style.top = `${18 + Math.random() * 62}%`;
  taiwanMap.appendChild(pulse);
  addLogLine(`[系統] ${city} 數據同步中...`);
  pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
}

function startCrowdSync() {
  if (crowdSyncTimerId || !taiwanMap) return;

  addCrowdPulse();
  crowdSyncTimerId = window.setInterval(addCrowdPulse, 3000);
}

function typeReceiptHash() {
  if (!receiptHash) return;

  window.clearInterval(receiptTypingTimerId);
  const hash = `HASH: 0x9f82${Math.random().toString(16).slice(2, 10).toUpperCase()}${Date.now().toString(16).slice(-6).toUpperCase()}`;
  let index = 0;
  receiptHash.textContent = "";
  receiptTypingTimerId = window.setInterval(() => {
    receiptHash.textContent = hash.slice(0, index + 1);
    index += 1;
    if (index >= hash.length) {
      window.clearInterval(receiptTypingTimerId);
    }
  }, 28);
}

function updateResilienceDemoReadout(step, overrideText) {
  if (!demoStatusPrimary || !demoStatusSecondary) return;

  const primaryTexts = [
    "🔍 正在自動偵測周遭環境風險...",
    "📍 鎖定位置：高雄市三民區",
    "⚠️ 偵測到路面狀況：【斜坡太靠近道路】",
    "正在將現場數據 ➔ 轉化為社會韌性資產...",
    "✅ 已安全寫入友善道路資料庫",
  ];
  const secondaryTexts = [
    "點擊下方按鈕開始回報",
    "GIS 座標已取得，正在比對道路特徵",
    "已完成現場狀況判讀",
    "資料正在送往 GIS 控制中心",
    "高雄三民節點已完成同步",
  ];

  demoStatusPrimary.textContent =
    overrideText || primaryTexts[step] || primaryTexts[0];
  demoStatusSecondary.textContent = secondaryTexts[step] || secondaryTexts[0];

  if (demoSubmitHint) {
    demoSubmitHint.textContent = "正在將現場數據 ➔ 轉化為社會韌性資產...";
  }
}

function animateResilienceScore(startValue, endValue) {
  if (!resilienceScore) return;

  cancelAnimationFrame(resilienceScoreFrameId);

  const duration = 920;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + (endValue - startValue) * easedProgress;
    resilienceScore.textContent = currentValue.toFixed(2);

    if (progress < 1) {
      resilienceScoreFrameId = requestAnimationFrame(tick);
    }
  }

  resilienceScoreFrameId = requestAnimationFrame(tick);
}

function triggerAutoDetection() {
  const targetBox = document.querySelector(".target-box");
  const statusText =
    document.querySelector(".status-text") ||
    document.querySelector("#demoStatusPrimary");
  const miniDataOverlay = document.querySelector(".mini-data-overlay");
  const resultCard = document.querySelector(".detection-result-card");
  const demoStage = document.querySelector("#resilienceDemo");

  if (!targetBox || !statusText) return;

  window.clearInterval(triggerAutoDetection.dataTimer);
  window.clearTimeout(triggerAutoDetection.lockTimer);
  resultCard?.classList.remove("is-visible");
  targetBox.classList.remove("target-locked");
  targetBox.classList.add("scanning-active");
  demoStage?.classList.add("scanning");
  miniDataOverlay?.classList.add("is-active");
  statusText.innerHTML =
    '<span class="animate-pulse">🔍 正在自動偵測周遭環境風險...</span>';

  const updateMiniData = () => {
    if (!miniDataOverlay) return;

    const lngNoise = Math.floor(Math.random() * 900) + 100;
    const depth = (10 + Math.random() * 8).toFixed(1);
    const confidence = (90 + Math.random() * 8.9).toFixed(1);
    miniDataOverlay.innerHTML = `LAT: 22.639, LNG: 120.${lngNoise}<br>DEPTH: ${depth}cm<br>CONFIDENCE: ${confidence}%`;
  };

  updateMiniData();
  triggerAutoDetection.dataTimer = window.setInterval(updateMiniData, 80);

  triggerAutoDetection.lockTimer = window.setTimeout(() => {
    window.clearInterval(triggerAutoDetection.dataTimer);
    targetBox.classList.remove("scanning-active");
    targetBox.classList.add("target-locked");
    if (miniDataOverlay) {
      miniDataOverlay.innerHTML =
        "LAT: 22.639, LNG: 120.327<br>DEPTH: 16.8cm<br>CONFIDENCE: 98.7%";
    }
    statusText.innerHTML =
      '⚠️ 偵測到路面狀況：<span class="font-bold text-[#10b981]">【斜坡太靠近道路】</span>';
    resultCard?.classList.add("is-visible");
    if (typeof showToast === "function") {
      showToast("📍 空間座標已鎖定：自動標記【斜坡太靠近道路】");
    }
  }, 1500);
}

function resetAutoDetectionUi() {
  window.clearInterval(triggerAutoDetection.dataTimer);
  window.clearTimeout(triggerAutoDetection.lockTimer);
  document
    .querySelector(".target-box")
    ?.classList.remove("scanning-active", "target-locked");
  document.querySelector(".mini-data-overlay")?.classList.remove("is-active");
  document
    .querySelector(".detection-result-card")
    ?.classList.remove("is-visible");
  if (receiptHash) {
    receiptHash.textContent = "HASH: 0x9f82...";
  }
}

function triggerResilienceSubmit() {
  if (!resilienceDemo || resilienceDemo.classList.contains("is-submitting")) {
    return;
  }

  clearResilienceTimeline();
  window.clearTimeout(resilienceResetTimerId);
  window.clearInterval(crowdSyncTimerId);
  crowdSyncTimerId = null;
  resetAutoDetectionUi();
  triggerAutoDetection();

  runResilienceTimelineStep(0);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(1);
    addLogLine("[系統] 高雄市三民區 GIS 座標鎖定中...");
  }, 1500);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(2);
    addLogLine("[系統] 現場狀況已判讀：斜坡太靠近道路");
  }, 3000);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(3, "正在將現場數據 ➔ 轉化為社會韌性資產...");
    addLogLine("[系統] 現場資料打包傳送至 GIS 控制中心");
  }, 4500);

  queueResilienceTimeline(() => {
    runResilienceTimelineStep(4);
    resilienceDemo.classList.remove("scanning");
    resilienceDemo.classList.add("show-receipt");
    typeReceiptHash();
    addLogLine("[系統] 安全寫入完成：STATUS ENCRYPTED");

    queueResilienceTimeline(() => {
      resilienceDemo.classList.remove("show-receipt");
    }, 2000);

    resilienceResetTimerId = window.setTimeout(() => {
      clearResilienceTimeline();
      resilienceDemo.classList.remove("is-submitting", "scanning");
      resetAutoDetectionUi();
      setResilienceDemoStep(0);
      startCrowdSync();
    }, 3200);
  }, 6000);
}

function getToolText(tool) {
  return tool.i18n[state.language] || tool.i18n.zh;
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";
  const pageTitle = document.querySelector(
    'meta[property="og:title"]',
  )?.content;
  document.title = pageTitle || t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (htmlTranslationKeys.has(key)) {
      element.innerHTML = t(key);
      return;
    }

    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  if (resultCount) {
    const count = getFilteredTools().length;
    resultCount.textContent = t("resultCount", { count });
  }

  renderSimulatedStats();
  if (resilienceDemo) {
    updateResilienceDemoReadout(Number(resilienceDemo.dataset.step) || 0);
  }
}

function getFilteredTools() {
  const keyword = normalizeText(state.keyword);

  return tools.filter((tool) => {
    const content = getToolText(tool);
    const categoryLabel = t(tool.categoryLabelKey || "categoryUnknown");
    const searchableText = normalizeText(
      `${content.name} ${content.description} ${categoryLabel} ${content.tags.join(" ")}`,
    );

    let matchesCategory = false;
    if (state.categoryKey === "all") {
      matchesCategory = true;
    } else if (state.categoryKey === "favorites") {
      matchesCategory = state.favorites.has(tool.id);
    } else {
      matchesCategory = tool.categoryKey === state.categoryKey;
    }

    const matchesKeyword = !keyword || searchableText.includes(keyword);

    return matchesCategory && matchesKeyword;
  });
}

function createToolCard(tool, index) {
  const content = getToolText(tool);
  const themeClass = `theme-${index % iconThemeCount}`;
  const tagsHtml = content.tags
    .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
    .join("");
  const isFavorite = state.favorites.has(tool.id);
  const escapedName = escapeHTML(content.name);
  const escapedDescription = escapeHTML(content.description);
  const ctaText = content.ctaText || t("visitSite");
  const ctaIcon = content.ctaText
    ? ""
    : '<i class="fa-solid fa-arrow-right"></i>';

  return `
    <article class="tool-card">
      <div class="card-header-visual">
        <div class="card-visual-gradient"></div>
        <div class="tool-icon-badge ${themeClass}">
          <i class="${tool.imageIcon}"></i>
        </div>
      </div>

      <div class="card-body">
        <div class="tag-list">${tagsHtml}</div>
        <h3 class="tool-title">${escapedName}</h3>
        <p class="tool-desc">${escapedDescription}</p>
      </div>

      <div class="card-footer">
        <div class="footer-actions-left">
          <button class="favorite-btn ${isFavorite ? "active" : ""}" type="button" data-id="${tool.id}" aria-label="${escapeHTML(t("favoriteTool", { name: content.name }))}">
            <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
          <button class="share-btn" type="button" data-id="${tool.id}" aria-label="${escapeHTML(t("shareTool", { name: content.name }))}">
            <i class="fa-regular fa-share-from-square"></i>
          </button>
        </div>
        <a class="visit-btn" href="${escapeHTML(tool.url)}" target="_blank" rel="noopener noreferrer">
          <span>${escapeHTML(ctaText)}</span>
          ${ctaIcon}
        </a>
      </div>
    </article>
  `;
}

function renderTools() {
  if (!toolGrid || !resultCount || !emptyState) return;

  const filteredTools = getFilteredTools();

  toolGrid.innerHTML = filteredTools.map(createToolCard).join("");
  resultCount.textContent = t("resultCount", { count: filteredTools.length });
  emptyState.hidden = filteredTools.length > 0;
}

function setActiveCategory(selectedButton) {
  if (!categoryTabs.length) return;

  categoryTabs.forEach((button) => button.classList.remove("active"));
  selectedButton.classList.add("active");
}

function setTheme(theme, shouldPersist = true) {
  state.theme = theme;

  if (shouldPersist) {
    localStorage.setItem("nvd-theme", theme);
  }

  if (theme === "dark") {
    document.body.dataset.theme = "dark";
  } else {
    document.body.removeAttribute("data-theme");
  }

  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");
  const isDark = theme === "dark";
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? t("themeLightLabel") : t("themeDarkLabel"),
  );
}

function setLanguage(language) {
  state.language = translations[language] ? language : "zh";
  localStorage.setItem("nvd-language", state.language);
  if (currentLanguageLabel) {
    currentLanguageLabel.textContent = state.language === "zh" ? "中文" : "EN";
  }

  if (languageToggle) {
    languageToggle.setAttribute("aria-label", t("languageLabel"));
  }

  languageOptions.forEach((option) => {
    const isActive = option.dataset.language === state.language;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

  applyTranslations();
  setTheme(state.theme, Boolean(localStorage.getItem("nvd-theme")));
  renderTools();
}

function closeLanguageMenu() {
  if (!languageMenu || !languageToggle) return;

  languageMenu.classList.remove("open");
  languageToggle.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
  if (!languageMenu || !languageToggle) return;

  const shouldOpen = !languageMenu.classList.contains("open");
  languageMenu.classList.toggle("open", shouldOpen);
  languageToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMobileNav() {
  if (!siteHeader || !mobileNavToggle) return;

  siteHeader.classList.remove("nav-open");
  mobileNavToggle.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  if (!siteHeader || !mobileNavToggle) return;

  const shouldOpen = !siteHeader.classList.contains("nav-open");
  siteHeader.classList.toggle("nav-open", shouldOpen);
  mobileNavToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function renderManifestoMode(mode = "hardcore") {
  if (!manifestoGrid || !manifestoCards.length) return;

  manifestoGrid.classList.add("is-switching");

  window.setTimeout(() => {
    manifestoCards.forEach((card) => {
      const content = manifestoModeContent[Number(card.dataset.manifestoCard)];
      const text = card.querySelector("[data-manifesto-text]");
      if (content && text) {
        text.textContent = content[mode];
      }
    });

    manifestoGrid.dataset.mode = mode;
    manifestoGrid.classList.remove("is-switching");
  }, 180);
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.keyword = event.target.value;
    renderTools();
  });
}

categoryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.categoryKey = button.dataset.categoryKey;
    setActiveCategory(button);
    renderTools();
  });
});

demoStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearResilienceTimeline();
    window.clearTimeout(resilienceResetTimerId);
    if (resilienceDemo) {
      resilienceDemo.classList.remove("is-submitting");
      resilienceDemo.classList.remove("scanning");
      resilienceDemo.classList.remove("show-receipt");
    }
    resetAutoDetectionUi();
    setResilienceDemoStep(button.dataset.demoStep);
  });
});

if (phoneSubmitButton) {
  phoneSubmitButton.addEventListener("click", triggerResilienceSubmit);
}

function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let iconClass = "fa-solid fa-circle-check";
  if (type === "info") {
    iconClass = "fa-solid fa-circle-info";
  } else if (type === "warning") {
    iconClass = "fa-solid fa-triangle-exclamation";
  }

  const icon = document.createElement("i");
  icon.className = iconClass;

  const text = document.createElement("span");
  text.className = "toast-message";
  text.textContent = message;

  toast.append(icon, text);

  container.appendChild(toast);

  // Trigger animation next frame
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    });
  }, 3000);
}

if (toolGrid) {
  toolGrid.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest(".favorite-btn");

    if (favoriteButton) {
      const toolId = Number(favoriteButton.dataset.id);
      const tool = tools.find((t) => t.id === toolId);
      const content = getToolText(tool);

      if (state.favorites.has(toolId)) {
        state.favorites.delete(toolId);
        localStorage.setItem(
          "nvd-favorites",
          JSON.stringify(Array.from(state.favorites)),
        );
        showToast(t("favoriteRemoved", { name: content.name }), "info");
      } else {
        state.favorites.add(toolId);
        localStorage.setItem(
          "nvd-favorites",
          JSON.stringify(Array.from(state.favorites)),
        );
        showToast(t("favoriteAdded", { name: content.name }), "success");
      }
      renderTools();
      return;
    }

    const shareButton = event.target.closest(".share-btn");
    if (shareButton) {
      const toolId = Number(shareButton.dataset.id);
      const tool = tools.find((item) => item.id === toolId);
      if (!tool) return;

      const name = getToolText(tool).name;
      copyText(tool.url)
        .then(() => showToast(t("linkCopied", { name }), "success"))
        .catch(() => showToast(tool.url, "info"));
    }
  });
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.className = "copy-buffer";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);
      copied ? resolve() : reject(new Error("Copy command failed"));
    } catch (error) {
      document.body.removeChild(textarea);
      reject(error);
    }
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLanguageMenu();
  });
}

languageOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.stopPropagation();
    setLanguage(option.dataset.language);
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  if (languageMenu && !languageMenu.contains(event.target)) {
    closeLanguageMenu();
  }

  if (siteHeader && !siteHeader.contains(event.target)) {
    closeMobileNav();
  }
});

if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMobileNav();
  });
}

if (primaryNav) {
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMobileNav();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    closeMobileNav();
  }
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark", true);
  });
}

if (manifestoModeToggle) {
  manifestoModeToggle.addEventListener("click", () => {
    manifestoMode = manifestoMode === "hardcore" ? "human" : "hardcore";
    const isHuman = manifestoMode === "human";

    manifestoModeToggle.classList.toggle("is-human", isHuman);
    manifestoModeToggle.setAttribute("aria-pressed", String(isHuman));
    renderManifestoMode(manifestoMode);
  });
}

function handleSystemThemeChange(event) {
  if (!localStorage.getItem("nvd-theme")) {
    setTheme(event.matches ? "dark" : "light", false);
  }
}

if (typeof systemThemeQuery.addEventListener === "function") {
  systemThemeQuery.addEventListener("change", handleSystemThemeChange);
} else if (typeof systemThemeQuery.addListener === "function") {
  systemThemeQuery.addListener(handleSystemThemeChange);
}

function openModal(event) {
  if (event) event.preventDefault();

  guideModal.classList.add("active");
  guideModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModalBtn.focus();
}

function closeModal() {
  guideModal.classList.remove("active");
  guideModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (openGuideBtn) {
    openGuideBtn.focus();
  }
}

function openLegalModal(type, event) {
  if (event) event.preventDefault();
  const activeType = type === "terms" ? "terms" : "privacy";

  legalPanels.forEach((panel) => {
    panel.hidden = panel.dataset.legalPanel !== activeType;
  });

  const titleKey = activeType === "terms" ? "termsTitle" : "privacyTitle";
  legalModalTitleText.dataset.i18n = titleKey;
  legalModalTitleText.textContent = t(titleKey);

  legalModal.classList.add("active");
  legalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeLegalModalBtn.focus();
}

function closeLegalModal() {
  legalModal.classList.remove("active");
  legalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (openGuideBtn && guideModal) {
  openGuideBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  modalConfirmBtn.addEventListener("click", closeModal);

  guideModal.addEventListener("click", (event) => {
    if (event.target === guideModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && languageMenu?.classList.contains("open")) {
      closeLanguageMenu();
      languageToggle?.focus();
    }

    if (event.key === "Escape" && guideModal.classList.contains("active")) {
      closeModal();
    }
  });
}

if (legalModal) {
  legalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      openLegalModal(link.dataset.legalModal, event);
    });
  });

  closeLegalModalBtn.addEventListener("click", closeLegalModal);
  legalModalConfirmBtn.addEventListener("click", closeLegalModal);

  legalModal.addEventListener("click", (event) => {
    if (event.target === legalModal) {
      closeLegalModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && legalModal.classList.contains("active")) {
      closeLegalModal();
    }
  });
}

setLanguage(state.language);
setTheme(state.theme, Boolean(savedTheme));
renderManifestoMode(manifestoMode);
if (processedFilesCount) {
  delete processedFilesCount.dataset.currentValue;
  renderSimulatedStats(true);
  startProcessedFilesTicker();
}
setResilienceDemoStep(0);
startCrowdSync();
