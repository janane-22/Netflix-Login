// server.js
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

// Middleware
app.use(cors())             // allow requests from frontend
app.use(express.json())     // parse JSON body

// Mock user data (no database)
const mockUsers = [
  { email: 'user@example.com', password: 'password123' },
]

// POST /api/login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body

  // find user in mock data
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  )

  if (user) {
    return res.json({ success: true, message: 'Login successful' })
  }

  return res
    .status(401)
    .json({ success: false, message: 'Invalid credentials' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
