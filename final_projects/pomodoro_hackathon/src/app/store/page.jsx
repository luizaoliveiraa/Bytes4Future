import React from "react";
import Image from "next/image";
import styles from "./store.module.css";

export default function store() {
  return (
    <div className="container flex flex-col  align-middle items-middle pt-24">
       <h1 className="text-3xl text-center uppercase font-bold text-white ">
        Pomodoro
      </h1>

      <div className={styles.upDiv}>
        <p className={styles.title}> Your Veggies</p>
        <p className={styles.description}> Earn new veggies by achieving goals with your progress!</p>
      </div>
      <div>
        <div className={styles.divBadge}>
          <div className={styles.badges}>
            <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/1.png"
                alt="vegetable"
                width={80}
                height={50}
                className={styles.bronze}
              />
               <p className={styles.hs}>8h</p>
               <button className={styles.aqBt}>Acquire</button>
            </div>
            <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/2.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>12h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
            <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/3.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>24h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           
        
        
        </div>
        <div className={styles.divBadge}>
          <div className={styles.badges}>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/4.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>50h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/5.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>75h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/6.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>100h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           
            
          
          </div>
        </div>
        <div className={styles.divBadge}>
          <div className={styles.badges}>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/7.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>120h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/8.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>150h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           <div className="bg-gray-400 flex flex-col justify-center align-middle text-center gap-1 p-2 rounded-lg">
              <Image
                src="/store/9.png"
                alt="vegetable"
                width={100}
                height={50}
                className={styles.prata}
              />
           <p className={styles.hs}>200h</p>
               <button className={styles.aqBt}>Acquire</button>

            </div>
           
            
          
          </div>
        </div>
        
      </div>
    </div>
    </div>
    
  );
}
