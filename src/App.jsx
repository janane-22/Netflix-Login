// src/App.jsx
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // simple validation
    if (!email || !password) {
      setError('Please fill all fields')
      return
    }

    setError('')
    setLoading(true)

    // small delay just to show button state, then redirect
    setTimeout(() => {
      setLoading(false)
      window.location.href = 'https://www.netflix.com/login'
    }, 500)
  }

  return (
    <div className="page">
      <div className="card">
        <div>
          <div className="logo">NETFLIX</div>
          <h2 className="heading">Sign In</h2>
        </div>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button" type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="bottom-text">
          New to Netflix? <span>Sign up now</span>
        </p>
        <p className="small">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
        </p>
      </div>
    </div>
  )
}

export default App
git add .
