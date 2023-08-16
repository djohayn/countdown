"use client";

import { Roboto_Mono, Inter } from "next/font/google";
import Image from "next/image";
import SVG from "react-inlinesvg";

const mono = Roboto_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const animate = () => {
  return (
    <div
      className={`flex flex-col w-full h-screen bg-gradient-to-br from-emerald-300 to-pink-400 items-center justify-center p-8 z-10 ${inter.className}`}
    >
      <div className="z-30 flex flex-col items-center justify-center p-24 bg-gradient-to-br to-blue-300/20 from-purple-400/10 bg-opacity-40 rounded-3xl drop-shadow-xl hover:scale-105 transition-all hover:drop-shadow-2xl hover:shadow-rose-700">
        <div className="flex flex-col items-center text-center">
          <Image
            width={190}
            height={190}
            src={"/1.png"}
            alt="fridge"
            className="-rotate-6 hover:-rotate-12 transition-all"
          />

          <h1 className="text-3xl font-normal text-center text-[#f6f7f9] pt-4">
            I think
          </h1>
          <h1 className="text-6xl font-medium text-center my-9 text-[#f6f7f9] flex justify-center items-center gap-4">
            We can animate things
          </h1>
          <h2 className="text-2xl text-[#f6f7f9] text-center">- - -</h2>
        </div>
        <h4 className="text-lg mt-12 text-[#f6f7f9] italic text-center font-normal">
          if we try 〠
        </h4>
      </div>
    </div>
  );
};

export default animate;
