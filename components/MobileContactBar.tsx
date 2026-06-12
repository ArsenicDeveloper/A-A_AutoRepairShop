"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

interface MobileContactBarProps {
  onBookClick: () => void;
}

export default function MobileContactBar({ onBookClick }: MobileContactBarProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 22 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      {/* Glass bar */}
      <div className="bg-[#08090f]/95 backdrop-blur-2xl border-t border-white/[0.08] px-4 py-3 flex items-center gap-3">
        {/* Call button — primary */}
        <a
          href="tel:09952305453"
          className="flex-1 flex items-center justify-center gap-2.5 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-orange-500/25 active:scale-95"
          aria-label="Call 0995-230-5453"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call 0995-230-5453
        </a>

        {/* Book button — secondary */}
        <button
          onClick={onBookClick}
          className="flex items-center justify-center gap-2 py-3 px-4 glass border border-white/10 hover:border-orange-500/30 text-white text-sm font-semibold rounded-xl transition-all active:scale-95"
          aria-label="Book a service"
        >
          <Calendar className="w-4 h-4 text-orange-400" aria-hidden="true" />
          Book
        </button>
      </div>

      {/* Safe area for iPhone home bar */}
      <div className="h-safe-area bg-[#08090f]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
    </motion.div>
  );
}
