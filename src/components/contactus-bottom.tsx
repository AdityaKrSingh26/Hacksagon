import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const questions = [
  "What will be the steps to register for hacksagon ?",
  "How many individuals are allowed in a team ?",
  "How points will be awarded for qualification to next round ?",
  "What are amenities provided at your accomodation for final round ?",
];

export const ContactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center w-[80%] md:w-[65%] mx-auto p-8 my-4 rounded-xl bg-white/10 text-white">
      <div className="space-y-6 w-full max-w-lg">
        <header>
          <p className="text-sm font-light uppercase mb-2">Support</p>
          <div className="border-t border-white"></div>
        </header>
        
        <div>
          <p className="text-xl leading-relaxed">
            <strong>Have questions?</strong> Contact Support!
          </p>
        </div>

        <div>
          <p className="text-sm font-light uppercase mb-2">
            <span className="ml-3">EXAMPLE: </span>
            {questions[currentIndex].split("").map((char, idx) => (
              <motion.span
                key={`${currentIndex}-${idx}`}
                className="relative inline-block"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 5, duration: 0.3 }}
                style={{
                  whiteSpace: "pre-wrap", // Preserve whitespaces
                  overflowWrap: "break-word", // Wrap long words
                  wordBreak: "break-word", // Allow word breaking if needed
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.04, duration: 0 }}
                >
                  {char}
                </motion.span>

                <motion.span
                  className="absolute bottom-[3px] top-[3px] left-[1px] right-0 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.2,
                    times: [0, 0.2, 1],
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            ))}
          </p>
          <hr className="border-neutral-300" />
        </div>



        {/* Button */}
        <Link to="/contact">
          <button className="w-full py-2 mt-6 text-sm font-medium border rounded-full transition hover:bg-white/15">
            Contact Support
          </button>
        </Link>

        <div className="mt-8">
          <p className="text-lg font-medium w-full border-b py-4 mb-4">

            <strong>Why waste time?</strong> Register now and compete in central india's largest hackathon
          </p>
          <Link
            to="https://unstop.com/o/gTXzetj?utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            className="block bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition-colors text-center w-full"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};