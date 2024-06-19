import React from "react";
import Image from "next/image";
export default function about() {
  return (
    <div className="pt-24 pb-10 h-100%">
      <h1 className="text-3xl text-center uppercase font-bold text-white ">
        Pomodoro
      </h1>

      <h2 className="text-lg text-center mt-10 text-white font-bold">
        What is the Pomodoro Technique?
      </h2>
      <p className="text-base px-6 text-start mt-2 text-[#DADADA] ">
        The Pomodoro Technique, developed by Francesco Cirillo in the late
        1980s, is a time management method that revolutionizes the way you work.
        By dividing your tasks into focused intervals, called Pomodoros, and
        interspersing them with short breaks, you can maintain high levels of
        concentration and achieve more in less time.
      </p>
      <Image
        src="/tomate-vermelho.png"
        alt="Tomato Icon"
        width={100}
        height={100}
        className="absolute top-[400px] right-0 -rotate-45 "
      />
      <h2 className="text-lg text-start ml-5 mt-10 text-white font-bold">
        How it works:
      </h2>
      <div className="text-base px-6 text-start mt-2 text-[#DADADA] ">
        <p className="mb-3">
          <span className="font-bold text-[#BA3D36]">Choose a Task:</span>{" "}
          Select the task you want to focus on. It can be any project or
          activity that requires your attention.
        </p>{" "}
        <p className="mb-3">
          <span className="font-bold text-[#D34840]">Set a Timer:</span> Use our
          app to set a timer for 25 minutes, the traditional Pomodoro duration.
        </p>
        <p className="mb-3">
          <span className="font-bold text-[#F47501]">Work Intensely:</span>{" "}
          Focus solely on your task for the entire 25 minutes. Avoid any
          distractions or interruptions.
        </p>{" "}
        <p className="mb-3">
          <span className="font-bold text-[#D98E1E]">Take a Short Break:</span>{" "}
          When the timer rings, take a 5-minute break to relax and recharge.
        </p>{" "}
        <p className="mb-10">
          <span className="font-bold text-[#258239]">Repeat the Cycle: </span>
          After completing four Pomodoros, take a longer break of 15-30 minutes
          to rest deeply and prepare for the next round of work.
        </p>
        <Image
          src="/tomate-verde.png"
          alt="Tomato Icon"
          width={100}
          height={100}
          className="absolute top-[910px] left-0 -ml-10 -rotate-45 mt-3 "
        />
      </div>
    </div>
  );
}
