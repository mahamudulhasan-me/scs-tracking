export {};

declare global {
  interface DeliveryManInfo {
    deliveryManContact: string;
    deliveryManName: string;
  }

  interface CnInfoType {
    bookingDate: string;
    senderAddress: string;
    returnCN: string;
    cnNumber: string;
    conditionAmount: number;
    consignmentStatus: string;
    receiverPhone: string;
    itemDescription: string;
    deliveryType: string;
    destinationBranchBangla: string;
    destinationBranchEnglish: string;
    destinationOfficeAddress: string;
  }
}
