import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projectCategories = [
    {
      category: "E-Commerce & Retail",
      projects: [
        {
          title: "Online Store Platform",
          description: "Complete e-commerce solution with product catalog, shopping cart, secure payment integration, and admin dashboard. Features inventory management, order tracking, customer reviews, and responsive design for all devices.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "MongoDB", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { name: "Stripe API", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Heart,
          gradient: "bg-gradient-to-br from-blue-600/20 to-green-600/20",
        },
        {
          title: "Inventory Management System",
          description: "Smart inventory tracking solution for retail businesses with barcode scanning, automated reorder alerts, and supplier management. Includes sales analytics, stock level monitoring, and multi-location support for growing businesses.",
          technologies: [
            { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
            { name: "Express.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "MySQL", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Chart.js", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-green-600/20 to-blue-600/20",
        }
      ]
    },
    {
      category: "Healthcare & Wellness",
      projects: [
        {
          title: "Patient Management System",
          description: "Digital healthcare platform for appointment scheduling, patient records management, and telemedicine consultations. Includes secure data storage, prescription tracking, and integration with existing hospital systems.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Express.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "PostgreSQL", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
            { name: "JWT Auth", color: "bg-red-500/20 text-red-300 border-red-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
        },
        {
          title: "Fitness Tracking App",
          description: "Personal wellness application with workout logging, nutrition tracking, and progress monitoring. Features goal setting, exercise library, meal planning, and social sharing capabilities for motivation and accountability.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Local Storage", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
            { name: "Chart.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "CSS3", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Heart,
          gradient: "bg-gradient-to-br from-red-600/20 to-pink-600/20",
        }
      ]
    },
    {
      category: "Education & Learning",
      projects: [
        {
          title: "Learning Management System",
          description: "Comprehensive educational platform with course creation, student enrollment, progress tracking, and interactive assessments. Features video streaming, discussion forums, and certification management for modern online learning.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Video.js", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { name: "Socket.io", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "MongoDB", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: BookOpen,
          gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
        },
        {
          title: "Quiz Builder Platform",
          description: "Interactive quiz creation tool for educators with multiple question types, automatic grading, and performance analytics. Includes timed assessments, randomized questions, and detailed student reports for comprehensive evaluation.",
          technologies: [
            { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
            { name: "HTML5", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
            { name: "CSS3", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "JSON", color: "bg-green-500/20 text-green-300 border-green-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20",
        }
      ]
    },
    {
      category: "Finance & Business",
      projects: [
        {
          title: "Business Analytics Dashboard",
          description: "Real-time business intelligence platform with sales tracking, financial reporting, and predictive analytics. Includes customizable charts, automated reporting, and integration with popular accounting software for data-driven decision making.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "D3.js", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
            { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "REST API", color: "bg-red-500/20 text-red-300 border-red-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Leaf,
          gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        },
        {
          title: "Expense Management Tool",
          description: "Personal and business expense tracking application with receipt scanning, category management, and tax reporting. Features budget planning, recurring expense tracking, and detailed financial insights for better money management.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Local Storage", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { name: "Chart.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "File API", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Heart,
          gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
        }
      ]
    },
  ];

  const allProjects = projectCategories.flatMap(cat => cat.projects);

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
              Industry-focused solutions demonstrating expertise across different business sectors
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>
          
          {/* Industry Categories */}
          <div className="space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                {/* Category Projects */}
                <motion.div
                  variants={staggerChildren}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {category.projects.map((project, projectIndex) => (
                    <ProjectCard 
                      key={`${categoryIndex}-${projectIndex}`} 
                      {...project} 
                      index={projectIndex} 
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
