import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components";
import { projects } from "../constants";
import { styles } from "../style";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">(
    "all"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" || project.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const webCount = projects.filter((p) => p.type === "web").length;
  const mobileCount = projects.filter((p) => p.type === "mobile").length;

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 rounded-xl bg-tertiary border border-white/10 hover:border-[#915EFF] text-secondary hover:text-white text-sm font-medium transition-all inline-flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </button>

          <p className={styles.sectionSubText}>Portfolio Showcase</p>
          <h1 className={styles.sectionHeadText}>All Projects.</h1>
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Explore web and mobile applications delivered across ed-tech,
            finance, logistics, and enterprise domains.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-tertiary/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Category Filter Tabs: All, Web, Mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white shadow-md shadow-[#915EFF]/20"
                  : "bg-black-100/60 text-secondary hover:text-white border border-white/5"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "web"
                  ? "bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white shadow-md shadow-[#915EFF]/20"
                  : "bg-black-100/60 text-secondary hover:text-white border border-white/5"
              }`}
            >
              Web Apps ({webCount})
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "mobile"
                  ? "bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white shadow-md shadow-[#915EFF]/20"
                  : "bg-black-100/60 text-secondary hover:text-white border border-white/5"
              }`}
            >
              Mobile Apps ({mobileCount})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-black-100/80 text-white placeholder:text-secondary px-4 py-2.5 rounded-xl outline-none border border-white/10 focus:border-[#915EFF] text-sm transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-tertiary p-5 rounded-2xl border border-white/10 hover:border-[#915EFF]/50 hover:shadow-xl hover:shadow-[#915EFF]/10 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="relative w-full h-[220px] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold text-[#00cea8] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="text-white font-bold text-[20px] tracking-wide mt-1 hover:text-[#915EFF] cursor-pointer transition-colors"
                  >
                    {project.name}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-black-100 hover:bg-[#915EFF] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>View Project Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-tertiary/30 rounded-3xl border border-white/10 mt-10">
            <h3 className="text-white text-xl font-bold">
              No matching projects found
            </h3>
            <p className="text-secondary text-sm mt-2">
              Try adjusting your search query or selecting a different filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#915EFF] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
