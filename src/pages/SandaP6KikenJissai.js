import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import {
  ImageCard,
  ImageTextCard,
  TitleTextImageCard,
  TitleTextCard,
} from "../components/CardComponents";
import { Title, SubTitle } from "../components/TitleComponents";
import { ResponsiveFontProvider } from "../components";
import { SimpleTitle2 } from "../components/TitleComponents";

const imgPath = "/img/pages/P6KikenJissai/";

const styles = {
  grid: {
    display: "flex",
  },
  card: {
    margin: 1,
  },
};

const FlexImage = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
  );
};

const Photo = ({ image, text }) => {
  return (
    <Card sx={styles.card}>
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

const illustImages = [
  "tosyokan.png",
  "rouka.png",
  "genkan.png",
  "undoujou.png",
];

const illustTexts = ["図書館", "ろうか", "げんかん(下足場)", "運動場"];

const mamoruImages = [
  "atama.png",
  "tsukue.png",
  "kodomobeya.jpg",
  "kitchen.jpg",
  "waremono.jpg",
];

const mamoruTexts = [
  "近くにあるもので、まず頭を守る。",
  "動けそうなら机などの下に隠れ、机の脚をしっかりつかむ。",
  "子ども部屋に子どもがいたら・・・",
  "キッチンにママがいたら・・・",
  "割れものがいっぱい",
];

const SandaP6KikenJissai = (index) => {
  return (
    <div key={index}>
      <SimpleTitle2 title="落ちる！倒れる！動く！" subtitle="実際に地震がおきるとキケンなものが"/>
      <FlexImage image={imgPath + "madori.jpg"} />
      <Grid container>
        {illustImages.map((_, i) => (
          <Grid item xs={6} sx={styles.grid} key={i.toString()}>
            <Photo image={imgPath + illustImages[i]} text={illustTexts[i]} />
          </Grid>
        ))}
      </Grid>
      <ResponsiveFontProvider>
        <TitleTextCard title="自分の身は自分で守ろう！">
          大地震がおきたとき、とっさの行動が命を分けます。
          すぐに行動するには、からだで覚えるしかありません。
          家族で話し合い、ふだんからイメージして実際に訓練しましょう。
        </TitleTextCard>
      </ResponsiveFontProvider>
      <Grid container>
        {mamoruImages.map((_, i) => (
          <Grid item xs={6} sx={styles.grid} key={i.toString()}>
            <ImageTextCard image={imgPath + mamoruImages[i]}>
              {mamoruTexts[i]}
            </ImageTextCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { SandaP6KikenJissai }