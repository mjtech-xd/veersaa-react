import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import useScrollReveal from '../useScrollReveal.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Assistant from '../components/Assistant.jsx';
import Plans from '../components/Plans.jsx';
import Contact from '../components/Contact.jsx';
import { currentVisit } from '../data.js';

export default function Landing() {
  const { t, lang } = useLang();
  const { hash } = useLocation();

  useScrollReveal([lang]);

  // smooth-scroll to hash anchors (e.g. /#plans)
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [hash]);

  return (
    <>
      <div className="topbar"><span>{t('topbar')}</span></div>
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill">{t('hero.pill')}</span>
            <h1>{t('hero.title')}<br /><span className="accent">{t('hero.titleAccent')}</span></h1>
            <p className="lead">{t('hero.lead')}</p>
            <div className="hero-actions">
              <a href="#plans" className="btn btn-primary">{t('hero.cta1')}</a>
              <a href="#how" className="btn btn-outline">{t('hero.cta2')}</a>
            </div>
            <div className="hero-stats">
              <div><strong>100%</strong><span>{t('hero.stat1')}</span></div>
              <div><strong>24/7</strong><span>{t('hero.stat2')}</span></div>
              <div><strong>8</strong><span>{t('hero.stat3')}</span></div>
            </div>
          </div>

          <div className="hero-art">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-top">
                  <div>
                    <p className="muted">{t('hero.goodMorning')}</p>
                    <h3>{lang === 'hi' ? 'रमेश जी' : 'Ramesh ji'}</h3>
                  </div>
                  <div className="avatar">R</div>
                </div>
                <div className="app-card highlight">
                  <p className="muted">{t('hero.yourVisit')}</p>
                  <h4>{t('hero.visitPlace')}</h4>
                  <div className="token">
                    <span>{t('hero.yourToken')}</span>
                    <strong>{currentVisit.token}</strong>
                  </div>
                  <div className="queue-row">
                    <div className="queue-bar"><span style={{ width: '62%' }}></span></div>
                    <span className="queue-text">{t('hero.queueText')}</span>
                  </div>
                </div>
                <div className="app-card">
                  <div className="step done">{t('hero.step1')}</div>
                  <div className="step done">{t('hero.step2')}</div>
                  <div className="step active">{t('hero.step3')}</div>
                  <div className="step">{t('hero.step4')}</div>
                  <div className="step">{t('hero.step5')}</div>
                </div>
                <button className="app-btn">{t('hero.callSaathi')}</button>
              </div>
            </div>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">{t('problem.title')}</h2>
          <div className="problem-grid">
            {[
              { e: '🧭', t: 'problem.c1.t', d: 'problem.c1.d' },
              { e: '⏳', t: 'problem.c2.t', d: 'problem.c2.d' },
              { e: '📋', t: 'problem.c3.t', d: 'problem.c3.d' },
              { e: '👨‍👩‍👧', t: 'problem.c4.t', d: 'problem.c4.d' },
            ].map((c, i) => (
              <div className="prob-card" key={i}>
                <span className="prob-emoji">{c.e}</span>
                <h4>{t(c.t)}</h4>
                <p>{t(c.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section className="how" id="how">
        <div className="container">
          <span className="eyebrow">{t('how.eyebrow')}</span>
          <h2 className="section-title">{t('how.title')}</h2>
          <div className="steps">
            <div className="how-step"><div className="how-num">1</div><h4>{t('how.s1.t')}</h4><p>{t('how.s1.d')}</p></div>
            <div className="how-arrow">→</div>
            <div className="how-step"><div className="how-num">2</div><h4>{t('how.s2.t')}</h4><p>{t('how.s2.d')}</p></div>
            <div className="how-arrow">→</div>
            <div className="how-step"><div className="how-num">3</div><h4>{t('how.s3.t')}</h4><p>{t('how.s3.d')}</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="service-grid">
            {[
              { e: '🏥', n: 1 }, { e: '🎫', n: 2 }, { e: '🚗', n: 3 }, { e: '🧑‍⚕️', n: 4 },
              { e: '💊', n: 5 }, { e: '📲', n: 6 }, { e: '🛟', n: 7 }, { e: '🛡️', n: 8 },
            ].map((s) => (
              <article className="svc" key={s.n}>
                <span>{s.e}</span>
                <h4>{t(`svc.${s.n}.t`)}</h4>
                <p>{t(`svc.${s.n}.d`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Assistant />
      <Plans />

      {/* Trust */}
      <section className="trust" id="trust">
        <div className="container">
          <span className="eyebrow">{t('trust.eyebrow')}</span>
          <h2 className="section-title">{t('trust.title')}</h2>
          <div className="trust-grid">
            {[
              { e: '🛡️', n: 1 }, { e: '🔒', n: 2 }, { e: '📍', n: 3 }, { e: '↩️', n: 4 },
            ].map((c) => (
              <div className="trust-card" key={c.n}>
                <span>{c.e}</span>
                <h4>{t(`trust.${c.n}.t`)}</h4>
                <p>{t(`trust.${c.n}.d`)}</p>
              </div>
            ))}
          </div>
          <div className="testi">
            <blockquote>
              {t('trust.quote')}
              <cite>{t('trust.cite')}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      <a href="#contact" className="fab">{t('fab')}</a>
    </>
  );
}
