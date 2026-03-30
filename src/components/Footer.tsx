export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="text-white font-bold">Amaze Tech</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Technology-driven TMS back-office services for trucking companies
              across North America.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  PRO Number Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Customs Documentation
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  EDI Tracking
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Freight Bill Auditing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Claims Processing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#industries" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="https://amazetech.net" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  Amaze Tech Main Site
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-500">
                📧 sales@amazetech.net
              </li>
              <li className="text-sm text-slate-500">
                🌐 amazetech.net
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Amaze Tech Solutions Pvt Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
