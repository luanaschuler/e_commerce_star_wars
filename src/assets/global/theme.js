import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";

export const Colors = {
  primary: "#FFCC1C",
  secondary: "#F3F4F8",
  dark_grey: "#101223",
  light_grey: "#D2D4DA",
};

const theme = createTheme({
  pallete: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    grey: {
      main: Colors.dark_grey,
      light: Colors.light_grey,
    },
  },
  typography,
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default theme;
