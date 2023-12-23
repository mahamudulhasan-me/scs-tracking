import { useLazyQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import GET_OPERATOR_DASHBOARD_TRACKING_SUMMARY from "@/gql/getOperatorDashboardTrackingSummary";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StatusSummary = ({
  cnNumber,
  setError,
}: {
  cnNumber?: string;
  setError: any;
}) => {
  const router = useRouter();
  const theme = useTheme();

  const [getOperatorDashboardTrackingSummary, { loading, error, data }] =
    useLazyQuery(GET_OPERATOR_DASHBOARD_TRACKING_SUMMARY);
  const [summary, setsummary] = useState<StatusSummary[]>([]);
  const [statusCode, setstatusCode] = useState(0);

  useEffect(() => {
    if (router.query.cnNumber) {
      getOperatorDashboardTrackingSummary({
        variables: {
          cnNumber: router.query.cnNumber,
        },
      });
    }
  }, [router]);

  useEffect(() => {
    if (cnNumber) {
      getOperatorDashboardTrackingSummary({
        variables: {
          cnNumber,
        },
      });
    }
  }, [cnNumber]);

  useEffect(() => {
    if (
      data?.getOperatorDashboardTrackingSummary?.statusCode === 200 ||
      data?.getOperatorDashboardTrackingSummary?.statusCode === 404
    ) {
      if (data?.getOperatorDashboardTrackingSummary?.statusCode === 404) {
        setError(true);
      } else if (
        data?.getOperatorDashboardTrackingSummary?.statusCode === 200
      ) {
        setError(false);
      }
      setsummary(data.getOperatorDashboardTrackingSummary.result);
      setstatusCode(data.getOperatorDashboardTrackingSummary.statusCode);
    }
  }, [data]);

  const trackColor = theme.palette.primary.main;

  return (
    <>
      <Stack
        sx={{ display: { xs: "none", sm: "block" } }}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "200px", width: "100%" }}
          >
            <CircularProgress />
          </Stack>
        ) : (
          statusCode === 200 &&
          summary.length && (
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              mt={3}
              sx={{ m: 3, height: "fit-content", width: "100%", px: 2 }}
            >
              {summary.map((ele: any, index: number) => {
                if (
                  ele.status === "Delivery Attempt Failed" &&
                  ele.count === 0
                ) {
                } else
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        sx={{
                          width: "100%",
                          position: "absolute",
                          top: "25px",
                        }}
                      >
                        <Box
                          sx={{
                            height: "10px",
                            width: "50%",
                            backgroundColor:
                              index === 0
                                ? ""
                                : ele.complete
                                ? trackColor
                                : "grey",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            height: "10px",
                            width: "50%",
                            backgroundColor:
                              index === summary.length - 1
                                ? ""
                                : summary[index + 1].complete
                                ? trackColor
                                : "grey",
                          }}
                        ></Box>
                      </Stack>
                      <Box
                        sx={{
                          width: !ele.lastComplete ? "fit-content" : "60px",
                          height: !ele.lastComplete ? "fit-content" : "60px",
                          borderRadius: "50%",
                          backgroundColor: ele.complete ? trackColor : "grey",
                          color: ele.complete ? "white" : "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: 1,
                          marginY: !ele.lastComplete ? "20px" : "0px",
                        }}
                      >
                        {ele.lastComplete ? (
                          <ArrowCircleDownIcon sx={{ fontSize: "55px" }} />
                        ) : (
                          <FiberManualRecordIcon fontSize="small" />
                        )}
                      </Box>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        fontWeight={"bolder"}
                        sx={{
                          marginTop: "15px",
                          color: ele.complete
                            ? theme.palette.secondary.main
                            : "",
                        }}
                      >
                        {ele.status}
                      </Typography>
                    </Box>
                  );
              })}
            </Stack>
          )
        )}
      </Stack>

      <Stack
        sx={{ display: { xs: "block", sm: "none" } }}
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-end"}
        spacing={0}
        mt={3}
      >
        {loading ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ width: "100%" }}
          >
            <CircularProgress />
          </Stack>
        ) : (
          summary.length &&
          summary.map((ele: any, index: number) => {
            if (ele.status === "Delivery Attempt Failed" && ele.count === 0) {
            } else
              return (
                <Stack
                  key={index}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  sx={{ position: "relative", minHeight: "100px" }}
                >
                  <Stack
                    direction={"column"}
                    sx={{
                      height: "100%",
                      position: "absolute",
                      left: "40px",
                      top: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "50%",
                        backgroundColor:
                          index === 0 ? "" : ele.complete ? trackColor : "grey",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "10px",
                        height: "50%",
                        backgroundColor:
                          index === summary.length - 1
                            ? ""
                            : summary[index + 1].complete
                            ? trackColor
                            : "grey",
                      }}
                    ></Box>
                  </Stack>
                  <Box
                    sx={{
                      width: !ele.lastComplete ? "fit-content" : "60px",
                      height: !ele.lastComplete ? "fit-content" : "60px",
                      borderRadius: "50%",
                      backgroundColor: ele.complete ? trackColor : "grey",
                      color: ele.complete ? "white" : "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1,
                      position: "absolute",
                      left: !ele.lastComplete ? "19px" : "0px",
                    }}
                  >
                    {ele.lastComplete ? (
                      <ArrowCircleRightOutlinedIcon sx={{ fontSize: "55px" }} />
                    ) : (
                      <FiberManualRecordIcon fontSize="small" />
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={"bolder"}
                    sx={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "70px",
                    }}
                  >
                    {ele.status}
                  </Typography>
                </Stack>
              );
          })
        )}
      </Stack>
    </>
  );
};

export default StatusSummary;
