import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import TerminalWindow from "@/components/ui/terminal-window";
import CallToAction from "@/components/ui/call-to-action";
import StatsSection from "@/components/ui/stats-section";
import { useTypewriter } from "@/hooks/use-typewriter";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Home() {
  const { displayText, isComplete } = useTypewriter("Initializing Portfolio... Hello, I'm Yubraj Kurmi", 80);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative particle-bg pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <TerminalWindow>
              <div className="text-neon-green mb-2">$ cat introduction.txt</div>
              <div className="text-readable mb-4">
                <div className="typing-animation min-h-[1.5rem]">
                  <span className={isComplete ? "terminal-cursor" : ""}>
                    {displayText}
                  </span>
                </div>
              </div>
              <div className="text-cyber-blue mb-2">$ echo $PROFESSION</div>
              <div className="text-readable mb-4 text-lg font-medium">Full Stack Developer | React | Python | Firebase</div>
              <div className="text-neon-green mb-2">$ ls skills/</div>
              <div className="text-readable mb-4 text-base">
                <span className="text-blue-400">react/</span>&nbsp;&nbsp;
                <span className="text-green-400">next.js/</span>&nbsp;&nbsp;
                <span className="text-yellow-400">python/</span>&nbsp;&nbsp;
                <span className="text-purple-400">javascript/</span>&nbsp;&nbsp;
                <span className="text-pink-400">mobile-dev/</span>
              </div>
              <div className="text-neon-green mb-2">$ echo $STATUS</div>
              <div className="text-readable text-base font-medium">
                <span className="text-green-400">AVAILABLE_FOR_HIRE</span> | <span className="text-blue-400">REMOTE_READY</span> | <span className="text-purple-400">IMMEDIATE_START</span>
              </div>
            </TerminalWindow>
            
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
                  <span className="text-neon-green">./explore_portfolio</span>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyber px-8 py-3 rounded-lg font-mono hover:border-neon-green hover:text-neon-green transition-all duration-300 cursor-pointer"
                >
                  <span>./get_in_touch</span>
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
      
      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
}
