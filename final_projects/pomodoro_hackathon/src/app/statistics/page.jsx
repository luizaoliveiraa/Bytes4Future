"use client";
import ProgressGraph from "@/components/progress/Progress";
import React from "react";
import styles from "./statistics.module.css";
import Calendar from "@/components/calendar/Calendar";

function Statistics() {
  return (
    <div className="pt-24 pb-10">
      <h1 className="text-3xl text-center uppercase font-bold text-white ">
        Pomodoro
      </h1>
      <p className="mt-8 ml-10 text-1xl text-start font-bold text-white ">
        Statistics
      </p>
      <Calendar />
    </div>
  );
}

export default Statistics;
