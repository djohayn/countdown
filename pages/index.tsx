import { Roboto_Mono } from "next/font/google";
import Countdown from "react-countdown";
import { differenceInMilliseconds } from "date-fns";

const mono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-t from-amber-100 to-indigo-50 items-center justify-center p-8 z-10">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-lime-400 to-pink-200 bg-opacity-20 animate-pulse z-20"
        style={{ animationDuration: "3s" }}
      />
      <div className="z-30 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <span
            className="lg:text-9xl text-6xl my-12 animate-spin"
            style={{ animationDuration: "60s" }}
          >
            🌞
          </span>
          <h1 className="text-5xl font-bold text-center my-4">
            Hello Simon and Alexander
          </h1>
          <h2 className="text-2xl text-orange-700 text-center">
            This long until summer holidays for you two
          </h2>
        </div>
        <Countdown
          className={`text-5xl lg:text-9xl font-bold text-orange-600 my-24 ${mono.className}`}
          date={
            Date.now() +
            Math.abs(
              differenceInMilliseconds(
                new Date("July 14 2023 16:00"),
                Date.now()
              )
            )
          }
        />
        <h4 className="text-2xl text-orange-700 italic text-center">
          See you in three weeks. Enjoy 🌴
        </h4>
      </div>
    </div>
  );
}
