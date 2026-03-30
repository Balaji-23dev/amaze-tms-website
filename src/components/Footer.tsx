"use client";

export default function Footer() {
  return (
    <footer className="bg-apple-bg border-t border-black/[0.06]">
      <div className="max-w-[1120px] mx-auto px-6 py-16">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "TMS Operations",
                "Shipment & Docs",
                "Cross-Border",
                "Dispatch",
                "Billing",
                "Tracking",
                "Customer Support",
                "System & Admin",
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

          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4">
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

          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4">
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

          <div>
            <h4 className="text-[13px] font-semibold text-apple-text mb-4">
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
              <li>
                1 Auer Ct
                <br />
                East Brunswick, NJ 08816
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-apple-muted">
            © {new Date().getFullYear()} Amaze Tech Solutions Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[12px] text-apple-muted hover:text-apple-text transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
