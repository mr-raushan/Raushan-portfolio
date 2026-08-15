/* eslint-disable */
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "About",
      id: "about",
    },
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 pt-5">
      <nav
        className="
        max-w-7xl
        mx-auto
        h-16
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_30px_rgb(0,0,0,0.3)]
        flex
        items-center
        justify-between
        px-6
      "
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          <span className="text-white">Raushan</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            .
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-zinc-400
                hover:text-white
                transition-all
                duration-300
                text-sm
                tracking-wide
              "
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              text-zinc-400
              hover:text-white
              transition-all
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              text-zinc-400
              hover:text-white
              transition-all
            "
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              px-5
              py-2.5
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition-all
            "
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            mt-3
            rounded-2xl
            border
            border-white/10
            bg-[#0f172a]/95
            backdrop-blur-xl
            p-6
          "
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-left
                  text-zinc-300
                  hover:text-white
                  transition-all
                "
              >
                {item.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                w-fit
                px-5
                py-2
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-purple-600
              "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
