"use client";

export default function ValueProp() {
  return (
    <section className="py-[120px] lg:py-[160px] bg-apple-gray">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <p className="label-eyebrow mb-5 reveal">Zero Software Changes</p>
        <h2 className="headline-section text-apple-text mb-8 reveal reveal-delay-1">
          We work with{" "}
          <span className="text-teal">your</span> TMS.
        </h2>
        <p className="body-elevated max-w-[680px] mx-auto mb-12 reveal reveal-delay-2">
          McLeod. TMW. Aljex. Rose Rocket. Whatever system you run, we plug
          right in. No migrations, no retraining, no downtime. Your team keeps
          working the way they always have — we just make it better.
        </p>

        {/* Three minimal value points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {[
            {
              title: "Your Software",
              desc: "We train on your TMS. You change nothing.",
            },
            {
              title: "Your Processes",
              desc: "We follow your workflows, your SOPs, your way.",
            },
            {
              title: "Our People",
              desc: "Trained specialists, available 24/7, at half the cost.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 3} text-center`}
            >
              <h3 className="text-[28px] font-bold text-apple-text tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-[17px] text-apple-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
