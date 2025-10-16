export default function FAQ() {
  const faqs = [
    {q:'Berapa lama pengerjaan?', a:'Tergantung scope. Rata-rata 7–30 hari kerja.'},
    {q:'Bagaimana garansinya?', a:'Garansi sesuai kontrak, plus dukungan maintenance.'},
    {q:'Apakah bisa integrasi pembayaran?', a:'Bisa: Midtrans, Xendit, Stripe (opsional).'
    }
  ]

  return (
    <section className="pt-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">FAQ</h3>
        <div className="mt-4 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="p-4 border rounded">
              <div className="font-semibold">{f.q}</div>
              <div className="text-sm text-gray-600 mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}