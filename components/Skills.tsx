"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Database, Wrench, BrainCircuit } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const skills = [
  {
    name: "React.js",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Advanced"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: "Advanced"
  },
  {
    name: "JavaScript",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Advanced"
  },
  {
    name: "HTML5",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Proficient"
  },
  {
    name: "CSS3",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Proficient"
  },
  {
    name: "ASP.NET Core",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    level: "Advanced"
  },
  {
    name: "C#",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    level: "Advanced"
  },
  {
    name: "SQL Server",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    level: "Proficient"
  },
  {
    name: "Python",
    category: "ml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Proficient"
  },
  {
    name: "Machine Learning",
    category: "ml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    level: "Specialized"
  },
  {
    name: "WPF (.NET 8)",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    level: "Proficient"
  },
  {
    name: "Git",
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "Proficient"
  },
  {
    name: "VS Code",
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: "Proficient"
  },
  {
    name: "Visual Studio",
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    level: "Proficient"
  },
  {
    name: "Postman",
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    level: "Proficient"
  },
  {
    name: "GitHub",
    category: "tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: "Proficient"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all"
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="glow" className="mb-3 font-mono">
            <Sparkles size={12} className="mr-1" /> Technical Proficiency
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-navy dark:text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-sky mx-auto rounded-full mb-6" />
          <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl mx-auto">
            Technologies I work with every day
          </p>
        </motion.div>

        {/* Shadcn Tabs Filter */}
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full max-w-lg">
            <TabsList className="w-full justify-around p-1.5 bg-sky/30 dark:bg-navy/80 rounded-2xl">
              <TabsTrigger value="all" className="flex items-center gap-1 font-semibold text-xs sm:text-sm">
                <Code size={14} /> All
              </TabsTrigger>
              <TabsTrigger value="frontend" className="flex items-center gap-1 font-semibold text-xs sm:text-sm">
                <Cpu size={14} /> Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-1 font-semibold text-xs sm:text-sm">
                <Database size={14} /> Backend
              </TabsTrigger>
              <TabsTrigger value="ml" className="flex items-center gap-1 font-semibold text-xs sm:text-sm">
                <BrainCircuit size={14} /> ML & Python
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-1 font-semibold text-xs sm:text-sm">
                <Wrench size={14} /> Tools
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {filteredSkills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="p-5 flex flex-col items-center justify-center gap-3 text-center hover:border-teal/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-teal/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`w-10 h-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 ${
                      skill.name === "GitHub" ? "dark:invert" : ""
                    }`}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-serif text-navy dark:text-white group-hover:text-teal transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-navy/50 dark:text-sky/60 uppercase tracking-wider font-mono">
                    {skill.level}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
