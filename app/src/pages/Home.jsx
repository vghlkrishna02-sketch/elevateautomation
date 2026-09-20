import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, ShinyText, TiltCard, Magnet, CountUp } from '../components/anim.jsx'

const Ico = {
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>,
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>,
  score: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 5-6"/></svg>,
  cross: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3l4 4-4 4"/><path d="M21 7H8a5 5 0 0 0-5 5v0"/><path d="M7 21l-4-4 4-4"/><path d="M3 17h13a5 5 0 0 0 5-5v0"/></svg>,
  dash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
}

const FEATURES = [
  { i: Ico.bolt, t: '24×7 AI replies', d: 'Answers every enquiry in seconds — day or night — in your brand voice.' },
  { i: Ico.doc, t: 'Instant spec sheets', d: 'Sends the right product info and PDFs straight from your catalogue.' },
  { i: Ico.score, t: 'Lead scoring', d: 'Qualifies each buyer Hot / Warm / Cold from goal, budget and intent.' },
  { i: Ico.cross, t: 'Cross-sell engine', d: 'Suggests related products and spare parts to grow every order.' },
  { i: Ico.dash, t: 'Admin CRM dashboard', d: 'Every lead, chat and follow-up in one clean, live dashboard.' },
  { i: Ico.clock, t: 'Weekly auto follow-ups', d: 'Re-engages leads on Day 2 → Week 1 → Day 21, automatically.' },
]

const STEPS = [
  { n: '01', t: 'Connect WhatsApp', d: 'We connect the AI to your verified Meta WhatsApp Business number and configure your brand voice.' },
  { n: '02', t: 'Ingest catalogue', d: 'Your product PDFs & photos are ingested through our AI ETL pipeline so answers are always accurate.' },
  { n: '03', t: 'AI answers & qualifies', d: 'The assistant replies 24×7, sends spec sheets, cross-sells and scores each lead Cold → Warm → Hot.' },
  { n: '04', t: 'You close hot leads', d: 'Your team gets instant hot-lead alerts and a full CRM — so they focus only on buyers ready to buy.' },
]

function Phone() {
  return (
    <div className="phone-wrap">
      <TiltCard max={7}>
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="wa-top">
              <span className="wa-avatar"><svg viewBox="0 0 24 24" fill="#fff" width="22" height="22"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Z"/></svg></span>
              <div className="wa-peer"><b>PrecisionParts Co. <span className="badge-ai">AI</span></b><small>online · replies instantly</small></div>
            </div>
            <div className="wa-body">
              <div className="wa-day">Today</div>
              <div className="bubble in">Hi, do you have SS 304 flanges? Need ~500 pcs, urgent.<time>11:58 PM</time></div>
              <div className="bubble out">Ji bilkul! SS 304 flanges in stock ✅ Here's the spec sheet 👇<time>11:58 PM</time></div>
              <div className="bubble out">
                <span className="doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg><b>SS304-Flange-Specs.pdf</b><small>240 KB</small></span>
                Bulk price + delivery inside 🙂<time>11:59 PM</time>
              </div>
              <div className="bubble in">Great — please confirm the order.<span className="chip-lead">🔥 Hot lead</span><time>11:59 PM</time></div>
            </div>
            <div className="wa-input"><span className="field">Message</span><span className="send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></span></div>
          </div>
        </div>
      </TiltCard>
      <div className="phone-float f1"><span className="dot" style={{ background: 'rgba(9,146,104,.16)', color: 'var(--emerald)' }}>{Ico.check}</span><div><b>Lead scored</b><small>Hot · alert sent</small></div></div>
      <div className="phone-float f2"><span className="dot" style={{ background: 'rgba(46,134,240,.16)', color: 'var(--blue)' }}>{Ico.clock}</span><div><b>&lt; 10 sec</b><small>avg. reply time</small></div></div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal><span className="eyebrow">WhatsApp AI · CRM · Automation</span></Reveal>
              <h1><SplitText text="Put your sales team on" /> <GradientText>autopilot.</GradientText></h1>
              <Reveal delay={0.15}>
                <p className="lead">Elevate Automation deploys a 24×7 AI sales assistant on your WhatsApp Business number. It answers product questions, sends spec sheets, scores every lead and cross-sells — all managed from one clean CRM dashboard.</p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="hero-actions">
                  <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
                  <Link className="btn btn-ghost btn-lg" to="/solutions">See how it works</Link>
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="hero-trust">
                  <span className="trust-label">Built for B2B teams:</span>
                  <ul><li>Manufacturers</li><li>Exporters</li><li>Distributors</li><li>Spare-parts sellers</li></ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}><Phone /></Reveal>
          </div>
        </div>
      </section>

      {/* Feature marquee bar */}
      <section className="section tight">
        <div className="container">
          <Reveal className="marquee-static" as="div">
            <div className="feature-row">
              {['24×7 AI replies', 'Instant spec sheets', 'Lead scoring', 'Cross-sell engine', 'Admin CRM dashboard', 'Weekly auto follow-ups'].map((f, i) => (
                <span key={i} className="feature-pill">{Ico.check}{f}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section tight">
        <div className="container">
          <div className="stats">
            <Reveal className="stat"><div className="num"><GradientText>24×7</GradientText></div><div className="label">AI sales coverage</div></Reveal>
            <Reveal className="stat" delay={0.06}><div className="num"><GradientText>&lt;<CountUp to={3} />s</GradientText></div><div className="label">Avg. reply time</div></Reveal>
            <Reveal className="stat" delay={0.12}><div className="num"><GradientText>&lt;<CountUp to={1} /> wk</GradientText></div><div className="label">To go live</div></Reveal>
            <Reveal className="stat" delay={0.18}><div className="num"><GradientText><CountUp to={16} />+</GradientText></div><div className="label">Buyers re-engaged / week</div></Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">What you get</span></Reveal>
            <h2><SplitText text="Everything your sales team wishes it had" /></h2>
            <Reveal delay={0.1}><p>One assistant that answers, qualifies, follows up and reports — so no enquiry is ever missed.</p></Reveal>
          </div>
          <div className="grid features-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <TiltCard className="card glow-card" max={6}>
                  <div className="card-icon">{f.i}</div>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">How it works</span></Reveal>
            <h2><SplitText text="From catalogue to closed deal — in four steps" /></h2>
            <Reveal delay={0.1}><p>We handle the setup end-to-end. You just hand over your catalogue and connect your number.</p></Reveal>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={i} className="step" delay={i * 0.08}>
                <span className="step-n" />
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Turn every WhatsApp enquiry into a <GradientText>scored lead.</GradientText></h2>
              <p>Let's get your assistant live in under two weeks. Book a free demo and see it on your own catalogue.</p>
              <div className="cta-actions">
                <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
                <a className="btn btn-wa btn-lg" href="https://wa.me/918200191137" target="_blank" rel="noopener">Message on WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
