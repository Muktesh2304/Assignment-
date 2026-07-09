import Navbar from "@/Components/navbar";

import Footer from "@/Components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Meet Our Master Chefs & Culinary Team",
  description: "Meet the master culinary team at One8 Commune. Led by Head Chef Lorenzo Oliver, our chefs craft unforgettable dining experiences with flawlessness and artistry.",
};

export default function OurChefPage() {
  return (
    <main className="min-h-screen text-white pt-24 overflow-hidden">
      <Navbar />
      
      
      <section className="relative h-[50vh] min-h-[380px] flex flex-col items-center justify-center text-center px-4 mt-[-6rem]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg"
            alt="Chef in professional kitchen"
            fill
            className="object-cover object-[center_20%] brightness-[0.45]"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Chefs</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          A taste of perfection in every dish - <span className="text-[#eab65b]">fine dining</span>
        </p>
        <div className="text-sm tracking-widest text-gray-300">
          <Link href="/" className="hover:text-[#eab65b] transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#eab65b]">Our Chefs</span>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <div className="text-[#eab65b] text-sm font-bold tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="text-xs">✦</span> MEET THE CHEF <span className="text-xs">✦</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto">
            Master Chef Creations Designed to Elevate Your Dining Experience with Flawless Flavor and Artistry
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 relative max-w-6xl mx-auto">
          
          
          <div className="flex flex-col h-full">
            <div className="mb-12">
              <h3 className="text-lg font-bold tracking-[0.2em] mb-2 uppercase">HEAD CHEF</h3>
              <h4 className="text-3xl md:text-4xl font-serif text-[#eab65b] mb-6 uppercase">LORENZO OLIVER</h4>
              <p className="text-gray-300 text-sm leading-8 mb-10 max-w-[450px]">
                Chef Lorenzo brings a lifetime of passion and a global perspective to our kitchen. 
                Trained in the finest culinary institutes in Europe and having led Michelin-starred 
                restaurants, his approach marries classical techniques with modern innovation. Every 
                dish he crafts is a testament to his dedication to quality and artistic presentation.
              </p>
              <Link 
                href="#our-team" 
                className="inline-block border-2 border-white/30 bg-white/5 px-8 py-3 text-xs font-bold tracking-[0.2em] text-white backdrop-blur transition-all duration-300 hover:border-[#eab65b] hover:bg-[#eab65b]/10 hover:text-[#eab65b] hover:shadow-md hover:shadow-amber-500/20"
              >
                MEET OUR TEAM
              </Link>
            </div>
            
            <div className="relative w-full max-w-[450px] h-[280px]">
              <Image
                src="https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg"
                alt="Chefs in industrial kitchen"
                fill
                className="object-cover rounded-tl-[80px] rounded-br-[80px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[3/4]">
              
              <div className="absolute inset-0 border border-[#eab65b] rounded-t-[300px] translate-x-6 translate-y-6 -z-10"></div>
              
              <Image
                src="https://images.pexels.com/photos/32224391/pexels-photo-32224391.jpeg"
                alt="Head Chef Lorenzo Oliver"
                fill
                className="object-cover rounded-t-[300px] transition-transform duration-500 hover:scale-105"
              />
              
             
            </div>
          </div>
        </div>
      </section>

      
      <section id="our-team" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-[#eab65b] text-sm font-bold tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="text-xs">✦</span> OUR TEAM <span className="text-xs">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          
          
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] mb-8 overflow-hidden rounded-t-full">
              <Image
                src="https://images.pexels.com/photos/18679482/pexels-photo-18679482.jpeg"
                alt="James Anderson"
                fill
                className="object-cover rounded-t-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-1 uppercase">James Anderson</h3>
            <h4 className="text-sm font-bold tracking-widest text-[#eab65b] mb-4 uppercase">Sous Chef</h4>
            <p className="text-gray-400 text-sm leading-relaxed px-4">
              A master of flavor balancing, James ensures that every dish leaving the line is a harmonious masterpiece. His precision is unmatched in the kitchen.
            </p>
          </div>

          
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] mb-8 overflow-hidden rounded-t-full">
              <Image
                src="https://images.pexels.com/photos/36430025/pexels-photo-36430025.jpeg"
                alt="Smith Miller"
                fill
                className="object-cover rounded-t-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-1 uppercase">Smith Miller</h3>
            <h4 className="text-sm font-bold tracking-widest text-[#eab65b] mb-4 uppercase">Station Chef</h4>
            <p className="text-gray-400 text-sm leading-relaxed px-4">
              Smith thrives in the heat of the kitchen, managing the grill station with extraordinary timing and a deep understanding of searing techniques.
            </p>
          </div>

          
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] mb-8 overflow-hidden rounded-t-full">
              <Image
                src="https://images.pexels.com/photos/24252237/pexels-photo-24252237.jpeg"
                alt="Wilson Moore"
                fill
                className="object-cover rounded-t-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold tracking-wider mb-1 uppercase">Wilson Moore</h3>
            <h4 className="text-sm font-bold tracking-widest text-[#eab65b] mb-4 uppercase">Station Chef</h4>
            <p className="text-gray-400 text-sm leading-relaxed px-4">
              Specializing in sauces and purees, Wilson elevates classic ingredients into magical accompaniments that transform the overall dining experience.
            </p>
          </div>

        </div>
      </section>


      
    </main>
  );
}
