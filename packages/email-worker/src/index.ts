import { config } from "./config.js";
import { subscribeToTopic, disconnectConsumer } from "./kafka/consumer.js";
import { processEmailMessage } from "./services/email.service.js";
import { createTransporter } from "@skynode/mail-service/src/nodemailer.js";

console.log(`Starting email worker...`);
console.log(`Worker priority: ${config.worker.priority}`);

// Initialize mail transporter
createTransporter({
  provider: config.mail.provider,
  auth: {
    user: config.mail.provider === "gmail"
      ? config.mail.gmail.user
      : config.mail.smtp.auth.user,
    pass: config.mail.provider === "gmail"
      ? config.mail.gmail.pass
      : config.mail.smtp.auth.pass,
  },
});

// Handle graceful shutdown
const shutdown = async () => {
  console.log("Shutting down email worker...");
  await disconnectConsumer();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Start consuming messages
const start = async () => {
  try {
    console.log("Subscribing to Kafka topic...");
    await subscribeToTopic(async (message) => {
      await processEmailMessage(message);
    });
    console.log("Email worker started successfully");
  } catch (error) {
    console.error("Failed to start email worker:", error);
    process.exit(1);
  }
};

start();