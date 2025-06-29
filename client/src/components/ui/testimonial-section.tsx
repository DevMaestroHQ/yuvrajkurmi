import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  avatar?: string;
  projectType: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      testimonial: "Yubraj delivered exceptional work on our health platform. His attention to detail and technical expertise in React and Node.js helped us launch on time with zero critical bugs. Highly recommended!",
      rating: 5,
      projectType: "Full-Stack Web Application"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "EduTech Innovations",
      testimonial: "Working with Yubraj was a game-changer for our educational platform. He understood our vision immediately and delivered a scalable solution using Next.js and MongoDB. Professional and reliable.",
      rating: 5,
      projectType: "Educational Platform"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      company: "AgriConnect",
      testimonial: "Yubraj's React Native skills helped us build a cross-platform mobile app that farmers love using. His code quality and communication throughout the project were outstanding.",
      rating: 5,
      projectType: "Mobile Application"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-surface to-dark-bg">
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
              Client Testimonials
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-readable-lg max-w-2xl mx-auto"
            >
              What clients say about working with me
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto mt-4"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 relative overflow-hidden hover-glow"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-green/20" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-neon-green fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-readable mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="text-xs px-2 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full">
                    {testimonial.projectType}
                  </span>
                </div>

                {/* Client Info */}
                <div className="border-t border-cyber/30 pt-4">
                  <h4 className="font-mono text-neon-green font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-cyber-blue">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-lg border border-neon-green/30">
              <h3 className="font-orbitron text-xl text-neon-green mb-2">
                Ready to start your project?
              </h3>
              <p className="text-readable mb-4">
                Join these satisfied clients and bring your ideas to life
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-border px-8 py-3 rounded-lg font-mono hover-glow transition-all duration-300 bg-gradient-to-r from-green-500/10 to-blue-500/10"
                onClick={() => {
                  const subject = encodeURIComponent("Project Inquiry - Let's Work Together");
                  const body = encodeURIComponent(
                    "Hi Yubraj,\n\nI'd like to discuss a potential project with you. Based on your testimonials and portfolio, I believe you'd be a great fit for our needs.\n\nLet's schedule a call to discuss the details!\n\nBest regards"
                  );
                  window.location.href = `mailto:developerrajir@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <span className="text-neon-green">Get Your Quote Today</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}