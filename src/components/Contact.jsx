/* eslint-disable */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaClock,
  FaUser,
  FaMessage,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");

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
        setStatus("✅ Message sent successfully! I will reply soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please email directly.");
      }
    } catch {
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-6">
            <FaPaperPlane className="text-xs" />
            <span>Get In Touch • Available For Work</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500"
          >
            <div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Engineering Roles & Projects</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                Have a Project in Mind?
              </h3>

              <p className="text-zinc-300 leading-relaxed text-base mb-8">
                I engineer production-grade web apps, Next.js platforms, and React Native mobile applications. Whether you have a job opportunity, freelance build, or technical query, feel free to drop a message!
              </p>

              {/* Direct Info List */}
              <div className="space-y-5 pt-6 border-t border-white/10">
                <a
                  href="mailto:kraushan9056@gmail.com"
                  className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">kraushan9056@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 text-lg">
                    <FaLocationDot />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-white">New Delhi, India <span className="text-zinc-400 text-xs">(IST • GMT +5:30)</span></span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-lg">
                    <FaClock />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider block">Turnaround Time</span>
                    <span className="text-sm font-semibold text-white">Response within &lt; 12 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Hub Links */}
            <div className="pt-8 border-t border-white/10 mt-8">
              <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider block mb-4">
                Connect Across Platforms
              </span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mr-raushan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-medium hover:border-white/30 hover:bg-white/[0.08] transition-all text-sm"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/raushan-kumar-ba0a28273/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 font-medium hover:border-blue-500/40 hover:bg-blue-500/20 transition-all text-sm"
                >
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-zinc-400 text-sm mb-8">
                Fill out the form below and I will get back to you shortly.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Project / Message Details
                  </label>
                  <div className="relative">
                    <FaMessage className="absolute left-4 top-5 text-zinc-500 text-sm" />
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Tell me about your project, role, or collaboration ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className={isSubmitting ? "animate-bounce" : ""} />
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
              </button>

              {status && (
                <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center text-xs font-medium text-zinc-300">
                  {status}
                </div>
              )}
            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
