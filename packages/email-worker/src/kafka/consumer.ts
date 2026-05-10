import { Kafka, Consumer, EachMessagePayload } from "kafkajs";
import type { EmailMessage } from "@skynode/mail-service/types/mail.types.js";

const KAFKA_BROKER = process.env.KAFKA_BROKER || "localhost:9092";
const TOPIC = "email-notifications";
const GROUP_ID = "email-worker-group";

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

  await consumer!.subscribe({ topic: TOPIC, fromBeginning: false });

  await consumer!.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      if (!message.value) {
        console.warn("Received empty message");
        return;
      }

      try {
        const emailMessage: EmailMessage = JSON.parse(message.value.toString());
        console.log(`Processing message from partition ${partition}:`, emailMessage.type);
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