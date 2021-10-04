import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";

import {
  BodyText, CardTitle
} from "./TitleComponents"

const styles = {
  card: {
    width: "100%",
    my: 2,
  },
  cardTitle: {
    mb: 2,
    p: 1,
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

// カードの部品

export const CardBase = ({ children }) => (
  <Card sx={styles.card}>{children}</Card>
);

export const ImageCardPart = ({ image }) => (
  <CardMedia component="img" image={image} alt="" sx={styles.image} />
);

export const TitleCardPart = ({
  title,
  color = "tertiary.main",
  variant = "h5",
}) => (
  <Paper elevation={3} sx={{ ...styles.cardTitle, bgcolor: color }}>
    <CardTitle variant={variant}>{title}</CardTitle>
  </Paper>
);

export const HeaderCardPart = ({ title, color = "success.main" }) => (
  <CardHeader
    title={title}
    titleTypographyProps={{ align: "center" }}
    sx={{ bgcolor: color }}
  />
);

// 組み合わせ例

export const ImageCard = ({ image }) => {
  return (
    <CardBase>
      <ImageCardPart image={image} />
    </CardBase>
  );
};

export const ImageTextCard = ({ image, children }) => {
  return (
    <CardBase>
      <ImageCardPart image={image} />
      <CardContent>
        <BodyText>{children}</BodyText>
      </CardContent>
    </CardBase>
  );
};

export const TitleTextImageCard = ({
  title,
  image,
  color = "tertiary.main",
  children,
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <BodyText>{children}</BodyText>
      </CardContent>
      <ImageCardPart image={image} />
    </CardBase>
  );
};