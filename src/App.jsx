import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App