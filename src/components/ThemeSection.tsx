import { Link } from 'react-router-dom';
import { ElementType } from 'react';
import { S_Tracks } from '../data/SoftwareTracks';
import { H_Tracks } from '../data/HardwareTracks';
import { FolderCode, TabletSmartphone, ChartSpline, Layers, Rocket, UtilityPole, HeartPulse, ShieldCheck, TriangleAlert, House } from "lucide-react";

export function ThemeSection() {
  return (
    <div className="px-6 py-10 bg-black/20">
      <h2 className="text-4xl font-bold mb-4 text-center">Themes</h2>
      <div className="flex flex-wrap justify-center">
        {S_Tracks.map((track, index) => {
          const IconComponent: ElementType = {
            FolderCode,
            TabletSmartphone,
            ChartSpline,
            Layers,
            Rocket,
          }[track.icon] || FolderCode;

          return (
            <Link
              to={`/themes#${index}`}
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 m-2 flex items-center transition-colors"
            >
              <IconComponent className="mr-2" />
              <h3 className="text-xl font-semibold">{track.title}</h3>
            </Link>
          )
        })}
      </div>

      <div className="flex flex-wrap justify-center">
        {H_Tracks.map((track, index) => {
          const IconComponent: ElementType = {
            UtilityPole,
            HeartPulse,
            ShieldCheck,
            TriangleAlert,
            House,
          }[track.icon] || UtilityPole;

          return (
            <Link
              to={`/themes#${index}`}
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 m-2 flex items-center transition-colors"
            >
              <IconComponent className="mr-2" />
              <h3 className="text-xl font-semibold">{track.title}</h3>
            </Link>
          )
        })}
      </div>
      <Link to="/themes"><h3 className="text-center opacity-60 text-md mt-3">See details</h3></Link>
    </div>
  );
}
