import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

interface Props {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard = ({ index, title, icon }: Props) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 25,
      scale: 1.05,
      speed: 400,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-[#915EFF]/25 transition-all duration-300 group"
    >
      <div className="bg-tertiary/90 backdrop-blur-md rounded-[20px] py-6 px-8 min-h-[260px] flex justify-evenly items-center flex-col border border-white/5 group-hover:border-[#915EFF]/30 transition-colors">
        <div className="w-20 h-20 rounded-2xl bg-[#050816]/70 flex items-center justify-center p-4 border border-white/10 group-hover:scale-110 transition-transform duration-300">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-white text-[18px] font-bold text-center leading-snug tracking-wide group-hover:text-[#915EFF] transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      detail: "Building scalable web & mobile products",
      gradient: "from-[#915EFF] to-[#00cea8]",
    },
    {
      value: "8+",
      label: "Client Projects Delivered",
      detail: "Cross-platform mobile & web apps",
      gradient: "from-[#00cea8] to-[#56ccf2]",
    },
    {
      value: "45+",
      label: "Interns & Students Mentored",
      detail: "Bootcamps & technical leadership",
      gradient: "from-[#56ccf2] to-[#915EFF]",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>What I Bring</p>
        <h2 className={styles.sectionHeadText}>Engineering Impact.</h2>
      </motion.div>

      {/* Achievement Stats Grid */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-tertiary/70 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-[#915EFF]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </h4>
                <p className="text-white text-base font-bold mt-2 tracking-wide">
                  {stat.label}
                </p>
              </div>
              <p className="text-secondary text-xs font-medium mt-2 pt-3 border-t border-white/5">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={textVariant(0.3)} className="mt-16">
        <p className={styles.sectionSubText}>Specialization</p>
        <h3 className="text-white font-bold text-2xl">Core Services.</h3>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-8 flex flex-wrap gap-8 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
