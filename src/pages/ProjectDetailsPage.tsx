import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components";
import { projects } from "../constants";
import { ExternalLinkIcon, GitHubIcon } from "../components/SocialIcons";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="bg-primary min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-white text-3xl font-bold">Project Not Found</h2>
        <p className="text-secondary mt-2">The requested project details page could not be located.</p>
        <button
          onClick={() => navigate("/projects")}
          className="mt-6 px-6 py-3 rounded-xl bg-[#915EFF] text-white font-bold"
        >
          View All Projects
        </button>
      </div>
    );
  }

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Navigation breadcrumbs */}
        <div className="flex flex-wrap items-center gap-3 mb-8 text-sm">
          <button
            onClick={() => navigate("/")}
            className="text-secondary hover:text-white transition-colors"
          >
            Home
          </button>
          <span className="text-secondary">/</span>
          <button
            onClick={() => navigate("/projects")}
            className="text-secondary hover:text-white transition-colors"
          >
            Projects
          </button>
          <span className="text-secondary">/</span>
          <span className="text-white font-medium">{project.name}</span>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/30 text-[#00cea8] text-xs font-bold uppercase tracking-wider mb-4">
            {project.category}
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="mt-4 text-secondary text-lg sm:text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.project_link && (
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] hover:opacity-90 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#915EFF]/20 hover:scale-105 transition-all flex items-center gap-2.5"
              >
                <ExternalLinkIcon className="w-5 h-5" />
                <span>Visit Live Application</span>
              </a>
            )}
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary hover:bg-[#232631] text-white border border-white/10 font-bold px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all flex items-center gap-2.5"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>View Source Code</span>
              </a>
            )}
            <button
              onClick={() => navigate("/projects")}
              className="bg-black-100 hover:bg-tertiary text-secondary hover:text-white border border-white/10 px-6 py-3.5 rounded-xl font-medium transition-all"
            >
              ← All Projects
            </button>
          </div>
        </motion.div>

        {/* Hero Screenshot Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-tertiary p-3 sm:p-4"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full max-h-[550px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Detailed Breakdown Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left / Main Content: Overview & Features */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-white text-2xl font-bold pb-3 border-b border-white/10">
                Project Overview
              </h2>
              <p className="mt-4 text-secondary text-base leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold pb-3 border-b border-white/10">
                Key Features & Solution Highlights
              </h2>
              <ul className="mt-6 space-y-4">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-tertiary/60 p-4 rounded-xl border border-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#00cea8]/20 text-[#00cea8] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Classification & Project Info Card */}
          <div className="space-y-8">
            <div className="bg-tertiary p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-white text-xl font-bold pb-3 border-b border-white/10">
                Application Classification
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-sm font-semibold px-3 py-1.5 rounded-lg bg-black-100/70 border border-white/5 ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">Platform Category</span>
                  <span className="text-white font-semibold">{project.category}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">Status</span>
                  <span className="text-[#00cea8] font-semibold">Production Ready</span>
                </div>
              </div>
            </div>

            {/* Quick Next/Prev Project Links */}
            <div className="bg-tertiary/40 p-6 rounded-2xl border border-white/10 space-y-4">
              <span className="text-xs text-secondary font-bold uppercase tracking-wider block">
                Navigate Projects
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate(`/projects/${prevProject.id}`)}
                  className="p-3 rounded-xl bg-tertiary hover:bg-[#915EFF] text-left text-white text-xs font-semibold transition-colors truncate"
                  title={prevProject.name}
                >
                  ← {prevProject.name}
                </button>
                <button
                  onClick={() => navigate(`/projects/${nextProject.id}`)}
                  className="p-3 rounded-xl bg-tertiary hover:bg-[#915EFF] text-right text-white text-xs font-semibold transition-colors truncate"
                  title={nextProject.name}
                >
                  {nextProject.name} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
