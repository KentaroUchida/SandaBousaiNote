import { Divider, Typography } from "@mui/material";
import { ResponsiveFontProvider } from "./ResponsiveFontProvider";

const CustomBasicText = ({ variant, children, sx = {} }) => {
  return (
    <ResponsiveFontProvider>
      <Typography variant={variant} sx={{...sx, my: 1}}>{children}</Typography>
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

export const CenterBodyText = ({variant = "body1", children}) => (
  <CustomBasicText variant={variant} sx={{textAlign:"center"}}>{children}</CustomBasicText>
)

export const CardTitle = ({ variant = "h5", children }) => (
  <CustomBasicText variant={variant} sx={{textAlign: "center"}} >{children}</CustomBasicText>
);

export const SimpleTitle = ({ title, subtitle }) => {
  return (<>
    <Typography variant="h6">{title}</Typography>
    <Divider sx={{mb: 1}}/>
    <Typography color="gray" sx={{mb: 4}}>{subtitle}</Typography>
  </>);
}

export const SimpleTitle2 = ({ title, subtitle }) => {
  return (<>
    <Typography color="gray"sx={{mb: 1}}>{subtitle}</Typography>
    <Typography variant="h6">{title}</Typography>
    <Divider sx={{mb: 5}}/>
  </>);
}