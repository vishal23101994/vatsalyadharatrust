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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#6B0C0C] via-[#4E0808] to-[#2A0404] text-white px-6 py-16">
      <FloatingParticles count={25} />

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-10"
      >
        <h1 className="font-serif text-5xl text-yellow-400 mb-4 drop-shadow-md">
          Contact Us
        </h1>
        <p className="text-[#FFE9C4]/80 max-w-2xl mx-auto">
          Every connection strengthens the flow of compassion.
          We welcome your message with open hearts.
        </p>
        <div className="mt-4 tracking-widest text-yellow-300 font-semibold">
          सेवा • करुणा • मानवता
        </div>
      </motion.div>

      {/* ================= FORM ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-[#3a0000]/70 backdrop-blur-md border border-yellow-400/40 rounded-3xl shadow-[0_0_30px_rgba(255,215,120,0.2)] p-8 md:p-12 w-full max-w-3xl"
      >
        <form className="grid gap-5 text-left" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-yellow-400/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Contact Number"
              required
              pattern="^[0-9+\-\s()]{7,15}$"
              className="w-full p-3 rounded-lg bg-white/10 border border-yellow-400/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-yellow-400/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-yellow-400/30 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 h-32"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#4B1E00] font-semibold shadow-md hover:shadow-lg transition flex justify-center items-center gap-2"
          >
            <HeartHandshake size={18} />
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-green-400 mt-2 text-center">
              Message sent successfully 🙏
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2 text-center">
              Error: {errorMsg}
            </p>
          )}
        </form>
      </motion.div>

      {/* ================= CONTACT INFO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 text-center space-y-3 text-[#FFE9C4]/80"
      >
        <div className="flex justify-center items-center gap-3">
          <MapPin className="text-yellow-400" size={20} />
          <span>
            Vatsalya Bhawan, P-75, Street No. 5,
            Bihari Colony Extension, Bihari Colony, Shahdara, Delhi – 110032
          </span>
        </div>

        <div className="flex justify-center items-center gap-3">
          <Phone className="text-yellow-400" size={20} />
          <span>+91 9910987666, +91 9810900699</span>
        </div>
      </motion.div>

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
          <div className="rounded-2xl p-6 bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 transition">
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
          <div className="rounded-2xl p-6 bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 transition">
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
          <div className="rounded-2xl p-6 bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 transition">
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

      {/* ================= GOOGLE MAP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,215,120,0.2)] border border-yellow-400/30"
      >
        <iframe
          src="https://www.google.com/maps?q=Vatsalya%20Dhara%20Trust,%20Shahdara,%20Delhi&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        />

        {/* Golden Overlay Border Glow */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-yellow-400/30"></div>
      </motion.div>

    </section>
  );
}
