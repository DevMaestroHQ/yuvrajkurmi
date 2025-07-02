import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Rocket, Globe, Zap, Shield, Heart } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Local Business E-Store",
      subtitle: "Online Shop for Handicrafts",
      description: "E-commerce website for local handicraft business with product catalog, shopping cart, and basic payment integration. Helped traditional artisans reach online customers.",
      longDescription: "Simple yet effective online store built for local handicraft vendors. Features product gallery with image zoom, shopping cart functionality, customer contact forms, and basic order management for small business owners.",
      technologies: ["React", "Node.js", "MongoDB", "CSS3"],
      category: "E-Commerce",
      status: "Completed",
      year: "2023",
      demoUrl: "#demo-placeholder",
      githubUrl: "#github-placeholder",
      image: "🛍️",
      gradient: "from-green-400 via-blue-400 to-purple-500",
      bgPattern: "from-green-500/10 to-blue-500/10",
      stats: { products: "50+", orders: "120+", uptime: "98%" }
    },
    {
      id: 2,
      title: "Student Grade Portal",
      subtitle: "School Management System",
      description: "Web application for teachers to manage student grades, attendance, and class schedules. Currently used by 3 local schools to track over 500 students effectively.",
      longDescription: "Practical school management solution designed for small educational institutions. Teachers can input grades, track attendance, send notifications to parents, and generate report cards. Simple dashboard for administrators to oversee multiple classes.",
      technologies: ["React", "Express.js", "MySQL", "Bootstrap"],
      category: "Education",
      status: "In Use",
      year: "2023",
      demoUrl: "#demo-placeholder",
      githubUrl: "#github-placeholder",
      image: "📚",
      gradient: "from-blue-400 via-purple-400 to-pink-500",
      bgPattern: "from-blue-500/10 to-purple-500/10",
      stats: { students: "500+", schools: "3", teachers: "25+" }
    },
    {
      id: 3,
      title: "Weather Forecast App",
      subtitle: "Real-time Weather Dashboard",
      description: "Clean weather application showing current conditions and 5-day forecast with location search. Personal project to learn API integration and responsive design patterns.",
      longDescription: "Learning project focused on API integration and modern web design. Features current weather display, hourly forecasts, weather maps, and location-based searches. Built to practice API consumption and responsive CSS techniques.",
      technologies: ["JavaScript", "Weather API", "CSS Grid", "HTML5"],
      category: "Learning",
      status: "Completed",
      year: "2024",
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      image: "📊",
      gradient: "from-indigo-400 via-blue-400 to-cyan-500",
      bgPattern: "from-indigo-500/10 to-blue-500/10",
      stats: { projects: "500+", teams: "80", tasks: "5K+" }
    },
    {
      id: 4,
      title: "AI-Powered Learning Platform",
      subtitle: "Educational Technology Solution",
      description: "Intelligent learning management system with AI-driven personalized learning paths, progress tracking, interactive content, and comprehensive assessment tools for modern education.",
      longDescription: "Next-generation educational platform leveraging AI for personalized learning experiences, adaptive assessments, progress analytics, content recommendation, and interactive multimedia support.",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "OpenAI", "AWS"],
      category: "AI/ML",
      status: "In Progress",
      year: "2024",
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      image: "🤖",
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgPattern: "from-orange-500/10 to-red-500/10",
      stats: { students: "3K+", courses: "120", completion: "85%" }
    },
    {
      id: 5,
      title: "FinTech Payment Gateway",
      subtitle: "Secure Payment Processing",
      description: "Robust financial technology solution with secure payment processing, fraud detection, multi-currency support, and comprehensive transaction management for businesses.",
      longDescription: "Enterprise-grade payment processing platform with advanced security measures, real-time fraud detection, multi-currency support, detailed analytics, and seamless integration capabilities.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Microservices", "Docker", "Kubernetes"],
      category: "FinTech",
      status: "Completed",
      year: "2023",
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      image: "💳",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
      bgPattern: "from-green-500/10 to-emerald-500/10",
      stats: { transactions: "50K+", volume: "₹2.5M", uptime: "99.99%" }
    },
    {
      id: 6,
      title: "Healthcare Management System",
      subtitle: "Digital Health Solution",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, telemedicine integration, and medical analytics for healthcare providers.",
      longDescription: "Complete healthcare ecosystem featuring patient management, electronic health records, appointment scheduling, telemedicine, billing integration, and compliance with healthcare standards.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "FHIR", "AWS"],
      category: "Healthcare",
      status: "Completed",
      year: "2023",
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      image: "🏥",
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bgPattern: "from-blue-500/10 to-indigo-500/10",
      stats: { patients: "1.5K+", appointments: "8K+", providers: "25" }
    }
  ];

  return (
    <>
      <SEOHead 
        title="Projects Portfolio - Yubraj Kurmi | Full Stack Development Showcase"
        description="Explore my comprehensive portfolio of full-stack web applications. Featuring e-commerce platforms, chat applications, project management tools, and more. Built with React, Node.js, and modern technologies."
        keywords="yubraj kurmi projects, full stack portfolio, react projects, nodejs applications, web development showcase, ecommerce platform, chat application, project management"
        canonicalUrl="https://yuvrajkurmi.github.com/projects"
      />
      <section className="py-20 bg-background min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Projects
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-display font-bold text-contrast mb-6"
          >
            Crafting Digital
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"> Excellence</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-readable max-w-3xl mx-auto leading-relaxed"
          >
            A curated selection of innovative projects showcasing modern development practices, 
            cutting-edge technologies, and user-centric design principles.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgPattern} opacity-50`} />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/30 text-green-700 dark:text-green-300 border border-green-500/50' 
                    : 'bg-orange-500/30 text-orange-700 dark:text-orange-300 border border-orange-500/50'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Project Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.image}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-foreground font-medium">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-brand-primary mb-3">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-foreground">{value}</div>
                        <div className="text-xs text-foreground font-medium capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted text-foreground px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-foreground font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-professional text-center py-2.5 text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <Globe className="w-4 h-4 inline mr-2" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-muted hover:bg-muted/80 text-readable border border-border text-center py-2.5 text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 border border-brand-primary/20">
            <Rocket className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-contrast mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-readable mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project. I bring creativity, technical expertise, 
              and a passion for delivering exceptional digital experiences.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-professional inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
