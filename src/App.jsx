import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
export default function App(){
  return (
   <div>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    </div>

   </div>
  )
}
