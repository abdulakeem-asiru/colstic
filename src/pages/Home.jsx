import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Featured from '../components/sections/Featured'
import Testimonial from '../components/sections/Testimonial'
import Blog from '../components/sections/Blog'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Featured />
      <Testimonial />
      <Blog />
      <div className='h-[300px]'></div>
    </div>
  )
}

export default Home
