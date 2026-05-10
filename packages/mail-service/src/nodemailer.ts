import nodemailer, { Transporter } from "nodemailer";
import type { MailConfig } from "./types/mail.types.js";

let transporter: Transporter | null = null;

export type MailProvider = "gmail" | "smtp" | "outlook" | "sendgrid" | "mailgun" | "resend";

export interface MailServiceConfig {
  provider?: MailProvider;
  host?: string;
  port?: number;
  secure?: boolean;
  auth?: {
    user?: string;
    pass?: string;
  };
  from?: string;
}

export const initMailTransporter = (config: MailConfig): Transporter => {
  console.log('Initializing SMTP transporter:', config.host, config.port);
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  return transporter;
};

export const initGmailTransporter = (user: string, appPassword: string): Transporter => {
  if (!user || !appPassword) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: appPassword,
    },
  });

  console.log(`Gmail transporter initialized for: ${user}`);

  return transporter;
};

export const initOutlookTransporter = (user: string, password: string): Transporter => {
  if (!user || !password) {
    throw new Error("OUTLOOK_USER and OUTLOOK_PASSWORD environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: password,
    },
  });

  return transporter;
};

export const initSendGridTransporter = (apiKey: string): Transporter => {
  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY environment variable is required");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: apiKey,
    },
  });

  return transporter;
};

export const initMailgunTransporter = (domain: string, apiKey: string): Transporter => {
  if (!domain || !apiKey) {
    throw new Error("MAILGUN_DOMAIN and MAILGUN_API_KEY environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host: `smtp.${domain}`,
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: apiKey,
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

export const createTransporter = (config?: MailServiceConfig): Transporter => {
  // If config is provided, use its provider; otherwise read from env
  const provider = config?.provider || getCurrentProvider();
  console.log(`Initializing mail provider: ${provider}`);

  switch (provider) {
    case "gmail":
      // Use config values or fall back to env
      const gmailUser = config?.auth?.user || process.env.GMAIL_USER || "";
      const gmailPass = config?.auth?.pass || process.env.GMAIL_APP_PASSWORD || "";
      return initGmailTransporter(gmailUser, gmailPass);

    case "outlook":
      const outlookUser = config?.auth?.user || process.env.OUTLOOK_USER || "";
      const outlookPass = config?.auth?.pass || process.env.OUTLOOK_PASSWORD || "";
      return initOutlookTransporter(outlookUser, outlookPass);

    case "sendgrid":
      const sendgridKey = process.env.SENDGRID_API_KEY || "";
      return initSendGridTransporter(sendgridKey);

    case "mailgun":
      const mailgunDomain = process.env.MAILGUN_DOMAIN || "";
      const mailgunKey = process.env.MAILGUN_API_KEY || "";
      return initMailgunTransporter(mailgunDomain, mailgunKey);

    case "smtp":
    default:
      // Build config from provided values or env
      const smtpConfig: MailConfig = {
        host: config?.host || process.env.SMTP_HOST || "localhost",
        port: config?.port || parseInt(process.env.SMTP_PORT || "1025", 10),
        secure: config?.secure || process.env.SMTP_SECURE === "true",
        auth: {
          user: config?.auth?.user || process.env.SMTP_USER || "",
          pass: config?.auth?.pass || process.env.SMTP_PASS || "",
        },
        from: config?.from || process.env.FROM_EMAIL || "noreply@skynode.local",
      };
      return initMailTransporter(smtpConfig);
  }
};