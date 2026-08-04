"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Search, Command, Sparkles, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-header py-3 shadow-md shadow-navy/5" : "bg-transparent py-5"
        }`}
      >
        {/* Scroll Progress Indicator */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal via-teal-light to-sky transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl md:text-2xl font-bold font-serif tracking-tight text-navy dark:text-white group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal/15 dark:bg-teal/30 text-teal dark:text-sky flex items-center justify-center font-serif font-bold text-sm group-hover:scale-105 group-hover:bg-teal group-hover:text-white transition-all duration-300 border border-teal/20">
              AK
            </div>
            <span>
              Ashish Kalsara<span className="text-teal font-sans">.</span>
            </span>
          </a>

          {/* Controls & Nav */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-navy/80 dark:text-sky/80 hover:text-teal dark:hover:text-white transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Quick Command Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky/30 dark:bg-navy/80 border border-sky/50 dark:border-sky/15 text-navy/70 dark:text-sky/80 text-xs hover:border-teal/50 transition-all cursor-pointer shadow-sm"
              aria-label="Open Command Search"
            >
              <Search size={14} className="text-teal" />
              <span className="hidden sm:inline-block font-sans">Search</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/80 dark:bg-navy-dark font-mono text-[10px] text-navy/70 dark:text-sky/70 border border-sky/40 dark:border-sky/20">
                <Command size={10} /> K
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            {mounted && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle Theme"
                    className="rounded-xl border-sky/40 dark:border-sky/20"
                  >
                    {theme === "dark" ? (
                      <Sun size={18} className="text-amber-400" />
                    ) : (
                      <Moon size={18} className="text-navy" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Switch to {theme === "dark" ? "Light" : "Dark"} Mode
                </TooltipContent>
              </Tooltip>
            )}

            {/* CTA Button */}
            <a href="#contact" className="hidden sm:block">
              <Button variant="glow" size="sm" className="rounded-full gap-1.5 font-semibold">
                <Sparkles size={14} />
                Let's Talk
              </Button>
            </a>

            {/* Mobile Navigation Sheet Drawer */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="glass" size="icon" className="rounded-xl">
                    <Menu size={22} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Ashish Kalsara</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-base font-medium text-navy dark:text-sky hover:text-teal py-2 border-b border-sky/20 dark:border-sky/15 flex items-center justify-between"
                      >
                        {link.name}
                        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      </a>
                    ))}
                    <a href="#contact" className="mt-4">
                      <Button variant="glow" className="w-full gap-2 font-bold py-3">
                        <Sparkles size={16} /> Let's Connect
                      </Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
