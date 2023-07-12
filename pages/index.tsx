import { Inter } from "next/font/google";
import Countdown from "react-countdown";
import { addDays, differenceInMilliseconds } from "date-fns";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-t from-amber-100 to-indigo-50 items-center justify-center gap-16 p-8">
      <div className="flex flex-col gap-4 items-center text-center">
        <span
          className="lg:text-9xl text-6xl mb-4"
          style={{ animation: "spin 60s linear" }}
        >
          🌞
        </span>
        <h1 className="text-2xl font-bold">
          Hello{" "}
          <i>
            <u>Simon</u>
          </i>{" "}
          and{" "}
          <i>
            <u>Alexander</u>
          </i>
        </h1>
        <h2 className="text-lg">
          This is how long you have until summer holidays
        </h2>
      </div>
      <Countdown
        className="text-5xl lg:text-9xl font-bold animate-bounce text-orange-600 transition-all mt-8"
        date={
          Date.now() +
          Math.abs(
            differenceInMilliseconds(new Date("July 14 2023 16:00"), Date.now())
          )
        }
      />
    </div>
  );
}
