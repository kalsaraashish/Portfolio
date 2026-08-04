import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Download, Mail, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { useToast } from './ui/toast';

const Github = ({ className, size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ className, size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashishkalsara@gmail.com");
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "ashishkalsara@gmail.com copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/5 w-[450px] h-[450px] bg-indigo-600/10 dark:bg-indigo-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for Work & MCA Student</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="text-gradient">Ashish Kalsara</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            Full Stack Developer <span className="text-blue-500 font-mono text-base">(React & ASP.NET Core)</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I craft modern, high-performance web applications and backend APIs with clean UI design, robust architecture, and seamless user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <a href="#projects">
              <Button variant="glow" size="lg" className="gap-2">
                View Projects
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/projects/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="lg" className="gap-2">
                <Download size={18} />
                Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" onClick={handleCopyEmail} className="gap-2 border-slate-300 dark:border-slate-800">
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>

          {/* Social Links & Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kalsaraashish"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kalsara-dot-net/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email Ashish"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div>
                <span className="text-slate-900 dark:text-white font-bold text-sm">2+</span> Featured Apps
              </div>
              <div>
                <span className="text-slate-900 dark:text-white font-bold text-sm">100%</span> Dedicated
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Code Sandbox / Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="glass-panel p-1 border-slate-200/80 dark:border-slate-800/80 shadow-2xl glow-box overflow-hidden rounded-3xl">
            <Tabs defaultValue="developer" className="w-full">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 rounded-t-[22px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline-block">Ashish.dev</span>
                </div>
                <TabsList className="h-8 bg-slate-200/60 dark:bg-slate-900/60">
                  <TabsTrigger value="developer" className="text-xs px-3 py-1 font-mono">
                    Developer.cs
                  </TabsTrigger>
                  <TabsTrigger value="stack" className="text-xs px-3 py-1 font-mono">
                    Stack.json
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab 1: Developer.cs */}
              <TabsContent value="developer" className="m-0 p-6 bg-slate-950 text-slate-100 font-mono text-xs md:text-sm leading-relaxed rounded-b-[22px] min-h-[300px]">
                <div className="space-y-1.5 text-slate-300">
                  <div><span className="text-purple-400">using</span> <span className="text-sky-300">System</span>;</div>
                  <div><span className="text-purple-400">namespace</span> <span className="text-emerald-300">Portfolio</span></div>
                  <div>{'{'}</div>
                  <div className="pl-4"><span className="text-purple-400">public class</span> <span className="text-amber-300 font-bold">AshishKalsara</span></div>
                  <div className="pl-4">{'{'}</div>
                  <div className="pl-8 text-slate-400"><span className="text-purple-400">public string</span> Role {'{'} <span className="text-purple-400">get</span>; {'}'} = <span className="text-emerald-400">"Full Stack Developer"</span>;</div>
                  <div className="pl-8 text-slate-400"><span className="text-purple-400">public string</span> Degree {'{'} <span className="text-purple-400">get</span>; {'}'} = <span className="text-emerald-400">"MCA Student"</span>;</div>
                  <div className="pl-8 text-slate-400"><span className="text-purple-400">public string[]</span> PrimaryStack = {'{'}</div>
                  <div className="pl-12 text-emerald-400">"React.js", "ASP.NET Core", "SQL Server", "C#"</div>
                  <div className="pl-8">{'}'};</div>
                  <div className="pl-8 pt-2"><span className="text-purple-400">public bool</span> <span className="text-sky-300">IsAvailableForHire</span>() {'=>'} <span className="text-amber-400">true</span>;</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal size={14} /> Ready to build
                  </span>
                  <span>UTF-8</span>
                </div>
              </TabsContent>

              {/* Tab 2: Stack.json */}
              <TabsContent value="stack" className="m-0 p-6 bg-slate-950 text-slate-100 font-mono text-xs md:text-sm leading-relaxed rounded-b-[22px] min-h-[300px]">
                <div className="space-y-1.5 text-slate-300">
                  <div>{'{'}</div>
                  <div className="pl-4"><span className="text-sky-400">"frontend"</span>: [<span className="text-emerald-400">"React.js"</span>, <span className="text-emerald-400">"Tailwind CSS"</span>, <span className="text-emerald-400">"JavaScript"</span>],</div>
                  <div className="pl-4"><span className="text-sky-400">"backend"</span>: [<span className="text-emerald-400">"ASP.NET Core Web API"</span>, <span className="text-emerald-400">"C#"</span>],</div>
                  <div className="pl-4"><span className="text-sky-400">"database"</span>: [<span className="text-emerald-400">"SQL Server"</span>],</div>
                  <div className="pl-4"><span className="text-sky-400">"desktop"</span>: [<span className="text-emerald-400">"WPF / .NET 8"</span>],</div>
                  <div className="pl-4"><span className="text-sky-400">"tools"</span>: [<span className="text-emerald-400">"Git"</span>, <span className="text-emerald-400">"VS Code"</span>, <span className="text-emerald-400">"Postman"</span>]</div>
                  <div>{'}'}</div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="text-sky-400">JSON valid</span>
                  <span>5 Categories</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Floating Decorative Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl hidden sm:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
              <Code2 size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Clean Architecture</div>
              <div className="text-[10px] text-slate-500">REST APIs & Modern Web</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -top-6 -right-6 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl hidden sm:flex items-center gap-2.5"
          >
            <Sparkles className="text-amber-500" size={18} />
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Shadcn / UI Styled</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
