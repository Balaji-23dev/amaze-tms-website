"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-apple-bg">
      {/* Content — centered, Apple-style */}
      <div className="relative z-10 text-center px-6 max-w-[980px] mx-auto">
        {/* Eyebrow */}
        <p
          className={`label-eyebrow mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          TMS Back-Office Services
        </p>

        {/* Headline */}
        <h1
          className={`headline-hero text-apple-text mb-6 transition-all duration-1000 delay-150 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Your TMS.{" "}
          <span className="text-teal">Our Expertise.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`body-elevated max-w-[600px] mx-auto mb-10 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We plug into your existing software — no changes, no disruptions.
          24/7 back-office operations that scale with your fleet.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="#contact" className="btn-primary">
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hero image — cinematic, below fold tease */}
      <div
        className={`relative z-10 w-full max-w-[1200px] mx-auto px-6 mt-16 transition-all duration-1200 delay-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="img-cinematic aspect-[21/9] relative">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Fleet of trucks on a highway at sunset"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]" />
        </div>
      </div>

      {/* Fade to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-apple-bg to-transparent z-20 pointer-events-none" />
    </section>
  );
}
