/**
 * RythuSeva (రైతుసేవ) - Master Interactive Frontend Controller
 * Multilingual Voice AI, Net Profit Mandi Calculator, Slot Booking, Live Queue & Navigation
 */

// 1. Data Store
const CROPS = [
  { id: 'paddy', name: 'వరి (Paddy / Rice)', icon: '🌾', price: 2320, charge: 45 },
  { id: 'cotton', name: 'పత్తి (Cotton)', icon: '☁️', price: 7521, charge: 65 },
  { id: 'chilli', name: 'మిరప (Red Chilli)', icon: '🌶️', price: 18500, charge: 110 },
  { id: 'turmeric', name: 'పసుపు (Turmeric)', icon: '🟡', price: 13200, charge: 85 },
  { id: 'maize', name: 'మొక్కజొన్న (Maize)', icon: '🌽', price: 2225, charge: 40 },
  { id: 'onion', name: 'ఉల్లి (Onion)', icon: '🧅', price: 2800, charge: 35 },
  { id: 'tomato', name: 'టమోటా (Tomato)', icon: '🍅', price: 2100, charge: 30 },
  { id: 'soybean', name: 'సోయాబీన్ (Soybean)', icon: '🌱', price: 4892, charge: 50 },
  { id: 'wheat', name: 'గోధుమ (Wheat)', icon: '🌾', price: 2275, charge: 40 }
];

const MANDIS = [
  { name: 'Guntur APMC Market Yard', state: 'Andhra Pradesh', district: 'Guntur', distance: 18, priceBoost: 1.04 },
  { name: 'Tenali Procurement Centre', state: 'Andhra Pradesh', district: 'Guntur', distance: 12, priceBoost: 0.98 },
  { name: 'Vijayawada Wholesale Yard', state: 'Andhra Pradesh', district: 'NTR', distance: 34, priceBoost: 1.02 },
  { name: 'Eluru Mandi Yard', state: 'Andhra Pradesh', district: 'Eluru', distance: 42, priceBoost: 0.99 },
  { name: 'Warangal Enamamula Yard', state: 'Telangana', district: 'Warangal', distance: 68, priceBoost: 1.05 },
  { name: 'Khammam APMC Yard', state: 'Telangana', district: 'Khammam', distance: 55, priceBoost: 1.01 }
];

const STATES_DATA = {
  'Andhra Pradesh': ['Guntur', 'Krishna', 'NTR', 'Eluru', 'West Godavari', 'East Godavari', 'Kurnool', 'Anantapur'],
  'Telangana': ['Warangal', 'Khammam', 'Nizamabad', 'Nalgonda', 'Karimnagar', 'Mahabubnagar'],
  'Maharashtra': ['Nagpur', 'Amravati', 'Nashik', 'Pune', 'Kolhapur'],
  'Karnataka': ['Ballari', 'Raichur', 'Belagavi', 'Mysuru', 'Hubballi'],
  'Punjab': ['Ludhiana', 'Amritsar', 'Patiala', 'Jalandhar', 'Bathinda']
};

const SAMPLE_QUESTIONS = {
  te: [
    '🌶️ గుంటూరు మిర్చి యార్డులో ఈరోజు మోడల్ ధర ఎంత?',
    '🌾 వరి ధాన్యం ఎక్కడ అమ్మితే ఎక్కువ నికర లాభం వస్తుంది?',
    '🚦 ఏలూరు కొనుగోలు కేంద్రంలో లైవ్ క్యూ ఎంత ఉంది?',
    '📅 రేపటికి మార్కెట్ స్లాట్ ఎలా బుక్ చేసుకోవాలి?'
  ],
  hi: [
    '🌶️ गुंटूर मंडी में मिर्च का आज का भाव क्या है?',
    '🌾 धान बेचने पर सबसे ज्यादा शुद्ध मुनाफा कहाँ मिलेगा?',
    '🚦 मंडी में अभी कितने किसानों की कतार है?',
    '📅 डिलीवरी के लिए स्लॉट कैसे बुक करें?'
  ],
  en: [
    '🌶️ What is the modal price of Red Chilli in Guntur yard today?',
    '🌾 Where will I get the highest net profit for Paddy?',
    '🚦 What is the current waiting time in the mandi queue?',
    '📅 How do I book a delivery token slot for tomorrow?'
  ]
};

