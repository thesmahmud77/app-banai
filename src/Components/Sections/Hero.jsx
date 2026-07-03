"use client";
import { SiPrdotco } from "react-icons/si";
import deshboardImage from "../../Assects/deshboard.jpg";

const Hero = () => {
  return (
    <div className="relative bg-black flex flex-col items-center justify-center h-full py-10 px-4 sm:px-6 text-center py-16 overflow-hidden">
      <div className=" z-20 hero-conetent flex flex-col items-center justify-center">
        <div className="bg-black/50 w-80 md:w-110 border-2 border-gray-700/70 rounded-full flex gap-5 items-center justify-center py-3">
          <SiPrdotco className="text-amber-300 w-5 h-5 md:w-8 md:h-8" />
          <p className="text-gray-300 text-sm md:text-xl">
            Powered by GPT-40 + Claude 305
          </p>
        </div>
        <div className="hero-headings">
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-8">
            Turn Ideas Into
            <span className="gradientText">
              Apps <br /> Instantly
            </span>
            with AI
          </h1>
          <p className="text-white text-sm md:text-lg mt-4 max-w-2xl mx-auto px-5 mt-0 md:mt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            illo a et voluptatum assumenda deleniti officia nostrum hic neque
            vel. Dicta odio,
          </p>
        </div>
        <div className="mt-8 flex gap-3 items-center justify-center">
          <button className="px-5 py-3 rounded-lg text-white gradientBg ">
            Start Free Trial
          </button>
          <button className="px-5 py-3 rounded-lg gradientBorder border-2 text-red-500">
            Watch Demo
          </button>
        </div>
      </div>
      <div className=" z-10 absolute bottom-0/4 w-full h-full blue-500 pointer-events-none opacity-20  bg-gradient-to-t from-orange-500 to black"></div>
      <img
        className=" z-9 absolute bottom-0/4 object-cover w-full pointer-events-none opacity-2"
        src="https://i.ibb.co.com/39712y3y/pngegg-1.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
