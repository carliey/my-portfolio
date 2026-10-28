import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: Props) => (
  <div className="rounded-2xl border border-white/10 bg-tertiary/90 p-4 sm:p-6 transition-colors hover:border-[#915EFF]/40">
    <div className="flex items-center gap-4 sm:min-h-[180px] sm:flex-col sm:justify-center sm:text-center">
      <div className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-[#050816]/70 p-2 sm:h-16 sm:w-16 sm:rounded-2xl sm:p-3">
        <img
          src={icon}
          alt=""
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-white text-base sm:text-lg font-bold leading-snug">
          {title}
        </h4>
        <p className="mt-2 text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const About = () => {
  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      detail: "Building scalable web & mobile products",
    },
    {
      value: "8+",
      label: "Client Projects Delivered",
      detail: "Cross-platform mobile & web apps",
    },
    {
      value: "45+",
      label: "Interns & Students Mentored",
      detail: "Bootcamps & technical leadership",
    },
  ];

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I Bring</p>
        <h2 className={styles.sectionHeadText}>Engineering Impact.</h2>
      </div>

      {/* Achievement Stats Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-tertiary/70 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-[#915EFF]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-4xl lg:text-5xl font-black text-[#915EFF]">
                  {stat.value}
                </p>
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
      </div>

      <div className="mt-16">
        <h3 className="text-white font-bold text-2xl">What I Can Build With You</h3>
      </div>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
