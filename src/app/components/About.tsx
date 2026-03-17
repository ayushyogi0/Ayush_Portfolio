import { Palette, BarChart3, Users, PieChart } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const infoCards = [
    { icon: Palette, title: "UI/UX Design", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "Data Analysis", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "SEO & Social Media Manager", color: "from-green-500 to-emerald-500" },
    { icon: PieChart, title: "Data Visualization", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300">
                <img
                  src="/Ayush_02.jpeg"
                  alt="About Ayush"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-white font-semibold">Ayush Yogi</span> is a passionate UI/UX designer and data analyst who focuses on creating modern digital experiences and turning raw data into actionable insights. With a strong focus on user-centered design and analytical thinking, he builds products that are both visually engaging and data-driven.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {infoCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white font-semibold">{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
