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
    margin: theme.spacing(2),
  },
  subtitle: {
    backgroundColor: "#99cc00",
    margin: theme.spacing(1),
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
        <Grid container justifyContent="center">
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

export const P13Toilet = () => {
  const classes = useStyles();
  return (
    <ResponsiveFontProvider>
      <Typography variant="h3">いちばん困る！ストレスになる！</Typography>
      <Typography variant="h1">トイレが大変!!</Typography>
      <FlexImage image="/img/pages/P13Toilet/toilet1.png" className={classes.image}/>
      <Typography variant="h6">
        東日本震災が起きてから9時間以内にトイレに行きたくなった人は78%(調査:日本トイレ研究所)。
        でも安易に水を流すのは待って！マンションのトイレの配管は、上下の部屋とつながっていて破損したら使えません！
      </Typography>
      <Typography variant="h6">
        避難所のトイレは、狭い・段差あり、和式、男女共用のところも多く、便器は足の踏み場もないぐらいに排泄物でいっぱいになることも。
      </Typography>
      <Photo
        image="/img/pages/P13Toilet/toilet2.png"
        texts={[
          "ゴミ袋は消臭効果の高いものを使う。汚物はゴミ収集が開始されるまで自宅に置くことになります。",
        ]}
      />
      <Typography variant="h3">
        災害用のトイレは必ず家庭に備蓄しておきましょう！
      </Typography>
      <Photo
        image="/img/pages/P13Toilet/nekosuna.png"
        texts={["ネコ砂(紙)や、凝固剤を多めに用意"]}
      />
      <Photo
        image="/img/pages/P13Toilet/toilet_easy.png"
        texts={[
          "1日に4～8回トイレに行くので、家族の人数分×7日分の備蓄があれば安心",
        ]}
      />
      <Typography variant="h6">
        <Link href="http://www.toilet.or.jp/toilet-guide/product/list.html">
          災害用トイレ製品一覧(日本トイレ研究所)
        </Link>
      </Typography>
      <Paper elevation={3} className={classes.subtitle}>
        <Typography variant="h3">緊急用トイレの作り方</Typography>
      </Paper>
      <Photo
        image="/img/pages/P13Toilet/toilet3.png"
        texts={[
          "❶ゴミ袋を便座に2重にかぶせる",
          "❷短冊状に切って、くしゃくしゃにした新聞紙をゴミ袋の中に敷き詰める",
        ]}
      />
      <Photo
        image="/img/pages/P13Toilet/toilet4.png"
        texts={[
          "❸用を足した後、消臭効果のあるものを上からかける",
          "❹内側のゴミ袋を取り出し、空気を抜いて口を強く縛る",
        ]}
      />
    </ResponsiveFontProvider>
  );
};
