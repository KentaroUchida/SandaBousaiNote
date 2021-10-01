import React from "react";
import {
  Typography,
} from "@mui/material";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const styles = {
  text:{
    textAlign: "center",
  },
  image: {
    margin: 1,
  }
};

const FlexImage = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
  );
};

export const Top = () => {
  return (
    <ResponsiveFontProvider>
      <FlexImage image="/img/pages/Top/top.png" sx={styles.image}/>
      <div>
          <Typography variant="subtitle1">三田市様・ミラクルウィッシュ様・神戸大学協力のもと、本アプリは現在開発段階です。</Typography>
      </div>
    </ResponsiveFontProvider>
  );
};
