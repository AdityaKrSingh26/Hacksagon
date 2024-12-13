import { UtilityPole, HeartPulse, ShieldCheck, TriangleAlert, House } from "lucide-react";
import { H_Tracks } from "../data/HardwareTracks";
import { ElementType } from "react";
import { useState } from "react";
import { motion } from "motion/react";

const HardwareThemes = () => {
  const [expanded, setExpanded] = useState(Array(H_Tracks.length).fill(false));

  const toggleDetails = (index: number) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full md:w-2/5">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Hardware & Software <br /> based Themes
      </h2>
      {H_Tracks.map((track, index) => {
        const IconComponent: ElementType = {
          UtilityPole,
          HeartPulse,
          ShieldCheck,
          TriangleAlert,
          House,
        }[track.icon] || UtilityPole;

        return (
          <motion.div
            className="w-full"
            key={index}
            initial={{ x: index % 2 === 0 ? 1000 : -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
          >
            <section
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 w-full m-4 flex flex-col transition-all duration-500 ${
                expanded[index] ? "h-auto" : "h-40"
              }`}
            >
              <div className="flex items-center">
                <IconComponent />
                <h3 className="text-xl font-semibold ml-2">{track.title}</h3>
              </div>
              <p className="text-gray-400">{track.description}</p>
              <div
                className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
                style={{ maxHeight: expanded[index] ? "200px" : "0" }}
              >
                <p className="text-gray-400 mt-2">{track.details}</p>
              </div>
              <button
                className="text-blue-500 mt-2 underline"
                onClick={() => toggleDetails(index)}
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </section>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HardwareThemes;
