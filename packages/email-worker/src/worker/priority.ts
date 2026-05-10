import type { EmailPriority } from "@skynode/mail-service/types/mail.types.js";

export interface PartitionAssignment {
  partition: number;
  priority: EmailPriority;
}

export const PRIORITY_PARTITION_MAP: PartitionAssignment[] = [
  { partition: 0, priority: "LOW" },
  { partition: 1, priority: "MEDIUM" },
  { partition: 2, priority: "HIGH" },
];

export const getPartitionForPriority = (priority: EmailPriority): number => {
  const assignment = PRIORITY_PARTITION_MAP.find((p) => p.priority === priority);
  return assignment?.partition ?? 0;
};

export interface WorkerAllocation {
  workerId: number;
  partitions: number[];
}

export interface PriorityQueueState {
  lowDepth: number;
  mediumDepth: number;
  highDepth: number;
}

export const DEFAULT_ALLOCATION: WorkerAllocation[] = [
  { workerId: 0, partitions: [0] },        // 1 worker -> Low
  { workerId: 1, partitions: [1] },        // 1 worker -> Medium
  { workerId: 2, partitions: [1, 2] },     // 1 worker -> Medium + High
  { workerId: 3, partitions: [2] },        // 1 worker -> High
  { workerId: 4, partitions: [2] },        // 1 worker -> High
];

export const SPIKE_THRESHOLD = 10; // If high priority has 10x messages of medium

export const calculateWorkerAllocation = (queueState: PriorityQueueState): WorkerAllocation[] => {
  const { lowDepth, mediumDepth, highDepth } = queueState;
  const totalWorkers = 5;

  // Check if high priority has a spike
  const highSpike = mediumDepth > 0 && highDepth / mediumDepth > SPIKE_THRESHOLD;

  if (highSpike) {
    // High priority spike: 1 low, 1 medium, rest to high
    return [
      { workerId: 0, partitions: [0] },        // Low
      { workerId: 1, partitions: [1] },         // Medium
      { workerId: 2, partitions: [2] },        // High
      { workerId: 3, partitions: [2] },        // High
      { workerId: 4, partitions: [2] },        // High (4 workers on high)
    ];
  }

  // Check if lower priority queues are empty
  if (lowDepth === 0 && mediumDepth > 0) {
    // Low is empty, redistribute to medium and high
    return [
      { workerId: 0, partitions: [1] },         // Low empty -> Medium
      { workerId: 1, partitions: [1] },         // Medium
      { workerId: 2, partitions: [2] },         // High
      { workerId: 3, partitions: [2] },         // High
      { workerId: 4, partitions: [2] },         // High
    ];
  }

  if (lowDepth === 0 && mediumDepth === 0 && highDepth > 0) {
    // Low and medium empty, all to high
    return [
      { workerId: 0, partitions: [2] },         // All empty -> High
      { workerId: 1, partitions: [2] },
      { workerId: 2, partitions: [2] },
      { workerId: 3, partitions: [2] },
      { workerId: 4, partitions: [2] },
    ];
  }

  // Normal situation: 1 low, 2 medium, 2 high
  return DEFAULT_ALLOCATION;
};

export const getPriorityLabel = (partition: number): EmailPriority => {
  const assignment = PRIORITY_PARTITION_MAP.find((p) => p.partition === partition);
  return assignment?.priority ?? "LOW";
};