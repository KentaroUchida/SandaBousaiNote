import { Typography } from "@mui/material";
import { ResponsiveFontProvider } from "./ResponsiveFontProvider";

const CustomBasicText = ({ variant, children }) => {
  return (
    <ResponsiveFontProvider>
      <Typography variant={variant} sx={{my: 1}}>{children}</Typography>
    </ResponsiveFontProvider>
  );
};

export const Title = ({ variant = "h1", children }) => (
  <CustomBasicText variant={variant}>{children}</CustomBasicText>
);

export const SubTitle = ({ variant = "h3", children }) => (
  <CustomBasicText variant={variant}>{children}</CustomBasicText>
);

export const BodyText = ({ variant = "body1", children }) => (
  <CustomBasicText variant={variant}>{children}</CustomBasicText>
);

export const CardTitle = ({ variant = "h5", children }) => (
  <CustomBasicText variant={variant}>{children}</CustomBasicText>
);
