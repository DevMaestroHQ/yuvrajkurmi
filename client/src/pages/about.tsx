import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code, GitBranch, Figma } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";
import AchievementBadge from "@/components/ui/achievement-badge";

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
                <p className="text-readable-lg leading-relaxed mb-4">
                  Experienced full-stack developer with 2+ years of hands-on experience building responsive web and mobile applications. 
                  Specializing in React, Next.js, Python, and React Native with a track record of delivering high-quality solutions 
                  for health platforms, educational tools, and agricultural applications.
                </p>
                <p className="text-readable-lg leading-relaxed">
                  Passionate about clean code, user experience, and collaborative development. Currently pursuing BSc. Computer Science 
                  and Information Technology while actively contributing to real-world projects. Available for full-time opportunities 
                  and exciting freelance projects.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Contact.Info()</h3>
                <div className="space-y-3 font-mono text-base">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-neon-green" />
                    <span className="text-readable">developerrajir@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-neon-green" />
                    <span className="text-readable">+977-9824423560</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-neon-green" />
                    <span className="text-readable">Devdaha, Rupandehi</span>
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
                        <span className="text-base font-mono text-readable">{skill.name}</span>
                        <span className="text-sm text-muted-readable">{skill.level}%</span>
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
                      <div className="text-sm font-mono text-readable">{tool.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Key Achievements Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12"
          >
            <h3 className="font-orbitron text-2xl text-cyber-blue mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AchievementBadge
                title="Full Stack Projects"
                description="Successfully delivered 4+ complete web applications including health platforms and educational tools"
                icon="code"
                color="neon-green"
                delay={0}
              />
              <AchievementBadge
                title="Mobile Development"
                description="Contributed to React Native mobile app for agricultural solutions with team collaboration"
                icon="users"
                color="cyber-blue"
                delay={0.1}
              />
              <AchievementBadge
                title="Modern Tech Stack"
                description="Proficient in React, Next.js, Python, MongoDB with focus on latest development practices"
                icon="star"
                color="neon-purple"
                delay={0.2}
              />
              <AchievementBadge
                title="Problem Solving"
                description="Automated web scraping solutions for educational content integration and data processing"
                icon="target"
                color="yellow-400"
                delay={0.3}
              />
              <AchievementBadge
                title="Quality Focus"
                description="Emphasis on code quality, user experience, and collaborative development workflows"
                icon="award"
                color="pink-400"
                delay={0.4}
              />
              <AchievementBadge
                title="Continuous Learning"
                description="Currently pursuing BSc. Computer Science while actively developing real-world applications"
                icon="trophy"
                color="green-400"
                delay={0.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
