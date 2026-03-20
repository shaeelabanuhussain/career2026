import { useState } from 'react'
import './App.css'
import heroImg from './assets/hero.png'
import logoImg from './assets/logo.png'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isValid = form.name && form.email && form.phone && form.reason

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={logoImg} alt="BISTEC Hearts Academy" className="logo-img" />
        </div>
        <a href="#apply" className="nav-link">
          Apply Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <p className="hero-label">External Internship Program</p>
        <h1>A 6-month structured internship designed for students who want more than just a certificate.</h1>
        <p className="hero-sub">
          From engineering fundamentals to designing and building with AI agents.
          Structured, supported, and calm.
        </p>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="hero-image">
        <img src={heroImg} alt="BISTEC Hearts Academy team" />
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>Who We Are</h2>
        <p>
          BISTEC Global is a software company building real products for
          international clients. Hearts Academy is our internal learning arm,
          created not for profit, but because we genuinely believe growing
          engineers is the most important thing we can do.
        </p>
        <p style={{ marginTop: '12px' }}>
          The mentors here aren't coaches hired for a program. They're the same
          engineers shipping production software every day.
        </p>
      </section>

      {/* ── WHAT THIS PROGRAM IS ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>What This Program Is</h2>
        <p>
          This isn't a course. It isn't a workshop. It's a real internship,
          where you contribute to actual projects using AI-augmented, spec-driven
          development. Over 6 months you'll go from engineering fundamentals to
          designing and building with AI agents.
        </p>
      </section>

      {/* ── WHAT YOU'LL WORK ON ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>What You'll Work On</h2>
        <p>Contribute to real projects using spec-first engineering.</p>
        <ul>
          <li>Design and implement AI agents,tool calling, orchestration, context management</li>
          <li>Write and refine prompts with a focus on quality and evaluability</li>
          <li>Collaborate in structured sprints with feedback from senior engineers</li>
          <li>Document your thinking,specs, decisions, trade-offs</li>
        </ul>
      </section>

      {/* ── WHO SHOULD APPLY ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>Who Should Apply</h2>
        <ul>
          <li>Studying or recently graduated in CS, Software Engineering, Data Science, or related field</li>
          <li>Basic programming and software fundamentals,you don't need to know everything, just the foundations</li>
          <li>Curiosity about AI,you've played with prompts, read about agents, or just want to understand how it all works</li>
          <li>Can communicate clearly and take feedback</li>
          <li>Ready to commit 15-20 hours a week for 6 months</li>
        </ul>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-item">
            <h4>Flexible Hours</h4>
            <p>Start when you're ready. Leave when you're done. No clock-watching.</p>
          </div>
          <div className="offer-item">
            <h4>Work From Anywhere</h4>
            <p>Remote or hybrid,we care about the work, not the location.</p>
          </div>
          <div className="offer-item">
            <h4>Pro Tools</h4>
            <p>All the professional software licenses you need.</p>
          </div>
          <div className="offer-item">
            <h4>Real Learning</h4>
            <p>You won't just complete tasks. You'll grow with guidance from engineers who've been there.</p>
          </div>
          <div className="offer-item">
            <h4>Good Energy</h4>
            <p>We celebrate progress. Good work deserves good moments.</p>
          </div>
          <div className="offer-item">
            <h4>Certified</h4>
            <p>Walk away with a BISTEC-certified internship that actually means something.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="section">
        <div className="section-divider" />
        <h2>What You'll Learn</h2>

        <h3>Engineering Foundations</h3>
        <ul>
          <li>How software is architected from requirements to deployment</li>
          <li>Spec-driven thinking,design before you code</li>
          <li>Cloud infrastructure basics,Azure and GCP</li>
          <li>DevOps fundamentals,CI/CD, version control, deployment pipelines</li>
          <li>Database design and system thinking</li>
        </ul>

        <h3>AI-Augmented Development</h3>
        <ul>
          <li>AI agent design patterns and tool orchestration</li>
          <li>Prompt engineering and context management</li>
          <li>Spec-driven development with AI</li>
          <li>Evaluation frameworks for AI quality</li>
        </ul>

        <h3>How Professionals Think</h3>
        <ul>
          <li>Documentation, decision-making and trade-off analysis</li>
          <li>Code review culture and technical communication</li>
          <li>System-level thinking,not just feature-level</li>
        </ul>
      </section>

      {/* ── ANCHOR QUOTE ── */}
      <section className="anchor-quote">
        <p>
          "Whether you go into AI, cloud, DevOps, or full-stack,you'll leave
          thinking like someone who can design the whole system, not just write a
          piece of it."
        </p>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="apply-section" id="apply">
        <div className="apply-inner">
          {submitted ? (
            <div className="form-success">
              <h3>Application received.</h3>
              <p>We'll be in touch soon. Thank you for your interest in Hearts Academy.</p>
            </div>
          ) : (
            <>
              <h2>Apply</h2>
              <p className="form-sub">
                Tell us a bit about yourself and why you're interested.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+94 XX XXX XXXX"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reason">Why do you want this internship?</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="Tell us what excites you about this opportunity, what you've been building or learning, and what you hope to get out of it."
                    required
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={!isValid}>
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            BISTEC Global
            <span>Hearts Academy,External Internship Program © 2026</span>
          </div>
          <div className="footer-links">
            <a href="https://www.bistecglobal.com" target="_blank" rel="noreferrer">
              bistecglobal.com
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
