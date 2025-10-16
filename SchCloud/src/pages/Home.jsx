import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import OurSolution from '../Components/OurSolution'
import Footer from '../Components/Footer'
import VersatileSolution from '../Components/VersatileSolution'

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <AboutUs />
      <OurSolution />
      <VersatileSolution />
      <Footer />
    </div>
  )
}

export default Home
