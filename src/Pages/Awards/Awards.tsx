import ConfettiComponent from "../../components/Confetti";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa6";
import "./Awards.css";

const Awards = () => {
  const prize = "₹2,50,000".split("");
  const awards = "Prizes & Rewards".split("");
  const textRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const length = textElement.getComputedTextLength();
      textElement.style.strokeDasharray = `${length} ${length}`;
      textElement.style.strokeDashoffset = `${length}`;

      // Animate strokeDashoffset
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
    <div className="flex flex-col justify-center items-center w-full px-4 mx-auto">
      <div className="awards-text flex justify-center">
        {awards.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ y: -1500 / (index + 1) }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            className="font-bold text-7xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        ))}
      </div>

      <div className="pool text-7xl text-center bg-opacity-25 rounded-md w-full m-4 p-4 h-96 flex flex-col justify-evenly bg-white relative">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute animate-float text-white"
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
          className="text-transparent text-stroke-white bg-bottom animate-text-fill bg-clip-text bg-gradient-to-b mb-8 from-white to-white text-7xl font-bold bg-no-repeat flex justify-center items-center"
        >
          <svg 
            className="w-full h-24 flex justify-center items-center"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              ref={textRef}
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-bold text-7xl"
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

        <div className="flex mx-auto justify-center text-white text-6xl">
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
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 1 }}
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
