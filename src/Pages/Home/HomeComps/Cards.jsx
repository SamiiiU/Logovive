import React, { useEffect, useState } from 'react'
import {packageData} from '../../Packages/PackagesData'
const Cards = () => {
    const [cards , setType] = useState(packageData.Logo)

    console.log(cards)

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

                <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='1' onClick={handleCards}>  Logo Design</h1>
                <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='2' onClick={handleCards}>  Website</h1>
                <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='3' onClick={handleCards}>  Wordpress</h1>
                <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='4' onClick={handleCards}>  Ecommerces</h1>
                <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='5' onClick={handleCards}>  Shopify</h1>
                
            </div>


            <div className='relative flex flex-wrap items-center justify-between w-full gap-y-8 sm:gap-y-4 '>

                {cards.map((item , idx) => (
                    <div key={idx} className='md:w-[33%] sm:w-[45%] w-full py-4 bg-[#222222] md:hover:scale-[105%] transition-all'>
                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold border-b-2 md:text-2xl border-b-teal-50'>{item.name}</div>

                    <div className='w-full flex justify-center py-4 items-center text-5xl md:text-[4rem] font-bold my-2'><span className='text-lg'>$</span>{item.price}</div>

                    <div className='custom-scrollbar w-full h-40 overflow-y-scroll  px-8 pb-16 font-[500] text-xs md:text-sm'>
                       {item.package.map((pkg , index) => (
                        <>
                         <p key={index}>{pkg}</p>
                        </>
                       ))}
                        
                    </div>

                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='flex items-center justify-center w-full text-lg font-semibold '>For Deliver Call now</div>
                    

                    <div className='flex justify-center w-full py-4 '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div> 
                ))}

            </div>  

        </div>
  )
}

export default Cards;
