"use client";
import { useState, useEffect } from "react";
import ProgressGraph from "../progress/Progress";

function Calendar() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setDays(daysArray);
  }, [currentMonth, currentYear]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex flex-col justify-center items-center m-10 ">
      <div className="flex justify-between mb-4 gap-4"></div>
      <div className="flex justify-center mb-4 gap-10">
        <p className=" font-bold text-white text-start flex gap-10">
          <button
            className="bg-[#BA3D36] rounded-full w-6"
            onClick={handlePreviousMonth}
          >
            {`<`}
          </button>
          {monthNames[currentMonth]} {currentYear}{" "}
          <button
            className="bg-[#BA3D36] rounded-full w-6 "
            onClick={handleNextMonth}
          >
            {`>`}
          </button>
        </p>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className={`bg-transparent p-1 text-gray-300 rounded shadow-md ${
              selectedDay === day ? "bg-gray-400 text-[#BA3D36] font-bold" : "text-gray-400"
            }`}
            onClick={() => handleDayClick(day)}
          >
            <p className="text-lg ">{day}</p>
          </div>
        ))}
      </div>
      <ProgressGraph
        selectedDay={selectedDay}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />
    </div>
  );
}

export default Calendar;
