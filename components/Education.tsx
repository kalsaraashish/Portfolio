"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const educationData = [
  {
    institution: "LDRP Institute Of Technology and Research",
    degree: "Master of Computer Applications (MCA)",
    duration: "Aug 2025 - Present",
    location: "Gandhinagar, Gujarat",
    description: "Currently pursuing MCA to deepen my expertise in computer applications, advanced software development, and specialized technologies.",
    status: "Currently Pursuing",
    isCurrent: true
  },
  {
    institution: "Kamani Science College And Prataprai Arts College",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "June 2022 - April 2025",
    location: "Amreli, Gujarat",
    description: "Focused on core computer science concepts including web development, database management, and software engineering.",
    status: "Completed",
    isCurrent: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3 font-mono">
            <Sparkles size={12} className="mr-1" /> Academic Foundation
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-navy dark:text-white mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-sky mx-auto rounded-full mb-6" />
          <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl mx-auto">
            Degrees and academic background in Computer Applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full p-8 relative overflow-hidden border-sky/40 dark:border-sky/15 hover:border-teal/50 group transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal/20 transition-colors" />

                <div className="flex flex-col gap-6">
                  {/* Icon & Status */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal dark:text-sky flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap size={28} />
                    </div>

                    <Badge variant={edu.isCurrent ? "glow" : "secondary"} className="text-xs font-mono">
                      {edu.status}
                    </Badge>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-navy/60 dark:text-sky/70 mb-2">
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar size={14} className="text-teal" />
                        {edu.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-teal" />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-navy dark:text-white group-hover:text-teal transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-teal dark:text-sky-light mb-4 font-sans">
                      {edu.institution}
                    </h4>

                    <p className="text-navy/70 dark:text-sky/80 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
