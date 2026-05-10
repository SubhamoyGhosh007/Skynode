import { config } from "./config.js";
import { subscribeToTopic, disconnectConsumer } from "./kafka/consumer.js";
import { processEmailMessage } from "./services/email.service.js";
import {
  DEFAULT_ALLOCATION,
  calculateWorkerAllocation,
  type PriorityQueueState,
} from "./worker/priority.js";

import {
  WorkerScheduler
} from "./worker/scheduler.js"
import { createTransporter } from "@skynode/mail-service/src/nodemailer.js";

const WORKER_COUNT = config.worker.count;

console.log(`Starting email worker with ${WORKER_COUNT} workers...`);

// Explicitly initialize mail transporter with config
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

// Initialize worker scheduler
const scheduler = new WorkerScheduler(DEFAULT_ALLOCATION);

// Register workers
for (let i = 0; i < WORKER_COUNT; i++) {
  scheduler.registerWorker(i, (workerId:number, partitions: number[]) => {
    console.log(`Worker ${workerId} assigned to partitions:`, partitions);
  });
}

// Start monitoring
scheduler.startMonitoring(30000);

// Simulate queue depth monitoring (in production, this would query Kafka offsets)
let queueState: PriorityQueueState = {
  lowDepth: 5,
  mediumDepth: 3,
  highDepth: 2,
};

// Check queue depth periodically and rebalance if needed
setInterval(() => {
  // In production, query Kafka to get actual lag/depth per partition
  // For now, simulate random changes
  queueState = {
    lowDepth: Math.floor(Math.random() * 10),
    mediumDepth: Math.floor(Math.random() * 10),
    highDepth: Math.floor(Math.random() * 50), // Simulate spike
  };

  const newAllocation = calculateWorkerAllocation(queueState);
  scheduler.rebalance(newAllocation);
}, 60000);

// Handle graceful shutdown
const shutdown = async () => {
  console.log("Shutting down email worker...");
  scheduler.stopMonitoring();
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