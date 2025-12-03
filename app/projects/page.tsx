"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Chrome, Code, ArrowUpRight, ArrowLeft, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [activeMiniProgram, setActiveMiniProgram] = useState<string | null>(
    null
  );

  const getMiniProgramMeta = (id: string) => {
    switch (id) {
      case "xiaojigungun":
        return {
          name: "小鸡滚滚",
          src: "/images/gh_607067a94d5f_430.jpg",
        };
      case "shichunse":
        return {
          name: "试唇色",
          src: "/images/gh_548a3fb41a72_430.jpg",
        };
      case "laohuangli":
        return {
          name: "老黄历",
          src: "/images/gh_4a2e4882a5b2_430.jpg",
        };
      default:
        return null;
    }
  };

  const handleCloseMiniProgram = () => setActiveMiniProgram(null);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <div className="space-y-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div>
            <h1 className="handwritten text-4xl md:text-5xl text-zinc-100 mb-4">
              My Projects
            </h1>
            <p className="text-lg text-zinc-400">
              A collection of open source projects, including UI frameworks,
              browser extensions, and developer tools.
            </p>
          </div>

          {/* UI Framework Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
              <Package className="w-6 h-6" />
              UI Framework
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://rsuitejs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group p-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">React Suite</span>
                  <span className="text-sm text-zinc-400">
                    Enterprise-level UI component library for React
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Browser Extensions Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
              <Chrome className="w-6 h-6" />
              Browser Extensions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="https://chromewebstore.google.com/detail/ai-bookmark-manager/bmokenmdljklglghnlnecfcpfibjippk"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
              >
                <span>AI Bookmark Manager</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/json-ld-checker/jdddgiebgdijpopfapkocdnnbgkhddln"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
              >
                <span>JSON-LD Checker</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/markdown-resume-builder/hbckologhhbopiofgkjgbklmfcacbffc"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
              >
                <span>Markdown Resume Builder</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/llmstxt-generator/kjcbkalpklkhfhkoieancjgaidnfljnp"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
              >
                <span>llms.txt Generator</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* WeChat Mini Programs Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
              WeChat Mini Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setActiveMiniProgram("xiaojigungun")}
                className="sketch-btn flex flex-col items-start gap-2 hover:shadow-lg transition-all p-4 text-left"
              >
                <div className="text-base font-semibold text-zinc-100">
                  小鸡滚滚
                </div>
                <div className="text-sm text-zinc-400">点击查看小程序码</div>
              </button>
              <button
                type="button"
                onClick={() => setActiveMiniProgram("laohuangli")}
                className="sketch-btn flex flex-col items-start gap-2 hover:shadow-lg transition-all p-4 text-left"
              >
                <div className="text-base font-semibold text-zinc-100">
                  老黄历
                </div>
                <div className="text-sm text-zinc-400 break-all">
                  #小程序://老黄历/35B5dLQIuMbBuhC
                </div>
              </button>
              <button
                type="button"
                onClick={() => setActiveMiniProgram("shichunse")}
                className="sketch-btn flex flex-col items-start gap-2 hover:shadow-lg transition-all p-4 text-left"
              >
                <div className="text-base font-semibold text-zinc-100">
                  试唇色
                </div>
                <div className="text-sm text-zinc-400 break-all">
                  #小程序://试唇色/1Le2cK3ydwTMiOz
                </div>
              </button>
            </div>
          </div>

          {/* VS Code Extensions Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
              <Code className="w-6 h-6" />
              VS Code Extensions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=simonguo.vscode-markdown-table-sort"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
              >
                <span>Markdown Table Sort</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {activeMiniProgram &&
        (() => {
          const meta = getMiniProgramMeta(activeMiniProgram);
          if (!meta) return null;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full mx-4 relative">
                <button
                  type="button"
                  onClick={handleCloseMiniProgram}
                  className="absolute right-3 top-3 text-zinc-500 hover:text-zinc-200 transition-colors"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                      {meta.name}
                    </h3>
                    <p className="text-sm text-zinc-400">微信扫码打开小程序</p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={meta.src}
                      alt={meta.name}
                      width={260}
                      height={260}
                      className="rounded-lg bg-white p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </main>
  );
}
