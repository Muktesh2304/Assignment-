import Navbar from "@/Components/navbar";
import OurStoryBanner from "@/Components/aboutUsBanner";
import AboutUs from "@/Components/aboutUs";


export const metadata = {
  title: "About Us | One8 Commune",
  description: "Learn about One8 Commune — our story, our passion, and our team.",
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
