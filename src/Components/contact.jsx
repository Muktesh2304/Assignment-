"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaRegMoon,
  FaPhone,
  FaRegEnvelope,
  FaCheck,
} from "react-icons/fa";

const INFO = [
  {
    icon: <FaMapMarkerAlt size={18} className="text-amber-400" />,
    label: "Address",
    lines: ["One8 Commune, Aerocity,", "New Delhi – 110037, India"],
  },
  {
    icon: <FaRegClock size={18} className="text-amber-400" />,
    label: "Lunch Time",
    lines: ["12:00 PM – 3:30 PM"],
  },
  {
    icon: <FaRegMoon size={18} className="text-amber-400" />,
    label: "Dinner Time",
    lines: ["7:00 PM – 1:00 AM"],
  },
  {
    icon: <FaPhone size={18} className="text-amber-400" />,
    label: "Call Us",
    lines: ["+91 98765 43210"],
  },
  {
    icon: <FaRegEnvelope size={18} className="text-amber-400" />,
    label: "Email",
    lines: ["booking@one8commune.com"],
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Simulate send
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-transparent px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Image + Info ── */}
          <div>
            {/* Arched restaurant image */}
            <div className="relative mx-auto mb-10 w-full max-w-[360px] overflow-hidden rounded-t-[999px] border border-amber-500/60 shadow-2xl shadow-amber-900/20">
              <Image
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
                alt="One8 Commune Interior"
                width={720}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Visit Us */}
            <div className="text-center">
              <p className="mb-8 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-amber-400">
                <span>✦</span> Visit Us <span>✦</span>
              </p>

              <div className="mx-auto flex max-w-[320px] flex-col gap-6 text-left">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#eab65b] bg-[#eab65b]/5 text-[#eab65b] shadow-md shadow-black/40">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#eab65b]">
                        {item.label}
                      </h3>
                      {item.lines.map((line) => (
                        <p key={line} className="mt-0.5 text-sm text-gray-300">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-amber-400">
              <span>✦</span> Write To Us <span>✦</span>
            </p>
            <h2 className="mb-3 font-serif text-4xl sm:text-5xl">Message Us</h2>
            <p className="mb-10 text-sm text-white/50">
              Contact us – we aim to reply within 24 hours and are happy to help!
            </p>

            {sent ? (
              <div className="border border-amber-500/30 bg-amber-500/5 p-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-500 text-2xl text-amber-400">
                  <FaCheck />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-amber-400">Message Sent!</h3>
                <p className="mb-6 text-sm text-white/50">
                  Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="border border-amber-500 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 transition-all hover:bg-amber-500 hover:text-black"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-500"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <textarea
                    rows={5}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-500"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full border-2 border-[#eab65b] bg-transparent py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#eab65b] transition-all duration-300 hover:bg-[#eab65b] hover:text-black hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}

            {/* Quick contact row */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <FaPhone size={14} className="text-amber-400" />
                <a href="tel:+919876543210" className="transition hover:text-amber-400">
                  +91 98765 43210
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaRegEnvelope size={14} className="text-amber-400" />
                <a href="mailto:booking@one8commune.com" className="transition hover:text-amber-400">
                  booking@one8commune.com
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
