import Image from "next/image";

const menuItems = [
  {
    title: "Appetizers",
    description:
      "Small bites, big flavors — the perfect beginning to your dining experience.",
    image:
      "https://images.pexels.com/photos/16436245/pexels-photo-16436245.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    link: "/menu/starter",
  },
  {
    title: "Main Dishes",
    description:
      "Bold flavors and masterful creations for a truly unforgettable main course.",
    image:
      "https://images.pexels.com/photos/19285793/pexels-photo-19285793.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    link: "/menu/main-dishes",
  },
  {
    title: "Desserts",
    description:
      "End your meal on a sweet note with irresistible dessert creations.",
    image:
      "https://images.pexels.com/photos/28376178/pexels-photo-28376178.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    link: "/menu/desserts",
  },
];

export default function DeliciousSelections() {
  return (
    <section className="relative overflow-hidden bg-transparent px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#eab65b]">
            <span className="mx-3">✦</span>
            Special Fine Dine
            <span className="mx-3">✦</span>
          </p>
          <h2 className="[font-family:Georgia,serif] text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Delicious Selections
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {menuItems.map((item) => (
            <article key={item.title} className="text-center">
              <div className="relative mx-auto aspect-[0.92] w-full max-w-[360px] overflow-hidden rounded-t-[999px] border border-[#eab65b]/70 bg-white/5 shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 30vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-8 [font-family:Georgia,serif] text-3xl font-normal text-white sm:text-4xl">
                {item.title}
              </h3>
              <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-white/85">
                {item.description}
              </p>
              <a
                href={item.link}
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 after:block after:h-px after:w-0 after:bg-[#eab65b] after:transition-all after:duration-300 hover:text-[#eab65b] hover:after:w-full"
              >
                View Menu →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
