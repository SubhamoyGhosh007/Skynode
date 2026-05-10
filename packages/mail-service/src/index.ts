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
  type MailProvider
} from "./nodemailer.js";
export { getWelcomeEmailTemplate } from "./templates/welcome.js";
export type { EmailMessage, EmailPriority, EmailType, SendEmailOptions, MailConfig } from "./types/mail.types.js";

import { createTransporter, getMailConfig } from "./nodemailer.js";

const sendEmail = async (to: string, subject: string, html: string, text?: string) => {
  const transporter = createTransporter();
  const config = getMailConfig();

  const info = await transporter.sendMail({
    from: config.from,
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

// Auto-initialize on import
createTransporter();
console.log("Mail service initialized");