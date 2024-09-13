import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from './PackagesComps/Hero'
import OurPack from './PackagesComps/OurPack'
import Combo from './PackagesComps/Combo'
import Cards from './PackagesComps/Cards'
import ContactForm from '../../Common/ContactForm'
import Exp from './PackagesComps/Exp'

const Package = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Nav/>
        <SideButtons/>
        <Hero/>
        <OurPack/>
        <Cards/>
        <Combo/>
        <Exp/>
        <ContactForm/>

      <Footer/>
    </div>
  )
}

export default Package
