export default function Benefits() {
  const items = [
    'Results focused — KPI & tujuan bisnis prioritas',
    'Fast delivery — timeline realistis & on-time',
    'Clean code — maintainable & scalable',
    'Security first — praktik terbaik keamanan',
    'Transparent workflow — progress setiap minggu',
    'Long-term support & maintenance'
  ]

  return (
    <section className="pt-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Kenapa pilih kami</h3>
          <p className="mt-2 text-gray-600">Fokus kami adalah memberikan solusi yang langsung berdampak pada bisnis anda.</p>

          <ul className="mt-4 space-y-2">
            {items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-block mt-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">✓</span>
                <span className="text-sm">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-slate-50 rounded-lg">
          <p className="text-sm text-gray-600">Hasil nyata: peningkatan lead, efisiensi proses, dan pengurangan error manual.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="p-3 bg-white border rounded text-center">
              <p className="text-xs text-gray-500">Lead meningkat</p>
              <p className="font-bold">+30%</p>
            </div>
            <div className="p-3 bg-white border rounded text-center">
              <p className="text-xs text-gray-500">Waktu proses turun</p>
              <p className="font-bold">-40%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}