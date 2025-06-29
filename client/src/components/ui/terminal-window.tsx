import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
}

export default function TerminalWindow({ children, title = "portfolio@yubraj-dev:~" }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-surface/80 backdrop-blur-sm rounded-lg border border-cyber shadow-2xl"
    >
      <div className="flex items-center justify-between p-4 border-b border-cyber">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm text-slate-400">{title}</div>
      </div>
      <div className="p-6 font-mono text-left">
        {children}
      </div>
    </motion.div>
  );
}
