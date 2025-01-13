import ConfettiComponent from "../../components/Confetti";
import { motion } from "motion/react"
import "./Awards.css"

const Awards = () => {
  const awards = ["A", "w", "a", "r", "d", "s"]
  return ( 
    <div className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto">

      <div className="awards-text flex justify-center">
        {awards.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ y: -1500/(index+1) }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            className="font-bold text-7xl"
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ width: "0" }}
        animate={{ width: "260px" }}
        transition={{ delay: 1.5 }}
        className="bg-white h-[2px]"
      />

      <div className="pool text-7xl text-center">
        <motion.div
          initial={{}}
          animate={{}}
          transition={{}}
          className="text-transparent text-stroke-white animate-text-fill bg-clip-text bg-gradient-to-b from-white to-white text-7xl font-bold bg-no-repeat"
        >
          Prize Pool
        </motion.div>

        <motion.div>
          ₹ 2,50,000+
        </motion.div>
      </div>
      
      <ConfettiComponent />
    </div>
  );
}
 
export default Awards;