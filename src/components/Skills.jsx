/* eslint-disable */
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMui,
  SiShadcnui,
  SiReactquery,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span
            className="
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-sm
              text-zinc-400
            "
          >
            Skills & Technologies
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              mt-8
              leading-tight
            "
          >
            Technologies I use
            <br />
            to build products.
          </h2>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.05]
            to-white/[0.02]
            backdrop-blur-xl
            p-8
            md:p-10
          "
        >
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-10 last:mb-0">
              {/* Category Header */}

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">{category.title}</h3>

                <span className="text-sm text-zinc-500">
                  {category.skills.length} Skills
                </span>
              </div>

              {/* Skills */}

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-5
                  gap-4
                "
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      group
                      relative
                      h-[90px]
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0a0a0a]
                      flex
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      cursor-pointer
                    "
                  >
                    {/* Hover Glow */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        bg-gradient-to-br
                        from-blue-500/10
                        to-purple-500/10
                      "
                    />

                    {/* Icon */}

                    <span
                      className="
                        relative
                        z-10
                        text-2xl
                        text-white
                        mb-2
                        group-hover:text-blue-400
                        transition-all
                        duration-300
                      "
                    >
                      {skill.icon}
                    </span>

                    {/* Name */}

                    <span
                      className="
                        relative
                        z-10
                        text-xs
                        text-zinc-400
                        group-hover:text-white
                        transition-all
                        duration-300
                        text-center
                        px-2
                      "
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}

              {category.title !== "Tools" && (
                <div className="h-px bg-white/10 mt-8" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
