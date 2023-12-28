import navMenuItems from "@/utils/navMenuItems";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import * as React from "react";

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
  const { enqueueSnackbar } = useSnackbar();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [pathName, setpathName] = React.useState("");

  React.useEffect(() => {
    const pathName = router.pathname.split("/");
    setpathName(pathName[1]);
  }, [router]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: "2px solid #DBDBDB",
          paddingRight: "0px !important",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingX: { xs: 1, sm: 2, md: 3, lg: 4 }, paddingY: 1 }}
        >
          <Toolbar disableGutters>
            <Link href="/dashboard">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", lg: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/image/logo2.png"
                  priority={true}
                  height={50}
                  width={50}
                  alt="Logo"
                />
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: theme.palette.dark.dark, backgroundColor: "#" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                {navMenuItems.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link href={page.link}>
                      <Typography
                        sx={{ color: theme.palette.secondary.main }}
                        textAlign="center"
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 0,
                  ml: { xs: 0, sm: 2 },
                  display: { xs: "flex", lg: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/image/logo2.png"
                  priority={true}
                  height={50}
                  width={50}
                  alt="Logo"
                />
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
              {navMenuItems.map((page) => (
                <Link key={page.name} href={page.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 0.2,
                      color:
                        page.link === `/${pathName}`
                          ? `${theme.palette.secondary.dark}`
                          : "black",
                      display: "block",
                      borderBottom:
                        page.link === `/${pathName}`
                          ? `3px solid ${theme.palette.secondary.dark}`
                          : "none",
                      borderRadius: "0px",
                    }}
                  >
                    {" "}
                    {/* #CBA722 */}
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => router.push("/pickupRequest")}
                variant="contained"
                sx={{ marginRight: 1 }}
              >
                Pickup Request
              </Button>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ background: theme.palette.secondary.dark }}
                  alt="Remy Sharp"
                >
                  <AccountCircleIcon fontSize="large" />
                </Avatar>
              </IconButton>
              <Menu
                sx={{ mt: "45px", width: "300px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div
                  style={{ padding: "15px", borderBottom: "1px solid black" }}
                >
                  <Typography
                    color={theme.palette.primary.main}
                    variant="h6"
                    fontWeight={"bold"}
                    textAlign={"right"}
                  >
                    client name
                  </Typography>
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontSize={13}
                    textAlign={"right"}
                  >
                    client type
                  </Typography>
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontSize={13}
                    textAlign={"right"}
                    fontWeight={"bold"}
                  >
                    client code
                  </Typography>
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontSize={13}
                    textAlign={"right"}
                    fontWeight={"bold"}
                  >
                    branch code
                  </Typography>
                  <Typography
                    color={theme.palette.secondary.dark}
                    fontSize={13}
                    textAlign={"right"}
                    fontWeight={"bold"}
                  >
                    Customer
                  </Typography>
                </div>
                <MenuItem
                  sx={{ width: "250px" }}
                  onClick={() => router.push("/changePassword")}
                >
                  <Typography
                    color={"primary"}
                    fontWeight={"bold"}
                    textAlign="center"
                  >
                    Change Password
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ width: "250px" }}>
                  <Typography
                    color={"primary"}
                    fontWeight={"bold"}
                    textAlign="center"
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div
        style={{ marginBottom: bottomSpace === "none" ? "0px" : "130px" }}
      ></div>
    </>
  );
};

export default Navbar;
