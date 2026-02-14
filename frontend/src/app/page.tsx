"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import {
  Heart,
  Users,
  Truck,
  BookOpen,
  Activity,
  Layers,
  Phone,
  ClipboardCopy,
  Download,
  BookMarked,
  Gift,
} from "lucide-react";

/**
 * Vatsalya Dhara Page (English Version)
 * - Summary content + Posters input integrated
 * - Polished Donation Section
 * - QR at /public/images/vatsalya_qr.jpg
 */

export default function VatsalyaDharaPage() {
  const [copyMsg, setCopyMsg] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const donation = {
    accountName: "VATSALYA DHARA TRUST (REGD.)",
    accountNumber: "925010022258145",
    ifsc: "UTIB0005638",
    pan: "AABTV5574B",
    bankName: "AXIS BANK Ltd.",
    branch: "Bholanath Nagar, Delhi - 110032",
    qrPath: "/images/vatsalya_qr.jpeg",
    upiId: "",
  };

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    { src: "/videos/5.mp4"},
    { src: "/videos/6.mp4"},
    { src: "/videos/7.mp4"},
    { src: "/videos/8.mp4"},
    { src: "/videos/9.mp4"},
    { src: "/videos/10.mp4"},
  ];


  const copy = async (text: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMsg(`${label ?? "Copied"} ✓`);
      setTimeout(() => setCopyMsg(null), 2200);
    } catch {
      setCopyMsg("Copy failed");
      setTimeout(() => setCopyMsg(null), 2200);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAE3A3]/30 to-[#FFF8E7] text-[#4B1E00]">
      
      <header className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Golden light gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 via-transparent to-amber-400/20 animate-pulse" />
        </div>


        {/* Floating Golden Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.3),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block">Serving Humanity</span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block text-amber-400"
            >
              <span className="text-xl md:text-3xl xl:text-4xl font-medium block">
                With
              </span>

              <span className="block">
                "Compassion & Care"
              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Food • Healthcare • Ambulance • Education • Gau Seva
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.08 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(255,165,0,0.0)",
                  "0 0 25px rgba(255,165,0,0.7)",
                  "0 0 0px rgba(255,165,0,0.0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
            >
              ❤️ Donate Now
            </motion.a>

            <a
              href="/what-we-do"
              className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition"
            >
              Explore Our Work
            </a>
          </motion.div>

          {/* Trust Line + 80G Badge */}
          <div className="mt-8 flex flex-col items-center gap-4">

            <div className="text-sm text-gray-300 tracking-wide">
              Registered Trust • Transparent • Community Driven
            </div>

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
        </div>
      </header>

      {/* ================= IMPACT STATS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-10 text-center">

          {[
            { number: "1,00,000+", label: "Meals Served" },
            { number: "2,000+", label: "Medical Beneficiaries" },
            { number: "1,000+", label: "Students Supported" },
            { number: "24/7", label: "Ambulance Service" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 shadow-lg border border-amber-200 hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-bold text-amber-700 mb-2">
                {item.number}
              </h3>
              <p className="text-[#3B1D00]/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SACRED HORIZONTAL SCROLL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF1C1] to-transparent py-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10"
        >
          Moments of Seva & Compassion
        </motion.h2>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFF1C1] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFF1C1] to-transparent z-10" />

        <motion.div
          className="flex gap-8 w-max px-8"
          animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...Array(2)].map((_, loopIndex) =>
            [1,2,3,4,5,6,7,8,9].map((imgNo) => (
              <motion.div
                key={`${loopIndex}-${imgNo}`}   // ✅ UNIQUE KEY
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative shrink-0 cursor-zoom-in"
                onClick={() => setZoomImage(`/images/vatsalya/${imgNo}.jpeg`)}
              >
                <img
                  src={`/images/vatsalya/${imgNo}.jpeg`}
                  alt="Vatsalya Dhara Seva"
                  className="
                    w-[260px] md:w-[300px]
                    h-[380px] md:h-[440px]
                    object-cover
                    rounded-3xl
                    shadow-2xl
                    border border-amber-200
                  "
                />

                {/* spiritual overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/25 to-transparent" />
              </motion.div>
            ))
          )}
        </motion.div>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed Seva"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="
                max-w-[90vw]
                max-h-[90vh]
                rounded-2xl
                shadow-2xl
                border border-amber-300
                cursor-zoom-out
              "
            />
          </motion.div>
        )}
      </section>

      {/* SEVA IN MOTION – SACRED VIDEO SCROLL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF1C1] to-transparent py-32">

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFF1C1] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFF1C1] to-transparent z-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10"
        >
          Glimps of Vatsalya Dhara Trust
        </motion.h2>

        <motion.div
          className="flex gap-8 w-max px-8"
          animate={isVideoPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          onMouseEnter={() => setIsVideoPaused(true)}
          onMouseLeave={() => setIsVideoPaused(false)}
        >

          {[...Array(2)].map((_, loopIndex) =>
            videos.map((video, index) => (
              <motion.div
                key={`${loopIndex}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="relative shrink-0 w-[320px] h-[200px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-amber-200"
                onClick={() => setActiveVideo(index)}
              >
                {/* Thumbnail video (muted preview only) */}
                <video
                  src={video.src}
                  muted
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* play icon */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    ▶
                  </div>
                </motion.div>
              </motion.div>
            ))
          )}
        </motion.div>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl md:max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* VIDEO PLAYER */}
              <video
                src={videos[activeVideo].src}
                controls
                autoPlay
                playsInline
                className="
                  w-full
                  max-h-[60vh]
                  object-contain
                  rounded-2xl
                  shadow-2xl
                  bg-black
                "
              />

              {/* NAVIGATION */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() =>
                    setActiveVideo(
                      (activeVideo - 1 + videos.length) % videos.length
                    )
                  }
                  className="bg-amber-100 px-5 py-2 rounded-full font-medium"
                >
                  ⟵ Previous
                </button>

                <button
                  onClick={() =>
                    setActiveVideo((activeVideo + 1) % videos.length)
                  }
                  className="bg-amber-100 px-5 py-2 rounded-full font-medium"
                >
                  Next ⟶
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>


      <main className="max-w-6xl mx-auto px-6 pb-20 space-y-16">

        {/* MISSION */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Heart size={44} className="text-rose-500 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                Our Mission
              </h2>
              <p className="text-[#4B1E00]/90 text-lg leading-relaxed text-justify">
                To promote humanity, compassion, and value-based living through 
                impactful service projects. We support those in need with food, 
                healthcare, education, animal care, emergency help, and shelter 
                for the elderly and orphans.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              img: "/images/youth.jpg",
              icon: <Users size={26} className="text-amber-600" />,
              title: "Youth Empowerment",
              desc: "Leadership, discipline, and value-based education programs for youth.",
            },
            {
              img: "/images/education.jpeg",
              icon: <BookOpen size={26} className="text-indigo-600" />,
              title: "Education Support",
              desc: "Free education, book distribution drives and preservation of Jain literature.",
            },
            {
              img: "/images/healthcamp.jpeg",
              icon: <Activity size={26} className="text-green-600" />,
              title: "Free Health Camps",
              desc: "Medical checkups, free medicines and healthcare awareness programs.",
            },
            {
              img: "/images/ambulance.jpeg",
              icon: <Truck size={26} className="text-blue-600" />,
              title: "Ambulance Service",
              desc: "Quick-response ambulance assistance ensuring timely medical support.",
            },
            {
              img: "/images/animals.jpeg",
              icon: <Layers size={26} className="text-amber-700" />,
              title: "Gau Seva & Animal Care",
              desc: "Cow shelters, bird feeding, and compassion for all living beings.",
            },
            {
              img: "/images/elderly.jpeg",
              icon: <Heart size={26} className="text-rose-600" />,
              title: "Elderly & Orphan Support",
              desc: "Shelter, dignity and regular care for senior citizens and orphaned children.",
            },
            {
              img: "/images/kanyadaan1.jpeg",
              icon: <Gift size={26} className="text-pink-600" />,
              title: "Nirdhan Kanyaa Ka Vivah",
              desc: "Supporting dignified marriages for underprivileged daughters with essential arrangements.",
            },
            {
              img: "/images/library1.jpeg",
              icon: <BookOpen size={26} className="text-purple-600" />,
              title: "Maa Jinvani Sangrahlaya",
              desc: "A dedicated library initiative providing spiritual and educational resources to needy children.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl 
                         border border-amber-200 shadow-lg 
                         hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl mb-5 
                           group-hover:scale-105 transition duration-500"
              />

              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              <p className="text-[#4B1E00]/85 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.section>


        {/* FEATURE SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 p-10 rounded-3xl shadow-xl border border-amber-200 flex flex-col md:flex-row gap-10 items-center overflow-hidden"
        >
          <motion.img
            src="/images/vatsalya.png"
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-40 h-40 object-contain drop-shadow-xl"
          />

          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-serif font-semibold mb-3">
              Taking Steps Towards Humanity…
            </h3>
            <p className="text-lg text-[#4B1E00]/90 leading-relaxed text-justify">
              Through multiple initiatives—food distribution, health camps, cow shelter support,
              education projects and emergency assistance—Vatsalya Dhara continues to help people 
              live with dignity. Even small contributions make a great difference.
            </p>

            <div className="mt-4 flex gap-3 flex-wrap">
              <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">Annadaan</span>
              <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">Health Camps</span>
              <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">Gau Seva</span>
              <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">Ambulance</span>
            </div>
          </div>
        </motion.section>

        {/* DONATION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-2xl shadow-xl border border-amber-200"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-6">
            Support Vatsalya Dhara Trust
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* BANK TRANSFER */}
            <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                Bank Transfer
              </h4>

              <div className="text-[#4B1E00] space-y-3">
                <p className="font-semibold">{donation.accountName}</p>

                {/* Account Number */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">Account Number</p>
                    <p className="font-mono font-semibold">{donation.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.accountNumber, "Account Number")}
                    className="ml-auto bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2 hover:scale-105 transition"
                  >
                    <ClipboardCopy size={16} /> Copy
                  </button>
                </div>

                {/* IFSC */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">IFSC Code</p>
                    <p className="font-mono font-semibold">{donation.ifsc}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.ifsc, "IFSC Code")}
                    className="ml-auto bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2 hover:scale-105 transition"
                  >
                    <ClipboardCopy size={16} /> Copy
                  </button>
                </div>
                {/* IFSC */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">PAN</p>
                    <p className="font-mono font-semibold">{donation.pan}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.pan, "PAN")}
                    className="ml-auto bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2 hover:scale-105 transition"
                  >
                    <ClipboardCopy size={16} /> Copy
                  </button>
                </div>

                <p className="text-sm"><strong>Bank:</strong> {donation.bankName}</p>
                <p className="text-sm"><strong>Branch:</strong> {donation.branch}</p>
                {/* 80G Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-green-600/20 border border-green-400/40 
                             text-green-700 text-sm font-medium 
                             shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                >
                  <CheckCircle size={16} className="text-green-600" />
                  Eligible for 80G Tax Exemption
                </motion.div>
              </div>
            </div>

            {/* UPI / QR */}
            <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ClipboardCopy size={18} /> UPI / QR
              </h4>

              <div className="bg-white rounded-lg border border-amber-300 p-4 shadow-md">
                <img
                  src={donation.qrPath}
                  alt="Vatsalya QR"
                  className="w-64 h-64 md:w-72 md:h-72 object-contain"
                />
              </div>

              {!donation.upiId ? (
                <p className="text-sm text-[#4B1E00]/80 mt-4">
                  Scan the QR code using any UPI app (GPay, PhonePe, Paytm, BHIM).
                </p>
              ) : (
                <>
                  <p className="text-sm mt-4">UPI ID</p>
                  <p className="text-2xl font-semibold text-amber-700">{donation.upiId}</p>
                  <button
                    onClick={() => copy(donation.upiId, "UPI ID")}
                    className="mt-3 bg-amber-100 px-4 py-2 rounded-full text-sm shadow-sm inline-flex items-center gap-2"
                  >
                    <ClipboardCopy size={14} /> Copy UPI
                  </button>
                </>
              )}
            </div>
          </div>

          {copyMsg && (
            <div className="mt-4 text-center text-sm text-green-700">
              {copyMsg}
            </div>
          )}
        </motion.section>
      </main>
    </section>
  );
}