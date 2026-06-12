"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  Home,
  Zap,
  Handshake,
  Banknote,
  Users,
  ShieldCheck,
  Star,
} from "lucide-react";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Certified Professional Mechanics",
    description:
      "Our technicians hold industry certifications and undergo continuous training on the latest automotive systems.",
    color: "orange",
  },
  {
    icon: Home,
    title: "Home Service Convenience",
    description:
      "We come directly to you — at home, the office, or wherever you are. No towing, no hassle.",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Fast Diagnostics",
    description:
      "Advanced OBD-II scanning pinpoints every fault code in minutes, so we fix the right thing the first time.",
    color: "orange",
  },
  {
    icon: Handshake,
    title: "Honest Service",
    description:
      "We explain everything clearly before we start. Transparent pricing — no hidden charges, ever.",
    color: "cyan",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description:
      "Competitive rates that don't cut corners on quality, parts, or the time we invest in your vehicle.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description:
      "Years of hands-on experience with all major Japanese, American, and European vehicle brands.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Repairs",
    description:
      "We stand behind our work. Every repair is completed to last, backed by our service commitment.",
    color: "orange",
  },
  {
    icon: Star,
    title: "Quality Workmanship",
    description:
      "Genuine or OEM-equivalent parts only. We never compromise on the quality of materials we use.",
    color: "cyan",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative py-24 lg:py-32 bg-[#05070d] overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-5">
            <Star className="w-3 h-3 text-orange-400" />
            <span className="text-[11px] text-orange-400 font-mono font-medium uppercase tracking-[0.15em]">
              Why Us
            </span>
          </div>
          <h2
            id="why-us-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            Why Choose{" "}
            <span className="gradient-text">A&amp;A?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We built our reputation on trust, skill, and showing up when you
            need us most.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isOrange = feature.color === "orange";
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-2xl glass border border-white/[0.06] hover:border-orange-500/20 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-[10px] font-mono text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isOrange
                      ? "bg-orange-500/10 group-hover:bg-orange-500/18"
                      : "bg-cyan-400/10 group-hover:bg-cyan-400/15"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isOrange ? "text-orange-400" : "text-cyan-400"
                    }`}
                  />
                </div>

                <h3 className="font-display font-semibold text-white text-sm mb-2.5 leading-snug pr-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>

                <div
                  className={`absolute left-0 top-6 bottom-6 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top ${
                    isOrange ? "bg-orange-500/50" : "bg-cyan-400/40"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
