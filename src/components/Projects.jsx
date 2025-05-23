/*eslint-disable*/
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blog App",
    description:
      "This is a fully responsive blog application built using the MERN stack. The app allows users to create, read, update, and delete blog posts while offering a clean and modern UI.",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
    demo: "https://blog-app-brown-psi.vercel.app/login",
    repo: "https://github.com/mr-raushan/Blog-App",
  },
  {
    title: "Youtube Clone",
    description:
      "This is a YouTube Clone built using React, Redux Toolkit, Tailwind CSS, and React Router DOM. It fetches real-time video data and provides a smooth user experience similar to YouTube.",
    image: "https://images.indianexpress.com/2021/06/YouTube-logo.jpg",
    demo: "#",
    repo: "https://github.com/mr-raushan/yt_clone",
  },
  {
    title: "Gmail Clone",
    description:
      "Enhancing UI skills by building a complex, responsive application with rich interactions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png",
    demo: "#",
    repo: "https://github.com/mr-raushan/gmailClone",
  },
  {
    title: "Tours Plan",
    description:
      "The website showcases beautiful destinations and tours, built using React and CSS.",
    image:
      "https://hotelwoodlandnainital.com/wp-content/uploads/2024/09/Plan-Your-Trip.png",
    demo: "#",
    repo: "https://github.com/mr-raushan/ToursPlan",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix-like web application built using MongoDB, Express.js, React.js, and Node.js.",
    image:
      "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png",
    demo: "#",
    repo: "https://github.com/mr-raushan/netflix",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app built with React and Tailwind CSS, allowing users to search real-time weather updates by city. It fetches live data from an external API and displays temperature, humidity, wind speed, and conditions with a clean, mobile-friendly UI.",
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
    demo: "https://weatherapp-lyart-two.vercel.app/",
    repo: "https://github.com/mr-raushan/weatherapp",
  },
];

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out dark:bg-gray-800 hover:shadow-xl rounded-xl shadow-lg overflow-hidden flex flex-col"
            variants={item}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
