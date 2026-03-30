"use client";

const services = [
  {
    num: "01",
    title: "TMS Operational Support",
    subtitle: "The backbone of your fleet operations.",
    description:
      "Load/PRO entry, order entry, dispatch data entry, EDI setup & monitoring, load tender processing, tracking & status updates, check calls, and POD collection — all executed with precision inside your TMS.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1100&q=80",
    reverse: false,
  },
  {
    num: "02",
    title: "Shipment & Documentation",
    subtitle: "Every document. Every load. Every time.",
    description:
      "BOL creation, rate confirmation, document indexing, invoice data entry, freight bill auditing, detention & accessorial updates. Clean documentation keeps your revenue flowing.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1100&q=80",
    reverse: true,
  },
  {
    num: "03",
    title: "Cross-Border & Customs",
    subtitle: "Canada–US. No delays. No surprises.",
    description:
      "Customs documentation, ACE/ACI eManifest filing, border crossing paperwork, HS code validation, broker coordination, and shipment clearance follow-ups.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1100&q=80",
    reverse: false,
  },
  {
    num: "04",
    title: "Dispatch & Coordination",
    subtitle: "Keep drivers moving. Keep customers happy.",
    description:
      "Load assignment support, appointment scheduling, rescheduling & exception handling, carrier/broker communication, and driver communication — coordinated seamlessly.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1100&q=80",
    reverse: true,
  },
  {
    num: "05",
    title: "Billing & Back Office",
    subtitle: "Get paid faster. Every cycle.",
    description:
      "Invoice generation, billing verification, rate entry & validation, accounts receivable follow-ups, and payment posting. A healthy revenue cycle, guaranteed.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1100&q=80",
    reverse: false,
  },
  {
    num: "06",
    title: "Tracking & Visibility",
    subtitle: "Real-time intelligence. Total control.",
    description:
      "Real-time tracking updates, GPS/ELD coordination, exception alerts & escalation, and delay & issue updates — complete visibility for you and your customers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=80",
    reverse: true,
  },
  {
    num: "07",
    title: "Customer & Broker Support",
    subtitle: "Your reputation. Our priority.",
    description:
      "Professional email management, call handling, load inquiries & updates, and issue resolution — maintaining your brand with every interaction.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1100&q=80",
    reverse: false,
  },
  {
    num: "08",
    title: "System & Admin Support",
    subtitle: "Clean data. Clear reports. Zero clutter.",
    description:
      "TMS data cleanup & maintenance, user support, report generation, and KPI tracking. So you can focus on what matters — growing your fleet.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=80",
    reverse: true,
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-apple-bg">
      {/* Section intro */}
      <div className="pt-[120px] lg:pt-[160px] pb-20 text-center max-w-[980px] mx-auto px-6">
        <p className="label-eyebrow mb-5 reveal">Our Services</p>
        <h2 className="headline-section text-apple-text reveal reveal-delay-1">
          Eight ways we keep
          <br />
          your fleet moving.
        </h2>
      </div>

      {/* Individual service sections */}
      {services.map((s, i) => (
        <div
          key={s.num}
          className={`py-[80px] lg:py-[100px] ${
            i % 2 === 0 ? "bg-apple-bg" : "bg-apple-gray"
          }`}
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div
              className={`flex flex-col ${
                s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Text side */}
              <div className="flex-1 max-w-[480px]">
                <div className="service-num reveal">{s.num}</div>
                <h3 className="headline-feature text-apple-text -mt-4 mb-3 reveal reveal-delay-1">
                  {s.title}
                </h3>
                <p className="text-[21px] font-medium text-teal mb-5 tracking-tight reveal reveal-delay-2">
                  {s.subtitle}
                </p>
                <p className="body-elevated mb-8 reveal reveal-delay-3">
                  {s.description}
                </p>
                <a href="#contact" className="btn-secondary reveal reveal-delay-4">
                  Learn more <ArrowIcon />
                </a>
              </div>

              {/* Image side */}
              <div className="flex-1 w-full reveal-scale">
                <div className="img-cinematic aspect-[4/3]">
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
      ))}
    </section>
  );
}
