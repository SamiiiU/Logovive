import React, { useState } from 'react'
import {Webdev} from '../Services Data/WebDev'
import { Link } from 'react-router-dom'
import PortfolioView from './PortfolioView'
const Portfolio = ({idx}) => {

    console.log(Webdev[idx].portfolo)

    const [isShow , setIsShow] = useState(true)
  return (
    
    <div className='w-full md:px-28 sm:px-16 px-8 py-16 bg-[#181818] text-teal-50'>
      
      <div className='flex flex-col items-center justify-center w-full py-8 mb-8 text-3xl gap-y-4 md:flex-row lg:text-4xl'>

            <h1 className='font-bold md:w-[40%] w-full text-5xl'>Our Outstanding
                Portfolio</h1>


            <h1 className='lg:text-2xl text-xl md:w-[60%] w-full leading-9'>We take an integrated approach to creating highly engaging digital properties & brand focused creative solutions. We believe in providing highly creative and exclusive brand identities giving your business an edge over its competitors.</h1>

        </div>

        <div className='flex flex-wrap justify-center w-full gap-8 '>
            {Webdev[idx].portfolo.map((item , index) => (
                <div key={index} className='md:w-[20em] md:h-[20em] rounded-md w-[200px] h-[200px] bg-[#292929]'
                style={{
                  backgroundImage: `url(${item})`, // Wrap the Blob URL with url()
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                >
                        .
                </div>
            ))}
        </div>

        <div className='w-full mt-8 text-center'>
           <Link to="/Package">
           <h1 className='bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] py-2 px-8 cursor-pointer inline text-xl font-semibold'> PRICING</h1>
           </Link>
        </div>

    </div>
  )
}

export default Portfolio
