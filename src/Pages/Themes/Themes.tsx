import SoftwareThemes from "../../components/SoftwareThemes";
import HardwareThemes from "../../components/HardwareThemes";

// import Commingsoon from "../../components/Commingsoon";

const Themes = () => {
  return (
    <div>
      {/* <Commingsoon /> */}
      <div className="flex flex-col md:flex-row overflow-hidden p-8 justify-evenly">
        <SoftwareThemes />
        <HardwareThemes />
      </div>
      <div className="w-2/5 mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 text-xl mb-10">
        <strong>Note: </strong> Please note that the technology stacks and challenge ideas mentioned are not mandatory; they are intended to provide an overview, guide participants in their project development, and inspire their work.
      </div>
    </div>
  );
};

export default Themes;
