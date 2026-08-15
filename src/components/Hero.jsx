/* eslint-disable */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaBriefcase,
  FaCode,
  FaTerminal,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import resume from "../assets/raushan.pdf";
import landingPageAvatar from "../assets/landingPage_avatar.jpg";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "Next.js Specialist",
  "React Native Developer",
  "Software Engineer",
];

const TYPING_SPEED = 80;
const PAUSE_DURATION = 1400;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_DURATION);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length - 1));
        }, TYPING_SPEED / 2);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] overflow-hidden text-white pt-28 pb-20 flex items-center justify-center"
    >
      {/* Background Grid Pattern & Ambient Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing Ambient Radial Orbs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Availability & Location Badge */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-emerald-300">
                  Available for Work
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-zinc-400">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>New Delhi</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                Raushan
              </span>
            </h1>

            {/* Interactive Terminal Pill */}
            <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-xl max-w-xl">
              <div className="flex items-center gap-2 pb-2.5 border-b border-white/10 text-xs text-zinc-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-zinc-400">developer.config.ts</span>
              </div>
              <div className="mt-3 flex items-center gap-3 font-mono text-sm sm:text-base">
                <span className="text-purple-400 font-bold">const</span>
                <span className="text-blue-400">role</span>
                <span className="text-white">=</span>
                <span className="text-emerald-300 font-bold">"{displayed}"</span>
                <span className="w-2 h-5 bg-blue-400 animate-pulse rounded-full" />
              </div>
            </div>

            {/* Short Bio */}
            <p className="mt-6 text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Software Engineer at <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">Where U Elevate</span>. Specializing in architecting high-performance React & Next.js web applications, cross-platform mobile apps with React Native, and enterprise UI systems.
            </p>

            {/* Buttons & Socials */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <span>View Projects</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-xl font-medium text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FaDownload className="text-blue-400" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                <a
                  href="https://github.com/mr-raushan"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/mr-raushan"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

            {/* Glassmorphic Metric Stat Cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/10 max-w-xl">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  1+ Yrs
                </span>
                <span className="text-xs text-zinc-400 mt-1 block font-medium">Software Engineer</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  4 Web
                </span>
                <span className="text-xs text-zinc-400 mt-1 block font-medium">Production Apps</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  1 Mobile
                </span>
                <span className="text-xs text-zinc-400 mt-1 block font-medium">React Native App</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-8">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                Core Stack
              </span>
              <div className="flex gap-2 flex-wrap">
                {["React.js", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Redux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-zinc-300 font-medium hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative group w-full max-w-[420px] sm:max-w-[460px]">

              {/* Animated Outer Gradient Halo */}
              <div className="absolute -inset-1.5 rounded-[42px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-40 blur-2xl group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

              {/* Main Avatar Frame */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[40px] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl p-4 sm:p-5 shadow-[0_0_90px_rgba(59,130,246,0.18)] overflow-hidden"
              >
                <img
                  src={landingPageAvatar}
                  alt="Raushan Kumar"
                  className="w-full h-[420px] sm:h-[500px] rounded-[30px] object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating Badge 1: Top-Left Company Role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-8 left-8 px-4 py-2.5 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl flex items-center gap-3 shadow-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <FaBriefcase className="text-sm" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Company</div>
                    <div className="text-xs font-bold text-white">Where U Elevate</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Top-Right Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute top-8 right-8 px-3.5 py-2 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl flex items-center gap-2 shadow-xl text-xs font-bold text-cyan-300"
                >
                  <FaCode className="text-blue-400" />
                  <span>React / React Native</span>
                </motion.div>

                {/* Floating Badge 3: Bottom Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 p-3.5 rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-between shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">Production Ready</div>
                      <div className="text-[10px] text-zinc-400">Web & Mobile Architect</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30">
                    SaaS & Mobile
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
