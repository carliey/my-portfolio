import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

type Props = {
  index: number;
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

const ProjectCard = ({
  index,
  id,
  name,
  category,
  description,
  image,
}: Props) => {
  const navigate = useNavigate();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-[#915EFF]/50 hover:shadow-xl hover:shadow-[#915EFF]/10 transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          <div
            onClick={() => navigate(`/projects/${id}`)}
            className="relative w-full h-[230px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>

          <div className="mt-4">
            <span className="text-[11px] font-bold text-[#00cea8] uppercase tracking-wider">
              {category}
            </span>
            <h3
              onClick={() => navigate(`/projects/${id}`)}
              className="text-white font-bold text-[22px] tracking-wide mt-1 hover:text-[#915EFF] cursor-pointer transition-colors"
            >
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate(`/projects/${id}`)}
            className="mt-6 w-full py-2.5 rounded-xl bg-black-100 hover:bg-[#915EFF] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>View Full Details</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  // Show a maximum of 6 projects on the landing page
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>

      {/* View More Projects Button */}
      {projects.length > 6 && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              navigate("/projects");
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] hover:opacity-90 text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-xl shadow-[#915EFF]/20 hover:scale-105 transition-all flex items-center gap-3 group"
          >
            <span>View All Projects ({projects.length})</span>
            <span className="group-hover:translate-x-1.5 transition-transform text-lg">
              →
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper({ Component: Works, idName: "projects" });
