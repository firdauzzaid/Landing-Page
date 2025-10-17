"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "6281911333006";
  const whatsappMessage = "Halo WebDev Pro, saya ingin konsultasi tentang pembuatan website.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-white text-xl font-semibold tracking-wide">
          WebDev <span className="text-blue-400">Pro</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#" className="text-gray-300 hover:text-white transition">Beranda</Link>
          <Link href="#services" className="text-gray-300 hover:text-white transition">Layanan</Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-white transition">Portfolio</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition">Harga</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition">Testimoni</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">Kontak</Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">☰</button>
      </div>
    </nav>
  );
}