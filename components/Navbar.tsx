"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Wrench, X, Menu } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05070d]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 group" aria-label="A&A Auto Repair Shop home">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center glow-orange"
            >
              <Wrench className="w-4.5 h-4.5 text-orange-400" style={{ width: 18, height: 18 }} />
            </motion.div>
            <div className="hidden sm:block leading-none">
              <p className="font-display font-bold text-white text-sm">A&A Auto Repair</p>
              <p className="text-orange-400 text-[10px] font-mono tracking-widest uppercase">
                Mobile Mechanic
              </p>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-7" role="list">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="relative text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:09952305453"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all font-mono"
              aria-label="Call us at 0995-230-5453"
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              0995-230-5453
            </a>
            <motion.button
              onClick={onBookClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/20"
              aria-label="Book a service"
            >
              Book Service
            </motion.button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#05070d]/98 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/5">
                <a
                  href="tel:09952305453"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-orange-500/30 text-orange-400 text-sm font-semibold rounded-xl hover:bg-orange-500/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button
                  onClick={() => { setMobileOpen(false); onBookClick(); }}
                  className="flex-1 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Book Service
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
