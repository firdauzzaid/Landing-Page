export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      price: 'Mulai dari Rp 5.000.000',
      monthly: 'atau Rp 500.000/bulan (12x)',
      bullets: [
        'Company Profile / Landing Page',
        'Design Custom UI/UX',
        'Responsive Mobile & Desktop',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Free Domain & Hosting 1 Tahun',
        'Free SSL Certificate',
        'Training Penggunaan',
        '1 Bulan Support Gratis'
      ]
    },
    {
      name: 'Business',
      price: 'Mulai dari Rp 15.000.000',
      monthly: 'atau Rp 1.500.000/bulan (12x)',
      popular: true,
      bullets: [
        'E-Commerce / Web Application',
        'Custom Features & Functionality',
        'Admin Dashboard',
        'Payment Gateway Integration',
        'User Management System',
        'Email Notification System',
        'Advanced SEO Optimization',
        'Free Domain & Hosting 1 Tahun',
        'Training & Documentation',
        '3 Bulan Support Gratis'
      ]
    },
    {
      name: 'Custom',
      price: 'Hubungi Kami',
      bullets: [
        'Custom Business System (POS, CRM, ERP, dll)',
        'Unlimited Custom Features',
        'Multi-role User Management',
        'Advanced Analytics & Reporting',
        'Third-party Integration',
        'API Development',
        'Scalable Architecture',
        'Dedicated Project Manager',
        'Training & Full Documentation',
        '6 Bulan Support & Maintenance'
      ]
    }
  ]

  return (
    <section id="pricing" className="pt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Paket Harga</h3>
        <p className="mt-2 text-gray-600">
          Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda
        </p>
        <p className="mt-2 text-green-600">✓ Cicilan tersedia untuk semua paket</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 border rounded-lg ${p.popular ? 'border-blue-500 shadow-lg' : ''}`}
            >
              {p.popular && (
                <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full inline-block mb-2">
                  PALING POPULER
                </span>
              )}
              <h4 className="font-semibold">{p.name}</h4>
              <p className="mt-2 text-xl font-bold">{p.price}</p>
              {p.monthly && <p className="text-gray-500 text-sm">{p.monthly}</p>}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="https://wa.me/6281911333006?text=Mau%20tanya%20tentang%20paket%20"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Minta Penawaran
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 text-left text-sm text-gray-700 rounded">
          <h5 className="font-semibold mb-2">Fleksibilitas Pembayaran</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cicilan 0% hingga 12 bulan tersedia untuk semua paket</li>
            <li>Pembayaran bertahap per milestone untuk project besar</li>
            <li>Konsultasi gratis untuk custom quote sesuai kebutuhan spesifik Anda</li>
          </ul>
        </div>
      </div>
    </section>
  )
}