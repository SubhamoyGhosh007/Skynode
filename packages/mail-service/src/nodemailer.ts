import nodemailer, { Transporter } from "nodemailer";
import type { MailConfig } from "./types/mail.types.js";

let transporter: Transporter | null = null;

export type MailProvider = "gmail" | "smtp" | "outlook" | "sendgrid" | "mailgun" | "resend";

export const initMailTransporter = (config: MailConfig): Transporter => {
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  return transporter;
};

export const initGmailTransporter = (): Transporter => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  console.log(`Gmail transporter initialized for: ${gmailUser}`);

  return transporter;
};

export const initOutlookTransporter = (): Transporter => {
  const outlookUser = process.env.OUTLOOK_USER;
  const outlookPassword = process.env.OUTLOOK_PASSWORD;

  if (!outlookUser || !outlookPassword) {
    throw new Error("OUTLOOK_USER and OUTLOOK_PASSWORD environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: outlookUser,
      pass: outlookPassword,
    },
  });

  return transporter;
};

export const initSendGridTransporter = (): Transporter => {
  const sendGridApiKey = process.env.SENDGRID_API_KEY;

  if (!sendGridApiKey) {
    throw new Error("SENDGRID_API_KEY environment variable is required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: sendGridApiKey,
    },
  });

  return transporter;
};

export const initMailgunTransporter = (): Transporter => {
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;

  if (!mailgunDomain || !mailgunApiKey) {
    throw new Error("MAILGUN_DOMAIN and MAILGUN_API_KEY environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: `smtp.${mailgunDomain}`,
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: mailgunApiKey,
    },
  });

  return transporter;
};

export const getTransporter = (): Transporter => {
  if (!transporter) {
    throw new Error("Mail transporter not initialized. Call createTransporter first.");
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

export const getCurrentProvider = (): MailProvider => {
  return (process.env.MAIL_PROVIDER as MailProvider) || "smtp";
};

export const createTransporter = (): Transporter => {
  const provider = getCurrentProvider();
  console.log(`Initializing mail provider: ${provider}`);

  switch (provider) {
    case "gmail":
      return initGmailTransporter();
    case "outlook":
      return initOutlookTransporter();
    case "sendgrid":
      return initSendGridTransporter();
    case "mailgun":
      return initMailgunTransporter();
    case "smtp":
    default:
      return initMailTransporter(getMailConfig());
  }
};