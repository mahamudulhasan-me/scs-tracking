import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import DashboardCardContainer from "../DashboardCard";

const ErrorPage = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{ width: "100%", mt: 3 }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.error.dark,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Oops!{" "}
            <Image src="/notFound.png" width={50} height={50} alt="not found" />{" "}
            Data Not Found!
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.dark }}
          >
            Please Check your CN Number and try again.
          </Typography>
        </div>
      </Stack>
      <DashboardCardContainer />
    </>
  );
};

export default ErrorPage;
