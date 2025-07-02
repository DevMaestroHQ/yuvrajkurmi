import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Star, Code, TrendingUp, Award, Zap, Target, Rocket, Shield, Database, Globe, Smartphone, Brain } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: "HealthAssistant Pro",
      subtitle: "Complete Health Management Platform",
      description: "Full-stack health management application with appointment scheduling, patient records, telemedicine integration, and real-time health monitoring dashboard.",
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WebRTC"],
      category: "Healthcare",
      status: "Live",
      year: "2024",
      demoUrl: "https://health-ha.com",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "🏥",
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
      bgPattern: "from-emerald-500/20 to-cyan-500/20",
      stats: { users: "2K+", appointments: "5K+", uptime: "99.9%" },
      features: ["Patient Management", "Telemedicine", "Real-time Monitoring", "Health Analytics"],
      impact: "Streamlined healthcare delivery for 3 medical centers",
      complexity: "High",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Edubridge Platform",
      subtitle: "Educational Resource Hub",
      description: "Educational platform with automated web scraping to integrate syllabus materials, examination resources, and interactive learning modules for students.",
      technologies: ["React", "Next.js", "Web Scraping", "MongoDB", "Node.js", "Python"],
      category: "Education",
      status: "Live",
      year: "2024",
      demoUrl: "https://edubridge.com",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "📚",
      gradient: "from-purple-400 via-pink-400 to-red-500",
      bgPattern: "from-purple-500/20 to-pink-500/20",
      stats: { students: "1.5K+", resources: "10K+", retention: "94%" },
      features: ["Content Aggregation", "Learning Paths", "Progress Tracking", "Resource Library"],
      impact: "Enhanced learning experience for 5 educational institutions",
      complexity: "High",
      duration: "4 months"
    },
    {
      id: 3,
      title: "CodePulse Analytics",
      subtitle: "Developer Productivity Platform",
      description: "Full-featured code coverage platform that helps developers visualize, track, and improve test coverage across their projects with advanced analytics.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "GitHub API", "Chart.js"],
      category: "Developer Tools",
      status: "Live",
      year: "2024",
      demoUrl: "https://codepulse.com",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "⚡",
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bgPattern: "from-blue-500/20 to-indigo-500/20",
      stats: { developers: "800+", projects: "1.2K+", coverage: "85%" },
      features: ["Code Coverage", "Analytics Dashboard", "CI/CD Integration", "Team Collaboration"],
      impact: "Improved code quality for 50+ development teams",
      complexity: "High",
      duration: "5 months"
    },
    {
      id: 4,
      title: "EcoMart Marketplace",
      subtitle: "Sustainable E-commerce Platform",
      description: "Modern e-commerce platform focused on sustainable products with advanced filtering, real-time inventory, and integrated payment solutions.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS S3"],
      category: "E-commerce",
      status: "Completed",
      year: "2023",
      demoUrl: "https://demo-ecomart.vercel.app",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "🛒",
      gradient: "from-green-400 via-teal-400 to-blue-500",
      bgPattern: "from-green-500/20 to-teal-500/20",
      stats: { products: "500+", orders: "2.5K+", revenue: "₹5L+" },
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Admin Dashboard"],
      impact: "Boosted online sales by 300% for local vendors",
      complexity: "Medium",
      duration: "3 months"
    },
    {
      id: 5,
      title: "TaskFlow Manager",
      subtitle: "Project Management Suite",
      description: "Comprehensive project management application with team collaboration, task tracking, time management, and detailed reporting capabilities.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Redis"],
      category: "Productivity",
      status: "Completed",
      year: "2023",
      demoUrl: "https://demo-taskflow.vercel.app",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "📋",
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgPattern: "from-orange-500/20 to-red-500/20",
      stats: { teams: "150+", tasks: "8K+", efficiency: "40%" },
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Analytics"],
      impact: "Increased team productivity by 40% across organizations",
      complexity: "Medium",
      duration: "4 months"
    },
    {
      id: 6,
      title: "WeatherScope AI",
      subtitle: "Intelligent Weather Application",
      description: "Advanced weather application with AI-powered predictions, location-based forecasts, weather alerts, and beautiful data visualizations.",
      technologies: ["React Native", "Python", "Flask", "OpenWeather API", "Machine Learning", "SQLite"],
      category: "Mobile App",
      status: "Completed",
      year: "2023",
      demoUrl: "https://demo-weather.vercel.app",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: "🌤️",
      gradient: "from-cyan-400 via-blue-400 to-indigo-500",
      bgPattern: "from-cyan-500/20 to-blue-500/20",
      stats: { downloads: "1K+", accuracy: "96%", cities: "100+" },
      features: ["AI Predictions", "Weather Alerts", "Data Visualization", "Location Services"],
      impact: "Provided accurate weather insights for outdoor enthusiasts",
      complexity: "Medium",
      duration: "2 months"
    }
  ];

  const categoryIcons: Record<string, React.ReactElement> = {
    "Healthcare": <Shield className="w-5 h-5" />,
    "Education": <Brain className="w-5 h-5" />,
    "Developer Tools": <Code className="w-5 h-5" />,
    "E-commerce": <Globe className="w-5 h-5" />,
    "Productivity": <Target className="w-5 h-5" />,
    "Mobile App": <Smartphone className="w-5 h-5" />
  };

  const complexityColors: Record<string, string> = {
    "High": "bg-red-500/20 text-red-400 border-red-500/30",
    "Medium": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Low": "bg-green-500/20 text-green-400 border-green-500/30"
  };

  return (
    <>
      <SEOHead
        title="Projects | YUBRAJ KURMI - Full Stack Developer Portfolio"
        description="Explore my portfolio of full-stack development projects including healthcare platforms, educational tools, e-commerce solutions, and developer productivity applications."
        keywords="yubraj kurmi projects, full stack projects, react projects, node.js applications, web development portfolio, healthcare app, education platform"
        canonicalUrl="https://your-portfolio-domain.vercel.app/projects"
        pageType="website"
        author="YUBRAJ KURMI"
      />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4" />
              Featured Projects
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Project
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"> Portfolio</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of full-stack applications demonstrating expertise in modern web technologies, 
              user experience design, and scalable architecture solutions.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">6+</div>
                <div className="text-sm text-foreground font-medium">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">5K+</div>
                <div className="text-sm text-foreground font-medium">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">99%</div>
                <div className="text-sm text-foreground font-medium">Uptime Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-foreground font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Main Project Card */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgPattern} opacity-50`} />
                  
                  {/* Status & Complexity Badges */}
                  <div className="absolute top-6 right-6 flex gap-2 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${complexityColors[project.complexity]}`}>
                      {project.complexity}
                    </span>
                  </div>

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded flex items-center gap-1">
                            {categoryIcons[project.category]}
                            {project.category}
                          </span>
                          <span className="text-xs text-foreground font-medium">
                            {project.year}
                          </span>
                          <span className="text-xs text-foreground/70">
                            • {project.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-brand-primary mb-3">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="mb-6 p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm font-semibold text-foreground">Impact</span>
                      </div>
                      <p className="text-sm text-foreground">{project.impact}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-foreground">{value}</div>
                          <div className="text-xs text-foreground font-medium capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-muted text-foreground px-3 py-1 rounded-full font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 border border-brand-primary/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to create innovative solutions that make a real impact. 
                From concept to deployment, I'll help bring your ideas to life.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
              >
                <Zap className="w-5 h-5" />
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}