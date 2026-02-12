import { Router } from "express";
import {
  createDonationOrder,
  verifyPayment,
  getReceiptByPayment,
} from "./donation.controller";

const router = Router();

router.post("/create-order", createDonationOrder);
router.post("/verify-payment", verifyPayment);
router.get("/receipt/:paymentId", getReceiptByPayment);

export default router;
