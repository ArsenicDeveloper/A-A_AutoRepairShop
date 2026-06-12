"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingCallButton from "@/components/FloatingCallButton";
import MobileContactBar from "@/components/MobileContactBar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isLoaded && (
          <>
            <ScrollProgress />
            <Navbar onBookClick={() => setModalOpen(true)} />

            <main>
              <Hero onBookClick={() => setModalOpen(true)} />
              <div className="section-divider" />
              <Services />
              <div className="section-divider" />
              <Vehicles />
              <div className="section-divider" />
              <WhyChooseUs />
              <div className="section-divider" />
              <Testimonials />
              <div className="section-divider" />
              <Contact onBookClick={() => setModalOpen(true)} />
            </main>

            <Footer onBookClick={() => setModalOpen(true)} />

            <BookingModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            />

            <FloatingCallButton />
            <MobileContactBar onBookClick={() => setModalOpen(true)} />
          </>
        )}
      </motion.div>
    </>
  );
}
