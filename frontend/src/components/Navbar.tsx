"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl
      bg-gradient-to-r from-[#FFF9EF]/95 via-white/95 to-[#FFF4DA]/95
      border-b border-amber-200/70
      shadow-[0_6px_25px_rgba(180,120,40,0.08)]">

      {/* Subtle spiritual glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]
        bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ================= BRAND ================= */}
        <Link href="/" className="flex items-center gap-3 group">

          <motion.img
            src="/images/vatsalya.png"
            alt="Vatsalya Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-11 h-11 md:w-12 md:h-12 object-contain drop-shadow-sm"
          />

          <h1 className="font-serif text-lg md:text-xl lg:text-2xl
                         font-semibold text-[#4B1E00]
                         tracking-wide group-hover:text-amber-700 transition">
            Vatsalya Dhara Trust
          </h1>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link key={link.href} href={link.href} className="relative group">

                <span
                  className={`transition-all duration-300 ${
                    active
                      ? "text-amber-700 font-semibold"
                      : "text-[#4B1E00] group-hover:text-amber-700"
                  }`}
                >
                  {link.label}
                </span>

                {/* Elegant underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] 
                  bg-amber-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* ================= DONATE BUTTON ================= */}
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
              Donate
            </Link>
          </motion.div>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-[#4B1E00]"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm z-[100]
              bg-gradient-to-b from-[#FFF6E5] to-[#FFE8C2]
              shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-amber-200">
                <h2 className="font-serif text-lg font-semibold text-[#4B1E00]">
                  Vatsalya Dhara Trust
                </h2>
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col px-6 py-8 gap-5 flex-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-5 py-4 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-white shadow-sm text-amber-700 font-semibold"
                          : "text-[#4B1E00] hover:bg-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="px-6 pb-8">
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="block text-center
                    bg-gradient-to-r from-amber-500 to-orange-500
                    text-white py-3 rounded-full font-semibold"
                >
                  ❤️ Support & Donate
                </Link>

                <div className="text-center text-xs text-amber-800 mt-6 tracking-widest">
                  सेवा • करुणा • मानवता
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
