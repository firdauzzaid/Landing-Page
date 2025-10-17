// export default function Footer() {
//   return (
//     <footer className="mt-12 bg-slate-800 text-white py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-6">
//         <div>
//           <div className="font-bold text-lg">YourBrand</div>
//           <div className="text-sm mt-2 text-slate-300">Jasa pembuatan website & sistem bisnis. Konsultasi gratis.</div>
//         </div>

//         <div className="text-sm text-slate-300">
//           <div>WhatsApp: 081911333006</div>
//           <div>Email: yourmail@domain.com</div>
//           <div className="mt-2">© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
//         </div>
//       </div>
//     </footer>
//   )
// }

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">WebDev Pro</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Professional website development partner for small businesses and startup founders.
            We build websites that convert and scale your business.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-medium mb-4 tracking-wide">Navigation</h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-white transition duration-200 hover:pl-1 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-medium mb-4 tracking-wide">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              WhatsApp:{" "}
              <a href="https://wa.me/628123456789" className="hover:text-white transition">
                +62 812-3456-789
              </a>
            </li>
            <li>Email: support@webdevpro.com</li>
            <li>Location: Indonesia</li>
          </ul>
          {/* Social Media */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-white transition text-sm">LinkedIn</a>
            <a href="#" className="hover:text-white transition text-sm">Instagram</a>
            <a href="#" className="hover:text-white transition text-sm">GitHub</a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-medium mb-4 tracking-wide">Work With Us</h3>
          <p className="text-sm mb-5 text-slate-400">
            Get a free website consultation for your business today.
          </p>
          <a
            href="https://wa.me/628123456789?text=Halo%20WebDev%20Pro,%20saya%20ingin%20konsultasi%20tentang%20project%20website."
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-3 px-5 rounded transition duration-300 shadow hover:shadow-lg"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800 mt-14 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} WebDev Pro. All rights reserved.
      </div>
    </footer>
  );
}