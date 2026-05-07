"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import {
  MapPin,
  Mail,
  Phone,
  Train,
  Bus,
  TramFront,
  HeartHandshake,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] =
    useState<null | "idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("phone") ||
      !formData.get("message")
    ) {
      setErrorMsg("Please fill all fields.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed`);
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <section
      className="
        relative min-h-screen overflow-hidden
        bg-[#1a0000]
        bg-gradient-to-br
        from-[#2b0000]
        via-[#3d0000]
        to-[#140000]
        text-white
        px-6 py-20
      "
    >
      <FloatingParticles count={25} />

      {/* Golden Aura Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#FFD97A]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FFD97A]/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16 max-w-4xl mx-auto"
      >
        <div className="inline-block px-5 py-2 rounded-full border border-[#FFD97A]/30 bg-[#FFD97A]/10 backdrop-blur-md mb-6">
          <p className="text-[#FFD97A] tracking-[0.25em] uppercase text-xs">
            Vatsalya Dhara Trust
          </p>
        </div>

        <h1
          className="
            font-serif text-5xl md:text-7xl
            bg-gradient-to-r from-[#FFD97A] via-[#FFF3C4] to-[#FFD97A]
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(255,217,122,0.35)]
            leading-tight
          "
        >
          Contact Us
        </h1>

        <p className="mt-6 text-[#FFF8E7]/75 text-lg leading-relaxed">
          Every connection strengthens the flow of compassion,
          seva, and humanity. We welcome your message with warmth and respect.
        </p>

        <div className="mt-5 tracking-[0.35em] text-[#FFD97A]/80 text-sm">
          सेवा • करुणा • मानवता
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-stretch">

        {/* LEFT — FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="
            relative overflow-hidden
            rounded-[2.7rem]
            border border-[#FFD97A]/20
            bg-white/5
            backdrop-blur-2xl
            p-8 md:p-12
            shadow-[0_0_70px_rgba(255,217,122,0.12)]
            h-full
          "
        >

          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD97A]/5 via-transparent to-[#FFD97A]/5 pointer-events-none" />

          <form className="relative z-10 grid gap-5" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="
                  w-full p-4 rounded-2xl
                  bg-[#FFF8E7]/5
                  border border-[#FFD97A]/20
                  text-[#FFF8E7]
                  placeholder-[#FFF8E7]/40
                  focus:outline-none
                  focus:border-[#FFD97A]
                  focus:bg-[#FFF8E7]/10
                  transition-all
                "
              />

              <input
                name="phone"
                type="tel"
                placeholder="Contact Number"
                required
                pattern="^[0-9+\\-\\s()]{7,15}$"
                className="
                  w-full p-4 rounded-2xl
                  bg-[#FFF8E7]/5
                  border border-[#FFD97A]/20
                  text-[#FFF8E7]
                  placeholder-[#FFF8E7]/40
                  focus:outline-none
                  focus:border-[#FFD97A]
                  focus:bg-[#FFF8E7]/10
                  transition-all
                "
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="
                w-full p-4 rounded-2xl
                bg-[#FFF8E7]/5
                border border-[#FFD97A]/20
                text-[#FFF8E7]
                placeholder-[#FFF8E7]/40
                focus:outline-none
                focus:border-[#FFD97A]
                focus:bg-[#FFF8E7]/10
                transition-all
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="
                w-full p-4 rounded-2xl
                bg-[#FFF8E7]/5
                border border-[#FFD97A]/20
                text-[#FFF8E7]
                placeholder-[#FFF8E7]/40
                focus:outline-none
                focus:border-[#FFD97A]
                focus:bg-[#FFF8E7]/10
                transition-all
              "
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "loading"}
              className="
                w-full py-4 rounded-2xl
                bg-gradient-to-r from-[#FFD97A] via-[#FFE7A8] to-[#FFD97A]
                text-[#4B1E00]
                font-bold tracking-wide
                shadow-[0_10px_30px_rgba(255,217,122,0.35)]
                hover:shadow-[0_15px_45px_rgba(255,217,122,0.55)]
                transition-all duration-300
                flex items-center justify-center gap-3
              "
            >
              <HeartHandshake size={20} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                Message sent successfully 🙏
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Error: {errorMsg}
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT — CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            rounded-[2.7rem]
            border border-[#FFD97A]/20
            bg-gradient-to-br from-[#5A0000]/70 to-[#2A0000]/80
            backdrop-blur-xl
            p-10
            shadow-[0_0_70px_rgba(255,217,122,0.12)]
            h-full
            flex flex-col
          "
        >
          <h3 className="text-4xl font-serif text-[#FFD97A] mb-8">
            Reach Us
          </h3>

          <div className="space-y-6 flex-1 flex flex-col justify-center">

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-[#FFD97A]/10">
              <MapPin className="text-[#FFD97A] mt-1" />

              <div>
                <h4 className="text-[#FFD97A] font-semibold mb-2">
                  Head Office
                </h4>

                <p className="text-[#FFF8E7]/80 text-sm leading-relaxed">
                  Vatsalya Bhawan, P-75, Street Number 5, Near Dua Chai Waale, Bihari Colony Extension, Bihari Colony, Shahdara, Delhi – 110032
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-[#FFD97A]/10">
              <MapPin className="text-[#FFD97A] mt-1" />

              <div>
                <h4 className="text-[#FFD97A] font-semibold mb-2">
                  Registered Office
                </h4>

                <p className="text-[#FFF8E7]/80 text-sm leading-relaxed">
                  D-49B Lalita Marg,
                  Shakarpur Extension,
                  Laxmi Nagar, Delhi – 110092
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-[#FFD97A]/10">
              <Phone className="text-[#FFD97A] mt-1" />

              <div>
                <p className="text-[#FFF8E7]">+91 9910987666</p>
                <p className="text-[#FFF8E7]">+91 9810900699</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= HOW TO REACH ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-14 w-full max-w-6xl mx-auto bg-[#3a0000]/80 backdrop-blur-md border border-yellow-400/30 rounded-3xl shadow-[0_0_50px_rgba(255,215,120,0.18)] px-6 md:px-10 py-10"
      >
        <h2 className="text-center font-serif text-3xl text-yellow-400 mb-10">
          How to Reach Our Office
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-[#FFE9C4]">

          {/* METRO */}
          <div className="rounded-[2rem] p-8 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl border border-[#FFD97A]/15 hover:border-[#FFD97A]/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-4">
              <TramFront className="text-yellow-400" size={28} />
              <h3 className="text-xl font-semibold text-yellow-400">
                Metro Stations
              </h3>
            </div>
            <p className="text-sm">
              Shahdara Metro – ~1.2 km <br />
              Welcome Metro – ~800 m <br />
              East Azad Nagar – ~1.0 km
            </p>
          </div>

          {/* RAILWAY */}
          <div className="rounded-[2rem] p-8 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl border border-[#FFD97A]/15 hover:border-[#FFD97A]/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-4">
              <Train className="text-yellow-400" size={28} />
              <h3 className="text-xl font-semibold text-yellow-400">
                Railway Station
              </h3>
            </div>
            <p className="text-sm">
              Shahdara Junction (SDA) <br />
              ~1.5 km • 5–10 mins by auto
            </p>
          </div>

          {/* BUS */}
          <div className="rounded-[2rem] p-8 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl border border-[#FFD97A]/15 hover:border-[#FFD97A]/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-4">
              <Bus className="text-yellow-400" size={28} />
              <h3 className="text-xl font-semibold text-yellow-400">
                Bus Stop
              </h3>
            </div>
            <p className="text-sm">
              Bihari Colony Bus Stop <br />
              Walking distance • 5–10 minutes
            </p>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative z-10 mt-20 w-full max-w-6xl mx-auto
          rounded-[2.5rem]
          overflow-hidden
          border border-[#FFD97A]/20
          bg-[#ffffff]/[0.03]
          backdrop-blur-xl
          p-3
          shadow-[0_0_60px_rgba(255,217,122,0.15)]
        "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.947636007671!2d77.28198241521303!3d28.66874298245769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0033d41217%3A0x80ba696c3fd02c25!2sVatsalya%20Dhara%20Trust!5e0!3m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        />

        {/* Golden Overlay Border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-yellow-400/40"></div>
      </motion.div>

    </section>
  );
}
