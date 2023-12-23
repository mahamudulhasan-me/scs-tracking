export {};

declare global {
  interface LotStatus {
    dateTime: string;
    statusBangla: string;
    statusEnglish: string;
  }
  interface LotInfo {
    cnNumber: string;
    lastStatus: {
      statusBangla: string;
      statusEnglish: string;
    };
    lastStatusDate: string;
    statuses: LotStatus[];
  }
}
