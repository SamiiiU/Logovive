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

const Game = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top whenever the pathname changes
      }, []);
  return (
    <div className='w-full overflow-x-hidden'>
    <Nav/>
    <SideButtons/>
    <Hero name={android[1].name} head = {android[1].heading} para={android[1].paragraph} image={android[1].image} />
    <Intro heading={android[1].introHead} para={android[1].introPara} image={android[1].introImage}/>
  
    <Portfolio idx={1}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default Game
