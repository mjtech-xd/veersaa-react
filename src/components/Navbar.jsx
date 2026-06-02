import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { useAuth } from '../auth.jsx';
import { ThemeToggle } from '../theme.jsx';

export default function Navbar() {
  const { t } = useLang();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const close = () => setOpen(false);

  const handleLogout = () => {
    logout();
    close();
    navigate('/');
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">V</span>
          <span className="brand-text">Veersaa<span className="dot">.in</span></span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="/#how" onClick={close}>{t('nav.how')}</a>
          <a href="/#services" onClick={close}>{t('nav.services')}</a>
          <a href="/#assistant" onClick={close}>{t('nav.assistant')}</a>
          <a href="/#plans" onClick={close}>{t('nav.plans')}</a>
          <a href="/#trust" onClick={close}>{t('nav.why')}</a>

          <div className="toggle-group">
            <ThemeToggle />
            <LangToggle />
          </div>

          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-ghost nav-cta" onClick={close}>
                {t('nav.dashboard')}
              </Link>
              <button className="btn btn-outline nav-cta" onClick={handleLogout}>
                {t('nav.logout')}
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary nav-cta" onClick={close}>
              {t('nav.login')}
            </Link>
          )}
        </nav>

        <div className="nav-right-mobile">
          <ThemeToggle />
          <LangToggle />
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function LangToggle() {
  const { lang, setLanguage } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={lang === 'hi' ? 'active' : ''}
        onClick={() => setLanguage('hi')}
      >
        हिं
      </button>
    </div>
  );
}
