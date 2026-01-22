import Razorpay from "razorpay";
import { ENV } from "../config/env";

export const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY.KEY_ID,
  key_secret: ENV.RAZORPAY.KEY_SECRET,
});

export async function createRazorpayOrder(
  amount: number,
  name: string,
  phone: string
) {
  return razorpay.orders.create({
    amount: Math.round(amount * 100),
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    notes: {
      donor_name: name,
      donor_phone: phone,
    },
  });
}
