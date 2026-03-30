"use client";

const tmsLogos = [
  "McLeod",
  "TMW",
  "Truckmate",
  "Rose Rocket",
  "Samsara",
  "KeepTruckin",
  "Trimble",
  "MercuryGate",
];

export default function TrustBar() {
  // Double the array for seamless loop
  const items = [...tmsLogos, ...tmsLogos];

  return (
    <section className="py-14 bg-apple-gray overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[13px] font-medium text-apple-muted tracking-wide uppercase mb-8 reveal">
          Trusted by carriers across North America — We integrate with
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-apple-gray to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-apple-gray to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center mx-8 sm:mx-12"
            >
              <span className="text-[20px] sm:text-[24px] font-bold text-apple-text/[0.12] tracking-tight font-mono select-none">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
