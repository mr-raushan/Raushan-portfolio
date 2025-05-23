import { Link } from "react-router-dom";

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Footer = () => (
  <footer className="py-8 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <nav className="mb-2 flex flex-wrap justify-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={`#${link.id}`}
          onClick={(e) => scrollToSection(e, link.id)}
          className="hover:text-blue-500 transition-colors font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
    <div>
      &copy; {new Date().getFullYear()}{" "}
      <span className="font-bold underline italic">Raushan Kumar</span>. All
      rights reserved.
    </div>
  </footer>
);

export default Footer;
