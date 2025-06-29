import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Resume() {
  const skills = {
    technical: [
      "React, TypeScript, JavaScript",
      "Node.js, Express.js",
      "AWS, Docker, Kubernetes",
      "PostgreSQL, MongoDB, Redis",
      "GraphQL, REST APIs",
      "CI/CD, DevOps, Git",
      "Next.js, Tailwind CSS",
      "Performance Optimization"
    ],
    soft: [
      "Technical Leadership",
      "System Architecture",
      "Code Review & Mentoring",
      "Agile/Scrum Methodologies",
      "Cross-functional Collaboration",
      "Problem Solving & Analysis",
      "Project Management",
      "Client Communication"
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
              Resume & Skills
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-readable-lg max-w-2xl mx-auto"
            >
              2+ years of web development experience with focus on modern JavaScript technologies
            </motion.p>
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
                View Resume
              </a>
            </Button>
            <Button
              asChild
              className="border border-cyber hover:border-neon-green hover:text-neon-green font-mono transition-all duration-300"
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </motion.div>

          {/* Complete Resume Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="professional-card p-8 mb-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12 border-b border-cyber pb-8">
                <h1 className="text-4xl font-orbitron font-bold gradient-text mb-4">
                  YUBRAJ KURMI
                </h1>
                <h2 className="text-xl text-cyber-blue mb-4">Full Stack Developer</h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300 font-mono">
                  <div>📧 developerrajir@gmail.com</div>
                  <div>📱 +977-98XXXXXXXX</div>
                  <div>📍 Devdaha, Rupandehi, Nepal</div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/DevMaestroHQ" className="text-neon-green hover:text-neon-green-bright">GitHub</a>
                  <a href="https://linkedin.com/in/yuvrajkurmi03" className="text-cyber-blue hover:text-neon-blue-bright">LinkedIn</a>
                  <a href="https://yuvrajkurmi.github.com" className="text-neon-purple hover:text-neon-purple-bright">Portfolio</a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-orbitron text-neon-green mb-4 border-l-4 border-neon-green pl-4">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Senior Full Stack Developer with 5+ years of expertise in building scalable web applications and enterprise solutions. 
                  Proven track record of delivering high-performance applications serving 50,000+ users with 99.9% uptime. 
                  Specialized in React, Node.js, cloud architecture, and DevOps practices. Led teams of 8+ developers and 
                  managed projects worth $2M+ in transaction volume.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-orbitron text-neon-green mb-6 border-l-4 border-neon-green pl-4">
                  PROFESSIONAL EXPERIENCE
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-cyber-blue pl-6">
                    <h4 className="text-lg font-bold text-white">Senior Full Stack Developer</h4>
                    <div className="text-cyber-blue font-mono text-sm mb-2">TechCorp Solutions | 2022 - Present</div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Architected and developed 15+ enterprise applications serving 50,000+ users</li>
                      <li>• Led team of 8 developers, implementing Agile methodologies and code review processes</li>
                      <li>• Optimized application performance by 40% through advanced caching and database optimization</li>
                      <li>• Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes</li>
                      <li>• Managed $2M+ transaction processing systems with 99.9% uptime</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-cyber-blue pl-6">
                    <h4 className="text-lg font-bold text-white">Full Stack Developer</h4>
                    <div className="text-cyber-blue font-mono text-sm mb-2">Digital Innovations Ltd | 2020 - 2022</div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Developed 10+ client projects using React, Node.js, and cloud technologies</li>
                      <li>• Integrated third-party APIs and payment gateways for e-commerce platforms</li>
                      <li>• Implemented responsive designs increasing mobile engagement by 35%</li>
                      <li>• Collaborated with Fortune 500 clients on enterprise solutions</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-cyber-blue pl-6">
                    <h4 className="text-lg font-bold text-white">Frontend Developer</h4>
                    <div className="text-cyber-blue font-mono text-sm mb-2">StartupTech | 2019 - 2020</div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Built interactive user interfaces for 5+ SaaS applications</li>
                      <li>• Implemented modern JavaScript frameworks and state management</li>
                      <li>• Improved application load times by 50% through optimization techniques</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-orbitron text-neon-green mb-4 border-l-4 border-neon-green pl-4">
                  EDUCATION
                </h3>
                <div className="border-l-2 border-cyber-blue pl-6">
                  <h4 className="text-lg font-bold text-white">Bachelor of Computer Science</h4>
                  <div className="text-cyber-blue font-mono text-sm mb-2">Tribhuvan University | 2016 - 2020</div>
                  <p className="text-slate-300 text-sm">
                    Graduated with First Class Honors. Specialized in Software Engineering and Web Technologies.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-xl font-orbitron text-neon-green mb-4 border-l-4 border-neon-green pl-4">
                  CERTIFICATIONS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-slate-300">
                    <div className="font-bold text-white">AWS Certified Solutions Architect</div>
                    <div className="text-sm text-cyber-blue">Amazon Web Services | 2023</div>
                  </div>
                  <div className="text-slate-300">
                    <div className="font-bold text-white">Google Cloud Professional Developer</div>
                    <div className="text-sm text-cyber-blue">Google Cloud Platform | 2022</div>
                  </div>
                  <div className="text-slate-300">
                    <div className="font-bold text-white">Certified Kubernetes Administrator</div>
                    <div className="text-sm text-cyber-blue">Cloud Native Computing Foundation | 2023</div>
                  </div>
                  <div className="text-slate-300">
                    <div className="font-bold text-white">MongoDB Certified Developer</div>
                    <div className="text-sm text-cyber-blue">MongoDB University | 2022</div>
                  </div>
                </div>
              </div>
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
