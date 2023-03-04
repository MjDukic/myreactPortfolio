import { useState } from 'react'
import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'

//main route for the app, where all the components are rendered
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
        <Projects />
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
