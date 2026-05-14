import Dockerode from "dockerode";
import type { WorkerPriority, WorkerCount, ContainerInfo } from "../types/scale.types.js";
import config from "../config.js";

const docker = new Dockerode();

export const getRunningContainers = async (): Promise<ContainerInfo[]> => {
  const containers = await docker.listContainers({
    all: false,
    filters: {
      label: [`app=skynode`],
    },
  });

  return containers
    .filter((c) => c.Labels?.["priority"])
    .map((c) => ({
      id: c.Id,
      priority: c.Labels?.["priority"] as WorkerPriority,
      created: c.Created,
    }));
};

export const getContainerCountByPriority = async (): Promise<WorkerCount> => {
  const containers = await getRunningContainers();

  const count: WorkerCount = {
    LOW: 0,
    MEDIUM: 0,
    HIGH: 0,
  };

  for (const container of containers) {
    count[container.priority]++;
  }

  return count;
};

export const startWorker = async (priority: WorkerPriority): Promise<void> => {
  const containerName = `${config.docker.containerPrefix}-${priority}-${Date.now()}`;

  console.log(`Starting worker for priority: ${priority}`);

  if (config.docker.useLocalDev) {
    // For local dev, we'll use dockerode to run a container that runs the dev command
    // Actually, for local dev we might just spawn a process instead
    // For now, let's use a simple approach - just log what we'd do
    console.log(`[DEV] Would run: ${config.docker.localCommand} with priority=${priority}`);
    console.log(`[DEV] Container name: ${containerName}`);
    return;
  }

  // For production, run actual Docker container
  await docker.run(config.docker.image, [], process.stdout, {
    name: containerName,
    Labels: {
      app: "skynode",
      priority: priority,
    },
    Env: [`WORKER_PRIORITY=${priority}`],
    // Add any other necessary configurations
  });
};

export const stopWorker = async (priority: WorkerPriority): Promise<void> => {
  const containers = await getRunningContainers();
  const priorityContainers = containers.filter((c) => c.priority === priority);

  if (priorityContainers.length === 0) {
    console.log(`No containers to stop for priority: ${priority}`);
    return;
  }

  // Stop the oldest container for this priority
  const toStop = priorityContainers.sort((a, b) => a.created - b.created)[0];

  console.log(`Stopping worker: ${toStop.id} (priority: ${priority})`);

  const container = docker.getContainer(toStop.id);
  await container.stop();
  await container.remove();
};

export const scaleWorkers = async (
  currentCount: WorkerCount,
  targetCount: WorkerCount
): Promise<void> => {
  const priorities: WorkerPriority[] = ["LOW", "MEDIUM", "HIGH"];

  for (const priority of priorities) {
    const diff = targetCount[priority] - currentCount[priority];

    if (diff > 0) {
      // Need to start more workers
      for (let i = 0; i < diff; i++) {
        await startWorker(priority);
      }
    } else if (diff < 0) {
      // Need to stop some workers
      for (let i = 0; i < Math.abs(diff); i++) {
        await stopWorker(priority);
      }
    }
  }
};