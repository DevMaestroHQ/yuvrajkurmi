import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "Password Generator",
      description: "Secure password generator with customizable options including length, character types, and strength indicators. Features copy-to-clipboard functionality and password strength analysis. Simple but essential tool for digital security.",
      technologies: [
        { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
        { name: "HTML5", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
        { name: "CSS3", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Local Storage", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: Heart,
      gradient: "bg-gradient-to-br from-blue-600/20 to-green-600/20",
    },
    {
      title: "BMI Calculator",
      description: "Health-focused BMI calculator with metric and imperial units. Provides detailed health categories, recommendations, and progress tracking. Includes responsive design and data visualization for health monitoring.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Chart.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "CSS3", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
        { name: "Local Storage", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: Activity,
      gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    },
    {
      title: "QR Code Generator",
      description: "Versatile QR code generator supporting text, URLs, WiFi credentials, and contact information. Features downloadable QR codes, custom styling options, and batch generation for business use.",
      technologies: [
        { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
        { name: "QR.js Library", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
        { name: "Canvas API", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "HTML5", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management tool with income/expense tracking, category-based organization, and monthly budget planning. Features data export, spending analysis, and visual reports for better financial awareness.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Local Storage", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
        { name: "Chart.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "CSS3", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
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
              Useful applications solving everyday problems with clean, efficient code
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
