import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, TiltCard, Magnet } from '../components/anim.jsx'
import { Check, Wa, Chat } from '../components/icons.jsx'

const CHIPS = [['assistant', 'AI Product Expert'], ['leadscoring', 'Lead Scoring'], ['crosssell', 'Cross-Sell'], ['crm', 'CRM Dashboard'], ['followups', 'Follow-ups'], ['integrations', 'Integrations']]
const INGEST = [
  ['Collect', 'You share your product PDFs, price lists and photos in whatever form you have them.'],
  ['Extract', 'Our ETL pipeline reads and structures every spec, model number and detail.'],
  ['Tune', 'We tune the assistant to your product lines, terminology and brand voice.'],
  ['Go live', 'The assistant answers accurately on your WhatsApp number — spec sheets included.'],
]
const INTEG = [
  ['Zero-downtime AI', 'Groq + Gemini fallback keeps answers flowing if one model is unavailable.', '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'],
  ['ERP & accounting', 'Tally, Zoho and other integrations available on Enterprise.', '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18M3 9h6"/>'],
  ['Webhooks', 'Pipe hot-lead alerts and events into your own systems in real time.', '<path d="M4 17l6-6-6-6M12 19h8"/>'],
  ['Managed cloud', 'Hosting, storage, monitoring & daily backups — all handled by us.', '<path d="M21 12a9 9 0 1 1-6.2-8.6"/><path d="M12 7v5l3 2"/>'],
]
const P = (d) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>Solutions</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">The platform</span></Reveal>
          <h1><SplitText text="One AI assistant that" /> <GradientText>sells, qualifies and follows up</GradientText></h1>
          <Reveal delay={0.15}><p className="lead">Everything runs on your WhatsApp Business number and reports into one admin CRM. Here's exactly what the Elevate Automation platform does.</p></Reveal>
          <Reveal delay={0.25}><div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
            <Link className="btn btn-ghost btn-lg" to="/plans">Compare plans</Link>
          </div></Reveal>
        </div>
      </section>

      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center', marginBottom: '1rem' }}>
            {CHIPS.map(([id, label]) => <a key={id} className="btn btn-ghost" href={`#${id}`} style={{ padding: '.5rem 1rem', fontSize: '.9rem' }}>{label}</a>)}
          </div>
        </Reveal>
      </div>

      {/* AI Product Expert */}
      <section className="section" id="assistant">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">AI Product Expert</span>
            <h2>Answers from your catalogue — in seconds, not hours</h2>
            <p className="lead">Your buyers ask; the assistant answers instantly and accurately, using your own product PDFs as its single source of truth.</p>
            <ul className="check-list">
              <li><Check style={{ width: 22, height: 22 }} /><span>Understands product questions in natural language, any time of day.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Delivers the exact <b>spec-sheet PDF</b> right inside the WhatsApp chat.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>No hallucinations — if it's not in your catalogue, it won't invent it.</span></li>
            </ul>
          </Reveal>
          <Reveal className="split-visual" delay={0.1}>
            <div className="glass-panel">
              <Chat day="Live example" rows={[
                { side: 'out', text: "What's the max operating temperature of your XR-90 valve?" },
                { side: 'in', text: 'The XR-90 ball valve operates up to 220 °C at 40 bar. Full datasheet 👇' },
                { side: 'in', doc: { name: 'XR-90-Valve.pdf', meta: 'Datasheet · 310 KB' }, text: "Anything else you'd like to know?" },
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lead scoring */}
      <section className="section" id="leadscoring">
        <div className="container split reverse">
          <Reveal className="split-visual">
            <div className="glass-panel">
              <div className="grid" style={{ gap: '.8rem' }}>
                <div className="lead-row" style={{ border: 0, padding: '.8rem', background: 'var(--surface-2)', borderRadius: 12 }}><span className="av">RK</span><span className="nm">Ramesh Kumar<br /><small style={{ color: 'var(--muted)' }}>200 units · asked for quote</small></span><span className="tag hot">HOT</span></div>
                <div className="lead-row" style={{ border: 0, padding: '.8rem', background: 'var(--surface-2)', borderRadius: 12 }}><span className="av">AS</span><span className="nm">Ananya Steels<br /><small style={{ color: 'var(--muted)' }}>comparing 2 products</small></span><span className="tag warm">WARM</span></div>
                <div className="lead-row" style={{ border: 0, padding: '.8rem', background: 'var(--surface-2)', borderRadius: 12 }}><span className="av">MV</span><span className="nm">Mahesh Ventures<br /><small style={{ color: 'var(--muted)' }}>browsing catalogue</small></span><span className="tag cold">COLD</span></div>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '.85rem', color: 'var(--muted)' }}>⚡ Hot lead alert sent to sales via WhatsApp + webhook.</p>
            </div>
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <span className="eyebrow">Lead Scoring &amp; Hot Alerts</span>
            <h2>Know which buyers are ready to buy — automatically</h2>
            <p className="lead">Every conversation is analysed and scored Cold → Warm → Hot based on intent, quantity and buying signals. The moment a lead turns hot, your team knows.</p>
            <ul className="check-list">
              <li><Check style={{ width: 22, height: 22 }} /><span>Automatic qualification and scoring on every chat.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Instant hot-lead alerts by <b>email, WhatsApp or webhook</b>.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Your team focuses only on buyers who are ready to close.</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="section" id="crosssell">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Cross-Sell Engine</span>
            <h2>Grow every order without a hard sell</h2>
            <p className="lead">The assistant recognises what pairs with each product and suggests compatible spare parts and add-ons — naturally, inside the conversation.</p>
            <ul className="check-list">
              <li><Check style={{ width: 22, height: 22 }} /><span>Recommends compatible parts, consumables and accessories.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Increases average order value on autopilot.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Feels helpful to buyers, not pushy.</span></li>
            </ul>
          </Reveal>
          <Reveal className="split-visual" delay={0.1}>
            <div className="glass-panel">
              <Chat day="Live example" rows={[
                { side: 'out', text: "I'll take the 5 HP motor." },
                { side: 'in', text: 'Great choice ✅ Customers who buy the 5 HP motor usually add a starter panel and mounting kit. Want me to add them?' },
                { side: 'out', text: 'Yes, add both.' },
                { side: 'in', text: "Added 🎯 Your order value just went up 22% — and I've shared the combined spec pack." },
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CRM dashboard */}
      <section className="section" id="crm">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Admin CRM Dashboard</span></Reveal>
            <h2><SplitText text="Your entire WhatsApp sales operation, in one panel" /></h2>
            <Reveal delay={0.1}><p>Catalogue, orders, buyers, analytics and one-click Excel export — everything the AI does is visible and exportable.</p></Reveal>
          </div>
          <Reveal className="glass-panel">
            <div className="dash">
              <div className="dash-bar"><span className="dots"><i /><i /><i /></span><span className="url">app.elevateautomation.in / dashboard</span></div>
              <div className="dash-body">
                <aside className="dash-side">
                  <span className="di active">{P('<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>')}<span>Overview</span></span>
                  <span className="di">{P('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>')}<span>Buyers</span></span>
                  <span className="di">{P('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/>')}<span>Catalogue</span></span>
                  <span className="di">{P('<path d="M4 20V10M12 20V4M20 20v-6"/>')}<span>Analytics</span></span>
                  <span className="di">{P('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>')}<span>Exports</span></span>
                </aside>
                <div className="dash-main">
                  <div className="dash-kpis">
                    <div className="dash-kpi"><small>Conversations</small><b>5,120</b><span className="trend">▲ 24% MoM</span></div>
                    <div className="dash-kpi"><small>Hot leads</small><b>318</b><span className="trend">▲ 12% MoM</span></div>
                    <div className="dash-kpi"><small>Cross-sell rate</small><b>27%</b><span className="trend">▲ 5 pts</span></div>
                  </div>
                  <div className="dash-chart">
                    <div className="chart-head"><b>Enquiries &amp; hot leads</b><span>Last 7 days</span></div>
                    <div className="bars">{[50, 66, 58, 80, 72, 94, 86].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div>
                    <div className="lead-row"><span className="av">RK</span><span className="nm">Ramesh Kumar · quote requested</span><span className="tag hot">HOT</span></div>
                    <div className="lead-row"><span className="av">AS</span><span className="nm">Ananya Steels · comparing</span><span className="tag warm">WARM</span></div>
                    <div className="lead-row"><span className="av">DP</span><span className="nm">Deepak Pumps · repeat buyer</span><span className="tag hot">HOT</span></div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid cols-3" style={{ marginTop: '1.5rem' }}>
            <Reveal><div className="card"><h4>Full catalogue &amp; orders</h4><p style={{ fontSize: '.92rem' }}>Manage products, track orders and see every buyer's history at a glance.</p></div></Reveal>
            <Reveal delay={0.08}><div className="card"><h4>Analytics that matter</h4><p style={{ fontSize: '.92rem' }}>Conversation volumes, lead quality, cross-sell rates and trends over time.</p></div></Reveal>
            <Reveal delay={0.16}><div className="card"><h4>One-click Excel export</h4><p style={{ fontSize: '.92rem' }}>Export buyers, leads and date-range reports whenever you need them.</p></div></Reveal>
          </div>
        </div>
      </section>

      {/* Ingestion */}
      <section className="section" id="ingestion">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Catalogue ingestion</span></Reveal>
            <h2><SplitText text="How the AI learns your products" /></h2>
            <Reveal delay={0.1}><p>You hand over your PDFs. Our AI ETL pipeline does the rest.</p></Reveal>
          </div>
          <div className="steps">
            {INGEST.map((s, i) => <Reveal key={i} className="step" delay={i * 0.08}><span className="step-n" /><h3>{s[0]}</h3><p>{s[1]}</p></Reveal>)}
          </div>
        </div>
      </section>

      {/* Follow-ups */}
      <section className="section" id="followups">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Weekly Auto Follow-ups</span>
            <h2>Reopen deals while you sleep</h2>
            <p className="lead">Cold leads aren't dead — they're just waiting. The assistant re-engages 25–50 buyers every week on autopilot, bringing conversations (and orders) back to life.</p>
            <ul className="check-list">
              <li><Check style={{ width: 22, height: 22 }} /><span>Automated weekly follow-up campaigns.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Re-engages 25–50 buyers per week without any manual effort.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>Keeps your pipeline warm and your brand top-of-mind.</span></li>
            </ul>
          </Reveal>
          <Reveal className="split-visual" delay={0.1}>
            <div className="glass-panel">
              <Chat day="Auto follow-up" rows={[
                { side: 'in', text: 'Hi Ramesh 👋 Just following up on the SKF bearings you asked about last week — still need them? I can lock in 24-hr dispatch.' },
                { side: 'out', text: "Yes actually, let's proceed. Send the quote." },
                { side: 'in', text: 'On it 🚀 Flagging to our team now.', lead: '🔥 Reopened · Hot' },
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="section" id="integrations">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow">Integrations &amp; reliability</span></Reveal>
            <h2><SplitText text="Plugs into your stack. Never goes dark." /></h2>
          </div>
          <div className="grid cols-4">
            {INTEG.map((c, i) => (
              <Reveal key={c[0]} delay={(i % 4) * 0.07}>
                <TiltCard className="card glow-card" max={6}><span className="card-icon">{P(c[2])}</span><h4>{c[0]}</h4><p style={{ fontSize: '.9rem' }}>{c[1]}</p></TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>See the platform on <GradientText>your own catalogue.</GradientText></h2>
              <p>Book a free demo and we'll show exactly how the assistant answers, scores and follows up for your products.</p>
              <div className="cta-actions">
                <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
                <a className="btn btn-wa btn-lg" href="https://wa.me/918200191137" target="_blank" rel="noopener"><Wa style={{ width: 20, height: 20 }} />Ask on WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
