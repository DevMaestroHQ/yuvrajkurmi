import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Code,
  TrendingUp,
  Award,
  CheckCircle,
  Briefcase,
  Star,
  Clock,
  Target,
  Rocket,
  Zap,
  Building,
  Globe,
} from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import SEOHead from "@/components/ui/seo-head";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Nepal Pvt. Ltd.",
      companyType: "Software Development Company",
      location: "Kathmandu, Nepal (Remote)",
      period: "Jan 2024 - Present",
      duration: "11+ months",
      type: "Full-time",
      status: "Current",
      salary: "NPR 80,000 - 1,20,000/month",
      description:
        "Leading full-stack development initiatives, architecting scalable web applications, and mentoring junior developers in modern technologies and best practices.",
      responsibilities: [
        "Architect and develop enterprise-grade web applications serving 10,000+ users",
        "Lead a team of 5 developers in agile development processes and code reviews",
        "Implement CI/CD pipelines reducing deployment time by 70%",
        "Design RESTful APIs and microservices with 99.9% uptime reliability",
        "Optimize application performance achieving 40% faster load times",
        "Conduct technical interviews and onboard new team members",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
      achievements: [
        { metric: "10K+", label: "Users Served" },
        { metric: "99.9%", label: "Uptime" },
        { metric: "70%", label: "Deploy Speed Up" },
      ],
      highlights: [
        "Led development of healthcare platform serving 3 medical centers",
        "Implemented real-time features using WebSocket technology",
        "Reduced server costs by 35% through optimization",
      ],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/5 to-purple-500/5",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Hub",
      companyType: "Digital Marketing & Development Agency",
      location: "Pokhara, Nepal",
      period: "Jun 2023 - Dec 2023",
      duration: "7 months",
      type: "Full-time",
      status: "Completed",
      salary: "NPR 50,000 - 70,000/month",
      description:
        "Developed custom web applications for clients across various industries, focusing on e-commerce solutions and business automation tools.",
      responsibilities: [
        "Built 15+ client websites and web applications using modern frameworks",
        "Integrated payment gateways (eSewa, Khalti) for Nepali market",
        "Developed inventory management systems for retail businesses",
        "Implemented responsive designs ensuring mobile-first approach",
        "Provided ongoing maintenance and technical support to clients",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "CSS3",
        "Bootstrap",
      ],
      achievements: [
        { metric: "15+", label: "Projects Delivered" },
        { metric: "98%", label: "Client Satisfaction" },
        { metric: "50%", label: "Business Growth" },
      ],
      highlights: [
        "Delivered e-commerce platform increasing client sales by 300%",
        "Developed custom CMS reducing content update time by 80%",
        "Implemented SEO optimization improving search rankings",
      ],
      gradient: "from-green-500 to-teal-600",
      bgColor: "from-green-500/5 to-teal-500/5",
      icon: <Building className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Web Studio",
      companyType: "Web Design & Development Studio",
      location: "Butwal, Nepal",
      period: "Oct 2022 - May 2023",
      duration: "8 months",
      type: "Full-time",
      status: "Completed",
      salary: "NPR 35,000 - 50,000/month",
      description:
        "Specialized in creating engaging user interfaces and implementing pixel-perfect designs with focus on user experience and performance optimization.",
      responsibilities: [
        "Developed responsive UI components using React and modern CSS",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Optimized website performance achieving 90+ Lighthouse scores",
        "Implemented accessibility features following WCAG guidelines",
        "Maintained cross-browser compatibility across all major browsers",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Sass",
        "Bootstrap",
        "jQuery",
      ],
      achievements: [
        { metric: "20+", label: "UI Components" },
        { metric: "90+", label: "Lighthouse Score" },
        { metric: "100%", label: "Mobile Ready" },
      ],
      highlights: [
        "Created reusable component library used across 10+ projects",
        "Improved website loading speed by 60% through optimization",
        "Implemented modern animations enhancing user engagement",
      ],
      gradient: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/5 to-red-500/5",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "Local Tech Startup",
      companyType: "Technology Startup",
      location: "Devdaha, Rupandehi, Nepal",
      period: "Mar 2022 - Sep 2022",
      duration: "7 months",
      type: "Part-time/Internship",
      status: "Completed",
      salary: "NPR 20,000 - 30,000/month",
      description:
        "Started professional development journey, learning web technologies and contributing to real-world projects while building foundational skills.",
      responsibilities: [
        "Developed simple websites for local businesses and NGOs",
        "Learned modern web development practices and version control",
        "Assisted senior developers with testing and debugging",
        "Created documentation for project workflows and processes",
        "Participated in code reviews and team meetings",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WordPress",
        "PHP",
        "MySQL",
      ],
      achievements: [
        { metric: "8+", label: "Websites Built" },
        { metric: "95%", label: "Learning Progress" },
        { metric: "6", label: "Skills Acquired" },
      ],
      highlights: [
        "Successfully transitioned from learning to professional development",
        "Built first e-commerce website for local handicraft business",
        "Achieved proficiency in modern web development stack",
      ],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/5 to-pink-500/5",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const skillsProgression = [
    {
      year: "2022",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
      level: "Beginner",
    },
    {
      year: "2023",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      level: "Intermediate",
    },
    {
      year: "2024",
      skills: ["TypeScript", "Next.js", "PostgreSQL", "AWS"],
      level: "Advanced",
    },
    {
      year: "2025",
      skills: ["Microservices", "Docker", "Kubernetes", "System Design"],
      level: "Expert",
    },
  ];

  return (
    <>
      <SEOHead
        title="Experience | YUBRAJ KURMI - Full Stack Developer Career Journey"
        description="Explore my professional journey as a full stack developer, from junior roles to senior positions, showcasing growth in React, Node.js, and modern web technologies."
        keywords="yubraj kurmi experience, full stack developer career, react developer nepal, node.js experience, web development journey, professional growth"
        canonicalUrl="https://your-portfolio-domain.vercel.app/experience"
        pageType="article"
        author="YUBRAJ KURMI"
        publishedTime="2025-07-02T14:50:00+05:45"
        modifiedTime="2025-07-02T14:50:00+05:45"
      />

      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Trophy className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Career
              <span className="text-brand-primary">
                {" "}
                Experience
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A journey of continuous learning, professional growth, and
              impactful contributions to innovative technology solutions across
              diverse industries.
            </motion.p>

            {/* Career Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">3+</div>
                <div className="text-sm text-foreground font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">40+</div>
                <div className="text-sm text-foreground font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">4</div>
                <div className="text-sm text-foreground font-medium">
                  Companies Worked
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">15+</div>
                <div className="text-sm text-foreground font-medium">
                  Technologies Mastered
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Progression Timeline */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-display font-bold text-foreground text-center mb-12"
            >
              Skills Evolution Journey
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-6">
              {skillsProgression.map((year, index) => (
                <motion.div
                  key={year.year}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="relative">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${
                        index === 0
                          ? "from-purple-400 to-pink-500"
                          : index === 1
                            ? "from-green-400 to-teal-500"
                            : index === 2
                              ? "from-blue-400 to-indigo-500"
                              : "from-orange-400 to-red-500"
                      } flex items-center justify-center text-white font-bold text-lg mb-4`}
                    >
                      {year.year}
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        year.level === "Beginner"
                          ? "bg-gray-500/20 text-gray-400"
                          : year.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : year.level === "Advanced"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {year.level}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {year.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-foreground bg-muted/50 rounded-md py-1 px-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
              className="space-y-16"
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
                  <div className="md:ml-20">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Background Pattern */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-50`}
                      />

                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            experience.status === "Current"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {experience.status}
                        </span>
                      </div>

                      <div className="relative z-10">
                        {/* Company Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center text-white shadow-lg`}
                          >
                            {experience.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                                {experience.type}
                              </span>
                              <span className="text-xs text-foreground font-medium">
                                {experience.duration}
                              </span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                              {experience.title}
                            </h3>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-foreground">
                                <Building className="w-4 h-4" />
                                <span className="font-medium">
                                  {experience.company}
                                </span>
                                <span className="text-sm text-foreground/70">
                                  • {experience.companyType}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-foreground text-sm">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{experience.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{experience.period}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-brand-primary font-medium">
                                <TrendingUp className="w-4 h-4" />
                                <span>{experience.salary}</span>
                              </div>
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
                            <div
                              key={i}
                              className="text-center p-4 bg-muted/50 rounded-lg border border-border"
                            >
                              <div className="text-2xl font-bold text-foreground mb-1">
                                {achievement.metric}
                              </div>
                              <div className="text-xs text-foreground font-medium">
                                {achievement.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-8">
                          <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-brand-primary" />
                            Key Highlights
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {experience.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/20"
                              >
                                <p className="text-sm text-foreground">
                                  {highlight}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-8">
                          <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-brand-primary" />
                            Key Responsibilities
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {experience.responsibilities.map(
                              (responsibility, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-foreground"
                                >
                                  <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed text-sm">
                                    {responsibility}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">
                            Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full border border-brand-primary/20 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 border border-brand-primary/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                I'm passionate about creating innovative solutions and growing
                with dynamic teams. Ready to contribute my expertise to your
                next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Hire Me
                </motion.a>
                <motion.a
                  href="/resume"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-muted/50 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  View Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
