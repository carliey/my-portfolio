import { styles } from "../style";
import { motion } from "framer-motion";
import TechTicker from "./TechTicker";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] mx-auto flex flex-col justify-between pt-32 pb-0">
      <div
        className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 z-10 my-auto`}
      >
        {/* Purple vertical line indicator */}
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-72 h-44 violet-gradient" />
        </div>

        <div className="flex-1 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/30 text-[#00cea8] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00cea8] animate-ping" />
              <span>Available for Web & Mobile Engineering</span>
            </div>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Muhammad</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}
            >
              Software Engineer specializing in{" "}
              <span className="text-[#00cea8] font-semibold">React</span>,{" "}
              <span className="text-[#915EFF] font-semibold">React Native</span>{" "}
              & <span className="text-[#56ccf2] font-semibold">Node.js</span>{" "}
              with 4+ years of experience building scalable web & mobile apps.
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
              href="#work"
              className="bg-gradient-to-r from-[#915EFF] to-[#804dee] hover:opacity-90 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#915EFF]/25 transition-all hover:scale-105"
            >
              Explore Experience
            </a>
            <a
              href="#contact"
              className="bg-tertiary hover:bg-[#232631] text-white border border-white/10 font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
            >
              Get In Touch
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
