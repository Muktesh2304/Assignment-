"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  "https://images.pexels.com/photos/2104568/pexels-photo-2104568.jpeg",
  "https://images.pexels.com/photos/2290737/pexels-photo-2290737.jpeg",
  "https://images.pexels.com/photos/29000037/pexels-photo-29000037.jpeg",
  "https://images.pexels.com/photos/31138742/pexels-photo-31138742.jpeg",
  "https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
  "https://images.pexels.com/photos/36422979/pexels-photo-36422979.jpeg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  
  const getIndex = (offset) => {
    let index = (currentIndex + offset) % galleryImages.length;
    if (index < 0) {
      index += galleryImages.length;
    }
    return index;
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-24 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <div className="mb-20 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400">
            <span>✦</span>
            Our Memories
            <span>✦</span>
          </p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Photo Gallery
          </h2>
        </div>

        
        <div className="relative flex items-center justify-center pb-12">
          
          <button 
            onClick={prevSlide}
            className="absolute -left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-black/50 text-amber-400 backdrop-blur transition hover:bg-amber-500 hover:text-black md:-left-6"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          <div className="grid w-full gap-4 md:grid-cols-4 md:gap-6">
            
            <div className="relative hidden h-[300px] overflow-hidden rounded-2xl md:col-span-1 md:block md:h-[500px]">
              <Image
                src={galleryImages[getIndex(-1)]}
                alt="Gallery Image Left"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>

            
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:col-span-2 md:translate-y-12 md:h-[500px]">
              <Image
                src={galleryImages[getIndex(0)]}
                alt="Gallery Image Center"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>

            
            <div className="relative hidden h-[300px] overflow-hidden rounded-2xl md:col-span-1 md:block md:h-[500px]">
              <Image
                src={galleryImages[getIndex(1)]}
                alt="Gallery Image Right"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-black/50 text-amber-400 backdrop-blur transition hover:bg-amber-500 hover:text-black md:-right-6"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}