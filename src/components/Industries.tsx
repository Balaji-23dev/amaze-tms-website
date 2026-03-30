const industries = [
  {
    name: "Truckload Carriers",
    desc: "Full back-office support for OTR and regional carriers.",
    icon: "🚛",
  },
  {
    name: "LTL Carriers",
    desc: "PRO management and documentation for LTL operations.",
    icon: "📦",
  },
  {
    name: "Freight Brokers",
    desc: "Carrier management and load coordination support.",
    icon: "🤝",
  },
  {
    name: "3PL Providers",
    desc: "Scalable operations support for third-party logistics.",
    icon: "🏭",
  },
  {
    name: "Cross-Border Haulers",
    desc: "Customs documentation specialists for US-CA-MX routes.",
    icon: "🌎",
  },
  {
    name: "Intermodal",
    desc: "Multi-modal coordination and container tracking support.",
    icon: "🚢",
  },
  {
    name: "Flatbed & Specialized",
    desc: "Permit management and compliance for oversize loads.",
    icon: "⚙️",
  },
  {
    name: "Last Mile Delivery",
    desc: "High-volume tracking and POD management.",
    icon: "📍",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Built for <span className="gradient-text">Trucking & Freight</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you run 10 trucks or 10,000 — our team adapts to your
            operation.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">
                {ind.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
