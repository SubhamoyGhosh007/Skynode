import dotenv from "dotenv"
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
})
// Note: dotenv should be loaded by the parent process (email-worker)
import type { MailProvider } from "../nodemailer.js";

export const config = {
  mail: {
    provider: (process.env.MAIL_PROVIDER || "smtp") as MailProvider,
    from: process.env.FROM_EMAIL || "noreply@skynode.local",

    // SMTP Configuration
    smtp: {
      host: process.env.SMTP_HOST || "localhost",
      port: parseInt(process.env.SMTP_PORT || "1025", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    },

    // Gmail Configuration
    gmail: {
      user: process.env.GMAIL_USER || "",
      appPassword: process.env.GMAIL_APP_PASSWORD || "",
    },

    // Outlook Configuration
    outlook: {
      user: process.env.OUTLOOK_USER || "",
      password: process.env.OUTLOOK_PASSWORD || "",
    },

    // SendGrid Configuration
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY || "",
    },

    // Mailgun Configuration
    mailgun: {
      domain: process.env.MAILGUN_DOMAIN || "",
      apiKey: process.env.MAILGUN_API_KEY || "",
    },
  },
} as const;

export default config;