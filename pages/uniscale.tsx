"use client";

import { Roboto_Mono, Inter } from "next/font/google";
import Countdown, {
  CountdownRenderProps,
  CountdownTimeDelta,
} from "react-countdown";
import { differenceInMilliseconds } from "date-fns";
import useSound from "use-sound";
import SVG from "react-inlinesvg";

const mono = Roboto_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const mini = (number: any, text: string) => {
  <div
    className={`text-center text-4xl lg:text-8xl flex flex-col items-center ${mono.className}`}
  >
    {number} <span className="text-2xl">{text}</span>
  </div>;
};

const uniscale = () => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>You are good to go!</span>;
    } else {
      return (
        <div className={`font-medium text-[#f6f7f9] my-10 max-w-5xl`}>
          <div className="2xl:flex hidden">
            <div
              className={`text-4xl lg:text-8xl flex flex-col items-center ${mono.className} mx-8`}
            >
              {days} <span className={`text-2xl ${inter.className}`}>days</span>
            </div>
            <div
              className={`text-4xl lg:text-8xl flex flex-col items-center ${mono.className} mx-8`}
            >
              {hours} <span className="text-2xl">hours</span>
            </div>
            <div
              className={`text-4xl lg:text-8xl flex flex-col items-center ${mono.className} mx-8`}
            >
              {minutes} <span className="text-2xl">minutes</span>
            </div>
            <div
              className={`text-4xl lg:text-8xl flex flex-col items-center ${mono.className} mx-8 min-w-[120px]`}
            >
              {seconds} <span className="text-2xl">seconds</span>
            </div>
          </div>
          <div
            className={`font-medium text-[#f6f7f9] my-10 ${mono.className} 2xl:hidden flex flex-col 2xl:flex-row max-w-5xl 2xl:items-baseline`}
          >
            <div className="text-center text-4xl lg:text-6xl">
              {days} <span className="text-3xl">days</span>
            </div>
            <div className="text-center text-4xl lg:text-6xl my-6">
              {hours} <span className="text-3xl">hours</span>
            </div>
            <div className="text-center text-2xl lg:text-5xl">
              {minutes} <span className="text-2xl">minutes</span> {seconds}{" "}
              <span className="text-2xl">seconds</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`flex flex-col w-full h-screen bg-gradient-to-br from-[#3a2acb] to-[#0e0a33] items-center justify-center p-8 z-10 ${inter.className}`}
    >
      <div className="z-30 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <span className="my-12 w-24 h-24 rounded shadow-lg bg-gradient-to-l from-[#2b1f98] to-[#0e0a33] flex items-center justify-center">
            <SVG src={"/us-logo-small.svg"} width={48} height={48} />
            {/* <img src="/uniscale.png" alt="uniscale" /> */}
          </span>
          <h1 className="text-3xl font-normal text-center text-[#f6f7f9]">
            Launching
          </h1>
          <h1 className="text-6xl font-medium text-center my-9 text-[#f6f7f9] flex justify-center items-center gap-4">
            <SVG src={"/us-logo.svg"} width="100%" height={50} />
            CoLab
          </h1>
          <h2 className="text-2xl text-[#f6f7f9] text-center">in</h2>
        </div>
        <Countdown
          renderer={(e) => renderer(e)}
          date={
            Date.now() +
            Math.abs(
              differenceInMilliseconds(
                new Date("September 15 2023 00:00"),
                Date.now()
              )
            )
          }
        />
        <h4 className="text-lg mt-12 text-[#f6f7f9] italic text-center font-normal">
          Design - align - collaborate
        </h4>
      </div>
    </div>
  );
};

export default uniscale;
