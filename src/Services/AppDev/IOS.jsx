import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import { android } from '../Services Data/AndroidData'
import Intro from '../Common/Intro'
import Cards from '../Common/Cards'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'

const IOS = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);


  return (
    <div className='w-full overflow-x-hidden'>
    <Nav/>
    <SideButtons/>
    <Hero name={android[0].name} head = {android[0].heading} para={android[0].paragraph} image={android[0].image} />
    <Intro heading={android[0].introHead} para={android[0].introPara} image={android[0].introImage}/>
    <Cards/>
    <Portfolio idx={0}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default IOS
