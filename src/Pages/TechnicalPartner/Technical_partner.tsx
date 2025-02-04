import { TechnicalPartners } from "../../data/TechnicalPartners";

export function Technical() {
  return (
      <div>
          <div className="w-2/3 mx-auto flex flex-col">
              <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
                  Technical Partners
              </h1>
          </div>

          <section className="flex flex-wrap justify-center gap-8 py-10 px-6 md:px-16 text-gray-200">
              {TechnicalPartners.map((partner, index) => (
                <div key={index} className="bg-black/20 p-6 rounded-lg flex flex-col items-center text-center transform duration-1000 hover:scale-105 opacity-0 translate-x-[-100%] animate-slideInLeft w-full lg:w-[45%]">
                    <div className="image-container mb-4 w-25 h-20 flex items-center justify-center rounded-lg">
                        <img src={partner.img} alt="Logo" className="h-full object-contain" />
                    </div>
                    <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mb-4 md:mb-0 pb-4">{partner.name}</h2>
                    <p className="text-base leading-relaxed">{partner.desc}</p>
                </div>
              ))}
          </section>
      </div>
  );
}