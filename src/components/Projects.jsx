/* eslint-disable */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaLayerGroup,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaGlobe,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaBolt,
  FaLock,
  FaShoppingCart,
} from "react-icons/fa";

const categories = [
  { id: "all", label: "All Projects (5)" },
  { id: "web", label: "Web Applications (4)" },
  { id: "mobile", label: "Mobile App (1)" },
];

const projectsData = [
  {
    id: "01",
    catId: "web",
    category: "EdTech & Mentorship Web Platform",
    role: "Frontend Engineer",
    badge: "Web Application",
    tagline: "Scalable Self-Discovery & E-Learning Platform",
    description:
      "Architected and delivered a modern digital learning & mentorship web platform. Designed modular user interfaces, interactive mentorship workflows, dynamic course catalogs, and state-driven progress trackers.",
    highlights: [
      "Built dynamic user mentorship dashboards & course flows",
      "Integrated secure REST API endpoints with Redux state management",
      "Optimized load times with sleek glassmorphic dark-mode UI",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    icon: FaLaptopCode,
    mockType: "web-dashboard",
    gradient: "from-blue-500 via-cyan-400 to-indigo-500",
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]",
    borderHover: "hover:border-blue-500/50",
  },
  {
    id: "02",
    catId: "web",
    category: "Enterprise Admin & Analytics Portal",
    role: "Frontend Architect",
    badge: "Internal Operations Tool",
    tagline: "Real-Time Data Visualization & SaaS Management Center",
    description:
      "Engineered an enterprise administrative control center for monitoring live application metrics, managing user permissions, managing content feeds, and analyzing real-time operational reporting.",
    highlights: [
      "Role-based access control & granular authorization UI",
      "Integrated real-time interactive analytical charts & metrics",
      "Optimized data grid rendering for large dataset handling",
    ],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Chart Integration"],
    icon: FaChartLine,
    mockType: "analytics-grid",
    gradient: "from-emerald-500 via-teal-400 to-cyan-500",
    glow: "hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]",
    borderHover: "hover:border-emerald-500/50",
  },
  {
    id: "03",
    catId: "web",
    category: "High-Conversion Corporate Web Suite",
    role: "UI/UX Developer",
    badge: "SEO & Web Vitals 95+",
    tagline: "Conversion-Focused Modern Brand Landing Experience",
    description:
      "Designed and developed pixel-perfect corporate web suites tailored for maximum user engagement, sub-second page performance, search engine indexing, and responsive micro-animations.",
    highlights: [
      "Top-tier Lighthouse performance score (95+)",
      "Fluid micro-animations built with Framer Motion",
      "Pixel-perfect responsive design across all screen sizes",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    icon: FaLayerGroup,
    mockType: "landing-preview",
    gradient: "from-amber-500 via-orange-400 to-rose-500",
    glow: "hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    borderHover: "hover:border-amber-500/50",
  },
  {
    id: "04",
    catId: "web",
    category: "Full-Stack E-Commerce & Marketplace Suite",
    role: "Full-Stack Contributor",
    badge: "Marketplace Platform",
    tagline: "High-Performance Shopping & Digital Store Engine",
    description:
      "Contributed to building a scalable e-commerce & marketplace web suite. Developed product search filters, shopping cart persistence, secure payment gateway integrations, and order management views.",
    highlights: [
      "Built dynamic product search filter engine & catalog views",
      "Integrated secure payment API & checkout workflows",
      "Designed responsive cart management & order status feeds",
    ],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Redux"],
    icon: FaShoppingCart,
    mockType: "ecommerce-suite",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glow: "hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]",
    borderHover: "hover:border-cyan-500/50",
  },
  {
    id: "05",
    catId: "mobile",
    category: "Cross-Platform Mobile Application",
    role: "React Native Developer",
    badge: "iOS & Android App",
    tagline: "High-Performance Mobile App with Push & Real-Time Sync",
    description:
      "Architected and built core mobile app features from scratch using React Native. Implemented real-time push notification feeds, infinite scroll pagination, native touch interactions, and offline caching.",
    highlights: [
      "Cross-platform React Native app architecture",
      "Implemented push notifications lifecycle & offline caching",
      "Smooth 60 FPS UI transitions & native gesture handling",
    ],
    tech: ["React Native", "TypeScript", "Redux", "Firebase", "REST APIs"],
    icon: FaMobileAlt,
    mockType: "mobile-frame",
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]",
    borderHover: "hover:border-purple-500/50",
  },
];

