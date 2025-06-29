import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code, GitBranch, Figma } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";

export default function About() {
  const techSkills = [
    { name: "React", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "Next.js", level: 80, color: "from-gray-500 to-gray-600" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
    { name: "Python", level: 80, color: "from-green-500 to-green-600" },
    { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
    { name: "Firebase", level: 80, color: "from-orange-500 to-orange-600" },
  ];

  const tools = [
    { name: "Git", icon: GitBranch, color: "text-orange-500" },
    { name: "VS Code", icon: Code, color: "text-blue-500" },
    { name: "Figma", icon: Figma, color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-surface pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-orbitron text-4xl font-bold text-neon-green glow-text mb-4"
            >
              ./about_me
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-6"
            >
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-4">System.out.println("About Me");</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A motivated junior developer skilled in React, Next.js, and React Native, Python, JavaScript actively building
                  responsive web and mobile applications, including air ticketing platforms and farming solutions.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Eager to grow and deliver user-focused, high-quality code in collaborative environments. Currently pursuing BSc. Computer Science and Information Technology at Bhairahawa Multiple Campus.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Contact.Info()</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-neon-green" />
                    <span>developerrajir@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-neon-green" />
                    <span>+977-9824423560</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-neon-green" />
                    <span>Devdaha, Rupandehi</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Tech Stack Visualization */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-6"
            >
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Tech Stack</h3>
                <div className="space-y-4">
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-dark-surface rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Development Tools</h3>
                <div className="grid grid-cols-3 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-dark-surface/50 rounded-lg border border-cyber/50 hover:border-neon-green transition-all"
                    >
                      <tool.icon className={`w-8 h-8 mx-auto mb-2 ${tool.color}`} />
                      <div className="text-xs font-mono">{tool.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
