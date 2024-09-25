import React, { useEffect, useState } from 'react'
import {packageData} from '../../Packages/PackagesData'
import {initAOS} from '../../../Animation/AosAnimation'
import { useGlobalContext } from '../../../GlobalStates/GlobalState';

const Cards = () => {

    useEffect(() => {
        initAOS( 50 , 500 , 1000 );
      }, []);


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




  return (
    <div className='w-full px-8 py-12 sm:px-16 xl:px-28 bg-[#181818] text-teal-50 '>
            

            
            
            <div className='flex flex-wrap items-center justify-center w-full py-8 gap-x-16 gap-y-4 xl:text-lg'>

                <h1 data-aos="zoom-out" className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='1' onClick={handleCards}>  Logo Design</h1>
                <h1 data-aos="zoom-out" className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='2' onClick={handleCards}>  Website</h1>
                <h1 data-aos="zoom-out" className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='3' onClick={handleCards}>  Wordpress</h1>
                <h1 data-aos="zoom-out" className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='4' onClick={handleCards}>  Ecommerces</h1>
                <h1 data-aos="zoom-out" className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all' id='5' onClick={handleCards}>  Shopify</h1>
                
            </div>

            <div  className='flex flex-col items-center justify-center w-full mb-8 gap-y-4 sm:flex-row xl:items-end '>
            <div  className= "w-full sm:w-[40%] ">
                <h1  className='lg:text-4xl text-3xl font-bold text-[#f89521] my-2'>Pricing Plans</h1>
                <h1 className='text-4xl font-bold'>that Work for You!</h1>
            </div>

            <h1 className='lg:text-2xl text-xl w-full sm:w-[60%] leading-9'>Ready to get started? Experience the industry’s best design deals structured according to your business needs.</h1>

            </div>


            <div className='relative flex flex-wrap items-center justify-between w-full gap-y-8 sm:gap-y-4 '>

                {cards.map((item , idx) => (
                    <div data-aos-once="false" data-aos="zoom-in" key={idx} className='md:w-[33%] sm:w-[45%] w-full py-4 bg-[#222222] cursor-pointer hover:scale-[110%] transition-all'>
                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold text-center border-b-2 md:text-2xl border-b-teal-50'>{item.name} <br/> Package</div>

                    <div className='w-full flex justify-center py-4 items-center text-5xl md:text-[6rem] font-bold my-2'><span className='text-lg sm:text-xl'>$</span>{item.price}</div>

                    <div className='custom-scrollbar w-full h-60 overflow-y-scroll   px-8 pb-16 font-[500] text-xs md:text-sm'>
                       {item.package.map((pkg , index) => (
                        <>
                         <p className='text-sm leading-7' key={index}>{pkg}</p>
                        </>
                       ))}
                        
                    </div>

                    <div className='flex items-center justify-center w-full py-2 mt-4 text-lg font-semibold border-y-2 border-teal-50'>Speak with us <span className='px-4 font-bold'>(210) 910 88923</span></div>
                    <div className='flex items-center justify-center w-full text-lg font-semibold '>For Deliver Call now</div>
                    

                    <div className='flex justify-center w-full py-4 '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold' onClick={() => handleOrder(item)}>ORDER NOW</span></div>

                </div> 
                ))}

            </div>  

        </div>
  )
}

export default Cards;
