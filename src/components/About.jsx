/* eslint-disable */
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCheckCircle,
  FaUser,
  FaCode,
  FaRocket,
  FaTerminal,
  FaMobileAlt,
  FaGlobe,
  FaLaptopCode,
  FaServer,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiReactquery,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  {
    name: "React.js",
    category: "Frontend Core",
    icon: <FaReact />,
    iconColor: "text-[#61DAFB]",
    cardStyle: "border-cyan-500/30 bg-gradient-to-b from-cyan-500/15 via-white/[0.03] to-transparent hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(97,218,251,0.25)]",
    badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    name: "Next.js",
    category: "Full-Stack Web",
    icon: <SiNextdotjs />,
    iconColor: "text-white",
    cardStyle: "border-white/20 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.2)]",
    badgeStyle: "bg-white/10 text-white border-white/20",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    icon: <SiTypescript />,
    iconColor: "text-[#3178C6]",
    cardStyle: "border-blue-500/30 bg-gradient-to-b from-blue-500/15 via-white/[0.03] to-transparent hover:border-blue-400 hover:shadow-[0_0_35px_rgba(49,120,198,0.25)]",
    badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  },
  {
    name: "React Native",
    category: "Mobile Apps",
    icon: <TbBrandReactNative />,
    iconColor: "text-[#61DAFB]",
    cardStyle: "border-cyan-500/30 bg-gradient-to-b from-cyan-500/15 via-white/[0.03] to-transparent hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(97,218,251,0.25)]",
    badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    name: "Redux",
    category: "State Engine",
    icon: <SiRedux />,
    iconColor: "text-[#764ABC]",
    cardStyle: "border-purple-500/30 bg-gradient-to-b from-purple-500/15 via-white/[0.03] to-transparent hover:border-purple-400 hover:shadow-[0_0_35px_rgba(118,74,188,0.25)]",
    badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  },
  {
    name: "Tailwind CSS",
    category: "Styling System",
    icon: <SiTailwindcss />,
    iconColor: "text-[#38BDF8]",
    cardStyle: "border-teal-500/30 bg-gradient-to-b from-teal-500/15 via-white/[0.03] to-transparent hover:border-teal-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]",
    badgeStyle: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  },
  {
    name: "React Query",
    category: "Data Fetching",
    icon: <SiReactquery />,
    iconColor: "text-[#FF4154]",
    cardStyle: "border-rose-500/30 bg-gradient-to-b from-rose-500/15 via-white/[0.03] to-transparent hover:border-rose-400 hover:shadow-[0_0_35px_rgba(255,65,84,0.25)]",
    badgeStyle: "bg-rose-500/10 text-rose-300 border-rose-500/30",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    icon: <FaNodeJs />,
    iconColor: "text-[#68A063]",
    cardStyle: "border-emerald-500/30 bg-gradient-to-b from-emerald-500/15 via-white/[0.03] to-transparent hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(104,160,99,0.25)]",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
  {
    name: "MongoDB",
    category: "Database System",
    icon: <SiMongodb />,
    iconColor: "text-[#47A248]",
    cardStyle: "border-green-500/30 bg-gradient-to-b from-green-500/15 via-white/[0.03] to-transparent hover:border-green-400 hover:shadow-[0_0_35px_rgba(71,162,72,0.25)]",
    badgeStyle: "bg-green-500/10 text-green-300 border-green-500/30",
  },
  {
    name: "GitHub",
    category: "Version Control",
    icon: <FaGithub />,
    iconColor: "text-zinc-200",
    cardStyle: "border-zinc-500/30 bg-gradient-to-b from-zinc-500/15 via-white/[0.03] to-transparent hover:border-zinc-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]",
    badgeStyle: "bg-zinc-500/10 text-zinc-300 border-zinc-500/30",
  },
];

