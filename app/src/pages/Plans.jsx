import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, TiltCard, Magnet } from '../components/anim.jsx'
import { Check, Wa } from '../components/icons.jsx'

const PLANS = [
  { tier: 'Launch', name: 'Starter', featured: false, desc: 'Get your AI assistant live on one WhatsApp number and start capturing every enquiry.', priceNote: 'Request pricing for your catalogue', cta: 'Get a quote', ghost: true,
    features: ['1 WhatsApp Business number', 'Up to 500 catalogue products', 'AI product Q&A + spec sheets', 'Basic lead capture (Cold/Warm/Hot)', 'Admin dashboard', 'Hot-lead email alerts', 'High-speed Groq AI engine'] },
  { tier: 'Scale', name: 'Growth', featured: true, desc: 'Automate cross-sell, lead scoring and weekly follow-ups for a growing sales team.', priceNote: 'Our best-value plan', cta: 'Get a quote', ghost: false,
    features: ['Everything in Starter', 'Up to 3,000 products', 'Cross-sell / spare-parts engine', 'Weekly auto follow-up campaigns', 'Analytics + date-range Excel export', 'Groq + Gemini zero-downtime AI', 'Priority support (24h SLA)'] },
  { tier: 'Autopilot', name: 'Enterprise', featured: false, desc: 'Unlimited scale, custom AI tuning, integrations and dedicated support.', priceNote: 'Built around your operation', cta: 'Talk to sales', ghost: true,
    features: ['Everything in Growth', 'Unlimited products & buyers', 'Multiple numbers / departments', 'Custom AI tuning per product line', 'ERP / Tally / Zoho integrations', 'Dedicated server + daily backups', 'Dedicated manager, 4h SLA'] },
]

const ROWS = [
  ['AI WhatsApp assistant (24×7)', '✓', '✓', '✓'],
  ['PDF catalogue AI-ingestion', '500', '3,000', 'Unlimited'],
  ['AI conversations / month', '1,000', '5,000', '20,000'],
  ['Spec-sheet PDF delivery in chat', '✓', '✓', '✓'],
  ['Lead scoring (Cold / Warm / Hot)', 'Basic', 'Advanced', 'Advanced+'],
  ['Hot-lead instant alert', 'Email', 'WhatsApp + Webhook', 'Email + WhatsApp + Webhook'],
  ['Cross-sell / spare-parts engine', '—', '✓', '✓'],
  ['Weekly automated follow-ups', '—', '✓', '✓'],
  ['Analytics + Excel export', 'Basic', 'Full', 'Custom reports'],
  ['Zero-downtime AI (Groq + Gemini)', '—', '✓', '✓'],
  ['Admin seats', '1', '3', 'Unlimited'],
  ['ERP / accounting integrations', '—', '—', '✓'],
  ['Support SLA', 'Best effort', '24 hours', '4 hours'],
]
const cell = (v) => v === '✓' ? <td className="yes">✓</td> : v === '—' ? <td className="no">—</td> : <td>{v}</td>

const STEPS = [
  ['Kick-off', 'We onboard your project, set up the WhatsApp API and server, and begin configuration.'],
  ['Build & ingest', 'Your catalogue is ingested and the assistant is tuned to your product lines and voice.'],
  ['Go-live & UAT', 'The bot goes live on your number and the dashboard is handed over after sign-off.'],
  ['Run & improve', 'We host, monitor, update and support — with quarterly tune-ups on Enterprise.'],
]

export default function Plans() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>Plans</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">Plans</span></Reveal>
          <h1><SplitText text="From launch to" /> <GradientText>full autopilot</GradientText></h1>
          <Reveal delay={0.15}><p className="lead">Three plans, each built around how far you want to automate. Pricing is tailored to your catalogue size, conversation volume and integrations — so you only pay for what fits.</p></Reveal>
          <Reveal delay={0.22}><p style={{ marginTop: '.6rem', color: 'var(--muted)', fontSize: '.95rem' }}>All plans are fully managed: hosting, monitoring, updates &amp; support included.</p></Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="plans">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <TiltCard className={`plan${p.featured ? ' featured' : ''}`} max={5}>
                  {p.featured && <span className="plan-badge">Most popular</span>}
                  <div><span className="plan-tier">{p.tier}</span><div className="plan-name">{p.name}</div></div>
                  <p className="plan-desc">{p.desc}</p>
                  <div className="plan-price">Custom quote<small>{p.priceNote}</small></div>
                  <ul className="plan-features">
                    {p.features.map((f, k) => <li key={k}><Check style={{ width: 18, height: 18 }} />{f}</li>)}
                  </ul>
                  <Link className={`btn ${p.ghost ? 'btn-ghost' : 'btn-primary'} btn-block`} to="/contact">{p.cta}</Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Compare</span></Reveal>
            <h2><SplitText text="Feature comparison" /></h2>
            <Reveal delay={0.1}><p>Everything each plan includes. Need something in between? We'll tailor it.</p></Reveal>
          </div>
          <Reveal className="compare-wrap">
            <table className="compare">
              <thead><tr><th>Capability</th><th>Starter</th><th className="pop">Growth</th><th>Enterprise</th></tr></thead>
              <tbody>{ROWS.map((r, i) => <tr key={i}><td>{r[0]}</td>{cell(r[1])}{cell(r[2])}{cell(r[3])}</tr>)}</tbody>
            </table>
          </Reveal>
          <Reveal><p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--muted)', fontSize: '.9rem' }}>Cloud hosting, servers &amp; storage are fully managed by Elevate Automation and included. A verified Meta WhatsApp Business number is provided by you.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Onboarding</span></Reveal>
            <h2><SplitText text="Transparent, milestone-based go-live" /></h2>
            <Reveal delay={0.1}><p>A simple path from kick-off to live — usually in 2–3 weeks.</p></Reveal>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={i} className="step" delay={i * 0.08}><span className="step-n" /><h3>{s[0]}</h3><p>{s[1]}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Get a quote tailored to <GradientText>your catalogue.</GradientText></h2>
              <p>Tell us your catalogue size and typical enquiry volume, and we'll recommend the right plan with clear pricing.</p>
              <div className="cta-actions">
                <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Request a Quote</Link></Magnet>
                <a className="btn btn-wa btn-lg" href="https://wa.me/918200191137" target="_blank" rel="noopener"><Wa style={{ width: 20, height: 20 }} />Ask on WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
