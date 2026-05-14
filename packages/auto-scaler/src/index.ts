import config from "./config.js";
import { getLagByPriority, disconnect as disconnectKafka } from "./services/kafka-lag.js";
import {
  getContainerCountByPriority,
  scaleWorkers,
} from "./services/docker-scale.js";
import type { WorkerPriority, WorkerCount } from "./types/scale.types.js";

console.log("Starting Auto-Scaler...");
console.log("Config:", JSON.stringify(config, null, 2));

// Calculate target worker count based on lag
const calculateTargetWorkers = (lag: Record<WorkerPriority, number>): WorkerCount => {
  const target: WorkerCount = {
    LOW: config.minWorkers.LOW,
    MEDIUM: config.minWorkers.MEDIUM,
    HIGH: config.minWorkers.HIGH,
  };

  // Check for spikes and add workers
  if (lag.LOW > config.thresholds.LOW) {
    target.LOW += config.spikeWorkers.LOW;
  }

  if (lag.MEDIUM > config.thresholds.MEDIUM) {
    target.MEDIUM += config.spikeWorkers.MEDIUM;
  }

  if (lag.HIGH > config.thresholds.HIGH) {
    target.HIGH += config.spikeWorkers.HIGH;
  }

  // If lower priority is empty, redistribute to higher
  if (lag.LOW === 0) {
    // LOW is empty, move its workers to MEDIUM and HIGH
    // For simplicity, just don't run LOW workers
    target.LOW = 0;
    target.MEDIUM += 1;
    target.HIGH += 1;
  }

  if (lag.LOW === 0 && lag.MEDIUM === 0) {
    // Both LOW and MEDIUM empty, all to HIGH
    target.LOW = 0;
    target.MEDIUM = 0;
    target.HIGH = 5;
  }

  return target;
};

// Main scaling loop
const runScalingLoop = async (): Promise<void> => {
  try {
    console.log("\n--- Checking Kafka Lag ---");

    // Get current lag per priority
    const lag = await getLagByPriority();
    console.log("Current lag:", lag);

    // Get current running containers
    const currentCount = await getContainerCountByPriority();
    console.log("Current workers:", currentCount);

    // Calculate target workers
    const targetCount = calculateTargetWorkers(lag);
    console.log("Target workers:", targetCount);

    // Check if we need to scale
    const needsScaling =
      currentCount.LOW !== targetCount.LOW ||
      currentCount.MEDIUM !== targetCount.MEDIUM ||
      currentCount.HIGH !== targetCount.HIGH;

    if (needsScaling) {
      console.log("Scaling workers...");
      await scaleWorkers(currentCount, targetCount);
    } else {
      console.log("No scaling needed");
    }
  } catch (error) {
    console.error("Error in scaling loop:", error);
  }
};

// Start the scaling loop
const start = async (): Promise<void> => {
  console.log(
    `Auto-scaler started. Checking every ${config.checkIntervalMs / 1000} seconds`
  );

  // Run immediately
  await runScalingLoop();

  // Then run on interval
  setInterval(runScalingLoop, config.checkIntervalMs);
};

// Handle graceful shutdown
const shutdown = async (): Promise<void> => {
  console.log("Shutting down auto-scaler...");
  await disconnectKafka();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

start();