"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, IndianRupee, HeartHandshake } from "lucide-react";

export default function DonationSuccessPage() {
  const [name, setName] = useState<string>("Dear Supporter");
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    // Read data stored before Razorpay payment
    const storedName = localStorage.getItem("donor_name");
    const storedAmount = localStorage.getItem("donation_amount");

    if (storedName) setName(storedName);
    if (storedAmount) setAmount(storedAmount);

    // Optional: clear after use
    localStorage.removeItem("donor_name");
    localStorage.removeItem("donation_amount");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF1C1] via-[#FFF8E7] to-[#FFE4B5] px-6 text-[#4B1E00]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-green-200 text-center"
      >
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <CheckCircle className="text-green-600" size={48} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-green-700 mb-3">
          Donation Successful
        </h1>

        {/* MESSAGE */}
        <p className="text-lg leading-relaxed mb-6">
          Thank you, <span className="font-semibold">{name}</span> 🙏
          <br />
          Your generous contribution has been received.
        </p>

        {/* AMOUNT */}
        {amount && (
          <div className="flex items-center justify-center gap-2 text-xl font-semibold text-amber-700 mb-6">
            <IndianRupee size={22} />
            <span>{amount}</span>
          </div>
        )}

        {/* TRUST MESSAGE */}
        <div className="flex items-center justify-center gap-2 text-green-700 text-sm mb-4">
          <HeartHandshake size={18} />
          <span>Vatsalya Dhara Trust deeply appreciates your support</span>
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-amber-700 text-sm tracking-wide">
          सेवा • करुणा • मानवता
        </div>
      </motion.div>
    </section>
  );
}
