import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code, GitBranch, Figma } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";
import AchievementBadge from "@/components/ui/achievement-badge";
import SkillsRadar from "@/components/ui/skills-radar";
import AvailabilityIndicator from "@/components/ui/availability-indicator";
import CodeShowcase from "@/components/ui/code-showcase";

export default function About() {
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
      name: "Firebase", 
      level: 82, 
      category: "Cloud", 
      color: "#FFCA28",
      description: "Authentication, Firestore, Cloud Functions, and hosting"
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
      <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-surface pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-orbitron text-4xl font-bold text-neon-green glow-text mb-4"
              >
                ./about_me
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
              />
            </motion.div>
            
            {/* Availability Indicator */}
            <div className="mb-12">
              <AvailabilityIndicator />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Bio Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="space-y-6"
              >
                <div className="glass-card p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-4">System.out.println("About Me");</h3>
                  <p className="text-readable-lg leading-relaxed mb-4">
                    Experienced full-stack developer with 2+ years of hands-on experience building responsive web and mobile applications. 
                    Specializing in React, Next.js, Python, and React Native with a track record of delivering high-quality solutions 
                    for health platforms, educational tools, and agricultural applications.
                  </p>
                  <p className="text-readable-lg leading-relaxed">
                    Passionate about clean code, user experience, and collaborative development. Currently pursuing BSc. Computer Science 
                    and Information Technology while actively contributing to real-world projects. Available for full-time opportunities 
                    and exciting freelance projects.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="glass-card p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Contact.Info()</h3>
                  <div className="space-y-3 font-mono text-base">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-neon-green" />
                      <span className="text-readable">developerrajir@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-neon-green" />
                      <span className="text-readable">+977-9824423560</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-neon-green" />
                      <span className="text-readable">Devdaha, Rupandehi</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Achievement Badges */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="space-y-6"
              >
                <div className="grid gap-4">
                  <AchievementBadge
                    title="Full-Stack Expert"
                    description="2+ years building end-to-end applications"
                    icon="code"
                    color="text-neon-green"
                    delay={0}
                  />
                  <AchievementBadge
                    title="Mobile Developer"
                    description="React Native applications in production"
                    icon="star"
                    color="text-cyber-blue"
                    delay={0.1}
                  />
                  <AchievementBadge
                    title="Problem Solver"
                    description="Delivered solutions for health, education & agriculture"
                    icon="target"
                    color="text-neon-purple"
                    delay={0.2}
                  />
                  <AchievementBadge
                    title="Team Player"
                    description="Collaborative development and code reviews"
                    icon="users"
                    color="text-neon-orange"
                    delay={0.3}
                  />
                </div>
              </motion.div>
            </div>

            {/* Skills Radar Chart */}
            <div className="mt-16">
              <SkillsRadar skills={skillsData} />
            </div>

            {/* Code Showcase */}
            <div className="mt-16">
              <CodeShowcase codeBlocks={codeExamples} />
            </div>

            {/* Tools Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-16"
            >
              <div className="glass-card p-6">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-6 text-center">Development Tools & Workflow</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {tools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 rounded-lg bg-dark-surface/30 border border-cyber/20 hover:border-neon-green/50 transition-all duration-300"
                      >
                        <Icon className={`w-12 h-12 mx-auto mb-3 ${tool.color}`} />
                        <h4 className="font-mono text-readable font-semibold">{tool.name}</h4>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}