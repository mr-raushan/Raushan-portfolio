/* eslint-disable */
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProjects = [
  {
    title: "KnowThySelf Platform",
    year: "2026",
    description:
      "A modern self-discovery platform focused on personal growth, mentorship and digital learning experiences.",

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],

    demo: "https://knowthyselves.in/",
  },

  {
    title: "BME360 Mobile App",
    year: "2026",

    description:
      "Cross-platform mobile application built with React Native featuring notifications, pagination, APIs and scalable architecture.",

    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",

    tech: ["React Native", "TypeScript", "Redux", "Firebase"],

    demo: "https://bme360.tech/",
  },

  {
    title: "KnowThySelf Admin Dashboard",
    year: "2026",

    description:
      "Advanced admin dashboard for managing users, content and platform operations with analytics and reporting.",

    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

    tech: ["React", "Redux", "REST API", "TypeScript"],

    demo: "#",
  },

  {
    title: "Sach India Landing Page",
    year: "2025",

    description:
      "Modern business landing page optimized for performance, responsiveness and conversion-focused user journeys.",

    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",

    tech: ["React", "Tailwind CSS", "JavaScript"],

    demo: "#",
  },
];

const sideProjects = [
  {
    title: "Blog App",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44",

    github: "https://github.com/mr-raushan/Blog-App",
  },

  {
    title: "YouTube Clone",

    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",

    github: "https://github.com/mr-raushan/yt_clone",
  },

  {
    title: "Gmail Clone",

    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",

    github: "https://github.com/mr-raushan/gmailClone",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            text-zinc-400
            text-sm
          "
          >
            Featured Work
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
            Selected Projects
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            text-zinc-400
            text-lg
          "
          >
            Real-world applications, dashboards and mobile experiences I've
            built and worked on.
          </p>
        </motion.div>

        {/* Large Featured Project */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          mb-8
        "
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-zinc-500 text-sm">
                {featuredProjects[0].year}
              </span>

              <h3 className="text-4xl font-bold mt-3">
                {featuredProjects[0].title}
              </h3>

              <p className="mt-6 text-zinc-400 leading-8">
                {featuredProjects[0].description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {featuredProjects[0].tech.map((item) => (
                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-sm
                  "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={featuredProjects[0].demo}
                className="
                flex
                items-center
                gap-3
                mt-10
                text-white
              "
              >
                View Project
                <FaArrowRight />
              </a>
            </div>

            <div className="overflow-hidden">
              <img
                src={featuredProjects[0].image}
                alt=""
                className="
                h-full
                w-full
                object-cover
                hover:scale-105
                transition-all
                duration-700
              "
              />
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.slice(1).map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="
                    h-full
                    w-full
                    object-cover
                    hover:scale-105
                    transition-all
                    duration-700
                  "
                />
              </div>

              <div className="p-8">
                <span className="text-zinc-500">{project.year}</span>

                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

                <p className="text-zinc-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        border-white/10
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Projects */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">Other Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  p-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  hover:bg-white/[0.06]
                  transition-all
                "
              >
                <span>{project.title}</span>

                <FaGithub />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
