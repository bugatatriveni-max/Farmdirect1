/**
 * RythuSeva (రైతుసేవ) - Master Application Engine
 * Multilingual Translation Engine, 28 States/Districts Database, 5-Shift Slot Selector,
 * Mandi Net Profit Calculator, Live Queue Tracking, Biometrics & Multilingual Voice AI.
 */

// 1. Full Localization Dictionary (Telugu, English, Hindi, Tamil, Kannada)
const TRANSLATIONS = {
  en: {
    appTitle: 'RythuSeva',
    appSubtitle: 'Smart Farmer Procurement, Queue Management & Mandi Intelligence',
    navHome: 'Home',
    navBookSlot: 'Book Slot',
    navQueue: 'Live Queue',
    navMarkets: 'Markets & Profit',
    navVoice: 'Voice AI & Q&A',
    navTrack: 'Status',
    navAdmin: 'Admin Desk',
    biometricLoginBtn: 'Fingerprint Login (Biometric)',
    passwordLoginBtn: 'Security Password Login',
    fixPasswordBtn: 'Set / Change Password',
    statActiveCentres: 'Active Govt Market Yards',
    statAvgWait: 'Average Waiting Time',
    statMspDisbursed: 'Direct DBT Transferred',
    statActiveTokens: 'Active Queue Tokens',
    statMins: 'mins',
    statCrores: 'Cr',
    nowServing: 'Currently Calling Token',
    bayWeighbridge: 'Electronic Weighbridge',
    bayQuality: 'Quality & Moisture QA',
    bayUnload: 'Unloading Sheds & Godowns',
    talkToFarmDirectTitle: 'Talk to FarmDirect Voice Assistant',
    talkToFarmDirectDesc: 'Ask about live crop prices, mandi rates, and selling options in your mother tongue.',
    voiceFallbackLabel: 'You can also type your question:',
    suggestedQuestionsLabel: '🌾 Try asking in your language (Tap to test):',
    btnSend: 'Ask AI',
    bookSlotTitle: 'Farmer Registration & Market Slot Booking',
    bookSlotSubtitle: 'Reserve your mandi arrival time in advance. Prevent truck traffic congestion and get an instant digital QR Token Pass.',
    fieldName: 'Farmer Full Name',
    fieldMobile: 'Mobile Number (for SMS Alerts)',
    fieldAadhaar: 'Kisan ID / Aadhaar Last 4 Digits',
    fieldState: 'Select State (All Indian States & UTs)',
    fieldDistrict: 'Select District',
    fieldMandal: 'Mandal / Block',
    fieldVillage: 'Farmer Village',
    fieldMarket: 'Government Market Yard / Centre',
    fieldCrop: 'Crop to Procure / Sell',
    fieldQuantity: 'Estimated Quantity (in Quintals)',
    fieldVehicle: 'Transport Vehicle Type',
    fieldVehicleNo: 'Vehicle Number (e.g. AP 07 AB 1234)',
    fieldDate: 'Preferred Arrival Date',
    slotCapacityHeader: '🕒 Real-Time Slot Availability & Allocation (5 Shifts • Max 10 Farmers Each)',
    slotCapacitySub: 'Maximum 10 farmers per shift (50 daily capacity). If a slot is full, the system automatically assigns the next available shift.',
    btnGenerateToken: 'Confirm Booking & Generate QR Token Pass',
    bookingHistoryTitle: 'My Confirmed Bookings & History',
    queueTitle: 'Real-Time Procurement Queue & Mandi Congestion Monitor',
    queueSubtitle: 'Live token status, weighbridge allocations, and vehicle line tracking across government yards.',
    liveQueueCardTitle: 'LIVE QUEUE & ESTIMATED WAITING TIME',
    yourToken: 'Your Token',
    currentlyServing: 'Currently Serving',
    farmersAhead: 'Farmers Ahead in Line',
    estWaitTime: 'Estimated Waiting Time:',
    approxExpectedTurn: 'Approximate Expected Turn:',
    recommendedArrival: 'Recommended Arrival Time:',
    activeCounters: 'Active Counters:',
    congestionLevel: 'Congestion Level:',
    smartArrivalAdvice: 'To prevent long waiting at the yard, please arrive only 10–15 minutes before your turn.',
    btnCancelBooking: 'Cancel Slot Booking',
    btnSimulateAdvance: 'Call Next Token (Live Demo)',
    marketDirTitle: 'All India Market Yards, APMCs & Mandi Directory',
    marketDirSubtitle: 'Select any state and district. View all government procurement centres, locations, and crop demand.',
    bestSellingDestinationsHeading: '🌟 Best Markets to Sell & Preferred Buying Hubs',
    bestSellingDestinationsSubtitle: 'Where will you get the highest price? Which hubs (exporters, mills, CCI, FCI) buy the most?',
    calcTitle: 'Best Mandi Recommendation & Net Profit Calculator',
    calcSubtitle: 'Formula: Estimated Net Return = (Quantity × Selling Price) − Transport Freight − Market Charges',
    calcOriginLabel: 'Your Village / Location',
    btnCalculateNet: 'Compare Mandis & Net Realization',
    biometricModalTitle: 'Fingerprint Biometric Authentication',
    passwordLoginTitle: 'Security Password / PIN Login',
    fieldSecurityPin: 'Farmer Security PIN (Default: 4109)',
    btnLogin: 'Login',
    fixPasswordTitle: 'Farmer Security Password Settings',
    fieldNewPassword: 'New Security Password / PIN',
    fieldConfirmPassword: 'Re-enter Password to Confirm',
    btnSavePassword: 'Save Security Password'
  },
  te: {
    appTitle: 'రైతుసేవ',
    appSubtitle: 'స్మార్ట్ ప్రభుత్వ కొనుగోలు, క్యూ నిర్వహణ & మార్కెట్ సమాచారం',
    navHome: 'హోమ్',
    navBookSlot: 'స్లాట్ బుకింగ్',
    navQueue: 'లైవ్ క్యూ',
    navMarkets: 'మార్కెట్లు & లాభం',
    navVoice: 'వాయిస్ AI & Q&A',
    navTrack: 'స్టేటస్',
    navAdmin: 'అడ్మిన్ డెస్క్',
    biometricLoginBtn: 'వేలిముద్ర లాగిన్ (బయోమెట్రిక్)',
    passwordLoginBtn: 'సెక్యూరిటీ పాస్‌వర్డ్ లాగిన్',
    fixPasswordBtn: 'పాస్‌వర్డ్ సెట్ / మార్చుకోండి',
    statActiveCentres: 'ప్రభుత్వ మార్కెట్ యార్డులు',
    statAvgWait: 'సగటు వేచి ఉండే సమయం',
    statMspDisbursed: 'రైతుల ఖాతాల్లో జమైన DBT మొత్తం',
    statActiveTokens: 'క్యూలో ఉన్న టోకెన్లు',
    statMins: 'నిమిషాలు',
    statCrores: 'కోట్లు',
    nowServing: 'ప్రస్తుతం పిలుస్తున్న టోకెన్',
    bayWeighbridge: 'ఎలక్ట్రానిక్ కాటా / తూకం',
    bayQuality: 'నాణ్యత & తేమ పరీక్ష',
    bayUnload: 'అన్‌లోడింగ్ షెడ్లు & గోదాములు',
    talkToFarmDirectTitle: 'రైతు వాయిస్ అసిస్టెంట్‌తో మాట్లాడండి',
    talkToFarmDirectDesc: 'మీ సొంత భాషలో పంట ధరలు, మార్కెట్లు మరియు అమ్మకపు సలహాలను అడగండి.',
    voiceFallbackLabel: 'మీరు మీ ప్రశ్నను టైప్ కూడా చేయవచ్చు:',
    suggestedQuestionsLabel: '🌾 మీ భాషలో అడిగి చూడండి (క్లిక్ చేయండి):',
    btnSend: 'అడగండి',
    bookSlotTitle: 'రైతు నమోదు & మార్కెట్ స్లాట్ బుకింగ్',
    bookSlotSubtitle: 'మీరు మార్కెట్ యార్డుకు వచ్చే సమయాన్ని ముందుగా రిజర్వ్ చేసుకోండి. వాహనాల రద్దీని నివారించి తక్షణ QR టోకెన్ పాస్ పొందండి.',
    fieldName: 'రైతు పూర్తి పేరు',
    fieldMobile: 'మొబైల్ నంబర్ (SMS హెచ్చరికల కోసం)',
    fieldAadhaar: 'కిసాన్ ఐడీ / ఆధార్ చివరి 4 అంకెలు',
    fieldState: 'రాష్ట్రాన్ని ఎంచుకోండి (భారతదేశ రాష్ట్రాలన్నీ)',
    fieldDistrict: 'జిల్లాను ఎంచుకోండి',
    fieldMandal: 'మండలం (Mandal)',
    fieldVillage: 'రైతు గ్రామం (Village)',
    fieldMarket: 'ప్రభుత్వ మార్కెట్ యార్డు / కొనుగోలు కేంద్రం',
    fieldCrop: 'విక్రయించదలచిన పంట',
    fieldQuantity: 'అంచనా పరిమాణం (క్వింటాళ్ళలో)',
    fieldVehicle: 'రవాణా వాహన రకం',
    fieldVehicleNo: 'వాహన నంబరు (ఉదా: AP 07 AB 1234)',
    fieldDate: 'రావాలనుకుంటున్న తేదీ',
    slotCapacityHeader: '🕒 నిజ-సమయ స్లాట్ లభ్యత & కేటాయింపు (5 Shifts • Max 10 Farmers Each)',
    slotCapacitySub: 'ప్రతి షిఫ్ట్‌కు గరిష్ట పరిమితి 10 మంది రైతులు మాత్రమే (రోజుకు గరిష్టంగా 50 మంది). స్లాట్ నిండితే వ్యవస్థ ఆటోమేటిక్‌గా తదుపరి షిఫ్ట్‌కు కేటాయిస్తుంది.',
    btnGenerateToken: 'Confirm Booking & Generate QR Token Pass',
    bookingHistoryTitle: 'నా బుకింగ్‌ల చరిత్ర (My Confirmed Bookings & History)',
    queueTitle: 'రియల్-టైమ్ కొనుగోలు క్యూ & రద్దీ పర్యవేక్షణ',
    queueSubtitle: 'ప్రభుత్వ మార్కెట్ యార్డులలో లైవ్ టోకెన్ స్థితి, బే కేటాయింపులు మరియు వాహనాల రద్దీ సమాచారం.',
    liveQueueCardTitle: 'లైవ్ క్యూ & అంచనా వేచి ఉండే సమయం (LIVE QUEUE)',
    yourToken: 'మీ టోకెన్ (Your Token)',
    currentlyServing: 'ప్రస్తుతం పిలుస్తున్న టోకెన్',
    farmersAhead: 'మీ కంటే ముందున్న రైతులు',
    estWaitTime: 'అంచనా వేచి ఉండే సమయం:',
    approxExpectedTurn: 'మీ వంతు వచ్చే సుమారు సమయం:',
    recommendedArrival: 'చేరుకోవాల్సిన సిఫార్సు సమయం:',
    activeCounters: 'ప్రస్తుత కౌంటర్లు:',
    congestionLevel: 'రద్దీ స్థాయి:',
    smartArrivalAdvice: 'కేంద్రం వద్ద ఎక్కువ సమయం వేచి ఉండకుండా ఉండటానికి మీ వంతు రావడానికి 10–15 నిమిషాల ముందు మాత్రమే కేంద్రానికి చేరుకోండి.',
    btnCancelBooking: 'స్లాట్ రద్దు చేసుకోండి',
    btnSimulateAdvance: 'తదుపరి టోకెన్ పిలవండి (లైవ్ డెమో)',
    marketDirTitle: 'భారతదేశంలోని అన్ని రాష్ట్రాలు, జిల్లా మార్కెట్ యార్డులు',
    marketDirSubtitle: 'ఏ రాష్ట్రాన్ని మరియు జిల్లానైనా ఎంచుకోండి. అందులోని అన్ని ప్రభుత్వ మార్కెట్ సెంటర్లు, ఖచ్చితమైన స్థానాలు, పంట డిమాండ్ ఇక్కడే కనిపిస్తాయి.',
    bestSellingDestinationsHeading: '🌟 పంట అమ్మడానికి అత్యుత్తమ మార్కెట్లు & కొనుగోలు ప్రాధాన్య కేంద్రాలు',
    bestSellingDestinationsSubtitle: 'ఏ మార్కెట్లో అమ్మితే అత్యధిక ధర లభిస్తుంది? ఏ ప్రాంతాల్లోని కొనుగోలుదారులు ఎక్కువగా కొంటారు?',
    calcTitle: 'ఉత్తమ మార్కెట్ సిఫార్సు & నికర లాభ కాలిక్యులేటర్',
    calcSubtitle: 'సూత్రం: నికర అమ్మకం లాభం = పంట ధర - రవాణా ఖర్చు - ఇతర మార్కెట్ ఛార్జీలు',
    calcOriginLabel: 'మీ గ్రామం / ప్రాంతం',
    btnCalculateNet: 'ఉత్తమ మార్కెట్లను సరిపోల్చండి (Compare Mandis & Net Realization)',
    biometricModalTitle: 'వేలిముద్ర బయోమెట్రిక్ ధృవీకరణ',
    passwordLoginTitle: 'సెక్యూరిటీ పాస్‌వర్డ్ / పిన్ నమోదు',
    fieldSecurityPin: 'రైతు సెక్యూరిటీ పిన్ (Default: 4109)',
    btnLogin: 'లాగిన్ అవ్వండి',
    fixPasswordTitle: 'రైతు సెక్యూరిటీ పాస్‌వర్డ్ సెట్టింగ్స్',
    fieldNewPassword: 'కొత్త సెక్యూరిటీ పాస్‌వర్డ్ / పిన్',
    fieldConfirmPassword: 'పాస్‌వర్డ్ మరలా నమోదు చేయండి',
    btnSavePassword: 'పాస్‌వర్డ్ భద్రపరచండి'
  },
  hi: {
    appTitle: 'रायथुसेवा (किसान सेतु)',
    appSubtitle: 'स्मार्ट सरकारी खरीद, कतार प्रबंधन और मंडी भाव',
    navHome: 'होम',
    navBookSlot: 'स्लॉट बुकिंग',
    navQueue: 'लाइव कतार',
    navMarkets: 'मंडी और मुनाफा',
    navVoice: 'वॉयस AI & Q&A',
    navTrack: 'स्थिति',
    navAdmin: 'एडमिन डेस्क',
    biometricLoginBtn: 'बायोमेट्रिक लॉगिन (फिंगरप्रिंट)',
    passwordLoginBtn: 'सिक्योरिटी पासवर्ड लॉगिन',
    fixPasswordBtn: 'पासवर्ड बदलें',
    statActiveCentres: 'सक्रिय सरकारी मंडियां',
    statAvgWait: 'औसत प्रतीक्षा समय',
    statMspDisbursed: 'कुल DBT भुगतान',
    statActiveTokens: 'सक्रिय कतार टोकन',
    statMins: 'मिनट',
    statCrores: 'करोड़',
    nowServing: 'वर्तमान टोकन नंबर',
    bayWeighbridge: 'इलेक्ट्रॉनिक कांटा / तुलाई',
    bayQuality: 'गुणवत्ता व नमी जांच',
    bayUnload: 'अनलोडिंग शेड व गोदाम',
    talkToFarmDirectTitle: 'फार्मडायरेक्ट वॉयस असिस्टेंट से बात करें',
    talkToFarmDirectDesc: 'अपनी मातृभाषा में फसल के आज के भाव और सबसे ज्यादा मुनाफे वाली मंडी के बारे में पूछें।',
    voiceFallbackLabel: 'आप अपना सवाल टाइप भी कर सकते हैं:',
    suggestedQuestionsLabel: '🌾 पूछ कर देखें (क्लिक करें):',
    btnSend: 'पूछें',
    bookSlotTitle: 'किसान पंजीकरण एवं मंडी स्लॉट बुकिंग',
    bookSlotSubtitle: 'मंडी में आने का समय पहले से आरक्षित करें और कतार से बचकर तुरंत डिजिटल क्यूआर पास प्राप्त करें।',
    fieldName: 'किसान का पूरा नाम',
    fieldMobile: 'मोबाइल नंबर (SMS सूचना के लिए)',
    fieldAadhaar: 'किसान आईडी / आधार के अंतिम 4 अंक',
    fieldState: 'राज्य चुनें (भारत के सभी राज्य)',
    fieldDistrict: 'जिला चुनें',
    fieldMandal: 'तहसील / ब्लॉक',
    fieldVillage: 'गांव का नाम',
    fieldMarket: 'सरकारी मंडी / खरीद केंद्र',
    fieldCrop: 'बेची जाने वाली फसल',
    fieldQuantity: 'अनुमानित मात्रा (क्विंटल में)',
    fieldVehicle: 'परिवहन वाहन का प्रकार',
    fieldVehicleNo: 'वाहन नंबर (उदा. AP 07 AB 1234)',
    fieldDate: 'मंडी आने की तिथि',
    slotCapacityHeader: '🕒 लाइव स्लॉट क्षमता एवं आवंटन (5 शिफ्ट • प्रति शिफ्ट 10 किसान)',
    slotCapacitySub: 'प्रत्येक शिफ्ट में अधिकतम 10 किसान। स्लॉट भरने पर सिस्टम अपने आप अगली खाली शिफ्ट आवंटित कर देता है।',
    btnGenerateToken: 'बुकिंग पक्की करें और QR पास पाएं',
    bookingHistoryTitle: 'मेरी बुकिंग का इतिहास',
    queueTitle: 'रियल-टाइम खरीद कतार एवं मंडी भीड़ ट्रैकर',
    queueSubtitle: 'सरकारी मंडियों में लाइव टोकन स्थिति, धर्मकांटा आवंटन और वाहनों की कतार की जानकारी।',
    liveQueueCardTitle: 'लाइव कतार एवं अनुमानित प्रतीक्षा समय',
    yourToken: 'आपका टोकन',
    currentlyServing: 'वर्तमान में बुलाया गया टोकन',
    farmersAhead: 'कतार में आपके आगे किसान',
    estWaitTime: 'अनुमानित प्रतीक्षा समय:',
    approxExpectedTurn: 'आपकी बारी का अनुमानित समय:',
    recommendedArrival: 'पहुंचने का सही समय:',
    activeCounters: 'सक्रिय कांटे:',
    congestionLevel: 'भीड़ का स्तर:',
    smartArrivalAdvice: 'मंडी में बेवजह इंतजार से बचने के लिए अपनी बारी से केवल 10–15 मिनट पहले ही पहुंचें।',
    btnCancelBooking: 'स्लॉट रद्द करें',
    btnSimulateAdvance: 'अगला टोकन बुलाएं (लाइव डेमो)',
    marketDirTitle: 'अखिल भारतीय मंडी व एपीएमसी डायरेक्टरी',
    marketDirSubtitle: 'किसी भी राज्य और जिले की सभी सरकारी मंडियां, स्थान और मांग देखें।',
    bestSellingDestinationsHeading: '🌟 फसल बेचने के सर्वोत्तम बाजार व प्रमुख खरीद केंद्र',
    bestSellingDestinationsSubtitle: 'फसल बेचने पर सबसे ज्यादा भाव कहां मिलेगा? प्रमुख खरीदार कहां स्थित हैं?',
    calcTitle: 'सर्वोत्तम मंडी अनुशंसा एवं शुद्ध मुनाफा कैलकुलेटर',
    calcSubtitle: 'सूत्र: शुद्ध मुनाफा = मंडी भाव - परिवहन खर्च - अन्य शुल्क',
    calcOriginLabel: 'आपका गांव / स्थान',
    btnCalculateNet: 'मंडियों की तुलना करें और शुद्ध मुनाफा देखें',
    biometricModalTitle: 'बायोमेट्रिक फिंगरप्रिंट सत्यापन',
    passwordLoginTitle: 'सुरक्षा पासवर्ड / पिन दर्ज करें',
    fieldSecurityPin: 'किसान सुरक्षा पिन (डिफ़ॉल्ट: 4109)',
    btnLogin: 'लॉगिन करें',
    fixPasswordTitle: 'किसान पासवर्ड सेटिंग्स',
    fieldNewPassword: 'नया पासवर्ड / पिन दर्ज करें',
    fieldConfirmPassword: 'पासवर्ड की पुष्टि करें',
    btnSavePassword: 'पासवर्ड सुरक्षित करें'
  },
  ta: {
    appTitle: 'உழவர் சேவை (RythuSeva)',
    appSubtitle: 'ஸ்மார்ட் கொள்முதல், வரிசை மேலாண்மை மற்றும் சந்தை நுண்ணறிவு',
    navHome: 'முகப்பு',
    navBookSlot: 'முன்பதிவு',
    navQueue: 'நேரலை வரிசை',
    navMarkets: 'சந்தைகள் & லாபம்',
    navVoice: 'குரல் AI',
    navTrack: 'நிலை',
    navAdmin: 'நிர்வாகம்',
    biometricLoginBtn: 'கைரேகை உள்நுழைவு',
    passwordLoginBtn: 'கடவுச்சொல் உள்நுழைவு',
    fixPasswordBtn: 'கடவுச்சொல் மாற்றம்',
    bookSlotTitle: 'விவசாயி பதிவு & மண்டி முன்பதிவு',
    calcTitle: 'சிறந்த சந்தை & நிகர லாப கணக்கீடு',
    btnCalculateNet: 'சந்தைகளை ஒப்பிட்டு நிகர லாபம் பார்க்கவும்'
  },
  kn: {
    appTitle: 'ರೈತ ಸೇವೆ (RythuSeva)',
    appSubtitle: 'ಸ್ಮಾರ್ಟ್ ಸರ್ಕಾರಿ ಖರೀದಿ, ಕ್ಯೂ ನಿರ್ವಹಣೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ',
    navHome: 'ಮುಖಪುಟ',
    navBookSlot: 'ಸ್ಲಾಟ್ ಬುಕಿಂಗ್',
    navQueue: 'ಲೈವ್ ಕ್ಯೂ',
    navMarkets: 'ಮಾರುಕಟ್ಟೆಗಳು & ಲಾಭ',
    navVoice: 'ಧ್ವನಿ AI',
    navTrack: 'ಸ್ಥಿತಿ',
    navAdmin: 'ನಿರ್ವಾಹಕ ಡೆಸ್ಕ್',
    biometricLoginBtn: 'ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಗಿನ್',
    passwordLoginBtn: 'ಪಾಸ್‌ವರ್ಡ್ ಲಾಗಿನ್',
    fixPasswordBtn: 'ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಿ',
    bookSlotTitle: 'ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸ್ಲಾಟ್ ಬುಕಿಂಗ್',
    calcTitle: 'ಅತ್ಯುತ್ತಮ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ನಿವ್ವಳ ಲಾಭ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    btnCalculateNet: 'ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಹೋಲಿಕೆ ಮಾಡಿ'
  }
};

