import type { WorkerAllocation } from "./priority.js";

export type WorkerCallback = (workerId: number, partitions: number[]) => void;

export class WorkerScheduler {
  private workers: Map<number, WorkerCallback> = new Map();
  private allocation: WorkerAllocation[];
  private checkInterval: NodeJS.Timeout | null = null;
  private onRebalance: ((allocation: WorkerAllocation[]) => void) | null = null;

  constructor(initialAllocation: WorkerAllocation[]) {
    this.allocation = [...initialAllocation];
  }

  registerWorker(workerId: number, callback: WorkerCallback): void {
    this.workers.set(workerId, callback);
    this.notifyWorker(workerId);
  }

  unregisterWorker(workerId: number): void {
    this.workers.delete(workerId);
  }

  setRebalanceCallback(callback: (allocation: WorkerAllocation[]) => void): void {
    this.onRebalance = callback;
  }

  rebalance(allocation: WorkerAllocation[]): void {
    console.log("Rebalancing workers:", allocation.map((a) => `Worker ${a.workerId} -> partitions ${a.partitions}`));
    this.allocation = allocation;

    this.workers.forEach((_, workerId) => {
      this.notifyWorker(workerId);
    });

    if (this.onRebalance) {
      this.onRebalance(allocation);
    }
  }

  private notifyWorker(workerId: number): void {
    const worker = this.workers.get(workerId);
    const allocation = this.allocation.find((a) => a.workerId === workerId);

    if (worker && allocation) {
      worker(workerId, allocation.partitions);
    }
  }

  startMonitoring(intervalMs: number = 30000): void {
    this.checkInterval = setInterval(() => {
      console.log(`[Scheduler] Active workers: ${this.workers.size}, Current allocation:`, this.allocation);
    }, intervalMs);
  }

  stopMonitoring(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }

  getCurrentAllocation(): WorkerAllocation[] {
    return [...this.allocation];
  }
}