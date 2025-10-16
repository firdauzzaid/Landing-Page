export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-lg">YourBrand</div>
          <div className="text-sm mt-2 text-slate-300">Jasa pembuatan website & sistem bisnis. Konsultasi gratis.</div>
        </div>

        <div className="text-sm text-slate-300">
          <div>WhatsApp: 081911333006</div>
          <div>Email: yourmail@domain.com</div>
          <div className="mt-2">© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}