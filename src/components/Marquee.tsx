export default function Marquee() {
  const words = [
    "Manage",
    "Track",
    "Deliver",
    "Optimize",
    "Scale",
    "Comply",
    "Manage",
    "Track",
    "Deliver",
    "Optimize",
    "Scale",
    "Comply",
  ];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap w-max">
        {words.concat(words).map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="text-5xl md:text-7xl font-bold text-white/[0.04] uppercase tracking-wider px-4">
              {word}
            </span>
            <span className="text-teal-500/30 text-3xl">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
