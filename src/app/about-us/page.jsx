import Navbar from "@/Components/navbar";
import OurStoryBanner from "@/Components/aboutUsBanner";
import AboutUs from "@/Components/aboutUs";


export const metadata = {
  title: "Our Story & Vision - Premium Restaurant",
  description: "Discover the story behind One8 Commune — a premium restaurant in Aerocity, New Delhi.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <OurStoryBanner />
      <AboutUs />

    </main>
  );
}
