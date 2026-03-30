export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a1a1f] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(13,148,136,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08),_transparent_60%)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5">
          <span className="text-teal-400 text-sm font-medium">
            TMS Back-Office Excellence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Your TMS.</span>
          <br />
          <span className="gradient-text">Our Expertise.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We work with <span className="text-white font-semibold">your existing TMS software</span> — no changes needed. 
          Expert back-office operations that keep your trucks moving and your paperwork flawless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center justify-center gap-2"
          >
            Get a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl text-base font-semibold text-slate-300 border border-white/10 hover:border-teal-500/30 hover:bg-white/5 transition-all inline-flex items-center justify-center gap-2"
          >
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-teal-400">24/7</div>
            <div className="text-xs text-slate-500 mt-1">Operations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-teal-400">99%</div>
            <div className="text-xs text-slate-500 mt-1">Accuracy</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-teal-400">50%</div>
            <div className="text-xs text-slate-500 mt-1">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
