import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import TerminalWindow from "@/components/ui/terminal-window";
import CallToAction from "@/components/ui/call-to-action";
import StatsSection from "@/components/ui/stats-section";
import TestimonialSection from "@/components/ui/testimonial-section";
import SEOHead from "@/components/ui/seo-head";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Home() {

  return (
    <>
      <SEOHead />
      <section className="min-h-screen flex items-center justify-center relative particle-bg pt-20 section-spacing">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <div className="professional-card p-8 mb-8">
              <div className="text-neon-green mb-3 font-mono text-sm">$ cat profile.md</div>
              <div className="text-readable-xl mb-6">
                <div className="min-h-[2rem]">
                  <span>Welcome to my digital workspace. I'm Yubraj Kurmi</span>
                </div>
              </div>
              <div className="text-cyber-blue mb-3 font-mono text-sm">$ whoami</div>
              <div className="text-readable-xl mb-6 font-bold text-white">Full Stack Developer | React & Node.js Specialist | Modern Web Applications</div>
              <div className="text-neon-green mb-3 font-mono text-sm">$ cat skills.json</div>
              <div className="text-readable mb-6 text-base flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">React</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">Node.js</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">JavaScript</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">TypeScript</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">MongoDB</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Express.js</span>
              </div>
              <div className="text-neon-green mb-3 font-mono text-sm">$ cat status.json</div>
              <div className="text-readable-lg font-semibold flex flex-wrap gap-4">
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  AVAILABLE_FOR_WORK
                </span>
                <span className="text-blue-400">REMOTE_FRIENDLY</span>
                <span className="text-purple-400">FULL_STACK</span>
              </div>
            </div>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cyber-border px-8 py-3 rounded-lg font-mono hover-glow transition-all duration-300 bg-gradient-to-r from-green-500/10 to-blue-500/10 cursor-pointer"
                >
                  <span className="text-neon-green">./discover_work</span>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyber px-8 py-3 rounded-lg font-mono hover:border-neon-green hover:text-neon-green transition-all duration-300 cursor-pointer"
                >
                  <span>./lets_collaborate</span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-green rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyber-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-neon-purple rounded-full animate-bounce"></div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-neon-green" />
        </motion.div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
}
