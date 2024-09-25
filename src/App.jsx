import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expression from "./Expression"
import Greet from './Greetings/Greet'
import GreetHello from './Greetings/GreetHello'
import Homepage from './Conditionals/Homepage'
import LoginForm from './Dashboard/LoginForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import AuthError from './Dashboard/AuthError'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/auth-error" element={<AuthError />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
