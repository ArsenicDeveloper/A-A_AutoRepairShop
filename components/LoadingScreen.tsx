"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrench } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const STATUS_STEPS = [
  "Initializing diagnostics...",
  "Connecting to vehicle systems...",
  "Loading service modules...",
  "Calibrating interface...",
  "Ready.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setStatusIndex(STATUS_STEPS.length - 1);
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 700);
          }, 400);
          return 100;
        }
        setStatusIndex(Math.min(Math.floor((next / 100) * (STATUS_STEPS.length - 1)), STATUS_STEPS.length - 2));
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070d] overflow-hidden"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Ambient orbs */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
              top: "-100px",
              left: "-100px",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
              bottom: "-50px",
              right: "-50px",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />

          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-[1px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.7) 50%, transparent 100%)",
            }}
            animate={{ y: ["-50px", "110vh"] }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center glow-orange"
              >
                <Wrench className="w-8 h-8 text-orange-400" />
              </motion.div>
              <div className="text-center">
                <p className="font-display font-bold text-white text-xl leading-none">
                  A&A Auto Repair Shop
                </p>
                <p className="text-orange-400/70 text-xs font-mono mt-1 tracking-widest uppercase">
                  Mobile Mechanic
                </p>
              </div>
            </motion.div>

            {/* Progress container */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-72 flex flex-col gap-3"
            >
              {/* Percentage + label */}
              <div className="flex justify-between items-center">
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  {STATUS_STEPS[statusIndex]}
                </p>
                <p className="text-xs font-mono text-orange-400 tabular-nums">
                  {Math.min(100, Math.round(progress))}%
                </p>
              </div>

              {/* Bar track */}
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #f97316, #fbbf24)",
                    width: `${Math.min(100, progress)}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Block indicators */}
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 h-1 rounded-sm"
                    animate={{
                      backgroundColor:
                        progress > (i + 1) * 10
                          ? "#f97316"
                          : "rgba(255,255,255,0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
