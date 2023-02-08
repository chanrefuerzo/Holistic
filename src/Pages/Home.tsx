import React from 'react'
import '../App.css'
import Card from '../components/card/Card'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/hero/HeroSection'


function Home() {
  return (
    <div>
      <HeroSection/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home
