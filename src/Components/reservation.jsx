"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { TABLES, TIME_SLOTS, MOCK_BOOKINGS, INITIAL_RESERVATIONS } from "@/data/mockData";

const STORAGE_KEY = "one8_reservations_v2";

function genId() {
  return "RES-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function StepIndicator({ current }) {
  const steps = ["Date & Guests", "Time Slot", "Choose Table", "Your Details"];
  return (
    <div className="mb-10 flex items-center justify-center px-2">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all
                  ${done ? "border-amber-500 bg-amber-500 text-black" : active ? "border-amber-500 bg-transparent text-amber-400" : "border-white/20 bg-transparent text-white/25"}`}
              >
                {done ? "✓" : idx}
              </div>
              <span
                className={`mt-1.5 hidden text-[10px] font-semibold uppercase tracking-wider sm:block
                  ${active ? "text-amber-400" : done ? "text-amber-500/60" : "text-white/25"}`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 mb-4 h-px w-8 sm:w-14 md:w-20 transition-all ${done ? "bg-amber-500" : "bg-white/10"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function locationBadge(loc) {
  switch (loc) {
    case "Indoor":  return "bg-blue-500/15 text-blue-300 border-blue-500/30";
    case "Outdoor": return "bg-green-500/15 text-green-300 border-green-500/30";
    case "Private": return "bg-purple-500/15 text-purple-300 border-purple-500/30";
    case "Bar":     return "bg-rose-500/15 text-rose-300 border-rose-500/30";
    default:        return "bg-white/10 text-white/50 border-white/20";
  }
}

export default function Reservation() {
  const [activeTab, setActiveTab] = useState("book");
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTableId, setSelectedTableId] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", specialRequests: "" });
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const [reservations, setReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cancelTarget, setCancelTarget] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReservations(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setReservations([]);
    }
    setHydrated(true);
  }, []);

  const saveReservations = useCallback((updated) => {
    setReservations(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, []);

  const getAllBooked = () => {
    const userBooked = reservations
      .filter((r) => r.status === "confirmed")
      .map((r) => ({ tableId: r.tableId, date: r.date, time: r.time }));
    return [...MOCK_BOOKINGS, ...userBooked];
  };

  const isTimeAvailable = (time) => {
    const allBooked = getAllBooked();
    return TABLES.filter((t) => t.capacity >= selectedGuests).some(
      (t) => !allBooked.some((b) => b.tableId === t.id && b.date === selectedDate && b.time === time)
    );
  };

  const isTableAvailable = (tableId) => {
    const allBooked = getAllBooked();
    return !allBooked.some(
      (b) => b.tableId === tableId && b.date === selectedDate && b.time === selectedTime
    );
  };

  const handleConfirm = () => {
    if (!form.name || !form.email || !form.phone) return;
    const table = TABLES.find((t) => t.id === selectedTableId);
    if (!table) return;
    const newRes = {
      id: genId(),
      ...form,
      date: selectedDate,
      time: selectedTime,
      tableId: selectedTableId,
      tableName: table.name,
      location: table.location,
      guests: selectedGuests,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    saveReservations([newRes, ...reservations]);
    setBookingSuccess(newRes);
  };

  const handleCancel = (id) => {
    saveReservations(
      reservations.map((r) => (r.id === id ? { ...r, status: "cancelled" } : r))
    );
    setCancelTarget(null);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate("");
    setSelectedGuests(2);
    setSelectedTime("");
    setSelectedTableId("");
    setForm({ name: "", email: "", phone: "", specialRequests: "" });
    setBookingSuccess(null);
  };

  const filtered = reservations.filter((r) => {
    const q = searchQuery.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q) ||
      r.phone.includes(q) ||
      r.id.toLowerCase().includes(q)
    );
  });

  const selectedTable = TABLES.find((t) => t.id === selectedTableId);

  return (
    <section
      className="relative bg-black px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/27626762/pexels-photo-27626762.png?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        <div className="text-center mb-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#eab65b]">
            <span className="mx-3">&#10022;</span>
            Reservation
            <span className="mx-3">&#10022;</span>
          </p>
          <h2 className="[font-family:Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Book a Table
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-md mx-auto">
            Experience premium fine dining with real-time table availability, simple scheduling, and instant confirmation.
          </p>
        </div>

        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["book", "history"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                if (tab === "book") resetBooking();
              }}
              className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all
                ${activeTab === tab
                  ? "bg-[#eab65b] text-black"
                  : "border border-white/20 text-white/60 hover:border-amber-500/50 hover:text-white"}`}
            >
              {tab === "book" ? "📅  Book a Table" : "📋  My Reservations"}
            </button>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-sm border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur sm:p-10 lg:p-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(0,0,0,0.92), rgba(0,0,0,0.8)), url('/background_menu%20.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/logo.png"
            alt=""
            width={900}
            height={380}
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 w-[500px] max-w-none -translate-y-1/2 opacity-[0.03]"
          />

          
          {activeTab === "book" && (
            <div className="relative z-10">
              {bookingSuccess ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-500 text-2xl text-amber-400">
                    ✓
                  </div>
                  <h3 className="mb-2 font-serif text-2xl text-[#eab65b]">Reservation Confirmed!</h3>
                  <p className="mb-8 text-sm text-white/50">Your table is locked in at One8 Commune.</p>

                  <div className="mx-auto mb-8 max-w-md border border-amber-500/20 bg-amber-500/5 p-5 text-left">
                    <div className="mb-1 text-[9px] uppercase tracking-widest text-amber-400">Booking ID</div>
                    <div className="mb-4 font-mono text-base font-bold tracking-wider">{bookingSuccess.id}</div>
                    <div className="grid grid-cols-2 gap-y-3.5 gap-x-3 text-xs">
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Name</span>{bookingSuccess.name}</div>
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Guests</span>{bookingSuccess.guests} person(s)</div>
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Date</span>{formatDate(bookingSuccess.date)}</div>
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Time</span>{bookingSuccess.time}</div>
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Table</span>{bookingSuccess.tableName}</div>
                      <div><span className="mb-0.5 block text-[9px] text-white/40">Location</span>{bookingSuccess.location}</div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      onClick={resetBooking}
                      type="button"
                      className="border border-[#eab65b] bg-[#eab65b] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-white hover:border-white"
                    >
                      Book Another Table
                    </button>
                    <button
                      onClick={() => { setActiveTab("history"); resetBooking(); }}
                      type="button"
                      className="border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-all hover:border-amber-500/60 hover:text-amber-400"
                    >
                      View Reservations
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <StepIndicator current={step} />

                  
                  {step === 1 && (
                    <div className="mx-auto max-w-md">
                      <div className="mb-6">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                          Reservation Date
                        </label>
                        <input
                          type="date"
                          min={todayStr()}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#eab65b] [color-scheme:dark]"
                        />
                      </div>

                      <div className="mb-8">
                        <label className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                          Number of Guests
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => setSelectedGuests(n)}
                              className={`py-2.5 text-xs font-bold border transition-all
                                ${selectedGuests === n
                                  ? "border-[#eab65b] bg-[#eab65b] text-black"
                                  : "border-white/20 text-white/60 hover:border-amber-500/50 hover:text-white"}`}
                            >
                              {n}{n === 8 ? "+" : ""}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!selectedDate}
                        onClick={() => setStep(2)}
                        className="w-full bg-[#eab65b] py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Select Time Slot →
                      </button>
                    </div>
                  )}

                  
                  {step === 2 && (
                    <div>
                      <p className="mb-5 text-center text-xs text-white/50">
                        Selected: <span className="text-[#eab65b] font-bold">{formatDate(selectedDate)}</span> for <span className="text-[#eab65b] font-bold">{selectedGuests} guest(s)</span>
                      </p>

                      <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                        {TIME_SLOTS.map((slot) => {
                          const avail = isTimeAvailable(slot);
                          return (
                            <button
                              key={slot}
                              type="button"
                              disabled={!avail}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2.5 text-xs font-medium border transition-all
                                ${!avail
                                  ? "cursor-not-allowed border-white/10 bg-white/5 text-white/20 line-through"
                                  : selectedTime === slot
                                    ? "border-[#eab65b] bg-[#eab65b] font-bold text-black"
                                    : "border-white/20 text-white/70 hover:border-amber-500/50"}`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mb-8 flex flex-wrap justify-center gap-5 text-[10px] text-white/40">
                        <span className="flex items-center gap-1.5">
                          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#eab65b]" />Selected
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="inline-block h-2.5 w-2.5 rounded-sm border border-white/20 bg-white/5" />Available
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="inline-block h-2.5 w-2.5 rounded-sm border border-white/10 bg-white/5 opacity-50" />Unavailable
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => { setStep(1); setSelectedTime(""); }}
                          className="flex-1 border border-white/20 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-all hover:border-white/40"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          disabled={!selectedTime}
                          onClick={() => setStep(3)}
                          className="flex-1 bg-[#eab65b] py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          Choose Table →
                        </button>
                      </div>
                    </div>
                  )}

                  
                  {step === 3 && (
                    <div>
                      <p className="mb-5 text-center text-xs text-white/50">
                        Selected: <span className="text-[#eab65b] font-bold">{formatDate(selectedDate)}</span> at <span className="text-[#eab65b] font-bold">{selectedTime}</span>
                      </p>

                      {TABLES.filter((t) => t.capacity >= selectedGuests && isTableAvailable(t.id)).length === 0 ? (
                        <div className="py-10 text-center">
                          <div className="mb-3 text-4xl">😔</div>
                          <p className="mb-5 text-xs text-white/50">No tables available for this configuration.</p>
                          <button
                            type="button"
                            onClick={() => { setStep(2); setSelectedTableId(""); }}
                            className="border border-[#eab65b] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#eab65b] transition-all hover:bg-[#eab65b] hover:text-black"
                          >
                            ← Try Different Time
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {TABLES.map((table) => {
                              const avail = table.capacity >= selectedGuests && isTableAvailable(table.id);
                              const isSelected = selectedTableId === table.id;
                              return (
                                <button
                                  key={table.id}
                                  type="button"
                                  disabled={!avail}
                                  onClick={() => avail && setSelectedTableId(table.id)}
                                  className={`rounded-sm border p-4 text-left transition-all
                                    ${!avail
                                      ? "cursor-not-allowed border-white/10 opacity-35"
                                      : isSelected
                                        ? "border-[#eab65b] bg-[#eab65b]/10 shadow-lg shadow-amber-500/10"
                                        : "border-white/15 bg-white/5 hover:border-amber-500/40"}`}
                                >
                                  <div className="mb-2 flex items-start justify-between">
                                    <div>
                                      <div className="font-bold text-sm">{table.name}</div>
                                      <div className="mt-0.5 text-[10px] text-white/40">Seats up to {table.capacity}</div>
                                    </div>
                                    <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${locationBadge(table.location)}`}>
                                      {table.location}
                                    </span>
                                  </div>
                                  <p className="mb-3 text-[11px] leading-relaxed text-white/50">{table.description}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {table.features.slice(0, 2).map((f) => (
                                      <span key={f} className="border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/40">
                                        {f}
                                      </span>
                                    ))}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => { setStep(2); setSelectedTableId(""); }}
                              className="flex-1 border border-white/20 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-all hover:border-white/40"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              disabled={!selectedTableId}
                              onClick={() => setStep(4)}
                              className="flex-1 bg-[#eab65b] py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              Details Book →
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  
                  {step === 4 && (
                    <div className="mx-auto max-w-xl">
                      <div className="mb-5 border border-amber-500/20 bg-amber-500/5 p-4 text-xs">
                        <div className="mb-2 text-[9px] uppercase tracking-widest text-[#eab65b] font-bold">Booking Details</div>
                        <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                          <div><span className="text-white/40 block">Date</span>{formatDate(selectedDate)}</div>
                          <div><span className="text-white/40 block">Time</span>{selectedTime}</div>
                          <div><span className="text-white/40 block">Table</span>{selectedTable?.name}</div>
                          <div><span className="text-white/40 block">Location</span>{selectedTable?.location}</div>
                        </div>
                      </div>

                      <div className="mb-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-[#eab65b]"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Email Address"
                            className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-[#eab65b]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Phone Number"
                            className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-[#eab65b]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                            Special Requests
                          </label>
                          <textarea
                            rows={3}
                            value={form.specialRequests}
                            onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                            placeholder="Dietary requests, special events..."
                            className="w-full resize-none border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-[#eab65b]"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 border border-white/20 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-all hover:border-white/40"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          disabled={!form.name || !form.email || !form.phone}
                          onClick={handleConfirm}
                          className="flex-1 bg-[#eab65b] py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          Confirm ✓
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          
          {activeTab === "history" && (
            <div className="relative z-10 text-left">
              
              <div className="relative mb-6">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-xs">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, phone or reservation code..."
                  className="w-full border border-white/20 bg-white/5 py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-[#eab65b]"
                />
              </div>

              
              {hydrated && (
                <div className="mb-6 grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { label: "Total", count: reservations.length, color: "text-white" },
                    { label: "Confirmed", count: reservations.filter((r) => r.status === "confirmed").length, color: "text-green-400" },
                    { label: "Cancelled", count: reservations.filter((r) => r.status === "cancelled").length, color: "text-red-400" },
                  ].map((s) => (
                    <div key={s.label} className="border border-white/10 bg-white/5 py-2">
                      <div className={`text-base font-bold ${s.color}`}>{s.count}</div>
                      <div className="text-[8px] uppercase tracking-widest text-white/40">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              
              {!hydrated ? (
                <div className="py-10 text-center text-xs text-white/30">Loading...</div>
              ) : filtered.length === 0 ? (
                <div className="py-10 text-center text-xs text-white/40">
                  {searchQuery ? "No matching reservations found." : "No reservation history available."}
                </div>
              ) : (
                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {filtered.map((res) => (
                    <div
                      key={res.id}
                      className={`border p-4 transition-all text-xs
                        ${res.status === "cancelled" ? "border-white/5 bg-white/2 opacity-50" : "border-white/10 bg-white/5"}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-1.5">
                            <span className="border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-400">
                              {res.id}
                            </span>
                            <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border
                              ${res.status === "confirmed" ? "border-green-500/20 bg-green-500/10 text-green-400" : "border-red-500/20 bg-red-500/10 text-red-400"}`}>
                              {res.status}
                            </span>
                            <span className={`rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${locationBadge(res.location)}`}>
                              {res.location}
                            </span>
                          </div>
                          <div className="font-bold">{res.name}</div>
                          <div className="text-[10px] text-white/40 mb-3">{res.email} &nbsp;·&nbsp; {res.phone}</div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-4">
                            <div><span className="block text-[9px] text-white/30">Date</span>{formatDate(res.date)}</div>
                            <div><span className="block text-[9px] text-white/30">Time</span>{res.time}</div>
                            <div><span className="block text-[9px] text-white/30">Table</span>{res.tableName}</div>
                            <div><span className="block text-[9px] text-white/30">Guests</span>{res.guests} guest(s)</div>
                          </div>
                        </div>

                        {res.status === "confirmed" && (
                          <div className="text-right ml-auto">
                            {cancelTarget === res.id ? (
                              <div>
                                <p className="text-[10px] text-white/40 mb-1.5">Confirm Cancel?</p>
                                <div className="flex gap-1.5 justify-end">
                                  <button
                                    onClick={() => setCancelTarget(null)}
                                    type="button"
                                    className="border border-white/20 px-2 py-1 text-[10px] text-white/50 transition-all hover:border-white/40"
                                  >
                                    No
                                  </button>
                                  <button
                                    onClick={() => handleCancel(res.id)}
                                    type="button"
                                    className="bg-red-500/80 px-2 py-1 text-[10px] text-white transition-all hover:bg-red-500"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                onClick={() => setCancelTarget(res.id)}
                                type="button"
                                className="border border-red-500/20 px-3 py-1.5 text-[10px] text-red-400 transition-all hover:bg-red-500/10"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        
        <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
          <div className="border border-white/10 bg-white/5 px-5 py-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab65b]">Call Us</p>
            <p className="mt-2 text-sm text-white/70">+91 98765 43210</p>
          </div>
          <div className="border border-white/10 bg-white/5 px-5 py-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab65b]">Opening Hours</p>
            <p className="mt-2 text-sm text-white/70">Daily : 12:00 PM - 1:00 AM</p>
          </div>
          <div className="border border-white/10 bg-white/5 px-5 py-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab65b]">Location</p>
            <p className="mt-2 text-sm text-white/70">Aerocity, New Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
