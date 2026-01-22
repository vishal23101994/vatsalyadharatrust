"use client";

import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-[#4B1E00] to-[#2E1300] text-[#FFF3D6]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* TRUST INFO */}
        <div>
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Vatsalya Dhara Trust
          </h3>
          <p className="text-sm leading-relaxed text-[#FFE8B5]">
            Serving humanity through compassion, selfless service, and
            value-based initiatives in education, healthcare, animal care,
            and emergency support.
          </p>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <MapPin size={18} /> Address
          </h4>
          <p className="text-sm leading-relaxed text-[#FFE8B5]">
            Vatsalya Bhawan, P-75, Street Number 5,
            <br />
            Near Dua Chai Waale,
            <br />
            Bihari Colony Extension,
            <br />
            Bihari Colony, Shahdara,
            <br />
            Delhi – 110032
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Phone size={18} /> Contact
          </h4>

          <div className="flex flex-col gap-2 text-sm">
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
      <div className="border-t border-[#FFE8B5]/30 text-center py-4 text-xs text-[#FFE8B5]">
        © {new Date().getFullYear()} Vatsalya Dhara Trust • सेवा • करुणा • मानवता
      </div>
    </footer>
  );
}
