const WA_LINK = 'https://wa.me/6281911333006?text=Saya%20mau%20konsultasi%20gratis%20tentang%20web%20development'

export default function Contact() {
  return (
    <section id="contact" className="pt-8 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Hubungi Kami</h3>
        <p className="mt-2 text-gray-600">Siap diskusi kebutuhan Anda — Konsultasi Gratis.</p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href={WA_LINK} target="_blank" rel="noreferrer"
             className="px-6 py-3 bg-primary text-white rounded-md">Konsultasi Gratis via WhatsApp</a>

          <form className="w-full max-w-md bg-white border p-4 rounded">
            <input className="w-full border p-2 rounded mb-2" placeholder="Nama" />
            <input className="w-full border p-2 rounded mb-2" placeholder="Email / WA" />
            <textarea className="w-full border p-2 rounded mb-2" placeholder="Pesan singkat"></textarea>
            <button type="button" onClick={() => window.open(WA_LINK, '_blank')}
                    className="w-full px-4 py-2 bg-primary text-white rounded">Kirim via WhatsApp</button>
          </form>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          WhatsApp: <a href={WA_LINK} className="text-primary">081911333006</a> • Email: yourmail@domain.com
        </div>
      </div>
    </section>
  )
}