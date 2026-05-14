import dotenv from "dotenv"
dotenv.config({
  path: `./.env.${process.env.NODE_ENV || "development"}.local`
})

// Priority type
type WorkerPriority = "LOW" | "MEDIUM" | "HIGH" | "ALL";

export const config = {
  kafka: {
    broker: process.env.KAFKA_BROKER || "localhost:9092",
    topic: "email-notifications",
    groupId: "email-worker-group",
  },
  worker: {
    count: parseInt(process.env.WORKER_COUNT || "5", 10),
    priority: (process.env.WORKER_PRIORITY as WorkerPriority) || "ALL",
  },
  mail: {
    provider: (process.env.MAIL_PROVIDER || "smtp") as "gmail" | "smtp" | "outlook" | "sendgrid" | "mailgun",
    from: process.env.FROM_EMAIL || "noreply@skynode.local",
    smtp: {
      host: process.env.SMTP_HOST || "localhost",
      port: parseInt(process.env.SMTP_PORT || "1025", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    },
    gmail: {
      user: process.env.GMAIL_USER || "",
      pass: process.env.GMAIL_APP_PASSWORD || "",
    },
    outlook: {
      user: process.env.OUTLOOK_USER || "",
      pass: process.env.OUTLOOK_PASSWORD || "",
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY || "",
    },
    mailgun: {
      domain: process.env.MAILGUN_DOMAIN || "",
      apiKey: process.env.MAILGUN_API_KEY || "",
    },
  },
};
