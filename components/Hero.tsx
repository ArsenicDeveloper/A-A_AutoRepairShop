"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Calendar,
  ChevronDown,
  Wrench,
  Shield,
  Activity,
  Zap,
} from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#05070d]"
      aria-label="Hero section"
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.045) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orb 1 — orange top-left */}
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)",
            top: "-250px",
            left: "-200px",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb 2 — cyan right */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%)",
            top: "15%",
            right: "-150px",
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Orb 3 — orange bottom */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 65%)",
            bottom: "-100px",
            left: "35%",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Scan line animation */}
        <motion.div
          className="absolute inset-x-0 h-[1.5px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.65) 50%, transparent 100%)",
          }}
          animate={{ y: ["-60px", "105vh"] }}
          transition={{ duration: 5.5, ease: "linear", repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* ── Content layer ── */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24"
      >
        <div className="grid lg:grid-cols-[1fr_430px] gap-16 items-center">

          {/* Left — text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <span className="text-[11px] text-orange-300 font-mono font-medium tracking-[0.15em] uppercase">
                Mobile Mechanic · Available Now
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.75 }}
              className="font-display font-bold leading-[1.04] tracking-tight mb-6"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                Professional
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl gradient-text">
                Auto Repair
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-gray-300">
                &amp; Home Service
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
            >
              Certified mechanics providing diagnostics, repairs, maintenance,
              and emergency automotive assistance{" "}
              <span className="text-gray-200 font-medium">
                directly at your location.
              </span>
            </motion.p>

            {/* Business card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="inline-block glass rounded-2xl p-5 mb-10"
            >
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.18em] mb-2">
                Service Provider
              </p>
              <p className="font-display font-bold text-white text-xl leading-none mb-3">
                A&amp;A Auto Repair Shop
              </p>
              <a
                href="tel:09952305453"
                className="group flex items-center gap-2.5 text-orange-400 hover:text-orange-300 transition-colors"
                aria-label="Call 0995-230-5453"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:animate-bounce" />
                <span className="font-mono font-bold text-2xl sm:text-3xl">
                  0995-230-5453
                </span>
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:09952305453"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
                aria-label="Call now"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button
                onClick={onBookClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/[0.07] text-white font-semibold rounded-xl border border-white/10 hover:border-orange-500/30 transition-all"
                aria-label="Book a service"
              >
                <Calendar className="w-5 h-5 text-orange-400" />
                Book Service
              </motion.button>
            </motion.div>
          </div>

          {/* Right — floating dashboard (desktop only) */}
          <div className="hidden lg:block relative h-[520px]" aria-hidden="true">
            {/* Diagnostic card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="absolute top-0 right-0"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="w-[280px] glass-orange rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Live Diagnostics</p>
                      <p className="text-gray-500 text-xs font-mono">OBD-II Active</p>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-[10px] text-green-400 font-mono">LIVE</span>
                  </motion.div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Engine Control", status: "OK", ok: true },
                    { label: "Transmission", status: "OK", ok: true },
                    { label: "ABS System", status: "OK", ok: true },
                    { label: "HVAC Control", status: "CHECK", ok: false },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.12 }}
                      className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-xs text-gray-400 font-mono">{item.label}</span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.ok ? "bg-green-400" : "bg-amber-400"
                          }`}
                        />
                        <span
                          className={`text-xs font-mono font-medium ${
                            item.ok ? "text-green-400" : "text-amber-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-[210px] left-0"
            >
              <motion.div
                animate={{ y: [0, 13, 0] }}
                transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                className="w-[200px] glass rounded-2xl p-4"
              >
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.16em] mb-3">
                  Track Record
                </p>
                {[
                  { label: "Happy Clients", value: "500+", color: "text-orange-400" },
                  { label: "Repairs Done", value: "1,200+", color: "text-orange-400" },
                  { label: "Response Time", value: "< 1 hr", color: "text-cyan-400" },
                ].map((stat) => (
                  <div key={stat.label} className="mb-2.5 last:mb-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs text-gray-400">{stat.label}</span>
                      <span className={`text-sm font-mono font-bold ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-px bg-white/[0.04]" />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Certified badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="absolute bottom-16 right-8"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 2 }}
                className="glass-cyan rounded-2xl p-4 flex items-center gap-3"
              >
                <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">Certified</p>
                  <p className="text-gray-400 text-xs">Professional Mechanics</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating icon */}
            <motion.div
              animate={{ rotate: [0, 18, -12, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[110px] left-[52%] glass rounded-full p-3"
            >
              <Zap className="w-5 h-5 text-amber-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -15, 10, 0], y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[380px] left-[38%] glass rounded-full p-3"
            >
              <Wrench className="w-5 h-5 text-orange-400/70" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-gray-600 font-mono tracking-[0.2em] uppercase">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
