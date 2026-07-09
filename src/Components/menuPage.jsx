import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { menuNavItems } from "@/data/menuData";

export default function MenuPage({ menu, showBreadcrumb = true }) {
  return (
    <>
      
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">
        
        <Image
          src={menu.heroImage}
          alt={menu.title}
          fill
          priority
          className="object-cover object-center"
        />

        
        <div className="absolute inset-0 bg-black/60" />

        
        <div className="absolute left-1/2 top-10 h-1 w-20 -translate-x-1/2 rounded-full bg-amber-500" />

        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-5xl text-white md:text-7xl">
            {menu.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
            A selection of fine dining —{" "}
            <span className="text-amber-400">delights</span>
          </p>

          
          {showBreadcrumb ? (
            <div className="mt-8 flex items-center gap-2 text-sm text-white/90">
              <Link
                href="/"
                className="font-medium text-white transition hover:text-amber-400"
              >
                Home
              </Link>
              <ChevronRight size={16} className="text-amber-400" />
              <Link
                href="/menu/starter"
                className="font-medium text-white transition hover:text-amber-400"
              >
                Menu
              </Link>
              <ChevronRight size={16} className="text-amber-400" />
              <span className="text-white/70">{menu.title}</span>
            </div>
          ) : null}
        </div>

        
        
      </section>

      <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-16 pt-12 text-white sm:px-8 lg:px-16">
        <section className="relative z-10 mx-auto max-w-7xl">


        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 text-xs font-bold uppercase tracking-[0.22em] sm:gap-7">
          {menuNavItems.map((item, index) => (
            <div key={item.key} className="flex items-center gap-5 sm:gap-7">
              <Link
                href={item.href}
                className={`border-b pb-2 transition-colors ${
                  item.key === menu.key
                    ? "border-[#eab65b] text-white"
                    : "border-transparent text-white/80 hover:border-[#eab65b] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
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
            src="/logo.png"
            alt="logo"
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
                  <article key={item.name} className="grid grid-cols-[72px_1fr] gap-5">
                    <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border border-[#eab65b]/40 bg-black/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={72}
                        height={72}
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
            className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#eab65b] pb-1 text-xs font-bold uppercase tracking-[0.22em] text-[#eab65b] transition-all duration-300 hover:gap-4 hover:text-white hover:border-white"
          >
            View All Menu <span className="text-base">→</span>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
