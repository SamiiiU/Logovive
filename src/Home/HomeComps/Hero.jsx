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
        <span className="absolute z-10 w-full h-full bg-zinc-900/70 0 "></span>

        <div className="z-20 w-full sm:px-24 px-8 md:h-[80%]   text-teal-50 md:text-5xl sm:text-4xl text-3xl flex flex-col justify-center  items-center">
          <h1 className="font-bold text-center ">DIGITAL SERVICES FOR EVERY INDUSTRY</h1>
          <p className="mt-4 font-light text-center">
            We are recognized for our distinctive and versatile approach in
            providing digital solutions to businesses
          </p>

          <p className="mt-8 text-xs text-center sm:text-sm text-light">
            Logovive is a digital services company. We want to help businesses
            of all sizes and industries to be able to expand their business
            online. With our services, you can automate your business and keep
            it running 24/7.
          </p>

          <span className="animate-zigzag absolute p-3 cursor-pointer sm:text-lg  text-sm tracking-wide font-semibold sm:bottom-16 bottom-8 bg-gradient-to-r  from-[#ef572a] to-[#e80e82] ">Top Package {"->"}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
