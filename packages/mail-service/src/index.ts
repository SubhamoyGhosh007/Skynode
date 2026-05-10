
export { config, default } from "./config/index.js";
export {
  initMailTransporter,
  initGmailTransporter,
  initOutlookTransporter,
  initSendGridTransporter,
  initMailgunTransporter,
  getTransporter,
  getMailConfig,
  getCurrentProvider,
  createTransporter,
  type MailProvider,
  type MailServiceConfig
} from "./nodemailer.js";
export { getWelcomeEmailTemplate } from "./templates/welcome.js";
export type { EmailMessage, EmailPriority, EmailType, SendEmailOptions, MailConfig } from "./types/mail.types.js";

import { createTransporter, getMailConfig } from "./nodemailer.js";
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
  const mailConfig = getMailConfig();

  const info = await transporter.sendMail({
    from: mailConfig.from,
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
console.log("Config: ", config);