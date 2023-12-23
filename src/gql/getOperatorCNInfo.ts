import { gql } from "@apollo/client";

const GET_OPERATOR_CN_INFO = gql`
  query GetOperatorCNInfo($cnNumber: String!) {
    getOperatorCNInfo(cnNumber: $cnNumber) {
      message
      statusCode
      result {
        cnNumber
        bookingDate
        cnType
        consignmentStatus
        deliveryCharge
        conditionAmount
        deliveryType
        destinationBranchEnglish
        itemName
        receiverName
        receiverAddress
        receiverPhone
        remarks
        senderAddress
        senderName
      }
    }
  }
`;

export default GET_OPERATOR_CN_INFO;
