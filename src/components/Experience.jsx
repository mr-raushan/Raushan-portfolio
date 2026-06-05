/* eslint-disable */
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    number: "01",
    role: "Software Engineer",
    company: "Where U Elevate",
    duration: "Jan 2026 — Present",

    description:
      "Building production-grade SaaS applications, admin dashboards and mobile applications using React.js, Next.js, TypeScript and React Native. Contributed to KnowThySelves, BME360, Adya Marketplace and other client-facing products.",

    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Native",
      "Redux",
      "REST APIs",
    ],
  },

  {
    number: "02",
    role: "Frontend Developer Intern",
    company: "Where U Elevate",
    duration: "Sep 2025 — Dec 2025",

    description:
      "Developed responsive landing pages, dashboard modules, authentication flows and reusable UI components. Worked closely with senior developers on production-ready applications.",

    tech: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript", "REST APIs"],
  },

  {
    number: "03",
    role: "Frontend Developer Intern",
    company: "Digital Guruji",
    duration: "2025",

    description:
      "Built responsive websites and landing pages using HTML, CSS and JavaScript. Improved UI responsiveness and collaborated on frontend enhancements and bug fixes.",

    tech: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-24"
        >
          <span
            className="
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-zinc-400
              text-sm
            "
          >
            Experience
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Building products
            <br />
            for real users.
          </h2>
        </motion.div>

        {/* Experience Cards */}

        <div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.number}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                border-b
                border-white/10
                py-14
              "
            >
              <div
                className="
                  grid
                  lg:grid-cols-[120px_1fr]
                  gap-10
                "
              >
                {/* Number */}

                <div>
                  <h2
                    className="
                      text-6xl
                      md:text-7xl
                      font-black
                      text-zinc-800
                      group-hover:text-blue-500
                      transition-all
                      duration-500
                    "
                  >
                    {exp.number}
                  </h2>
                </div>

                {/* Content */}

                <div>
                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-3xl
                          font-bold
                        "
                      >
                        {exp.role}
                      </h3>

                      <p
                        className="
                          text-blue-400
                          mt-2
                        "
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div
                      className="
                        text-zinc-500
                      "
                    >
                      {exp.duration}
                    </div>
                  </div>

                  <p
                    className="
                      mt-8
                      text-zinc-400
                      leading-8
                      max-w-4xl
                    "
                  >
                    {exp.description}
                  </p>

                  {/* Tech */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                      mt-8
                    "
                  >
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Arrow */}

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-3
                      text-blue-400
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-300
                    "
                  >
                    <span>View Details</span>

                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
