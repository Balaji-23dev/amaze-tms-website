"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center font-bold text-white text-lg">
            A
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight">
              Amaze Tech
            </span>
            <span className="block text-[10px] text-teal-400 -mt-1 tracking-widest uppercase">
              TMS Solutions
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">
            Services
          </a>
          <a href="#industries" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">
            Industries
          </a>
          <a href="#about" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">
            About
          </a>
          <a href="#testimonials" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">
            Testimonials
          </a>
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-4">
          <a href="#services" className="block text-slate-300 hover:text-teal-400" onClick={() => setOpen(false)}>Services</a>
          <a href="#industries" className="block text-slate-300 hover:text-teal-400" onClick={() => setOpen(false)}>Industries</a>
          <a href="#about" className="block text-slate-300 hover:text-teal-400" onClick={() => setOpen(false)}>About</a>
          <a href="#testimonials" className="block text-slate-300 hover:text-teal-400" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" className="btn-primary block text-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white" onClick={() => setOpen(false)}>Get a Quote</a>
        </div>
      )}
    </nav>
  );
}
