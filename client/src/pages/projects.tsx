import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, and Stripe payment integration. Responsive design works seamlessly across all devices with clean, modern UI.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
        { name: "MongoDB", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
        { name: "Stripe", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: Heart,
      gradient: "bg-gradient-to-br from-blue-600/20 to-green-600/20",
    },
    {
      title: "Task Management App",
      description: "React-based task management application with drag-and-drop functionality, real-time updates, and collaborative features. Built with modern React hooks and Context API for state management.",
      technologies: [
        { name: "React", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
        { name: "JavaScript", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "CSS3", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
        { name: "Firebase", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: Activity,
      gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills. Built with React and styled with Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
      technologies: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "Tailwind CSS", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
        { name: "Framer Motion", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      ],
      demoUrl: "https://github.com/DevMaestroHQ",
      githubUrl: "https://github.com/DevMaestroHQ",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application using OpenWeather API. Features current weather, 5-day forecast, and location-based weather data with beautiful, intuitive interface.",
      technologies: [
        { name: "JavaScript", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
        { name: "HTML5", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "CSS3", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
        { name: "API", color: "bg-red-500/20 text-red-300 border-red-500/30" },
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
              Real projects built with modern technologies and best practices
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
