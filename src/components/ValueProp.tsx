"use client";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Software Changes",
    desc: "We train on your TMS. McLeod, TMW, Rose Rocket — whatever you run, we plug right in.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "24/7 Operations",
    desc: "Round-the-clock coverage so your fleet never stops. Night shifts, weekends, holidays — we're on it.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Scale On Demand",
    desc: "50 trucks or 500 — scale your back-office up or down without hiring or firing anyone.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Cut Costs 50%",
    desc: "Half the cost of in-house staff with double the efficiency. Better output, better margins.",
  },
];

export default function ValueProp() {
  return (
    <section id="about" className="py-[120px] lg:py-[160px] bg-apple-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="label-eyebrow mb-5 reveal">Why Amaze Tech</p>
          <h2 className="headline-section text-apple-text mb-6 reveal reveal-delay-1">
            We work with{" "}
            <span className="gradient-text">YOUR</span> TMS.
          </h2>
          <p className="body-elevated max-w-[600px] mx-auto reveal reveal-delay-2">
            Most outsourcing firms want you to change your systems. We don&apos;t.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children reveal">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-stagger={i}
              className="card-hover bg-white rounded-2xl p-7 border border-black/[0.04] group cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5 transition-all duration-500 group-hover:bg-teal group-hover:text-white group-hover:scale-110">
                {f.icon}
              </div>
              {/* Title */}
              <h3 className="text-[18px] font-bold text-apple-text tracking-tight mb-2">
                {f.title}
              </h3>
              {/* Description */}
              <p className="text-[15px] text-apple-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
