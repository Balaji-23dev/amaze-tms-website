"use client";

import { useState } from "react";

const featured = [
  {
    num: "01",
    title: "TMS Operational Support",
    description:
      "The backbone of your fleet operations. We handle the day-to-day so your team can focus on growth and customer relationships.",
    bullets: ["Load/PRO entry & order management", "EDI setup & monitoring", "Real-time tracking updates", "POD collection & processing"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1100&q=80",
  },
  {
    num: "02",
    title: "Cross-Border & Customs",
    description:
      "Canada–US without delays or surprises. Our cross-border team ensures every shipment clears on time, every time.",
    bullets: ["ACE/ACI eManifest filing", "Customs documentation prep", "Broker coordination & follow-up"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1100&q=80",
  },
  {
    num: "03",
    title: "Billing & Back Office",
    description:
      "Get paid faster, every cycle. We handle the revenue cycle end-to-end so nothing slips through the cracks.",
    bullets: ["Invoice generation & delivery", "Rate entry & validation", "Accounts receivable follow-ups"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1100&q=80",
  },
  {
    num: "04",
    title: "Tracking & Visibility",
    description:
      "Complete visibility for you and your customers. Real-time intelligence that keeps everyone informed and in control.",
    bullets: ["Real-time GPS/ELD tracking", "Exception alerts & escalation", "Delay & issue updates"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=80",
  },
];

const moreServices = [
  {
    num: "05",
    title: "Shipment & Documentation",
    desc: "BOL creation, rate confirmations, document indexing, freight bill auditing — every document, every load.",
  },
  {
    num: "06",
    title: "Dispatch & Coordination",
    desc: "Load assignment, appointment scheduling, carrier/broker communication, driver coordination.",
  },
  {
    num: "07",
    title: "Customer & Broker Support",
    desc: "Professional email management, call handling, load inquiries, and issue resolution.",
  },
  {
    num: "08",
    title: "System & Admin Support",
    desc: "TMS data cleanup, user support, report generation, and KPI tracking.",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Services() {
  const [showMore, setShowMore] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <section id="services" className="bg-apple-bg">
      {/* Section header */}
      <div className="pt-[120px] lg:pt-[160px] pb-20 text-center max-w-[980px] mx-auto px-6">
        <p className="label-eyebrow mb-5 reveal">Our Services</p>
        <h2 className="headline-section text-apple-text reveal reveal-delay-1">
          Eight ways we keep
          <br />
          your fleet moving.
        </h2>
      </div>

      {/* Featured services — alternating layout */}
      {featured.map((s, i) => {
        const isReverse = i % 2 !== 0;
        return (
          <div
            key={s.num}
            className={`py-[80px] lg:py-[100px] ${
              i % 2 === 0 ? "bg-apple-bg" : "bg-apple-gray"
            }`}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <div
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Text side */}
                <div className={`flex-1 max-w-[500px] ${isReverse ? "reveal-right" : "reveal-left"}`}>
                  <div className="service-num mb-2">{s.num}</div>
                  <h3 className="headline-feature text-apple-text -mt-2 mb-4">
                    {s.title}
                  </h3>
                  <p className="body-elevated mb-6">
                    {s.description}
                  </p>
                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[16px] text-apple-text">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-teal shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-secondary">
                    Learn more <ArrowIcon />
                  </a>
                </div>

                {/* Image side */}
                <div className={`flex-1 w-full ${isReverse ? "reveal-left" : "reveal-right"}`}>
                  <div className="img-cinematic aspect-[4/3] shadow-2xl shadow-black/10">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* View All 8 Services + Accordion */}
      <div className="py-20 bg-apple-bg">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="btn-primary reveal"
            >
              View All 8 Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}

          {showMore && (
            <div className="space-y-3 text-left">
              {moreServices.map((s, i) => (
                <div
                  key={s.num}
                  className="border border-black/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal/20"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[14px] font-bold text-teal font-mono">
                        {s.num}
                      </span>
                      <span className="text-[18px] font-bold text-apple-text tracking-tight">
                        {s.title}
                      </span>
                    </div>
                    <span
                      className={`accordion-icon text-apple-muted text-[24px] font-light ${
                        openAccordion === i ? "open" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`accordion-content px-6 pb-6 ${
                      openAccordion === i ? "open" : ""
                    }`}
                  >
                    <p className="text-[16px] text-apple-secondary leading-relaxed pl-10">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
