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
      name: "Raj Patel",
      role: "Business Owner",
      company: "Local Restaurant",
      testimonial: "Yubraj built an amazing website for our restaurant that increased our online orders by 60%. The design is beautiful and easy to use. Very professional and delivered exactly what we needed.",
      rating: 5,
      projectType: "Business Website Development"
    },
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      company: "Tech Startup",
      testimonial: "Working with Yubraj was excellent. He created our company portfolio website with modern design and great performance. Communication was clear and project was completed on time.",
      rating: 5,
      projectType: "Portfolio Website"
    },
    {
      name: "David Johnson",
      role: "Freelancer",
      company: "Photography Business",
      testimonial: "Yubraj helped me create a professional portfolio website to showcase my photography work. The site loads fast, looks amazing on mobile, and has helped me get more clients.",
      rating: 5,
      projectType: "Photography Portfolio"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
              className="heading-lg text-contrast mb-4"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-readable max-w-2xl mx-auto mb-8"
            >
              What clients say about working with me on their projects
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4"
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
                className="card-professional p-6 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-primary/20" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-readable mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="text-xs px-2 py-1 bg-brand-primary/20 text-brand-primary rounded-full">
                    {testimonial.projectType}
                  </span>
                </div>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="text-contrast font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-readable">
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
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 p-8 rounded-lg border border-brand-primary/30">
              <h3 className="text-xl text-contrast mb-2">
                Ready to start your project?
              </h3>
              <p className="text-readable mb-4">
                Join these satisfied clients and bring your ideas to life
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-professional btn-primary"
                onClick={() => {
                  const subject = encodeURIComponent("Project Inquiry - Let's Work Together");
                  const body = encodeURIComponent(
                    "Hi Yubraj,\n\nI'd like to discuss a potential project with you. Based on your testimonials and portfolio, I believe you'd be a great fit for our needs.\n\nLet's schedule a call to discuss the details!\n\nBest regards"
                  );
                  window.location.href = `mailto:developerrajir@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                Get Your Quote Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}