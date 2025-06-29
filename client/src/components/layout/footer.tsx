import { motion } from "framer-motion";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-dark-surface border-t border-cyber py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo size="sm" showText={true} className="mb-4 md:mb-0" />
          <div className="font-mono text-sm text-slate-400 text-center md:text-right">
            <div>Crafted with passion using React & modern web technologies</div>
            <div className="mt-1">© 2025 Yubraj Kurmi. Building the future, one line at a time.</div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
