import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Placeholder title="Solutions" eyebrow="What we build" />} />
        <Route path="/industries" element={<Placeholder title="Industries" eyebrow="Who we serve" />} />
        <Route path="/plans" element={<Placeholder title="Plans" eyebrow="Pricing" />} />
        <Route path="/about" element={<Placeholder title="About" eyebrow="Our story" />} />
        <Route path="/contact" element={<Placeholder title="Contact" eyebrow="Let's talk" />} />
        <Route path="/privacy" element={<Placeholder title="Privacy Policy" eyebrow="Legal" />} />
        <Route path="/terms" element={<Placeholder title="Terms of Service" eyebrow="Legal" />} />
        <Route path="*" element={<Placeholder title="Page not found" eyebrow="404" />} />
      </Routes>
    </Layout>
  )
}