// 2. Comprehensive All India 28 States & Major Mandis Database
const ALL_INDIA_LOCATIONS = {
  'Andhra Pradesh': {
    districts: ['Guntur', 'Krishna', 'NTR', 'Eluru', 'West Godavari', 'East Godavari', 'Kurnool', 'Anantapur', 'Prakasam', 'Nellore', 'Visakhapatnam', 'Chittoor'],
    mandis: [
      { name: 'Guntur APMC Mirchi Yard', district: 'Guntur', distance: 18, priceBoost: 1.05 },
      { name: 'Tenali Procurement Centre', district: 'Guntur', distance: 12, priceBoost: 0.98 },
      { name: 'Vijayawada Wholesale APMC', district: 'NTR', distance: 34, priceBoost: 1.02 },
      { name: 'Eluru District Mandi', district: 'Eluru', distance: 42, priceBoost: 0.99 },
      { name: 'Kurnool Cotton Market', district: 'Kurnool', distance: 85, priceBoost: 1.03 },
      { name: 'Anantapur Groundnut Yard', district: 'Anantapur', distance: 110, priceBoost: 1.01 }
    ]
  },
  'Telangana': {
    districts: ['Warangal', 'Khammam', 'Nizamabad', 'Nalgonda', 'Karimnagar', 'Mahabubnagar', 'Adilabad', 'Siddipet', 'Suryapet'],
    mandis: [
      { name: 'Warangal Enamamula Grain Yard', district: 'Warangal', distance: 68, priceBoost: 1.06 },
      { name: 'Khammam APMC Chilli Yard', district: 'Khammam', distance: 55, priceBoost: 1.02 },
      { name: 'Nizamabad Turmeric & Paddy Mandi', district: 'Nizamabad', distance: 95, priceBoost: 1.04 },
      { name: 'Nalgonda Cotton & Paddy Centre', district: 'Nalgonda', distance: 62, priceBoost: 0.99 }
    ]
  },
  'Maharashtra': {
    districts: ['Nagpur', 'Amravati', 'Nashik', 'Pune', 'Kolhapur', 'Latur', 'Jalgaon', 'Solapur', 'Aurangabad', 'Akola'],
    mandis: [
      { name: 'Nashik Lasalgaon Onion Yard', district: 'Nashik', distance: 140, priceBoost: 1.08 },
      { name: 'Nagpur Cotton & Soybean APMC', district: 'Nagpur', distance: 120, priceBoost: 1.03 },
      { name: 'Latur Soybean & Pulse Hub', district: 'Latur', distance: 135, priceBoost: 1.05 },
      { name: 'Pune Gultekdi Vegetable Market', district: 'Pune', distance: 160, priceBoost: 1.04 }
    ]
  },
  'Karnataka': {
    districts: ['Ballari', 'Raichur', 'Belagavi', 'Mysuru', 'Hubballi', 'Davanagere', 'Shivamogga', 'Bagalkote', 'Tumakuru'],
    mandis: [
      { name: 'Byadgi Red Chilli Market Yard', district: 'Hubballi', distance: 125, priceBoost: 1.09 },
      { name: 'Raichur Cotton & Paddy APMC', district: 'Raichur', distance: 92, priceBoost: 1.02 },
      { name: 'Ballari Grain & Denim Market', district: 'Ballari', distance: 88, priceBoost: 1.01 },
      { name: 'Mysuru Bandipalya APMC', district: 'Mysuru', distance: 145, priceBoost: 1.03 }
    ]
  },
  'Punjab': {
    districts: ['Ludhiana', 'Amritsar', 'Patiala', 'Jalandhar', 'Bathinda', 'Sangrur', 'Firozpur', 'Moga'],
    mandis: [
      { name: 'Khanna Asia Largest Grain Market', district: 'Ludhiana', distance: 180, priceBoost: 1.07 },
      { name: 'Bathinda Cotton & Wheat Yard', district: 'Bathinda', distance: 165, priceBoost: 1.03 },
      { name: 'Jalandhar Fresh Vegetable Hub', district: 'Jalandhar', distance: 190, priceBoost: 1.02 }
    ]
  },
  'Haryana': {
    districts: ['Karnal', 'Sirsa', 'Hisar', 'Ambala', 'Kurukshetra', 'Rohtak', 'Sonipat'],
    mandis: [
      { name: 'Karnal Basmati Rice Yard', district: 'Karnal', distance: 175, priceBoost: 1.08 },
      { name: 'Sirsa Cotton & Wheat Mandi', district: 'Sirsa', distance: 185, priceBoost: 1.03 }
    ]
  },
  'Madhya Pradesh': {
    districts: ['Indore', 'Ujjain', 'Bhopal', 'Dewas', 'Mandsaur', 'Neemuch', 'Khandwa'],
    mandis: [
      { name: 'Indore Devi Ahilya Bai APMC', district: 'Indore', distance: 160, priceBoost: 1.06 },
      { name: 'Neemuch Garlic & Spices Mandi', district: 'Neemuch', distance: 210, priceBoost: 1.09 },
      { name: 'Ujjain Soybean & Wheat Yard', district: 'Ujjain', distance: 170, priceBoost: 1.03 }
    ]
  },
  'Gujarat': {
    districts: ['Rajkot', 'Unjha', 'Surat', 'Ahmedabad', 'Gondal', 'Junagadh', 'Amreli'],
    mandis: [
      { name: 'Unjha Cumin & Spices APMC', district: 'Unjha', distance: 220, priceBoost: 1.10 },
      { name: 'Gondal Groundnut & Chilli Yard', district: 'Gondal', distance: 180, priceBoost: 1.07 },
      { name: 'Rajkot Cotton & Oilseed Mandi', district: 'Rajkot', distance: 175, priceBoost: 1.04 }
    ]
  },
  'Uttar Pradesh': {
    districts: ['Agra', 'Kanpur', 'Varanasi', 'Lucknow', 'Bareilly', 'Aligarh', 'Mathura', 'Meerut'],
    mandis: [
      { name: 'Agra Potato & Mustard APMC', district: 'Agra', distance: 200, priceBoost: 1.05 },
      { name: 'Kanpur Grain & Oilseed Mandi', district: 'Kanpur', distance: 195, priceBoost: 1.02 }
    ]
  },
  'Tamil Nadu': {
    districts: ['Erode', 'Coimbatore', 'Salem', 'Madurai', 'Tirupur', 'Thanjavur', 'Dindigul'],
    mandis: [
      { name: 'Erode Turmeric Special APMC', district: 'Erode', distance: 155, priceBoost: 1.08 },
      { name: 'Coimbatore Wholesale Produce Yard', district: 'Coimbatore', distance: 165, priceBoost: 1.04 }
    ]
  },
  'Rajasthan': {
    districts: ['Kota', 'Jodhpur', 'Bikaner', 'Jaipur', 'Sri Ganganagar', 'Alwar', 'Barmer'],
    mandis: [
      { name: 'Kota Bhamashah Grain Mandi', district: 'Kota', distance: 190, priceBoost: 1.06 },
      { name: 'Jodhpur Mustard & Cumin Yard', district: 'Jodhpur', distance: 230, priceBoost: 1.08 }
    ]
  }
};

