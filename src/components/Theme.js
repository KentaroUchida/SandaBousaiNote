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
      light: "#ea526f",
      main: "#ea526f",
      dark: "#ea526f",
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
  },
  components: {
    MuiCheckbox: {
      defaultProps:{
        color: "secondary",
      }
    },
  },
});
