import cron from "node-cron";
import axios from "axios";
import { prisma } from "../prisma";

const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

export function startBirthdayCron() {
  cron.schedule("0 9 * * *", async () => {
    console.log("🎂 Birthday cron running");

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const donors = await prisma.$queryRaw<any[]>`
      SELECT * FROM "Donation"
      WHERE donorBirthday IS NOT NULL
      AND EXTRACT(DAY FROM donorBirthday) = ${day}
      AND EXTRACT(MONTH FROM donorBirthday) = ${month}
    `;

    for (const donor of donors) {
      await axios.post(
        `${WHATSAPP_API_URL}/${process.env.WA_PHONE_NUMBER_ID}/messages`,
        {
          messaging_product: "whatsapp",
          to: donor.phone,
          type: "template",
          template: {
            name: "birthday_wishes",
            language: { code: "en" },
            components: [
              {
                type: "body",
                parameters: [{ type: "text", text: donor.name }],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.WA_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
    }
  });
}
