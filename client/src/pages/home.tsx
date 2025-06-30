import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, User, Mail, Github, Linkedin, Download, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Home() {
  const skills = [
    { name: "React/Next.js", level: "Expert", icon: "⚛️" },
    { name: "Node.js/Express", level: "Advanced", icon: "🟢" },
    { name: "TypeScript", level: "Advanced", icon: "🔷" },
    { name: "MongoDB/PostgreSQL", level: "Advanced", icon: "🗄️" },
    { name: "AWS/Cloud", level: "Intermediate", icon: "☁️" },
    { name: "Docker/DevOps", level: "Intermediate", icon: "🐳" }
  ];

  const achievements = [
    { metric: "25+", label: "Projects Completed", description: "Delivered successfully" },
    { metric: "15+", label: "Happy Clients", description: "Across various industries" },
    { metric: "2+", label: "Years Experience", description: "In full-stack development" },
    { metric: "99%", label: "Success Rate", description: "Client satisfaction" }
  ];

  return (
    <>
      <SEOHead 
        title="Yubraj Kurmi - Senior Full Stack Developer | Modern Web Solutions"
        description="Experienced full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable applications for startups and enterprises."
        keywords="full stack developer, React developer, Node.js, TypeScript, web development, software engineer"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-container min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  <span className="text-brand-primary font-medium">Available for new opportunities</span>
                </div>
                
                <h1 className="heading-xl">
                  Senior Full Stack
                  <span className="block gradient-primary bg-clip-text text-transparent">Developer</span>
                </h1>
                
                <p className="text-xl text-muted leading-relaxed max-w-xl">
                  I build exceptional digital experiences with modern technologies. 
                  Specialized in React, Node.js, and cloud-native solutions that scale.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">4.9/5 Client Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium">Top Rated Developer</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projects">
                  <button className="btn-professional btn-primary">
                    <Code2 className="w-5 h-5" />
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                
                <Link href="/contact">
                  <button className="btn-professional btn-secondary">
                    <Mail className="w-5 h-5" />
                    Let's Talk
                  </button>
                </Link>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-professional btn-outline"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/DevMaestroHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/yubraj-kurmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="professional-card">
                <div className="professional-card-header">
                  <h3 className="heading-sm">Core Technologies</h3>
                  <p className="text-muted">Technologies I work with daily</p>
                </div>
                <div className="professional-card-content">
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{skill.name}</div>
                          <div className="text-xs text-muted">{skill.level}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-container bg-gray-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center space-y-12"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="heading-lg mb-4">Proven Track Record</h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Delivering exceptional results for clients across various industries
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold text-brand-primary">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold">{achievement.label}</div>
                  <div className="text-sm text-muted">{achievement.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-12 text-white"
          >
            <h2 className="heading-lg">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern, 
              scalable web solutions that drive results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-professional bg-white text-brand-primary hover:bg-gray-100">
                  <Mail className="w-5 h-5" />
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/projects">
                <button className="btn-professional border-white text-white hover:bg-white hover:text-brand-primary">
                  <Code2 className="w-5 h-5" />
                  Explore My Work
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}