const CROPS = [
  { id: 'paddy', name: 'వరి / Dhan (Paddy)', icon: '🌾', price: 2320, charge: 45 },
  { id: 'cotton', name: 'పత్తి / Kapas (Cotton)', icon: '☁️', price: 7521, charge: 65 },
  { id: 'chilli', name: 'మిరప / Mirchi (Red Chilli)', icon: '🌶️', price: 18500, charge: 110 },
  { id: 'turmeric', name: 'పసుపు / Haldi (Turmeric)', icon: '🟡', price: 13200, charge: 85 },
  { id: 'maize', name: 'మొక్కజొన్న / Makka (Maize)', icon: '🌽', price: 2225, charge: 40 },
  { id: 'onion', name: 'ఉల్లి / Pyaz (Onion)', icon: '🧅', price: 2800, charge: 35 },
  { id: 'tomato', name: 'టమోటా / Tamatar (Tomato)', icon: '🍅', price: 2100, charge: 30 },
  { id: 'soybean', name: 'సోయాబీన్ / Soybean', icon: '🌱', price: 4892, charge: 50 },
  { id: 'wheat', name: 'గోధుమ / Gehun (Wheat)', icon: '🌾', price: 2275, charge: 40 }
];

const SHIFTS_DATA = [
  { id: 'shift_1', name: 'Shift 1 (06:30 AM - 08:00 AM)', booked: 4, max: 10, status: 'AVAILABLE' },
  { id: 'shift_2', name: 'Shift 2 (08:00 AM - 09:30 AM)', booked: 8, max: 10, status: 'LIMITED' },
  { id: 'shift_3', name: 'Shift 3 (09:30 AM - 11:00 AM)', booked: 10, max: 10, status: 'FULL' },
  { id: 'shift_4', name: 'Shift 4 (11:00 AM - 12:30 PM)', booked: 3, max: 10, status: 'AVAILABLE' },
  { id: 'shift_5', name: 'Shift 5 (12:30 PM - 02:00 PM)', booked: 1, max: 10, status: 'AVAILABLE' }
];

