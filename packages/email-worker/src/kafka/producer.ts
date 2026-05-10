import { Kafka, Producer } from "kafkajs";
import type { EmailMessage } from "@skynode/mail-service/src/types/mail.types.js";
import { config } from "../config.js";

const KAFKA_BROKER = config.kafka.broker;
const TOPIC = config.kafka.topic;

export const kafka = new Kafka({
  clientId: "email-worker",
  brokers: [KAFKA_BROKER],
});

let producer: Producer | null = null;

export const connectProducer = async (): Promise<Producer> => {
  if (producer) return producer;

  producer = kafka.producer();
  await producer.connect();
  console.log("Kafka producer connected");
  return producer;
};

export const publishEmailMessage = async (message: EmailMessage): Promise<void> => {
  if (!producer) {
    await connectProducer();
  }

  const partition = getPartitionForPriority(message.priority);

  await producer!.send({
    topic: TOPIC,
    messages: [
      {
        key: message.userId,
        value: JSON.stringify(message),
        partition,
      },
    ],
  });

  console.log(`Published ${message.type} email to partition ${partition}`);
};

const getPartitionForPriority = (priority: string): number => {
  switch (priority) {
    case "HIGH":
      return 2;
    case "MEDIUM":
      return 1;
    case "LOW":
    default:
      return 0;
  }
};

export const disconnectProducer = async (): Promise<void> => {
  if (producer) {
    await producer.disconnect();
    console.log("Kafka producer disconnected");
  }
};

export const publishWelcomeEmail = async (
  userId: string,
  email: string,
  name: string,
  priority: "LOW" | "MEDIUM" | "HIGH" = "LOW"
): Promise<void> => {
  const message: EmailMessage = {
    type: "WELCOME_EMAIL",
    userId,
    email,
    name,
    priority,
    createdAt: new Date().toISOString(),
  };

  await publishEmailMessage(message);
};