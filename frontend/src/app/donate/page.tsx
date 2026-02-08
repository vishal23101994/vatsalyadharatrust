"use client";

/* 🔧 Razorpay TS fix */
declare global {
  interface Window {
    Razorpay: any;
  }
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, IndianRupee, Phone, User, Calendar, CheckCircle } from "lucide-react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    donorBirthday: "",
    whatsappOptIn: true, // ✅ Recommended ON
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const donate = async () => {
    if (loading) return;

    setMessage("");
    setLoading(true);

    try {
      const API = process.env.NEXT_PUBLIC_API_URL!;

      /* 1️⃣ CREATE ORDER */
      const res = await fetch(`${API}/donation/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          amount: Number(form.amount),
          donorBirthday: form.donorBirthday,
          whatsappOptIn: form.whatsappOptIn,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Create order failed:", errorText);
        throw new Error("Unable to initiate payment");
      }

      const data = await res.json();

      if (!window.Razorpay) {
        setMessage("Payment gateway not loaded. Please refresh.");
        setLoading(false);
        return;
      }

      /* 2️⃣ RAZORPAY OPTIONS */
      const options = {
        key: data.key,
        amount: data.amount * 100,
        currency: "INR",
        name: "Vatsalya Dhara Trust",
        description: "Donation",
        order_id: data.orderId,
        prefill: {
          name: form.name,
          contact: form.phone,
        },
        handler: (response: any) => {
          // ✅ STORE PAYMENT ID FOR RECEIPT FETCH
          localStorage.setItem(
            "razorpay_payment_id",
            response.razorpay_payment_id
          );

          window.location.href = "/donate/success";
        },
        theme: { color: "#f97316" },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      // ✅ ADD THIS BEFORE OPEN()
      localStorage.setItem("donor_name", form.name || "Dear Supporter");
      localStorage.setItem("donation_amount", form.amount);

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      setMessage("Unable to initiate payment");
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAE3A3]/30 to-[#FFF8E7] text-[#4B1E00]">

      {/* HERO */}
      <header className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-b from-[#FFF1C1]/70 via-[#FFF8E7] to-transparent">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.25),transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#FFF7E1] border border-amber-300 shadow-[0_10px_28px_rgba(180,120,40,0.35)]">
              <Heart className="text-rose-500" size={40} />
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">
            Make a Donation
          </h1>

          <p className="text-lg md:text-xl text-[#4B1E00]/90">
            Your contribution directly supports education, healthcare,
            animal care, and humanitarian initiatives.
          </p>

          <div className="mt-6 text-sm text-amber-700 tracking-wide">
            सेवा • करुणा • मानवता
          </div>
        </motion.div>
      </header>

      {/* DONATION FORM */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-amber-200"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8">
            Donation Details
          </h2>

          {/* NAME */}
          <div className="mb-5">
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
              <User size={18} className="text-amber-600" />
              <input name="name" onChange={handleChange} className="w-full outline-none bg-transparent" />
            </div>
          </div>

          {/* PHONE */}
          <div className="mb-5">
            <label className="text-sm font-medium mb-1 block">Mobile Number</label>
            <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
              <Phone size={18} className="text-amber-600" />
              <input name="phone" onChange={handleChange} className="w-full outline-none bg-transparent" />
            </div>
          </div>

          {/* AMOUNT */}
          <div className="mb-5">
            <label className="text-sm font-medium mb-1 block">Donation Amount (₹)</label>
            <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
              <IndianRupee size={18} className="text-amber-600" />
              <input name="amount" onChange={handleChange} className="w-full outline-none bg-transparent" />
            </div>
          </div>

          {/* DOB */}
          <div className="mb-5">
            <label className="text-sm font-medium mb-1 block">Date of Birth</label>
            <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
              <Calendar size={18} className="text-amber-600" />
              <input type="date" name="donorBirthday" onChange={handleChange} className="w-full outline-none bg-transparent" />
            </div>
          </div>

          {/* ✅ WHATSAPP OPT-IN */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="whatsappOptIn"
                checked={form.whatsappOptIn}
                onChange={handleChange}
                className="mt-1 accent-green-600"
              />
              <span className="text-sm">
                <span className="flex items-center gap-1 font-semibold text-green-700">
                  <CheckCircle size={16} /> Recommended
                </span>
                Receive your donation receipt and confirmation on WhatsApp
              </span>
            </label>
          </div>

          <button
            onClick={donate}
            disabled={loading}
            className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
          >
            {loading ? "Processing..." : "Donate Now"}
          </button>

          {message && (
            <p className="mt-6 text-center text-red-600 font-medium">
              {message}
            </p>
          )}
        </motion.div>
      </main>
    </section>
  );
}
