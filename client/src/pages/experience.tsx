import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Code, TrendingUp, Award, CheckCircle } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Ltd",
      location: "Remote • Nepal",
      period: "2023 - Present",
      duration: "1+ years",
      type: "Full-time",
      status: "Current",
      description: "Leading development of enterprise-scale applications with modern tech stack, focusing on scalability, performance, and user experience.",
      responsibilities: [
        "Architected and developed 5+ enterprise applications serving 10,000+ users",
        "Led a team of 4 developers in agile development methodologies",
        "Implemented microservices architecture reducing system response time by 40%",
        "Mentored junior developers and conducted code reviews",
        "Optimized database performance achieving 99.9% uptime"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      achievements: [
        { metric: "99.9%", label: "System Uptime" },
        { metric: "40%", label: "Performance Boost" },
        { metric: "10K+", label: "Active Users" }
      ],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/5 to-purple-500/5"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Co",
      location: "Kathmandu, Nepal",
      period: "2022 - 2023",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      description: "Developed and maintained multiple client projects with focus on modern web technologies and responsive design principles.",
      responsibilities: [
        "Built 15+ responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment gateways",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with designers to create pixel-perfect UI implementations",
        "Maintained 100% on-time project delivery record"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redis", "GraphQL", "Stripe API"],
      achievements: [
        { metric: "15+", label: "Projects Delivered" },
        { metric: "100%", label: "On-time Delivery" },
        { metric: "60%", label: "Query Optimization" }
      ],
      gradient: "from-green-500 to-teal-600",
      bgColor: "from-green-500/5 to-teal-500/5"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Web Agency",
      location: "Pokhara, Nepal",
      period: "2021 - 2022",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      description: "Specialized in creating interactive user interfaces and optimizing web performance for enhanced user experience.",
      responsibilities: [
        "Developed responsive frontends for 20+ web applications",
        "Implemented modern UI/UX designs with attention to accessibility",
        "Optimized web performance achieving 50% faster load times",
        "Established component library for consistent design system",
        "Collaborated with backend developers for seamless integration"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "Sass", "Webpack", "Figma"],
      achievements: [
        { metric: "20+", label: "UI Projects" },
        { metric: "50%", label: "Speed Improvement" },
        { metric: "30%", label: "Dev Time Saved" }
      ],
      gradient: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/5 to-red-500/5"
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "Local Tech Startup",
      location: "Butwal, Nepal",
      period: "2020 - 2021",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      description: "Started my professional journey learning modern web development practices and contributing to various client projects.",
      responsibilities: [
        "Built websites for small businesses and local startups",
        "Learned modern web development frameworks and best practices",
        "Contributed to open-source projects and community initiatives",
        "Gained experience in full-stack development and deployment",
        "Provided technical support and maintenance for client websites"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      achievements: [
        { metric: "10+", label: "Websites Built" },
        { metric: "5+", label: "OSS Contributions" },
        { metric: "95%", label: "Client Satisfaction" }
      ],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/5 to-pink-500/5"
    }
  ];

  return (
    <section className="py-20 bg-background min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Professional Journey
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-display font-bold text-contrast mb-6"
          >
            Experience &
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"> Growth</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-readable max-w-3xl mx-auto leading-relaxed"
          >
            A journey of continuous learning, professional growth, and impactful contributions 
            to innovative technology solutions.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary to-brand-secondary opacity-30 hidden md:block" />
          
          {/* Experience Items */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-brand-primary border-4 border-background shadow-lg z-10 hidden md:block" />
                
                {/* Experience Card */}
                <div className="md:ml-20 group">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-50`} />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.status === 'Current' 
                          ? 'bg-green-500/30 text-green-700 dark:text-green-300 border border-green-500/50' 
                          : 'bg-blue-500/30 text-blue-700 dark:text-blue-300 border border-blue-500/50'
                      }`}>
                        {experience.status}
                      </span>
                    </div>

                    <div className="relative">
                      {/* Company Info */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                            {experience.type}
                          </span>
                          <span className="text-sm text-readable-secondary">
                            {experience.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold text-contrast mb-2 group-hover:text-brand-primary transition-colors">
                          {experience.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-readable-secondary mb-3">
                          <div className="flex items-center gap-1">
                            <Code className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-readable-secondary mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="text-center p-4 bg-muted/50 rounded-lg">
                            <div className="text-2xl font-bold text-contrast mb-1">{achievement.metric}</div>
                            <div className="text-xs text-readable-secondary">{achievement.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-display font-semibold text-contrast mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {experience.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-3 text-readable-secondary">
                              <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-contrast mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-brand-primary/20 text-brand-primary dark:text-brand-primary px-3 py-1 rounded-full border border-brand-primary/30 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 border border-brand-primary/20">
            <TrendingUp className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-contrast mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-readable mb-6 max-w-2xl mx-auto">
              With 3+ years of experience and a proven track record of delivering exceptional results, 
              I'm excited to bring my expertise to your next project.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-professional inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}