import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { services, personalInfo } from "../constants";
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
      max: 35,
      scale: 1.05,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-[#915EFF]/20 transition-all duration-300"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="w-20 h-20 rounded-full bg-[#050816]/60 flex items-center justify-center p-4 border border-white/5">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-white text-[18px] font-bold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Client Projects", value: "8+" },
    { label: "Students & Interns Mentored", value: "45+" },
    { label: "Teachers Using Curri AI", value: "3,000+" },
  ];

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        {personalInfo.summary}
      </motion.p>

      {/* Impact Stats Grid */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-tertiary/70 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-[#915EFF]/50 transition-all duration-300"
          >
            <h4 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00cea8]">
              {stat.value}
            </h4>
            <p className="text-xs sm:text-sm text-secondary font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Services Grid */}
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
