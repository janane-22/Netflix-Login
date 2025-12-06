// src/SignUp.jsx
import { useState } from 'react'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill all fields')
      return
    }

    setError('')
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert('Account created (mock). Redirecting to Netflix Sign In.')
      window.location.href = 'https://www.netflix.com/login'
    }, 800)
  }

  return (
    <div className="page">
      <div className="card">
        <div>
          <div className="logo">NETFLIX</div>
          <h2 className="heading">Create account</h2>
        </div>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSignUp}>
          <div className="field">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?{' '}
          <span
            style={{ cursor: 'pointer', fontWeight: 600 }}
            onClick={() => (window.location.href = 'https://www.netflix.com/login')}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
