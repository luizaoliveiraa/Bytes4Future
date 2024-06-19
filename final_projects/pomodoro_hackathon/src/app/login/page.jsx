"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";
import SignUp from "../../components/signup/SignUp"; // Certifique-se de ter um componente SignUp

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [openTab, setOpenTab] = useState(1); // Estado para controlar as abas

  const handleClick = (tabIndex) => {
    setOpenTab(tabIndex);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "tomateemitaliano@gmail.com" && password === "pomodoro") {
      // Login successful
      router.push("/tasks");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className="text-center mt-24">
        <h1 className="text-3xl text-center uppercase font-bold text-white">
          Pomodoro
        </h1>

        <div className="p-8">
          <div className="max-w-md mx-auto">
            <div className="mb-4 flex space-x-4 p-2 bg-transparent rounded-lg">
              <div
                className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                  openTab === 1
                    ? "bg-transparent text-[#BA3D36] font-bold cursor-pointer"
                    : "cursor-pointer text-gray-400"
                }`}
                onClick={() => handleClick(1)}
              >
                Login
              </div>
              <div
                className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                  openTab === 2
                    ? "bg-transparent text-[#BA3D36] font-bold cursor-pointer"
                    : "cursor-pointer text-gray-400"
                }`}
                onClick={() => handleClick(2)}
              >
                Sign Up
              </div>
            </div>

            {openTab === 1 && (
              <div className="transition-all duration-300 bg-transparent p-4 rounded-lg">
                <p className="mt-2 text-center text-1xl font-bold text-white uppercase">
                  Sign in to your account
                </p>
                <form onSubmit={handleSubmit} className="w-full mx-auto">
                  <label className="input input-bordered flex items-center gap-2 rounded-full border-1 border-[#BA3D36] mt-10 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70 text-gray-400"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      className="grow text-gray-400"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>

                  <label className="input input-bordered flex items-center gap-2 rounded-full border-1 border-[#F47501] mt-10 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      placeholder="Password "
                      type="password"
                      className="grow text-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <Link href="/tasks">
                    <button
                      type="submit"
                      className="rounded-full w-24 p-2 text-white bg-[#D34840] mt-10"
                    >
                      Login
                    </button>
                  </Link>
                </form>
              </div>
            )}

            {openTab === 2 && (
              <div className="transition-all duration-300 bg-transparent p-4 rounded-lg">
                <h2 className="mt-2 text-center text-1xl font-bold text-white uppercase">
                  Create an account
                </h2>
                <SignUp />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
