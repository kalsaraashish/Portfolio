"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/toast";

const Linkedin = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Prepared!",
        description: `Thank you ${formData.name}! Opening your email client to send...`
      });
      const mailtoUrl = `mailto:ashishkalsara@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nSender Email: " + formData.email)}`;
      window.open(mailtoUrl, "_blank");
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-28 relative bg-sky/20 dark:bg-navy-dark/40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3 font-mono">
            <Sparkles size={12} className="mr-1" /> Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-navy dark:text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-sky mx-auto rounded-full mb-6" />
          <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg max-w-xl mx-auto">
            I'm always open to new opportunities and interesting collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Connection Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <Card className="p-6 border-sky/40 dark:border-sky/15 hover:border-teal/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-teal/10 text-teal group-hover:scale-105 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold font-serif text-navy dark:text-white">Send an Email</h4>
                  <p className="text-xs text-navy/60 dark:text-sky/70 mb-3 font-mono">ashishkalsara@gmail.com</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopyEmail} className="text-xs gap-1.5 h-8">
                      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      {copied ? "Copied" : "Copy Email"}
                    </Button>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="sm" className="text-xs gap-1 text-teal h-8">
                        Compose <ArrowRight size={12} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* LinkedIn Card */}
            <Card className="p-6 border-sky/40 dark:border-sky/15 hover:border-teal/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-teal/10 text-teal group-hover:scale-105 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold font-serif text-navy dark:text-white">LinkedIn</h4>
                  <p className="text-xs text-navy/60 dark:text-sky/70 mb-3">Connect for professional networking</p>
                  <a href="https://www.linkedin.com/in/ashish-kalsara-dot-net/" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="text-xs gap-1.5 h-8">
                      Visit Profile <ArrowRight size={12} />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* GitHub Card */}
            <Card className="p-6 border-sky/40 dark:border-sky/15 hover:border-teal/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-sky/30 dark:bg-navy-light/60 text-navy dark:text-sky group-hover:scale-105 transition-transform">
                  <Github size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold font-serif text-navy dark:text-white">GitHub Repositories</h4>
                  <p className="text-xs text-navy/60 dark:text-sky/70 mb-3">Explore open source projects & source code</p>
                  <a href="https://github.com/kalsaraashish" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="text-xs gap-1.5 h-8">
                      View GitHub <ArrowRight size={12} />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 border-sky/40 dark:border-sky/15 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-teal" size={20} />
                <h3 className="text-xl font-bold font-serif text-navy dark:text-white">Send Me a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-navy/80 dark:text-sky/80">Your Name</label>
                    <Input
                      placeholder="Ashish"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-navy/80 dark:text-sky/80">Your Email</label>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-navy/80 dark:text-sky/80">Message</label>
                  <Textarea
                    placeholder="Hi Ashish, I would like to discuss a software project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button variant="glow" type="submit" disabled={isSubmitting} className="w-full gap-2 font-bold py-3 mt-2">
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
