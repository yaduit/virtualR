import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/featureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
export default function App(){
  return (
   <div>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>

   </div>
  )
}
