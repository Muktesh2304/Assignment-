
"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background */}
      <Image
        src="https://images.pexels.com/photos/27626762/pexels-photo-27626762.png?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Watermark */}
      <Image
        src="/One-8-commune-logo-transparent.png"
        alt=""
        width={1200}
        height={500}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">

        <div className="grid items-center gap-6 lg:grid-cols-[190px_1fr_190px]">

          {/* Left Image */}
          <div className="mx-auto hidden lg:block">
            <div className="relative h-[270px] w-[190px] overflow-hidden rounded-t-[999px] border border-amber-500">
              <Image
                src="https://images.pexels.com/photos/30479386/pexels-photo-30479386.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Center */}
          <div className="text-center">

            <Image
              src="/One-8-commune-logo-transparent.png"
              alt="One8 Commune"
              width={280}
              height={80}
              className="mx-auto mb-4"
            />

            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-amber-500"></span>
              <span className="text-xs uppercase tracking-[0.4em] text-amber-400">
                Visit Us
              </span>
              <span className="h-px w-10 bg-amber-500"></span>
            </div>

            <div className="space-y-2 text-sm text-white/80">
              <p>One8 Commune, Aerocity, New Delhi</p>
              <p className="text-amber-400">Daily : 12:00 PM - 1:00 AM</p>
              <p>booking@one8commune.com</p>
              <p>Reservation : +91 98765 43210</p>
            </div>

            <div className="mx-auto my-8 h-12 w-px bg-amber-500"></div>

            <h3 className="text-4xl font-serif">Our Newsletter</h3>

            <p className="mt-2 text-sm text-white/60">
              Subscribe & receive exclusive offers.
            </p>

            <div className="mx-auto mt-6 flex max-w-lg">
              <input
                type="email"
                placeholder="Your Email"
                className="h-12 flex-1 border border-white/20 bg-black/40 px-4 outline-none"
              />

              <button className="bg-amber-500 px-4 sm:px-8 text-sm font-semibold uppercase text-black transition hover:bg-amber-400 whitespace-nowrap">
                Subscribe
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="mx-auto hidden lg:block">
            <div className="relative h-[270px] w-[190px] overflow-hidden rounded-t-[999px] border border-amber-500">
              <Image
                src="https://images.pexels.com/photos/38381641/pexels-photo-38381641.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

        </div>

        <div className="my-8 h-px bg-white/15"></div>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} One8 Commune. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {[FaFacebookF,FaInstagram,FaTiktok,FaYoutube,FaXTwitter].map((Icon,index)=>(
              <a
                key={index}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:border-amber-500 hover:text-amber-500"
              >
                <Icon size={16}/>
              </a>
            ))}
          </div>

          <p className="text-sm text-white/60">
            Developed by <span className="text-amber-400">Muktesh</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
