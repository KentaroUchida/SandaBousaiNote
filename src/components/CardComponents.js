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
  <Paper elevation={2} sx={{ ...styles.cardTitle, bgcolor: color }}>
    <CardTitle variant={variant}>{title}</CardTitle>
  </Paper>
);

export const HeaderCardPart = ({ title, color = "success.light" }) => (
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

export const TextCard = ({children}) => (
  <CardBase>
    <CardContent>
      <BodyText>{children}</BodyText>
    </CardContent>
  </CardBase>
)

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

export const TitleTextCard = ({
  title,
  color = "tertiary.main",
  children,
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
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

export const TitleImageTextCard = ({
  title,
  image,
  color = "tertiary.main",
  children,
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <ImageCardPart image={image} />
        <BodyText>{children}</BodyText>
      </CardContent>
    </CardBase>
  );
};

export const TitleImagesCard = ({
  title,
  image1,
  image2,
  image3,
  image4,
  image5,
  color = "tertiary.main",
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <ImageCard image={image1} />
        <ImageCard image={image2} />
        <ImageCard image={image3} />
        <ImageCard image={image4} />
        <ImageCard image={image5} />
      </CardContent>
    </CardBase>
  );
};