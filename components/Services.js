import { FiGlobe, FiShoppingCart, FiSettings, FiDatabase, FiCpu, FiLayers } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiGlobe size={28} />,
      title: "Custom Website",
      desc: "Website company profile, portfolio & landing page profesional.",
    },
    {
      icon: <FiShoppingCart size={28} />,
      title: "E-Commerce & Toko Online",
      desc: "Solusi toko online custom dengan payment gateway & manajemen produk.",
    },
    {
      icon: <FiSettings size={28} />,
      title: "Web App & Business System",
      desc: "Aplikasi sistem operasional seperti POS, HR, CRM, Inventory, dll.",
    },
    {
      icon: <FiDatabase size={28} />,
      title: "SaaS Development",
      desc: "Bangun produk berbasis subscription (SaaS) siap scale & multi user.",
    },
    {
      icon: <FiCpu size={28} />,
      title: "AI & Automation",
      desc: "Integrasi chatbot AI, rekomendasi otomatis, dan workflow automation.",
    },
    {
      icon: <FiLayers size={28} />,
      title: "UI/UX Design",
      desc: "Design modern & profesional berbasis riset dan human-interface.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Layanan Kami</h2>
        <p className="text-gray-600 mt-2">
          Solusi teknologi untuk membantu bisnis tumbuh dan bekerja lebih efisien.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-4">
              {s.icon}
            </div>
            <h4 className="font-semibold text-lg text-gray-800">{s.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}