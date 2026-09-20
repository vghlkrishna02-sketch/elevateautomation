import React, { useRef, useEffect, useState } from 'react'
import {
  motion, useScroll, useTransform, useSpring, useMotionValue,
  useInView, animate, useReducedMotion,
} from 'framer-motion'

/* Animated aurora background + grid + scroll progress bar */
export function AuroraBackground() {
  const { scrollYProgress, scrollY } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const y1 = useTransform(scrollY, (v) => v * 0.06)
  const y2 = useTransform(scrollY, (v) => v * -0.045)
  const y3 = useTransform(scrollY, (v) => v * 0.08)
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <motion.span className="a-orb a1" style={{ y: y1 }} />
        <motion.span className="a-orb a2" style={{ y: y2 }} />
        <motion.span className="a-orb a3" style={{ y: y3 }} />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX: bar }} aria-hidden="true" />
    </>
  )
}

/* Fade/slide in when scrolled into view */
export function Reveal({ children, y = 26, delay = 0, className, as = 'div' }) {
  const M = motion[as] || motion.div
  const reduce = useReducedMotion()
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  )
}

/* Split a heading into words that rise + fade in, staggered */
export function SplitText({ text, className, delay = 0 }) {
  const reduce = useReducedMotion()
  const words = String(text).split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="split-word"
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, y: '0.6em' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {w}{i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  )
}

export const GradientText = ({ children, className = '' }) => (
  <span className={`gtext ${className}`}>{children}</span>
)
export const ShinyText = ({ children, className = '' }) => (
  <span className={`shiny ${className}`}>{children}</span>
)

/* 3D tilt on pointer move */
export function TiltCard({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  function onMove(e) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * max * 2)
    rx.set(-py * max * 2)
  }
  function reset() { rx.set(0); ry.set(0) }
  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

/* Magnetic pull toward the pointer */
export function Magnet({ children, className = '', strength = 0.35 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  function onMove(e) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  function reset() { x.set(0); y.set(0) }
  return (
    <motion.span
      ref={ref}
      className={`magnet ${className}`}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  )
}

/* Count up to a target when it enters view */
export function CountUp({ to, from = 0, decimals = 0, prefix = '', suffix = '', duration = 1.6, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' })
  const [val, setVal] = useState(from)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!inView) return
    if (reduce) { setVal(to); return }
    const controls = animate(from, to, {
      duration, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [inView, to, from, duration, reduce])
  const shown = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()
  return <span ref={ref} className={className}>{prefix}{shown}{suffix}</span>
}
