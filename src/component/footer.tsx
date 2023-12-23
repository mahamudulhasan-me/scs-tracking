import { Stack, Typography, useTheme } from "@mui/material";

const Footer = ({ al = "row" }: { al?: "column" | "row" }) => {
  const theme = useTheme();
  const spacing = al === "column" ? 0 : 2;
  const mt = al === "column" ? 0 : 2;

  return (
    <Stack
      direction={{ xs: "column", sm: al }}
      mt={mt}
      mb={2}
      justifyContent="center"
      alignItems={"center"}
      spacing={{ xs: 0, sm: spacing }}
      borderTop={"1px solid grey"}
      sx={{ paddingTop: 2 }}
    >
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.secondary.main }}
      >
        For any support: Phone:{" "}
        <a
          style={{ color: theme.palette.secondary.dark }}
          href="tel:09612003003"
        >
          {" "}
          09612003003{" "}
        </a>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.secondary.main }}
      >
        Email:{" "}
        <a
          style={{ color: theme.palette.secondary.dark }}
          href="mailto:mail@sundarbancourier.com.bd"
        >
          {" "}
          mail@sundarbancourier.com.bd{" "}
        </a>
      </Typography>
    </Stack>
  );
};

export default Footer;
