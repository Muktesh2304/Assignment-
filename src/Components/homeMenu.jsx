"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menuNavItems, menuPages } from "@/data/menuData";

export default function HomeMenu() {
  const [activeMenu, setActiveMenu] = useState("starter");
  const menu = menuPages[activeMenu];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-16 pt-20 text-white sm:px-8 lg:px-16">

      <section className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#eab65b]">
            <span className="mx-3">&#10022;</span>
            Special Fine Dine
            <span className="mx-3">&#10022;</span>
          </p>
          <h1 className="[font-family:Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Delicious Menu
          </h1>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 text-xs font-bold uppercase tracking-[0.22em] sm:gap-7">
          {menuNavItems.map((item, index) => (
            <div key={item.key} className="flex items-center gap-5 sm:gap-7">
              <button
                type="button"
                onClick={() => setActiveMenu(item.key)}
                className={`border-b pb-2 uppercase transition-colors ${
                  item.key === activeMenu
                    ? "border-[#eab65b] text-white"
                    : "border-transparent text-white/80 hover:border-[#eab65b] hover:text-white"
                }`}
              >
                {item.label}
              </button>
              {index < menuNavItems.length - 1 ? (
                <span className="text-[#eab65b]">&#10022;</span>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="relative mt-7 overflow-hidden bg-black px-5 py-10 shadow-2xl sm:px-8 lg:px-12 lg:py-14"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.78)), url('/background_menu%20.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/One-8-commune-logo-transparent.png"
            alt=""
            width={900}
            height={380}
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-1/2 w-[620px] max-w-none -translate-y-1/2 opacity-[0.035]"
          />

          <p className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-180 [font-family:Georgia,serif] text-7xl uppercase leading-none tracking-[0.08em] text-[#eab65b] [writing-mode:vertical-rl] lg:block">
            {menu.vertical}
          </p>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <h2 className="[font-family:Georgia,serif] text-4xl font-normal">
                {menu.title}
              </h2>

              <div className="mt-8 space-y-7">
                {menu.items.map((item) => (
                  <article
                    key={item.name}
                    className="grid grid-cols-[72px_1fr] gap-5"
                  >
                    <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border border-[#eab65b]/40 bg-black/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="72px"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.1em]">
                          {item.name}
                        </h3>
                        {item.isNew ? (
                          <span className="rounded-sm bg-[#eab65b] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-black">
                            New
                          </span>
                        ) : null}
                        <span className="hidden h-px flex-1 border-t border-dashed border-white/28 sm:block" />
                        <p className="whitespace-nowrap text-sm text-[#eab65b]">
                          {item.price}
                        </p>
                      </div>
                      <p className="mt-2 max-w-md text-sm leading-7 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="relative aspect-[0.9] overflow-hidden rounded-t-[999px] border border-[#eab65b]/80 bg-black/30 shadow-2xl">
                <Image
                  src={menu.heroImage}
                  alt={`${menu.title} menu`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/85">
            During winter daily from{" "}
            <span className="text-[#eab65b]">7:00 pm</span> to{" "}
            <span className="text-[#eab65b]">9:00 pm</span>
          </p>
          <Link
            href="/menu/starter"
            className="mt-6 inline-flex bg-[#eab65b] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-amber-500/30"
          >
            View Full Menu Page
          </Link>
        </div>
      </section>
    </main>
  );
}
