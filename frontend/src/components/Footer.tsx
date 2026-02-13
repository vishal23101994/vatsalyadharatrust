"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import FloatingParticles from "@/components/FloatingParticles";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#6B0C0C] via-[#4E0808] to-[#2A0404] text-[#FFE9C4]">

      {/* Floating Aura Particles */}
      <FloatingParticles count={15} />

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,120,0.18),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* ===== BRAND SECTION ===== */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/vatsalya.png"
                alt="Vatsalya Logo"
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
              <h2 className="text-2xl font-serif font-semibold text-yellow-400">
                Vatsalya Dhara Trust (Regd.)
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-[#FFE8C6]/90">
              Rooted in the sacred philosophy of Seva, Vatsalya Dhara Trust
              works tirelessly to uplift communities through compassion,
              dignity, and sustainable humanitarian initiatives.
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vatsalya_dhara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div className="p-3 rounded-full bg-white/10 border border-yellow-400/30 group-hover:scale-110 transition duration-300">
                <FaInstagram size={18} className="text-yellow-400" />
              </div>
              <span className="text-sm group-hover:text-yellow-300 transition">
                Follow us on Instagram
              </span>
            </a>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6">
              Quick Links
            </h4>

            <div className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "What We Do", href: "/what-we-do" },
                { name: "Our Work", href: "/our-work" },
                { name: "Contact", href: "/contact" },
                { name: "Donate", href: "/donate" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block hover:text-yellow-300 transition duration-300 hover:translate-x-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ===== CONTACT + DONATE ===== */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6">
              Contact Information
            </h4>

            <div className="space-y-5 text-sm">

              <div className="flex gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <p className="leading-relaxed">
                  Vatsalya Bhawan, P-75, Street No. 5,
                  Bihari Colony Extension, Bihari Colony, Shahdara,
                  Delhi – 110032
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-yellow-400 mt-1" />
                <div>
                  <p>+91 9910987666</p>
                  <p>+91 9810900699</p>
                </div>
              </div>
            </div>

            {/* PREMIUM DONATE BUTTON */}
            <div className="mt-10">
              <Link
                href="/donate"
                className="group relative inline-flex items-center justify-center w-full px-10 py-4 rounded-2xl font-semibold text-[#4B1E00] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/40"
              >
                <span className="relative z-10">
                  ❤️ Support Our Sacred Mission
                </span>
                <span className="absolute inset-0 rounded-2xl bg-yellow-400 blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></span>
              </Link>
            </div>
          </div>
        </div>
        {/* ================= DIVIDER ================= */}
        <div className="mt-20 border-t border-yellow-500/20 pt-8 text-center text-sm text-[#FFE9C4]/80">
          {/* Trust Line + 80G Badge */}
          <div className="flex justify-center mb-6">
            {/* 80G Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                         bg-green-600/20 border border-green-400/40 
                         backdrop-blur-md text-green-200 text-sm font-medium 
                         shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              <CheckCircle size={16} className="text-green-300" />
              Eligible for 80G Tax Exemption
            </motion.div>
          </div>
          <p>
            © {new Date().getFullYear()} Vatsalya Dhara Trust • Serving Humanity
          </p>
          <p className="mt-3 text-yellow-400 tracking-widest font-semibold">
            सेवा • करुणा • मानवता
          </p>
        </div>
      </div>
    </footer>
  );
}
