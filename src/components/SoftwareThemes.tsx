import { FolderCode, TabletSmartphone, ChartSpline, Layers, Rocket, LucideIcon } from "lucide-react";
import { S_Tracks } from "../data/SoftwareTracks";
import { useState } from "react";

interface Track {
  icon: "FolderCode" | "TabletSmartphone" | "ChartSpline" | "Layers" | "Rocket";
  title: string;
  description: string;
  objective: string;
  techStack: string[];
  challengeIdeas: string[];
}

const iconMap: Record<Track["icon"], LucideIcon> = {
  FolderCode,
  TabletSmartphone,
  ChartSpline,
  Layers,
  Rocket
};

const SoftwareThemes = () => {
  const [expanded, setExpanded] = useState<boolean[]>(Array(S_Tracks.length).fill(false));

  const toggleDetails = (index: number): void => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full md:w-2/5">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Software based<br /> Themes
      </h2>
      {S_Tracks.map((track, index) => {
        const Icon = iconMap[track.icon];

        return (
          <div
            key={index}
            className="transform transition-transform duration-500"
            style={{
              transform: `translateX(${index % 2 === 0 ? '100%' : '-100%'})`,
              animation: `slideIn 0.5s ease-out ${index * 0.1}s forwards`,
            }}
          >
            <section
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 w-full m-4 relative overflow-hidden transition-all duration-500 ease-in-out ${
                expanded[index] ? 'min-h-[600px]' : 'h-64'
              }`}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-2">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold ml-2">{track.title}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-400">{track.description}</p>
                </div>

                <div
                  className="transition-all duration-500 ease-in-out overflow-hidden flex-grow"
                  style={{ 
                    maxHeight: expanded[index] ? '2000px' : '0',
                    opacity: expanded[index] ? 1 : 0
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 leading-tight">
                        <strong>Objective:</strong> {track.objective}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 leading-tight font-semibold">
                        Technology Stack:
                      </p>
                      <ul className="text-gray-400 list-disc pl-6 mt-1">
                        {track.techStack.map((tech, idx) => (
                          <li key={`tech-${idx}`} className="leading-tight">{tech}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-400 leading-tight font-semibold">
                        Challenge Ideas:
                      </p>
                      <ul className="text-gray-400 list-disc pl-6 mt-1">
                        {track.challengeIdeas.map((idea, idx) => (
                          <li key={`challenge-${idx}`} className="leading-tight">{idea}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  className="text-blue-500 hover:text-blue-600 underline focus:outline-none mt-4"
                  onClick={() => toggleDetails(index)}
                >
                  {expanded[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            </section>
          </div>
        );
      })}
      
      <style>{`
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SoftwareThemes;