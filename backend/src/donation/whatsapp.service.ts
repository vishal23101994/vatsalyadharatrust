import axios from "axios";
import { ENV } from "../config/env";

const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

export async function sendDonationWhatsApp(payload: {
  to: string;
  name: string;
  amount: number;
  transactionId: string;
  receiptUrl: string; // still kept for future use
}) {
  try {
    console.log("📲 Sending WhatsApp template message");
    console.log("➡️ To:", payload.to);

    await axios.post(
      `${WHATSAPP_API_URL}/${ENV.WHATSAPP.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: payload.to,
        type: "template",
        template: {
          name: "donation_confirmation_receipt",
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: payload.name },                 // {{1}}
                { type: "text", text: payload.amount.toFixed(2) },    // {{2}}
                { type: "text", text: payload.transactionId },        // {{3}}
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
      }
    );

    console.log("✅ WhatsApp message sent successfully");
  } catch (error: any) {
    console.error("❌ WhatsApp send failed");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error(
        "Response:",
        JSON.stringify(error.response.data, null, 2)
      );
    } else {
      console.error(error.message);
    }
  }
}
