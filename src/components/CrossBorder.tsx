"use client";

export default function CrossBorder() {
  return (
    <section className="py-[120px] lg:py-[160px] bg-apple-gray">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="label-eyebrow mb-5 reveal">Cross-Border Expertise</p>
          <h2 className="headline-section text-apple-text reveal reveal-delay-1">
            Canada ↔ US.
            <br />
            <span className="text-teal">Seamless.</span>
          </h2>
        </div>

        {/* Full-width image */}
        <div className="reveal-scale mb-16">
          <div className="img-cinematic aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1400&q=80"
              alt="Cross-border trucking between Canada and United States"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {[
            { title: "ACE/ACI eManifest Filing", desc: "Automated filing with real-time status tracking and error resolution." },
            { title: "Customs Documentation", desc: "Complete paperwork preparation for seamless border crossings." },
            { title: "HS Code Validation", desc: "Accurate classification to avoid delays and penalties." },
            { title: "Broker Coordination", desc: "Direct communication with customs brokers on your behalf." },
            { title: "Border Compliance", desc: "Full regulatory compliance for CBSA and CBP requirements." },
            { title: "Clearance Follow-ups", desc: "Proactive monitoring until every shipment clears." },
          ].map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${i + 1}`}>
              <h3 className="text-[19px] font-semibold text-apple-text tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-[15px] text-apple-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
