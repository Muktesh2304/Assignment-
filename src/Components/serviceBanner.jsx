import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceBanner() {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/33948377/pexels-photo-33948377.jpeg"
        alt="Elegant Restaurant Interior"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Decorative Top Line */}
      <div className="absolute left-1/2 top-10 h-1 w-20 -translate-x-1/2 rounded-full bg-amber-500" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <h1 className="font-serif text-5xl text-white md:text-7xl">
          Our Services
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
          A taste of perfection in every dish 
          <span className="text-amber-400">- fine dining</span>
        </p>

        {/* Breadcrumb */}
        <div className="mt-8 flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="font-medium text-white transition hover:text-amber-400"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-amber-400" />
          <span className="text-white/70">Services</span>
        </div>

      </div>

      {/* Bottom Mouse Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/60">
          <div className="mt-2 h-2 w-1 rounded-full bg-amber-400 animate-bounce" />
        </div>
      </div>

    </section>
  );
}
