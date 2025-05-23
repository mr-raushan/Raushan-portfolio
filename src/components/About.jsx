/*eslint-disable*/
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const skills = [
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  {
    icon: <RiTailwindCssFill className="text-cyan-400" />,
    name: "Tailwind CSS",
  },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <FaGithub className="text-gray-700" />, name: "GitHub" },
  { icon: <DiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiPostman className="text-red-500" />, name: "Postman" },
  { icon: <IoLogoVercel className="text-black" />, name: "Vercel" },
];

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

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto px-4 py-24 flex flex-col gap-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I'm a passionate frontend developer with a strong background in building
        modern, scalable web applications. I specialize in working with React,
        Redux, and JavaScript to create seamless, high-performance user
        interfaces. With a focus on clean code, responsive design, and intuitive
        user experiences, I strive to build solutions that are both functional
        and visually appealing. I'm always eager to learn new technologies,
        solve real-world problems, and collaborate on impactful projects
      </p>
      <motion.div
        className="flex flex-wrap gap-6 mt-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-2 cursor-pointer"
            variants={item}
          >
            <span className="text-4xl hover:scale-150 transition-all duration-300 ease-in-out">
              {skill.icon}
            </span>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
