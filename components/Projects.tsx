"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Monitor, ArrowRight, CheckCircle2, Sparkles, Layers, BrainCircuit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";

const Github = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  github: string;
  liveLinks?: { name: string; url: string }[];
  icon: React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: "event-management",
    title: "Event-Management-System",
    subtitle: "Full Stack Web Application",
    shortDescription: "A web-based college event management system where students can register for events, organizers can create and manage events, and admins oversee the entire system.",
    fullDescription: "Built using ASP.NET Core Web API and React for a smooth and user-friendly experience. Integrates role-based authorization for Students, Organizers, and System Admins, real-time registration status, event feedback, and automated notifications.",
    features: [
      "Role-based Access Control (Admin, Organizer, Student)",
      "Event registration & live scheduling management",
      "RESTful Web API backend written with ASP.NET Core & C#",
      "Responsive frontend designed with React & Tailwind CSS",
      "Relational database management with SQL Server"
    ],
    tech: ["React", "ASP.NET Core Web API", "C#", "SQL Server", "Tailwind CSS"],
    github: "https://github.com/kalsaraashish/College-Event-Management-System",
    liveLinks: [
      { name: "User App", url: "https://mymealuser.vercel.app" },
      { name: "Vendor App", url: "https://mymealvendor.vercel.app" }
    ],
    icon: <GraduationCap className="text-teal" size={48} />
  },
  {
    id: "alledit-desktop",
    title: "AllEdit Desktop App",
    subtitle: "Offline Document Conversion Tool",
    shortDescription: "Built an all-in-one file conversion and editing desktop application using .NET 8, WPF, and C#. Supports PDF, Word, Excel, PowerPoint, and image files.",
    fullDescription: "AllEdit allows users to edit, convert, merge, split, and download files completely offline with zero privacy risk. Integrates LibreOffice and Ghostscript engines to execute high-fidelity document conversions locally.",
    features: [
      "Offline conversion across PDF, DOCX, XLSX, PPTX, and Images",
      "Merge & split multi-page PDF documents effortlessly",
      "Custom WPF desktop UI with dark/light themes",
      "Integrated LibreOffice & Ghostscript backend workers",
      "100% offline functionality ensuring full data privacy"
    ],
    tech: [".NET 8", "WPF", "C#", "LibreOffice", "Ghostscript"],
    github: "https://github.com/kalsaraashish/AllEdit-DesktopApp",
    liveLinks: [
      { name: "Live Site", url: "https://spendwithme.vercel.app" }
    ],
    icon: (
      <img
        src="/projects/pr2.png"
        alt="AllEdit logo"
        className="w-14 h-14 object-contain"
        onError={(e) => {
          (e.target as HTMLElement).style.display = "none";
        }}
      />
    )
  },
  {
    id: "ml-predictive-model",
    title: "Machine Learning & Python Analytics",
    subtitle: "AI & Predictive Model API",
    shortDescription: "Intelligent data analysis and machine learning scripts built with Python, scikit-learn, and REST APIs for predictive data processing.",
    fullDescription: "Developed machine learning pipelines for automated feature extraction, model training, and API serving. Utilizes Python data science libraries to process datasets and provide predictive insights via REST web endpoints.",
    features: [
      "Data preprocessing, cleaning, and feature engineering",
      "Supervised & unsupervised machine learning model training",
      "Python REST API deployment for model inference",
      "Statistical metrics evaluation & data visualization"
    ],
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "REST API"],
    github: "https://github.com/kalsaraashish",
    icon: <BrainCircuit className="text-teal" size={48} />
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 relative bg-sky/20 dark:bg-navy-dark/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3 font-mono">
            <Sparkles size={12} className="mr-1" /> Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-navy dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-sky mx-auto rounded-full mb-6" />
          <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl mx-auto">
            Web applications, desktop tools, and machine learning projects
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border-sky/40 dark:border-sky/15 hover:border-teal/50 group transition-all duration-300 hover:shadow-xl">
                {/* Visual Header */}
                <div className="h-44 bg-gradient-to-br from-sky/40 via-sky/20 to-teal/10 dark:from-navy-light/60 dark:to-navy/40 flex items-center justify-center relative overflow-hidden border-b border-sky/30 dark:border-sky/15">
                  <div className="absolute inset-0 bg-grid-pattern opacity-50" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-navy/90 backdrop-blur-md border border-sky/40 dark:border-sky/20 shadow-lg relative z-10"
                  >
                    {project.icon}
                  </motion.div>

                  <Badge variant="secondary" className="absolute top-3 right-3 text-[10px] font-mono backdrop-blur-md">
                    {project.subtitle}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <CardTitle className="text-lg font-bold font-serif group-hover:text-teal transition-colors">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-navy/50 dark:text-sky/60 hover:text-navy dark:hover:text-white hover:bg-sky/30 dark:hover:bg-navy-light transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <CardDescription className="text-navy/70 dark:text-sky/80 line-clamp-3">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1">
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px] uppercase font-mono tracking-wider">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 border-t border-sky/20 dark:border-sky/15 mt-4 flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold gap-1 text-teal hover:bg-teal/10"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Button>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="text-xs gap-1.5">
                      <Github size={14} /> Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Shadcn Dialog Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="glow">{selectedProject.subtitle}</Badge>
              </div>
              <DialogTitle className="text-2xl font-bold font-serif text-navy dark:text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-navy/70 dark:text-sky/80 text-sm mt-2 leading-relaxed">
                {selectedProject.fullDescription}
              </DialogDescription>
            </DialogHeader>

            {/* Key Features */}
            <div className="space-y-4 my-4">
              <h4 className="text-sm font-bold font-serif text-navy dark:text-white uppercase font-mono tracking-wider flex items-center gap-2">
                <Layers size={16} className="text-teal" /> Key Features & Capabilities
              </h4>
              <div className="space-y-2.5">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80 dark:text-sky/90">
                    <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 my-4">
              <h4 className="text-xs font-bold text-navy/50 dark:text-sky/60 uppercase font-mono">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <DialogFooter className="gap-3">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full gap-2">
                  <Github size={16} /> GitHub Source Code
                </Button>
              </a>
              {selectedProject.liveLinks && selectedProject.liveLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="default" className="w-full gap-2 font-semibold">
                    <ExternalLink size={16} /> {link.name}
                  </Button>
                </a>
              ))}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
