"use client";

import React, { useState, useEffect } from "react";
import { Search, FileText, Code2, User, Mail, GraduationCap, ArrowRight, BrainCircuit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { useToast } from "./ui/toast";

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

interface CommandSearchProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommandSearch({ isOpen, setIsOpen }: CommandSearchProps) {
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      category: "Navigation",
      list: [
        { title: "Home", description: "Go to top hero section", action: () => scrollToSection("#home"), icon: <User size={18} /> },
        { title: "About Me", description: "Full Stack Developer (ASP.NET Core, React, Python, ML)", action: () => scrollToSection("#about"), icon: <FileText size={18} /> },
        { title: "Technical Skills", description: "ASP.NET Core, React.js, Python, ML, SQL Server", action: () => scrollToSection("#skills"), icon: <Code2 size={18} /> },
        { title: "Featured Projects", description: "Event Management, AllEdit App & ML tools", action: () => scrollToSection("#projects"), icon: <BrainCircuit size={18} /> },
        { title: "Education", description: "Degree details (MCA & BCA)", action: () => scrollToSection("#education"), icon: <GraduationCap size={18} /> },
        { title: "Contact", description: "Get in touch or send email", action: () => scrollToSection("#contact"), icon: <Mail size={18} /> },
      ]
    },
    {
      category: "Quick Actions",
      list: [
        {
          title: "Copy Email Address",
          description: "ashishkalsara@gmail.com",
          action: () => {
            navigator.clipboard.writeText("ashishkalsara@gmail.com");
            toast({ title: "Email Copied!", description: "ashishkalsara@gmail.com copied to clipboard." });
            setIsOpen(false);
          },
          icon: <Mail size={18} className="text-teal" />
        },
        {
          title: "Download Resume",
          description: "PDF format resume",
          action: () => {
            window.open("/projects/Resume.pdf", "_blank");
            setIsOpen(false);
          },
          icon: <FileText size={18} className="text-emerald-500" />
        },
        {
          title: "Open GitHub Profile",
          description: "github.com/kalsaraashish",
          action: () => {
            window.open("https://github.com/kalsaraashish", "_blank");
            setIsOpen(false);
          },
          icon: <Github size={18} />
        },
        {
          title: "Open LinkedIn Profile",
          description: "linkedin.com/in/ashish-kalsara-dot-net",
          action: () => {
            window.open("https://www.linkedin.com/in/ashish-kalsara-dot-net/", "_blank");
            setIsOpen(false);
          },
          icon: <Linkedin size={18} className="text-teal" />
        }
      ]
    }
  ];

  const filteredItems = items.map(cat => ({
    ...cat,
    list: cat.list.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(cat => cat.list.length > 0);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border-sky/30 dark:border-sky/15 bg-white/95 dark:bg-navy-dark/95 backdrop-blur-2xl">
        <DialogHeader className="p-4 border-b border-sky/20 dark:border-sky/15">
          <div className="flex items-center gap-3 px-2">
            <Search className="text-navy/50 dark:text-sky/50" size={20} />
            <input
              type="text"
              placeholder="Type a command or search section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm md:text-base text-navy dark:text-white placeholder:text-navy/40 dark:placeholder:text-sky/40 focus:outline-none"
              autoFocus
            />
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold text-navy/60 dark:text-sky/60 bg-sky/30 dark:bg-navy/80 rounded border border-sky/40 dark:border-sky/20">
              ESC
            </kbd>
          </div>
        </DialogHeader>

        <div className="max-h-80 overflow-y-auto p-4 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-navy/50 dark:text-sky/50 text-sm">
              No results found for "<span className="text-navy dark:text-white font-semibold">{query}</span>"
            </div>
          ) : (
            filteredItems.map((cat) => (
              <div key={cat.category}>
                <div className="text-[10px] uppercase font-mono tracking-widest text-navy/50 dark:text-sky/50 mb-2 px-2">
                  {cat.category}
                </div>
                <div className="space-y-1">
                  {cat.list.map((item) => (
                    <button
                      key={item.title}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-sky/20 dark:hover:bg-navy/70 transition-colors text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-sky/30 dark:bg-navy/80 text-navy dark:text-sky group-hover:scale-105 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold font-serif text-navy dark:text-sky-light group-hover:text-teal transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-navy/60 dark:text-sky/70">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-teal opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-t border-sky/20 dark:border-sky/15 bg-sky/10 dark:bg-navy/40 text-[11px] text-navy/60 dark:text-sky/60 flex items-center justify-between px-4">
          <span>Use <kbd className="px-1 py-0.5 bg-sky/40 dark:bg-navy/80 rounded font-mono">Ctrl+K</kbd> to toggle quick menu</span>
          <span className="text-teal font-medium font-serif">Ashish Kalsara Portfolio</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
