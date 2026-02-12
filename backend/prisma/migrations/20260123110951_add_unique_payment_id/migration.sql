/*
  Warnings:

  - A unique constraint covering the columns `[razorpayPaymentId]` on the table `Donation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Donation_razorpayPaymentId_key" ON "Donation"("razorpayPaymentId");
