/*eslint-disable*/
import { useState, useEffect } from "react";
import heroImg from "../assets/raushan_ghibli.png";
import resume from "../assets/raushan__kumar.pdf";
import { motion } from "framer-motion";

const roles = [
  "React.js Developer",
  "Frontend Developer",
  "Web Developer",
  "UI/UX Designer",
  "MERN Stack Developer",
];

const TYPING_SPEED = 80;
const PAUSE_DURATION = 1200;

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
      className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-24 gap-12"
    >
      <motion.div
        className="flex-1 flex flex-col items-start justify-center gap-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm Raushan Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 min-h-[2.5rem]">
          <span>{displayed}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
          I specialize in building beautiful, responsive, and high-performance
          web applications using React and modern technologies. With a strong
          focus on clean code, intuitive UI/UX, and scalability, I aim to
          deliver solutions that not only look great but also function
          seamlessly across all devices. I'm always excited to take on new
          challenges and collaborate on innovative projects that make an impact.
          Let's work together to bring your vision to life!
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
          >
            View Projects
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          >
            View Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.img
          src={heroImg}
          alt="Raushan Kumar"
          className="w-96 h-96 object-contain p-4 shadow-md rounded-2xl "
          whileHover={{ scale: 1.04, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
