"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Calendar, MapPin, Clock } from "lucide-react";

interface ContactProps {
  onBookClick: () => void;
}

export default function Contact({ onBookClick }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 lg:py-32 bg-[#05070d] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 65%)",
            top: "30%",
            left: "20%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
        >
          <motion.span
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="text-[11px] text-orange-400 font-mono font-medium uppercase tracking-[0.15em]">
            Reach Out Now
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight"
        >
          Ready to Fix{" "}
          <span className="gradient-text">Your Car?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
        >
          Speak directly with a professional mechanic. We're ready to come to
          you — fast, honest, and affordable.
        </motion.p>

        {/* Business name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-3"
        >
          A&amp;A Auto Repair Shop
        </motion.p>

        {/* Phone number — hero CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35, type: "spring", stiffness: 120 }}
          className="mb-10"
        >
          <motion.a
            href="tel:09952305453"
            animate={{
              boxShadow: [
                "0 0 20px rgba(249,115,22,0.15)",
                "0 0 60px rgba(249,115,22,0.4)",
                "0 0 20px rgba(249,115,22,0.15)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-4 px-10 py-5 glass-orange border border-orange-500/30 rounded-2xl group transition-colors hover:border-orange-500/60"
            aria-label="Call 0995-230-5453"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            >
              <Phone className="w-7 h-7 text-orange-400" />
            </motion.div>
            <span className="font-mono font-bold text-3xl sm:text-4xl text-white group-hover:text-orange-50 transition-colors">
              0995-230-5453
            </span>
          </motion.a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="tel:09952305453"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </motion.a>
          <motion.button
            onClick={onBookClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/[0.07] text-white font-semibold rounded-xl border border-white/10 hover:border-orange-500/30 transition-all"
          >
            <Calendar className="w-5 h-5 text-orange-400" />
            Book Service Online
          </motion.button>
        </motion.div>

        {/* Info tiles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-500 font-mono">Service Area</p>
              <p className="text-sm text-white font-medium">We Come to You</p>
            </div>
          </div>
          <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-500 font-mono">Hours</p>
              <p className="text-sm text-white font-medium">Mon–Sun, 8AM–6PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
