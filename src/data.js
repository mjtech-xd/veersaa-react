/* ===== Mock data for the dashboard ===== */

export const currentVisit = {
  active: true,
  hospital: { en: 'Apollo Hospital, Lucknow', hi: 'अपोलो अस्पताल, लखनऊ' },
  dept: { en: 'Cardiology OPD', hi: 'कार्डियोलॉजी OPD' },
  token: 'A-42',
  ahead: 6,
  eta: 25,
  companion: { name: 'Sunil Verma', phone: '+91 90000 12345', initials: 'SV' },
  steps: [
    { key: 'hero.step1', done: true },
    { key: 'hero.step2', done: true },
    { key: 'hero.step3', active: true },
    { key: 'hero.step4', done: false },
    { key: 'hero.step5', done: false },
  ],
};

export const stats = {
  plan: { en: 'Round Trip', hi: 'राउंड ट्रिप' },
  planPrice: 699,
  visits: 3,
  nextAppt: { en: '12 Jun, 10:30 AM', hi: '12 जून, सुबह 10:30' },
};

export const upcoming = [
  {
    id: 'u1',
    date: { en: '12 Jun 2026', hi: '12 जून 2026' },
    hospital: { en: 'Apollo Hospital', hi: 'अपोलो अस्पताल' },
    dept: { en: 'Orthopaedics', hi: 'ऑर्थोपेडिक्स' },
    doctor: 'Dr. Anita Rao',
    companion: 'Sunil Verma',
    status: 'upcoming',
  },
];

export const visitHistory = [
  {
    id: 'v0',
    date: { en: 'Today', hi: 'आज' },
    hospital: { en: 'Apollo Hospital', hi: 'अपोलो अस्पताल' },
    dept: { en: 'Cardiology', hi: 'कार्डियोलॉजी' },
    doctor: 'Dr. M. Khanna',
    companion: 'Sunil Verma',
    status: 'live',
  },
  {
    id: 'v1',
    date: { en: '18 May 2026', hi: '18 मई 2026' },
    hospital: { en: 'KGMU', hi: 'केजीएमयू' },
    dept: { en: 'General Medicine', hi: 'जनरल मेडिसिन' },
    doctor: 'Dr. S. Tiwari',
    companion: 'Sunil Verma',
    status: 'completed',
  },
  {
    id: 'v2',
    date: { en: '2 May 2026', hi: '2 मई 2026' },
    hospital: { en: 'Medanta', hi: 'मेदांता' },
    dept: { en: 'Ophthalmology', hi: 'नेत्र रोग' },
    doctor: 'Dr. P. Sharma',
    companion: 'Rekha Singh',
    status: 'completed',
  },
  {
    id: 'v3',
    date: { en: '14 Apr 2026', hi: '14 अप्रैल 2026' },
    hospital: { en: 'Apollo Hospital', hi: 'अपोलो अस्पताल' },
    dept: { en: 'Endocrinology', hi: 'एंडोक्रिनोलॉजी' },
    doctor: 'Dr. R. Gupta',
    companion: 'Sunil Verma',
    status: 'completed',
  },
];

export const reports = [
  { id: 'r1', icon: '📄', name: { en: 'ECG Report — Cardiology', hi: 'ECG रिपोर्ट — कार्डियोलॉजी' }, date: { en: '18 May 2026', hi: '18 मई 2026' }, type: 'PDF' },
  { id: 'r2', icon: '💊', name: { en: 'Prescription — Dr. Tiwari', hi: 'पर्चा — डॉ. तिवारी' }, date: { en: '18 May 2026', hi: '18 मई 2026' }, type: 'PDF' },
  { id: 'r3', icon: '🩸', name: { en: 'Blood Test (CBC + Sugar)', hi: 'रक्त जाँच (CBC + शुगर)' }, date: { en: '2 May 2026', hi: '2 मई 2026' }, type: 'PDF' },
  { id: 'r4', icon: '👁️', name: { en: 'Eye Examination Report', hi: 'नेत्र जाँच रिपोर्ट' }, date: { en: '2 May 2026', hi: '2 मई 2026' }, type: 'PDF' },
];

export const family = [
  { id: 'f1', initials: 'RK', name: { en: 'Ramesh Kumar', hi: 'रमेश कुमार' }, relation: { en: 'Father', hi: 'पिता' }, age: 68, conditions: { en: 'Hypertension, Diabetes', hi: 'उच्च रक्तचाप, मधुमेह' } },
  { id: 'f2', initials: 'SK', name: { en: 'Sushila Kumari', hi: 'सुशीला कुमारी' }, relation: { en: 'Mother', hi: 'माता' }, age: 63, conditions: { en: 'Arthritis', hi: 'गठिया' } },
];

