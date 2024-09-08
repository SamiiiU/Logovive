import React from "react";
import glass from '../../Assets/HeroAsset/glass.webp'

const How = () => {
  return (
    <div className="w-full  py-8 bg-[#181818] text-teal-50">
      <div className="w-full px-28 mb-28 flex flex-col justify-start items-center ">
        <h1 className="px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]   mb-2 to-[#e80e82]">
          How it works
        </h1>

        <h1 className="font-bold uppercase text-5xl my-2">
        Simple But Effective Process
        </h1>

        <p className="text-center font-medium mb-8">
        Our strategic process of every web project consists of 3 simple steps. These steps may seem simple enough but when experts like us are working on these steps, you can expect ideal results. Just following these 3 steps effectively, your business can become a new world-class brand.


        </p>

        {/* Steps box  */}
        <div className="w-full flex flex-wrap  gap-x-4">

            {/* step 1 */}
            <div className="flex-1 flex flex-col justify-center items-center ">
                <h1 className="font-bold text-4xl mb-8">01</h1>

                <h1 className="font-semibold text-2xl mb-4"> Consultation</h1>

                <p className="text-center ">The consultation is a one-on-one talk between our clients and our expert consultant. Here we will discuss every aspect of your business and what are your goals for expanding online.</p>
            </div>

            {/* step 2  */}
            <div className="flex-1 flex flex-col justify-center items-center ">


            <h1 className="font-bold text-4xl mb-8">02</h1>

            <h1 className="font-semibold text-2xl mb-4 text-center">Research And Development</h1>

            <p className="text-center ">Here we will research your industry and targeted audience to devise a much more in-depth strategy. Once a fail-proof strategy is ready, we start developing your project.</p>
            </div>

            {/* step 3  */}
            <div className="flex-1 flex flex-col justify-center items-center ">
            <h1 className="font-bold text-4xl mb-8">03</h1>

            <h1 className="font-semibold text-2xl mb-4">Marketing</h1>

            <p className="text-center ">Once the project is finished, we will start promoting it through all our promotion channels. We will support you with SEO, social media, paid ads, and a lot more for your business’s success.</p>
            </div>


        </div>

        
      </div>
      
        <div className=" w-full flex bg-gradient-to-t from-[#e5463c] h-[50vh] to-[#ef572a]/10 p-8">
            <div className="-mt-20 w-[40%] h-[150%] "
                style={{
                    backgroundImage: `url(${glass})`,
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            <div className="w-[60%] py-8 pr-16" >
                <h1 className="font-bold uppercase text-4xl my-2  mb-4">Want To Expand Online? Let The Professionals Handle It.</h1>

                <p className="tracking-wider mb-4">Logovive is comprised of many people who have spent decades in their fields of web technology. We are dedicated to delivering the best we can offer our clients.</p>

                <div className="w-full flex gap-8 pr-16">
                    <span className=" px-8 font-semibold py-3 rounded-full bg-teal-50 text-zinc-900">VIEW PRICING</span>
                    <span className=" px-8  py-3 border-dashed border-2 border-teal-50 text-teal-50">VIEW PRICING</span>
                </div>

            </div>

            
        </div>

        
    </div>
  );
};

export default How;
