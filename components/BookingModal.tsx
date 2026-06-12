"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Phone, Car, Wrench, User, MessageSquare,
  CheckCircle, ChevronDown,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  "Full Scan & Diagnostics",
  "Engine Diagnosis",
  "Engine Troubleshooting",
  "Top Overhaul",
  "Complete Engine Overhaul",
  "Air Conditioning Repair",
  "Brake System Repair",
  "Underchassis Repair",
  "Tune-Up Services",
  "Oil & Filter Change",
  "Carburetor Service",
  "Throttle Body Cleaning",
  "Intake Manifold Cleaning",
  "Turbo System Service",
  "EGR Cleaning",
  "Vehicle Maintenance & Inspection",
  "Car Buying Assistance",
  "Other (Please describe below)",
];

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  notes: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  notes: "",
};

function InputField({
  label,
  id,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}: {
  label: string;
  id: keyof FormState;
  icon: React.ElementType;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (id: keyof FormState, value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] text-gray-400 font-mono uppercase tracking-[0.16em] mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
          aria-hidden="true"
        />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          required={required}
          className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.06] transition-all duration-200"
        />
      </div>
    </div>
  );
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (id: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(INITIAL_FORM);
      onClose();
    }, 4000);
  };

  const handleClose = () => {
    if (!loading) {
      setSubmitted(false);
      setForm(INITIAL_FORM);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative w-full max-w-md rounded-3xl glass-orange border border-orange-500/20 overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative p-6 pb-5 border-b border-white/[0.06]">
              <div
                className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.07] to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[10px] text-orange-400/80 font-mono uppercase tracking-[0.18em] mb-1">
                    A&amp;A Auto Repair Shop
                  </p>
                  <h2
                    id="modal-title"
                    className="font-display font-bold text-white text-xl"
                  >
                    Book a Service
                  </h2>
                  <p className="text-gray-500 text-xs mt-1">
                    Fill in the details and we&apos;ll contact you promptly.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40"
                  aria-label="Close booking modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, type: "spring", stiffness: 200 }}
                  className="p-8 flex flex-col items-center justify-center gap-5 text-center min-h-[320px]"
                >
                  <motion.div
                    animate={{ scale: [0, 1.25, 1] }}
                    transition={{ duration: 0.55, type: "spring" }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle className="w-9 h-9 text-green-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      Request Received!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                      We&apos;ll call you at{" "}
                      <span className="text-white font-mono">{form.phone || "your number"}</span>{" "}
                      shortly. For immediate help, call us directly.
                    </p>
                  </div>
                  <a
                    href="tel:09952305453"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0995-230-5453
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 space-y-4"
                >
                  <InputField
                    label="Full Name"
                    id="name"
                    icon={User}
                    placeholder="Juan dela Cruz"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Phone Number"
                    id="phone"
                    icon={Phone}
                    type="tel"
                    placeholder="0917-xxx-xxxx"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Vehicle Model"
                    id="vehicle"
                    icon={Car}
                    placeholder="e.g. Toyota Vios 2019"
                    value={form.vehicle}
                    onChange={handleChange}
                  />

                  {/* Service select */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[10px] text-gray-400 font-mono uppercase tracking-[0.16em] mb-1.5"
                    >
                      Service Needed
                    </label>
                    <div className="relative">
                      <Wrench
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                        aria-hidden="true"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                        aria-hidden="true"
                      />
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        required
                        className="w-full appearance-none pl-9 pr-9 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm focus:outline-none focus:border-orange-500/50 transition-all duration-200 cursor-pointer text-white"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-[#0d1117] text-gray-400">
                          Select a service...
                        </option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-[#0d1117] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-[10px] text-gray-400 font-mono uppercase tracking-[0.16em] mb-1.5"
                    >
                      Additional Notes{" "}
                      <span className="text-gray-600 normal-case font-sans tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-3 top-3 w-4 h-4 text-gray-600 pointer-events-none"
                        aria-hidden="true"
                      />
                      <textarea
                        id="notes"
                        placeholder="Describe the issue, symptoms, or any extra info..."
                        value={form.notes}
                        onChange={(e) => handleChange("notes", e.target.value)}
                        rows={3}
                        className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/60 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Request Service"
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-600">
                    Or call us directly at{" "}
                    <a
                      href="tel:09952305453"
                      className="text-orange-400 hover:underline font-mono"
                    >
                      0995-230-5453
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
