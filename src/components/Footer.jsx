import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">V</span>
            <span className="brand-text">Veersaa<span className="dot">.in</span></span>
          </Link>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-cols">
          <div>
            <h5>{t('footer.company')}</h5>
            <a href="/#how">{t('nav.how')}</a>
            <a href="/#services">{t('nav.services')}</a>
            <a href="/#trust">{t('nav.why')}</a>
          </div>
          <div>
            <h5>{t('footer.plans')}</h5>
            <a href="/#plans">{t('plans.gate.name')} ₹349</a>
            <a href="/#plans">{t('plans.round.name')} ₹699</a>
            <a href="/#plans">{t('plans.discharge.name')} ₹649</a>
          </div>
          <div>
            <h5>{t('footer.support')}</h5>
            <a href="/#contact">{t('contact.formTitle')}</a>
            <a href="/#contact">1800-VEERSAA</a>
            <a href="/#">{t('footer.faqs')}</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{t('footer.rights')}</span>
        <span>{t('footer.legal')}</span>
      </div>
    </footer>
  );
}
