import Navbar from "@/Components/navbar";
import Reservation from "@/Components/reservation";

export const metadata = {
  title: "Book a Table | One8 Commune",
  description: "Secure your table at One8 Commune with real-time available tables and instant reservations.",
};

export default function BookingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white pt-10">
      <Navbar />
      <Reservation />
    </main>
  );
}
