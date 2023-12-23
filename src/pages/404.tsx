import Navbar from "@/component/Navbar";
import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Pre Booking List For Sundarban Courier Servie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>

      <Container maxWidth="md">
        <Stack direction={"column"} alignItems={"center"}>
          <Typography
            variant="h1"
            textAlign={"center"}
            fontFamily={"system-ui"}
            sx={{ color: "rgb(26, 26, 26)" }}
            fontSize={35}
          >
            Page Not Found
          </Typography>
          <Button
            onClick={() => router.push("/dashboard")}
            sx={{ mt: 1 }}
            variant="contained"
          >
            Dashboard
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default NotFound;
