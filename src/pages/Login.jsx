import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { useAuth } from '../auth.jsx';
import { LangToggle } from '../components/Navbar.jsx';
import { ThemeToggle } from '../theme.jsx';

export default function Login() {
  const { t } = useLang();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) return;
    login({ name: name.trim(), phone: phone.trim(), since: '2026' });
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-art">
        <Link to="/" className="brand light">
          <span className="brand-mark">V</span>
          <span className="brand-text">Veersaa<span className="dot">.in</span></span>
        </Link>
        <h2>{t('login.title')}</h2>
        <p>{t('login.sub')}</p>
        <ul className="auth-points">
          <li>🎫 {t('dash.tracker')}</li>
          <li>📄 {t('dash.reports.title')}</li>
          <li>👨‍👩‍👧 {t('dash.family.title')}</li>
        </ul>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-top">
          <ThemeToggle />
          <LangToggle />
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <h3>{t('nav.login')}</h3>
          <div className="field">
            <label>{t('login.name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('login.namePh')}
              required
            />
          </div>
          <div className="field">
            <label>{t('login.mobile')}</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 ..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary full">{t('login.button')}</button>
          <p className="otp-note">{t('login.otpNote')}</p>
          <Link to="/" className="auth-back">{t('login.back')}</Link>
        </form>
      </div>
    </div>
  );
}
