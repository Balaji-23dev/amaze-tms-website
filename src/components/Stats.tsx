"use client";

const counters = [
  { value: "40", suffix: "+", label: "Services" },
  { value: "24/7", suffix: "", label: "Coverage" },
  { value: "99", suffix: "%", label: "Accuracy" },
  { value: "50", suffix: "%", label: "Cost Savings" },
];

export default function Stats() {
  return (
    <section className="relative py-[100px] lg:py-[120px] bg-navy overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div
        className="relative z-10 max-w-[1000px] mx-auto px-6"
        data-counter-section
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {counters.map((c) => (
            <div key={c.label} className="reveal">
              <div className="text-[56px] sm:text-[72px] lg:text-[80px] font-extrabold text-white tracking-tighter leading-none">
                {c.value === "24/7" ? (
                  <span data-counter="24/7">24/7</span>
                ) : (
                  <span>
                    <span
                      data-counter={c.value}
                      data-counter-suffix={c.suffix}
                    >
                      0{c.suffix}
                    </span>
                  </span>
                )}
              </div>
              <div className="text-[14px] text-white/40 font-medium mt-3 tracking-widest uppercase">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
