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
    <Hero name={marketing[2].name} head = {marketing[2].heading} para={marketing[2].paragraph} image={marketing[2].image} />
    <Intro heading={marketing[2].introHead} para={marketing[2].introPara} image={marketing[2].introImage}/>
    <Cards/>
    <Portfolio idx={0}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default SEO
