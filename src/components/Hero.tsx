"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "40+", label: "Services" },
  { value: "24/7", label: "Operations" },
  { value: "99%", label: "Accuracy" },
  { value: "50%", label: "Cost Savings" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')",
        }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      {/* Subtle blue tint */}
      <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[980px] mx-auto pt-20 pb-40">
        {/* Eyebrow */}
        <p
          className={`label-eyebrow text-teal-light mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          TMS Back-Office Services
        </p>

        {/* Headline with word animation */}
        <h1 className="headline-hero mb-8">
          <span
            className={`hero-word text-white ${loaded ? "" : "paused"}`}
            style={{ animationDelay: "0.2s", animationPlayState: loaded ? "running" : "paused", opacity: loaded ? undefined : 0 }}
          >
            Your TMS.
          </span>{" "}
          <br className="sm:hidden" />
          <span
            className={`hero-word gradient-text ${loaded ? "" : "paused"}`}
            style={{ animationDelay: "0.5s", animationPlayState: loaded ? "running" : "paused", opacity: loaded ? undefined : 0 }}
          >
            Our Expertise.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-[19px] sm:text-[21px] text-white/70 leading-relaxed max-w-[620px] mx-auto mb-10 transition-all duration-900 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We plug into your existing software — no changes, no disruptions.
          24/7 back-office that scales with your fleet.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <a href="#contact" className="btn-primary text-[17px] px-8 py-4">
            Get a Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="btn-ghost text-[17px] px-8 py-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Watch How It Works
          </a>
        </div>
      </div>

      {/* Floating stats cards at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`glass rounded-2xl p-5 sm:p-6 text-center transition-all duration-700 ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${1.1 + i * 0.12}s` }}
              >
                <div className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-none">
                  {s.value}
                </div>
                <div className="text-[13px] text-white/50 font-medium mt-1.5 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-apple-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
}
