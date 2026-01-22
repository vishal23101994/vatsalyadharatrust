import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { ENV } from "../config/env";

export async function generateReceiptPDF(donation: any): Promise<string> {
  const receiptsDir = path.join(process.cwd(), "public", "receipts");
  const logoPath = path.join(process.cwd(), "public", "logo.png");

  if (!fs.existsSync(receiptsDir)) {
    fs.mkdirSync(receiptsDir, { recursive: true });
  }

  const fileName = `donation_${donation.razorpayPaymentId}.pdf`;
  const filePath = path.join(receiptsDir, fileName);

  const doc = new PDFDocument({ margin: 40, size: "A4" });
  doc.pipe(fs.createWriteStream(filePath));

  /* ===== HEADER ===== */
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 40, 40, { width: 70 });
  }

  doc
    .fontSize(16)
    .text("VATSALYA DHARA TRUST", 130, 45)
    .fontSize(10)
    .text("Registered Charitable Trust", 130, 65)
    .text(
      "P-75, Street No 3, Bihari Colony Extension,\nShahdara, Delhi – 110032",
      130,
      80
    );

  doc.moveDown(3);
  doc.moveTo(40, doc.y).lineTo(555, doc.y).stroke();

  /* ===== TITLE ===== */
  doc.moveDown();
  doc
    .fontSize(14)
    .text("DONATION RECEIPT (80G)", { align: "center", underline: true });

  doc.moveDown();

  /* ===== META ===== */
  doc.fontSize(10);
  doc.text(`Receipt No : ${donation.razorpayPaymentId}`, { continued: true });
  doc.text(
    `          Date : ${new Date(donation.donationDate).toLocaleDateString(
      "en-IN",
      { day: "2-digit", month: "short", year: "numeric" }
    )}`
  );

  /* ===== DONOR ===== */
  doc.moveDown();
  doc.fontSize(11).text("DONOR DETAILS", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(10);
  doc.text(`Name   : ${donation.name}`);
  doc.text(`Mobile : ${donation.phone}`);

  /* ===== DONATION ===== */
  doc.moveDown();
  doc.fontSize(11).text("DONATION DETAILS", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(10);
  doc.text(`Donation Amount : ₹ ${donation.amount.toFixed(2)}`);
  doc.text("Payment Mode    : Online (Razorpay)");
  doc.text(`Transaction ID  : ${donation.razorpayPaymentId}`);
  doc.text("Purpose         : Donation");

  /* ===== 80G ===== */
  doc.moveDown();
  doc.fontSize(11).text("TAX EXEMPTION DETAILS", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(10);
  doc.text(
    "This donation is eligible for deduction under Section 80G of the Income Tax Act, 1961."
  );
  doc.text("Trust PAN       : AABTV5574B");
  doc.text("80G Reg. Number : AABTV5574BF20231");
  doc.text("Validity        : AY 2025–26");

  /* ===== FOOTER ===== */
  doc.moveDown();
  doc.moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown();

  doc.fontSize(9);
  doc.text(
    "This is a system-generated receipt and does not require a physical signature."
  );
  doc.moveDown(2);
  doc.text("For Vatsalya Dhara Trust");
  doc.moveDown();
  doc.text("Authorized Signatory");

  doc.end();

  return `${ENV.BASE_URL}/receipts/${fileName}`;
}
