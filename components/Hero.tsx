"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Copy, Check, Terminal, BrainCircuit } from "lucide-react";
import { Button } from "./ui/button";
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

// Floating Particles Background Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticle = (xVal?: number, yVal?: number) => {
      return {
        x: xVal ?? Math.random() * width,
        y: yVal ?? Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.3 - 0.05,
        opacity: Math.random() * 0.4 + 0.1,
      };
    };

    // Initialize particles
    for (let i = 0; i < 35; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.y += p.speedY;
        p.x += p.speedX;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(86, 124, 141, ${p.opacity})`;
        ctx.fill();

        // Reset if particle goes off screen
        if (p.y < 0 || p.x < 0 || p.x > width) {
          particles[idx] = createParticle(Math.random() * width, height + 10);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-30"
    />
  );
};

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

  // Motion values for the 3D Tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring values for ultra smooth rotations
  const rotateXSpring = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), { damping: 25, stiffness: 200 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = event.clientX - rect.left - width / 2;
    const localY = event.clientY - rect.top - height / 2;
    mouseX.set(localX);
    mouseY.set(localY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Stagger Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Children entry variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden bg-grid-pattern">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Decorative Blur Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-teal/15 dark:bg-teal/20 rounded-full blur-[140px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-sky/30 dark:bg-navy/40 rounded-full blur-[140px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal dark:text-sky-light text-xs font-semibold backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            <span>Available for Work &amp; Full Stack Development</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-navy dark:text-white leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="text-gradient">Ashish Kalsara</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-medium text-navy/80 dark:text-sky/90 flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            Full Stack Developer <span className="text-teal font-mono text-base font-semibold">(ASP.NET Core &amp; React.js)</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Crafting scalable web applications, REST APIs, and intelligent data systems using <strong className="text-navy dark:text-white">ASP.NET Core</strong>, <strong className="text-navy dark:text-white">React.js</strong>, and <strong className="text-navy dark:text-white">SQL Server</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full"
          >
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
          </motion.div>

          {/* Social Links & Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-sky/40 dark:border-sky/15 w-full"
          >
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
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Code Window with 3D Tilt */}
        <div className="lg:col-span-5 relative" style={{ perspective: 1200 }}>
          <motion.div
            style={{
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-1 border-sky/40 dark:border-sky/20 shadow-2xl overflow-hidden rounded-3xl interactive-card transition-shadow duration-300 hover:shadow-teal/20"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-navy-dark text-white rounded-t-[22px]" style={{ transform: "translateZ(15px)" }}>
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
            <div className="m-0 p-6 bg-navy-dark text-slate-100 font-mono text-xs md:text-sm leading-relaxed rounded-b-[22px] min-h-[300px]" style={{ transform: "translateZ(10px)" }}>
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

              <div className="mt-6 pt-4 border-t border-sky/15 flex items-center justify-between text-[11px] text-sky/60 font-mono" style={{ transform: "translateZ(15px)" }}>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal size={14} /> Ready to deploy
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transform: "translateZ(45px)",
            }}
            className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white/95 dark:bg-navy/90 backdrop-blur-xl border border-sky/40 dark:border-sky/20 shadow-xl hidden sm:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal/20 text-teal flex items-center justify-center font-bold">
              <BrainCircuit size={22} />
            </div>
            <div>
              <div className="text-xs font-bold font-serif text-navy dark:text-white">Clean Code &amp; Architecture</div>
              <div className="text-[10px] text-navy/60 dark:text-sky/70">ASP.NET Core • React.js • SQL Server</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
