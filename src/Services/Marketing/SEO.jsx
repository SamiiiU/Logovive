import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import { marketing } from '../Services Data/Marketing'
import Intro from '../Common/Intro'
import Cards from '../Common/Cards'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'

const SEO = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  
  return (
    <div className='w-full overflow-x-hidden'>
    <Nav/>
    <SideButtons/>
    <Hero name={marketing[1].name} head = {marketing[1].heading} para={marketing[1].paragraph} image={marketing[1].image} />
    <Intro heading={marketing[1].introHead} para={marketing[1].introPara} image={marketing[1].introImage}/>
    <Cards/>
    <Portfolio idx={0}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default SEO
