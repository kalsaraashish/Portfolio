"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Copy, Check, Terminal, Sparkles, BrainCircuit } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useToast } from "./ui/toast";

const Github = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ className, size = 20 }: { className?: string; size?: number }) => (
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
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-teal/15 dark:bg-teal/20 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-sky/30 dark:bg-navy/40 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal dark:text-sky-light text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            <span>Available for Work & Full Stack Development</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-navy dark:text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="text-gradient">Ashish Kalsara</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-medium text-navy/80 dark:text-sky/90 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            Full Stack Developer <span className="text-teal font-mono text-base font-semibold">(ASP.NET Core & React.js)</span>
          </h2>

          {/* Description */}
          <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl leading-relaxed">
            Crafting scalable web applications, REST APIs, and intelligent data systems using <strong className="text-navy dark:text-white">ASP.NET Core</strong>, <strong className="text-navy dark:text-white">React.js</strong>, and <strong className="text-navy dark:text-white">SQL Server</strong>.
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
              <Button variant="glass" size="lg" className="gap-2 border-teal/30">
                <Download size={18} />
                Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" onClick={handleCopyEmail} className="gap-2">
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>

          {/* Social Links & Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-sky/40 dark:border-sky/15 w-full">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kalsaraashish"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-sky/30 dark:bg-navy/80 border border-sky/50 dark:border-sky/20 text-navy dark:text-sky hover:text-teal hover:border-teal transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kalsara-dot-net/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-sky/30 dark:bg-navy/80 border border-sky/50 dark:border-sky/20 text-navy dark:text-sky hover:text-teal hover:border-teal transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-sky/30 dark:bg-navy/80 border border-sky/50 dark:border-sky/20 text-navy dark:text-sky hover:text-teal hover:border-teal transition-all duration-300 hover:-translate-y-1"
                aria-label="Email Ashish"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="h-6 w-[1px] bg-sky/50 dark:bg-sky/20 hidden sm:block" />

            <div className="flex items-center gap-6 text-xs text-navy/70 dark:text-sky/70 font-medium">
              <div>
                <span className="text-navy dark:text-white font-bold font-serif text-sm">2+</span> Featured Apps
              </div>
              <div>
                <span className="text-navy dark:text-white font-bold font-serif text-sm">100%</span> Commitment
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="glass-card p-1 border-sky/40 dark:border-sky/20 shadow-2xl overflow-hidden rounded-3xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-navy-dark text-white rounded-t-[22px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-sky/60 ml-2 hidden sm:inline-block">Ashish.dev</span>
              </div>
              <div className="px-3 py-1 bg-navy/80 rounded-lg text-xs font-mono text-sky-light border border-sky/15">
                Developer.cs
              </div>
            </div>

            {/* Developer.cs Content */}
            <div className="m-0 p-6 bg-navy-dark text-slate-100 font-mono text-xs md:text-sm leading-relaxed rounded-b-[22px] min-h-[300px]">
              <div className="space-y-1.5 text-slate-300">
                <div><span className="text-teal-light">using</span> <span className="text-sky">System</span>;</div>
                <div><span className="text-teal-light">namespace</span> <span className="text-emerald-400">AshishKalsara</span></div>
                <div>{'{'}</div>
                <div className="pl-4"><span className="text-teal-light">public class</span> <span className="text-amber-300 font-bold">FullStackDev</span></div>
                <div className="pl-4">{'{'}</div>
                <div className="pl-8 text-sky/80"><span className="text-teal-light">public string</span> Role = <span className="text-emerald-300">"Full Stack Developer"</span>;</div>
                <div className="pl-8 text-sky/80"><span className="text-teal-light">public string[]</span> Skills = {'{'}</div>
                <div className="pl-12 text-emerald-300">"ASP.NET Core", "React.js", "SQL Server"</div>
                <div className="pl-8">{'}'};</div>
                <div className="pl-8 pt-2"><span className="text-teal-light">public bool</span> <span className="text-sky">IsAvailable</span>() {'=>'} <span className="text-amber-400">true</span>;</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>

              <div className="mt-6 pt-4 border-t border-sky/15 flex items-center justify-between text-[11px] text-sky/60 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal size={14} /> Ready to deploy
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white/95 dark:bg-navy/90 backdrop-blur-xl border border-sky/40 dark:border-sky/20 shadow-xl hidden sm:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal/20 text-teal flex items-center justify-center font-bold">
              <BrainCircuit size={22} />
            </div>
            <div>
              <div className="text-xs font-bold font-serif text-navy dark:text-white">Clean Code & Architecture</div>
              <div className="text-[10px] text-navy/60 dark:text-sky/70">ASP.NET Core • React.js • SQL Server</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
