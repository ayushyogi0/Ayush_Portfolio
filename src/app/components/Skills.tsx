import { Palette, Search, Layout, Smartphone, Figma as FigmaIcon, Box, BarChart3, TrendingUp, FileSpreadsheet, PieChart } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Design Skills",
      skills: [
        { name: "UI Design", icon: Palette, color: "from-blue-500 to-cyan-500" },
        { name: "UX Research", icon: Search, color: "from-purple-500 to-pink-500" },
        { name: "Wireframing", icon: Layout, color: "from-green-500 to-emerald-500" },
        { name: "App Marketing Poster", icon: Smartphone, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Figma", icon: FigmaIcon, color: "from-pink-500 to-rose-500" },
        { name: "VS Code", icon: Box, color: "from-indigo-500 to-blue-500" },
        { name: "Canva", icon: Palette, color: "from-teal-500 to-cyan-500" },
        { name: "Web UI & Frontend", icon: Layout, color: "from-violet-500 to-purple-500" },
      ],
    },
    {
      title: "Data Skills",
      skills: [
        { name: "Data Analysis", icon: BarChart3, color: "from-blue-500 to-indigo-500" },
        { name: "Data Visualization", icon: PieChart, color: "from-purple-500 to-fuchsia-500" },
        { name: "Excel", icon: FileSpreadsheet, color: "from-green-500 to-teal-500" },
        { name: "Dashboard Design", icon: TrendingUp, color: "from-orange-500 to-amber-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            A comprehensive set of design and analytical skills to create impactful digital experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white mb-6"
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                        <skill.icon className="text-white" size={28} />
                      </div>
                      <h4 className="text-white font-semibold">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
