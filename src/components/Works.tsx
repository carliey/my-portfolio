import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ExternalLinkIcon, GitHubIcon } from "./SocialIcons";

type Props = {
  index: number;
  id: string;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link?: string;
  project_link?: string;
};

const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
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

            <div className="absolute top-3 right-3 flex justify-end gap-2 z-10" onClick={(e) => e.stopPropagation()}>
              {source_code_link && (
                <button
                  onClick={() => window.open(source_code_link, "_blank")}
                  title="View Source Code"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:scale-110 hover:border-[#915EFF] transition-all"
                >
                  <GitHubIcon className="w-5 h-5 text-white" />
                </button>
              )}
              {project_link && (
                <button
                  onClick={() => window.open(project_link, "_blank")}
                  title="Visit Live Application"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:scale-110 hover:border-[#00cea8] transition-all"
                >
                  <ExternalLinkIcon className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center">
              <h3
                onClick={() => navigate(`/projects/${id}`)}
                className="text-white font-bold text-[22px] tracking-wide hover:text-[#915EFF] cursor-pointer transition-colors"
              >
                {name}
              </h3>
            </div>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        <div>
          <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[13px] font-medium px-2.5 py-0.5 rounded-md bg-black-100/50 border border-white/5 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <button
            onClick={() => navigate(`/projects/${id}`)}
            className="mt-4 w-full py-2.5 rounded-xl bg-black-100 hover:bg-[#915EFF] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>View Full Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
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
        <p className={`${styles.sectionSubText}`}>My Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following featured projects showcase my technical capabilities across web, mobile, AI platforms, and enterprise systems. Click any project to view comprehensive features and documentation.
        </motion.p>
      </div>

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
            <span className="group-hover:translate-x-1.5 transition-transform text-lg">→</span>
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper({ Component: Works, idName: "projects" });
