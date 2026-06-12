"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Maria Santos",
    vehicle: "Toyota Vios 2018",
    rating: 5,
    review:
      "My Vios suddenly wouldn't start and I panicked. Called A&A and they arrived within the hour. Diagnosed a dead battery and corroded terminals — fixed on the spot. Absolutely outstanding service!",
    initials: "MS",
    color: "from-red-500/30 to-red-600/10",
  },
  {
    name: "Roberto Cruz",
    vehicle: "Mitsubishi Montero Sport 2021",
    rating: 5,
    review:
      "I've been burned by dishonest mechanics before. These guys are completely different. They explained every single step, showed me the issue, and the final price matched the quote exactly. Refreshingly honest.",
    initials: "RC",
    color: "from-orange-500/30 to-orange-600/10",
  },
  {
    name: "Ana Reyes",
    vehicle: "Ford Ranger 2020",
    rating: 5,
    review:
      "AC was completely dead in the middle of summer. They came to my house, diagnosed a refrigerant leak and a faulty compressor. Car was blowing cold air again by that afternoon. Very professional team!",
    initials: "AR",
    color: "from-blue-500/30 to-blue-600/10",
  },
  {
    name: "James Tan",
    vehicle: "BMW 318i 2019",
    rating: 5,
    review:
      "Nervous about finding someone who could handle my BMW properly, but they nailed it. Full engine scan, oil change, and brake service all done at my house. The car feels brand new. Definitely a regular customer now.",
    initials: "JT",
    color: "from-sky-400/30 to-sky-500/10",
  },
  {
    name: "Michelle dela Cruz",
    vehicle: "Toyota Fortuner 2022",
    rating: 5,
    review:
      "The Fortuner had a check engine light for weeks and three other shops couldn't figure it out. A&A diagnosed it in under 20 minutes — EGR valve clogged. Fixed and the light never came back. Highly recommend!",
    initials: "MD",
    color: "from-emerald-500/30 to-emerald-600/10",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) =>
      (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5500);
    return () => clearInterval(timer);
  });

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 lg:py-32 bg-[#06080e] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-5">
            <Star className="w-3 h-3 text-orange-400" />
            <span className="text-[11px] text-orange-400 font-mono font-medium uppercase tracking-[0.15em]">
              Client Reviews
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real stories from real car owners — our work speaks for itself.
          </p>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl glass-orange border border-orange-500/15 min-h-[280px] flex items-center justify-center p-8 sm:p-10">
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-30 rounded-3xl transition-all duration-700`}
            />

            {/* Quote icon */}
            <Quote
              className="absolute top-6 right-8 w-10 h-10 text-orange-500/10"
              aria-hidden="true"
            />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 flex flex-col items-center text-center gap-5 w-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl italic">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} border border-white/15 flex items-center justify-center`}
                  >
                    <span className="text-xs font-bold text-white">
                      {t.initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs font-mono">{t.vehicle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-1.5 bg-orange-500"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          {[
            { label: "5-Star Reviews", value: "120+" },
            { label: "Satisfied Clients", value: "500+" },
            { label: "Avg. Rating", value: "5.0 ★" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center glass rounded-2xl px-8 py-4 border border-white/[0.06]"
            >
              <span className="font-display font-bold text-2xl gradient-text">
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs mt-1 font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
