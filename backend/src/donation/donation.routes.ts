import { Router } from "express";
import {
  createDonationOrder,
  verifyPayment,
} from "./donation.controller";

const router = Router();

router.post("/create-order", createDonationOrder);
router.post("/verify-payment", verifyPayment); // optional / fallback

export default router;
