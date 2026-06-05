/* eslint-disable */
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        bg-[#050505]
        py-20
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-12
          "
        >
          <div>
            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
              "
            >
              Raushan Kumar
            </h2>

            <p
              className="
                mt-5
                text-zinc-400
                max-w-md
                leading-8
              "
            >
              Frontend Engineer focused on building modern web and mobile
              applications using React, Next.js and React Native.
            </p>
          </div>
          <div>
            <h3
              className="
                text-zinc-500
                uppercase
                tracking-widest
                text-sm
                mb-6
              "
            >
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/mr-raushan"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-2xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition-all
                "
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/raushan-kumar-ba0a28273/"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-2xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition-all
                "
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:kraushan9056@gmail.com"
                className="
                  p-4
                  rounded-2xl
                  border
                  border-white/10
                  hover:bg-white/5
                  transition-all
                "
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            border-t
            border-white/10
            my-10
          "
        />
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
            text-sm
            text-zinc-500
          "
        >
          <p>
            © {new Date().getFullYear()} Raushan Kumar. All rights reserved.
          </p>

          <p>Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
