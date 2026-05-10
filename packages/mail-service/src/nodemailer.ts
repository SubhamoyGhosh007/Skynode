import nodemailer, { Transporter } from "nodemailer";
import type { MailConfig } from "./types/mail.types.js";

let transporter: Transporter | null = null;

export const initMailTransporter = (config: MailConfig): Transporter => {
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  return transporter;
};

export const getTransporter = (): Transporter => {
  if (!transporter) {
    throw new Error("Mail transporter not initialized. Call initMailTransporter first.");
  }
  return transporter;
};

export const getMailConfig = (): MailConfig => {
  return {
    host: process.env.SMTP_HOST || "localhost",
    port: parseInt(process.env.SMTP_PORT || "1025", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
    from: process.env.FROM_EMAIL || "noreply@skynode.local",
  };
};

export const createTransporter = (): Transporter => {
  const config = getMailConfig();
  return initMailTransporter(config);
};