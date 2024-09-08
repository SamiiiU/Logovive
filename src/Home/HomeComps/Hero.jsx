import React from "react";
import BgHero from "../../Assets/HeroAsset/Herobg.jpg";

const Hero = () => {
  return (
    <div>
        <div
        className="relative z-0 w-full flex  justify-center items-center h-[90vh] 
      "
        style={{
          backgroundImage: `url(${BgHero})`, // Wrap the Blob URL with url()
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="z-10 absolute  w-full h-full bg-zinc-900/70  0 "></span>

        <div className="z-20 w-[80%] h-[80%]  text-teal-50 text-5xl flex flex-col justify-center  items-center">
          <h1 className="font-bold">DIGITAL SERVICES FOR EVERY INDUSTRY</h1>
          <p className="text-center font-light mt-4">
            We are recognized for our distinctive and versatile approach in
            providing digital solutions to businesses
          </p>

          <p className="text-sm text-light text-center mt-8">
            Logovive is a digital services company. We want to help businesses
            of all sizes and industries to be able to expand their business
            online. With our services, you can automate your business and keep
            it running 24/7.
          </p>

          <span className="animate-zigzag absolute p-3 cursor-pointer text-lg tracking-wide font-semibold bottom-16 bg-gradient-to-r  from-[#ef572a] to-[#e80e82] ">Top Package {"->"}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
