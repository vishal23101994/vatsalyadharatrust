import cron from "node-cron";
import axios from "axios";
import { prisma } from "../prisma";

const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

export function startBirthdayCron() {
  // Runs every day at 9:00 AM IST
  cron.schedule(
    "0 9 * * *",
    async () => {
      try {
        console.log("🎂 Birthday cron running");

        // Ensure IST date (important on VPS)
        const nowIST = new Date(
          new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          })
        );

        const day = nowIST.getDate();
        const month = nowIST.getMonth() + 1;

        // ✅ CORRECTLY QUOTED COLUMN NAMES
        const donors = await prisma.$queryRaw<
          { name: string | null; phone: string | null }[]
        >`
          SELECT name, phone
          FROM "Donation"
          WHERE "donorBirthday" IS NOT NULL
          AND EXTRACT(DAY FROM "donorBirthday") = ${day}
          AND EXTRACT(MONTH FROM "donorBirthday") = ${month}
          AND "whatsappOptIn" = true
        `;

        if (!donors.length) {
          console.log("🎂 No birthdays today");
          return;
        }

        for (const donor of donors) {
          if (!donor.phone) continue;

          const whatsappNumber = donor.phone.startsWith("91")
            ? donor.phone
            : `91${donor.phone}`;

          console.log("🎉 Sending birthday WhatsApp to:", whatsappNumber);

          await axios.post(
            `${WHATSAPP_API_URL}/${process.env.WA_PHONE_NUMBER_ID}/messages`,
            {
              messaging_product: "whatsapp",
              to: whatsappNumber,
              type: "template",
              template: {
                name: "birthday_wishes", // MUST exist in Meta
                language: { code: "en_US" },
                components: [
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: donor.name?.trim() || "Friend",
                      },
                    ],
                  },
                ],
              },
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.WA_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
              },
              timeout: 10_000,
            }
          );
        }
      } catch (error) {
        console.error("🎂 Birthday cron error:", error);
      }
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
}
