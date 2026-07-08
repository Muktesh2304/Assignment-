"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "PAGES",
    hasMenu: true,
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Chefs", href: "/our-chef" },
      { label: "Gallery", href: "/gallery" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    label: "MENU",
    href: "/menu/starter",
    hasMenu: true,
    items: [
      { label: "Starter", href: "/menu/starter" },
      { label: "Main Dishes", href: "/menu/main-dishes" },
      { label: "Desserts", href: "/menu/desserts" },
      { label: "Drinks", href: "/menu/drinks" },
    ],
  },
  // {
  //   label: "ORDER",
  //   hasMenu: true,
  //   items: [
  //     "Reservation (Booking Calendar)",
  //     "Reservation (MetForm)",
  //     "Reservation (OpenTable)",
  //     "Reservation Popup",
  //   ],
  // },
  // { label: "BLOG" },
  { label: "CONTACT", href: "/contact" },
  // { label: "SHOP", hasMenu: true, items: ["Shop", "Cart", "Checkout"] },
];

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 text-white shadow-2xl backdrop-blur-md">
      <nav className="flex min-h-16 items-center justify-between px-5 py-2 sm:px-8 lg:min-h-[70px] lg:px-10 xl:px-16">
        <a href="#" className="shrink-0" aria-label="Tastyc home">
          <Image
            src="/One-8-commune-logo-transparent.png"
            alt="One8 Commune"
            width={240}
            height={100}
            priority
            className="h-auto w-32 sm:w-30 lg:w-35"
          />
        </a>

        <div className="hidden items-stretch gap-4 self-stretch lg:flex xl:gap-7">
          {navItems.map((item) => (
            <div key={item.label} className="group relative flex items-center">
              <a
                href={item.href ?? "#"}
                className="relative flex h-full items-center gap-1.5 whitespace-nowrap px-1 text-xs font-normal tracking-[0.1em] text-white transition-colors hover:text-[#edb85c] xl:text-sm"
              >
                {item.label}
                {item.hasMenu ? <Chevron /> : null}
                <span className="absolute bottom-[-11px] left-0 h-1 w-0 bg-[#edb85c] transition-all duration-300 group-hover:w-full" />
              </a>

              {item.items ? (
                <div className="invisible absolute left-0 top-full mt-3 min-w-56 translate-y-3 rounded-xl border border-white/10 bg-black/95 p-1.5 text-white opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.items.map((dropdownItem) => (
                    <a
                      href={
                        typeof dropdownItem === "string"
                          ? "#"
                          : dropdownItem.href
                      }
                      key={
                        typeof dropdownItem === "string"
                          ? dropdownItem
                          : dropdownItem.label
                      }
                      className="group/item flex items-center justify-between rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-[#eab65b]"
                    >
                      <span>
                        {typeof dropdownItem === "string"
                          ? dropdownItem
                          : dropdownItem.label}
                      </span>
                      <span className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100 text-[#eab65b]">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="/booking"
            className="bg-[#eab65b] px-7 py-4 text-xs font-bold tracking-[0.18em] text-black transition-colors hover:bg-white xl:px-9"
          >
            RESERVATION
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-7 bg-current" />
            <span className="block h-0.5 w-7 bg-current" />
            <span className="block h-0.5 w-7 bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/85 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <details key={item.label} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold tracking-[0.16em]">
                  <span>{item.label}</span>
                  {item.hasMenu ? <Chevron /> : null}
                </summary>
                {item.items ? (
                  <div className="mt-1 ml-2 flex flex-col gap-1 border-l border-[#eab65b]/40 pl-4 py-1">
                    {item.items.map((dropdownItem) => (
                      <a
                        href={
                          typeof dropdownItem === "string"
                            ? "#"
                            : dropdownItem.href
                        }
                        key={
                          typeof dropdownItem === "string"
                            ? dropdownItem
                            : dropdownItem.label
                        }
                        className="block py-2 text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-[#eab65b]"
                      >
                        {typeof dropdownItem === "string"
                          ? dropdownItem
                          : dropdownItem.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </details>
            ))}
          </div>

          <a
            href="/booking"
            className="mt-4 block bg-[#eab65b] px-6 py-4 text-center text-sm font-bold tracking-[0.22em] text-black"
          >
            RESERVATION
          </a>
        </div>
      ) : null}
    </header>
  );
}
