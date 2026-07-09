import Navbar from "@/Components/navbar";
import Reservation from "@/Components/reservation";

export const metadata = {
  title: "Reserve a Table Online - Fine Dining",
  description: "Reserve your table at One8 Commune, Aerocity, New Delhi. Choose your date, time and party size for a premium fine dining experience with instant booking confirmation.",
};

export default function BookingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white pt-10">
      <Navbar />
      <Reservation />
    </main>
  );
}
