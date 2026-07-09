
import DeliciousSelections from "@/Components/deliciousSelections";
import Home from "@/Components/home";
import HomeMenu from "@/Components/homeMenu";
import Navbar from "@/Components/navbar";
import Aboutus from "@/Components/aboutUs";
import ServicesOccasion from "@/Components/servicesOccasion";
import Gallery from "@/Components/gallery";

export const metadata = {
  title: "One8 Commune | Premium Fine Dining Restaurant & Lounge",
  description: "Experience premium culinary artistry, handpicked drinks, and an elegant ambiance at One8 Commune in Aerocity, New Delhi. Perfect for family dinners and social celebrations.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <DeliciousSelections />
      <Aboutus />
      <HomeMenu />
      <ServicesOccasion />

      <Gallery />
    </>
  );
}
