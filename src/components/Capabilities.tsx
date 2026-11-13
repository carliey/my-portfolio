import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { capabilities } from "../constants";

const Capabilities = () => {
  return (
    <>
      <div className="max-w-3xl">
        <p className={styles.sectionSubText}>What I Bring</p>
        <h2 className={styles.sectionHeadText}>Capabilities.</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {capabilities.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-tertiary p-6 transition-all duration-300 hover:border-[#915EFF]/50 hover:shadow-lg hover:shadow-[#915EFF]/10 group"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-[#b79bff]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              {pillar.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-primary/70 border border-white/5 px-2.5 py-1 text-xs font-medium text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedCapabilities = SectionWrapper({ Component: Capabilities, idName: "capabilities" });
export default WrappedCapabilities;
