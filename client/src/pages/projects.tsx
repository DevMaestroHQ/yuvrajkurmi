import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Healthcare Platform",
      description: "Full-stack healthcare management system serving 15,000+ patients and 200+ medical professionals. Built scalable microservices architecture with real-time appointment scheduling, patient records management, and HIPAA-compliant data handling. Achieved 99.9% uptime and reduced appointment scheduling time by 75%.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "PostgreSQL", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
        { name: "AWS", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      ],
      demoUrl: "https://health-ha.com",
      githubUrl: "#",
      icon: Heart,
      gradient: "bg-gradient-to-br from-blue-600/20 to-green-600/20",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Enterprise analytics platform processing 1M+ data points daily for Fortune 500 clients. Implemented real-time data visualization, custom reporting engine, and automated alerting system. Built with Next.js, TypeScript, and containerized microservices. Improved decision-making speed by 60% and reduced data processing costs by 40%.",
      technologies: [
        { name: "Next.js", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "PostgreSQL", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
        { name: "Docker", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://codepulse.com",
      githubUrl: "#",
      icon: Activity,
      gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    },
    {
      title: "EdTech Learning Management System",
      description: "Scalable learning platform serving 30,000+ students across 150+ institutions. Architected multi-tenant SaaS solution with advanced course management, real-time collaboration tools, and AI-powered progress tracking. Integrated payment processing, video streaming, and mobile responsiveness. Achieved 25% improvement in student engagement and 99.8% platform availability.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
        { name: "AI/ML", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://edubridge.com",
      githubUrl: "#",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
    },
    {
      title: "E-Commerce Platform",
      description: "Built scalable e-commerce solution handling $500K+ monthly transactions. Implemented advanced search, real-time inventory, payment processing, and admin dashboard with 99.9% uptime.",
      technologies: [
        { name: "React", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Stripe", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
        { name: "Redis", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      githubUrl: "#",
      icon: Leaf,
      gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    },
  ];

  return (
    <section className="py-20 bg-dark-bg pt-32">
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
              className="font-orbitron text-4xl font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-readable-lg max-w-3xl mx-auto mb-8"
            >
              Enterprise-scale applications serving thousands of users with proven performance metrics
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
