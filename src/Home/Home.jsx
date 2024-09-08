import React from 'react'
import Hero from './HomeComps/Hero'
import Nav from '../Common/Nav'
import Partners from './HomeComps/Partners'

const Home = () => {
  return (
    <div className='w-full h-screen'>
    <Nav/>
    <Hero/>
    <Partners/>
    </div>
  )
}

export default Home
