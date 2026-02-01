"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Chrome,
  Code,
  ArrowUpRight,
  ArrowLeft,
  Package,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type MiniProgram = {
  id: string;
  name: string;
  src: string;
  description?: string;
  codeText?: string;
};

const MINI_PROGRAMS: MiniProgram[] = [
  {
    id: "chapeiliao",
    name: "查配料",
    src: "/images/gh_3b1024dab28d_430.jpg",
    codeText: "#小程序://查配料/4jY79IrV5jXQD8c",
  },
  {
    id: "laohuangli",
    name: "老黄历",
    src: "/images/gh_4a2e4882a5b2_430.jpg",
    codeText: "#小程序://老黄历/35B5dLQIuMbBuhC",
  },
  {
    id: "shichunse",
    name: "试唇色",
    src: "/images/gh_548a3fb41a72_430.jpg",
    codeText: "#小程序://试唇色/1Le2cK3ydwTMiOz",
  },
  {
    id: "houlangcidian",
    name: "后浪词典",
    src: "/images/gh_0a334bbf7562_430.jpg",
    codeText: "#小程序://后浪词典/b2BUbr03IHjfJ7n",
  },
  {
    id: "xiaojigungun",
    name: "小鸡滚滚",
    src: "/images/gh_607067a94d5f_430.jpg",
    codeText: "#小程序://小鸡滚滚/RwexQh8NBwWhCaI",
  },
];

type BrowserExtension = {
  name: string;
  url: string;
  description?: string;
};

const BROWSER_EXTENSIONS: BrowserExtension[] = [
  {
    name: "小红书 VOC 情感分析",
    url: "https://chromewebstore.google.com/detail/%E5%B0%8F%E7%BA%A2%E4%B9%A6-voc-%E6%83%85%E6%84%9F%E5%88%86%E6%9E%90/epmmcmmgmflokmpndeamenffhhhbokkl",
  },
  {
    name: "AI SEO Analyzer",
    url: "https://chromewebstore.google.com/detail/ai-seo-analyzer/mkllojoidmbbhmjlpjabpfhklgancdnj",
  },
  {
    name: "JSON-LD Checker",
    url: "https://chromewebstore.google.com/detail/json-ld-checker/jdddgiebgdijpopfapkocdnnbgkhddln",
  },
  {
    name: "AI Bookmark Manager",
    url: "https://chromewebstore.google.com/detail/ai-bookmark-manager/bmokenmdljklglghnlnecfcpfibjippk",
  },
  {
    name: "Markdown Resume Builder",
    url: "https://chromewebstore.google.com/detail/markdown-resume-builder/hbckologhhbopiofgkjgbklmfcacbffc",
  },
  {
    name: "llms.txt Generator",
    url: "https://chromewebstore.google.com/detail/llmstxt-generator/kjcbkalpklkhfhkoieancjgaidnfljnp",
  },
  {
    name: "Website Color Palette Extractor",
    url: "https://chromewebstore.google.com/detail/website-color-palette-ext/dbopblnhhgnompongppkekhpafmlakjn",
  },
  {
    name: "WriteRight AI",
    url: "https://chromewebstore.google.com/detail/writeright-ai/ojnifnkeeeniiapacnaihbbonholjapo",
  },
  {
    name: "图片视频下载助手",
    url: "https://chromewebstore.google.com/detail/%E5%9B%BE%E7%89%87%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B/hdgkcdjcjffekcikabmknnfjaombiefm",
  },
];

type MiniProgramCopyButtonProps = {
  codeText: string;
};

function MiniProgramCopyButton({ codeText }: MiniProgramCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = () => {
    void navigator.clipboard.writeText(codeText);
    setCopied(true);
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={(event) => {
        event.stopPropagation();
        handleCopy();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          handleCopy();
        }
      }}
      className="shrink-0 text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer inline-flex items-center justify-center"
      aria-label={copied ? "Copied" : "Copy mini program code"}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </span>
  );
}

export default function Projects() {
  const [activeMiniProgram, setActiveMiniProgram] = useState<
    (typeof MINI_PROGRAMS)[number]["id"] | null
  >(null);

  const getMiniProgramMeta = (id: (typeof MINI_PROGRAMS)[number]["id"]) => {
    return MINI_PROGRAMS.find((item) => item.id === id) ?? null;
  };

  const handleCloseMiniProgram = () => setActiveMiniProgram(null);

  const allProjects = [
    {
      name: "React Suite",
      description: "Enterprise-level UI component library for React",
      url: "https://rsuitejs.com/",
      category: "UI Framework",
      os: "Web",
    },
    ...BROWSER_EXTENSIONS.map((ext) => ({
      name: ext.name,
      description: ext.description,
      url: ext.url,
      category: "Browser Extension",
      os: "Chrome, Edge, Brave",
    })),
    ...MINI_PROGRAMS.map((mp) => ({
      name: mp.name,
      description: mp.description,
      url: undefined,
      category: "WeChat Mini Program",
      os: "WeChat",
    })),
    {
      name: "Markdown Table Sort",
      description: "Sort markdown tables in VS Code",
      url: "https://marketplace.visualstudio.com/items?itemName=simonguo.vscode-markdown-table-sort",
      category: "VS Code Extension",
      os: "VS Code",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Simon Guo",
    description:
      "A collection of open source work and personal projects, including UI frameworks, browser extensions, VS Code extensions, and WeChat mini programs.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.description,
          url: project.url,
          applicationCategory: project.category,
          operatingSystem: project.os,
        },
      })),
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              A collection of open source work and personal projects, including
              UI frameworks, browser extensions, VS Code extensions, and WeChat
              mini programs.
            </p>
          </div>

          {/* UI Framework Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-zinc-100 flex items-center gap-2">
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
                  <span className="text-lg font-medium">React Suite</span>
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
            <h2 className="text-2xl font-medium text-zinc-100 flex items-center gap-2">
              <Chrome className="w-6 h-6" />
              Browser Extensions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BROWSER_EXTENSIONS.map((extension) => (
                <a
                  key={extension.name}
                  href={extension.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn flex items-center justify-between gap-2 hover:shadow-lg transition-all group"
                >
                  <span>{extension.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* WeChat Mini Programs Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-zinc-100 flex items-center gap-2">
              WeChat Mini Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MINI_PROGRAMS.map((item: (typeof MINI_PROGRAMS)[number]) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveMiniProgram(item.id)}
                  className="sketch-btn flex flex-col items-start gap-2 hover:shadow-lg transition-all p-4 text-left"
                >
                  <div className="text-base font-medium text-zinc-100">
                    {item.name}
                  </div>
                  {item.description && (
                    <div className="text-sm text-zinc-400">
                      {item.description}
                    </div>
                  )}
                  {item.codeText && (
                    <div className="text-sm text-zinc-400 break-all flex items-center justify-between gap-2 w-full">
                      <span className="truncate" title={item.codeText}>
                        {item.codeText}
                      </span>
                      {item.codeText && (
                        <MiniProgramCopyButton codeText={item.codeText} />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* VS Code Extensions Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-zinc-100 flex items-center gap-2">
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
                    <h3 className="text-lg font-medium text-zinc-100 mb-1">
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
