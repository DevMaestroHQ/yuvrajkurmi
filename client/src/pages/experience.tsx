import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Code, TrendingUp, Award, CheckCircle } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Verified Full Stack Developer",
      company: "Tech Innovations Ltd",
      location: "Remote • Nepal",
      period: "2023 - Present",
      duration: "1+ years",
      type: "Full-time",
      status: "Current",
      description: "Developing robust web applications with modern technologies, focusing on quality assurance, performance optimization, and user-centered design.",
      responsibilities: [
        "Built and maintained 8+ web applications with 2,000+ active users",
        "Implemented responsive designs achieving 98% mobile compatibility",
        "Developed RESTful APIs with comprehensive error handling and validation",
        "Collaborated with cross-functional teams using agile methodologies",
        "Optimized application performance achieving 35% faster load times"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Express.js", "Tailwind CSS", "Git"],
      achievements: [
        { metric: "98%", label: "Mobile Compatibility" },
        { metric: "35%", label: "Speed Improvement" },
        { metric: "2K+", label: "Active Users" }
      ],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/5 to-purple-500/5"
    },
    {
      id: 2,
      title: "Professional Web Developer",
      company: "Digital Solutions Co",
      location: "Kathmandu, Nepal",
      period: "2022 - 2023",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      description: "Created dynamic web applications for local businesses and startups, specializing in e-commerce platforms and business management systems.",
      responsibilities: [
        "Developed 12+ business websites including e-commerce and portfolio sites",
        "Integrated payment systems (eSewa, Khalti) for Nepali market",
        "Built inventory management systems for local retailers",
        "Implemented user authentication and data security measures",
        "Provided ongoing maintenance and technical support"
      ],
      technologies: ["React", "Express.js", "MongoDB", "JavaScript", "CSS3", "Bootstrap"],
      achievements: [
        { metric: "12+", label: "Websites Built" },
        { metric: "95%", label: "Client Satisfaction" },
        { metric: "8", label: "Payment Integrations" }
      ],
      gradient: "from-green-500 to-teal-600",
      bgColor: "from-green-500/5 to-teal-500/5"
    },
    {
      id: 3,
      title: "Creative Frontend Developer",
      company: "Creative Web Agency",
      location: "Pokhara, Nepal",
      period: "2021 - 2022",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      description: "Specialized in crafting engaging user interfaces with focus on accessibility, performance, and modern design trends for diverse client projects.",
      responsibilities: [
        "Created responsive UI designs for 15+ client websites and applications",
        "Implemented modern CSS animations and interactive elements",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Collaborated with designers to translate mockups into functional interfaces",
        "Optimized website performance and loading speeds"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "Bootstrap", "jQuery"],
      achievements: [
        { metric: "15+", label: "UI Projects" },
        { metric: "40%", label: "Speed Boost" },
        { metric: "100%", label: "Mobile Ready" }
      ],
      gradient: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/5 to-red-500/5"
    },
    {
      id: 4,
      title: "Aspiring Web Developer",
      company: "Local Tech Startup",
      location: "Butwal, Nepal",
      period: "2020 - 2021",
      duration: "1 year",
      type: "Internship/Part-time",
      status: "Completed",
      description: "Began professional development journey, learning web technologies and contributing to real-world projects while building foundational skills.",
      responsibilities: [
        "Built simple websites for local businesses and community organizations",
        "Learned HTML, CSS, JavaScript, and basic backend development",
        "Assisted senior developers with testing and debugging",
        "Maintained existing WordPress websites and plugins",
        "Documented code changes and created user guides"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"],
      achievements: [
        { metric: "8+", label: "Sites Created" },
        { metric: "3", label: "WordPress Themes" },
        { metric: "90%", label: "Learning Goals Met" }
      ],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/5 to-pink-500/5"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Experience - Verified Developer | Career Timeline & Achievements Nepal"
        description="Discover the professional journey of a verified web developer from Nepal. Detailed career progression, achievements, and experience across multiple companies and modern technologies including React, Node.js, and TypeScript."
        keywords="verified developer nepal, web developer experience, professional timeline nepal, career progression, react developer nepal, full stack developer kathmandu, nepal web development, software developer career, yubraj kurmi experience"
        canonicalUrl="https://your-portfolio-domain.vercel.app/experience"
        pageType="article"
        author="Yubraj Kurmi"
        publishedTime="2025-07-01T15:20:00+05:45"
        modifiedTime="2025-07-01T15:20:00+05:45"
      />
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
            className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
          >
            Experience &
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"> Growth</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
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
                          <span className="text-sm text-foreground font-medium">
                            {experience.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                          {experience.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-foreground mb-3">
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
                      <p className="text-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="text-center p-4 bg-muted/50 rounded-lg">
                            <div className="text-2xl font-bold text-foreground mb-1">{achievement.metric}</div>
                            <div className="text-xs text-foreground font-medium">{achievement.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {experience.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground">
                              <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
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
              With 3+ years of verified development experience and a passion for creating quality web solutions, 
              I'm ready to contribute to your next innovative project.
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
    </>
  );
}