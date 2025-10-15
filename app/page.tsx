"use client";

import { motion } from "framer-motion";
import { Github, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="space-y-8">
          <div>
            <h1 className="handwritten text-5xl md:text-6xl text-zinc-100 mb-6">
              Hi! I'm Simon Guo.
            </h1>
            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>
                I'm a frontend engineer and engineering director. I'm the author
                of{" "}
                <a
                  href="https://rsuitejs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline decoration-2 decoration-indigo-500/30 underline-offset-4 transition-colors inline-flex items-center gap-1"
                >
                  React Suite
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                , an enterprise-level UI component library.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/simonguo"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub @simonguo
            </a>
            <a
              href="mailto:simonguo.2009@gmail.com"
              className="sketch-btn flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <div className="sketch-btn flex items-center gap-2 cursor-default">
              <MessageCircle className="w-4 h-4" />
              WeChat: simonet
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
