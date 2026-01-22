import crypto from "crypto";
import { Request, Response } from "express";
import { prisma } from "../prisma";
import { createRazorpayOrder } from "../razorpay/razorpay.service";
import { generateReceiptPDF } from "./receipt.service";
import { sendDonationWhatsApp } from "./whatsapp.service";
import { ENV } from "../config/env";

/**
 * CREATE RAZORPAY ORDER
 */
export async function createDonationOrder(req: Request, res: Response) {
  try {
    const { name, phone, email, amount, donorBirthday } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = await createRazorpayOrder(amount, name, phone);

    return res.json({
      orderId: order.id,
      amount,
      key: ENV.RAZORPAY.KEY_ID,
      meta: { name, phone, email, donorBirthday },
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Order creation failed" });
  }
}

/**
 * OPTIONAL: Manual verification (NOT primary path)
 */
export async function verifyPayment(req: Request, res: Response) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      phone,
      email,
      amount,
      donorBirthday,
    } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", ENV.RAZORPAY.KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    const donation = await prisma.donation.create({
      data: {
        name,
        phone,
        email,
        amount,
        donorBirthday: donorBirthday ? new Date(donorBirthday) : null,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        status: "SUCCESS",
      },
    });

    const receiptUrl = await generateReceiptPDF(donation);

    const whatsappNumber = phone.startsWith("91") ? phone : `91${phone}`;

    await sendDonationWhatsApp({
      to: whatsappNumber,
      name: donation.name,
      amount: donation.amount,
      transactionId: razorpay_payment_id,
      receiptUrl,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({ message: "Verification failed" });
  }
}
