const WA_LINK = 'https://wa.me/6281911333006?text=Saya%20mau%20konsultasi%20gratis%20tentang%20web%20development'

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold">Siap Wujudkan Website Impian Anda?</h3>
        <p className="mt-2 text-gray-600">Konsultasi gratis untuk diskusi kebutuhan dan solusi terbaik untuk bisnis Anda</p>

        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Kiri: Info & WhatsApp */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow space-y-6">
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <h4 className="font-semibold text-lg">Chat via WhatsApp</h4>
              <p className="mt-1 text-sm">Respon cepat! Diskusi langsung dengan tim kami untuk konsultasi gratis.</p>
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                 className="mt-4 inline-block w-full text-center px-4 py-2 bg-white text-green-600 font-medium rounded">Konsultasi via WhatsApp</a>
            </div>

            <div className="text-left text-gray-700 space-y-2">
              <p><strong>Email:</strong> info@webdevpro.id</p>
              <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
              <p><strong>Lokasi:</strong> Jakarta, Indonesia</p>
              <p className="text-sm text-gray-500">
                <strong>Jam Operasional:</strong><br/>
                Senin - Jumat: 09.00 - 18.00 WIB<br/>
                Sabtu: 09.00 - 15.00 WIB<br/>
                *Chat WhatsApp tersedia 24/7
              </p>
            </div>
          </div>

          {/* Kanan: Form Kirim Pesan */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-4">Atau Kirim Pesan</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Lengkap *" className="w-full border p-2 rounded"/>
              <input type="email" placeholder="Email *" className="w-full border p-2 rounded"/>
              <input type="text" placeholder="Nomor WhatsApp *" className="w-full border p-2 rounded"/>
              <select className="w-full border p-2 rounded">
                <option value="">Pilih layanan</option>
                <option value="landing">Landing Page</option>
                <option value="website">Website Company</option>
                <option value="custom">Custom Web App</option>
              </select>
              <textarea placeholder="Pesan *" className="w-full border p-2 rounded"></textarea>
              <button type="button" onClick={() => window.open(WA_LINK, '_blank')}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}