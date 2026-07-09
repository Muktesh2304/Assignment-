import Navbar from "@/Components/navbar";
import GalleryBanner from "@/Components/galleryBanner";
import Gallery from "@/Components/gallery";


export const metadata = {
  title: "Photo Gallery & Ambience - Fine Dining",
  description: "Images of One8 Commune's premium dishes, custom cocktails, elegant interiors, and memorable events in Aerocity, New Delhi.",
};

export default function GalleryPage() {
  return (
    <>
      
      <Navbar />
      <GalleryBanner />
      <Gallery />
    </>
  );
}
