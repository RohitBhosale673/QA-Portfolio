import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import TestingWorkflow from './components/TestingWorkflow'
import Projects from './components/Projects'
import TestCases from './components/TestCases'
import BugReport from './components/BugReport'
import Automation from './components/Automation'
import QADashboard from './components/QADashboard'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-qa-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-qa-blue/30 overflow-x-hidden">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <TestingWorkflow />
        <Projects />
        <QADashboard />
        <Automation />
        <TestCases />
        <BugReport />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
