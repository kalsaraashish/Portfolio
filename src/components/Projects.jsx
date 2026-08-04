import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Monitor, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';

const Github = ({ className, size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projectsData = [
  {
    id: "event-management",
    title: "College Event Management System",
    subtitle: "Full Stack Web Application",
    shortDescription: "A comprehensive web portal for college students, event organizers, and administrators to register, coordinate, and oversee academic & cultural events.",
    fullDescription: "Built with ASP.NET Core Web API and React, this system streamlined college event registrations and scheduling. Features role-based authorization for Students, Organizers, and System Admins, real-time registration status, event feedback, and automated notifications.",
    features: [
      "Role-based Access Control (Admin, Organizer, Student)",
      "Event creation, capacity management, and date scheduling",
      "Seamless student registration & ticket pass generation",
      "REST API backend written with ASP.NET Core & C#",
      "Modern responsive UI created with React & Tailwind CSS"
    ],
    tech: ["React.js", "ASP.NET Core Web API", "C#", "SQL Server", "Tailwind CSS"],
    github: "https://github.com/kalsaraashish/College-Event-Management-System",
    liveLinks: [
      { name: "User App", url: "https://mymealuser.vercel.app" },
      { name: "Vendor App", url: "https://mymealvendor.vercel.app" }
    ],
    icon: <GraduationCap className="text-blue-500" size={48} />,
    color: "from-blue-600/20 to-indigo-600/10"
  },
  {
    id: "alledit-desktop",
    title: "AllEdit Desktop Application",
    subtitle: "Offline File Processing & Conversion Tool",
    shortDescription: "An all-in-one desktop utility built with .NET 8 WPF for offline editing, converting, merging, and splitting PDF, Word, Excel, PowerPoint, and image files.",
    fullDescription: "AllEdit is a high-performance Windows desktop application created with .NET 8 WPF and C#. Designed to operate 100% offline without uploading sensitive files to cloud servers. Integrates LibreOffice and Ghostscript engines to execute document conversions locally with zero data privacy compromise.",
    features: [
      "Offline conversion across PDF, DOCX, XLSX, PPTX, and Images",
      "Merge & split multi-page PDF documents effortlessly",
      "Custom WPF desktop user interface with dark/light themes",
      "Integrated LibreOffice & Ghostscript backend workers",
      "Zero network data transfer ensuring complete file security"
    ],
    tech: [".NET 8", "WPF", "C#", "LibreOffice Engine", "Ghostscript"],
    github: "https://github.com/kalsaraashish/AllEdit-DesktopApp",
    liveLinks: [
      { name: "Live Web Site", url: "https://spendwithme.vercel.app" }
    ],
    icon: (
      <img
        src="/projects/pr2.png"
        alt="AllEdit Logo"
        className="w-14 h-14 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
        }}
      />
    ),
    fallbackIcon: <Monitor className="text-indigo-500" size={48} />,
    color: "from-indigo-600/20 to-purple-600/10"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3">
            <Sparkles size={12} className="mr-1" /> Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Applications, desktop utilities, and REST APIs built with React and .NET Core
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 group transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/10">
                {/* Visual Header Banner */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-white/20 dark:border-slate-800 shadow-xl relative z-10"
                  >
                    {project.icon || project.fallbackIcon}
                  </motion.div>

                  <Badge variant="secondary" className="absolute top-4 right-4 text-[10px] font-mono backdrop-blur-md">
                    {project.subtitle}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-400 line-clamp-3">
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

                <CardFooter className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-4 flex items-center justify-between gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold gap-1 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10"
                  >
                    View Details & Features
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
              <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                {selectedProject.fullDescription}
              </DialogDescription>
            </DialogHeader>

            {/* Key Features */}
            <div className="space-y-4 my-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider flex items-center gap-2">
                <Layers size={16} className="text-blue-500" /> Key Features & Capabilities
              </h4>
              <div className="space-y-2.5">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 my-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase font-mono">Technologies Used</h4>
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
                  <Button variant="default" className="w-full gap-2">
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
