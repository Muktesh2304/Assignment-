// ─── Tables ───────────────────────────────────────────────────────────────────
export const TABLES = [
  {
    id: "T01",
    name: "Table 01",
    capacity: 2,
    location: "Indoor",
    description: "Intimate window-side table perfect for couples with a city view.",
    features: ["Window View", "Romantic", "Candlelit"],
  },
  {
    id: "T02",
    name: "Table 02",
    capacity: 4,
    location: "Indoor",
    description: "Central dining room table, ideal for small families or groups of friends.",
    features: ["Central Location", "Family Friendly"],
  },
  {
    id: "T03",
    name: "Table 03",
    capacity: 6,
    location: "Indoor",
    description: "Spacious round table for groups and celebrations in a warm setting.",
    features: ["Round Table", "Group Friendly", "Celebration"],
  },
  {
    id: "T04",
    name: "Table 04",
    capacity: 2,
    location: "Outdoor",
    description: "Cozy outdoor patio table surrounded by ambient garden lighting.",
    features: ["Garden View", "Open Air", "Romantic"],
  },
  {
    id: "T05",
    name: "Table 05",
    capacity: 4,
    location: "Outdoor",
    description: "Alfresco dining experience with warm ambient lighting under the sky.",
    features: ["Open Air", "Ambient Lighting", "Scenic"],
  },
  {
    id: "T06",
    name: "Table 06",
    capacity: 8,
    location: "Private",
    description: "Exclusive private dining room for special events with butler service.",
    features: ["Private Room", "Butler Service", "Event Space"],
  },
  {
    id: "T07",
    name: "Table 07",
    capacity: 2,
    location: "Bar",
    description: "Premium bar-side seating with cocktail service and live music view.",
    features: ["Bar Side", "Cocktail Menu", "Live Music View"],
  },
  {
    id: "T08",
    name: "Table 08",
    capacity: 4,
    location: "Indoor",
    description: "Corner booth with plush seating and a degree of natural privacy.",
    features: ["Corner Booth", "Plush Seating", "Semi-Private"],
  },
];

// ─── Time Slots ───────────────────────────────────────────────────────────────
export const TIME_SLOTS = [
  "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",
  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",
  "7:00 PM",  "7:30 PM",
  "8:00 PM",  "8:30 PM",
  "9:00 PM",  "9:30 PM",
  "10:00 PM",
];

// ─── Pre-existing mock bookings (simulates already-booked slots from backend) ─
export const MOCK_BOOKINGS = [
  { tableId: "T01", date: "2026-07-12", time: "7:00 PM" },
  { tableId: "T01", date: "2026-07-12", time: "7:30 PM" },
  { tableId: "T02", date: "2026-07-12", time: "7:00 PM" },
  { tableId: "T03", date: "2026-07-12", time: "8:00 PM" },
  { tableId: "T04", date: "2026-07-12", time: "8:00 PM" },
  { tableId: "T05", date: "2026-07-12", time: "8:00 PM" },
  { tableId: "T06", date: "2026-07-15", time: "7:00 PM" },
  { tableId: "T06", date: "2026-07-15", time: "8:00 PM" },
  { tableId: "T02", date: "2026-07-10", time: "1:00 PM" },
  { tableId: "T04", date: "2026-07-11", time: "7:30 PM" },
  { tableId: "T07", date: "2026-07-09", time: "9:00 PM" },
  { tableId: "T05", date: "2026-07-13", time: "8:30 PM" },
];

// ─── Initial reservation history (seeds localStorage on first visit) ──────────
export const INITIAL_RESERVATIONS = [];
