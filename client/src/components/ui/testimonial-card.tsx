import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  avatar?: string;
  delay?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  testimonial, 
  rating, 
  avatar, 
  delay = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber hover:border-neon-green/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-8 h-8 text-neon-green opacity-50" />
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-slate-300 italic mb-6 leading-relaxed">
        "{testimonial}"
      </p>
      
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-cyber-blue/20 rounded-full flex items-center justify-center border border-cyber">
          <span className="font-mono text-lg font-bold text-neon-green">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-mono text-sm text-slate-200 font-semibold">{name}</h4>
          <p className="text-xs text-slate-400">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
}