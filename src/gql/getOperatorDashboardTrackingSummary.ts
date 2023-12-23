import { gql } from "@apollo/client";

const GET_OPERATOR_DASHBOARD_TRACKING_SUMMARY = gql`
  query getOperatorDashboardTrackingSummary($cnNumber: String!) {
    getOperatorDashboardTrackingSummary(cnNumber: $cnNumber) {
      message
      statusCode
      result {
        complete
        count
        dateTime
        lastComplete
        status
      }
    }
  }
`;

export default GET_OPERATOR_DASHBOARD_TRACKING_SUMMARY;
