import { motion } from "framer-motion";
import { Heart, Activity, BookOpen, Leaf } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Projects() {
  const projectCategories = [
    {
      category: "Amazon-Style E-Commerce",
      projects: [
        {
          title: "Multi-Vendor Marketplace",
          description: "Amazon-inspired marketplace with seller registration, product listings, advanced search filters, and customer reviews. Features wishlist functionality, price comparison, recommendation engine, and secure payment processing with order tracking.",
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
          title: "Flipkart-Style Shopping App",
          description: "Mobile-first e-commerce platform inspired by Flipkart with flash sales, category browsing, price alerts, and social sharing. Includes cash-on-delivery options, return management, and loyalty rewards program for enhanced customer experience.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Express.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "MySQL", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
            { name: "Redis", color: "bg-red-500/20 text-red-300 border-red-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-green-600/20 to-blue-600/20",
        }
      ]
    },
    {
      category: "Netflix-Style Streaming",
      projects: [
        {
          title: "Video Streaming Platform",
          description: "Netflix-inspired streaming service with content categorization, user profiles, watchlist management, and personalized recommendations. Features video player controls, subtitle support, offline downloads, and content rating system.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Video.js", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "MongoDB", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
        },
        {
          title: "YouTube-Style Creator Platform",
          description: "Content creator platform with video upload, channel management, subscriber system, and monetization features. Includes video analytics, comment moderation, live streaming capabilities, and creator dashboard for content management.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "FFmpeg", color: "bg-red-500/20 text-red-300 border-red-500/30" },
            { name: "Socket.io", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "AWS S3", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Heart,
          gradient: "bg-gradient-to-br from-red-600/20 to-pink-600/20",
        }
      ]
    },
    {
      category: "Uber-Style Services",
      projects: [
        {
          title: "Ride Booking Application",
          description: "Uber-inspired ride-hailing service with real-time GPS tracking, driver matching algorithm, fare calculation, and payment integration. Features ride history, driver ratings, multiple vehicle options, and emergency assistance.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Google Maps API", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "Socket.io", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { name: "MongoDB", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: BookOpen,
          gradient: "bg-gradient-to-br from-green-600/20 to-yellow-600/20",
        },
        {
          title: "Food Delivery Platform",
          description: "Swiggy/Zomato-style food delivery app with restaurant listings, menu browsing, order tracking, and delivery management. Includes real-time order updates, multiple payment options, restaurant ratings, and promotional offers.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "PostgreSQL", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
            { name: "Razorpay", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Activity,
          gradient: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20",
        }
      ]
    },
    {
      category: "WhatsApp-Style Communication",
      projects: [
        {
          title: "Real-Time Messaging App",
          description: "WhatsApp-inspired messaging platform with end-to-end encryption, group chats, media sharing, and voice messages. Features message status indicators, contact management, backup/restore functionality, and cross-platform synchronization.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "Socket.io", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "Node.js", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
            { name: "MongoDB", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ],
          demoUrl: "https://github.com/DevMaestroHQ",
          githubUrl: "https://github.com/DevMaestroHQ",
          icon: Leaf,
          gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
        },
        {
          title: "Slack-Style Team Collaboration",
          description: "Professional team communication platform with channels, direct messaging, file sharing, and integration capabilities. Features thread conversations, notification management, workspace organization, and productivity tools integration.",
          technologies: [
            { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { name: "WebRTC", color: "bg-red-500/20 text-red-300 border-red-500/30" },
            { name: "Express.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { name: "PostgreSQL", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
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
              Clone applications inspired by popular platforms showcasing modern development skills
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
