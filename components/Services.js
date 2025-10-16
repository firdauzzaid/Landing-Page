export default function Services() {
  return (
    <section id="services" className="pt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Layanan Kami</h2>
        <p className="mt-2 text-gray-600">Dari website company profile sampai sistem bisnis kompleks.</p>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold">Custom Website</h4>
          <p className="mt-2 text-sm text-gray-600">Company profile, landing page, website corporate.</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold">E-Commerce / Toko Online</h4>
          <p className="mt-2 text-sm text-gray-600">Toko online custom, payment gateway, admin panel.</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold">Web App & Business System</h4>
          <p className="mt-2 text-sm text-gray-600">POS, HR/Payroll, CRM, Inventory, Booking, dan lainnya.</p>
        </div>
      </div>
    </section>
  )
}