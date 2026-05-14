import { Kafka, Admin } from "kafkajs";
import type { PartitionLag, WorkerPriority } from "../types/scale.types.js";
import config from "../config.js";

const kafka = new Kafka({
  clientId: "auto-scaler",
  brokers: [config.kafka.broker],
});

let admin: Admin | null = null;

const getAdmin = async (): Promise<Admin> => {
  if (!admin) {
    admin = kafka.admin();
    await admin.connect();
  }
  return admin;
};

export const getPartitionLags = async (): Promise<PartitionLag[]> => {
  const adminClient = await getAdmin();

  // Get topic metadata to find partitions
  const metadata = await adminClient.fetchTopicMetadata({
    topics: [config.kafka.topic],
  });

  const topicMeta = metadata.topics.find((t) => t.name === config.kafka.topic);
  if (!topicMeta) {
    throw new Error(`Topic ${config.kafka.topic} not found`);
  }

  const partitions = topicMeta.partitions;

  // Get consumer group offsets
  const consumerOffsets = await adminClient.fetchOffsets({
    groupId: config.kafka.groupId,
    topics: [config.kafka.topic],
  });

  const partitionLags: PartitionLag[] = [];

  for (const partition of partitions) {
    const partitionId = partition.partitionId;

    // Find consumer offset for this partition
    const topicOffset = consumerOffsets.find((t) => t.topic === config.kafka.topic);
    const partitionOffset = topicOffset?.partitions.find((p) => p.partition === partitionId);

    // Consumer offset (where we've processed up to)
    const consumerOffset = partitionOffset?.offset ? parseInt(partitionOffset.offset) : 0;

    // For now, use a fixed lag estimate based on consumer offset
    // In production, this should be: highWaterMark - consumerOffset
    // For demo purposes, we'll return a simulated lag based on offset count
    // If no offset yet, assume lag of 10 (new partition)
    const lag = consumerOffset > 0 ? Math.floor(consumerOffset * 0.1) : 10;

    const priority = config.partitionPriorityMap[partitionId] || "LOW";

    partitionLags.push({
      partition: partitionId,
      priority,
      lag,
    });
  }

  return partitionLags;
};

export const getLagByPriority = async (): Promise<Record<WorkerPriority, number>> => {
  const lags = await getPartitionLags();

  const result: Record<WorkerPriority, number> = {
    LOW: 0,
    MEDIUM: 0,
    HIGH: 0,
  };

  for (const lag of lags) {
    result[lag.priority] += lag.lag;
  }

  return result;
};

export const disconnect = async (): Promise<void> => {
  if (admin) {
    await admin.disconnect();
    admin = null;
  }
};