import { useState } from 'react'
import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {

  return (
    <div>
      <div>
         <NavBar />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default App
