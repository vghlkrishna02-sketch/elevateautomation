import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, TiltCard, Magnet } from '../components/anim.jsx'
import { Check, Chat } from '../components/icons.jsx'

const P = (d) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />

const INDS = [
  ['Manufacturing', 'Answer specs, MOQs and lead times across your entire SKU range — and route serious buyers straight to sales.', '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>'],
  ['Export & Import', 'Serve overseas buyers around the clock across time zones, with instant datasheets, quotes and multilingual replies.', '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>'],
  ['Distribution & Wholesale', 'Handle bulk enquiries, availability checks and reorders — no more phone tag or missed weekend messages.', '<path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>'],
  ['Industrial Spare Parts', 'Match part numbers, deliver spec sheets and auto-suggest compatible components to grow every order.', '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>'],
  ['Building Materials', 'Quote tiles, pipes, fittings and hardware with photos and specs, delivered straight into the chat.', '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/>'],
  ['Electronics & Electricals', 'Field technical questions on ratings, models and compatibility with full catalogue accuracy.', '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/>'],
  ['Automotive & Auto Parts', 'Look up parts by vehicle or number, confirm fitment and cross-sell consumables automatically.', '<path d="M19 17h2l.64-2.54a6 6 0 0 0-.4-4.06l-1.1-2.32A3 3 0 0 0 17.4 6H8.6a3 3 0 0 0-2.74 2.08L4.76 10.4a6 6 0 0 0-.4 4.06L5 17h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'],
  ['Chemicals & Supplies', 'Share grades, MSDS and specification sheets, and qualify buyers by quantity and application.', '<path d="M10 2v7.31M14 9.3V2M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0M5.5 16h13"/>'],
  ['Machinery & Equipment', 'Explain configurations, capacities and accessories, then hand hot buyers to your team with full context.', '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15H4.5a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 6 9.4Z"/>'],
]

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>Industries</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">Industries</span></Reveal>
          <h1><SplitText text="If you sell from a catalogue," /> <GradientText>the AI can sell it.</GradientText></h1>
          <Reveal delay={0.15}><p className="lead">Wherever buyers ask "do you have this, what's the spec, can you quote it?", Elevate Automation answers instantly — accurately, 24×7, from your own products.</p></Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="grid ind-grid">
            {INDS.map((ind, i) => (
              <Reveal key={ind[0]} delay={(i % 3) * 0.07}>
                <TiltCard className="ind-card glow-card" max={6}><span className="ii">{P(ind[2])}</span><h3>{ind[0]}</h3><p>{ind[1]}</p></TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <span className="eyebrow">Same jobs, every industry</span>
            <h2>The enquiries the AI handles for you</h2>
            <p className="lead">Whatever you sell, the day-to-day questions look the same — and the assistant handles all of them, instantly.</p>
            <ul className="check-list">
              <li><Check style={{ width: 22, height: 22 }} /><span>"Do you have this in stock?" — instant availability answers.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>"What's the spec / rating / size?" — straight from your PDFs.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>"Send me the datasheet." — the exact PDF, in seconds.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>"Can you quote 200 units?" — captured, scored, and escalated.</span></li>
              <li><Check style={{ width: 22, height: 22 }} /><span>"What else do I need with it?" — smart cross-sell suggestions.</span></li>
            </ul>
            <p style={{ marginTop: '1.5rem' }}><Link className="btn btn-ghost" to="/solutions">See how it works</Link></p>
          </Reveal>
          <Reveal className="split-visual" delay={0.1}>
            <div className="glass-panel">
              <Chat day="Any industry" rows={[
                { side: 'out', text: 'Do you have 12mm MS plates? Need 3 tonnes.' },
                { side: 'in', text: 'Yes ✅ 12 mm MS plate is available. For 3 tonnes we can dispatch in 48 hrs. Spec sheet 👇' },
                { side: 'in', doc: { name: 'MS-Plate-12mm.pdf', meta: 'Datasheet · 180 KB' }, text: '' },
                { side: 'out', text: 'Please share a quote.' },
                { side: 'in', text: 'Done 🚀 Flagged to our sales team.', lead: '🔥 Hot lead' },
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Don't see your industry? <GradientText>It probably still fits.</GradientText></h2>
              <p>If your buyers message you on WhatsApp about products, we can automate it. Let's talk.</p>
              <div className="cta-actions">
                <Magnet><Link className="btn btn-primary btn-lg" to="/contact">Book a Free Demo</Link></Magnet>
                <Link className="btn btn-ghost btn-lg" to="/solutions">Explore the platform</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
