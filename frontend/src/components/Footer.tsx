"use client";

import Link from "next/link";
import { Phone, MapPin, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#4B1E00] via-[#3A1700] to-[#2E1300] text-[#FFF3D6]">

      {/* soft glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,200,120,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">

        {/* TRUST INFO */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/vatsalya.png"
              alt="Vatsalya Dhara Trust Logo"
              className="w-12 h-12 object-contain drop-shadow-lg"
            />
            <h3 className="font-serif text-2xl font-semibold">
              Vatsalya Dhara Trust
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-[#FFE8B5]">
            Serving humanity through compassion, selfless service, and
            value-based initiatives in education, healthcare, animal care,
            and emergency support.
          </p>

          <div className="mt-4 flex items-center gap-2 text-amber-300 text-sm">
            <HeartHandshake size={16} />
            Serving with Love & Responsibility
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-amber-200">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "What We Do", href: "/what-we-do" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 text-amber-200">
            <MapPin size={18} /> Address
          </h4>

          <p className="text-sm leading-relaxed text-[#FFE8B5]">
            Vatsalya Bhawan, P-75, Street Number 5,
            <br />
            Near Dua Chai Waale,
            <br />
            Bihari Colony Extension,
            <br />
            Shahdara, Delhi – 110032
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 text-amber-200">
            <Phone size={18} /> Contact
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:+919910987666"
              className="hover:text-white transition"
            >
              +91 9910987666
            </a>
            <a
              href="tel:+919810900699"
              className="hover:text-white transition"
            >
              +91 9810900699
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-[#FFE8B5]/20 py-6 text-center text-xs text-[#FFE8B5]">
        <p>
          © {new Date().getFullYear()} Vatsalya Dhara Trust
        </p>
        <p className="mt-1 tracking-wide text-amber-300">
          सेवा • करुणा • मानवता
        </p>
      </div>
    </footer>
  );
}
