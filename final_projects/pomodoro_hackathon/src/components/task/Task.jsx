"use client";

import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";

function TaskSelector({ onSelect, tasks }) {
  const handleSelect = (task) => {
    onSelect(task, true);
  };

  return (
    <div className="flex flex-col gap-5">
      {tasks.map((item, index) => (
        <div
          key={index}
          className={`w-80 h-12 rounded-full flex items-left gap-4 text-white ${item.color}`}
          onClick={() => handleSelect(item)}
        >
          <div className="w-28 h-18 mr-4 rounded-full flex items-center justify-center font-bold text-white">
            <item.icon className="mr-4" />
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function TodoList({ tasks }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2 text-gray-400">Todo List:</h2>
      <ul className="list-none mb-0">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-left py-2 pl-3 pr-4 text-gray-700 border-b border-gray-200 "
          >
            <p className="text-sm">{task.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ onSetTasks }) {
  const [todoList, setTodoList] = useState([]);

  const handleSelect = (task, isSelected) => {
    setTodoList((prevList) => [...prevList, task]);
  };

  const handleClear = () => {
    setTodoList([]);
  };

  // const handleSet = () => {
  //   onSetTasks(todoList);
  // };

  const tasks = [
    { icon: FaBookOpen, text: "Read", color: "bg-[#BA3D36]" },
    { icon: MdWork, text: "Work", color: "bg-[#D34840]" },
    { icon: FaBook, text: "Study", color: "bg-[#F47501]" },
    { icon: GiMuscleUp, text: "Fitness", color: "bg-[#D98E1E]" },
    { icon: FaMoon, text: "Focus", color: "bg-[#258239]" },
  ];

  return (
    <div >
      <TaskSelector onSelect={handleSelect} tasks={tasks}  />
      <TodoList tasks={todoList} className="text-gray-400" />
      <div className="flex gap-4 justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClear}
        >
          Clear
        </button>
        <Link href="/">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={handleSet}
          >
            Set
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Task;
export { TaskSelector, TodoList };
