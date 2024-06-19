"use client";
import React, { useState } from "react";
import Task from "../../components/task/Task";

export default function tasks() {
  return (
    <div className="container flex flex-col  align-middle items-middle pt-24  ">
      <div className="text-center ">
        <h1 className="text-3xl text-center uppercase font-bold text-white ">
          Pomodoro
        </h1>
        <p className="text-lg text-center mt-20  font-bold text-white">
          {" "}
          Choose Your Tasks
        </p>
      </div>
      <div className="text-center place-content-center flex  mt-8 cursor-pointer">
        <Task />
      </div>
    </div>
  );
}