const corePillars = [
  {
    icon: FaGlobe,
    title: "Web Platform Engineering",
    desc: "Architecting accessible, sub-second web platforms with React, Next.js, and TypeScript.",
    tags: ["React.js", "Next.js", "TypeScript"],
    color: "text-blue-400",
    glow: "hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Building 60 FPS cross-platform mobile apps for iOS & Android with React Native.",
    tags: ["React Native", "Redux", "Push Sync"],
    color: "text-purple-400",
    glow: "hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]",
  },
  {
    icon: FaServer,
    title: "Enterprise Dashboard Tools",
    desc: "Creating data-dense administrative dashboards with live analytics & RBAC security.",
    tags: ["REST APIs", "RBAC Auth", "Analytics"],
    color: "text-emerald-400",
    glow: "hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Dynamic Background Pattern & Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-6">
            <FaUser className="text-xs" />
            <span>Developer Profile & Engineering Philosophy</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Building High-Impact <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Web & Mobile Experiences
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-20">

          {/* Bento Card 1: Story & Terminal Widget (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] backdrop-blur-2xl p-8 md:p-12 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                  // ABOUT MY JOURNEY
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Software Engineer
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Software Engineer at Where U Elevate
              </h3>

              <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-8">
                I engineer production-grade web platforms, scalable SaaS products, internal administrative portals, and cross-platform mobile apps using <span className="text-blue-400 font-semibold">React.js, Next.js, TypeScript, and React Native</span>.
                <br /><br />
                My focus is centered on delivering sub-second page performance, robust client state management, clean component architecture, and pixel-perfect design fidelity.
              </p>

              {/* Developer Config Terminal */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-xl shadow-2xl font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-semibold text-white">developer.profile.ts</span>
                  </div>
                  <span className="text-[11px] text-blue-400 font-sans">Active Config</span>
                </div>
                <div className="mt-3.5 space-y-1.5 text-zinc-300">
                  <div><span className="text-purple-400 font-bold">const</span> <span className="text-blue-400 font-semibold">engineer</span> = &#123;</div>
                  <div className="pl-4"><span className="text-zinc-400">name:</span> <span className="text-emerald-300">"Raushan Kumar"</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">role:</span> <span className="text-emerald-300">"Software Engineer"</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">company:</span> <span className="text-emerald-300">"Where U Elevate"</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">location:</span> <span className="text-emerald-300">"India 🇮🇳"</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">shipped:</span> <span className="text-cyan-300">["4 Web Apps", "1 Mobile App"]</span></div>
                  <div>&#125;;</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Metrics Column (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            {/* Stat 1 */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-transparent backdrop-blur-2xl p-7 hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]">
              <div className="flex items-center justify-between text-xs font-bold text-blue-400 uppercase tracking-widest">
                <span>Experience</span>
                <FaCode className="text-lg" />
              </div>
              <h4 className="text-4xl font-black text-white mt-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                1+ Yrs
              </h4>
              <p className="text-zinc-400 text-xs mt-1">
                Professional Engineering & Production Apps
              </p>
            </div>

            {/* Stat 2 */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-transparent backdrop-blur-2xl p-7 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]">
              <div className="flex items-center justify-between text-xs font-bold text-purple-400 uppercase tracking-widest">
                <span>Shipped Work</span>
                <FaRocket className="text-lg" />
              </div>
              <h4 className="text-4xl font-black text-white mt-3 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                4 Web + 1 Mobile
              </h4>
              <p className="text-zinc-400 text-xs mt-1">
                Production Web Applications & React Native App
              </p>
            </div>

            {/* Stat 3 */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/[0.03] to-transparent backdrop-blur-2xl p-7 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400 uppercase tracking-widest">
                <span>Performance</span>
                <FaCheckCircle className="text-lg" />
              </div>
              <h4 className="text-4xl font-black text-white mt-3 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                95+ Score
              </h4>
              <p className="text-zinc-400 text-xs mt-1">
                Core Web Vitals & Pixel-Perfect Design Quality
              </p>
            </div>
          </motion.div>

        </div>

        {/* Engineering Pillars Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {corePillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-[28px] border border-white/10 bg-white/[0.02] transition-all duration-300 ${pillar.glow}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.color} mb-5 text-xl`}>
                  <PillarIcon />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-16 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Technologies & Development Stack
            </h3>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              Tools, frameworks, and libraries I utilize daily to build production applications.
            </p>
          </div>

          {/* VIBRANT BRAND-COLORED GLASS CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-3xl border backdrop-blur-2xl p-6 flex flex-col items-center justify-between gap-4 cursor-pointer transition-all duration-500 ${tech.cardStyle}`}
              >
                {/* Glowing Icon Container with halo backdrop */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <div className={`text-4xl ${tech.iconColor} drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]`}>
                    {tech.icon}
                  </div>
                </div>

                <div className="text-center w-full">
                  <div className="text-sm md:text-base font-extrabold text-white group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                  
                  {/* Category Pill Badge */}
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${tech.badgeStyle}`}>
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
