export default function WhyNeed() {
  return (
    <section className="pt-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Kenapa Bisnis Perlu Website / Sistem Profesional?</h2>
        <p className="mt-3 text-gray-600">Tanpa solusi digital yang tepat, bisnis kehilangan peluang, waktu, dan pelanggan.</p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold">Tidak ditemukan online</h3>
          <p className="text-sm text-gray-600 mt-2">Pelanggan sulit menemukan bisnis Anda tanpa website yang jelas.</p>
        </div>
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold">Operasional manual</h3>
          <p className="text-sm text-gray-600 mt-2">Banyak pekerjaan masih manual, memakan waktu dan salah.</p>
        </div>
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold">Tidak terukur</h3>
          <p className="text-sm text-gray-600 mt-2">Sulit mengukur performa penjualan tanpa sistem pelaporan.</p>
        </div>
      </div>
    </section>
  )
}