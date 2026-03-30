"use client";

const capabilities = [
  "ACE/ACI Filing",
  "Customs Docs",
  "HS Code Validation",
  "Broker Coordination",
  "Border Paperwork",
  "Clearance Follow-ups",
];

export default function CrossBorder() {
  return (
    <section className="relative py-[120px] lg:py-[160px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-navy-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy-dark/90" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Flags */}
        <div className="flex items-center justify-center gap-4 mb-6 reveal">
          <span className="text-[40px]">🇨🇦</span>
          <span className="text-[28px] text-white/30 font-light">↔</span>
          <span className="text-[40px]">🇺🇸</span>
        </div>

        <h2 className="headline-section text-white mb-6 reveal reveal-delay-1">
          Canada ↔ United States
        </h2>
        <p className="text-[19px] sm:text-[21px] text-white/60 leading-relaxed max-w-[600px] mx-auto mb-12 reveal reveal-delay-2">
          Cross-border is our specialty. ACE/ACI, customs, compliance —
          handled.
        </p>

        {/* Capability pills */}
        <div className="flex flex-wrap justify-center gap-3 stagger-children reveal">
          {capabilities.map((cap, i) => (
            <span
              key={cap}
              data-stagger={i}
              className="pill-tag bg-white/[0.08] text-white/80 border border-white/[0.1] hover:bg-teal/20 hover:border-teal/30 hover:text-white"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
