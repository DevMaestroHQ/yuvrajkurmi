import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Zap } from "lucide-react";

export default function AvailabilityIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 border-l-4 border-l-neon-green"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
        <h3 className="font-orbitron text-xl text-neon-green">Currently Available</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyber-blue" />
          <span className="text-readable text-sm">Response: &lt; 4 hours</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-neon-purple" />
          <span className="text-readable text-sm">Start: Immediate</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-neon-orange" />
          <span className="text-readable text-sm">Remote Ready</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-neon-green" />
          <span className="text-readable text-sm">Full-time / Part-time</span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
        <p className="text-sm text-neon-green font-medium">
          🚀 Open to exciting opportunities in Full-Stack Development, React/Next.js, and Mobile Development
        </p>
      </div>
    </motion.div>
  );
}