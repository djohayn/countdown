import { Roboto_Mono } from "next/font/google";
import Countdown, { CountdownTimeDelta } from "react-countdown";
import { differenceInMilliseconds } from "date-fns";
import useSound from "use-sound";
import Link from "next/link";

const mono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  const [zero] = useSound("/0.mp3");
  const [fifteen] = useSound("/15.mp3");
  const [thirty] = useSound("/30.mp3");
  const [fourtyfive] = useSound("/45.mp3");
  const [goodGracious] = useSound("/good-gracious.mp3");

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-t from-amber-100 to-indigo-50 items-center justify-center p-8 z-10">
      <div
        className="absolute lg:top lg:right-12 lg:bottom-12 lg:left-12 top-2 left-2 right-2 bottom-2 bg-gradient-to-br from-lime-400 to-pink-200 opacity-20 animate-pulse z-20 rounded-2xl"
        style={{ animationDuration: "3s" }}
      />
      <div className="z-30 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <span
            className="lg:text-9xl text-6xl my-12 animate-spin text-amber-500"
            style={{ animationDuration: "60s" }}
          >
            🌞
          </span>
          <h1 className="text-4xl font-bold text-center text-lime-500">
            Good news for
          </h1>
          <Link href="/uniscale">About Us</Link>
          <h1 className="text-6xl font-bold text-center my-9 text-lime-600">
            Simon and Alexander
          </h1>
          <h2 className="text-2xl text-orange-700 text-center">
            only this long until summer holidays 👇
          </h2>
        </div>
        <Countdown
          className={`text-5xl lg:text-9xl font-bold text-orange-600 my-24 ${mono.className}`}
          date={
            Date.now() +
            Math.abs(
              differenceInMilliseconds(
                new Date("July 14 2024 16:00"),
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
