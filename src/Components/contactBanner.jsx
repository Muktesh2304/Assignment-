import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">

      
      <Image
        src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
        alt="Contact One8 Commune"
        fill
        priority
        className="object-cover object-center"
      />

      
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="absolute left-1/2 top-10 h-1 w-20 -translate-x-1/2 rounded-full bg-amber-500" />

      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <h1 className="font-serif text-5xl text-white md:text-7xl">
          Contact Us
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
          We would love to hear from you —
          <span className="text-amber-400">get in touch</span>
        </p>

        
        <div className="mt-8 flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="font-medium text-white transition hover:text-amber-400"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-amber-400" />
          <span className="text-white/70">Contact</span>
        </div>

      </div>

      
      

    </section>
  );
}
