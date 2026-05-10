import { EmailService, getWelcomeEmailTemplate } from "@skynode/mail-service/index.js";
import type { EmailMessage } from "@skynode/mail-service/types/mail.types.js";

export const processEmailMessage = async (message: EmailMessage): Promise<void> => {
  console.log(`Processing ${message.type} email for ${message.email}`);

  switch (message.type) {
    case "WELCOME_EMAIL":
      await sendWelcomeEmail(message);
      break;
    case "PASSWORD_RESET":
      await sendPasswordResetEmail(message);
      break;
    case "EMAIL_VERIFICATION":
      await sendEmailVerification(message);
      break;
    case "SERVER_ALERT":
      await sendServerAlert(message);
      break;
    case "BILLING_NOTIFICATION":
      await sendBillingNotification(message);
      break;
    default:
      console.warn(`Unknown email type: ${(message as EmailMessage).type}`);
  }
};

const sendWelcomeEmail = async (message: EmailMessage): Promise<void> => {
  const { html, text } = getWelcomeEmailTemplate({
    name: message.name,
    email: message.email,
  });

  await EmailService.sendEmail(message.email, "Welcome to SkyNode!", html, text);
};

const sendPasswordResetEmail = async (message: EmailMessage): Promise<void> => {
  const resetLink = (message.metadata?.resetLink as string) || "#";
  const html = `
    <h1>Password Reset</h1>
    <p>Hello ${message.name},</p>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}">Reset Password</a>
    <p>This link expires in 1 hour.</p>
  `;
  const text = `Hello ${message.name},\n\nClick the link below to reset your password: ${resetLink}\n\nThis link expires in 1 hour.`;

  await EmailService.sendEmail(message.email, "Password Reset - SkyNode", html, text);
};

const sendEmailVerification = async (message: EmailMessage): Promise<void> => {
  const verifyLink = (message.metadata?.verifyLink as string) || "#";
  const html = `
    <h1>Verify Your Email</h1>
    <p>Hello ${message.name},</p>
    <p>Click the link below to verify your email:</p>
    <a href="${verifyLink}">Verify Email</a>
  `;
  const text = `Hello ${message.name},\n\nClick the link below to verify your email: ${verifyLink}`;

  await EmailService.sendEmail(message.email, "Verify Your Email - SkyNode", html, text);
};

const sendServerAlert = async (message: EmailMessage): Promise<void> => {
  const alertMessage = (message.metadata?.alertMessage as string) || "Server alert";
  const html = `
    <h1>Server Alert</h1>
    <p>${alertMessage}</p>
    <p>Server: ${message.metadata?.serverName || "N/A"}</p>
  `;
  const text = `Server Alert: ${alertMessage}\nServer: ${message.metadata?.serverName || "N/A"}`;

  await EmailService.sendEmail(message.email, "Server Alert - SkyNode", html, text);
};

const sendBillingNotification = async (message: EmailMessage): Promise<void> => {
  const notification = (message.metadata?.notification as string) || "Billing update";
  const html = `
    <h1>Billing Notification</h1>
    <p>${notification}</p>
  `;
  const text = `Billing Notification: ${notification}`;

  await EmailService.sendEmail(message.email, "Billing Notification - SkyNode", html, text);
};