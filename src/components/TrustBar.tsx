"use client";

const stats = [
  { value: "40+", label: "Services" },
  { value: "24/7", label: "Operations" },
  { value: "99%", label: "Accuracy" },
  { value: "50%", label: "Cost Savings" },
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-apple-bg">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="reveal flex flex-wrap justify-center gap-x-16 gap-y-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center reveal-delay-${i + 1}`}>
              <div className="text-[56px] sm:text-[64px] font-bold tracking-tight leading-none text-apple-text">
                {s.value}
              </div>
              <div className="text-[15px] text-apple-muted font-normal mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
