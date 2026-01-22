export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 4000),

  DATABASE_URL: process.env.DATABASE_URL!,

  BASE_URL: process.env.BASE_URL!,
  FRONTEND_URL: process.env.FRONTEND_URL!,

  RAZORPAY: {
    KEY_ID: process.env.RAZORPAY_KEY_ID!,
    KEY_SECRET: process.env.RAZORPAY_KEY_SECRET!,
    WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET!,
  },

  WHATSAPP: {
    ACCESS_TOKEN: process.env.WA_ACCESS_TOKEN!,
    PHONE_NUMBER_ID: process.env.WA_PHONE_NUMBER_ID!,
  },
};
