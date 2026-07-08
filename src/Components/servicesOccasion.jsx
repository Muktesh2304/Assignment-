import Image from "next/image";

const services = [
  {
    title: "Party & Celebrations",
    text: "Make birthdays, anniversaries, and private gatherings feel effortless with warm service and vibrant dining.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M15 6h8l-2 17a5 5 0 0 1-8 0L15 6ZM17 28v13M13 41h8M31 6h8l-2 17a5 5 0 0 1-8 0L31 6ZM33 28v13M29 41h8" />
        <path d="M14 15h8M30 15h8" />
      </svg>
    ),
  },
  {
    title: "Banquet Hall",
    text: "Host elegant events in a refined setting with flexible seating, thoughtful lighting, and attentive coordination.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 21h24a6 6 0 0 1 6 6v10H6V27a6 6 0 0 1 6-6Z" />
        <path d="M12 21v-5a12 12 0 0 1 24 0v5M14 37v5M34 37v5M16 27h16" />
        <path d="M18 10h12M21 6h6" />
      </svg>
    ),
  },
  {
    title: "Luxury Fine Dining",
    text: "Enjoy premium ingredients, polished presentation, and a calm atmosphere made for memorable evenings.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M10 24h28M14 24v15M34 24v15M16 16h16a6 6 0 0 1 6 6v2H10v-2a6 6 0 0 1 6-6Z" />
        <path d="M15 39h22M22 9h4M18 12l3 3M30 12l-3 3" />
      </svg>
    ),
  },
  {
    title: "Outdoor Catering",
    text: "Bring One8 flavors to your venue with curated menus, reliable setup, and graceful guest service.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M7 28h20l5-8h5l4 8v8h-5a5 5 0 0 0-10 0H18a5 5 0 0 0-10 0H7v-8Z" />
        <path d="M13 36a2 2 0 1 0 0 .1M31 36a2 2 0 1 0 0 .1M12 18l8-8M20 18l-8-8" />
      </svg>
    ),
  },
];

export default function ServicesOccasion() {
  return (
    <section className="relative overflow-hidden bg-transparent px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#eab65b]">
            <span className="mx-3">&#10022;</span>
            Our Services
            <span className="mx-3">&#10022;</span>
          </p>
          <h2 className="[font-family:Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Perfect Spaces for Every
            <br />
            Occasion
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_420px_1fr] lg:gap-12">
          <div className="grid gap-12 text-center lg:text-right">
            {services.slice(0, 2).map((service) => (
              <article key={service.title}>
                <div className="flex items-center justify-center gap-4 text-[#eab65b] lg:justify-end">
                  <h3 className="max-w-44 text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {service.title}
                  </h3>
                  {service.icon}
                </div>
                <p className="mt-5 text-base leading-7 text-white/65">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[0.82] overflow-hidden rounded-t-[999px] border border-[#eab65b]/80 bg-white/5 shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/8153964/pexels-photo-8153964.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop"
                alt="Celebration dining"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid gap-12 text-center lg:text-left">
            {services.slice(2).map((service) => (
              <article key={service.title}>
                <div className="flex items-center justify-center gap-4 text-[#eab65b] lg:justify-start">
                  {service.icon}
                  <h3 className="max-w-44 text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-base leading-7 text-white/65">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex bg-[#eab65b] px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-transparent hover:text-[#eab65b] hover:ring-1 hover:ring-[#eab65b] hover:shadow-lg hover:shadow-amber-500/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
