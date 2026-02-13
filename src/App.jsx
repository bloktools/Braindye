import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Help from './pages/Help.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Pricing from './pages/Pricing.jsx'
import Account from './pages/Account.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  )
}

export default App
