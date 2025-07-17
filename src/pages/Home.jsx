import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Featured from '../components/sections/Featured'
import Testimonial from '../components/sections/Testimonial'
import Blog from '../components/sections/Blog'
import Cta from '../components/sections/Cta'
import Footer from '../components/sections/Footer'

const Home = ({ready}) => {
    if(!ready) return;
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Featured />
      <Testimonial />
      <Blog />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home
