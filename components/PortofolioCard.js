import Image from "next/image";

export default function PortfolioCard({ category, image, title, desc, tech }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      
      {/* Image Section */}
      <div className="overflow-hidden relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full border"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}