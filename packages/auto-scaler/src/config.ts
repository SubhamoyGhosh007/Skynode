import "dotenv/config";
import type { ScalingThresholds, WorkerPriority } from "./types/scale.types.js";

export const config = {
  kafka: {
    broker: process.env.KAFKA_BROKER || "localhost:9092",
    topic: "email-notifications",
    groupId: "email-worker-group",
  },

  // How often to check lag and scale (in milliseconds)
  checkIntervalMs: parseInt(process.env.CHECK_INTERVAL_MS || "30000", 10),

  // Minimum containers to keep running per priority
  minWorkers: {
    LOW: parseInt(process.env.MIN_LOW_WORKERS || "1", 10),
    MEDIUM: parseInt(process.env.MIN_MEDIUM_WORKERS || "2", 10),
    HIGH: parseInt(process.env.MIN_HIGH_WORKERS || "2", 10),
  },

  // Spike thresholds - when lag exceeds these, scale up
  thresholds: {
    LOW: parseInt(process.env.LOW_SPIKE_THRESHOLD || "50", 10),
    MEDIUM: parseInt(process.env.MEDIUM_SPIKE_THRESHOLD || "30", 10),
    HIGH: parseInt(process.env.HIGH_SPIKE_THRESHOLD || "20", 10),
  } as ScalingThresholds,

  // How many workers to add per spike
  spikeWorkers: {
    LOW: parseInt(process.env.SPIKE_LOW_WORKERS || "0", 10),
    MEDIUM: parseInt(process.env.SPIKE_MEDIUM_WORKERS || "0", 10),
    HIGH: parseInt(process.env.SPIKE_HIGH_WORKERS || "2", 10),
  },

  // Docker settings
  docker: {
    image: process.env.WORKER_IMAGE || "skynode-email-worker:latest",
    // For local dev, we'll use docker run with the local dev command
    // In production, this would be the actual image
    useLocalDev: process.env.USE_LOCAL_DEV === "true",
    localCommand: "pnpm --filter @skynode/email-worker dev",
    containerPrefix: process.env.CONTAINER_PREFIX || "email-worker",
  },

  // Partition to priority mapping
  partitionPriorityMap: {
    0: "LOW",
    1: "MEDIUM",
    2: "HIGH",
  } as Record<number, WorkerPriority>,
} as const;

export default config;