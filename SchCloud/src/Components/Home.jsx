import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import OurSolution from './OurSolution'
import ContactUs from './Footer'
import Admission from './Admission'
import Faq from './Faq'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className='relative'>
      <Hero/>
      <AboutUs />
      <OurSolution/>
      <Carousel />
      <ContactUs/>
    </div>
  )
}

export default Home
