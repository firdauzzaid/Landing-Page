export default function Process() {
  const steps = [
    { title: "Konsultasi & Kebutuhan", desc: "Diskusi tujuan bisnis, scope & prioritas fitur." },
    { title: "Analisis & Perencanaan", desc: "Dokumentasi requirement, arsitektur teknis & timeline." },
    { title: "UI/UX Design", desc: "Wireframe ke high-fidelity mockup yang konversi-driven." },
    { title: "Development", desc: "Frontend & backend modular dengan clean code." },
    { title: "Feedback & Revisi", desc: "Perbaikan berdasarkan masukan untuk validasi UX." },
    { title: "Launching", desc: "Deployment + training pengguna untuk Go-Live." },
    { title: "Support", desc: "Pemeliharaan pasca-live & pengembangan lanjutan." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold text-gray-800">Proses Pengerjaan</h3>
        <p className="text-gray-500 mt-2">
          Workflow kerja yang transparan, terstruktur, dan berorientasi hasil.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Progress Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -z-10" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white shadow-sm hover:shadow-lg transition-all p-6 rounded-2xl border border-gray-100 text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full 
                bg-blue-50 text-blue-600 font-bold mb-4 group-hover:bg-blue-600 
                group-hover:text-white transition-all">
                {i + 1}
              </div>
              <h4 className="text-base font-semibold text-gray-800">{step.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-10 text-lg italic">
          Kami bekerja dengan pendekatan yang terbukti — <span className="text-blue-600 font-semibold">
            transparan, terukur, dan fokus pada hasil bisnis.
          </span>
        </p>
      </div>
    </section>
  );
}