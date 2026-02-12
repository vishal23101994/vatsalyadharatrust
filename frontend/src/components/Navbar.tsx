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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-amber-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      {/* Subtle golden glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.img
            src="/images/vatsalya.png"
            alt="Vatsalya Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg group-hover:scale-105 transition"
          />
          <span className="font-serif text-xl md:text-2xl font-semibold text-[#4B1E00] group-hover:text-amber-700 transition">
            Vatsalya Dhara Trust
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 font-medium relative">

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link key={link.href} href={link.href} className="relative">
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`relative px-3 py-1 rounded-full transition ${
                    active
                      ? "text-amber-700 font-semibold"
                      : "text-[#4B1E00] hover:text-amber-700"
                  }`}
                >
                  {link.label}

                  {/* Animated active background pill */}
                  {active && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-full bg-amber-100 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}

          {/* ================= DONATE BUTTON ================= */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/donate"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-amber-400/40 transition font-semibold"
            >
              <HeartHandshake size={18} />
              Donate
            </Link>
          </motion.div>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden text-[#4B1E00]"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>
      
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm z-[100] bg-gradient-to-b from-[#FFF6E5] to-[#FFE8C2] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-amber-200 bg-white/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/vatsalya.png"
                    className="w-8 h-8 object-contain"
                  />
                  <h2 className="font-serif text-lg font-semibold text-[#4B1E00]">
                    Vatsalya Dhara
                  </h2>
                </div>

                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-6 py-8 gap-4 flex-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`relative px-5 py-4 rounded-2xl transition-all duration-300 ${
                        active
                          ? "bg-white shadow-md text-amber-700 font-semibold"
                          : "text-[#4B1E00] hover:bg-white/70 hover:shadow-sm"
                      }`}
                    >
                      {link.label}

                      {/* Active indicator line */}
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-amber-500 rounded-r-full"></span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Section */}
              <div className="px-6 pb-8">
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-full font-semibold shadow-lg hover:shadow-orange-400/40 transition transform hover:scale-[1.03]"
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
