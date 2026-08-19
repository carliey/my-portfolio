import React from "react";
import {
  reactjs,
  typescript,
  javascript,
  tailwind,
  redux,
  nodejs,
  mongodb,
  html,
  css,
  git,
  figma,
  docker,
} from "../assets";

const skillsList = [
  { name: "React.js", icon: reactjs },
  { name: "React Native", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: html },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Express.js", icon: css },
  { name: "NestJS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mongodb },
  { name: "AWS Cloud", icon: docker },
  { name: "Docker", icon: docker },
  { name: "Git & GitHub", icon: git },
  { name: "Figma UI/UX", icon: figma },
  { name: "Jest Testing", icon: typescript },
];

const TechTicker: React.FC = () => {
  // Duplicate skills list to make seamless loop
  const duplicatedSkills = [...skillsList, ...skillsList];

  return (
    <div className="w-full py-6 bg-tertiary/40 border-y border-white/10 overflow-hidden backdrop-blur-md relative z-20">
      {/* <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-bold text-secondary">
          Featured Technical Skillset
        </span>
        <span className="text-[11px] text-[#00cea8] font-medium hidden sm:inline">
          Continuous Integration • Scalable Architecture
        </span>
      </div> */}

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-tertiary/80 border border-white/10 shadow-sm hover:border-[#915EFF] transition-all hover:scale-105 shrink-0 group cursor-default"
            >
              <div className="w-6 h-6 rounded-lg bg-black-100/60 p-1 flex items-center justify-center border border-white/5">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-xs font-semibold tracking-wide group-hover:text-[#915EFF] transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
