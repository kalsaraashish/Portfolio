"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastMessage {
  id: number;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ToastContextType {
  toast: (msg: Omit<ToastMessage, "id">) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = useCallback(({ title, description, variant = "default" }: Omit<ToastMessage, "id">) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, description, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border border-teal/30 bg-white/90 dark:bg-navy-dark/95 backdrop-blur-xl shadow-xl text-navy dark:text-sky-light"
            >
              {t.variant === "destructive" ? (
                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
              ) : (
                <CheckCircle2 className="text-teal shrink-0 mt-0.5" size={20} />
              )}
              <div className="flex-1">
                {t.title && <h4 className="text-sm font-bold font-serif mb-0.5">{t.title}</h4>}
                {t.description && <p className="text-xs text-navy/70 dark:text-sky/80">{t.description}</p>}
              </div>
              <button
                onClick={() => removeToast(t.id)}
                className="text-navy/40 dark:text-sky/40 hover:text-navy dark:hover:text-white p-1 rounded-lg transition-colors"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
