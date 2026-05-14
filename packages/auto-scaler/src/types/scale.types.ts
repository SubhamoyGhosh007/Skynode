export type WorkerPriority = "LOW" | "MEDIUM" | "HIGH";

export interface PartitionLag {
  partition: number;
  priority: WorkerPriority;
  lag: number; // number of unconsumed messages
}

export interface WorkerCount {
  LOW: number;
  MEDIUM: number;
  HIGH: number;
}

export interface ScalingThresholds {
  LOW: number;    // spike threshold for LOW
  MEDIUM: number; // spike threshold for MEDIUM
  HIGH: number;   // spike threshold for HIGH
}

export interface ScaleAction {
  priority: WorkerPriority;
  action: "start" | "stop";
  count: number;
}

export interface ContainerInfo {
  id: string;
  priority: WorkerPriority;
  created: number;
}