"use client";

const industries = [
  {
    name: "Truckload Carriers",
    tag: "FTL / OTR",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    name: "LTL Carriers",
    tag: "Less-Than-Truckload",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    name: "Freight Brokers",
    tag: "Brokerage",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    name: "3PL Providers",
    tag: "Third-Party Logistics",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    name: "Cross-Border Haulers",
    tag: "Canada / US",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&q=80",
  },
  {
    name: "Intermodal",
    tag: "Rail & Truck",
    image: "https://images.unsplash.com/photo-1473090826765-d54ac2fdc1eb?w=600&q=80",
  },
  {
    name: "Flatbed & Specialized",
    tag: "Heavy Haul",
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=600&q=80",
  },
  {
    name: "Last Mile",
    tag: "Final Mile Delivery",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-[120px] lg:py-[160px] bg-apple-bg">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-eyebrow mb-5 reveal">Industries We Serve</p>
          <h2 className="headline-section text-apple-text reveal reveal-delay-1">
            Built for carriers.
            <br />
            Every kind.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`reveal reveal-delay-${(i % 4) + 1} industry-tile group rounded-2xl overflow-hidden relative aspect-[3/4]`}
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="industry-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-teal-light mb-1">
                  {ind.tag}
                </p>
                <h3 className="text-white text-[17px] font-semibold tracking-tight leading-tight">
                  {ind.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
