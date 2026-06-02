import { useState, useRef, useEffect } from 'react';
import { useLang } from '../i18n.jsx';
import { opdKB } from '../data.js';

export default function Assistant() {
  const { t, lang } = useLang();
  const [messages, setMessages] = useState([{ who: 'bot', text: t('assistant.greeting') }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    // refresh greeting when language switches and chat is fresh
    setMessages((m) => (m.length === 1 ? [{ who: 'bot', text: t('assistant.greeting') }] : m));
  }, [lang, t]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const respond = (query) => {
    const q = query.toLowerCase();
    const hit = opdKB.find((item) => item.k.some((w) => q.includes(w)));
    if (hit) {
      return `${t('assistant.basedOn')} <strong>${hit.opd[lang]}</strong>. 🏥<br>${t('assistant.carry')}: ${hit.carry[lang]}.<br><span class="dim">${t('assistant.bookHint')}</span>`;
    }
    return `${t('assistant.noMatch')}<br><span class="dim">${t('assistant.tip')}</span>`;
  };

  const ask = (query) => {
    const text = query.trim();
    if (!text) return;
    setMessages((m) => [...m, { who: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { who: 'bot', text: respond(text), html: true }]);
    }, 600);
  };

  const chips = [
    { q: lang === 'hi' ? 'सीने में दर्द' : 'chest pain', label: lang === 'hi' ? 'सीने में दर्द' : 'Chest pain' },
    { q: lang === 'hi' ? 'घुटना' : 'knee pain', label: lang === 'hi' ? 'घुटना दर्द' : 'Knee pain' },
    { q: lang === 'hi' ? 'बुखार' : 'fever', label: lang === 'hi' ? 'बुखार' : 'Fever' },
    { q: lang === 'hi' ? 'आँख' : 'eye problem', label: lang === 'hi' ? 'आँख' : 'Eye problem' },
    { q: lang === 'hi' ? 'शुगर' : 'sugar diabetes', label: lang === 'hi' ? 'शुगर' : 'Diabetes' },
  ];

  return (
    <section className="assistant" id="assistant">
      <div className="container assistant-grid">
        <div className="assistant-copy">
          <span className="eyebrow">{t('assistant.eyebrow')}</span>
          <h2 className="section-title left">{t('assistant.title')}</h2>
          <p>{t('assistant.desc')}</p>
          <ul className="tick-list">
            {opdKB.slice(0, 4).map((item, i) => (
              <li key={i}>
                {item.k[0]} → <strong>{item.opd[lang]}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="assistant-box">
          <div className="chat" ref={chatRef}>
            {messages.map((m, i) =>
              m.html ? (
                <div key={i} className={`msg ${m.who}`} dangerouslySetInnerHTML={{ __html: m.text }} />
              ) : (
                <div key={i} className={`msg ${m.who}`}>{m.text}</div>
              )
            )}
            {typing && <div className="msg bot">…</div>}
          </div>
          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('assistant.placeholder')}
            />
            <button type="submit" className="btn btn-primary">{t('assistant.ask')}</button>
          </form>
          <div className="chips">
            {chips.map((c, i) => (
              <button key={i} className="chip" onClick={() => ask(c.q)}>{c.label}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
