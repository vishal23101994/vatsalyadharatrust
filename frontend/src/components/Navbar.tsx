"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-white/80
      border-b border-amber-200
      shadow-sm
    ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <motion.img
            src="/images/vatsalya.png"
            alt="Vatsalya Dhara Trust Logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              w-10 h-10 md:w-11 md:h-11
              object-contain
              drop-shadow-md
            "
          />

          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-serif
              text-xl md:text-2xl
              font-semibold
              text-[#4B1E00]
              tracking-wide
            "
          >
            Vatsalya Dhara Trust
          </motion.span>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base font-medium">

          <motion.div whileHover={{ y: -2 }}>
            <Link
              href="/"
              className="text-[#4B1E00] hover:text-amber-700 transition"
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/donate"
              className="
                bg-gradient-to-r from-amber-500 to-amber-600
                text-white
                px-5 py-2
                rounded-full
                shadow-lg
                hover:shadow-xl
                transition
                font-semibold
              "
            >
              Donate
            </Link>
          </motion.div>

        </nav>
      </div>
    </header>
  );
}
