import axios from "axios";
import { ENV } from "../config/env";

const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

export type WhatsAppPayload = {
  to: string;
  name: string;
  amount: number;
  transactionId: string;
};

export async function sendDonationWhatsApp(payload: WhatsAppPayload) {
  try {
    if (!payload.to) {
      console.warn("⚠️ WhatsApp skipped: missing phone number");
      return;
    }

    console.log("📲 Sending WhatsApp thank-you message");
    console.log("➡️ To:", payload.to);

    const response = await axios.post(
      `${WHATSAPP_API_URL}/${ENV.WHATSAPP.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: payload.to,
        type: "template",
        template: {
          name: "donation_thank_you_v1",
          language: { code: "en_US" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: payload.name || "Supporter" },          // {{1}}
                { type: "text", text: payload.amount.toFixed(2) },            // {{2}}
                { type: "text", text: payload.transactionId },                // {{3}}
              ],
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ENV.WHATSAPP.ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ WhatsApp sent");
    console.log("📩 Message ID:", response.data?.messages?.[0]?.id);
  } catch (error: any) {
    console.error("❌ WhatsApp failed");

    if (error.response) {
      console.error(
        "Response:",
        JSON.stringify(error.response.data, null, 2)
      );
    } else {
      console.error(error.message);
    }
  }
}
