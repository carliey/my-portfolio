import { styles } from "../style";
import { motion } from "framer-motion";
import TechTicker from "./TechTicker";
import { track } from "../lib/analytics";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] mx-auto flex flex-col justify-between pt-32 pb-0">
      <div
        className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 z-10 my-auto`}
      >
        {/* Purple vertical line indicator */}
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-72 h-44 bg-[#915EFF]/40" />
        </div>

        <div className="flex-1 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/30 text-[#00cea8] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00cea8]" />
              <span>Available for collaboration</span>
            </div>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Muhammed</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}
            >
              Have an idea for a web or mobile product? I'm a software engineer
              who can help you shape it, build it, and launch it. Let's turn
              what you're imagining into something people can use.
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={() =>
                track("cta_click", { label: "lets_build_together" })
              }
              className="bg-[#915EFF] hover:bg-[#804dee] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#915EFF]/25 transition-colors"
            >
              Let's Build Together
            </a>
            <a
              href="#projects"
              onClick={() => track("cta_click", { label: "view_projects" })}
              className="bg-tertiary hover:bg-[#232631] text-white border border-white/10 font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
            >
              See My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Infinite Skills Marquee Ticker */}
      <div className="mt-12 w-full">
        <TechTicker />
      </div>
    </section>
  );
};

export default Hero;
