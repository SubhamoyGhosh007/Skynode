export interface WelcomeEmailData {
  name: string;
  email: string;
}

export const getWelcomeEmailTemplate = (data: WelcomeEmailData): { html: string; text: string } => {
  const { name, email } = data;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #6366f1; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .button { display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to SkyNode!</h1>
    </div>
    <div class="content">
      <h2>Hello ${name},</h2>
      <p>Welcome to SkyNode! We're excited to have you on board.</p>
      <p>With SkyNode, you can easily manage your game servers, monitor performance, and scale as needed.</p>
      <p>Your account has been created with the email: <strong>${email}</strong></p>
      <a href="#" class="button">Get Started</a>
      <p>If you have any questions, feel free to reach out to our support team.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} SkyNode. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const text = `
Welcome to SkyNode!

Hello ${name},

Welcome to SkyNode! We're excited to have you on board.

With SkyNode, you can easily manage your game servers, monitor performance, and scale as needed.

Your account has been created with the email: ${email}

Get started by logging into your dashboard.

If you have any questions, feel free to reach out to our support team.

© ${new Date().getFullYear()} SkyNode. All rights reserved.
  `.trim();

  return { html, text };
};