import React from 'react'
import { Button } from '../button/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/videomedical.mp4' autoPlay loop muted />
        <h1>Nourish your body</h1>
        <p>fuel your soul</p>
        <div className="hero-btns">
            <Button className='btn' buttonSize='btn--large' buttonStyle='btn--outline'>
                Get Started
            </Button>
            <Button className='btn' buttonSize='btn--large' buttonStyle='btn--primary'>
               WATCH VIDEOS <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
