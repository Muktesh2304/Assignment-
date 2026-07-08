
import DeliciousSelections from "@/Components/deliciousSelections";
import Home from "@/Components/home";
import HomeMenu from "@/Components/homeMenu";
import Navbar from "@/Components/navbar";
import Aboutus from "@/Components/aboutUs";
import ServicesOccasion from "@/Components/servicesOccasion";
import Gallery from "@/Components/gallery";

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
