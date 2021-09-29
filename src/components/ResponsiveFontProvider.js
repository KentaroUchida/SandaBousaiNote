import {
  useTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

export const ResponsiveFontProvider = ({ children }) => {
  const theme = responsiveFontSizes(useTheme());
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
