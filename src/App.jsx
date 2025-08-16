import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App