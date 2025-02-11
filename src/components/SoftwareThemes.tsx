import { FolderCode, TabletSmartphone, ChartSpline, Layers, Rocket } from "lucide-react";
import { S_Tracks } from "../data/SoftwareTracks";
import { ElementType } from "react";
import { useState } from "react";
import { motion } from "motion/react";

const SoftwareThemes = () => {
  const [expanded, setExpanded] = useState(Array(S_Tracks.length).fill(false));

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
        Software based <br /> Themes
      </h2>
      {S_Tracks.map((track, index) => {
        const IconComponent: ElementType = {
          FolderCode,
          TabletSmartphone,
          ChartSpline,
          Layers,
          Rocket,
        }[track.icon] || FolderCode;

        return (
          <motion.div
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
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 w-full m-4 flex flex-col transition-all duration-500
                ${expanded[index] ? "h-auto" : "h-52 md:h-40"}  
              `}
            >
              <div className="flex items-center">
                <IconComponent />
                <h3 className="text-xl font-semibold ml-2">{track.title}</h3>
              </div>
              <p className="text-gray-400">{track.description}</p>
              <div
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{ maxHeight: expanded[index] ? "2000px" : "0" }}
              >
                <p className="text-gray-400 mt-2 leading-tight">
                  <strong>Objective:</strong> {track.objective}
                </p>
                <p className="text-gray-400 mt-2 leading-tight">
                  <strong>Technology Stack:</strong>
                </p>
                <ul className="text-gray-400 list-disc pl-6 mt-1">
                  {track.techStack.map((tech, idx) => (
                    <li key={`tech-${idx}`}>{tech}</li>
                  ))}
                </ul>
                <p className="text-gray-400 mt-2 leading-tight">
                  <strong>Challenge Ideas:</strong>
                </p>
                <ul className="text-gray-400 list-disc pl-6 mt-1">
                  {track.challengeIdeas.map((idea, idx) => (
                    <li key={`challenge-${idx}`}>{idea}</li>
                  ))}
                </ul>
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

export default SoftwareThemes;
