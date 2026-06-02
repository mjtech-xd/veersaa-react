import { useState } from 'react';
import { useLang } from '../i18n.jsx';

export default function Contact() {
  const { t } = useLang();
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = (e.target.name.value || '').split(' ')[0] || 'there';
    setNote(t('contact.thanks', { name }));
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow light">{t('contact.eyebrow')}</span>
          <h2 className="section-title white">{t('contact.title')}</h2>
          <p>{t('contact.desc')}</p>
          <div className="contact-points">
            <p>{t('contact.phone')}</p>
            <p>{t('contact.email')}</p>
            <p>{t('contact.hours')}</p>
            <p>{t('contact.cities')}</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{t('contact.formTitle')}</h3>
          <div className="field">
            <label>{t('contact.name')}</label>
            <input type="text" name="name" required placeholder={t('contact.namePh')} />
          </div>
          <div className="field">
            <label>{t('contact.mobile')}</label>
            <input type="tel" name="phone" required pattern="[0-9+ ]{8,15}" placeholder="+91 ..." />
          </div>
          <div className="field">
            <label>{t('contact.cityHosp')}</label>
            <input type="text" name="city" placeholder={t('contact.cityPh')} />
          </div>
          <div className="field">
            <label>{t('contact.choosePlan')}</label>
            <select name="plan" defaultValue="round">
              <option value="gate">{t('plans.gate.name')} — ₹349</option>
              <option value="home">{t('plans.home.name')} — ₹499</option>
              <option value="round">{t('plans.round.name')} — ₹699</option>
              <option value="discharge">{t('plans.discharge.name')} — ₹649</option>
              <option value="none">{t('contact.notSure')}</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary full">{t('contact.submit')}</button>
          {note && <p className="form-note">{note}</p>}
        </form>
      </div>
    </section>
  );
}
