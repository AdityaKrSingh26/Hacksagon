import  { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa6";
import ConfettiComponent from "../../components/Confetti";
import "./Awards.css";

const Awards = () => {
  const prize = "₹2,50,000".split("");
  const textRef = useRef<SVGTextElement | null>(null);
  const awards = "Prizes & Rewards".split("");

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
      <div className="awards-text flex flex-wrap justify-center max-w-full px-2">
        {awards.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ y: -1500 / (index + 1) }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            className="font-bold text-3xl sm:text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 whitespace-pre"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        ))}
      </div>

      <div className="pool text-4xl md:text-7xl text-center bg-opacity-25 rounded-md w-full m-2 md:m-4 p-2 md:p-4 min-h-[24rem] flex flex-col justify-evenly bg-white relative">
        {[...Array(6)].map((_, i) => (
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
          className="text-transparent text-stroke-white bg-bottom animate-text-fill bg-clip-text bg-gradient-to-b mb-4 md:mb-8 from-white to-white text-5xl md:text-8xl font-bold bg-no-repeat flex justify-center items-center"
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
              className="font-bold text-6xl md:text-8xl"
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

        <div className="flex mx-auto justify-center text-white text-5xl md:text-7xl flex-wrap font-bold">
          {prize.map((char, index) => (
            <motion.div
              key={index}
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              transition={{ delay: index / prize.length + 2, duration: 1 }}
            >
              {char}
            </motion.div>
          ))}

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="ml-2"
          >
            +
          </motion.div>
        </div>
      </div>

      <ConfettiComponent />
    </div>
  );
};

export default Awards;