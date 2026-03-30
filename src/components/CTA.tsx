export default function CTA() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5 p-12 md:p-16 text-center overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to optimize your{" "}
              <span className="gradient-text">TMS operations?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation and see how Amaze Tech can transform your
              back-office — without changing your software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@amazetech.net"
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:sales@amazetech.net"
                className="px-8 py-4 rounded-xl text-base font-semibold text-slate-300 border border-white/10 hover:border-teal-500/30 hover:bg-white/5 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
