import React, { useEffect } from "react";
import glass from '../../../Assets/HeroAsset/glass.webp'
import {initAOS} from '../../../Animation/AosAnimation'


const How = () => {

  useEffect(() => {
    initAOS( 50 , 500 , 1000 );
  }, []);

  
  return (
    <div className="w-full py-8 bg-[#181818] text-teal-50">
      <div  className="flex-col items-center justify-start w-full px-8 sm:px-16 md:px-28 mb-28 md:flex ">
        <h1 data-aos="fade-up" className="px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]   mb-2 to-[#e80e82]">
          How it works
        </h1>

        <h1 data-aos="fade-up" className="my-2 text-3xl font-bold text-center uppercase md:text-5xl sm:text-4xl">
        Simple But Effective Process
        </h1>

        <p data-aos="fade-up" className="mb-8 font-medium text-center">
        Our strategic process of every web project consists of 3 simple steps. These steps may seem simple enough but when experts like us are working on these steps, you can expect ideal results. Just following these 3 steps effectively, your business can become a new world-class brand.


        </p>

        {/* Steps box  */}
        <div  className="flex flex-col flex-wrap w-full md:flex-row gap-x-4">

            {/* step 1 */}
            <div data-aos="zoom-in" className="flex flex-col items-center justify-center flex-1 ">
                <h1 className="mb-8 text-4xl font-bold">01</h1>

                <h1 className="mb-4 text-2xl font-semibold"> Consultation</h1>

                <p className="text-center ">The consultation is a one-on-one talk between our clients and our expert consultant. Here we will discuss every aspect of your business and what are your goals for expanding online.</p>
            </div>

            {/* step 2  */}
            <div data-aos="zoom-in" className="flex flex-col items-center justify-center flex-1 ">


            <h1 className="mb-8 text-4xl font-bold">02</h1>

            <h1 className="mb-4 text-2xl font-semibold text-center">Research And Development</h1>

            <p className="text-center ">Here we will research your industry and targeted audience to devise a much more in-depth strategy. Once a fail-proof strategy is ready, we start developing your project.</p>
            </div>

            {/* step 3  */}
            <div data-aos="zoom-in" className="flex flex-col items-center justify-center flex-1 ">
            <h1 className="mb-8 text-4xl font-bold">03</h1>

            <h1 className="mb-4 text-2xl font-semibold">Marketing</h1>

            <p className="text-center ">Once the project is finished, we will start promoting it through all our promotion channels. We will support you with SEO, social media, paid ads, and a lot more for your business’s success.</p>
            </div>


        </div>

        
      </div>
      
        <div data-aos="fade" className=" w-full flex md:flex-row flex-col bg-gradient-to-t from-[#e5463c] sm:h-[50vh] justify-center items-center h-screen to-[#ef572a]/10 p-8">
            <div className="md:-mt-20 md:w-[40%] w-screen md:h-[150%] h-[50%] "
                style={{
                    backgroundImage: `url(${glass})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            <div className="md:w-[60%] w-full py-8 md:pr-16" >
                <h1 className="my-2 mb-4 text-3xl font-bold text-center uppercase sm:text-4xl">Want To Expand Online? Let The Professionals Handle It.</h1>

                <p className="mb-4 tracking-wider text-center">Logovive is comprised of many people who have spent decades in their fields of web technology. We are dedicated to delivering the best we can offer our clients.</p>

                <div className="flex justify-center w-full gap-8 md:justify-start">
                    <p className="flex-1 py-3 font-semibold text-center rounded-full md:px-8 bg-teal-50 text-zinc-900">VIEW PRICING</p>
                    <p className="flex-1 py-3 text-center border-2 border-dashed md:px-8 border-teal-50 text-teal-50">VIEW PRICING</p>
                </div>

            </div>

            
        </div>

        
    </div>
  );
};

export default How;
