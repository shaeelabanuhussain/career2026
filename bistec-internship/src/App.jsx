import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logoImg from './assets/logo.png'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* ── NAV ── */}
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="BISTEC Hearts Academy" className="logo-img" />
        </Link>
        <div className="nav-links">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <a href="/#apply" className="nav-link">
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── PAGES ── */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            BISTEC Hearts Academy
            <span>&copy; 2026 BISTEC Hearts Academy. All rights reserved.</span>
            <span>No: 14, Sir Baron Jayathilake Mawatha, Colombo 01, Sri Lanka</span>
          </div>
          <div className="footer-links">
            <Link to="/contact">Contact</Link>
            <a href="https://www.bistecglobal.com" target="_blank" rel="noreferrer">
              bistecglobal.com
            </a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
