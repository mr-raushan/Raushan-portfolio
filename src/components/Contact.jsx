/* eslint-disable */
import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "32342261-da0a-4155-8965-5702ef223708",

          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
            Contact
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
            Let's build
            <br />
            something great.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
            "
          >
            <h3 className="text-3xl font-bold">Get In Touch</h3>

            <p
              className="
              mt-6
              text-zinc-400
              leading-8
            "
            >
              I'm currently open to frontend, React, Next.js and React Native
              opportunities.
              <br />
              <br />
              Whether you have a project, freelance work or just want to
              connect, feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope
                  className="
                  text-blue-400
                  text-xl
                "
                />

                <span>kraushan9056@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationDot
                  className="
                  text-purple-400
                  text-xl
                "
                />
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/mr-raushan"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/raushan-kumar-ba0a28273/"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
            "
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  outline-none
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  outline-none
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Send Message
              </button>

              {status && (
                <p
                  className="
                  text-center
                  text-sm
                  text-zinc-400
                "
                >
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
