import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { ENV } from "../config/env";

/* ---------- Helpers ---------- */
function amountToWords(amount: number): string {
  const words = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];

  if (amount < 20) return `${words[amount]} Rupees Only`;
  return `${amount.toLocaleString("en-IN")} Rupees Only`;
}

export async function generateReceiptPDF(donation: any): Promise<string> {
  const receiptsDir = path.join(process.cwd(), "public", "receipts");
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const stampPath = path.join(process.cwd(), "public", "stamp.png");
  const signPath = path.join(process.cwd(), "public", "signature.png");

  if (!fs.existsSync(receiptsDir)) {
    fs.mkdirSync(receiptsDir, { recursive: true });
  }

  const fileName = `donation_${donation.razorpayPaymentId}.pdf`;
  const filePath = path.join(receiptsDir, fileName);

  const doc = new PDFDocument({ size: "A4", margin: 40 });
  doc.pipe(fs.createWriteStream(filePath));

  /* ---------- HEADER ---------- */
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 40, 30, { width: 80 });
  }

  doc
    .font("Helvetica-Bold")
    .fontSize(16)
    .text("VATSALYA DHARA TRUST (Regd.)", 140, 35)
    .moveDown(0.3)
    .font("Helvetica")
    .fontSize(10)
    .text(
      "Vatsalya Bhavan,\n" +
        "P-75, Street No. 3, Bihari Colony Extension,\n" +
        "Bihari Colony, Shahdara,\n" +
        "Delhi – 110032",
      140,
      60
    );

  doc.moveTo(40, 130).lineTo(555, 130).stroke();

  /* ---------- TITLE ---------- */
  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .text("DONATION RECEIPT (80G)", 0, 145, { align: "center" });

  doc.moveTo(40, 170).lineTo(555, 170).stroke();

  /* ---------- META ---------- */
  doc.font("Helvetica").fontSize(10);
  doc.text(`Receipt No : ${donation.razorpayPaymentId}`, 40, 185);
  doc.text(
    `Date : ${new Date(donation.donationDate).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`,
    400,
    185
  );

  /* ---------- LEFT COLUMN : DONOR ---------- */
  let leftY = 220;

  doc.font("Helvetica-Bold").text("DONOR DETAILS", 40, leftY);
  leftY += 18;

  doc.font("Helvetica");
  doc.text(`Name   : ${donation.name}`, 40, leftY);
  leftY += 14;
  doc.text(`Mobile : ${donation.phone}`, 40, leftY);

  /* ---------- RIGHT COLUMN : DONATION ---------- */
  let rightY = 220;

  doc.font("Helvetica-Bold").text("DONATION DETAILS", 330, rightY);
  rightY += 18;

  doc.font("Helvetica");
  doc.text(`Amount : Rs. ${donation.amount.toFixed(2)}`, 330, rightY);
  rightY += 14;

  doc.text(
    `In Words : ${amountToWords(Math.floor(donation.amount))}`,
    330,
    rightY,
    { width: 220 }
  );
  rightY += 28;

  doc.text("Payment : Online (Razorpay)", 330, rightY);
  rightY += 14;

  doc.text(`Txn ID  : ${donation.razorpayPaymentId}`, 330, rightY);
  rightY += 14;

  doc.text("Purpose : Donation", 330, rightY);

  /* ---------- TAX SECTION ---------- */
  const taxY = Math.max(leftY, rightY) + 30;

  doc.moveTo(40, taxY).lineTo(555, taxY).stroke();

  doc.font("Helvetica-Bold").text("TAX EXEMPTION DETAILS (80G)", 40, taxY + 12);
  doc.font("Helvetica");
  doc.text(
    "This donation is eligible for deduction under Section 80G of the Income Tax Act, 1961.",
    40,
    taxY + 30,
    { width: 500 }
  );

  /* ---------- STAMP & SIGNATURE (COMPACT, NEAT) ---------- */

  const signBlockY = taxY + 80; // 👈 just after receipt content
  const rightX = doc.page.width - 40;

  const stampWidth = 80; // reduced
  const signWidth = 65;  // reduced

  // Stamp
  if (fs.existsSync(stampPath)) {
    doc.save();
    doc.opacity(0.8);
    doc.image(
      stampPath,
      rightX - stampWidth,
      signBlockY,
      { width: stampWidth }
    );
    doc.restore();
  }

  // Signature
  if (fs.existsSync(signPath)) {
    doc.image(
      signPath,
      rightX - signWidth + 8,
      signBlockY + 38,
      { width: signWidth }
    );
  }

  // Text
  doc
    .fontSize(9)
    .text(
      "For Vatsalya Dhara Trust",
      rightX - 160,
      signBlockY + 90,
      { width: 160, align: "center" }
    );

  doc
    .fontSize(8)
    .text(
      "Authorized Signatory",
      rightX - 160,
      signBlockY + 105,
      { width: 160, align: "center" }
    );

  doc.end();

  return `${ENV.BASE_URL}/receipts/${fileName}`;
}
