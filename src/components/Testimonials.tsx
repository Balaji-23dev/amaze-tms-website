const testimonials = [
  {
    quote:
      "Amaze Tech completely transformed our back-office operations. We cut our admin costs in half and our PRO accuracy went through the roof. They adapted to our McLeod system in days.",
    name: "Coming Soon",
    role: "Operations Director, Regional Carrier",
    initials: "RC",
  },
  {
    quote:
      "What impressed us most is that we didn't have to change a single thing about our TMS setup. Their team plugged right in and started delivering from day one.",
    name: "Coming Soon",
    role: "VP of Logistics, Freight Brokerage",
    initials: "FB",
  },
  {
    quote:
      "The customs documentation team is incredible. Cross-border shipments used to be our biggest headache — now they're our smoothest operation.",
    name: "Coming Soon",
    role: "CEO, Cross-Border Hauler",
    initials: "CB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-teal-500/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
