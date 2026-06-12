"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Calendar } from "lucide-react";

interface FooterProps {
  onBookClick: () => void;
}

const SERVICES_LIST = [
  "Full Scan & Diagnostics",
  "Engine Diagnosis",
  "Top Overhaul",
  "Complete Engine Overhaul",
  "Air Conditioning Repair",
  "Brake System Repair",
  "Tune-Up Services",
  "Oil & Filter Change",
  "Turbo System Service",
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({ onBookClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#03050a] border-t border-white/[0.05] overflow-hidden" aria-label="Site footer">
      {/* Decorative top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), rgba(34,211,238,0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-none">
                  A&amp;A Auto Repair Shop
                </p>
                <p className="text-orange-400 text-[10px] font-mono tracking-widest uppercase mt-0.5">
                  Mobile Mechanic
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Professional mobile mechanic and home-service automotive repair.
              Certified, honest, and always at your doorstep.
            </p>
            <a
              href="tel:09952305453"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono font-bold text-base transition-colors"
              aria-label="Call us at 0995-230-5453"
            >
              <Phone className="w-4 h-4" />
              0995-230-5453
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES_LIST.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-gray-200 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500/50 rounded-full group-hover:bg-orange-400 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-200 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400/40 rounded-full group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + CTA */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-1">Phone</p>
                <a
                  href="tel:09952305453"
                  className="text-white font-mono font-semibold hover:text-orange-400 transition-colors"
                >
                  0995-230-5453
                </a>
              </div>
              <div>
                <p className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-1">Service Area</p>
                <p className="text-gray-300 text-sm">We Come to You</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-1">Hours</p>
                <p className="text-gray-300 text-sm">Mon–Sun · 8AM–6PM</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:09952305453"
                className="flex items-center justify-center gap-2 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                onClick={onBookClick}
                className="flex items-center justify-center gap-2 py-2.5 glass hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                Book Service
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.05] mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {year} A&amp;A Auto Repair Shop. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Professional Mobile Mechanic &amp; Home Service Automotive Repair
          </p>
        </div>
      </div>
    </footer>
  );
}
