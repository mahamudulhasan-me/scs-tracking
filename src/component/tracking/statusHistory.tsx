import GET_OPERATOR_DASHBOARD_TRACKING_INFO from "@/gql/getOperatorDashboardTrackingInfo";
import { useLazyQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const textStyle = { fontFamily: "system-ui", fontSize: 16, fontWeight: 500 };

const StatusHistory = ({ cnNumber }: { cnNumber?: string }) => {
  const router = useRouter();
  const [getOperatorDashboardTrackingInfo, { loading, error, data: list }] =
    useLazyQuery(GET_OPERATOR_DASHBOARD_TRACKING_INFO);

  useEffect(() => {
    if (router.query.cnNumber) {
      getOperatorDashboardTrackingInfo({
        variables: {
          cnNumber: router.query.cnNumber,
        },
      });
    }
  }, [router]);

  useEffect(() => {
    if (cnNumber) {
      getOperatorDashboardTrackingInfo({
        variables: {
          cnNumber,
        },
      });
    }
  }, [cnNumber]);

  return (
    <Box sx={{ width: "100%", height: "fit-content" }}>
      {loading ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "400px", width: "100%" }}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <Stack spacing={1} direction={"column"}>
          {list?.getOperatorDashboardTrackingInfo?.result?.length ? (
            list.getOperatorDashboardTrackingInfo.result.map(
              (lot: LotInfo, index: number) => {
                return <LotComponent key={index} info={lot} index={index} />;
              }
            )
          ) : (
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              sx={{ height: "400px", width: "100%" }}
            >
              {/* {`CN Number ${router.query.cnNumber} Not Valid`} */}
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default StatusHistory;

const LotComponent = ({ info, index }: { info: LotInfo; index: number }) => {
  const theme = useTheme();
  const [openStatus, setopenStatus] = useState(index === 0);

  return (
    <Stack direction={"column"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          borderRadius: "5px 5px 0px 0px",
          minHeight: "50px",
          height: "fit-content",
          backgroundColor: theme.palette.secondary.dark,
          color: "white",
          py: 2,
        }}
      >
        <Box
          onClick={() => setopenStatus(!openStatus)}
          sx={{ width: "50px", textAlign: "center", cursor: "pointer" }}
        >
          {openStatus ? <ArrowCircleUpIcon /> : <ArrowCircleDownIcon />}
        </Box>
        <Stack
          onClick={() => setopenStatus(!openStatus)}
          direction={{ sm: "column", md: "row" }}
          alignItems={{ sm: "left", md: "center" }}
          sx={{ width: "90%" }}
        >
          <Box sx={{ width: { sm: "100%", md: "25%" } }}>
            <Typography sx={textStyle}>{info.cnNumber}</Typography>
          </Box>
          <Box sx={{ width: { sm: "100%", md: "25%" } }}>
            <Typography sx={textStyle}>{info.lastStatusDate}</Typography>
          </Box>
          <Box sx={{ width: { sm: "100%", md: "50%" } }}>
            <Typography sx={textStyle}>
              {info.lastStatus.statusEnglish || ""}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {openStatus &&
        info.statuses.map((status, index) => {
          return (
            <Stack
              key={index}
              direction={{ sm: "column", md: "row" }}
              alignItems={{ sm: "left", md: "center" }}
              sx={{
                minHeight: "50px",
                height: "fit-content",
                border: `1px solid ${theme.palette.secondary.dark}`,
                borderTop: "none",
                px: 3,
                py: 2,
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "35%" },
                  textAlign: { sm: "left", md: "center" },
                }}
              >
                <Typography sx={textStyle}>{status.dateTime}</Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "100%", md: "65%" },
                  textAlign: { sm: "left", md: "center" },
                }}
              >
                <Typography sx={textStyle}>{status.statusEnglish}</Typography>
              </Box>
            </Stack>
          );
        })}
    </Stack>
  );
};
