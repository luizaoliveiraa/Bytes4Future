"use client"
import TimerComponent from "@/components/timer/Timer";
import styles from "./home.module.css"
import React, { useState, useEffect } from 'react';

const home = () => {
  const [showToDoList, setShowToDoList] = useState(true);
  const [showFinalPhrase, setShowFinalPhrase] = useState(false);
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimerCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (timerCount >= 4 && showToDoList) {
      setShowToDoList(false);
      setShowFinalPhrase(true);
    } else if (timerCount % 2 === 0 && showToDoList) {
      setShowToDoList(false);
    } else if (timerCount % 2 === 1 && !showToDoList) {
      setShowToDoList(true);
    }
  }, [timerCount, showToDoList]);

  return (
    <div>
      <div className={styles.upDiv}>
        <h1 className={styles.pomodoro}>Pomodoro</h1>
      </div>
      {/* {showToDoList && <ToDoList />}
      {!showToDoList && !showFinalPhrase && <Frases />}
      {showFinalPhrase && <FraseFinal />} */}
      <TimerComponent />
    </div>
  );
}


export default home;
