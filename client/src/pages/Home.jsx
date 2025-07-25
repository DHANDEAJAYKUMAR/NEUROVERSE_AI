import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import AITools from '../components/AITools'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AITools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home
