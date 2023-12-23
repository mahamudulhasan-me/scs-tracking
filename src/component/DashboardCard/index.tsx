import { Container, Stack } from "@mui/material";
import CorporateDashboardCard from "./CorporateDashboardCard";
import CustomerDashboardCard from "./CustomerDashboardCard";

const DashboardCardContainer = () => {
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"stretch"}
        spacing={8}
        sx={{ marginTop: "10rem", marginBottom: "4rem" }}
      >
        <CustomerDashboardCard />
        <CorporateDashboardCard />
      </Stack>
    </Container>
  );
};

export default DashboardCardContainer;
