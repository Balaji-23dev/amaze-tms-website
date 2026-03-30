"use client";

const testimonials = [
  {
    quote:
      "Amaze Tech transformed our back-office operations. We went from struggling with hiring to having a fully staffed, 24/7 team — without changing our TMS. Our costs dropped 40% in the first year.",
    name: "Michael R.",
    title: "VP of Operations",
    company: "Great Northern Freight Lines",
    initials: "MR",
  },
  {
    quote:
      "We were skeptical about outsourcing dispatch and billing. But their team integrated seamlessly with McLeod. It's like having an in-house team that never takes a day off.",
    name: "Sarah K.",
    title: "Director of Finance",
    company: "Maple Leaf Transport Inc.",
    initials: "SK",
  },
  {
    quote:
      "The cross-border expertise alone is worth it. ACE/ACI filing, customs docs, broker coordination — they handle it all. Our border delays dropped 70% in the first quarter.",
    name: "David P.",
    title: "Owner-Operator",
    company: "CrossPoint Logistics",
    initials: "DP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px] lg:py-[160px] bg-apple-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="label-eyebrow mb-5 reveal">Testimonials</p>
          <h2 className="headline-section text-apple-text reveal reveal-delay-1">
            What Our Partners Say
          </h2>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 stagger-children reveal">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-stagger={i}
              className="card-hover min-w-[320px] sm:min-w-[360px] lg:min-w-0 bg-apple-gray rounded-2xl p-8 snap-center flex flex-col"
            >
              {/* Quote icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                className="text-teal/20 mb-6 shrink-0"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>

              {/* Quote */}
              <p className="text-[17px] sm:text-[18px] text-apple-text leading-relaxed tracking-tight mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center text-[14px] font-bold text-teal shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-apple-text">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-apple-muted">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
