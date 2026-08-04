"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandSearch from "@/components/CommandSearch";
import { ToastProvider } from "@/components/ui/toast";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <CommandSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      </div>
    </ToastProvider>
  );
}
