import { useLang } from '../i18n.jsx';

export default function Plans() {
  const { t, lang } = useLang();

  const plans = [
    {
      key: 'gate', price: 349,
      features: [
        { en: 'Registration assistance', hi: 'रजिस्ट्रेशन सहायता' },
        { en: 'Hospital entrance support', hi: 'अस्पताल प्रवेश सहायता' },
        { en: 'Queue & token help', hi: 'कतार व टोकन सहायता' },
      ],
    },
    {
      key: 'home', price: 499, badge: 'bestValue',
      features: [
        { en: 'Home pickup & transport', hi: 'घर से पिकअप व परिवहन' },
        { en: 'Registration & OPD finder', hi: 'रजिस्ट्रेशन व OPD खोजक' },
        { en: 'Queue management', hi: 'कतार प्रबंधन' },
      ],
    },
    {
      key: 'round', price: 699, badge: 'popular', featured: true,
      features: [
        { en: 'Home pickup & return', hi: 'घर से पिकअप व वापसी' },
        { en: 'Full visit assistance', hi: 'पूरी यात्रा सहायता' },
        { en: 'Queue, doctor & pharmacy', hi: 'कतार, डॉक्टर व फार्मेसी' },
      ],
    },
    {
      key: 'discharge', price: 649,
      features: [
        { en: 'Discharge paperwork', hi: 'डिस्चार्ज कागज़ी कार्रवाई' },
        { en: 'Medicine collection', hi: 'दवा संग्रह' },
        { en: 'Safe return home', hi: 'सुरक्षित घर वापसी' },
      ],
    },
  ];

  const addons = [
    { key: 'nurse', price: '+₹350', unit: { en: '/hr', hi: '/घंटा' }, icon: '🧑‍⚕️' },
    { key: 'wheelchair', price: '+₹150', unit: { en: '', hi: '' }, icon: '♿' },
    { key: 'night', price: '+20%', unit: { en: '', hi: '' }, icon: '🌙' },
    { key: 'extra', price: '₹150', unit: { en: '/hr', hi: '/घंटा' }, icon: '⏱️' },
  ];

  return (
    <section className="plans" id="plans">
      <div className="container">
        <span className="eyebrow">{t('plans.eyebrow')}</span>
        <h2 className="section-title">{t('plans.title')}</h2>
        <p className="section-sub">{t('plans.sub')}</p>

        <div className="plan-grid four">
          {plans.map((p) => (
            <div key={p.key} className={`plan ${p.featured ? 'featured' : ''}`}>
              {p.badge && (
                <span className={`badge ${p.badge === 'bestValue' ? 'badge-value' : ''}`}>
                  {t(`plans.${p.badge}`)}
                </span>
              )}
              <h3>{t(`plans.${p.key}.name`)}</h3>
              <p className="plan-for">{t(`plans.${p.key}.for`)}</p>
              <div className="price">
                <span className="cur">₹</span>
                <span className="amt">{p.price}</span>
              </div>
              <span className="plan-dur">⏱️ {t(`plans.${p.key}.dur`)}</span>
              <ul>
                {p.features.map((f, i) => (
                  <li key={i}>✓ {f[lang]}</li>
                ))}
              </ul>
              <a href="/#contact" className={`btn full ${p.featured ? 'btn-primary' : 'btn-outline'}`}>
                {t('plans.choose')}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="addons">
          <h3 className="addons-title">{t('plans.addons.title')}</h3>
          <div className="addons-grid">
            {addons.map((a) => (
              <div className="addon" key={a.key}>
                <span className="addon-icon">{a.icon}</span>
                <span className="addon-name">{t(`plans.addon.${a.key}`)}</span>
                <span className="addon-price">{a.price}<em>{a.unit[lang]}</em></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
