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
import {SwipeNotifier} from '../components/SwipeNotifier'

const useStyles = makeStyles((theme) => ({
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

export const Top = () => {
  const classes = useStyles();
  return (
    <ResponsiveFontProvider>
      <SwipeNotifier/>
      <FlexImage image="/img/pages/Top/top.png" className={classes.image}/>
      <div>
          <Typography variant="h8">三田市様・ミラクルウィッシュ様・神戸大学協力のもと、本アプリは現在開発段階です。</Typography>
      </div>
    </ResponsiveFontProvider>
  );
};
