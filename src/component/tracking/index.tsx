import Navbar from "@/component/Navbar";
import CnInfo from "@/component/tracking/cnInfo";
import StatusHistory from "@/component/tracking/statusHistory";
import StatusSummary from "@/component/tracking/statusSummary";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import DashboardCardContainer from "../DashboardCard";
import ErrorPage from "../ErrorPage/ErrorPage";

const Tracking = ({ route }: { route?: string }) => {
  const theme = useTheme();
  const [cnNumberState, setcnNumberState] = useState("");
  const [cnNumberSubmit, setcnNumberSubmit] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // If there's a route prop, use it to set the initial CN number
    if (route) {
      setcnNumberState(route);
      setcnNumberSubmit(route);
    }
  }, [route]);

  const handleSearch = () => {
    // Trigger data fetch when the search icon is clicked
    setcnNumberSubmit(cnNumberState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the CN number state when the input value changes
    setcnNumberState(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Trigger data fetch when the Enter key is pressed
    if (event.key === "Enter") {
      setcnNumberSubmit(cnNumberState);
    }
  };

  useEffect(() => {
    // Reset error state when cnNumberSubmit changes
    setError(false);
  }, [cnNumberSubmit]);

  return (
    <>
      <Head>
        <title>CN Tracking</title>
        <meta name="description" content="Tracking Sundarban Courier Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <Container maxWidth="xl" sx={{ marginTop: "20px", position: "relative" }}>
        <Stack direction={"column"} position={"relative"}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{
              width: "100%",
              position: "fixed",
              zIndex: 10,
              top: 70,
              backgroundColor: "#fff",
              padding: 2,
            }}
          >
            <Typography
              variant="h5"
              fontSize={30}
              sx={{
                color: theme.palette.secondary.main,
                paddingBottom: 1,
                width: "fit-content",
              }}
            >
              Track Your Parcel
            </Typography>

            <Typography
              variant="h5"
              fontSize={16}
              sx={{
                color: theme.palette.secondary.main,
                paddingBottom: 1,
                width: "fit-content",
              }}
            >
              Need the status of your shipment or proof of delivery? Enter your
              CN number or reference number below.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
              marginTop={1}
              borderRadius={"5px"}
              border={`3px solid ${theme.palette.secondary.dark}`}
            >
              <Box
                sx={{
                  width: { xs: "280px", sm: "240px" },
                  height: { xs: "40px", sm: "57px" },
                  background: theme.palette.secondary.dark,
                  color: "white",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Consignment Number (CN)
              </Box>
              <TextField
                fullWidth
                value={cnNumberState}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                sx={{
                  width: { xs: "280px", sm: "280px", width: "300px" },
                  "& .MuiInputBase-root:after": { border: "none" },
                  "& .MuiInputBase-root:before": { border: "none" },
                  "& .MuiInputBase-root:hover": { border: "none" },
                  "& .MuiInputBase-root": {
                    border: "none",
                    backgroundColor: "white",
                  },
                }}
                variant="filled"
                inputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                    padding: "14px",
                    fontSize: "20px",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <SearchIcon
                      color="secondary"
                      fontSize="large"
                      cursor={"pointer"}
                      className="search-icon"
                      sx={{
                        borderRadius: "5px",
                        marginLeft: "5px",
                        width: "50px",
                        height: "50px",
                        padding: "4px",
                      }}
                      onClick={handleSearch}
                    />
                  ),
                }}
              ></TextField>
            </Stack>
          </Stack>

          {cnNumberSubmit || route ? (
            <Stack
              direction={"column"}
              sx={{ width: "100%" }}
              mt={20}
              position={"relative"}
              zIndex={1}
            >
              {!error ? (
                <>
                  <StatusSummary
                    cnNumber={cnNumberSubmit}
                    setError={setError}
                  />

                  <Grid container mt={5}>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                      <StatusHistory cnNumber={cnNumberSubmit} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                      <CnInfo cnNumber={cnNumberSubmit} setError={setError} />
                    </Grid>
                  </Grid>
                </>
              ) : (
                <ErrorPage />
              )}
            </Stack>
          ) : (
            <DashboardCardContainer />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Tracking;
