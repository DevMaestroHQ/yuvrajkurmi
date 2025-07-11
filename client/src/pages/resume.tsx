import { motion } from "framer-motion";
import { Download, Eye, MapPin, Mail, Phone, Globe, Code, Award, BookOpen, Briefcase, Calendar, Star, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/ui/seo-head";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Resume() {
  const contactInfo = {
    name: "Yubraj Kurmi",
    title: "Verified Full Stack Developer",
    location: "Devdaha, Rupandehi, Nepal",
    email: "developerrajir@gmail.com",
    phone: "+977-98*******",
    website: "https://www.yuvrajkurmi.github.com",
    github: "https://github.com/DevMaestroHQ",
    linkedin: "https://linkedin.com/in/yuvrajkurmi03"
  };

  const experience = [
    {
      title: "Mobile and Web Development",
      company: "Current Projects",
      duration: "2023 - Present",
      location: "Remote, Nepal",
      achievements: [
        "Build and maintain front-end features for web applications, such as an air ticketing platform, using React and Next.js",
        "Contribute to the development of the E-Grow - Easy Farming mobile app using React Native",
        "Work under senior developers to adopt modern development workflows and best practices",
        "Ensure responsive and user-friendly interfaces for various web applications",
        "Collaborate with team members to deliver core functionalities"
      ]
    },
    {
      title: "Python Development",
      company: "Previous Experience",
      duration: "2022 - 2023",
      location: "Nepal",
      achievements: [
        "Developed and maintained front-end components for web applications using Next.js, React, and related technologies",
        "Collaborated with senior developers to implement new features and improve existing codebase",
        "Gained hands-on experience with modern web development workflows and best practices",
        "Worked with Python frameworks for web development projects"
      ]
    },
    {
      title: "React Development",
      company: "AI/ML Projects",
      duration: "2021 - 2022",
      location: "Remote",
      achievements: [
        "Annotated diverse datasets to support AI and machine learning projects",
        "Ensured high-quality data labeling in a remote setting",
        "Contributed to React-based data annotation tools and interfaces",
        "Gained experience with data visualization and processing workflows"
      ]
    }
  ];

  const education = [
    {
      degree: "BSc. Computer Science and Information Technology, IOST, TU",
      institution: "Bhairahawa Multiple Campus",
      duration: "Jun. 2024 - Present",
      location: "Bhairahawa, Rupandehi",
      details: [
        "Currently pursuing Bachelor's degree in Computer Science and Information Technology",
        "Tribhuvan University affiliated program",
        "Focus on modern software development and information systems"
      ]
    }
  ];

  const certifications = [
    "FreeCodeCamp Full Stack Developer",
    "Udemy React Development Course",
    "Coursera JavaScript Algorithms",
    "MongoDB University Basics",
    "Google Developer Student Club Member"
  ];

  const projects = [
    {
      name: "HealthAssistant App",
      description: "Full Stack Health App using modern web technologies",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      impact: "Complete health management platform - Health-HA.com"
    },
    {
      name: "Edubridge",
      description: "Educational platform with automated web scraping to integrate syllabus materials and examination resources",
      technologies: ["React", "Next.js", "Web Scraping", "MongoDB"],
      impact: "Educational resource platform - Edubridge.com"
    },
    {
      name: "CodePulse",
      description: "Full-featured code coverage platform that helps developers visualize, track, and improve test coverage across their projects",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Authentication"],
      impact: "Developer productivity tool - Codepulse.com"
    }
  ];

  const skills = {
    frontend: [
      "HTML5, CSS3, JavaScript",
      "React, Next.js",
      "Python (Tkinter, Streamlit)",
      "Tailwind CSS",
      "Figma/UI Design",
      "Framer Motion"
    ],
    backend: [
      "Next.js API Routes",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Firebase Auth",
      "Auth0"
    ],
    tools: [
      "Git, GitHub",
      "Visual Studio Code",
      "Cursor, PyCharm",
      "Figma",
      "Google Analytics",
      "React Native"
    ],
    soft: [
      "Team Collaboration",
      "Problem Solving",
      "Code Quality Focus",
      "User-Centered Design",
      "Continuous Learning",
      "Project Delivery"
    ]
  };

  return (
    <>
      <SEOHead 
        title="Yubraj Kurmi Resume - Verified Full Stack Developer CV Nepal"
        description="Download Yubraj Kurmi's professional resume. Junior developer skilled in React, Next.js, React Native, and Python. Currently pursuing BSc Computer Science at Tribhuvan University."
        keywords="yubraj kurmi resume, full stack developer cv nepal, react developer resume, next.js developer, python developer, computer science student, download resume, hire developer nepal"
      />
      
      <div className="min-h-screen bg-background">
        <div className="section-container py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-6">
              <h1 className="heading-xl font-display heading-adaptive">Professional Resume</h1>
              <p className="text-xl text-adaptive-secondary">
                Comprehensive overview of my professional experience, skills, and achievements
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-professional btn-primary">
                  <Download className="w-5 h-5" />
                  Download PDF Resume
                </Button>
                <Button variant="outline" className="btn-professional btn-outline">
                  <Eye className="w-5 h-5" />
                  View Full Resume
                </Button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h2 className="heading-lg text-brand-primary">{contactInfo.name}</h2>
                    <p className="text-xl text-adaptive-secondary">{contactInfo.title}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                      <div className="flex items-center gap-2 justify-center">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm text-adaptive">{contactInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Mail className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm text-adaptive">{contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Phone className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm text-adaptive">{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Globe className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm text-adaptive">Portfolio</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-adaptive hover:text-brand-primary transition-colors">
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-adaptive hover:text-brand-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Summary */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    Professional Summary
                  </h3>
                  <p className="text-adaptive-secondary leading-relaxed text-lg">
                    A motivated junior developer skilled in React, Next.js, and React Native, Python, JavaScript actively building 
                    responsive web and mobile applications, including air ticketing platforms and farming solutions. Eager to grow 
                    and deliver user-focused, high-quality code in collaborative environments. Currently pursuing BSc Computer Science 
                    and Information Technology at Tribhuvan University while gaining hands-on experience in modern web development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Professional Summary Section */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6" />
                    Professional Summary
                  </h3>
                  <p className="text-adaptive leading-relaxed">
                    Passionate Senior Full Stack Developer with 2+ years of experience building scalable web applications. 
                    Specialized in React, Node.js, and cloud technologies. Proven track record of delivering 25+ successful 
                    projects with 99% client satisfaction. Currently pursuing Computer Science degree while actively 
                    freelancing and contributing to innovative digital solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6" />
                    Professional Experience
                  </h3>
                  <div className="space-y-8">
                    {experience.map((job, index) => (
                      <div key={index} className="border-l-2 border-brand-primary/30 pl-6 pb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-adaptive">{job.title}</h4>
                            <p className="text-brand-primary font-medium">{job.company}</p>
                          </div>
                          <div className="text-sm text-adaptive-secondary">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {job.duration}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-adaptive-secondary">
                              <Star className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-brand-secondary/30 pl-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-adaptive">{edu.degree}</h4>
                            <p className="text-brand-secondary font-medium">{edu.institution}</p>
                          </div>
                          <div className="text-sm text-adaptive-secondary">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {edu.duration}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {edu.details.map((detail, i) => (
                            <li key={i} className="text-adaptive-secondary text-sm">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Projects */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Code className="w-6 h-6" />
                    Key Projects
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-adaptive mb-2">{project.name}</h4>
                        <p className="text-sm text-adaptive-secondary mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-brand-accent">{project.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    Certifications & Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
                        <Award className="w-5 h-5 text-brand-accent flex-shrink-0" />
                        <span className="text-adaptive">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={fadeInUp}>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="heading-md text-brand-primary mb-6 flex items-center gap-3">
                    <Code className="w-6 h-6" />
                    Technical Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-adaptive mb-4">Technical Skills</h4>
                      <div className="space-y-2">
                        {skills.frontend.map((skill: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                            <span className="text-adaptive-secondary">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-adaptive mb-4">Professional Skills</h4>
                      <div className="space-y-2">
                        {skills.soft.map((skill: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                            <span className="text-adaptive-secondary">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}