import { gql } from "@apollo/client";

const GET_OPERATOR_DASHBOARD_TRACKING_INFO = gql`
  query GetOperatorDashboardTrackingInfo($cnNumber: String!) {
    getOperatorDashboardTrackingInfo(cnNumber: $cnNumber) {
      message
      statusCode
      result {
        cnNumber
        lastStatus {
          statusBangla
          statusEnglish
        }
        lastStatusDate
        statuses {
          dateTime
          statusBangla
          statusEnglish
        }
      }
    }
  }
`;

export default GET_OPERATOR_DASHBOARD_TRACKING_INFO;
