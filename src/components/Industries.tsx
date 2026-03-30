"use client";

const industries = [
  { icon: "🚛", name: "Truckload", desc: "FTL & OTR carriers of all sizes" },
  { icon: "📦", name: "LTL", desc: "Less-than-truckload operations" },
  { icon: "🤝", name: "Freight Brokers", desc: "Brokerage back-office support" },
  { icon: "🏭", name: "3PL", desc: "Third-party logistics providers" },
  { icon: "🌎", name: "Cross-Border", desc: "Canada/US international haulers" },
  { icon: "🚂", name: "Intermodal", desc: "Rail & truck combined operations" },
  { icon: "🔩", name: "Flatbed", desc: "Specialized & heavy haul carriers" },
  { icon: "🚚", name: "Last Mile", desc: "Final mile delivery services" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-[120px] lg:py-[160px] bg-apple-gray">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="label-eyebrow mb-5 reveal">Industries</p>
          <h2 className="headline-section text-apple-text reveal reveal-delay-1">
            Built for Trucking
            <br />
            & Freight.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 stagger-children reveal">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              data-stagger={i}
              className="card-hover bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.04] group cursor-default text-center"
            >
              <div className="text-[36px] mb-4 transition-transform duration-500 group-hover:scale-110">
                {ind.icon}
              </div>
              <h3 className="text-[17px] font-bold text-apple-text tracking-tight mb-1.5">
                {ind.name}
              </h3>
              <p className="text-[14px] text-apple-secondary leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
