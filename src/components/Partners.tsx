import { TechnicalPartners } from "../data/TechnicalPartners";

const Partners = () => {
  return ( 
    <div className="flex flex-col items-center ">
      <h1 className="text-6xl font-semibold mt-4 mb-4">Technical Partners</h1>
      <div className="flex gap-12 w-4/5 mx-4 my-4 p-4 flex-wrap justify-center items-center rounded-lg">
        {TechnicalPartners.map((partner, index) => (
          <div
          key={index}
            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 w-72 h-28"
          >
            <img
              src={partner.img}
              alt="devfolio"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Partners;