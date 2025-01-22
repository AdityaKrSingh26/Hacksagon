import  { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa6";
import ConfettiComponent from "../../components/Confetti";
import { Prizes } from "../../data/Prizes";
import "./Awards.css";

const Awards = () => {
  const prize = "₹2,50,000".split("");
  const textRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const length = textElement.getComputedTextLength();
      textElement.style.strokeDasharray = `${length} ${length}`;
      textElement.style.strokeDashoffset = `${length}`;

      textElement.animate([
        { strokeDashoffset: length },
        { strokeDashoffset: 0 }
      ], {
        duration: 2000,
        fill: 'forwards',
        delay: 2000
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full px-2 md:px-4 mx-auto overflow-hidden">
      <div className="awards-text flex flex-wrap justify-center max-w-full px-2 font-bold text-3xl sm:text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent">
        Prizes & Rewards
      </div>

      <div className="pool text-4xl md:text-7xl text-center rounded-md w-full m-2 md:m-4 p-2 md:p-4 min-h-[24rem] flex flex-col justify-evenly">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute animate-float text-white hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1,
            }}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: i / 2, duration: 1 }}
          >
            <FaTrophy />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-transparent text-stroke-white bg-bottom animate-text-fill bg-clip-text bg-gradient-to-b mb-4 from-white to-white text-5xl md:text-8xl font-bold bg-no-repeat flex justify-center items-center"
        >
          <svg 
            className="w-full h-20 md:h-32 flex justify-center items-center"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              ref={textRef}
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-bold font-prizes text-6xl md:text-8xl"
              style={{
                fill: 'none',
                stroke: 'white',
                strokeWidth: 2,
                strokeDasharray: '300',
                strokeDashoffset: '300',
              }}
            >
              Prize Pool
            </text>
          </svg>
        </motion.div>

        <div className="flex mx-auto justify-center text-white text-5xl md:text-8xl flex-wrap font-bold">
          {prize.map((char, index) => (
            <motion.div
              key={index}
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              transition={{ delay: index / prize.length + 1.5, duration: 1 }}
            >
              {char}
            </motion.div>
          ))}

          <motion.div
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
            className="ml-2"
          >
            +
          </motion.div>
        </div>
      </div>

      <div className="w-full border"/>

      <div className="mx-auto w-4/5 md:w-1/2 my-12 flex flex-col gap-4">
        {Prizes.map((prize, index) => (
          <div key={index} className="border border-white rounded-md flex p-2 gap-8">
            <div className="mr-2">
              <img src="/Images/trophy.webp" alt="" />
            </div>
            <div className="w-full">
              <p className="font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-[#32CD32]">{prize.title}</p>
              <p>- {prize.description}</p>
              {prize.cashPrize != "" && <p>- The winning team will receive a cash prize of {prize.cashPrize}</p>}
            </div>
          </div>
        ))}
      </div>

      <ConfettiComponent />
    </div>
  );
};

export default Awards;