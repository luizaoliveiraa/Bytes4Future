"use client";

import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";
import { FaPause } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { TodoList } from "../task/Task";
import { FaBookOpen } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
// import tasks from "@/app/tasks/page";

const tasks = [
  { icon: FaBookOpen, text: "Read", color: "bg-[#BA3D36]" },
  { icon: MdWork, text: "Work", color: "bg-[#D34840]" },
  { icon: FaBook, text: "Study", color: "bg-[#F47501]" },
  { icon: GiMuscleUp, text: "Fitness", color: "bg-[#D98E1E]" },
  { icon: FaMoon, text: "Focus", color: "bg-[#258239]" },
];

const TimerComponent = () => {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes
  const [intervalId, setIntervalId] = useState(null);
  const [status, setStatus] = useState("stopped");
  const [editable, setEditable] = useState(false); // new state to make timer editable
  const [inputValue, setInputValue] = useState("25:00"); // input value for editable timer

  useEffect(() => {
    if (timer === 0 && status === "started") {
      setTimer(5 * 60); // reset to 5 minutes
    }
  }, [timer, status]);

  const startTimer = () => {
    if (status === "stopped" || status === "paused") {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      setIntervalId(id);
      setStatus("started");
    }
  };

  const pauseTimer = () => {
    if (status === "started") {
      clearInterval(intervalId);
      setIntervalId(null);
      setStatus("paused");
    }
  };

  const resetTimer = () => {
    if (status === "started" || status === "paused") {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimer(25 * 60); // reset to 25 minutes
      setStatus("stopped");
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const [minutes, seconds] = inputValue.split(":");
    setTimer(parseInt(minutes) * 60 + parseInt(seconds));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className={styles.tomato}></div>
      {editable ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
      ) : (
        <p className={styles.timer}>{formatTime(timer)}</p>
      )}
      <div className="flex gap-4 mt-4">
        <button className={styles.reset} onClick={resetTimer}>
          <GrPowerReset className="text-2xl text-gray-400" />
        </button>
        <button className={styles.start} onClick={startTimer}>
          <FaPlay className="text-2xl text-gray-400" />
        </button>
        <button className={styles.pause} onClick={pauseTimer}>
          <FaPause className="text-2xl text-gray-400" />
        </button>
        <button className={styles.edit} onClick={() => setEditable(!editable)}>
          {editable ? (
            <FaCheck className="text-2xl text-gray-400" />
          ) : (
            <MdEdit className="text-2xl text-gray-400" />
          )}
        </button>
      </div>
      <TodoList tasks={tasks} className="text-gray-400"/>
    </div>
  );
};

export default TimerComponent;