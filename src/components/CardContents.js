import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";

const styles = {
  card: {
    width: "100%",
    my: 2,
  },
  cardTitle: {
    bgcolor: "tertiary.main",
    my: 1,
    p: 1,
  },
  cardHeader: {
    bgcolor: "success.main",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

const CardBase = ({ children }) => <Card sx={styles.card}>{children}</Card>;

export const ImageCardPart = ({ image }) => (
  <CardMedia component="img" image={image} alt="" sx={styles.image} />
);

export const TitleCardPart = ({ title }) => (
  <Paper elevation={3} sx={styles.cardTitle}>
    <Typography variant="h5">{title}</Typography>
  </Paper>
);

export const HeaderCardPart = ({ title }) => (
  <CardHeader
    title={title}
    titleTypographyProps={{ align: "center" }}
    sx={styles.cardHeader}
  />
);

export const ImageCard = ({ image }) => {
  return (
    <CardBase>
      <ImageCardPart image={image} />
    </CardBase>
  );
};

export const ImageTextCard = ({ image, text }) => {
  return (
    <CardBase>
      <ImageCardPart image={image} />
      <CardContent>{text}</CardContent>
    </CardBase>
  );
};

export const TitleTextImageCard = ({ title, text, image }) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} />
        {text}
      </CardContent>
      <ImageCardPart image={image} />
    </CardBase>
  );
};
