import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { collaborations } from "../constants";

const Collaborations = () => {
  return (
    <>
      <div className="max-w-3xl">
        <p className={styles.sectionSubText}>Partner Ecosystem</p>
        <h2 className={styles.sectionHeadText}>Collaborations.</h2>
        <p className="mt-3 text-secondary text-base leading-relaxed">
          Client systems and enterprise solutions delivered in partnership with established technology hubs.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-tertiary p-6 transition-all duration-300 hover:border-[#00cea8]/50 hover:shadow-lg hover:shadow-[#00cea8]/10 group"
          >
            <div>
              <span className="text-xs font-semibold text-[#00cea8]">
                {collab.badge}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#b79bff] transition-colors mt-1">
                {collab.name}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-secondary leading-relaxed">
                {collab.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="inline-block rounded-lg bg-primary/70 border border-white/5 px-2.5 py-1 text-xs font-semibold text-white/90">
                {collab.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedCollaborations = SectionWrapper({ Component: Collaborations, idName: "collaborations" });
export default WrappedCollaborations;
