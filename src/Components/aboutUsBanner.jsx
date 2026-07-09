import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurStoryBanner() {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">

      
      <Image
        src="https://images.pexels.com/photos/5773962/pexels-photo-5773962.jpeg"
        alt="One8 Commune"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/55" />

      
      <div className="absolute left-1/2 top-10 h-1 w-20 -translate-x-1/2 rounded-full bg-amber-500" />

      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <h1 className="font-serif text-5xl text-white md:text-7xl">
          Our Story
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
          Experience exceptional cuisine, handcrafted cocktails, and unforgettable moments at
          <span className="text-amber-400"> One8 Commune.</span>
        </p>

        
        <div className="mt-10 flex items-center gap-2 text-sm">

          <Link
            href="/"
            className="font-medium text-white transition hover:text-amber-400"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-amber-400"
          />

          <span className="text-white/70">
            Our Story
          </span>

        </div>

      </div>

      

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <div className="flex h-10 w-6 justify-center rounded-full border border-white/60">

          <div className="mt-2 h-2 w-1 rounded-full bg-amber-400 animate-bounce" />

        </div>

      </div>

    </section>
  );
}