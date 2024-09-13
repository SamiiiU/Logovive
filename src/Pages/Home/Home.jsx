import React from 'react'
import Hero from './HomeComps/Hero'
import Nav from '../../Common/Nav'
import Partners from './HomeComps/Partners'
import Special from './HomeComps/Special'
import How from './HomeComps/How'
import Expierence from './HomeComps/Expierence'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import ContactForm from '../../Common/ContactForm'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden transition-all'>
    <SideButtons/>
    <Nav/>
    
    <Hero/>
    <Partners/>
    <Special/>
    <How/>
    <Expierence/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default Home
