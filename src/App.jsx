import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Generator from './components/generator/Generator';

// import react icons
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdOutlinePalette } from "react-icons/md";

// --- Generator data ---
const inspirations = [
  { 
    id: 1, 
    title: 'Food Delivery App', 
    description: 'A mobile app for ordering food from local restaurants with real-time tracking...',
    icon: <IoFastFoodOutline className="icon"/>
  },
  { 
    id: 2, 
    title: 'Fitness Tracker', 
    description: 'An app to track workouts, set goals, and monitor progress...',
    icon: <IoIosFitness className='icon'/>
  },
  { 
    id: 3, 
    title: 'Design Portfolio', 
    description: 'A clean portfolio app showcasing creative work with grid layouts...',
    icon: <MdOutlinePalette className='icon'/>
  },
]

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <main>
        <Hero />
        <Generator inspirations={inspirations}/>
      </main>
    </div>
  )
}

export default App