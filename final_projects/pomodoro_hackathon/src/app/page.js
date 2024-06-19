import Image from "next/image";
import TimerComponent from "../components/timer/Timer";

export default function Home() {
  return (
    <main className="pt-24 ">
      <h1 className="text-3xl text-center uppercase font-bold text-white ">
        Pomodoro
      </h1>
      <TimerComponent />
    </main>
  );
}
