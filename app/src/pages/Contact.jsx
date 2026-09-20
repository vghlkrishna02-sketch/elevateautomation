import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText } from '../components/anim.jsx'
import { Check, Wa } from '../components/icons.jsx'

const WA = '918200191137'
const MAIL = 'team@elevateautomation.in'

export default function Contact() {
  const [ok, setOk] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    const d = new FormData(e.target)
    const g = (k) => (d.get(k) || '').toString().trim()
    const name = g('name')
    const lines = [
      'New enquiry from the Elevate Automation website', '',
      'Name: ' + name,
      g('company') && 'Company: ' + g('company'),
      'Email: ' + g('email'),
      g('phone') && 'Phone: ' + g('phone'),
      g('interest') && 'Interested in: ' + g('interest'),
      g('message') && 'Message:', g('message'),
    ].filter(Boolean)
    const text = lines.join('\n')
    setOk('Thanks, ' + (name || 'there') + '! Opening WhatsApp so you can send this to our team…')
    setTimeout(() => {
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener')
    }, 600)
    e.target.reset()
  }
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: '1rem' }}>
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>Contact</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">Let's talk</span></Reveal>
          <h1><SplitText text="Book a demo. See it on" /> <GradientText>your catalogue.</GradientText></h1>
          <Reveal delay={0.15}><p className="lead">Tell us a little about your business and we'll show you exactly how the AI assistant would answer, qualify and follow up for you — usually live within 3 weeks.</p></Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container contact-grid">
          <Reveal>
            <h2 style={{ fontSize: '1.7rem' }}>Reach us directly</h2>
            <p className="muted">Fastest reply is on WhatsApp — fittingly. We usually respond within business hours, same day.</p>
            <div className="contact-methods">
              <a className="contact-method" href={`https://wa.me/${WA}`} target="_blank" rel="noopener">
                <span className="cm-icon wa"><Wa style={{ width: 22, height: 22 }} /></span>
                <span><small>WhatsApp (fastest)</small><b>+91 82001 91137</b></span>
              </a>
              <a className="contact-method" href={`mailto:${MAIL}`}>
                <span className="cm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></span>
                <span><small>Email</small><b>{MAIL}</b></span>
              </a>
              <a className="contact-method" href={`tel:+${WA}`}>
                <span className="cm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></span>
                <span><small>Call</small><b>+91 82001 91137</b></span>
              </a>
              <div className="contact-method" style={{ cursor: 'default' }}>
                <span className="cm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
                <span><small>Hours &amp; location</small><b>Mon–Sat · Business hours · India</b></span>
              </div>
            </div>
            <div className="glass-panel" style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '.8rem' }}>What to expect</h3>
              <ul className="check-list" style={{ marginTop: 0 }}>
                <li><Check style={{ width: 22, height: 22 }} /><span>A quick call to understand your catalogue &amp; goals.</span></li>
                <li><Check style={{ width: 22, height: 22 }} /><span>A tailored demo of the assistant on your products.</span></li>
                <li><Check style={{ width: 22, height: 22 }} /><span>A clear quote and go-live plan — no obligation.</span></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={onSubmit} noValidate>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '.2rem' }}>Request your demo</h2>
              <p className="form-note">Submitting opens WhatsApp with your details pre-filled, so you can send it to our team in one tap.</p>
              {ok && <div className="form-success show" role="status">{ok}</div>}
              <div className="row-2">
                <div className="field-group"><label htmlFor="name">Name <span className="req">*</span></label><input type="text" id="name" name="name" placeholder="Your full name" required autoComplete="name" /></div>
                <div className="field-group"><label htmlFor="company">Company</label><input type="text" id="company" name="company" placeholder="Company name" autoComplete="organization" /></div>
              </div>
              <div className="row-2">
                <div className="field-group"><label htmlFor="email">Email <span className="req">*</span></label><input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" /></div>
                <div className="field-group"><label htmlFor="phone">Phone / WhatsApp</label><input type="tel" id="phone" name="phone" placeholder="+91 …" autoComplete="tel" /></div>
              </div>
              <div className="field-group">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" name="interest" defaultValue="A free demo">
                  {['A free demo', 'Starter plan', 'Growth plan', 'Enterprise plan', 'A custom quote', 'Just exploring'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="field-group">
                <label htmlFor="message">Tell us about your catalogue <span className="req">*</span></label>
                <textarea id="message" name="message" placeholder="What do you sell, roughly how many products, and how many WhatsApp enquiries do you get?" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg"><Wa style={{ width: 20, height: 20 }} />Send via WhatsApp</button>
              <p className="form-note">Prefer email? <a href={`mailto:${MAIL}`} style={{ color: 'var(--cyan)' }}>{MAIL}</a> — we reply the same day.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
