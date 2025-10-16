export default function Pricing() {
  const packages = [
    {name:'Starter', price:'Rp 2.500.000', bullets:['Landing page', 'Responsif', '1 revisi']},
    {name:'Business', price:'Rp 5.000.000', bullets:['Website company', 'CMS', '2 revisi']},
    {name:'Custom', price:'Konsultasi', bullets:['Sistem bisnis', 'Integrasi', 'Support']}
  ]

  return (
    <section id="pricing" className="pt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Paket & Harga</h3>
        <p className="mt-2 text-gray-600">Pilih paket sesuai kebutuhan. Cicilan tersedia.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <div key={idx} className="p-6 border rounded-lg">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="mt-2 text-xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.bullets.map((b,i) => <li key={i}>• {b}</li>)}
              </ul>
              <div className="mt-4">
                <a href="https://wa.me/6281911333006?text=Mau%20tanya%20tentang%20paket%20" className="px-4 py-2(bg-primary) text-white rounded">Minta Penawaran</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}