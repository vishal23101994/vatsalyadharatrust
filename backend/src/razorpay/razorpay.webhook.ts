import crypto from "crypto";
import { Request, Response } from "express";
import { prisma } from "../prisma";
import { generateReceiptPDF } from "../donation/receipt.service";
import { sendDonationWhatsApp } from "../donation/whatsapp.service";
import { ENV } from "../config/env";

export async function razorpayWebhook(req: Request, res: Response) {
  try {
    const signature = req.headers["x-razorpay-signature"] as string;

    // 🔐 Verify using RAW BODY (Buffer)
    const expectedSignature = crypto
      .createHmac("sha256", ENV.RAZORPAY.WEBHOOK_SECRET)
      .update(req.body) // Buffer
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("❌ Invalid webhook signature");
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    // ✅ NOW parse JSON
    const payload = JSON.parse(req.body.toString("utf8"));

    console.log("✅ Razorpay webhook event:", payload.event);

    if (payload.event === "payment.captured") {
      const payment = payload.payload.payment.entity;

      console.log("💰 Payment captured:", payment.id);

      const donation = await prisma.donation.create({
        data: {
          name: payment.notes?.donor_name || "Anonymous",
          phone: payment.notes?.donor_phone || "",
          amount: payment.amount / 100,
          razorpayOrderId: payment.order_id,
          razorpayPaymentId: payment.id,
          status: "SUCCESS",
        },
      });

      console.log("✅ Donation saved:", donation.id);

      const receiptUrl = await generateReceiptPDF(donation);

      const whatsappNumber = donation.phone.startsWith("91")
        ? donation.phone
        : `91${donation.phone}`;

      await sendDonationWhatsApp({
        to: whatsappNumber,
        name: donation.name,
        amount: donation.amount,
        transactionId: donation.razorpayPaymentId!,
        receiptUrl,
      });
    }

    return res.json({ status: "ok" });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return res.status(500).json({ message: "Webhook processing failed" });
  }
}
