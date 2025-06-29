import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      testimonial: "Yubraj delivered exceptional work on our web application. His attention to detail and ability to understand complex requirements made him a valuable team member. The project was completed on time and exceeded our expectations.",
      rating: 5,
      delay: 0
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "InnovateLab",
      testimonial: "Working with Yubraj was a great experience. His React and Python skills are impressive, and he brings fresh ideas to solve complex problems. I'd definitely recommend him for any full-stack development project.",
      rating: 5,
      delay: 0.2
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "GreenTech Ventures",
      testimonial: "Yubraj helped us build our mobile app using React Native. His collaborative approach and technical expertise were crucial in bringing our vision to life. The app performs beautifully and our users love it.",
      rating: 5,
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-surface">
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
              ./client_testimonials
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto mb-4"
            />
            <motion.p
              variants={fadeInUp}
              className="text-slate-300 max-w-2xl mx-auto"
            >
              What clients and collaborators say about working with me
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}