"use client";

export default function Marquee() {
  const words = ["Enter", "Track", "Deliver", "Bill"];
  const items = Array(16).fill(words).flat();

  return (
    <section className="py-8 bg-apple-bg overflow-hidden border-y border-black/[0.04]">
      <div className="marquee-track flex items-center whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-apple-text/[0.06] tracking-tight mx-4">
              {word}
            </span>
            <span className="text-teal/30 mx-3">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
