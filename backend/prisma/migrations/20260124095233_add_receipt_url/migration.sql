/*
  Warnings:

  - You are about to drop the column `whatsappOptIn` on the `Donation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Donation_razorpayPaymentId_key";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "whatsappOptIn",
ADD COLUMN     "receiptUrl" TEXT;
