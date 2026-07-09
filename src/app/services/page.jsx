import Navbar from "@/Components/navbar";
import ServiceBanner from "@/Components/serviceBanner";
import ServicesOccasion from "@/Components/servicesOccasion";


export const metadata = {
  title: "Event Booking & Catering Services Delhi",
  description: "Explore services at One8 Commune: Party and celebrations, Banquet hall bookings, luxury fine dining, and professional outdoor catering services.",
};

export default function ServicesPage() {
  return (
    <>
      
      <Navbar />

      
      <ServiceBanner />

      
      <ServicesOccasion />

      

    </>
  );
}
