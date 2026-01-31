import Razorpay from "razorpay";
import { ENV } from "../config/env";

export const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY.KEY_ID,
  key_secret: ENV.RAZORPAY.KEY_SECRET,
});

export async function createRazorpayOrder(
  amount: number,
  name: string,
  phone: string,
  meta: any
) {
  return razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    notes: {
      donor_name: name,
      donor_phone: phone,
      donor_birthday: meta?.donorBirthday || "",
      whatsapp_optin: meta?.whatsappOptIn ? "true" : "false",
      donor_email: meta?.email || "",
    },
  });
}
