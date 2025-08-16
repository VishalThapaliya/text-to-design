import React from 'react'
import './Hero.css'
import HeroBackgroundImage from '../../assets/hero-background.jpg'

const Hero = () => {
  return (
    <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
            <h1 className="hero-title">
                Turn Your App Ideas Into <br /> Visual Reality
            </h1>
            <p className="hero-subtitle">
                Describe your app concept in plain language and watch as AI transforms your words into beautiful, interactive mockups in seconds.
            </p>
            <div className="hero-buttons">
                <button className="btn btn-primary">Start Creating &rarr;</button>
                <button className="btn btn-secondary">See Examples</button>
            </div>
            <div className="hero-stats">
                <div>
                    <p>10K+</p>
                    <span>Avegrage Visualized</span>
                </div>
                <div>
                    <p>&lt; 30s</p>
                    <span>Avegrage Generation</span>
                </div>
                <div>
                    <p>99%</p>
                    <span>Accuracy Rate</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero