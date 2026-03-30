"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-[120px] lg:py-[160px] bg-navy-dark overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[780px] mx-auto px-6 text-center">
        <p className="label-eyebrow text-teal-light mb-5 reveal">
          Ready to Start?
        </p>
        <h2 className="headline-section text-white mb-6 reveal reveal-delay-1">
          Let&apos;s streamline your
          <br />
          back office.
        </h2>
        <p className="text-[19px] text-white/50 leading-relaxed max-w-[540px] mx-auto mb-10 reveal reveal-delay-2">
          Get a custom quote for your fleet. No commitments, no software
          changes — just better operations.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sales@amazetech.net"
            className="btn-primary bg-teal text-white hover:bg-teal-light"
          >
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="tel:+18888080131"
            className="btn-primary bg-white/10 text-white hover:bg-white/20"
          >
            Call Us
          </a>
        </div>

        {/* Contact info */}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-[15px] text-white/40 reveal reveal-delay-4">
          <a
            href="mailto:sales@amazetech.net"
            className="hover:text-white/70 transition-colors"
          >
            sales@amazetech.net
          </a>
          <a
            href="tel:+18888080131"
            className="hover:text-white/70 transition-colors"
          >
            +1 (888) 808-0131
          </a>
          <span>East Brunswick, NJ</span>
        </div>
      </div>
    </section>
  );
}
