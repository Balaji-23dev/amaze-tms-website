"use client";
import { useState } from "react";

const serviceCategories = [
  {
    num: "01",
    icon: "🚚",
    title: "TMS Operational Support",
    services: [
      "Load/PRO entry",
      "Order entry & load creation",
      "Dispatch data entry",
      "EDI setup & monitoring",
      "EDI load tender processing",
      "Load tracking & status updates",
      "Check calls & driver follow-ups",
      "POD (Proof of Delivery) collection & upload",
    ],
  },
  {
    num: "02",
    icon: "📦",
    title: "Shipment & Documentation",
    services: [
      "Bill of Lading (BOL) creation",
      "Rate confirmation processing",
      "Document indexing & management",
      "Invoice data entry",
      "Freight bill auditing",
      "Detention & accessorial updates",
    ],
  },
  {
    num: "03",
    icon: "🌍",
    title: "Cross-Border & Customs",
    services: [
      "Customs documentation support",
      "ACE/ACI eManifest filing support",
      "Border crossing paperwork preparation",
      "HS code validation support",
      "Broker coordination",
      "Shipment clearance follow-ups",
    ],
  },
  {
    num: "04",
    icon: "📊",
    title: "Dispatch & Coordination",
    services: [
      "Load assignment support",
      "Appointment scheduling",
      "Rescheduling & exception handling",
      "Carrier/broker communication",
      "Driver communication support",
    ],
  },
  {
    num: "05",
    icon: "💰",
    title: "Billing & Back Office",
    services: [
      "Invoice generation support",
      "Billing verification",
      "Rate entry & validation",
      "Accounts receivable follow-ups",
      "Payment posting support",
    ],
  },
  {
    num: "06",
    icon: "🔗",
    title: "Tracking & Visibility",
    services: [
      "Real-time tracking updates (manual + system)",
      "GPS/ELD tracking coordination",
      "Exception alerts & escalation",
      "Delay & issue updates to stakeholders",
    ],
  },
  {
    num: "07",
    icon: "📞",
    title: "Customer & Broker Support",
    services: [
      "Email management (shipper/broker communication)",
      "Call handling support",
      "Load inquiries & updates",
      "Issue resolution coordination",
    ],
  },
  {
    num: "08",
    icon: "⚙️",
    title: "System & Admin Support",
    services: [
      "TMS data cleanup & maintenance",
      "User support for TMS",
      "Report generation",
      "KPI tracking updates",
    ],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              End-to-End TMS{" "}
              <span className="gradient-text">Back-Office</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg">
            8 service categories. 40+ task-level capabilities. Every piece of
            your TMS back-office — handled.
          </p>
        </div>

        {/* Services accordion */}
        <div className="space-y-0">
          {serviceCategories.map((s, i) => (
            <div
              key={i}
              className="service-card border-b border-white/5 cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center gap-4 md:gap-6 py-6 px-4">
                <span className="service-number text-2xl md:text-3xl font-bold text-slate-600 tabular-nums min-w-[3rem]">
                  {s.num}
                </span>
                <span className="text-xl hidden sm:inline">{s.icon}</span>
                <h3 className="text-lg md:text-xl font-semibold text-white flex-1">
                  {s.title}
                </h3>
                <span className="text-xs text-slate-600 hidden sm:inline">
                  {s.services.length} services
                </span>
                <svg
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                    expanded === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <ul className="pl-[4.5rem] pr-12 space-y-2">
                  {s.services.map((svc, j) => (
                    <li
                      key={j}
                      className="text-slate-400 flex items-start gap-3"
                    >
                      <span className="text-teal-500 mt-1.5 text-[8px]">●</span>
                      <span className="leading-relaxed">{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
