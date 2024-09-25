import React, { useEffect, useState } from 'react'
import cards from '../../Pages/Home/HomeData/Pricecards'
import Orderform from '../../Common/Orderform'
import { useGlobalContext } from '../../GlobalStates/GlobalState'
import '../../Pages/Home/Sidebar.css'

const Cards = ({type}) => {

  const {

    price , setPrice,
    packageSelect , setPackage,
    isOrder , setIsOrder
    } = useGlobalContext();

  
  const handleOrder = (item) => {
      console.log(item.name , item.price);
      setPrice(item.price);
      setPackage(item.name);
      console.log(packageSelect , price)
      setIsOrder(true)


  }
  
  
  const [show , setCards] = useState(cards.WebDesign)



   useEffect(() =>{
        if(type === "Shopify"){
          setCards(cards.Shopify)
        }
        
        else if(type === "ecommerce"){
          setCards(cards.Ecommerce)
        }

        else if(type === "digital"){
          setCards(cards.DigitalM)
        }

        else if(type === "SEO"){
          setCards(cards.SEO)
        }else{
          setCards(cards.WebDesign)
        }
   } , [show])


  return (
    <div className='w-full md:px-28 sm:px-16 px-8 py-16 bg-[#181818] '>
      <Orderform/>
      <div className='flex flex-col items-end justify-center w-full py-4 mb-8 text-3xl text-teal-50 gap-y-4 sm:flex-row lg:text-4xl'>
            <div className= "sm:w-[40%] w-full ">
                <h1 className=' font-bold text-[#f89521] my-2'>Choose The Plan</h1>
                <h1 className='font-bold '>That Is Right For You!</h1>
            </div>

            <h1 className='lg:text-2xl text-xl sm:w-[60%] w-full leading-9'>If you are ready to expand into the digital world, now you have an option that can adjust to your budget.</h1>

            </div>

            <div className='relative flex flex-wrap items-center justify-between w-full text-teal-50 gap-y-4 '>
                {show.map((item , idx) => (
                    <div key={idx} className='md:w-[33%]  sm:w-[45%] w-full py-4 bg-[#222222] md:hover:scale-[105%] transition-all'>
                    <div className='flex items-center justify-center w-full py-2 text-2xl font-bold text-center border-b-2 border-b-teal-50'>{item.name} <br/> Package</div>

                    <div className='w-full flex justify-center py-4 items-center text-5xl md:text-[4rem] font-bold my-2'><span className='text-lg'>$</span>{item.price}</div>

                    <div className='custom-scrollbar w-full h-40 overflow-y-scroll  px-8 pb-16 font-[500] text-xs md:text-sm'>
                       {item.package.map((pkg , index) => (
                        <>
                         <p key={index}>{pkg}</p>
                        </>
                       ))}
                        
                    </div>

                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='flex items-center justify-center w-full text-lg font-semibold '>contact on call</div>
                    

                    <div className='flex justify-center w-full py-4 '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold cursor-pointer focus:bg-[#ef572a] ' onClick={() => handleOrder(item)}>ORDER NOW</span></div>

                </div> 
                ))}

            </div>

    </div>
  )
}

export default Cards
