import React from 'react'

export const Check = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 6 9 17l-5-5" /></svg>
)
export const Wa = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" /></svg>
)
export const Doc = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
)

/* A WhatsApp-style static chat mockup used on Solutions/Industries */
export function Chat({ day, rows }) {
  return (
    <div className="wa-body" style={{ borderRadius: 16, height: 'auto', minHeight: 300 }}>
      <span className="wa-day">{day}</span>
      {rows.map((r, i) => (
        <div key={i} className={`bubble ${r.side}`}>
          {r.doc && (
            <span className="doc"><Doc style={{ width: 24, height: 24 }} /><b>{r.doc.name}</b><small>{r.doc.meta}</small></span>
          )}
          {r.text}
          {r.lead && <span className="chip-lead">{r.lead}</span>}
        </div>
      ))}
    </div>
  )
}
