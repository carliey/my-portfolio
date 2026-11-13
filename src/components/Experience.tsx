import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }: { experience: (typeof experiences)[number] }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold tracking-wide">
          {experience.title}
        </h3>
        <p className="text-[#00cea8] text-[15px] font-semibold tracking-wider mt-1">
          {experience.company_name}
        </p>

        {experience.summary && (
          <p className="mt-3 text-xs sm:text-sm text-[#dfd9ff]/90 italic border-l-2 border-[#915EFF] pl-3 py-1 bg-primary/30 rounded-r-lg">
            {experience.summary}
          </p>
        )}
      </div>

      <ul className="mt-4 ml-5 hidden list-disc space-y-2 sm:block">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#dfd9ff] text-[14px] pl-1 leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      <details className="mt-4 rounded-xl border border-white/10 bg-primary/40 sm:hidden">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-white hover:text-[#b79bff]">
          View highlights & contributions
        </summary>
        <ul className="ml-5 space-y-2 px-4 pb-4 list-disc">
          {experience.points.map((point: string, index: number) => (
            <li key={index} className="text-[#dfd9ff] text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </details>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Professional Track Record</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        <p className="mt-4 text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
          A progression of high-ownership engineering roles across education technology,
          mobile logistics, defense contracting, and public-sector software delivery.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const WrappedExperience = SectionWrapper({ Component: Experience, idName: "experience" });
export default WrappedExperience;
