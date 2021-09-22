import { createTheme } from "@mui/material";
import {
  lightBlue,
  orange,
  yellow,
  pink,
  lightGreen,
} from "@mui/material/colors";

export const CustomThemeA = createTheme({
  palette: {
    primary: {
      light: lightBlue[200],
      main: lightBlue[500],
      dark: lightBlue[700],
    },
    secondary: {
      light: orange[200],
      main: orange[500],
      dark: orange[700],
    },
    tertiary: {
      light: "#fff0f5",
      main: "#ffc0cb",
      dark: pink[900],
    },
    warning: {
      light: yellow[200],
      main: yellow[500],
      dark: yellow[700],
    },
    success: {
      light: lightGreen[200],
      main: lightGreen[500],
      dark: lightGreen[700],
    },
    app: "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
  },
  props: {
    MuiCheckbox: {
      color: "secondary",
    },
  },
});
