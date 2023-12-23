import { Box, Stack, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Augment the palette to include an dark color
declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
  }

  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an dark option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

const settings = ["Change Password", "Logout"];

const Navbar = ({ bottomSpace }: { bottomSpace?: string }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: "2px solid #DBDBDB",
          padding: "0 5%",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingX: { xs: 1, sm: 2, md: 3, lg: 4 }, paddingY: 1 }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Link href="/">
                <Image
                  src="/image/logo2.png"
                  priority={true}
                  height={50}
                  width={50}
                  alt="Logo"
                />
              </Link>
              <Typography
                variant="h5"
                display={{ xs: "none", sm: "block" }}
                sx={{
                  color: theme.palette.secondary.main,
                }}
              >
                Sundarban Courier Service (Pvt.) Ltd.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                color: theme.palette.grey[50],
                bgcolor: theme.palette.primary.dark,
                fontWeight: "bolder",
                textTransform: "none",
              }}
              onClick={() => {
                router.push("https://customer.sundarbancourierltd.com/");
              }}
            >
              Login Dashboard
            </Button>
          </Stack>
        </Container>
      </AppBar>
      <div
        style={{ marginBottom: bottomSpace === "none" ? "0px" : "130px" }}
      ></div>
    </>
  );
};

export default Navbar;
