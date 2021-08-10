import React from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  CardMedia,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";

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
        <Grid container justify="center">
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

export const P11KikenSouzou = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        もし地震がおきたら
      </Typography>
      <Typography variant="h2" gutterBottom>
        どんな危険がおきる？
      </Typography>
      <FlexImage image={imgPath + "madori.png"} />
      <Grid container>
        {images.map((_, i) => (
          <Grid item xs={6} className={classes.grid}>
            <Photo image={imgPath + images[i]} text={texts[i]} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" gutterBottom>
        想像してみよう！！
      </Typography>
      <Typography variant="h6" gutterBottom>
        あなたが家にいるとき、通学路にいるとき、地震がおきたらどのように身を守ればいいかな？
      </Typography>
      <FlexImage image={imgPath + "mokumoku.png"} />
      <FlexImage image={imgPath + "hatena.png"} />
    </>
  );
};
