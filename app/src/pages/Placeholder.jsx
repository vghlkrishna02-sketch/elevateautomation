import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitText, GradientText, Magnet } from '../components/anim.jsx'

/* Temporary page shell for routes not yet ported to React (Phase 2). */
export default function Placeholder({ title, eyebrow }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><div className="breadcrumb"><Link to="/">Home</Link><span className="sep">/</span><span>{title}</span></div></Reveal>
          <Reveal delay={0.05}><span className="eyebrow">{eyebrow}</span></Reveal>
          <h1><SplitText text={title} /></h1>
          <Reveal delay={0.15}>
            <p className="lead">This page is being rebuilt in the new animated React experience. The full content lands in the next phase — in the meantime, the homepage shows the new look.</p>
          </Reveal>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="cta-band">
            <h2>Want to see it on <GradientText>your catalogue?</GradientText></h2>
            <p>Book a quick demo and we'll show exactly how the AI would answer, qualify and follow up for you.</p>
            <div className="cta-actions">
              <Magnet><a className="btn btn-primary btn-lg" href="https://wa.me/918200191137" target="_blank" rel="noopener">Book a free demo</a></Magnet>
              <Link className="btn btn-ghost btn-lg" to="/">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
