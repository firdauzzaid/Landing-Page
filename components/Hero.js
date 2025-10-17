const WA_LINK = 'https://wa.me/6281911333006?text=Saya%20mau%20konsultasi%20gratis%20tentang%20web%20development'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#07132a] via-[#0b3b78] to-[#0a768c] opacity-95"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Subtle texture / grid (low contrast) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.02),transparent)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-20">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column: copy */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <p className="inline-block text-sm font-medium bg-white/6 text-slate-100 px-3 py-1 rounded-full mb-4">
                Custom Web Development Services
              </p>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Build a High-Performance Website for Your Business
              </h1>

              <p className="mt-5 text-slate-200 text-lg">
                We deliver custom websites and business systems designed to increase credibility, improve operational efficiency,
                and drive revenue for small businesses and startups. Professional design, secure code, and transparent process.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] px-6 py-3 text-white font-medium shadow-lg hover:opacity-95"
                  aria-label="Konsultasi Gratis via WhatsApp"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-white/90 bg-white/3 hover:bg-white/5"
                >
                  Lihat Portfolio
                </a>
              </div>

              {/* Trust metrics */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-200">
                <div>
                  <div className="text-2xl font-semibold">50+</div>
                  <div className="text-slate-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">98%</div>
                  <div className="text-slate-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">5★</div>
                  <div className="text-slate-300">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: product preview card */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Mock device frame */}
              <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/6 p-6 shadow-2xl">
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                  {/* Top bar */}
                  <div className="h-10 flex items-center px-3 bg-gradient-to-r from-slate-800/40 to-transparent">
                    <div className="w-10 h-2 rounded bg-white/20 mr-3" />
                    <div className="flex-1 h-2 rounded bg-white/10" />
                  </div>

                  {/* Content area (cards list) */}
                  <div className="p-4 space-y-3">
                    <div className="h-14 bg-gradient-to-r from-[#0f172a] to-[#07132a] rounded-md flex items-center justify-between px-4">
                      <div className="text-sm text-white/90 font-semibold">Dashboard Overview</div>
                      <div className="text-xs text-slate-400">Live</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gradient-to-br from-[#061226] to-[#04223b] rounded text-white/90 text-sm">
                        Sales
                        <div className="mt-2 font-bold text-lg">+30%</div>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-[#04223b] to-[#06324b] rounded text-white/90 text-sm">
                        Orders
                        <div className="mt-2 font-bold text-lg">1.2k</div>
                      </div>
                    </div>

                    <div className="h-10 bg-gradient-to-r from-[#05203a] to-[#043049] rounded-md flex items-center px-4 text-sm text-slate-300">
                      Recent Activity
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-[#06b6d4]/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}