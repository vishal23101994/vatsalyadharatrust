import crypto from "crypto";
import { Request, Response } from "express";
import { prisma } from "../prisma";
import { generateReceiptPDF } from "../donation/receipt.service";
import { sendDonationWhatsApp } from "../donation/whatsapp.service";
import { ENV } from "../config/env";

export async function razorpayWebhook(req: Request, res: Response) {
  try {
    const signature = req.headers["x-razorpay-signature"] as string;

    const expectedSignature = crypto
      .createHmac("sha256", ENV.RAZORPAY.WEBHOOK_SECRET)
      .update(req.body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("❌ Invalid webhook signature");
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    const payload = JSON.parse(req.body.toString("utf8"));
    console.log("✅ Razorpay webhook event:", payload.event);

    if (payload.event !== "payment.captured") {
      return res.json({ status: "ignored" });
    }

    const payment = payload.payload.payment.entity;
    console.log("💰 Payment captured:", payment.id);

    const notes = payment.notes || {};

    const whatsappOptIn =
      notes.whatsapp_optin === "true" ||
      notes.whatsapp_optin === true ||
      notes.whatsapp_optin === "1";

    const existing = await prisma.donation.findUnique({
      where: { razorpayPaymentId: payment.id },
    });

    if (existing) {
      return res.json({ status: "duplicate_ignored" });
    }

    const donation = await prisma.donation.create({
      data: {
        name: notes.donor_name || "Anonymous",
        phone: notes.donor_phone || "",
        email: notes.donor_email || null,
        amount: payment.amount / 100,
        razorpayOrderId: payment.order_id,
        razorpayPaymentId: payment.id,
        donorBirthday: notes.donor_birthday
          ? new Date(notes.donor_birthday)
          : null,
        whatsappOptIn,
        status: "SUCCESS",
      },
    });

    console.log("✅ Donation saved:", donation.id);

    /**
     * 📄 Generate receipt
     */
    const receiptUrl = await generateReceiptPDF(donation);

    /**
     * 💾 Save receipt URL
     */
    await prisma.donation.update({
      where: { id: donation.id },
      data: { receiptUrl },
    });

    /**
     * 📲 WhatsApp
     */
    if (whatsappOptIn && donation.phone) {
      const whatsappNumber = donation.phone.startsWith("91")
        ? donation.phone
        : `91${donation.phone}`;

      await sendDonationWhatsApp({
        to: whatsappNumber,
        name: donation.name,
        amount: donation.amount,
        transactionId: donation.razorpayPaymentId!,
      });
    }

    return res.json({ status: "ok" });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return res.status(500).json({ message: "Webhook processing failed" });
  }
}
