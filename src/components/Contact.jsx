/*eslint-disable*/
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-2xl mx-auto px-4 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <motion.form
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.input
          type="text"
          placeholder="Name"
          className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={item}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={item}
        />
        <motion.textarea
          placeholder="Message"
          rows={5}
          className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={item}
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
          variants={item}
        >
          Send Message
        </motion.button>
      </motion.form>
      <motion.div
        className="flex justify-center gap-8 mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a
          href="https://www.linkedin.com/in/raushan-kumar-ba0a28273/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-700 hover:text-blue-900"
          variants={item}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/mr-raushan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
          variants={item}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-400 hover:text-blue-600"
          variants={item}
        >
          <FaTwitter />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
