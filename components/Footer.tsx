"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const Github = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-sky/20 dark:bg-navy-dark/95 text-navy dark:text-sky border-t border-sky/30 dark:border-sky/15 pt-16 pb-8 overflow-hidden backdrop-blur-xl">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal/10 dark:bg-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky/30 dark:bg-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky/30 dark:border-sky/15">
          
          {/* Column 1: Brand / Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="px-2.5 py-1 rounded-lg border border-teal/40 dark:border-teal/50 text-teal dark:text-sky font-mono text-xs font-bold bg-teal/10 dark:bg-teal/20 backdrop-blur-md">
                AK
              </div>
              <span className="text-2xl font-bold font-serif text-navy dark:text-white tracking-tight">
                Ashish<span className="text-teal">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 dark:text-sky/80 leading-relaxed max-w-sm">
              Full Stack Developer constructing responsive, clean-code web products for companies and clients.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal dark:text-sky-light">
              // QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 text-xs sm:text-sm text-navy/80 dark:text-sky/90 font-medium">
              <a href="#home" className="hover:text-teal dark:hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-teal dark:hover:text-white transition-colors">About</a>
              <a href="#education" className="hover:text-teal dark:hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-teal dark:hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-teal dark:hover:text-white transition-colors">Tech Stack</a>
              <a href="#contact" className="hover:text-teal dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal dark:text-sky-light">
              // CONTACT INFO
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-navy/80 dark:text-sky/90">
              <a
                href="mailto:ashishkalsara@gmail.com"
                className="flex items-center gap-2.5 hover:text-teal dark:hover:text-white transition-colors"
              >
                <Mail size={16} className="text-teal shrink-0" />
                <span className="truncate">ashishkalsara@gmail.com</span>
              </a>
              <a
                href="tel:+919499648505"
                className="flex items-center gap-2.5 hover:text-teal dark:hover:text-white transition-colors"
              >
                <Phone size={16} className="text-teal shrink-0" />
                <span>+91 94996 48505</span>
              </a>
              <div className="flex items-center gap-2.5 text-navy/70 dark:text-sky/70">
                <MapPin size={16} className="text-teal shrink-0" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Networks & Resume */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-start">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal dark:text-sky-light">
              // SOCIAL NETWORKS
            </h3>
            
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kalsaraashish"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/80 dark:bg-navy/80 border border-sky/40 dark:border-sky/20 text-navy dark:text-sky flex items-center justify-center hover:bg-teal hover:text-white dark:hover:bg-teal dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kalsara-dot-net/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/80 dark:bg-navy/80 border border-sky/40 dark:border-sky/20 text-navy dark:text-sky flex items-center justify-center hover:bg-teal hover:text-white dark:hover:bg-teal dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/80 dark:bg-navy/80 border border-sky/40 dark:border-sky/20 text-navy dark:text-sky flex items-center justify-center hover:bg-teal hover:text-white dark:hover:bg-teal dark:hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Email Ashish"
              >
                <Mail size={17} />
              </a>
            </div>

            <a
              href="/projects/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-full sm:w-auto"
            >
              <button className="w-full px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-teal to-navy text-white hover:from-teal-hover hover:to-navy-dark shadow-[0_0_20px_rgba(86,124,141,0.35)] hover:shadow-[0_0_25px_rgba(86,124,141,0.55)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer">
                Download Resume
              </button>
            </a>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy/60 dark:text-sky/60 font-medium">
          <div>
            &copy; {year} Ashish Kalsara. All rights reserved.
          </div>

          <div>
            Designed with premium theme toggle & custom UI
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-teal text-white shadow-[0_0_20px_rgba(86,124,141,0.5)] hover:bg-teal-hover hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        title="Scroll to top"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="stroke-[2.5]" />
      </button>
    </footer>
  );
}
