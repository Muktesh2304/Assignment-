import Image from "next/image";

const highlightImages = {
  breakfast:
    "https://images.pexels.com/photos/2930969/pexels-photo-2930969.jpeg?auto=compress&cs=tinysrgb&w=500&h=220&fit=crop",
  mains:
    "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=500&h=220&fit=crop",
  drinks:
    "https://images.pexels.com/photos/8257973/pexels-photo-8257973.jpeg?auto=compress&cs=tinysrgb&w=500&h=220&fit=crop",
};

const features = [
  {
    title: "Hygienic Food",
    text: "Fresh ingredients, clean preparation, and quality you can trust.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M24 6c7 5 11 12 11 19 0 8-5 14-11 17-6-3-11-9-11-17 0-7 4-14 11-19Z" />
        <path d="M24 16v22M18 25l6 5 7-8" />
      </svg>
    ),
  },
  {
    title: "Fresh Ambience",
    text: "A warm, elegant space designed for comfort and memorable moments.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M13 24h22M17 24v13M31 24v13M18 17h12a5 5 0 0 1 5 5v2H13v-2a5 5 0 0 1 5-5Z" />
        <path d="M10 12h4M34 12h4M24 7v4M15 9l3 3M33 9l-3 3" />
      </svg>
    ),
  },
];

function InlineImage({ src, alt }) {
  return (
    <span className="mx-2 inline-block h-12 w-32 overflow-hidden rounded-full align-middle ring-1 ring-[#eab65b]/30 sm:h-14 sm:w-40 lg:h-16 lg:w-48">
      <span className="relative block h-full w-full">
        <Image src={src} alt={alt} fill sizes="180px" className="object-cover" />
      </span>
    </span>
  );
}

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-transparent px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#eab65b]">
            <span className="mx-3">&#10022;</span>
            About Us
            <span className="mx-3">&#10022;</span>
          </p>

          <h2 className="font-[Georgia,serif] text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Enjoy Every Moment with Tasty
            <br />
            <InlineImage src={highlightImages.breakfast} alt="Tasty breakfast" />
            <span className="text-[#eab65b]">Breakfast,</span> Hearty
            <InlineImage src={highlightImages.mains} alt="Heavy main dishes" />
            <br />
            Mains
            <InlineImage src={highlightImages.drinks} alt="Drinks" />
            <span className="text-[#eab65b]">Drinks</span>
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div>
            <p className="max-w-2xl text-base leading-8 text-white/85">
              Experience the perfect blend of delicious cuisine, elegant
              ambiance, and exceptional hospitality. Every dish is freshly
              prepared using premium ingredients to deliver unforgettable
              flavors. Whether you are joining us for a family dinner, a romantic
              evening, or a special celebration, we promise a warm atmosphere and
              memorable dining experience.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title}>
                  <div className="flex items-center gap-4 text-[#eab65b]">
                    {feature.icon}
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="text-sm font-semibold text-white">
                Booking Request :
                <br />
                <a
                  href="tel:+804001234567"
                  className="text-lg font-normal text-[#eab65b]"
                >
                  +80 (400) 123 4567
                </a>
              </p>

              <a
                href="#"
                className="inline-flex w-fit bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-[#eab65b] hover:text-black hover:shadow-lg hover:shadow-amber-500/30"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[0.95] overflow-hidden  rounded-t-[999px] border border-[#eab65b]/70 bg-white/5 shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/27626762/pexels-photo-27626762.png?auto=compress&cs=tinysrgb&w=1000&h=1000&fit=crop"
                alt="Booking table"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
