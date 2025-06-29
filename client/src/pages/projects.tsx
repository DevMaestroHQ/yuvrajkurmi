import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "HealthAssistant",
      description: "Built full stack Health App using modern web technologies with comprehensive health tracking and monitoring features.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "MongoDB", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
        { name: "Real-time", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      ],
      demoUrl: "https://health-ha.com",
      githubUrl: "#",
      icon: Heart,
      gradient: "bg-gradient-to-br from-blue-600/20 to-green-600/20",
    },
    {
      title: "CodePulse",
      description: "CodePulse is a full-featured code coverage platform that helps developers visualize, track, and improve test coverage across their projects.",
      technologies: [
        { name: "Next.js", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "PostgreSQL", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
        { name: "Authentication", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://codepulse.com",
      githubUrl: "#",
      icon: Activity,
      gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    },
    {
      title: "Edubridge",
      description: "Built an educational platform with automated web scraping to integrate syllabus materials and examination resources for students.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
        { name: "Web Scraping", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://edubridge.com",
      githubUrl: "#",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
    },
    {
      title: "E-Grow Mobile App",
      description: "Contributed to the development of E-Grow - Easy Farming mobile app using React Native, collaborating with team members to deliver core functionalities.",
      technologies: [
        { name: "React Native", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
        { name: "JavaScript", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Firebase", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
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
              className="font-orbitron text-4xl font-bold text-neon-green glow-text mb-4"
            >
              ./projects
            </motion.h2>
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
