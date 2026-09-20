import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, TiltCard, Magnet, CountUp } from '../components/anim.jsx'
import { Check } from '../components/icons.jsx'

const VALUES = [
  { t: 'Accuracy', d: "If the AI isn't sure, it doesn't invent. Trust is the whole point.", i: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3a9 9 0 1 0 9 9" /><path d="M16 3.5 21 8" /></svg> },
  { t: 'Speed', d: 'Fast replies for buyers, fast delivery for you. Momentum wins deals.', i: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h6l-3 7" /><circle cx="12" cy="12" r="10" /></svg> },
  { t: 'Reliability', d: 'Managed infrastructure and monitoring so it just keeps working.', i: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" /></svg> },
  { t: 'Partnership', d: "We're an extension of your team, not a tool you're left to figure out.", i: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
]
const STACK = [
  ['Groq + Gemini', 'Dual AI engines with automatic fallback for high-speed, zero-downtime answers.'],
  ['Meta WhatsApp API', 'Official WhatsApp Business Platform — compliant, reliable, and scalable.'],
  ['AI ETL pipeline', 'Turns your product PDFs into accurate, searchable catalogue knowledge.'],
  ['Managed cloud', 'Hosting, storage, monitoring and daily backups — all handled by us.'],
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>About</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">About us</span></Reveal>
          <h1><SplitText text="We turn WhatsApp into your hardest-working" /> <GradientText>salesperson.</GradientText></h1>
          <Reveal delay={0.15}><p className="lead">Elevate Automation is a done-for-you AI automation company. We design, build, host and support intelligent WhatsApp sales assistants and CRM systems — so B2B teams never miss an enquiry again.</p></Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="stats">
            <Reveal className="stat"><div className="num"><GradientText><CountUp to={100} />%</GradientText></div><div className="label">Done-for-you delivery</div></Reveal>
            <Reveal className="stat" delay={0.06}><div className="num"><GradientText>&lt;<CountUp to={3} /> wks</GradientText></div><div className="label">Typical go-live</div></Reveal>
            <Reveal className="stat" delay={0.12}><div className="num"><GradientText>24×7</GradientText></div><div className="label">Managed &amp; monitored</div></Reveal>
            <Reveal className="stat" delay={0.18}><div className="num"><GradientText><CountUp to={2} /></GradientText></div><div className="label">AI engines for zero downtime</div></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Our mission</span>
            <h2>Make world-class AI sales automation effortless for every business.</h2>
            <p className="lead">Buyers moved to WhatsApp years ago. Most businesses still answer it manually — slowly, inconsistently, and only during office hours. We think that's a solved problem.</p>
            <p>Our mission is to give every manufacturer, exporter and distributor an always-on AI sales team that answers accurately from their own catalogue, captures every lead, and grows every order — without adding headcount or complexity.</p>
          </Reveal>
          <Reveal className="split-visual" delay={0.1}>
            <div className="glass-panel">
              <ul className="check-list" style={{ margin: 0 }}>
                <li><Check style={{ width: 22, height: 22 }} /><span><b>Accuracy first.</b> Answers come only from your verified catalogue — never guesses.</span></li>
                <li><Check style={{ width: 22, height: 22 }} /><span><b>Fully managed.</b> Hosting, monitoring, updates and support are all on us.</span></li>
                <li><Check style={{ width: 22, height: 22 }} /><span><b>Fast to value.</b> Live in weeks, not quarters — with real ROI from day one.</span></li>
                <li><Check style={{ width: 22, height: 22 }} /><span><b>Always on.</b> Dual-AI fallback and managed infrastructure keep you answering.</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">What we value</span></Reveal>
            <h2><SplitText text="The principles behind every build" /></h2>
          </div>
          <div className="grid cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <TiltCard className="card glow-card" max={7}><span className="card-icon">{v.i}</span><h3>{v.t}</h3><p>{v.d}</p></TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <Reveal className="split-visual">
            <div className="glass-panel">
              <div className="grid cols-2" style={{ gap: '1rem' }}>
                {STACK.map((s, i) => (
                  <div className="card" key={i} style={{ padding: '1.3rem' }}><h4 style={{ color: 'var(--cyan)' }}>{s[0]}</h4><p style={{ fontSize: '.9rem' }}>{s[1]}</p></div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <span className="eyebrow">Under the hood</span>
            <h2>Serious engineering, invisible to you.</h2>
            <p className="lead">We combine best-in-class AI with the official WhatsApp Business Platform and a fully managed cloud, then tune everything to your product lines.</p>
            <p>The result is an assistant that feels effortless for your buyers and your team — while we quietly handle the models, the infrastructure, the monitoring and the updates behind the scenes.</p>
            <p style={{ marginTop: '1.5rem' }}><Link className="btn btn-ghost" to="/solutions">See the platform in detail</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Let's build your <GradientText>AI sales team.</GradientText></h2>
              <p>Tell us about your catalogue and we'll show you exactly how the assistant would work for your business.</p>
              <div className="cta-actions">
                <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
                <Link className="btn btn-ghost btn-lg" to="/plans">View plans</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
