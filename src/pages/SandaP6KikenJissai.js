import React from "react";
import {
  Grid,
} from "@mui/material";
import {
  ImageTextCard,
  TitleTextCard,
} from "../components/CardComponents";
import { ResponsiveFontProvider } from "../components";
import { SimpleTitle2 } from "../components/TitleComponents";

const imgPath = "/img/pages/SandaP6KikenJissai/";

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

const illustImages = [
  "tosyoshitsu.png",
  "rouka.png",
  "genkan.png",
  "undoujou.png",
];

const illustTexts = ["図書館", "ろうか", "げんかん(下足場)", "運動場"];

const mamoruImages = [
  "atama.png",
  "tsukue.png",
  "kodomobeya.png",
  "kitchen.png",
  "waremono.png",
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
      <FlexImage image={imgPath + "madori.png"} />
      <Grid container spacing={1}>
        {illustImages.map((_, i) => (
          <Grid item xs={6} sx={styles.grid} key={i.toString()}>
            <ImageTextCard image={imgPath + illustImages[i]}>
              <div style={{textAlign:"center"}}>{illustTexts[i]}</div>
            </ImageTextCard>
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
      <Grid container spacing={1}>
        {mamoruImages.map((_, i) => (
          <Grid item xs={6} sx={styles.grid} key={i.toString()}>
            <ImageTextCard image={imgPath + mamoruImages[i]}>
              <div>{mamoruTexts[i]}</div>
            </ImageTextCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { SandaP6KikenJissai }