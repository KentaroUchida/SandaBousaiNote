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
    my: 1,
    p: 1,
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

export const TitleCardPart = ({ title, color = "tertiary.main", variant="h5" }) => (
  <Paper elevation={3} sx={{...styles.cardTitle, bgcolor: color}}>
    <Typography variant={variant}>{title}</Typography>
  </Paper>
);

export const TextCardPart = ({text, variant="h6"}) => (
  <Typography variant={variant}>{text}</Typography>
)

export const HeaderCardPart = ({ title, color = "success.main" }) => (
  <CardHeader
    title={title}
    titleTypographyProps={{ align: "center" }}
    sx={{bgcolor: color}}
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
      <CardContent>
        <TextCardPart text={text}/>
      </CardContent>
    </CardBase>
  );
};

export const TitleTextImageCard = ({ title, text, image, color="tertiary.main" }) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <TextCardPart text={text}/>
      </CardContent>
      <ImageCardPart image={image} />
    </CardBase>
  );
};
