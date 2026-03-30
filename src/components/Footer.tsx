"use client";

export default function Footer() {
  return (
    <footer className="bg-apple-bg border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "https://amazetech.net" },
                { label: "Careers", href: "https://amazetech.net" },
                { label: "Contact", href: "#contact" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[13px] text-apple-muted hover:text-apple-text transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "TMS Operations",
                "Cross-Border",
                "Dispatch",
                "Billing",
                "Tracking",
                "Documentation",
                "Customer Support",
                "System Admin",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[13px] text-apple-muted hover:text-apple-text transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4 tracking-wide">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {[
                "Truckload (FTL)",
                "LTL Carriers",
                "Freight Brokers",
                "3PL Providers",
                "Cross-Border",
                "Intermodal",
                "Flatbed",
                "Last Mile",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#industries"
                    className="text-[13px] text-apple-muted hover:text-apple-text transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[13px] text-apple-muted">
              <li>
                <a
                  href="mailto:sales@amazetech.net"
                  className="hover:text-apple-text transition-colors duration-200"
                >
                  sales@amazetech.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+18888080131"
                  className="hover:text-apple-text transition-colors duration-200"
                >
                  +1 (888) 808-0131
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-apple-gray flex items-center justify-center text-apple-muted hover:bg-teal hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-apple-gray flex items-center justify-center text-apple-muted hover:bg-teal hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Amaze Tech" className="h-6 w-auto opacity-50" />
            <p className="text-[12px] text-apple-muted">
              © 2026 Amaze Tech Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://amazetech.net"
              className="text-[12px] text-apple-muted hover:text-apple-text transition-colors duration-200"
            >
              amazetech.net
            </a>
            <a
              href="#"
              className="text-[12px] text-apple-muted hover:text-apple-text transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12px] text-apple-muted hover:text-apple-text transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
