import { TechnicalPartners } from "../data/TechnicalPartners";

const Partners = () => {
  return ( 
    <div className="flex flex-col items-center ">
      <h1 className="text-6xl font-semibold mt-4 mb-4">Technical Partners</h1>
      <div className="flex gap-12 w-3/4 mx-4 my-4 p-4 flex-wrap justify-center items-center rounded-lg bg-white/15">
        {TechnicalPartners.map((partner, index) => (
          <div key={index}>
            <img src={partner.img} className="w-96" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Partners;