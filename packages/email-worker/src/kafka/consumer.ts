import { Kafka, Consumer, EachMessagePayload } from "kafkajs";
import type { EmailMessage } from "@skynode/mail-service/src/types/mail.types.js"
import { config } from "../config.js";

const KAFKA_BROKER = config.kafka.broker;
const TOPIC = config.kafka.topic;
const GROUP_ID = config.kafka.groupId;

// Partition to priority mapping
const PARTITION_PRIORITY_MAP: Record<number, string> = {
  0: "LOW",
  1: "MEDIUM",
  2: "HIGH",
};

export const kafka = new Kafka({
  clientId: "email-worker",
  brokers: [KAFKA_BROKER],
});

let consumer: Consumer | null = null;

export type MessageHandler = (message: EmailMessage) => Promise<void>;

export const createConsumer = async (): Promise<Consumer> => {
  consumer = kafka.consumer({ groupId: GROUP_ID });
  await consumer.connect();
  console.log("Kafka consumer connected");
  return consumer;
};

export const subscribeToTopic = async (handler: MessageHandler): Promise<void> => {
  if (!consumer) {
    await createConsumer();
  }

  // Get the priority from config - if "ALL", subscribe to all partitions
  const workerPriority = config.worker.priority;

  console.log(`Worker priority mode: ${workerPriority}`);

  // Determine which partitions to subscribe to based on priority
  const partitionsToSubscribe: number[] = [];

  if (workerPriority === "ALL") {
    // Subscribe to all partitions
    partitionsToSubscribe.push(0, 1, 2);
  } else {
    // Subscribe to specific partition based on priority
    const partitionMap: Record<string, number> = {
      LOW: 0,
      MEDIUM: 1,
      HIGH: 2,
    };
    const partition = partitionMap[workerPriority];
    if (partition !== undefined) {
      partitionsToSubscribe.push(partition);
    } else {
      console.warn(`Unknown priority: ${workerPriority}, subscribing to all`);
      partitionsToSubscribe.push(0, 1, 2);
    }
  }

  console.log(`Subscribing to partitions: ${partitionsToSubscribe.join(", ")}`);

  // Subscribe to the topic
  await consumer!.subscribe({ topic: TOPIC, fromBeginning: true });

  // Run with partition filter
  await consumer!.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      // Skip if this partition is not for our priority
      if (!partitionsToSubscribe.includes(partition)) {
        return;
      }

      if (!message.value) {
        console.warn("Received empty message");
        return;
      }

      try {
        const emailMessage: EmailMessage = JSON.parse(message.value.toString());
        console.log(`[${workerPriority}] Processing message from partition ${partition}:`, emailMessage.type);
        await handler(emailMessage);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    },
  });

  console.log(`Subscribed to topic: ${TOPIC}`);
};

export const disconnectConsumer = async (): Promise<void> => {
  if (consumer) {
    await consumer.disconnect();
    console.log("Kafka consumer disconnected");
  }
};

export const getConsumer = (): Consumer | null => consumer;