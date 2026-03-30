"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-[120px] lg:py-[160px] bg-navy-dark overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div className="flex-1 max-w-[460px]">
            <p className="label-eyebrow text-teal-light mb-5 reveal">
              Get Started
            </p>
            <h2 className="headline-section text-white mb-6 reveal reveal-delay-1">
              Ready to transform your back-office?
            </h2>
            <p className="text-[19px] text-white/50 leading-relaxed mb-10 reveal reveal-delay-2">
              Get a free consultation — see the difference in 30 days. No
              commitments, no software changes.
            </p>

            {/* Contact info */}
            <div className="space-y-4 reveal reveal-delay-3">
              <a
                href="mailto:sales@amazetech.net"
                className="flex items-center gap-3 text-[16px] text-white/60 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                sales@amazetech.net
              </a>
              <a
                href="tel:+18888080131"
                className="flex items-center gap-3 text-[16px] text-white/60 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (888) 808-0131
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 w-full max-w-[520px] reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="form-input"
                />
                <select className="form-input" defaultValue="">
                  <option value="" disabled>
                    Fleet Size
                  </option>
                  <option value="10-50">10–50 trucks</option>
                  <option value="50-200">50–200 trucks</option>
                  <option value="200-500">200–500 trucks</option>
                  <option value="500+">500+ trucks</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your needs..."
                rows={4}
                className="form-input resize-none"
              />
              <button
                type="submit"
                className="btn-primary w-full text-[17px] py-4"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            {/* Toast */}
            {submitted && (
              <div className="mt-4 toast-enter bg-teal/20 border border-teal/30 rounded-xl p-4 text-center">
                <p className="text-[15px] text-teal-light font-medium">
                  ✓ Thank you! We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
