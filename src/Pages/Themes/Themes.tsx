import SoftwareThemes from "../../components/SoftwareThemes";
import HardwareThemes from "../../components/HardwareThemes";
import { Link } from "react-router-dom";

// import Commingsoon from "../../components/Commingsoon";

const Themes = () => {
  return (
    <div>
      {/* <Commingsoon /> */}
      <div className="flex flex-col md:flex-row overflow-hidden p-8 justify-evenly">
        <SoftwareThemes />
        <HardwareThemes />
      </div>
      <div className="w-[80%] md:w-[65%] flex flex-col mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 text-xl">
        <strong>Note: </strong> Please note that the technology stacks and challenge ideas mentioned are not mandatory; they are intended to provide an overview, guide participants in their project development, and inspire their work.
        <br />
        <Link to="https://bit.ly/hacksagon-template" className="mx-auto rounded-full p-3 bg-purple-500 hover:bg-purple-600 px-6 py-2  font-semibold transition-colors ">PPT Template</Link>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Themes;
