/* eslint-disable */
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart, FaCode, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] py-20 px-6 overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                RK
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Raushan <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Kumar</span>
              </h2>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-md font-normal">
              Software Engineer specialized in building production-grade web applications, SaaS dashboards, and cross-platform mobile apps using React, Next.js, TypeScript, and React Native.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Software Engineer @ Where U Elevate</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-400">
              {[
                { name: "About Me", href: "#about" },
                { name: "Featured Projects", href: "#projects" },
                { name: "Career Experience", href: "#experience" },
                { name: "Skills & Stack", href: "#skills" },
                { name: "Get In Touch", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Connect Hub (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Connect Across Web
            </h3>
            <p className="text-zinc-400 text-sm">
              Feel free to reach out on GitHub, LinkedIn, or send a direct email.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/mr-raushan"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/raushan-kumar-ba0a28273/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:kraushan9056@gmail.com"
                className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                title="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Raushan Kumar</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Crafted with</span>
            <FaHeart className="text-rose-500 text-xs animate-pulse" />
            <span>using React, Tailwind CSS & Framer Motion.</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
