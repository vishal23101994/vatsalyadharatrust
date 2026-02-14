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
import { ClipboardCopy } from "lucide-react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    donorBirthday: "",
    whatsappOptIn: true, // ✅ Recommended ON
  });

  const [copyMsg, setCopyMsg] = useState<string | null>(null);

  const donation = {
    accountName: "VATSALYA DHARA TRUST (REGD.)",
    accountNumber: "925010022258145",
    ifsc: "UTIB0005638",
    pan: "AABTV5574B",
    bankName: "AXIS BANK Ltd.",
    branch: "Bholanath Nagar, Delhi - 110032",
    qrPath: "/images/vatsalya_qr.jpeg",
    upiId: "", // add UPI ID here if available
  };

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

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 pb-28">

        {/* ===== TOP GRID: 80G LEFT | FORM RIGHT ===== */}
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">

          {/* ================= LEFT – 80G SPIRITUAL PANEL ================= */}
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] p-14 
                       bg-gradient-to-br from-[#FFF8E7] via-[#FFE7B0] to-[#FFD27A]
                       border border-amber-300
                       shadow-[0_30px_80px_rgba(180,120,40,0.25)]
                       flex flex-col justify-center"
          >

            {/* Aura Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,120,0.35),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 text-center">

              <div className="flex justify-center mb-10">
                <div className="p-6 rounded-full bg-white/70 backdrop-blur-md border border-amber-400 shadow-xl">
                  <CheckCircle size={48} className="text-amber-600" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-[#4B1E00] mb-6">
                Your Donation is Blessed with 80G Benefit
              </h3>

              <p className="text-lg leading-relaxed text-[#4B1E00]/90">
                Donations made to <strong>Vatsalya Dhara Trust</strong> 
                are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
              </p>

              <p className="mt-6 text-[#4B1E00]/80 leading-relaxed">
                We provide official donation receipts for claiming tax benefits,
                ensuring transparency, accountability, and trust.
              </p>

              <div className="mt-8 text-amber-800 font-semibold tracking-widest text-sm">
                सेवा • करुणा • मानवता
              </div>

              <div className="mt-6 inline-flex items-center px-6 py-2 rounded-full 
                              bg-white/60 border border-amber-400 
                              text-amber-900 text-sm font-medium shadow-md">
                Certified Under Section 80G
              </div>

            </div>
          </motion.section>


          {/* ================= RIGHT – DONATION FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-xl p-12 
                       rounded-[40px] 
                       shadow-[0_30px_90px_rgba(0,0,0,0.15)]
                       border border-amber-200"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.2),transparent_70%)] pointer-events-none rounded-[40px]" />

            <div className="relative z-10">

              <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-[#4B1E00]">
                Make Your Contribution
              </h2>

              {/* FULL NAME */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
                  <User size={18} className="text-amber-600" />
                  <input name="name" onChange={handleChange} className="w-full outline-none bg-transparent" />
                </div>
              </div>

              {/* PHONE */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Mobile Number</label>
                <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
                  <Phone size={18} className="text-amber-600" />
                  <input name="phone" onChange={handleChange} className="w-full outline-none bg-transparent" />
                </div>
              </div>

              {/* AMOUNT */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Donation Amount (₹)</label>
                <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
                  <IndianRupee size={18} className="text-amber-600" />
                  <input name="amount" onChange={handleChange} className="w-full outline-none bg-transparent" />
                </div>
              </div>

              {/* DATE OF BIRTH */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Date of Birth</label>
                <div className="flex items-center gap-3 bg-white rounded-xl border px-4 py-3">
                  <Calendar size={18} className="text-amber-600" />
                  <input type="date" name="donorBirthday" onChange={handleChange} className="w-full outline-none bg-transparent" />
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="mb-8">
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

            </div>
          </motion.div>

        </div>


        {/* ================= OTHER WAYS TO DONATE (BELOW BOTH) ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-28 bg-gradient-to-br from-[#FFF7E3] via-white to-[#FFE8B5] 
                     p-14 rounded-[40px] 
                     shadow-[0_25px_70px_rgba(180,120,40,0.2)] 
                     border border-amber-200"
        >

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-14">
            Other Ways to Donate
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* BANK TRANSFER */}
            <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-lg">
              <h4 className="text-xl font-semibold mb-6">
                Bank Transfer
              </h4>

              <div className="space-y-4 text-[#4B1E00]">
                <p className="font-semibold">{donation.accountName}</p>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">Account Number</p>
                    <p className="font-mono font-semibold">{donation.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.accountNumber, "Account Number")}
                    className="bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                  >
                    <ClipboardCopy size={16} /> Copy
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">IFSC Code</p>
                    <p className="font-mono font-semibold">{donation.ifsc}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.ifsc, "IFSC Code")}
                    className="bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                  >
                    <ClipboardCopy size={16} /> Copy
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#4B1E00]/70">PAN</p>
                    <p className="font-mono font-semibold">{donation.pan}</p>
                  </div>
                  <button
                    onClick={() => copy(donation.pan, "PAN")}
                    className="bg-amber-100 px-3 py-1 rounded-md text-sm flex items-center gap-2"
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

            {/* UPI */}
            <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-lg flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-8">
                UPI / QR Donation
              </h4>

              <div className="bg-white rounded-lg border border-amber-300 p-4 shadow-md">
                <img
                  src={donation.qrPath}
                  alt="Vatsalya QR"
                  className="w-64 h-64 object-contain"
                />
              </div>

              <p className="text-sm text-[#4B1E00]/80 mt-6 text-center">
                Scan this QR code using any UPI app (GPay, PhonePe, Paytm, BHIM).
              </p>
            </div>

          </div>

          {copyMsg && (
            <div className="mt-6 text-center text-green-700 font-medium">
              {copyMsg}
            </div>
          )}

        </motion.section>

      </main>
    </section>
  );
}