const coreCapabilities = [
  {
    title: "Full-Stack Web Architecture",
    desc: "Architecting modular, re-usable React & Next.js component trees with scalable state management.",
    icon: FaGlobe,
    color: "text-blue-400",
  },
  {
    title: "Cross-Platform Mobile Apps",
    desc: "Building native-like iOS & Android mobile experiences using React Native and Redux.",
    icon: FaMobileAlt,
    color: "text-purple-400",
  },
  {
    title: "Admin & Operations Control",
    desc: "Creating enterprise analytical dashboards with role-based auth, metrics charts, and live controls.",
    icon: FaServer,
    color: "text-emerald-400",
  },
  {
    title: "Performance & UI Polish",
    desc: "Optimizing Web Vitals, sub-second page load times, glassmorphism aesthetics, and accessibility.",
    icon: FaBolt,
    color: "text-amber-400",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.catId === activeTab);

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-6">
            <FaRocket className="text-xs" />
            <span>Proven Engineering Experience</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Projects I Have <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Engineered & Delivered
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-base md:text-xl leading-relaxed">
            A showcasing of 4 Web Applications and 1 Mobile Application I have built, contributed to, and deployed in production.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-10 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex-wrap justify-center">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-2xl p-8 md:p-12 transition-all duration-500 ${project.borderHover} ${project.glow}`}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* LEFT CARD CONTENT */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                            // PROJECT CONTRIBUTION {project.id}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium">
                            {project.badge}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                            {project.role}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {project.category}
                        </h3>

                        {/* Tagline */}
                        <p className="mt-2 text-sm font-semibold text-blue-400/90">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-zinc-300 leading-relaxed text-base md:text-lg">
                          {project.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="mt-6 space-y-2.5">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                              <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider block mb-3">
                          Technologies Utilized
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-medium hover:border-white/25 hover:text-white transition-all"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT VISUAL MOCKUP WINDOW CANVAS */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full h-full min-h-[300px] md:min-h-[360px] rounded-3xl border border-white/15 bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                        
                        {/* Mock App Window Top Bar */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            {project.id === "05" ? "react-native-app.apk" : `web-app-${project.id}.v1`}
                          </span>
                        </div>

                        {/* Interactive Visual Graphic Inside Mock Window */}
                        <div className="my-6 space-y-4">
                          {project.mockType === "web-dashboard" && (
                            <div className="space-y-3">
                              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                                    UI
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-white">Learning Workspace</div>
                                    <div className="text-[10px] text-zinc-400">Mentorship & Dynamic State</div>
                                  </div>
                                </div>
                                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                                  Active Flow
                                </span>
                              </div>

                              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                <div className="flex justify-between text-xs text-zinc-400">
                                  <span>Course Progress</span>
                                  <span className="text-blue-400 font-bold">100% Complete</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-full" />
                                </div>
                              </div>
                            </div>
                          )}

                          {project.mockType === "analytics-grid" && (
                            <div className="space-y-3">
                              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                <div className="flex justify-between items-center text-xs mb-2">
                                  <span className="font-bold text-white">Live Operations Feed</span>
                                  <span className="text-emerald-400 text-[10px] font-mono">24/7 Monitored</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center">
                                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                    <div className="text-[10px] text-zinc-400">Users</div>
                                    <div className="text-xs font-bold text-white">Active</div>
                                  </div>
                                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                    <div className="text-[10px] text-zinc-400">Roles</div>
                                    <div className="text-xs font-bold text-white">RBAC</div>
                                  </div>
                                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                    <div className="text-[10px] text-zinc-400">Metrics</div>
                                    <div className="text-xs font-bold text-emerald-400">Realtime</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.mockType === "landing-preview" && (
                            <div className="space-y-3">
                              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                                <div>
                                  <div className="text-xs font-bold text-white">Core Web Vitals</div>
                                  <div className="text-[10px] text-amber-300">Fast Page Rendering & SEO</div>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-extrabold text-emerald-400">
                                  98
                                </div>
                              </div>
                            </div>
                          )}

                          {project.mockType === "ecommerce-suite" && (
                            <div className="space-y-3">
                              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FaShoppingCart className="text-cyan-400 text-lg" />
                                  <div>
                                    <div className="text-xs font-bold text-white">Checkout & Payment Feed</div>
                                    <div className="text-[10px] text-cyan-300">Cart Persistence & API Gateway</div>
                                  </div>
                                </div>
                                <span className="text-[10px] bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded font-bold">
                                  Secured
                                </span>
                              </div>
                            </div>
                          )}

                          {project.mockType === "mobile-frame" && (
                            <div className="space-y-3">
                              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FaMobileAlt className="text-purple-400 text-lg" />
                                  <div>
                                    <div className="text-xs font-bold text-white">Push Notification Sync</div>
                                    <div className="text-[10px] text-purple-300">Firebase & Redux Cache</div>
                                  </div>
                                </div>
                                <span className="text-[10px] bg-purple-500 text-white px-2 py-0.5 rounded font-bold">
                                  iOS/Android
                                </span>
                              </div>

                              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                                <span>Native Touch Responsiveness</span>
                                <span className="text-emerald-400 font-bold">60 FPS</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Status */}
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Production Codebase
                          </span>
                          <span className="font-semibold text-zinc-300">Verified Work</span>
                        </div>

                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Engineering Capabilities & Stack Pillars
            </h3>
            <p className="text-zinc-400 mt-2 text-base max-w-2xl mx-auto">
              Core technical pillars and development methodologies applied across all project work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${cap.color} mb-4 text-xl`}>
                    <CapIcon />
                  </div>
                  <h4 className="text-lg font-bold text-white">{cap.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

