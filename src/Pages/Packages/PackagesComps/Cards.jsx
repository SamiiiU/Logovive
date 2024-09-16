import React, { useEffect, useState } from 'react'
import {packageData} from '../PackagesData'
const Cards = () => {
    const [cards , setType] = useState(packageData.Logo)

    const handleCards = (e) => {
        const currId = e.target.id
        switch (currId) {

            case "1":
                setType(packageData.Logo)
                break;
             
            case "2":
                setType(packageData.WebDesign)
                break;    
            case "3":
                setType(packageData.WordPress)
                break;
                
            case "4":
                setType(packageData.Ecommerce)
                break; 
                
            case "5":
                setType(packageData.Shopify)
                break;      
            
        
            default:
                break;
        }

        

    }
  return (
    <div className='w-full px-8 py-12 sm:px-16 xl:px-28 bg-[#181818] text-teal-50 '>
            <div className='flex flex-wrap items-center justify-center w-full py-8 gap-x-16 gap-y-4 xl:text-lg'>

                <h1 className='px-3 py-1 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] cursor-pointer rounded-md' id='1' onClick={handleCards}>  Logo Design</h1>
                <h1 className='px-3 py-1 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] cursor-pointer rounded-md' id='2' onClick={handleCards}>  Website</h1>
                <h1 className='px-3 py-1 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] cursor-pointer rounded-md' id='3' onClick={handleCards}>  Wordpress</h1>
                <h1 className='px-3 py-1 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] cursor-pointer rounded-md' id='4' onClick={handleCards}>  Ecommerces</h1>
                <h1 className='px-3 py-1 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82] cursor-pointer rounded-md' id='5' onClick={handleCards}>  Shopify</h1>
                
            </div>


            <div className='relative flex flex-wrap items-center justify-between w-full animate-fadeUp gap-y-8 '>
                {cards.map((item , idx) => (
                    <div key={idx} className='md:w-[31%] hover:shadow-teal-300/50 shadow-lg  rounded-lg border-2 border-[#e80e82] sm:w-[45%] w-full py-4 bg-teal-50 text-[#181818] md:hover:scale-[105%] transition-all'>
                    <div className='flex flex-col items-center justify-center w-full py-2 text-xl font-bold text-center border-b-2 md:text-2xl border-b-zinc-900'>{item.name} <br/> <span className='text-[#e80e82]'>Package</span></div>

                    <div className='custom-scrollbar w-full h-40 overflow-y-scroll  px-8 py-8 font-[500] text-xs md:text-sm'>
                       {item.package.map((pkg , index) => (
                        <>
                         <p key={index}>{pkg}</p>
                        </>
                       ))}
                        
                    </div>

                    <div className='flex items-center justify-between w-full px-8 py-2 text-lg font-semibold border-y-2 border-teal-50'>
                       <h1 className='flex-1 text-xl font-semibold tracking-tighter sm:text-3xl text-blue-950'>All this in Just </h1>
                       <div className='flex justify-end flex-1 text-3xl font-bold text-[#e80e82]'>${item.price}</div>
                    </div>   
                    

                    <div className='flex justify-center w-full gap-4 px-6 py-2 uppercase'>
                        <span className='px-4 py-2 rounded-full text-xs sm:text-md font-bold  bg-gradient-to-r from-[#ef572a]   to-[#e80e82] text-teal-50'>ORDER NOW</span>

                        <span className='px-4 py-2 font-bold text-md '>Book a call</span>
                    </div>
                                     
                </div> 
                ))}

            </div>     

        </div>
  )
}

export default Cards;
