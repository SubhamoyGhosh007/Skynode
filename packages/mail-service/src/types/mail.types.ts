export type EmailPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export type EmailType =
  | 'WELCOME_EMAIL'
  | 'PASSWORD_RESET'
  | 'EMAIL_VERIFICATION'
  | 'SERVER_ALERT'
  | 'BILLING_NOTIFICATION';

export interface EmailMessage {
  type: EmailType;
  userId: string;
  email: string;
  name: string;
  priority: EmailPriority;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}