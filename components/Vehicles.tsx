"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car } from "lucide-react";

const BRANDS = [
  { name: "Toyota", origin: "Japanese", letter: "T", color: "from-red-500/20 to-red-500/5", border: "border-red-500/15", text: "text-red-400" },
  { name: "Mitsubishi", origin: "Japanese", letter: "M", color: "from-red-600/20 to-red-600/5", border: "border-red-600/15", text: "text-red-500" },
  { name: "Ford", origin: "American", letter: "F", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/15", text: "text-blue-400" },
  { name: "BMW", origin: "European", letter: "B", color: "from-sky-400/20 to-sky-400/5", border: "border-sky-400/15", text: "text-sky-400" },
  { name: "Mercedes-Benz", origin: "European", letter: "MB", color: "from-gray-400/20 to-gray-400/5", border: "border-gray-400/15", text: "text-gray-300" },
  { name: "Chevrolet", origin: "American", letter: "C", color: "from-yellow-500/20 to-yellow-500/5", border: "border-yellow-500/15", text: "text-yellow-400" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Vehicles() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="vehicles"
      className="relative py-24 lg:py-32 bg-[#06080e] overflow-hidden"
      aria-labelledby="vehicles-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-5">
            <Car className="w-3 h-3 text-cyan-400" />
            <span className="text-[11px] text-cyan-400 font-mono font-medium uppercase tracking-[0.15em]">
              Vehicles We Service
            </span>
          </div>
          <h2
            id="vehicles-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            Your Car,{" "}
            <span className="gradient-text-cyan">Our Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We service Japanese, American, European, and many other vehicle
            brands with equal precision and care.
          </p>
        </motion.div>

        {/* Brand cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className={`group relative p-6 rounded-2xl glass border ${brand.border} hover:border-opacity-40 transition-all duration-300 text-center cursor-default overflow-hidden`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Letter mark */}
                <div
                  className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center font-display font-bold text-lg ${brand.text} group-hover:scale-110 transition-transform duration-300`}
                >
                  {brand.letter}
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm leading-tight">
                    {brand.name}
                  </p>
                  <p className={`text-xs font-mono mt-0.5 ${brand.text} opacity-70`}>
                    {brand.origin}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-2xl border border-white/[0.07]">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            <p className="text-gray-300 text-sm">
              We also service{" "}
              <span className="text-white font-medium">
                Honda, Nissan, Hyundai, Kia, Isuzu, Suzuki
              </span>{" "}
              and many more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
