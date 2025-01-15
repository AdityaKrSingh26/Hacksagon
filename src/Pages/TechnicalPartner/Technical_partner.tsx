export function Technical() {
  return (
      <div>
          <div className="w-2/3 mx-auto flex flex-col">
              <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
                  Technical Partners
              </h1>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-16 text-gray-200">
              <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-1000 hover:scale-105 opacity-0 translate-x-[-100%] animate-slideInLeft">
                  <div className="image-container mb-4 w-25 h-20 flex items-center justify-center rounded-lg">
                      <img src="https://i.postimg.cc/d3CDWpY9/ieee-mp-section-cover-removebg-preview.png" alt="College Logo" className="h-full object-contain" />
                  </div>
                  <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mb-4 md:mb-0 pb-4">IEEE MP SECTION</h2>
                  <p className="text-base leading-relaxed">
                      IEEE MP Section continues this mission by empowering professionals, students, and researchers in Madhya Pradesh to collaborate, innovate, and excel in their respective fields. Together, we strive to build a better technological future for the region and beyond.
                  </p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-1000 hover:scale-105 opacity-0 translate-x-[100%] animate-slideInRight">
                  <div className="image-container mb-4 w-25 h-20 flex items-center justify-center rounded-lg">
                      <img src="https://i.postimg.cc/9fkMCJ8q/ieee-white.png" alt="IEEE Logo" className="h-full object-contain" />
                  </div>
                  <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mb-4 md:mb-0 pb-4">IEEE STUDENT BRANCH</h2>
                  <p className="text-base leading-relaxed">
                      The ABV-IIITM IEEE Student Branch, established in 2019, is a dynamic platform that connects academia and industry. Through workshops, seminars, and competitions, it provides students with hands-on experience, enhancing their technical skills and preparing them for challenges.
                  </p>
              </div>
          </section>
      </div>
  );
}