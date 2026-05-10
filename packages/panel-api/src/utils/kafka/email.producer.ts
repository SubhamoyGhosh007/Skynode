import { Kafka, Producer } from "kafkajs";

const KAFKA_BROKER = process.env.KAFKA_BROKER || "localhost:9092";
const TOPIC = "email-notifications";

export type EmailPriority = "LOW" | "MEDIUM" | "HIGH";
export type EmailType =
  | "WELCOME_EMAIL"
  | "PASSWORD_RESET"
  | "EMAIL_VERIFICATION"
  | "SERVER_ALERT"
  | "BILLING_NOTIFICATION";

export interface EmailMessage {
  type: EmailType;
  userId: string;
  email: string;
  name: string;
  priority: EmailPriority;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

let producer: Producer | null = null;
let isConnected = false;

export const connectProducer = async (): Promise<Producer> => {
  if (producer && isConnected) return producer;

  const kafka = new Kafka({
    clientId: "panel-api-producer",
    brokers: [KAFKA_BROKER],
  });

  producer = kafka.producer();
  await producer.connect();
  isConnected = true;
  console.log("Kafka producer connected");
  return producer;
};

export const publishEmailMessage = async (message: EmailMessage): Promise<void> => {
  // Check if Kafka is enabled
  if (process.env.KAFKA_ENABLED !== "true") {
    console.log(`Kafka disabled. Would publish: ${message.type} to ${message.email}`);
    return;
  }

  try {
    if (!producer || !isConnected) {
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
  } catch (error) {
    console.error("Failed to publish to Kafka:", error);
  }
};

const getPartitionForPriority = (priority: EmailPriority): number => {
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

export const publishWelcomeEmail = async (
  userId: string,
  email: string,
  name: string,
  priority: EmailPriority = "LOW"
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

export const disconnectProducer = async (): Promise<void> => {
  if (producer) {
    await producer.disconnect();
    isConnected = false;
    console.log("Kafka producer disconnected");
  }
};