// 2. Application Core Class
class RythuSevaApp {
  constructor() {
    this.currentLang = 'te';
    this.activeVoiceLang = 'te';
    this.activeTokenNumber = 839;
    this.bookings = [];
    this.recognition = null;
    this.speechSynthesis = window.speechSynthesis || null;
    this.lastSpokenText = '';
  }

  init() {
    window.app = this;
    this.setupNavigation();
    this.setupDropdowns();
    this.setupVoiceAssistant();
    this.setupMandiCalculator();
    this.setupSlotBooking();
    this.setupQueueManager();
    this.setupModals();
    this.setupLanguageSwitcher();
    this.renderSampleQuestions();
    this.runProfitCalculation();
    console.log('🌾 [RythuSeva] Master frontend initialized successfully!');
  }

  // Navigation & Tabs
  setupNavigation() {
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-nav-tab');
        this.switchTab(tabId);
      });
    });
  }

  switchTab(tabName) {
    document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.desktop-nav-btn').forEach(b => b.classList.remove('active'));

    const targetSection = document.getElementById(`tab-${tabName}`);
    if (targetSection) targetSection.classList.add('active');

    const activeNavBtn = document.querySelector(`[data-nav-tab="${tabName}"]`);
    if (activeNavBtn) activeNavBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dropdowns Populator
  setupDropdowns() {
    const cropSelects = ['bookCrop', 'calcCrop'];
    cropSelects.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = CROPS.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    });

    const stateSelects = ['bookState', 'filterState'];
    stateSelects.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = Object.keys(STATES_DATA).map(s => `<option value="${s}">${s}</option>`).join('');
      el.addEventListener('change', () => this.updateDistricts(id, el.value));
    });

    this.updateDistricts('bookState', 'Andhra Pradesh');
    this.updateDistricts('filterState', 'Andhra Pradesh');

    const vehicleSelect = document.getElementById('bookVehicle');
    if (vehicleSelect) {
      vehicleSelect.innerHTML = `
        <option value="tractor">🚜 Tractor Trailer (ట్రాక్టర్) - ₹35/km</option>
        <option value="pickup">🛻 Pickup Mini Truck (పికప్ వ్యాన్) - ₹25/km</option>
        <option value="truck">🚛 Heavy Lorry 10-Tyre (లారీ) - ₹60/km</option>
        <option value="auto">🛺 3-Wheeler Auto (ఆటో) - ₹15/km</option>
      `;
    }

    const marketSelect = document.getElementById('bookMarket');
    if (marketSelect) {
      marketSelect.innerHTML = MANDIS.map(m => `<option value="${m.name}">🏛️ ${m.name} (${m.district})</option>`).join('');
    }

    // Set today date as default
    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
    }
  }

  updateDistricts(stateSelectId, stateName) {
    const isBook = stateSelectId === 'bookState';
    const distSelect = document.getElementById(isBook ? 'bookDistrict' : 'filterDistrict');
    if (!distSelect) return;
    const districts = STATES_DATA[stateName] || ['Central District'];
    distSelect.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join('');
  }

  // Voice Assistant with Web Speech API
  setupVoiceAssistant() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.updateVoiceStatus('🎙️ Listening... / మీ మాటలను వింటున్నాము...', true);
      };

      this.recognition.onresult = (event) => {
        const transcript = Array.from(event.results).map(r => r[0].transcript).join('');
        const transcriptWrap = document.getElementById('homeTranscriptWrap');
        const transcriptText = document.getElementById('homeTranscriptText');
        if (transcriptWrap && transcriptText) {
          transcriptWrap.style.display = 'block';
          transcriptText.textContent = transcript;
        }
        if (event.results[0].isFinal) {
          this.processVoiceQuery(transcript);
        }
      };

      this.recognition.onerror = (e) => {
        this.updateVoiceStatus('⚠️ Mic error or permission denied. Please try typing.', false);
      };

      this.recognition.onend = () => {
        this.toggleListeningWaveform(false);
      };
    }

    // Voice Language Pills
    document.querySelectorAll('.voice-lang-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.voice-lang-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeVoiceLang = pill.getAttribute('data-voice-lang') || 'te';
        this.renderSampleQuestions();
      });
    });

    // Mic Trigger Buttons
    const micBtns = ['homeVoiceMicBtn', 'tabVoiceMicBtn'];
    micBtns.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => this.startListening());
      }
    });

    // Send Text Fallback Buttons
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

    // Audio Replay & Stop
    const replayBtn = document.getElementById('homeVoiceReplayBtn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => this.speakResponse(this.lastSpokenText));
    }
    const stopAudioBtn = document.getElementById('homeVoiceStopAudioBtn');
    if (stopAudioBtn) {
      stopAudioBtn.addEventListener('click', () => {
        if (this.speechSynthesis) this.speechSynthesis.cancel();
      });
    }
  }

  startListening() {
    if (!this.recognition) {
      alert('Your browser does not support Speech Recognition. Please type your query in the box below.');
      return;
    }
    const langCodes = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    this.recognition.lang = langCodes[this.activeVoiceLang] || 'te-IN';
    try {
      this.toggleListeningWaveform(true);
      this.recognition.start();
    } catch (err) {
      this.recognition.stop();
      setTimeout(() => this.recognition.start(), 200);
    }
  }

  updateVoiceStatus(msg, isListening) {
    const badge = document.getElementById('homeVoiceStatusText');
    if (badge) badge.textContent = msg;
    this.toggleListeningWaveform(isListening);
  }

  toggleListeningWaveform(show) {
    const waveform = document.getElementById('homeVoiceWaveform');
    if (waveform) waveform.style.display = show ? 'flex' : 'none';
  }

  renderSampleQuestions() {
    const container = document.getElementById('homeVoiceSampleChips');
    if (!container) return;
    const list = SAMPLE_QUESTIONS[this.activeVoiceLang] || SAMPLE_QUESTIONS.te;
    container.innerHTML = list.map(q => `<button type="button" class="btn-chip" onclick="app.processVoiceQuery('${q.replace(/'/g, "\\'")}')">${q}</button>`).join('');
  }

  processVoiceQuery(query) {
    const q = query.toLowerCase();
    let crop = CROPS.find(c => q.includes(c.id) || q.includes(c.name.toLowerCase())) || CROPS[2]; // Default Chilli
    let mandi = MANDIS.find(m => q.includes(m.district.toLowerCase()) || q.includes(m.name.toLowerCase())) || MANDIS[0];

    const estPrice = Math.round(crop.price * mandi.priceBoost);
    const transportCost = Math.round(mandi.distance * 35);
    const netAmount = Math.round((50 * estPrice) - transportCost - (50 * crop.charge));

    let answerText = '';
    if (this.activeVoiceLang === 'te') {
      answerText = `🌾 **${mandi.name}** లో **${crop.name}** కు ఈరోజు మోడల్ ధర **₹${estPrice.toLocaleString('en-IN')}/క్వింటాల్** గా ఉంది. రవాణా ఖర్చు సుమారు ₹${transportCost} మరియు మార్కెట్ రుసుములు తీసివేసిన తర్వాత, 50 క్వింటాళ్లకు మీ అంచనా నికర లాభం **₹${netAmount.toLocaleString('en-IN')}**.`;
    } else if (this.activeVoiceLang === 'hi') {
      answerText = `🌾 **${mandi.name}** में **${crop.name}** का आज का मॉडल भाव **₹${estPrice.toLocaleString('en-IN')}/क्विंटल** है। 50 क्विंटल फसल के लिए अनुमानित शुद्ध लाभ **₹${netAmount.toLocaleString('en-IN')}** रहेगा।`;
    } else {
      answerText = `🌾 In **${mandi.name}**, the modal price for **${crop.name}** is **₹${estPrice.toLocaleString('en-IN')}/Qtl**. After transport and statutory charges, your estimated net realization for 50 Quintals is **₹${netAmount.toLocaleString('en-IN')}**.`;
    }

    const responseBox = document.getElementById('homeVoiceResponseBox');
    const answerBody = document.getElementById('homeVoiceAnswerText');
    const metricBadges = document.getElementById('homeMetricBadges');
    const sellingPriceVal = document.getElementById('homeSellingPriceVal');
    const netAmountVal = document.getElementById('homeNetAmountVal');

    if (responseBox) responseBox.style.display = 'block';
    if (answerBody) answerBody.innerHTML = answerText;
    if (metricBadges) metricBadges.style.display = 'flex';
    if (sellingPriceVal) sellingPriceVal.textContent = `₹${estPrice.toLocaleString('en-IN')} / Qtl`;
    if (netAmountVal) netAmountVal.textContent = `₹${netAmount.toLocaleString('en-IN')}`;

    this.lastSpokenText = answerText.replace(/[*#]/g, '');
    this.speakResponse(this.lastSpokenText);
  }

  speakResponse(text) {
    if (!this.speechSynthesis) return;
    this.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const langCodes = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = langCodes[this.activeVoiceLang] || 'te-IN';
    utterance.rate = 0.95;
    this.speechSynthesis.speak(utterance);
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
    const cropId = document.getElementById('calcCrop')?.value || 'paddy';
    const qty = parseFloat(document.getElementById('calcQuantity')?.value) || 50;
    const origin = document.getElementById('calcOrigin')?.value || 'Tenali';

    const crop = CROPS.find(c => c.id === cropId) || CROPS[0];
    const resultsWrap = document.getElementById('calcResultsWrap');
    const cardsContainer = document.getElementById('calcCardsContainer');

    if (!cardsContainer) return;
    if (resultsWrap) resultsWrap.style.display = 'block';

    const calculated = MANDIS.map(m => {
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
            ${idx === 0 ? '<span class="badge" style="background:#d1fae5; color:#047857; font-weight:700; padding:2px 8px; border-radius:12px;">🌟 HIGHEST NET RETURN</span>' : ''}
          </div>
          <p style="font-size:0.8rem; color:#64748b; margin-top:2px;">📍 ${m.district}, ${m.state} • ${m.distance} km away</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(110px, 1fr)); gap:10px; margin-top:12px; background:#f8fafc; padding:10px; border-radius:8px;">
            <div><span style="font-size:0.75rem; color:#64748b;">Mandi Price:</span><br><strong>₹${m.price.toLocaleString('en-IN')}/Qtl</strong></div>
            <div><span style="font-size:0.75rem; color:#64748b;">Transport:</span><br><span style="color:#dc2626;">-₹${m.transport.toLocaleString('en-IN')}</span></div>
            <div><span style="font-size:0.75rem; color:#64748b;">Mandi Charges:</span><br><span style="color:#dc2626;">-₹${m.charges.toLocaleString('en-IN')}</span></div>
            <div><span style="font-size:0.75rem; color:#059669; font-weight:700;">Net Realization:</span><br><strong style="font-size:1.1rem; color:#047857;">₹${m.net.toLocaleString('en-IN')}</strong></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Slot Booking & Token Pass Generation
  setupSlotBooking() {
    const form = document.getElementById('slotBookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const farmerName = document.getElementById('bookFarmerName')?.value || 'Farmer';
      const mobile = document.getElementById('bookMobile')?.value || '9848022341';
      const crop = document.getElementById('bookCrop')?.value || 'paddy';
      const qty = document.getElementById('bookQuantity')?.value || '45';
      const market = document.getElementById('bookMarket')?.value || 'Guntur APMC Market Yard';
      const date = document.getElementById('bookDate')?.value || new Date().toISOString().split('T')[0];

      this.activeTokenNumber++;
      const tokenId = `AP-GNT-2026-${String(this.activeTokenNumber).padStart(4, '0')}`;

      this.showTokenSlipModal({
        tokenId,
        farmerName,
        mobile,
        crop,
        qty,
        market,
        date,
        shift: 'Shift 1 (06:30 AM - 08:00 AM)',
        gate: 'Gate 2 Weighbridge'
      });

      // Show confirmed bar
      const bar = document.getElementById('slotConfirmedNotificationBar');
      if (bar) bar.style.display = 'block';
    });
  }

  showTokenSlipModal(booking) {
    const modal = document.getElementById('tokenSlipModal');
    const content = document.getElementById('tokenSlipContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:48px; margin-bottom:8px;">✅</div>
        <h3 style="color:#064e3b; font-size:1.3rem;">స్లాట్ నిర్ధారించబడింది (Slot Confirmed!)</h3>
        <p style="font-size:0.85rem; color:#64748b;">Government Mandi Digital Entry Token Pass</p>
      </div>

      <div style="background:#f8fafc; border:2px dashed #059669; border-radius:12px; padding:16px; margin:16px 0; text-align:center;">
        <span style="font-size:0.75rem; color:#64748b; font-weight:700;">YOUR LIVE TOKEN NUMBER</span>
        <div style="font-size:2rem; font-weight:800; color:#047857; letter-spacing:1px; margin:4px 0;">${booking.tokenId}</div>
        <div style="font-size:0.85rem; color:#0f172a; font-weight:600;">${booking.market}</div>
      </div>

      <div style="font-size:0.88rem; line-height:1.8; color:#334155;">
        <div>👤 <strong>Farmer:</strong> ${booking.farmerName} (${booking.mobile})</div>
        <div>🌾 <strong>Crop & Quantity:</strong> ${booking.crop.toUpperCase()} • ${booking.qty} Quintals</div>
        <div>📅 <strong>Arrival Slot:</strong> ${booking.date} • ${booking.shift}</div>
        <div>🚪 <strong>Entry Gate:</strong> ${booking.gate}</div>
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

  // Live Queue Advance
  setupQueueManager() {
    const btnAdvance = document.getElementById('btnSimulateAdvance');
    if (btnAdvance) {
      btnAdvance.addEventListener('click', () => {
        this.activeTokenNumber++;
        const nextToken = `AP-GNT-2026-${String(this.activeTokenNumber).padStart(4, '0')}`;
        const display1 = document.getElementById('homeServingToken');
        const display2 = document.getElementById('nowServingTokenDisplay');
        if (display1) display1.textContent = nextToken;
        if (display2) display2.textContent = nextToken;
        this.showToast(`🔔 Token ${nextToken} called to Gate 2 Weighbridge!`);
      });
    }
  }

  // Modals & Biometrics
  setupModals() {
    // Biometric Modal
    document.querySelectorAll('.btn-biometric-trigger').forEach(b => {
      b.addEventListener('click', () => {
        const modal = document.getElementById('biometricModal');
        if (modal) modal.style.display = 'flex';
      });
    });
    const closeBio = document.getElementById('closeBiometricModal');
    if (closeBio) closeBio.addEventListener('click', () => document.getElementById('biometricModal').style.display = 'none');

    const btnSimBio = document.getElementById('btnSimulateBioSuccess');
    if (btnSimBio) {
      btnSimBio.addEventListener('click', () => {
        document.getElementById('biometricModal').style.display = 'none';
        this.showToast('✅ వేలిముద్ర ధృవీకరణ విజయవంతమైంది (Biometric Matched: Venkat Reddy)');
      });
    }

    // Password Login Modal
    document.querySelectorAll('.btn-password-login-trigger').forEach(b => {
      b.addEventListener('click', () => {
        const modal = document.getElementById('passwordLoginModal');
        if (modal) modal.style.display = 'flex';
      });
    });
    const closePass = document.getElementById('closePasswordLoginModal');
    if (closePass) closePass.addEventListener('click', () => document.getElementById('passwordLoginModal').style.display = 'none');

    const btnSubmitPass = document.getElementById('btnSubmitPasswordLogin');
    if (btnSubmitPass) {
      btnSubmitPass.addEventListener('click', () => {
        const pin = document.getElementById('loginSecurityPin')?.value;
        if (pin === '4109' || pin.length >= 4) {
          document.getElementById('passwordLoginModal').style.display = 'none';
          this.showToast('✅ లాగిన్ విజయవంతమైంది (Logged in successfully)');
        } else {
          alert('Invalid PIN! Default is 4109');
        }
      });
    }
  }

  // Language Switcher
  setupLanguageSwitcher() {
    const select = document.getElementById('langSelect');
    if (select) {
      select.addEventListener('change', (e) => {
        this.currentLang = e.target.value;
        this.activeVoiceLang = e.target.value;
        this.renderSampleQuestions();
        this.showToast(`🌐 Language changed to ${select.options[select.selectedIndex].text}`);
      });
    }
  }

  // Toast Notification
  showToast(msg) {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3500);
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new RythuSevaApp();
  app.init();
});
