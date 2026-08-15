/* eslint-disable */
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaCode,
  FaCheckCircle,
  FaMobileAlt,
  FaDatabase,
  FaLayerGroup,
  FaBolt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMui,
  SiShadcnui,
  SiReactquery,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend & Web Architecture",
    icon: FaLayerGroup,
    badgeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    skills: [
      { name: "React.js", level: "Expert", icon: <FaReact />, glowColor: "group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]" },
      { name: "Next.js", level: "Expert", icon: <SiNextdotjs />, glowColor: "group-hover:text-white group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" },
      { name: "TypeScript", level: "Advanced", icon: <SiTypescript />, glowColor: "group-hover:text-blue-400 group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
      { name: "Redux Toolkit", level: "Advanced", icon: <SiRedux />, glowColor: "group-hover:text-purple-400 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
      { name: "React Query", level: "Advanced", icon: <SiReactquery />, glowColor: "group-hover:text-rose-400 group-hover:border-rose-500/40 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]" },
      { name: "Tailwind CSS", level: "Expert", icon: <SiTailwindcss />, glowColor: "group-hover:text-teal-400 group-hover:border-teal-500/40 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]" },
      { name: "Material UI", level: "Intermediate", icon: <SiMui />, glowColor: "group-hover:text-blue-400 group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
      { name: "Shadcn UI", level: "Advanced", icon: <SiShadcnui />, glowColor: "group-hover:text-white group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    badgeColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    skills: [
      { name: "React Native", level: "Advanced", icon: <TbBrandReactNative />, glowColor: "group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]" },
      { name: "iOS & Android Build", level: "Production", icon: <FaMobileAlt />, glowColor: "group-hover:text-purple-400 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: FaDatabase,
    badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <FaNodeJs />, glowColor: "group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]" },
      { name: "Express.js", level: "Intermediate", icon: <SiExpress />, glowColor: "group-hover:text-zinc-200 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" },
      { name: "MongoDB", level: "Intermediate", icon: <SiMongodb />, glowColor: "group-hover:text-green-400 group-hover:border-green-500/40 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]" },
    ],
  },
  {
    title: "Developer Tools & Workflow",
    icon: FaTools,
    badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    skills: [
      { name: "Git", level: "Expert", icon: <FaGitAlt />, glowColor: "group-hover:text-orange-400 group-hover:border-orange-500/40 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]" },
      { name: "GitHub", level: "Expert", icon: <FaGithub />, glowColor: "group-hover:text-zinc-200 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" },
      { name: "Postman", level: "Advanced", icon: <SiPostman />, glowColor: "group-hover:text-orange-400 group-hover:border-orange-500/40 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-6">
            <FaTools className="text-xs" />
            <span>Technical Arsenal & Proficiency</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Technologies I Use To <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Engine Production Apps
            </span>
          </h2>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-2xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${category.badgeColor}`}>
                      <CategoryIcon className="text-lg" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <span className="px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-semibold">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 ${skill.glowColor}`}
                    >
                      <div className="text-3xl sm:text-4xl text-zinc-300 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      <div className="text-center">
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] text-zinc-400 font-medium block mt-0.5">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Capability Highlights Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10">
          {[
            { label: "Sub-Second Page Load", icon: FaBolt, color: "text-amber-400" },
            { label: "Strict Type Safety", icon: FaCheckCircle, color: "text-blue-400" },
            { label: "60 FPS Mobile Touch UI", icon: FaMobileAlt, color: "text-purple-400" },
            { label: "Predictable State Sync", icon: FaLayerGroup, color: "text-cyan-400" },
          ].map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
                <ItemIcon className={`${item.color} shrink-0 text-base`} />
                <span className="text-xs font-semibold text-zinc-300">{item.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
