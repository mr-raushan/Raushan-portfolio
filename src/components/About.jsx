/* eslint-disable */
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiReactquery,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "React Query",
    icon: <SiReactquery />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span
            className="
            px-4 py-2
            rounded-full
            border border-white/10
            bg-white/5
            text-sm
            text-zinc-400
          "
          >
            About Me
          </span>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-bold
            mt-8
            leading-tight
          "
          >
            Building products
            <br />
            that people enjoy using.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>

            <p className="text-zinc-400 leading-8">
              I'm a Frontend Developer with experience building scalable web and
              mobile applications using React, Next.js, TypeScript and React
              Native.
              <br />
              <br />
              Currently working as a Software Engineer where I develop
              production-grade applications, improve user experiences and
              collaborate with cross-functional teams to deliver high-quality
              products.
              <br />
              <br />I enjoy turning complex problems into simple, beautiful and
              intuitive user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Highlights</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-4xl font-bold text-white">1+</h4>
                <p className="text-zinc-400">
                  Years of Professional Experience
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-white">10+</h4>
                <p className="text-zinc-400">Projects Developed</p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-white">React</h4>
                <p className="text-zinc-400">Frontend & Mobile Development</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold mb-10">Tech Stack</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  cursor-pointer
                "
              >
                <div className="text-4xl text-white">{tech.icon}</div>

                <p className="text-zinc-400 group-hover:text-white transition">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
