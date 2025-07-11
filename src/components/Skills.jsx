/*eslint-disable*/
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: (theme) => <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: (theme) => <SiRedux className="text-purple-500" /> },
  { name: "Javascript", icon: (theme) => <FaJs className="text-yellow-400" /> },
  {
    name: "Tailwind CSS",
    icon: (theme) => <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Shadcn UI",
    icon: (theme) => <SiShadcnui className="text-blue-500" />,
  },
  {
    name: "Material UI",
    icon: (theme) => <SiMui className="text-blue-500" />,
  },
  { name: "HTML", icon: (theme) => <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: (theme) => <FaCss3Alt className="text-blue-500" /> },
  { name: "GitHub", icon: (theme) => <FaGithub className="text-gray-700" /> },
  { name: "Git", icon: (theme) => <FaGitAlt className="text-orange-600" /> },
  { name: "Node.js", icon: (theme) => <FaNodeJs className="text-green-600" /> },
  {
    name: "Express.js",
    icon: (theme) => <SiExpress className="text-red-500" />,
  },
  {
    name: "MongoDB",
    icon: (theme) => <DiMongodb className="text-green-500" />,
  },
  { name: "Postman", icon: (theme) => <SiPostman className="text-red-500" /> },
  { name: "Vercel", icon: (theme) => <IoLogoVercel className="text-black" /> },
  { name: "Netlify", icon: (theme) => <SiNetlify className="text-blue-500" /> },
  { name: "VSCode", icon: (theme) => <VscVscode className="text-blue-500" /> },
  { name: "Linux", icon: (theme) => <FcLinux className="text-blue-500" /> },
];

import { useEffect, useState } from "react";

const getTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-4 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">My Top Skills</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-4 cursor-pointer  bg-gray-800 border  hover:bg-gray-700 duration-300 transition-all ease-in-out
            border-gray-700 rounded-lg px-6 py-5 shadow hover:shadow-lg min-h-[72px]"
            variants={item}
          >
            <span className="text-3xl md:text-4xl">{skill.icon(theme)}</span>
            <span className="font-semibold text-lg md:text-xl  text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
