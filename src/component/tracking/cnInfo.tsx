import GET_OPERATOR_CN_INFO from "@/gql/getOperatorCNInfo";
import { infoNameStyle, infoValueStyle } from "@/utils/cnInfoStyle";
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

const CnInfo = ({
  cnNumber,
  setError,
}: {
  cnNumber?: string;
  setError: any;
}) => {
  const router = useRouter();
  const theme = useTheme();

  const [getOperatorCNInfo, { loading, error, data }] =
    useLazyQuery(GET_OPERATOR_CN_INFO);
  const [cnInfo, setcnInfo] = useState<CnInfoType | null>(null);

  useEffect(() => {
    if (router.query.cnNumber) {
      getOperatorCNInfo({
        variables: {
          cnNumber: router.query.cnNumber,
        },
      });
    }
  }, [router]);

  useEffect(() => {
    if (cnNumber) {
      getOperatorCNInfo({
        variables: {
          cnNumber,
        },
      });
    }
  }, [cnNumber]);

  useEffect(() => {
    setError(false);
    if (data?.getOperatorCNInfo?.statusCode == 404) {
      setError(true);
    }
    if (data?.getOperatorCNInfo?.result) {
      setcnInfo(data.getOperatorCNInfo.result);
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        paddingX: 5,
        paddingBottom: 5,
        paddingTop: { xs: 5, sm: 5, md: 5, lg: 0 },
        // position: "sticky",
        // top: 0,
      }}
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
        data?.getOperatorCNInfo?.statusCode == 200 &&
        cnInfo && (
          <Stack spacing={1} direction={"column"}>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.secondary.main,
                paddingBottom: 1,
                width: "fit-content",
                fontWeight: "bolder",
              }}
            >
              Consignment Info
            </Typography>

            <Stack spacing={3} direction={"column"}>
              <Stack direction={"column"} spacing={0.5}>
                <Stack direction={"column"}>
                  <Typography variant="body1" sx={infoNameStyle(theme)}>
                    Consignment ID
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={infoValueStyle(theme)}
                  >
                    {cnInfo?.cnNumber}
                  </Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="body1" sx={infoNameStyle(theme)}>
                    Booking Date
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={infoValueStyle(theme)}
                  >
                    {cnInfo?.bookingDate?.slice(0, 10) || ""}
                  </Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="body1" sx={infoNameStyle(theme)}>
                    Booking From
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={infoValueStyle(theme)}
                  >
                    {cnInfo.senderAddress}
                  </Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="body1" sx={infoNameStyle(theme)}>
                    Destination Branch
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={infoValueStyle(theme)}
                  >
                    {cnInfo.destinationBranchEnglish}
                  </Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="body1" sx={infoNameStyle(theme)}>
                    Delivery Type
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={infoValueStyle(theme)}
                  >
                    {cnInfo.deliveryType}
                  </Typography>
                </Stack>
                {cnInfo?.itemDescription && (
                  <Stack direction={"column"}>
                    <Typography variant="body1" sx={infoNameStyle(theme)}>
                      Item Description
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={infoValueStyle(theme)}
                    >
                      {cnInfo.itemDescription}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>

            {/* <Stack direction={"column"}>
              <Stack direction={"column"}>
                <Typography variant="body1" sx={infoNameStyle(theme)}>
                  Delivery Contact Name
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={infoValueStyle(theme)}
                >
                  {cnInfo?.deliveryManInfo?.deliveryManName || ""}
                </Typography>
              </Stack>
              <Stack direction={"column"}>
                <Typography variant="body1" sx={infoNameStyle(theme)}>
                  Delivery Contact Phone Number
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={infoValueStyle(theme)}
                >
                  {cnInfo?.deliveryManInfo?.deliveryManContact || ""}
                </Typography>
              </Stack>
            </Stack> */}

            {/* {cnInfo?.podImageUrl && (
              <Stack spacing={1} direction={"column"}>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.main,
                    paddingBottom: 1,
                    width: "fit-content",
                    fontWeight: "bolder",
                  }}
                >
                  POD Image
                </Typography>

                <a
                  href={cnInfo.podImageUrl}
                  style={{ textAlign: "center" }}
                  target="_blank"
                >
                  <Box
                    position={"relative"}
                    sx={{ width: "100%", aspectRatio: 1 }}
                  >
                    <Image
                      src={cnInfo.podImageUrl}
                      fill
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      alt="podCopy"
                    />
                  </Box>

                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Button>Open Image</Button>
                    <OpenInNewIcon fontSize="small" color="primary" />
                  </Stack>
                </a>
              </Stack>
            )} */}
          </Stack>
        )
      )}
    </Box>
  );
};

export default CnInfo;
