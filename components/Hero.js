const WA_LINK = 'https://wa.me/6281911333006?text=Saya%20mau%20konsultasi%20gratis%20tentang%20web%20development'

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-white to-slate-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
            Bangun Website & Sistem Bisnis Profesional yang Menghasilkan
          </h1>
          <p className="mt-4 text-gray-700">
            Solusi web kustom (website, web app, sistem bisnis) untuk meningkatkan kredibilitas,
            efisiensi, dan penjualan. Desain modern, performa cepat, keamanan terjamin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noreferrer"
               className="px-5 py-3 bg-primary text-white rounded-md font-medium shadow hover:opacity-95">
              Konsultasi Gratis
            </a>
            <a href="#portfolio" className="px-5 py-3 border border-slate-300 rounded-md text-dark font-medium hover:bg-slate-50">
              Lihat Portfolio
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <span className="inline-block mr-4">✔ Kontrak & Garansi</span>
            <span className="inline-block mr-4">✔ Support setelah live</span>
            <span className="inline-block">✔ Keamanan & Clean Code</span>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {/* visual card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-slate-100 rounded-md flex items-center justify-center">
              <div className="text-center">
                <p className="text-primary font-semibold">Web & System</p>
                <h3 className="text-lg font-bold text-dark">Design • Build • Support</h3>
                <p className="mt-2 text-sm text-gray-600">Modern UI, clean code, fast performance</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded">
                <p className="text-xs text-gray-500">Waktu Pengerjaan</p>
                <p className="font-semibold">Mulai 7 hari</p>
              </div>
              <div className="p-3 bg-slate-50 rounded">
                <p className="text-xs text-gray-500">Support</p>
                <p className="font-semibold">Email & WA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}