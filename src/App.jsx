import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />      
    </div>
  );
}

export default App
