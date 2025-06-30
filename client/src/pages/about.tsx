import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code, GitBranch, Figma } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";
import AchievementBadge from "@/components/ui/achievement-badge";
import SkillsRadar from "@/components/ui/skills-radar";
import AvailabilityIndicator from "@/components/ui/availability-indicator";
import CodeShowcase from "@/components/ui/code-showcase";
import SEOHead from "@/components/ui/seo-head";

export default function About() {
  const achievements = [
    {
      number: "25+",
      title: "Projects Delivered",
      description: "Successful full-stack applications",
      icon: "🚀"
    },
    {
      number: "99%",
      title: "Client Satisfaction",
      description: "Consistently exceeding expectations",
      icon: "⭐"
    },
    {
      number: "2+",
      title: "Years Experience",
      description: "Professional development expertise",
      icon: "💼"
    },
    {
      number: "24/7",
      title: "Dedication",
      description: "Committed to excellence",
      icon: "🎯"
    }
  ];

  const expertise = [
    {
      category: "Frontend Excellence",
      description: "Crafting beautiful, responsive user interfaces",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-600 to-purple-600"
    },
    {
      category: "Backend Mastery",
      description: "Building robust, scalable server architectures",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      category: "Cloud & DevOps",
      description: "Modern deployment and infrastructure",
      technologies: ["AWS", "Docker", "CI/CD", "Serverless"],
      color: "from-orange-600 to-red-600"
    }
  ];

  const skillsData = [
    { 
      name: "React", 
      level: 90, 
      category: "Frontend", 
      color: "#61DAFB",
      description: "Advanced React development with hooks, context, and performance optimization"
    },
    { 
      name: "Next.js", 
      level: 85, 
      category: "Frontend", 
      color: "#000000",
      description: "Full-stack Next.js applications with SSR, SSG, and API routes"
    },
    { 
      name: "JavaScript", 
      level: 88, 
      category: "Language", 
      color: "#F7DF1E",
      description: "ES6+ features, async programming, and modern JavaScript patterns"
    },
    { 
      name: "TypeScript", 
      level: 82, 
      category: "Language", 
      color: "#3178C6",
      description: "Type-safe development with advanced TypeScript features"
    },
    { 
      name: "Python", 
      level: 80, 
      category: "Backend", 
      color: "#3776AB",
      description: "Backend development, data processing, and automation scripts"
    },
    { 
      name: "Node.js", 
      level: 85, 
      category: "Backend", 
      color: "#339933",
      description: "Server-side JavaScript with Express, APIs, and microservices"
    },
    { 
      name: "MongoDB", 
      level: 78, 
      category: "Database", 
      color: "#47A248",
      description: "NoSQL database design, aggregation pipelines, and optimization"
    },
    { 
      name: "AWS", 
      level: 80, 
      category: "Cloud", 
      color: "#FF9900",
      description: "EC2, S3, Lambda, RDS, and serverless architecture"
    },
    { 
      name: "Docker", 
      level: 78, 
      category: "DevOps", 
      color: "#2496ED",
      description: "Containerization, multi-stage builds, and orchestration"
    },
    { 
      name: "GraphQL", 
      level: 75, 
      category: "API", 
      color: "#E10098",
      description: "Schema design, resolvers, and efficient data fetching"
    }
  ];

  const codeExamples = [
    {
      id: "react-hook",
      title: "Custom React Hook",
      language: "TypeScript",
      code: `import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions<T> {
  initialData?: T;
  refetchInterval?: number;
}

export function useApi<T>(
  url: string, 
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(options.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch');
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    
    if (options.refetchInterval) {
      const interval = setInterval(fetchData, options.refetchInterval);
      return () => clearInterval(interval);
    }
  }, [fetchData, options.refetchInterval]);

  return { data, loading, error, refetch: fetchData };
}`,
      description: "Reusable custom hook for API calls with error handling and auto-refresh capabilities",
      tags: ["React", "TypeScript", "Hooks", "API"],
      github: "https://github.com/DevMaestroHQ"
    },
    {
      id: "express-middleware",
      title: "Express Validation Middleware",
      language: "TypeScript",
      code: `import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.param,
        message: error.msg,
        value: error.value
      }))
    });
  }
  next();
};

export const userValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
    .withMessage('Password must contain uppercase, lowercase, and number'),
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2-50 characters'),
  validateRequest
];

// Usage: app.post('/api/users', userValidation, createUser);`,
      description: "Robust input validation middleware with detailed error reporting for Express.js APIs",
      tags: ["Node.js", "Express", "Validation", "Security"],
      github: "https://github.com/DevMaestroHQ"
    },
    {
      id: "react-native-component",
      title: "React Native Custom Button",
      language: "TypeScript",
      code: `import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  size = 'medium'
}) => {
  const buttonStyles = [
    styles.button,
    styles[size],
    disabled && styles.disabled
  ];

  const renderContent = () => (
    <>
      {loading && <ActivityIndicator size="small" color="#FFFFFF" style={styles.loader} />}
      <Text style={[styles.text, styles[\`text\${variant.charAt(0).toUpperCase() + variant.slice(1)}\`]]}>
        {title}
      </Text>
    </>
  );

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[buttonStyles, styles[variant]]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};`,
      description: "Reusable React Native button component with gradient styling, loading states, and multiple variants",
      tags: ["React Native", "TypeScript", "UI Components", "Mobile"],
      github: "https://github.com/DevMaestroHQ"
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch, color: "text-orange-500" },
    { name: "VS Code", icon: Code, color: "text-blue-500" },
    { name: "Figma", icon: Figma, color: "text-purple-500" },
  ];

  return (
    <>
      <SEOHead 
        title="About Yubraj Kurmi - Full Stack Developer | Professional Background & Skills"
        description="Learn about Yubraj Kurmi, a dedicated Full Stack Developer with 2+ years of experience in React, Node.js, and modern web technologies. Discover my journey, skills, and achievements."
        keywords="about yubraj kurmi, full stack developer background, react developer profile, web developer skills, programming experience, software engineer bio"
        canonicalUrl="https://yuvrajkurmi.github.com/about"
      />
      {/* Hero Section */}
      <section className="relative py-24 pt-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-background to-brand-secondary/5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
                Available for Projects
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl font-bold text-contrast leading-tight">
                Crafting Digital
                <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              
              <p className="text-xl text-readable max-w-2xl mx-auto leading-relaxed">
                Full-stack developer with a passion for creating exceptional digital experiences 
                through modern technologies and elegant design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-brand-primary mb-1">
                  {achievement.number}
                </div>
                <div className="font-semibold text-contrast mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm text-readable">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-contrast mb-4">
                Areas of Expertise
              </h2>
              <p className="text-xl text-readable max-w-2xl mx-auto">
                Specialized knowledge across the full development stack
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-professional p-8 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-contrast mb-3">
                    {area.category}
                  </h3>
                  
                  <p className="text-readable mb-6">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-readable text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-contrast mb-4">
                Professional Experience
              </h2>
              <p className="text-xl text-readable max-w-2xl mx-auto">
                Building exceptional digital solutions with modern technologies
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Professional Background */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-professional p-8"
              >
                <h3 className="font-display text-2xl font-semibold text-contrast mb-6">
                  Background & Journey
                </h3>
                
                <div className="space-y-4 text-readable">
                  <p className="leading-relaxed">
                    Full Stack Developer with 2+ years of experience building modern web applications using React, Node.js, and JavaScript. 
                    Currently pursuing Computer Science degree while working on real-world projects.
                  </p>
                  
                  <p className="leading-relaxed">
                    Passionate about creating user-friendly applications with clean, maintainable code. Experienced in MERN stack development, 
                    responsive design, and modern development practices.
                  </p>
                  
                  <p className="leading-relaxed">
                    Successfully completed multiple client projects including e-commerce platforms, portfolio websites, and business applications. 
                    Strong foundation in both frontend and backend technologies with focus on performance optimization.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-muted">
                  <h4 className="font-display text-lg font-semibold text-contrast mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-brand-primary" />
                      <span className="text-readable">developerrajir@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-brand-primary" />
                      <span className="text-readable">+977-98XXXXXXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                      <span className="text-readable">Devdaha, Rupandehi</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills Overview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="card-professional p-8">
                  <h3 className="font-display text-2xl font-semibold text-contrast mb-6">
                    Technical Skills
                  </h3>
                  
                  <div className="space-y-6">
                    {skillsData.slice(0, 6).map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-contrast">{skill.name}</span>
                          <span className="text-sm text-readable">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-professional p-6">
                  <h4 className="font-display text-lg font-semibold text-contrast mb-4">
                    Development Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, index) => {
                      const Icon = tool.icon;
                      return (
                        <div
                          key={tool.name}
                          className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg"
                        >
                          <Icon className="w-4 h-4 text-brand-primary" />
                          <span className="text-sm text-readable">{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}