"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-lg
        border-b border-amber-200
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <motion.img
            src="/images/vatsalya.png"
            alt="Vatsalya Dhara Trust Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-md"
          />
          <span className="font-serif text-xl md:text-2xl font-semibold text-[#4B1E00]">
            Vatsalya Dhara Trust
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <motion.div key={link.href} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className={`
                    relative px-1 transition
                    ${active
                      ? "text-amber-700 font-semibold"
                      : "text-[#4B1E00] hover:text-amber-700"}
                  `}
                >
                  {link.label}

                  {/* underline */}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="
                        absolute -bottom-1 left-0 right-0
                        h-[2px] rounded-full
                        bg-amber-600
                      "
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}

          {/* DONATE */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/donate"
              className="
                bg-gradient-to-r from-amber-500 to-amber-600
                text-white px-5 py-2 rounded-full
                shadow-lg hover:shadow-xl transition
                font-semibold
              "
            >
              Donate
            </Link>
          </motion.div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#4B1E00]"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              exit={{ y: -60 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/95 backdrop-blur-lg
                rounded-b-3xl
                shadow-xl
                px-6 pt-6 pb-10
              "
            >
              {/* CLOSE */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-5 text-lg font-medium">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`
                        transition
                        ${active
                          ? "text-amber-700 font-semibold"
                          : "text-[#4B1E00] hover:text-amber-700"}
                      `}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* DONATE (MOBILE) */}
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4 text-center
                    bg-gradient-to-r from-amber-500 to-amber-600
                    text-white py-3 rounded-full
                    font-semibold shadow-lg
                  "
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
