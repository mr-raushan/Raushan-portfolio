import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900 shadow-xl h-16 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          <Link to="/">Raushan Kumar</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg absolute top-full left-0 w-full animate-fade-in flex flex-col items-center py-6 gap-6 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`#${link.id}`}
              onClick={(e) =>
                scrollToSection(e, link.id, () => setMenuOpen(false))
              }
              className="text-lg font-medium hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
