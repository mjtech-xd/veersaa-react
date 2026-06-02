import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { useAuth } from '../auth.jsx';
import { LangToggle } from '../components/Navbar.jsx';
import { ThemeToggle } from '../theme.jsx';
import {
  currentVisit, stats, upcoming, visitHistory, reports, family,
} from '../data.js';

const TABS = ['overview', 'visits', 'reports', 'family'];

export default function Dashboard() {
  const { t, lang } = useLang();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const StatusPill = ({ status }) => (
    <span className={`pill-status ${status}`}>{t(`dash.status.${status}`)}</span>
  );

  return (
    <div className="dash">
      {/* Sidebar */}
      <aside className="dash-side">
        <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="brand-mark">V</span>
          <span className="brand-text">Veersaa<span className="dot">.in</span></span>
        </div>
        <nav className="dash-nav">
          {TABS.map((tb) => (
            <button
              key={tb}
              className={tab === tb ? 'active' : ''}
              onClick={() => setTab(tb)}
            >
              {t(`dash.tab.${tb}`)}
            </button>
          ))}
        </nav>
        <button className="dash-logout" onClick={handleLogout}>↩ {t('dash.logout')}</button>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <header className="dash-header">
          <div>
            <h1>{t('dash.hello')}, {user?.name?.split(' ')[0]} 🙏</h1>
            <p>{t('dash.welcome')}</p>
          </div>
          <div className="dash-header-right">
            <ThemeToggle />
            <LangToggle />
            <div className="avatar lg">{(user?.name?.[0] || 'U').toUpperCase()}</div>
          </div>
        </header>

        {/* ===== Overview ===== */}
        {tab === 'overview' && (
          <div className="dash-grid">
            {/* Live visit */}
            <section className="card span-2 live-card">
              <div className="card-head">
                <h3>🔴 {t('dash.current.title')}</h3>
                <StatusPill status="live" />
              </div>
              {currentVisit.active ? (
                <>
                  <div className="live-top">
                    <div>
                      <h4>{currentVisit.hospital[lang]}</h4>
                      <p className="dim">{currentVisit.dept[lang]}</p>
                    </div>
                    <div className="token-box">
                      <span>{t('dash.token')}</span>
                      <strong>{currentVisit.token}</strong>
                    </div>
                  </div>
                  <div className="live-metrics">
                    <div><strong>{currentVisit.ahead}</strong><span>{t('dash.ahead')}</span></div>
                    <div><strong>~{currentVisit.eta}</strong><span>{t('dash.eta')} ({t('dash.min')})</span></div>
                  </div>
                  <div className="tracker">
                    <p className="tracker-title">{t('dash.tracker')}</p>
                    {currentVisit.steps.map((s, i) => (
                      <div key={i} className={`step ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}`}>
                        {t(s.key)}
                      </div>
                    ))}
                  </div>
                  <div className="companion-row">
                    <div className="avatar sm">{currentVisit.companion.initials}</div>
                    <div>
                      <span className="dim">{t('dash.companion')}</span>
                      <strong>{currentVisit.companion.name}</strong>
                    </div>
                    <button className="btn btn-primary sm-btn">{t('dash.callCompanion')}</button>
                  </div>
                </>
              ) : (
                <div className="empty">
                  <p>{t('dash.current.none')}</p>
                  <button className="btn btn-primary">{t('dash.current.book')}</button>
                </div>
              )}
            </section>

            {/* Stat cards */}
            <section className="card stat-card">
              <span className="stat-label">{t('dash.stat.plan')}</span>
              <strong className="stat-big">{stats.plan[lang]}</strong>
              <span className="stat-sub">₹{stats.planPrice} {t('dash.perVisit')}</span>
            </section>
            <section className="card stat-card">
              <span className="stat-label">{t('dash.stat.visitsLeft')}</span>
              <strong className="stat-big">{stats.visits}</strong>
              <span className="stat-sub">{stats.plan[lang]}</span>
            </section>

            {/* Upcoming */}
            <section className="card span-2">
              <div className="card-head"><h3>{t('dash.upcoming')}</h3></div>
              {upcoming.length ? (
                upcoming.map((u) => (
                  <div className="appt-row" key={u.id}>
                    <div className="appt-date">{u.date[lang]}</div>
                    <div>
                      <strong>{u.dept[lang]}</strong>
                      <p className="dim">{u.hospital[lang]} · {u.doctor}</p>
                    </div>
                    <StatusPill status={u.status} />
                  </div>
                ))
              ) : (
                <p className="dim">{t('dash.noUpcoming')}</p>
              )}
            </section>
          </div>
        )}

        {/* ===== Visit history ===== */}
        {tab === 'visits' && (
          <section className="card">
            <div className="card-head"><h3>{t('dash.visits.title')}</h3></div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>{t('dash.col.date')}</th>
                    <th>{t('dash.col.hospital')}</th>
                    <th>{t('dash.col.dept')}</th>
                    <th>{t('dash.col.doctor')}</th>
                    <th>{t('dash.col.companion')}</th>
                    <th>{t('dash.col.status')}</th>
                  </tr>
                </thead>
                <tbody>
                  {visitHistory.map((v) => (
                    <tr key={v.id}>
                      <td>{v.date[lang]}</td>
                      <td>{v.hospital[lang]}</td>
                      <td>{v.dept[lang]}</td>
                      <td>{v.doctor}</td>
                      <td>{v.companion}</td>
                      <td><StatusPill status={v.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ===== Reports ===== */}
        {tab === 'reports' && (
          <section className="card">
            <div className="card-head"><h3>{t('dash.reports.title')}</h3></div>
            <div className="report-grid">
              {reports.map((r) => (
                <div className="report-card" key={r.id}>
                  <div className="report-icon">{r.icon}</div>
                  <div className="report-body">
                    <strong>{r.name[lang]}</strong>
                    <span className="dim">{r.date[lang]} · {r.type}</span>
                  </div>
                  <div className="report-actions">
                    <button className="btn btn-outline xs">{t('dash.reports.view')}</button>
                    <button className="btn btn-ghost xs">↓ {t('dash.reports.download')}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== Family ===== */}
        {tab === 'family' && (
          <section className="card">
            <div className="card-head">
              <h3>{t('dash.family.title')}</h3>
              <button className="btn btn-outline xs">{t('dash.family.add')}</button>
            </div>
            <div className="family-grid">
              {family.map((m) => (
                <div className="family-card" key={m.id}>
                  <div className="avatar lg">{m.initials}</div>
                  <h4>{m.name[lang]}</h4>
                  <p className="family-meta">
                    {m.relation[lang]} · {m.age} {t('dash.years')}
                  </p>
                  <div className="family-cond">
                    <span className="dim">{t('dash.family.conditions')}</span>
                    <p>{m.conditions[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
