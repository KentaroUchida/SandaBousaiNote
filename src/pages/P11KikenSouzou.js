import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const imgPath = "/img/pages/P11KikenSouzou/";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  card: {
    margin: theme.spacing(1),
  },
}));

const FlexImage = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
  );
};

const Photo = ({ image, text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia>
        <Grid container justifyContent="center">
          <img
            src={image}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </CardMedia>
      <CardContent>{text}</CardContent>
    </Card>
  );
};

const images = ["tosyokan.png", "rouka.png", "genkan.png", "undoujou.png"];

const texts = ["図書館", "ろうか", "げんかん(下足場)", "運動場"];

export const P11KikenSouzou = (index) => {
  const classes = useStyles();
  return (
    <div key={index}>
      <ResponsiveFontProvider>
        <Typography variant="h3" gutterBottom>
          もし地震がおきたら
        </Typography>
        <Typography variant="h1" gutterBottom>
          どんな危険がおきる？
        </Typography>
      </ResponsiveFontProvider>
      <FlexImage image={imgPath + "madori.png"} />
      <Grid container>
        {images.map((_, i) => (
          <Grid item xs={6} className={classes.grid}>
            <Photo image={imgPath + images[i]} text={texts[i]} />
          </Grid>
        ))}
      </Grid>
      <ResponsiveFontProvider>
        <Typography variant="h3" gutterBottom>
          想像してみよう！！
        </Typography>
        <Typography variant="h6" gutterBottom>
          あなたが家にいるとき、通学路にいるとき、地震がおきたらどのように身を守ればいいかな？
        </Typography>
      </ResponsiveFontProvider>
      <FlexImage image={imgPath + "mokumoku.png"} />
      <FlexImage image={imgPath + "hatena.png"} />
    </div>
  );
};
