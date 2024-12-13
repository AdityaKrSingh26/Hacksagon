import SoftwareThemes from "../../components/SoftwareThemes";
import HardwareThemes from "../../components/HardwareThemes";

const Themes = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden p-8 justify-evenly">
      <SoftwareThemes />
      <HardwareThemes />
    </div>
  );
};

export default Themes;
