import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, Play, Eye } from "lucide-react";
import { Button } from "./button";

interface CodeBlock {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  liveDemo?: string;
  github?: string;
}

interface CodeShowcaseProps {
  codeBlocks: CodeBlock[];
}

export default function CodeShowcase({ codeBlocks }: CodeShowcaseProps) {
  const [activeBlock, setActiveBlock] = useState(codeBlocks[0]?.id || "");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const activeCodeBlock = codeBlocks.find(block => block.id === activeBlock);

  return (
    <div className="glass-card p-6">
      <div className="text-center mb-6">
        <h3 className="font-orbitron text-2xl text-neon-green glow-text mb-2">
          Code Samples & Expertise
        </h3>
        <p className="text-readable">Real code from production projects</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Code Block Selector */}
        <div className="space-y-3">
          {codeBlocks.map((block) => (
            <motion.div
              key={block.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                activeBlock === block.id
                  ? 'border-neon-green bg-green-500/10'
                  : 'border-cyber/30 bg-dark-surface/30 hover:border-cyber-blue'
              }`}
              onClick={() => setActiveBlock(block.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="font-mono text-cyber-blue font-semibold mb-2">
                {block.title}
              </h4>
              <p className="text-sm text-readable mb-3">{block.description}</p>
              <div className="flex flex-wrap gap-1">
                {block.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-neon-green/20 text-neon-green rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Display */}
        <div className="lg:col-span-2">
          {activeCodeBlock && (
            <motion.div
              key={activeBlock}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-dark-bg/80 rounded-lg border border-cyber p-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-cyber/30">
                <div>
                  <h4 className="font-mono text-neon-green text-lg">
                    {activeCodeBlock.title}
                  </h4>
                  <span className="text-xs text-cyber-cyan">
                    {activeCodeBlock.language}
                  </span>
                </div>
                <div className="flex gap-2">
                  {activeCodeBlock.liveDemo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => window.open(activeCodeBlock.liveDemo, '_blank')}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                  {activeCodeBlock.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => window.open(activeCodeBlock.github, '_blank')}
                    >
                      <Play className="w-3 h-3 mr-1" />
                      GitHub
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs"
                    onClick={() => copyToClipboard(activeCodeBlock.code, activeCodeBlock.id)}
                  >
                    {copiedId === activeCodeBlock.id ? (
                      <Check className="w-3 h-3 mr-1" />
                    ) : (
                      <Copy className="w-3 h-3 mr-1" />
                    )}
                    {copiedId === activeCodeBlock.id ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>

              {/* Code Block */}
              <div className="relative">
                <pre className="text-sm overflow-x-auto p-4 bg-dark-surface/50 rounded-lg">
                  <code className="text-readable font-mono">
                    {activeCodeBlock.code}
                  </code>
                </pre>
              </div>

              {/* Description */}
              <div className="mt-4 p-3 bg-cyber-blue/10 rounded-lg border border-cyber-blue/20">
                <p className="text-sm text-readable">
                  {activeCodeBlock.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}