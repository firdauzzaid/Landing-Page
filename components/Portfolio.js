// export default function Portfolio() {
//   // placeholders - replace with real projects
//   const projects = [
//     {title: 'Company Profile - PT X', tag:'Website'},
//     {title: 'POS System - Toko Y', tag:'System'},
//     {title: 'Landing Page - Produk Z', tag:'Landing'},
//     {title: 'Marketplace - Brand A', tag:'E-Commerce'},
//     {title: 'CRM - Agency B', tag:'Web App'},
//     {title: 'Inventory - Retail C', tag:'System'}
//   ]

//   return (
//     <section id="portfolio" className="pt-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h3 className="text-2xl font-semibold">Portfolio</h3>
//         <p className="mt-2 text-gray-600">Contoh project yang telah kami kerjakan.</p>

//         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {projects.map((p, idx) => (
//             <div key={idx} className="p-4 border rounded-lg hover:shadow">
//               <div className="h-40 bg-slate-100 rounded mb-3 flex items-center justify-center text-sm text-gray-500">
//                 Preview Image
//               </div>
//               <h4 className="font-semibold">{p.title}</h4>
//               <p className="text-xs text-gray-500 mt-1">{p.tag}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6">
//           <a href="#contact" className="px-5 py-3 bg-primary text-white rounded-md">Minta Penawaran</a>
//         </div>
//       </div>
//     </section>
//   )
// }

import PortfolioCard from "../components/PortofolioCard";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PortfolioCard
        category="E-Commerce"
        image="/images/ecommerce.jpg"
        title="E-Commerce Fashion Brand"
        desc="Platform toko online lengkap dengan payment gateway, inventory management, dan admin dashboard."
        tech={["React", "Node.js", "MongoDB", "Stripe"]}
      />
      <PortfolioCard
        category="Company Profile"
        image="/images/company.jpg"
        title="Corporate Company Profile"
        desc="Website profesional untuk perusahaan konstruksi."
        tech={["Next.js", "Tailwind CSS", "Sanity CMS"]}
      />
    </div>
  );
}