import { createTheme } from "@mui/material/styles";

const theme = (customization) => {
  const themeOptions = {
    palette: {
      mode: theme?.customization?.navType,
      common: {
        black: "#111936",
      },
      primary: {
        light: "#E3F2FC",
        main: "#0C4A9A",
        dark: "#3c74bd",
        200: "#92CAF5",
        800: "#1867B9",
      },
      secondary: {
        light: "#000000",
        main: "#000000",
        dark: "#0C7D83",
        200: "#7FDAE0",
        800: "#0C7D83",
      },
      error: {
        light: "#FFEBEE",
        main: "#B00020",
        dark: "#c62828",
      },
      orange: {
        light: "#fbe9e7",
        main: "#ffab91",
        dark: "#d84315",
      },
      warning: {
        light: "#fff8e1",
        main: "#ffe57f",
        dark: "#ffc107",
      },
      success: {
        light: "#DAFFF4",
        200: "#69f0ae",
        main: "#06C68B",
        dark: "#00c853",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        500: "#8492c4",
        600: "#212121",
        700: "#bdc8f0",
        900: "#212121",
      },
      dark: {
        light: "#bdc8f0",
        main: "#29314f",
        dark: "#212946",
        800: "#1a223f",
        900: "#111936",
      },
      text: {
        primary: "#bdc8f0",
        secondary: "#8492c4",
        dark: "#212121",
        hint: "#f5f5f5",
      },
      background: {
        paper: "#ffffff",
        default: "#ffffff",
      },
    },
  };

  const themes = createTheme(themeOptions);
  return themes;
};

export default theme;
