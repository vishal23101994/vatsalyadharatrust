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
 * ⚠️ Razorpay webhook MUST receive RAW body
 * ⚠️ This route must come BEFORE bodyParser.json()
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

/**
 * 📄 Serve donation receipts
 * Maps:
 *   backend/public/receipts/*.pdf
 * to:
 *   https://yourdomain.com/receipts/*.pdf
 */
app.use(
  "/receipts",
  express.static(path.join(__dirname, "../public/receipts"))
);

// Donation routes
app.use("/donation", donationRoutes);

// Health check
app.get("/health", (_, res) => res.json({ status: "OK" }));

// 🎂 Birthday cron (runs once on server start)
startBirthdayCron();

// 🚀 Start server
app.listen(ENV.PORT, () => {
  console.log(`🚀 Backend running on port ${ENV.PORT}`);
});
