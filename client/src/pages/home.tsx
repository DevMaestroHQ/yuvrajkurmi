import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, User, Mail, Github, Linkedin, Download, Star, CheckCircle, Home as HomeIcon, FolderOpen, FileText, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Home() {
  const [location] = useLocation();
  
  const sidebarItems = [
    { icon: HomeIcon, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: Briefcase, label: "Experience", href: "/experience" },
    { icon: FileText, label: "Resume", href: "/resume" },
    { icon: MessageCircle, label: "Contact", href: "/contact" }
  ];

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
        description="Senior Full Stack Developer with 2+ years experience in React, Node.js, and modern web technologies. Available for freelance projects and collaborations."
        keywords="full stack developer, react developer, node.js, typescript, web development, freelance developer, portfolio"
      />
      
      <div className="min-h-screen bg-background flex">
        {/* Icon-Only Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed left-0 top-0 h-full w-16 bg-background/95 backdrop-blur-md border-r border-border z-50 flex flex-col items-center py-6"
        >
          <div className="space-y-4">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="relative group"
                >
                  <Link href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? "bg-brand-primary text-white shadow-lg" 
                          : "text-adaptive-muted hover:text-adaptive hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  
                  {/* Tooltip on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    {item.label}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1 ml-16">
          {/* Hero Section */}
          <section className="section-container pt-24 pb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  <span className="text-adaptive-primary font-medium">Available for new opportunities</span>
                </div>
                
                <h1 className="heading-xl font-display heading-adaptive">
                  Senior Full Stack
                  <span className="block gradient-primary bg-clip-text text-transparent">Developer</span>
                </h1>
                
                <p className="text-xl text-adaptive-secondary font-body leading-relaxed max-w-xl">
                  I build exceptional digital experiences with modern technologies. 
                  Specialized in React, Node.js, and cloud-native solutions that scale.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium text-adaptive">4.9/5 Client Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium text-adaptive">Top Rated Developer</span>
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
                  <button className="btn-professional btn-outline">
                    <Mail className="w-5 h-5" />
                    Let's Talk
                  </button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-4 pt-4"
              >
                <a
                  href="https://github.com/yubrajkurmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yubraj-kurmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Link href="/resume">
                  <button className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Overview */}
          <section className="section-container bg-muted/30 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center space-y-4">
                <h2 className="heading-lg font-display heading-adaptive">Technical Excellence</h2>
                <p className="text-adaptive-muted font-body max-w-2xl mx-auto">
                  Proficient in modern technologies with a focus on performance, scalability, and user experience.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    className="text-center space-y-3 p-6 rounded-xl bg-background/60 hover:bg-background/80 transition-colors"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <h3 className="font-semibold text-adaptive text-sm">{skill.name}</h3>
                      <p className="text-xs text-adaptive-muted">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Achievements Section */}
          <section className="section-container bg-gray-50 dark:bg-gray-800">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="py-16 space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center space-y-4">
                <h2 className="heading-lg font-display heading-adaptive">Proven Track Record</h2>
                <p className="text-adaptive-muted font-body max-w-2xl mx-auto">
                  Delivering results that matter to businesses and their users.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    variants={fadeInUp}
                    className="text-center space-y-2"
                  >
                    <div className="text-4xl font-bold text-adaptive-primary">{achievement.metric}</div>
                    <div className="font-semibold text-adaptive">{achievement.label}</div>
                    <div className="text-sm text-adaptive-muted">{achievement.description}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="section-container py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="heading-lg font-display heading-adaptive">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl text-adaptive-secondary font-body">
                Let's collaborate and build something amazing together. 
                I'm available for new projects and exciting opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="btn-professional btn-primary">
                    <Mail className="w-5 h-5" />
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="btn-professional btn-outline">
                    <FolderOpen className="w-5 h-5" />
                    View Portfolio
                  </button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}