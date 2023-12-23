export {};

declare global {
  interface StatusSummary {
    complete: boolean;
    count: number;
    dateTime: string;
    lastComplete: boolean;
    status: string;
  }
}
