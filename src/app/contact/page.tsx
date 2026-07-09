import Navbar from "@/Components/navbar";
import ContactBanner from "@/Components/contactBanner";
import Contact from "@/Components/contact";


export const metadata = {
  title: "Get in Touch & Locations - Premium Dining",
  description: "Get in touch with One8 Commune Aerocity, New Delhi. Book private events, parties, banquet halls, or ask questions about our fine dining experience.",
};

export default function ContactPage() {
  return (
    <>
      
      <Navbar />

      
      <ContactBanner />

      
      <Contact />


    </>
  );
}
