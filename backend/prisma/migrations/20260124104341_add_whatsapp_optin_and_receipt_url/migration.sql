/*
  Warnings:

  - A unique constraint covering the columns `[razorpayPaymentId]` on the table `Donation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "whatsappOptIn" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Donation_razorpayPaymentId_key" ON "Donation"("razorpayPaymentId");