/* OPD knowledge base for the assistant */
export const opdKB = [
  { k: ['chest', 'heart', 'breath', 'palpitation', 'bp', 'blood pressure', 'सीने', 'दिल', 'साँस', 'धड़कन'], opd: { en: 'Cardiology', hi: 'कार्डियोलॉजी' }, carry: { en: 'past ECG/reports, current medicines list', hi: 'पुरानी ECG/रिपोर्ट, वर्तमान दवाओं की सूची' } },
  { k: ['knee', 'joint', 'back', 'bone', 'fracture', 'shoulder', 'hip', 'sprain', 'घुटना', 'जोड़', 'कमर', 'हड्डी'], opd: { en: 'Orthopaedics', hi: 'ऑर्थोपेडिक्स' }, carry: { en: 'old X-rays/MRI if any', hi: 'पुराने X-ray/MRI यदि हों' } },
  { k: ['fever', 'cold', 'cough', 'weak', 'body pain', 'fatigue', 'viral', 'बुखार', 'सर्दी', 'खांसी', 'कमज़ोर'], opd: { en: 'General Medicine', hi: 'जनरल मेडिसिन' }, carry: { en: 'a list of symptoms & how many days', hi: 'लक्षणों की सूची व कितने दिनों से' } },
  { k: ['eye', 'vision', 'sight', 'spectacle', 'cataract', 'blurry', 'आँख', 'दृष्टि', 'मोतियाबिंद', 'चश्मा'], opd: { en: 'Ophthalmology', hi: 'नेत्र रोग' }, carry: { en: 'current spectacles & old eye reports', hi: 'वर्तमान चश्मा व पुरानी आँख रिपोर्ट' } },
  { k: ['sugar', 'diabet', 'thyroid', 'hormone', 'शुगर', 'मधुमेह', 'थायराइड'], opd: { en: 'Endocrinology / Diabetology', hi: 'एंडोक्रिनोलॉजी / डायबेटोलॉजी' }, carry: { en: 'fasting sugar / HbA1c reports', hi: 'फास्टिंग शुगर / HbA1c रिपोर्ट' } },
  { k: ['skin', 'rash', 'itch', 'acne', 'hair', 'त्वचा', 'खुजली', 'दाने', 'बाल'], opd: { en: 'Dermatology', hi: 'त्वचा रोग' }, carry: { en: 'photos of the affected area', hi: 'प्रभावित जगह की फ़ोटो' } },
  { k: ['tooth', 'teeth', 'dental', 'gum', 'दांत', 'दाँत', 'मसूड़'], opd: { en: 'Dentistry', hi: 'दंत चिकित्सा' }, carry: { en: 'previous dental records', hi: 'पिछले दंत रिकॉर्ड' } },
  { k: ['ear', 'nose', 'throat', 'sinus', 'tonsil', 'hearing', 'कान', 'नाक', 'गला'], opd: { en: 'ENT', hi: 'ENT (कान-नाक-गला)' }, carry: { en: 'any earlier ENT reports', hi: 'कोई पुरानी ENT रिपोर्ट' } },
  { k: ['child', 'baby', 'kid', 'infant', 'बच्चा', 'शिशु', 'बच्ची'], opd: { en: 'Paediatrics', hi: 'बाल रोग' }, carry: { en: 'vaccination card', hi: 'टीकाकरण कार्ड' } },
  { k: ['pregnan', 'gynae', 'period', 'women', 'गर्भ', 'महिला', 'स्त्री'], opd: { en: 'Gynaecology', hi: 'स्त्री रोग' }, carry: { en: 'previous scan/USG reports', hi: 'पिछली स्कैन/USG रिपोर्ट' } },
  { k: ['stomach', 'acid', 'liver', 'digest', 'gastric', 'vomit', 'loose', 'पेट', 'जिगर', 'उल्टी', 'गैस'], opd: { en: 'Gastroenterology', hi: 'गैस्ट्रोएंटरोलॉजी' }, carry: { en: 'a note of diet & symptoms', hi: 'आहार व लक्षणों का विवरण' } },
  { k: ['urine', 'kidney', 'stone', 'prostate', 'पेशाब', 'किडनी', 'पथरी'], opd: { en: 'Urology / Nephrology', hi: 'यूरोलॉजी / नेफ्रोलॉजी' }, carry: { en: 'recent urine/USG reports', hi: 'हाल की पेशाब/USG रिपोर्ट' } },
];
