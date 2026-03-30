"use client";

const testimonials = [
  {
    quote:
      "Amaze Tech transformed our back-office operations. We went from struggling with hiring to having a fully staffed, 24/7 team — without changing our TMS. Our costs dropped by 40% in the first year.",
    name: "Michael R.",
    title: "VP of Operations, Great Northern Freight Lines",
  },
  {
    quote:
      "We were skeptical about outsourcing dispatch and billing. But their team integrated seamlessly with McLeod. It's like having an in-house team that never takes a day off.",
    name: "Sarah K.",
    title: "Director of Finance, Maple Leaf Transport Inc.",
  },
  {
    quote:
      "The cross-border expertise alone is worth it. ACE/ACI filing, customs docs, broker coordination — they handle it all. Our border delays dropped 70% in the first quarter.",
    name: "David P.",
    title: "Owner-Operator, CrossPoint Logistics",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px] lg:py-[160px] bg-apple-gray">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-5 reveal">What Our Partners Say</p>
          <h2 className="headline-section text-apple-text reveal reveal-delay-1">
            Trusted by carriers
            <br />
            across North America.
          </h2>
        </div>

        {/* Quotes — stacked, centered, Apple keynote style */}
        <div className="space-y-20">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i + 1} text-center`}>
              <blockquote className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-apple-text leading-snug tracking-tight mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-[17px] font-semibold text-apple-text">{t.name}</p>
                <p className="text-[15px] text-apple-muted mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
