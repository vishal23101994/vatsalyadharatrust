"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, IndianRupee, HeartHandshake } from "lucide-react";

export default function DonationSuccessPage() {
  const [name, setName] = useState("Dear Supporter");
  const [amount, setAmount] = useState("");
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);
  const [loadingReceipt, setLoadingReceipt] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("donor_name");
    const storedAmount = localStorage.getItem("donation_amount");
    const paymentId = localStorage.getItem("razorpay_payment_id");

    if (storedName) setName(storedName);
    if (storedAmount) setAmount(storedAmount);

    if (paymentId) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/donation/receipt/${paymentId}`
      )
        .then((res) => res.ok ? res.json() : null)
        .then((data) => {
          if (data?.receiptUrl) {
            setReceiptUrl(data.receiptUrl);
          }
        })
        .finally(() => setLoadingReceipt(false));
    } else {
      setLoadingReceipt(false);
    }

    localStorage.removeItem("donor_name");
    localStorage.removeItem("donation_amount");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF1C1] via-[#FFF8E7] to-[#FFE4B5] px-6 text-[#4B1E00]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-green-200 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="text-green-600" size={48} />
          </div>
        </div>

        <h1 className="text-3xl font-serif font-semibold text-green-700 mb-3">
          Donation Successful
        </h1>

        <p className="text-lg mb-6">
          Thank you, <b>{name}</b> 🙏
          <br />
          Your generous contribution has been received.
        </p>

        {amount && (
          <div className="flex justify-center gap-2 text-xl text-amber-700 mb-6">
            <IndianRupee size={22} />
            <span>{amount}</span>
          </div>
        )}

        {receiptUrl ? (
          <a
            href={receiptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            📄 Download Donation Receipt
          </a>
        ) : (
          <p className="mb-6 text-sm text-green-700">
            {loadingReceipt
              ? "Preparing your receipt…"
              : "Receipt will be available shortly"}
          </p>
        )}

        <div className="flex justify-center gap-2 text-green-700 text-sm mb-4">
          <HeartHandshake size={18} />
          <span>Vatsalya Dhara Trust deeply appreciates your support</span>
        </div>

        <div className="mt-4 text-amber-700 text-sm tracking-wide">
          सेवा • करुणा • मानवता
        </div>
      </motion.div>
    </section>
  );
}
