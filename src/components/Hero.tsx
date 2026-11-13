import { styles } from "../style";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { DownloadIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[92vh] mx-auto flex flex-col justify-between pt-32 pb-12">
      <div
        className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 z-10 my-auto`}
      >
        {/* Purple vertical line indicator */}
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-80 h-52 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        <div className="flex-1 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00cea8]/10 border border-[#00cea8]/30 text-[#00cea8] text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cea8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00cea8]"></span>
              </span>
              <span>Available for engineering projects & technical leadership</span>
            </div>

            <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#00cea8]">
              Hi, I'm Muhammed Ladan
            </p>

            <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Have an idea for a <span className="text-[#915EFF]">web</span> or <span className="text-[#00cea8]">mobile product</span>?
            </h1>

            <p className="mt-5 text-[#dfd9ff] text-base sm:text-xl leading-relaxed max-w-3xl">
              I'm a software engineer who can help you shape it, build it, and launch it. Let's turn what you're imagining into something people can use.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={() => track("cta_click", { label: "hero_lets_build_together" })}
              className="bg-[#915EFF] hover:bg-[#804dee] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#915EFF]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Let's Build Together
            </a>

            <a
              href="#projects"
              onClick={() => track("cta_click", { label: "hero_see_my_work" })}
              className="inline-flex items-center gap-2 bg-tertiary hover:bg-[#232631] text-white border border-white/15 font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all hover:border-[#915EFF]/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              See My Work
            </a>

            <a
              href={personalInfo.cvUrl || "#"}
              download
              onClick={() => track("cta_click", { label: "hero_download_cv" })}
              className="inline-flex items-center gap-2 text-secondary hover:text-white font-semibold px-4 py-3.5 transition-colors"
            >
              <DownloadIcon className="w-4 h-4 text-[#00cea8]" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Integrated Proof Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  <span className="text-[#915EFF]">{stat.value}</span>
                </span>
                <span className="text-white text-sm font-bold mt-1">
                  {stat.label}
                </span>
                <span className="text-secondary text-xs mt-0.5 hidden sm:block">
                  {stat.detail}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
