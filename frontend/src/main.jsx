import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUp from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />       {/* Sign In page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up page */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
