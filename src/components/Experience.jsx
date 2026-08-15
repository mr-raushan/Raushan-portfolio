/* eslint-disable */
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const experiences = [
  {
    number: "01",
    role: "Software Engineer",
    company: "Where U Elevate",
    location: "India",
    duration: "Jan 2026 — Present",
    status: "Current Role",
    statusColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    description:
      "Engineered production-grade SaaS applications, enterprise administrative portals, and cross-platform mobile apps using React.js, Next.js, TypeScript, and React Native. Focused on frontend performance, robust state architecture, and sub-second core web vitals.",
    achievements: [
      "Architected scalable web applications and enterprise administrative control centers",
      "Delivered cross-platform mobile features with push notification feeds & offline caching",
      "Optimized client state management & REST API integrations across production suites",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Native",
      "Redux Toolkit",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    role: "Frontend Developer Intern",
    company: "Where U Elevate",
    location: "India",
    duration: "Sep 2025 — Dec 2025",
    status: "Completed",
    statusColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    description:
      "Developed high-conversion landing pages, interactive dashboard modules, user authentication flows, and reusable UI component libraries. Collaborated closely with senior developers and product designers.",
    achievements: [
      "Built responsive dashboard modules & secure authentication workflows",
      "Created modular component library decreasing UI development turnaround time",
      "Ensured pixel-perfect responsive fidelity across desktop, tablet, and mobile screens",
    ],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript", "REST APIs"],
  },
  {
    number: "03",
    role: "Frontend Developer Intern",
    company: "Digital Guruji",
    location: "India",
    duration: "2025",
    status: "Completed",
    statusColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    description:
      "Built responsive corporate websites and promotional landing pages using HTML5, CSS3, and JavaScript. Improved page load speeds and collaborated on frontend UI bug resolution.",
    achievements: [
      "Engineered responsive website layouts and interactive frontend components",
      "Collaborated on frontend bug fixes, cross-browser debugging, and layout polish",
      "Optimized website load times and mobile UI responsiveness",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Git", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Ambient background grid pattern and glowing lighting */}
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
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-6">
            <FaBriefcase className="text-xs" />
            <span>Career Path & Experience</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Engineering Products <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              For Real-World Impact
            </span>
          </h2>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-2xl p-8 md:p-12 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Number & Node */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-4 pb-6 lg:pb-0 lg:border-r border-white/10 lg:pr-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {exp.number}
                    </span>
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${exp.statusColor}`}>
                      {exp.status}
                    </span>
                  </div>

                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <FaBuilding className="text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-semibold text-sm mt-1">
                          {exp.company} <span className="text-zinc-500 font-normal">• {exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6 font-normal">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2.5 mb-8">
                      <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider block mb-2">
                        Key Responsibilities & Deliverables
                      </span>
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                          <FaCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider block mb-3">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-medium hover:border-blue-500/40 hover:text-white transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