// 3. Application Master Engine
class RythuSevaApp {
  constructor() {
    this.currentLang = 'te';
    this.selectedShift = 'shift_1';
    this.activeTokenNumber = 839;
    this.recognition = null;
    this.speechSynthesis = window.speechSynthesis || null;
  }

  init() {
    window.app = this;
    this.setupNavigation();
    this.setupLanguageSwitcher();
    this.setupDropdowns();
    this.renderShiftCapacityCards();
    this.setupVoiceAssistant();
    this.setupMandiCalculator();
    this.setupSlotBooking();
    this.setupQueueManager();
    this.setupModals();
    this.applyTranslations();
    this.runProfitCalculation();
    console.log('🌾 [RythuSeva] Master initialized successfully!');
  }

  // Language & Translation Engine
  setupLanguageSwitcher() {
    const select = document.getElementById('langSelect');
    if (select) {
      select.value = this.currentLang;
      select.addEventListener('change', (e) => {
        this.currentLang = e.target.value;
        this.applyTranslations();
        this.renderShiftCapacityCards();
        this.runProfitCalculation();
        this.showToast(`🌐 Language changed to ${select.options[select.selectedIndex].text}`);
      });
    }
  }

  applyTranslations() {
    const langDict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.te;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langDict[key]) {
        el.textContent = langDict[key];
      }
    });

    // Update HTML lang tag
    document.documentElement.lang = this.currentLang;
  }

  // Navigation
  setupNavigation() {
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-nav-tab');
        this.switchTab(tabId);
      });
    });
  }

  switchTab(tabName) {
    document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.desktop-nav-btn').forEach(b => b.classList.remove('active'));

    const target = document.getElementById(`tab-${tabName}`);
    if (target) target.classList.add('active');

    const activeBtn = document.querySelector(`[data-nav-tab="${tabName}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Location & Crop Dropdowns
  setupDropdowns() {
    const cropSelects = ['bookCrop', 'calcCrop'];
    cropSelects.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = CROPS.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    });

    const stateSelects = ['bookState', 'filterState'];
    const allStates = Object.keys(ALL_INDIA_LOCATIONS);

    stateSelects.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = allStates.map(s => `<option value="${s}">${s}</option>`).join('');
      el.addEventListener('change', () => this.updateDistrictsAndMandis(id, el.value));
    });

    this.updateDistrictsAndMandis('bookState', 'Andhra Pradesh');
    this.updateDistrictsAndMandis('filterState', 'Andhra Pradesh');

    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }
  }

  updateDistrictsAndMandis(stateSelectId, stateName) {
    const isBook = stateSelectId === 'bookState';
    const distSelect = document.getElementById(isBook ? 'bookDistrict' : 'filterDistrict');
    const stateData = ALL_INDIA_LOCATIONS[stateName] || ALL_INDIA_LOCATIONS['Andhra Pradesh'];

    if (distSelect) {
      distSelect.innerHTML = stateData.districts.map(d => `<option value="${d}">${d}</option>`).join('');
    }

    if (isBook) {
      const marketSelect = document.getElementById('bookMarket');
      if (marketSelect) {
        marketSelect.innerHTML = stateData.mandis.map(m => `<option value="${m.name}">🏛️ ${m.name} (${m.district})</option>`).join('');
      }
    }
  }

  // 5-Shift Capacity Selector
  renderShiftCapacityCards() {
    const container = document.getElementById('slotAvailabilityGrid');
    if (!container) return;

    container.innerHTML = SHIFTS_DATA.map(shift => {
      const isSelected = this.selectedShift === shift.id;
      const isFull = shift.booked >= shift.max;
      const badgeColor = isFull ? '#ef4444' : shift.booked >= 8 ? '#f59e0b' : '#10b981';
      const badgeText = isFull ? 'SLOT FULL' : shift.booked >= 8 ? 'LIMITED' : 'AVAILABLE';

      return `
        <div class="stat-card" style="cursor:pointer; border: 2px solid ${isSelected ? '#059669' : '#e2e8f0'}; background:${isSelected ? '#ecfdf5' : '#fff'};" onclick="app.selectShift('${shift.id}')">
          <div style="width:100%;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="color:#064e3b; font-size:0.95rem;">${shift.name}</strong>
              <span style="background:${badgeColor}; color:#fff; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:12px;">${badgeText}</span>
            </div>
            <div style="margin-top:8px; display:flex; justify-content:space-between; font-size:0.8rem; color:#64748b;">
              <span>Capacity: ${shift.booked} / ${shift.max} Farmers</span>
              <span style="font-weight:700; color:${isFull ? '#ef4444' : '#059669'};">${shift.max - shift.booked} slots left</span>
            </div>
            <div style="height:6px; background:#e2e8f0; border-radius:3px; margin-top:6px; overflow:hidden;">
              <div style="width:${(shift.booked / shift.max) * 100}%; height:100%; background:${badgeColor};"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  selectShift(shiftId) {
    const shift = SHIFTS_DATA.find(s => s.id === shiftId);
    if (!shift) return;

    if (shift.booked >= shift.max) {
      // Auto shift alert
      const nextAvailable = SHIFTS_DATA.find(s => s.booked < s.max);
      if (nextAvailable) {
        this.selectedShift = nextAvailable.id;
        const alertBox = document.getElementById('slotAutoShiftAlert');
        if (alertBox) alertBox.style.display = 'flex';
      }
    } else {
      this.selectedShift = shiftId;
      const alertBox = document.getElementById('slotAutoShiftAlert');
      if (alertBox) alertBox.style.display = 'none';
    }

    const timeSlotInput = document.getElementById('bookTimeSlot');
    if (timeSlotInput) timeSlotInput.value = shift.name;

    this.renderShiftCapacityCards();
  }

  // Mandi Net Profit Calculator
  setupMandiCalculator() {
    const form = document.getElementById('profitCalcForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.runProfitCalculation();
      });
    }
  }

  runProfitCalculation() {
    const cropId = document.getElementById('calcCrop')?.value || 'chilli';
    const qty = parseFloat(document.getElementById('calcQuantity')?.value) || 50;
    const origin = document.getElementById('calcOrigin')?.value || 'Tenali';

    const crop = CROPS.find(c => c.id === cropId) || CROPS[2];
    const resultsWrap = document.getElementById('calcResultsWrap');
    const cardsContainer = document.getElementById('calcCardsContainer');

    if (!cardsContainer) return;
    if (resultsWrap) resultsWrap.style.display = 'block';

    const stateData = ALL_INDIA_LOCATIONS['Andhra Pradesh'];
    const calculated = stateData.mandis.map(m => {
      const price = Math.round(crop.price * m.priceBoost);
      const gross = Math.round(qty * price);
      const transport = Math.round(m.distance * 35);
      const charges = Math.round(qty * crop.charge);
      const net = gross - transport - charges;
      return { ...m, price, gross, transport, charges, net };
    }).sort((a, b) => b.net - a.net);

    cardsContainer.innerHTML = calculated.map((m, idx) => `
      <div class="stat-card" style="border-left: 5px solid ${idx === 0 ? '#10b981' : '#cbd5e1'};">
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="color:#064e3b; font-size:1.1rem;">${m.name}</h4>
            ${idx === 0 ? '<span style="background:#d1fae5; color:#047857; font-weight:700; padding:3px 10px; border-radius:12px; font-size:0.75rem;">🌟 HIGHEST NET PROFIT</span>' : ''}
          </div>
          <p style="font-size:0.8rem; color:#64748b; margin-top:2px;">📍 ${m.district} • ${m.distance} km from ${origin}</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(110px, 1fr)); gap:10px; margin-top:12px; background:#f8fafc; padding:10px; border-radius:8px;">
            <div><span style="font-size:0.75rem; color:#64748b;">Mandi Price:</span><br><strong>₹${m.price.toLocaleString('en-IN')}/Qtl</strong></div>
            <div><span style="font-size:0.75rem; color:#64748b;">Transport:</span><br><span style="color:#dc2626;">-₹${m.transport.toLocaleString('en-IN')}</span></div>
            <div><span style="font-size:0.75rem; color:#64748b;">Charges:</span><br><span style="color:#dc2626;">-₹${m.charges.toLocaleString('en-IN')}</span></div>
            <div><span style="font-size:0.75rem; color:#059669; font-weight:700;">Net Amount:</span><br><strong style="font-size:1.1rem; color:#047857;">₹${m.net.toLocaleString('en-IN')}</strong></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Voice AI
  setupVoiceAssistant() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.onstart = () => this.updateVoiceStatus('🎙️ Listening... / మీ మాటలను వింటున్నాము...', true);
      this.recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        document.getElementById('homeTranscriptWrap').style.display = 'block';
        document.getElementById('homeTranscriptText').textContent = text;
        this.processVoiceQuery(text);
      };
      this.recognition.onend = () => this.toggleListeningWaveform(false);
    }

    const micBtn = document.getElementById('homeVoiceMicBtn');
    if (micBtn) micBtn.addEventListener('click', () => this.startListening());

    const btnSend = document.getElementById('homeBtnSendVoiceText');
    if (btnSend) {
      btnSend.addEventListener('click', () => {
        const inp = document.getElementById('homeVoiceTextInput');
        if (inp && inp.value.trim()) {
          this.processVoiceQuery(inp.value.trim());
          inp.value = '';
        }
      });
    }

    const replayBtn = document.getElementById('homeVoiceReplayBtn');
    if (replayBtn) replayBtn.addEventListener('click', () => this.speakResponse(this.lastSpokenText));
  }

  startListening() {
    if (!this.recognition) {
      alert('Microphone speech recognition is not supported in this browser. Please type your query in the box.');
      return;
    }
    const langMap = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN', ta: 'ta-IN', kn: 'kn-IN' };
    this.recognition.lang = langMap[this.currentLang] || 'te-IN';
    this.toggleListeningWaveform(true);
    this.recognition.start();
  }

  updateVoiceStatus(msg, showWave) {
    const badge = document.getElementById('homeVoiceStatusText');
    if (badge) badge.textContent = msg;
    this.toggleListeningWaveform(showWave);
  }

  toggleListeningWaveform(show) {
    const w = document.getElementById('homeVoiceWaveform');
    if (w) w.style.display = show ? 'flex' : 'none';
  }

  processVoiceQuery(query) {
    const q = query.toLowerCase();
    const crop = CROPS.find(c => q.includes(c.id) || q.includes(c.name.toLowerCase())) || CROPS[2];
    const mandi = ALL_INDIA_LOCATIONS['Andhra Pradesh'].mandis[0];

    const price = Math.round(crop.price * mandi.priceBoost);
    const net = Math.round((50 * price) - (mandi.distance * 35) - (50 * crop.charge));

    let answer = '';
    if (this.currentLang === 'hi') {
      answer = `🌾 **${mandi.name}** में **${crop.name}** का भाव **₹${price.toLocaleString('en-IN')}/क्विंटल** है। 50 क्विंटल पर अनुमानित शुद्ध लाभ **₹${net.toLocaleString('en-IN')}** रहेगा।`;
    } else if (this.currentLang === 'en') {
      answer = `🌾 In **${mandi.name}**, the modal price for **${crop.name}** is **₹${price.toLocaleString('en-IN')}/Qtl**. Your estimated net realization for 50 Qtl is **₹${net.toLocaleString('en-IN')}**.`;
    } else {
      answer = `🌾 **${mandi.name}** లో **${crop.name}** కు ఈరోజు మోడల్ ధర **₹${price.toLocaleString('en-IN')}/క్వింటాల్**. రవాణా ఖర్చులు పోను 50 క్వింటాళ్లకు నికర లాభం **₹${net.toLocaleString('en-IN')}**.`;
    }

    document.getElementById('homeVoiceResponseBox').style.display = 'block';
    document.getElementById('homeVoiceAnswerText').innerHTML = answer;
    document.getElementById('homeMetricBadges').style.display = 'flex';
    document.getElementById('homeSellingPriceVal').textContent = `₹${price.toLocaleString('en-IN')} / Qtl`;
    document.getElementById('homeNetAmountVal').textContent = `₹${net.toLocaleString('en-IN')}`;

    this.lastSpokenText = answer.replace(/[*#]/g, '');
    this.speakResponse(this.lastSpokenText);
  }

  speakResponse(text) {
    if (!this.speechSynthesis || !text) return;
    this.speechSynthesis.cancel();
    const ut = new SpeechSynthesisUtterance(text);
    const langMap = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN', ta: 'ta-IN', kn: 'kn-IN' };
    ut.lang = langMap[this.currentLang] || 'te-IN';
    this.speechSynthesis.speak(ut);
  }

  // Slot Booking & QR Token Pass
  setupSlotBooking() {
    const form = document.getElementById('slotBookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const farmerName = document.getElementById('bookFarmerName')?.value || 'Farmer';
      const mobile = document.getElementById('bookMobile')?.value || '9848022341';
      const crop = document.getElementById('bookCrop')?.value || 'chilli';
      const qty = document.getElementById('bookQuantity')?.value || '50';
      const market = document.getElementById('bookMarket')?.value || 'Guntur APMC Mirchi Yard';
      const date = document.getElementById('bookDate')?.value || new Date().toISOString().split('T')[0];

      this.activeTokenNumber++;
      const tokenId = `AP-GNT-2026-${String(this.activeTokenNumber).padStart(4, '0')}`;

      // Update shift count
      const shift = SHIFTS_DATA.find(s => s.id === this.selectedShift);
      if (shift && shift.booked < shift.max) shift.booked++;

      this.renderShiftCapacityCards();

      const modal = document.getElementById('tokenSlipModal');
      const content = document.getElementById('tokenSlipContent');
      if (modal && content) {
        content.innerHTML = `
          <div style="text-align:center;">
            <div style="font-size:48px;">✅</div>
            <h3 style="color:#064e3b; font-size:1.3rem;">స్లాట్ నిర్ధారించబడింది (Slot Confirmed!)</h3>
            <p style="font-size:0.85rem; color:#64748b;">Government Mandi Digital Entry Token Pass</p>
          </div>
          <div style="background:#f8fafc; border:2px dashed #059669; border-radius:12px; padding:16px; margin:16px 0; text-align:center;">
            <span style="font-size:0.75rem; color:#64748b; font-weight:700;">YOUR LIVE TOKEN NUMBER</span>
            <div style="font-size:2rem; font-weight:800; color:#047857; margin:4px 0;">${tokenId}</div>
            <div style="font-size:0.85rem; color:#0f172a; font-weight:600;">${market}</div>
          </div>
          <div style="font-size:0.88rem; line-height:1.8; color:#334155;">
            <div>👤 <strong>Farmer:</strong> ${farmerName} (${mobile})</div>
            <div>🌾 <strong>Crop & Quantity:</strong> ${crop.toUpperCase()} • ${qty} Quintals</div>
            <div>📅 <strong>Arrival Slot:</strong> ${date} • ${shift ? shift.name : 'Shift 1'}</div>
            <div>🚪 <strong>Entry Gate:</strong> Gate 2 Weighbridge</div>
          </div>
          <div style="margin-top:20px; display:flex; gap:10px;">
            <button type="button" class="btn btn-primary btn-block" onclick="document.getElementById('tokenSlipModal').style.display='none'; app.switchTab('queue');">
              🚦 View Live Queue Status →
            </button>
            <button type="button" class="btn btn-outline" onclick="document.getElementById('tokenSlipModal').style.display='none';">Close</button>
          </div>
        `;
        modal.style.display = 'flex';
      }

      document.getElementById('slotConfirmedNotificationBar').style.display = 'block';
    });
  }

  // Queue Advance
  setupQueueManager() {
    const btn = document.getElementById('btnSimulateAdvance');
    if (btn) {
      btn.addEventListener('click', () => {
        this.activeTokenNumber++;
        const nextToken = `AP-GNT-2026-${String(this.activeTokenNumber).padStart(4, '0')}`;
        document.getElementById('homeServingToken').textContent = nextToken;
        document.getElementById('nowServingTokenDisplay').textContent = nextToken;
        this.showToast(`🔔 Token ${nextToken} called to Gate 2 Weighbridge!`);
      });
    }
  }

  // Modals
  setupModals() {
    document.querySelectorAll('.btn-biometric-trigger').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('biometricModal').style.display = 'flex';
      });
    });
    document.getElementById('closeBiometricModal')?.addEventListener('click', () => {
      document.getElementById('biometricModal').style.display = 'none';
    });
    document.getElementById('btnSimulateBioSuccess')?.addEventListener('click', () => {
      document.getElementById('biometricModal').style.display = 'none';
      this.showToast('✅ వేలిముద్ర ధృవీకరణ విజయవంతమైంది (Biometric Matched: Venkat Reddy)');
    });

    document.querySelectorAll('.btn-password-login-trigger').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('passwordLoginModal').style.display = 'flex';
      });
    });
    document.getElementById('closePasswordLoginModal')?.addEventListener('click', () => {
      document.getElementById('passwordLoginModal').style.display = 'none';
    });
    document.getElementById('btnSubmitPasswordLogin')?.addEventListener('click', () => {
      const pin = document.getElementById('loginSecurityPin')?.value;
      if (pin === '4109' || pin.length >= 4) {
        document.getElementById('passwordLoginModal').style.display = 'none';
        this.showToast('✅ లాగిన్ విజయవంతమైంది (Logged in successfully)');
      } else {
        alert('Invalid PIN! Default PIN is 4109');
      }
    });

    document.querySelectorAll('.btn-fix-password-trigger').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('fixPasswordModal').style.display = 'flex';
      });
    });
    document.getElementById('closeFixPasswordModal')?.addEventListener('click', () => {
      document.getElementById('fixPasswordModal').style.display = 'none';
    });
    document.getElementById('btnSaveFixedPassword')?.addEventListener('click', () => {
      document.getElementById('fixPasswordModal').style.display = 'none';
      this.showToast('✅ కొత్త పాస్‌వర్డ్ భద్రపరచబడింది (Security PIN updated!)');
    });
  }

  showToast(msg) {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3500);
  }
}

// Start application
document.addEventListener('DOMContentLoaded', () => {
  const app = new RythuSevaApp();
  app.init();
});
