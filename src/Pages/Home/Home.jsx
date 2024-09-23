import React, { useEffect } from 'react'
import Hero from './HomeComps/Hero'
import Nav from '../../Common/Nav'
import Partners from './HomeComps/Partners'
import Special from './HomeComps/Special'
import How from './HomeComps/How'
import Expierence from './HomeComps/Expierence'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import ContactForm from '../../Common/ContactForm'
import Testimonial from '../../Common/Tetimonal'
import Quote from '../../Common/Quote'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className='w-full overflow-x-hidden transition-all'>
    <SideButtons/>
    <Nav/>
    
    <Hero/>
    <Partners/>
    <Special/>
    <Quote/>
    <How/>
    <Expierence/>
    <Testimonial/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default Home
