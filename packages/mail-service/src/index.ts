export { config, default } from "./config/index.js";

// Re-export nodemailer functions
export {
  initMailTransporter,
  initGmailTransporter,
  getTransporter,
  getMailConfig,
  getCurrentProvider,
  createTransporter,
  type MailProvider,
  type MailServiceConfig
} from "./nodemailer.js";

// Future exports (uncomment when implementing)
// export { initOutlookTransporter } from "./nodemailer.js";
// export { initSendGridTransporter } from "./nodemailer.js";
// export { initMailgunTransporter } from "./nodemailer.js";

// Re-export templates
export { getWelcomeEmailTemplate } from "./templates/welcome.js";

// Re-export types
export type { EmailMessage, EmailPriority, EmailType, SendEmailOptions, MailConfig } from "./types/mail.types.js";

// Core email service - this is what's actually used
import { createTransporter } from "./nodemailer.js";
import { config } from "./config/index.js";

// Initialize transporter on module load using config
const transporter = createTransporter({
  provider: config.mail.provider,
  auth: {
    user: config.mail.provider === "gmail"
      ? config.mail.gmail.user
      : config.mail.smtp.auth.user,
    pass: config.mail.provider === "gmail"
      ? config.mail.gmail.appPassword
      : config.mail.smtp.auth.pass,
  },
});

const sendEmail = async (to: string, subject: string, html: string, text?: string) => {
  const info = await transporter.sendMail({
    from: config.mail.from,
    to,
    subject,
    html,
    text,
  });

  console.log(`Email sent: ${info.messageId}`);
  return info;
};

export const EmailService = {
  sendEmail,
};

console.log("Mail service initialized");
console.log("Config:", config);