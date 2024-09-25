import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from './PackagesComps/Hero'
import OurPack from './PackagesComps/OurPack'
import Combo from './PackagesComps/Combo'
import Cards from './PackagesComps/Cards'
import ContactForm from '../../Common/ContactForm'
import Exp from './PackagesComps/Exp'
import Orderform from '../../Common/Orderform'

const Package = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className='w-full overflow-x-hidden'>
      <Nav/>
        <SideButtons/>
        <Hero/>
        <Orderform/>
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
