"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ScanLine, Cpu, Wrench, Layers, Settings2, Wind,
  ShieldAlert, Car, SlidersHorizontal, Droplets, Gauge,
  Filter, RefreshCw, Zap, RotateCcw, ClipboardCheck, ShoppingCart,
} from "lucide-react";

const SERVICES = [
  {
    icon: ScanLine,
    title: "Full Scan & Diagnostics",
    description: "Comprehensive OBD-II scan across all vehicle systems to identify every fault code instantly.",
    accent: "cyan",
  },
  {
    icon: Cpu,
    title: "Engine Diagnosis",
    description: "Advanced multi-point engine fault detection with professional diagnostic equipment.",
    accent: "orange",
  },
  {
    icon: Wrench,
    title: "Engine Troubleshooting",
    description: "Systematic root-cause analysis and targeted repair of complex engine issues.",
    accent: "orange",
  },
  {
    icon: Layers,
    title: "Top Overhaul",
    description: "Head gasket, valves, camshaft, and upper engine component service and reconditioning.",
    accent: "orange",
  },
  {
    icon: Settings2,
    title: "Complete Engine Overhaul",
    description: "Full engine rebuild — pistons, bearings, rings, and all internal components restored.",
    accent: "orange",
  },
  {
    icon: Wind,
    title: "Air Conditioning Repair",
    description: "AC diagnostics, refrigerant regas, compressor repair, and full HVAC system service.",
    accent: "cyan",
  },
  {
    icon: ShieldAlert,
    title: "Brake System Repair",
    description: "Pads, rotors, calipers, brake lines, and full hydraulic system inspection and repair.",
    accent: "orange",
  },
  {
    icon: Car,
    title: "Underchassis Repair",
    description: "Suspension arms, CV joints, tie rods, shock absorbers, and underbody components.",
    accent: "orange",
  },
  {
    icon: SlidersHorizontal,
    title: "Tune-Up Services",
    description: "Spark plugs, ignition system, timing, and full engine tuning for peak performance.",
    accent: "cyan",
  },
  {
    icon: Droplets,
    title: "Oil & Filter Change",
    description: "Premium synthetic or semi-synthetic oil change with genuine OEM filter replacement.",
    accent: "orange",
  },
  {
    icon: Gauge,
    title: "Carburetor Service",
    description: "Deep cleaning, jetting adjustment, float calibration, and full carburetor rebuilding.",
    accent: "orange",
  },
  {
    icon: Filter,
    title: "Throttle Body Cleaning",
    description: "Carbon deposit removal for restored throttle response and smoother idle.",
    accent: "cyan",
  },
  {
    icon: RefreshCw,
    title: "Intake Manifold Cleaning",
    description: "Complete intake manifold decarbonisation for maximum airflow and fuel efficiency.",
    accent: "orange",
  },
  {
    icon: Zap,
    title: "Turbo System Service",
    description: "Turbocharger inspection, oil feed line check, wastegate service, and boost testing.",
    accent: "orange",
  },
  {
    icon: RotateCcw,
    title: "EGR Cleaning",
    description: "Exhaust gas recirculation valve and passage deep-clean to eliminate rough idle.",
    accent: "cyan",
  },
  {
    icon: ClipboardCheck,
    title: "Vehicle Maintenance & Inspection",
    description: "Full preventive maintenance checklist and comprehensive safety inspection report.",
    accent: "orange",
  },
  {
    icon: ShoppingCart,
    title: "Car Buying Assistance",
    description: "Pre-purchase inspection to protect your investment — know exactly what you're buying.",
    accent: "cyan",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 lg:py-32 bg-[#05070d] overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-5">
            <Wrench className="w-3 h-3 text-orange-400" />
            <span className="text-[11px] text-orange-400 font-mono font-medium uppercase tracking-[0.15em]">
              What We Do
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            Our{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From quick diagnostics to full engine rebuilds — we handle it all,
            at your doorstep.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isOrange = service.accent === "orange";
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group relative p-5 rounded-2xl glass border border-white/[0.06] hover:border-orange-500/25 transition-colors duration-300 cursor-default"
                style={{
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = isOrange
                    ? "0 0 30px rgba(249,115,22,0.1), inset 0 0 30px rgba(249,115,22,0.03)"
                    : "0 0 30px rgba(34,211,238,0.08), inset 0 0 30px rgba(34,211,238,0.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
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
                {/* Text */}
                <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug group-hover:text-orange-50 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isOrange
                      ? "bg-gradient-to-r from-orange-500/60 to-transparent"
                      : "bg-gradient-to-r from-cyan-400/50 to-transparent"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 text-sm mb-4">
            Not sure what your car needs?
          </p>
          <a
            href="tel:09952305453"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35"
            aria-label="Call us now at 0995-230-5453"
          >
            <span>Call Now — 0995-230-5453</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
