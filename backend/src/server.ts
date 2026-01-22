import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import donationRoutes from "./donation/donation.routes";
import { startBirthdayCron } from "./cron/birthday.cron";
import { razorpayWebhook } from "./razorpay/razorpay.webhook";
import { ENV } from "./config/env";

const app = express();

/**
 * ⚠️ Razorpay webhook MUST be RAW body
 */
app.post(
  "/donation/razorpay-webhook",
  bodyParser.raw({ type: "application/json" }),
  razorpayWebhook
);

/**
 * Normal middleware AFTER webhook
 */
app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 📄 Serve receipts
app.use(
  "/receipts",
  express.static(path.join(process.cwd(), "public", "receipts"))
);

// Donation routes
app.use("/donation", donationRoutes);

// Health check
app.get("/health", (_, res) => res.json({ status: "OK" }));

// Birthday cron
startBirthdayCron();

// 🚀 SINGLE listen
app.listen(ENV.PORT, () => {
  console.log(`🚀 Backend running on port ${ENV.PORT}`);
});
