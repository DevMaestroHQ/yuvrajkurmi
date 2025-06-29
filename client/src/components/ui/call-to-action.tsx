import { motion } from "framer-motion";
import { MessageSquare, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-surface to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-cyber text-center"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-neon-green glow-text mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              I'm actively seeking new opportunities to contribute to innovative projects. 
              Let's discuss how my skills in React, Python, and full-stack development can help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="cyber-border bg-gradient-to-r from-green-500/10 to-blue-500/10 hover-glow font-mono text-neon-green px-8 py-3">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    ./start_conversation
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  variant="outline"
                  className="border-cyber hover:border-neon-green hover:text-neon-green font-mono px-8 py-3"
                >
                  <a href="/resume.pdf" target="_blank">
                    <Download className="w-5 h-5 mr-2" />
                    ./download_resume
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  variant="outline"
                  className="border-cyber hover:border-cyber-blue hover:text-cyber-blue font-mono px-8 py-3"
                >
                  <a href="https://github.com/DevMaestroHQ" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    ./view_github
                  </a>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-8 border-t border-cyber/30"
            >
              <p className="font-mono text-sm text-slate-400">
                Available for full-time positions • Remote & On-site • Immediate start
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}