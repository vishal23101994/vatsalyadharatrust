"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import FloatingParticles from "@/components/FloatingParticles";
import { MapPin, Phone, CheckCircle, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden 
      bg-gradient-to-br from-[#5A0B0B] via-[#3E0707] to-[#1B0202] 
      text-[#FFE9C4]">

      <FloatingParticles count={12} />

      {/* Soft golden aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,120,0.18),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP HEADING ================= */}
        <div className="mb-12">

          <div className="flex items-center gap-4">
            <img
              src="/images/vatsalya.png"
              alt="Vatsalya Logo"
              className="w-14 h-14 object-contain drop-shadow-lg"
            />
            <h2 className="text-2xl md:text-2xl font-serif font-semibold text-yellow-400 tracking-wide">
              Vatsalya Dhara Trust (Regd.)
            </h2>
          </div>

          <p className="mt-2 text-sm md:text-base text-[#FFE9C4]/80 whitespace-nowrap overflow-hidden text-ellipsis">
            Rooted in the sacred philosophy of Seva — uplifting lives through compassion, dignity & sustainable humanitarian service.
          </p>

        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h4 className="text-yellow-400 font-semibold mb-6 tracking-wide">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-sm mb-8">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Mission", href: "/our-mission" },
                { name: "Our Work", href: "/our-work" },
                { name: "Contact", href: "/contact" },
                { name: "Donate", href: "/donate" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="relative w-fit hover:text-yellow-300 transition duration-300 group"
                >
                  {item.name}

                  {/* Premium underline animation */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/vatsalya_dhara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm group"
            >
              <FaInstagram size={16} className="text-yellow-400" />
              <span className="group-hover:text-yellow-300 transition">
                Follow us on Instagram
              </span>
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-sm space-y-6">

            {/* Main Office */}
            <div className="flex gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <div>
                <p className="font-semibold text-yellow-300">Head Office:</p>
                <p>
                  Vatsalya Bhawan, P-75, Street No. 5,  
                  Bihari Colony Extension, Bihari Colony, Shahdara, Delhi – 110032
                </p>
              </div>
            </div>

            {/* Registered Office */}
            <div className="flex gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <div>
                <p className="font-semibold text-yellow-300">Registered Office:</p>
                <p>
                  D 49-B, Lalita Marg, Shakarpur Extension,  
                  Laxmi Nagar, Delhi – 110092
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone size={18} className="text-yellow-400 mt-1" />
              <div>
                <p>+91 9910987666</p>
                <p>+91 9810900699</p>
              </div>
            </div>
          </div>
        </div>
        {/* CENTER SUPPORT SECTION */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Support Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/donate"
              className="flex items-center gap-2
                bg-gradient-to-r from-amber-500 to-orange-500
                text-white px-6 py-2 rounded-full
                font-semibold transition-all duration-300
                hover:shadow-lg hover:shadow-orange-300/40"
            >
              <HeartHandshake size={17} />
              Support Our Mission
            </Link>
          </motion.div>

          {/* 80G Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-lg"
          >
            <CheckCircle size={26} strokeWidth={2.5} className="text-emerald-400 drop-shadow-md" />

            <span className="text-[#FFE9C4]/80">
              <span className="font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 
                drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                Eligible for 80G Tax Exemption
              </span>
            </span>
          </motion.div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-yellow-500/30 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Vatsalya Dhara Trust • Serving Humanity
          </p>

          <p className="mt-3 text-yellow-400 tracking-widest font-semibold text-xs">
            सेवा • करुणा • मानवता
          </p>

        </div>

      </div>
    </footer>
  );
}
