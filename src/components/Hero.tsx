import { styles } from "../style";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-between`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-80 h-48 violet-gradient" />
        </div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/30 text-[#bf61ff] text-sm font-medium mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-ping" />
              <span>Available for Web & Mobile Engineering</span>
            </div>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Muhammad</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
              Software Developer specializing in <span className="text-[#00cea8] font-semibold">React</span>, <span className="text-[#915EFF] font-semibold">React Native</span> & <span className="text-[#56ccf2] font-semibold">Node.js</span> with 4+ years of experience building scalable web & mobile apps.
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="bg-[#915EFF] hover:bg-[#804dee] text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-[#915EFF]/30 transition-all hover:scale-105"
            >
              Explore Experience
            </a>
            <a
              href="#contact"
              className="bg-tertiary hover:bg-[#232631] text-white border border-white/10 font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/60 hover:border-[#915EFF] flex justify-center items-start p-2 transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
