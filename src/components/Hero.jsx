/* eslint-disable */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import resume from "../assets/raushan.pdf";
import landingPageAvatar from "../assets/landingPage_avatar.jpg";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "Next.js Developer",
  "React Native Developer",
  "Software Engineer",
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
      className="
        relative
        min-h-screen
        bg-[#050505]
        overflow-hidden
        text-white
        pt-32
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/15 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/15 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Available */}

            <div className="mb-8">
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                <div className="relative flex h-3 w-3">
                  <span
                    className="
                      absolute
                      h-full
                      w-full
                      rounded-full
                      bg-green-500
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      h-3
                      w-3
                      rounded-full
                      bg-green-500
                    "
                  />
                </div>

                <span className="text-sm text-zinc-300">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Heading */}

            <h1
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-bold
                leading-[0.95]
                tracking-tight
              "
            >
              Hi, I'm
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-zinc-200
                  to-zinc-500
                  bg-clip-text
                  text-transparent
                "
              >
                Raushan
              </span>
            </h1>

            {/* Typing */}

            <div className="h-12 mt-6 flex items-center">
              <span
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  bg-gradient-to-r
                  from-blue-400
                  to-purple-400
                  bg-clip-text
                  text-transparent
                "
              >
                {displayed}
              </span>

              <span className="text-blue-400 animate-pulse">|</span>
            </div>

            {/* Description */}

            <p
              className="
                mt-6
                text-base
                md:text-lg
                text-zinc-400
                leading-8
                max-w-xl
              "
            >
              Software Engineer at Where U Elevate, building scalable web and
              mobile products using React, Next.js, TypeScript and React Native.
            </p>

            {/* Buttons */}

            <div className="flex gap-4 mt-10 flex-wrap">
              <a
                href="#projects"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  font-medium
                  hover:scale-105
                  transition-all
                "
              >
                View Projects
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  transition-all
                "
              >
                Resume
              </a>
            </div>

            {/* Stats */}

            <div
              className="
                flex
                gap-10
                mt-10
                pt-8
                border-t
                border-white/10
                flex-wrap
              "
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">1+</h3>

                <p className="text-zinc-500 text-sm">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">4+</h3>

                <p className="text-zinc-500 text-sm">Products Built</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">10+</h3>

                <p className="text-zinc-500 text-sm">Projects</p>
              </div>
            </div>

            {/* Tech Stack */}

            <div className="flex gap-3 flex-wrap mt-10">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1.5
                    text-sm
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-zinc-300
                    hover:text-white
                    hover:border-blue-500/40
                    transition-all
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                shadow-[0_0_100px_rgba(59,130,246,0.08)]
              "
            >
              <img
                src={landingPageAvatar}
                alt="Raushan Kumar"
                className="
                  w-[320px]
                  md:w-[420px]
                  lg:w-[480px]
                  rounded-[24px]
                  object-cover
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
