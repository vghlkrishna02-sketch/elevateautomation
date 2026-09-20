import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Solutions from './pages/Solutions.jsx'
import Industries from './pages/Industries.jsx'
import Plans from './pages/Plans.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
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
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Placeholder title="Page not found" eyebrow="404" />} />
      </Routes>
    </Layout>
  )
}
