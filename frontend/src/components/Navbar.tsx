"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
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
                       bg-gradient-to-r from-[#FFF8E7]/90 via-white/90 to-[#FFF3D6]/90
                       border-b border-amber-200
                       shadow-[0_10px_40px_rgba(180,120,40,0.15)]">

      {/* Golden glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] 
                      bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ================= BRAND ================= */}
        <Link href="/" className="flex items-center gap-4 group">

          <motion.img
            src="/images/vatsalya.png"
            alt="Vatsalya Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-lg"
          />

          <div className="leading-tight">
            <motion.h1
              whileHover={{ scale: 1.02 }}
              className="font-serif text-l md:text-1xl lg:text-2xl 
                         font-semibold text-[#4B1E00] tracking-wide"
            >
              Vatsalya Dhara Trust
            </motion.h1>

            <span className="text-xs md:text-sm text-amber-700 tracking-widest">
              (Regd.)
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link key={link.href} href={link.href} className="relative group">

                <span
                  className={`transition-colors duration-300 ${
                    active
                      ? "text-amber-700 font-semibold"
                      : "text-[#4B1E00] group-hover:text-amber-700"
                  }`}
                >
                  {link.label}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-amber-600 
                              transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* ================= DONATE BUTTON ================= */}
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/donate"
              className="flex items-center gap-2 
                         bg-gradient-to-r from-amber-500 to-orange-500 
                         text-white px-7 py-3 rounded-full 
                         shadow-lg hover:shadow-orange-400/40 
                         transition font-semibold"
            >
              <HeartHandshake size={18} />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
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
                      className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                        active
                          ? "bg-white shadow-md text-amber-700 font-semibold"
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
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 
                             text-white py-4 rounded-full font-semibold shadow-lg"
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
