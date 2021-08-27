import React from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  CardMedia,
  makeStyles,
  Grid,
  Link,
} from "@material-ui/core";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const useStyles = makeStyles((theme) => ({
  card: {
    //margin: theme.spacing(2),
  },
  subtitle: {
    //backgroundColor: "#99cc00",
    //margin: theme.spacing(1),
  },
  text:{
    textAlign: "center",
  },
  image: {
    margin: theme.spacing(1),
  }
}));

const FlexImage = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
  );
};

const Photo = ({ image, texts }) => {
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
      <CardContent>
        {texts.map((text) => (
          <Typography variant="h6">{text}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export const Top = () => {
  const classes = useStyles();
  return (
    <ResponsiveFontProvider>
      <FlexImage image="/img/pages/Top/top.png" className={classes.image}/>
      <div>
          <Typography variant="h8">三田市様・ミラクルウィッシュ様・神戸大学協力のもと、本アプリは現在開発段階です。</Typography>
      </div>
    </ResponsiveFontProvider>
  );
};
