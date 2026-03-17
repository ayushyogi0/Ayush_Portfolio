import { useState, useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const roles = [
    "UI/UX Designer",
    "Data Analyst",
    "Product Designer",
    "Creative Thinker"
  ];

  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedRole((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Pause before moving to next role
      const timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDisplayedRole("");
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full"
            >
              <p className="text-blue-300 text-xs sm:text-sm">Welcome to my portfolio</p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Hello, my name's <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Ayush.</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2 min-h-16 sm:min-h-24"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent h-10 sm:h-12 flex items-center">
                {displayedRole}
                <span className="animate-blink ml-1">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            >
              I design intuitive digital experiences and transform complex data into meaningful insights through creative design and smart analytics.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <a href="/AyushYogi_Cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Download size={20} />
                  View CV
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#portfolio" className="no-underline w-full sm:w-auto">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
                  View My Work
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Pala Shaped Glowing Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Glowing Background */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-600/60 rounded-3xl blur-3xl"
              ></motion.div>

              {/* Pala Shaped Profile Image with Glow */}
              <motion.div
                animate={{
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, 5, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ perspective: "1500px" }}
                className="relative z-20"
              >
                {/* Image Container - Pala Shape */}
                <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300">
                  <img
                    src="/Ayush_yogi 01.jpeg"
                    alt="Ayush Yogi"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>

                {/* Inner Glow Pulse */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl blur-2xl"
                ></motion.div>
              </motion.div>

              {/* Floating Background Elements */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-40 blur-3xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 blur-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40"
        >
          {[
            { Icon: Github, link: "https://github.com/ayushyogi0", label: "GitHub" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/ayushyogi", label: "LinkedIn" },
            { Icon: Instagram, link: "https://www.instagram.com/ayush_yogi09?igsh=b2c1cGY2bWxjdmE5", label: "Instagram" },
          ].map(({ Icon, link, label }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
