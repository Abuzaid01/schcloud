import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import OurSolution from './OurSolution'
import Footer from './Footer'
import VersatileSolution from './VersatileSolution'

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
