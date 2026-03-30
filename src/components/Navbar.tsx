"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-glass bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/logo.png"
            alt="Amaze Tech Solutions"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:inline text-[15px] font-bold tracking-tight text-apple-text">
            Amaze Tech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-apple-text/60 hover:text-apple-text transition-colors duration-300 link-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex text-[14px] font-semibold bg-teal text-white px-6 py-2 rounded-full hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(13,148,136,0.3)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] relative z-50"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[2px] bg-apple-text rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-apple-text rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-apple-text rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — full screen slide-in */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white/95 nav-glass" />
        <div className="relative z-10 px-6 pt-8 flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[28px] font-bold text-apple-text tracking-tight py-3 transition-all duration-500"
              style={{
                transform: open ? "translateX(0)" : "translateX(-40px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center mt-6"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transitionDelay: "350ms",
              transitionDuration: "500ms",
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
