import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Resume() {
  const skills = {
    technical: [
      "HTML5, CSS3, JavaScript",
      "React, Next.js",
      "Python (Tkinter, Streamlit)",
      "Tailwind CSS",
      "MongoDB",
      "Git, GitHub",
      "Visual Studio Code",
      "Figma"
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Adaptability",
      "Time Management",
      "Creative Thinking",
      "Attention to Detail",
      "Continuous Learning"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-surface pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-orbitron text-4xl font-bold text-white mb-4"
            >
              ./resume
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>

          {/* Resume Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              className="cyber-border bg-gradient-to-r from-green-500/10 to-blue-500/10 hover-glow font-mono text-neon-green"
            >
              <a href="/resume.pdf" target="_blank">
                <Eye className="w-4 h-4 mr-2" />
                ./view_resume
              </a>
            </Button>
            <Button
              asChild
              className="border border-cyber hover:border-neon-green hover:text-neon-green font-mono transition-all duration-300"
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                ./download_resume
              </a>
            </Button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card/50 backdrop-blur-sm border border-cyber rounded-lg overflow-hidden mb-12"
          >
            <div className="p-4 border-b border-cyber bg-dark-surface/50">
              <h3 className="font-orbitron text-lg text-cyber-blue">Resume Preview</h3>
            </div>
            <div className="aspect-[8.5/11] bg-white">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </motion.div>

          {/* Skills Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Technical Skills</h3>
                  <div className="space-y-3">
                    {skills.technical.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 font-mono text-sm"
                      >
                        <span className="text-neon-green">•</span>
                        <span className="text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Soft Skills</h3>
                  <div className="space-y-3">
                    {skills.soft.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 font-mono text-sm"
                      >
                        <span className="text-cyber-blue">•</span>
                        <span className="text-slate-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
