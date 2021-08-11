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

const imgPath = "/img/pages/P14Daijobu/";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  card: {
    margin: theme.spacing(1),
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const HeartPhoto = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "30%", height: "auto" }}/>
  );
}

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
          <img src={image} alt="" style={{ maxWidth: "90%", height: "auto" }}/>
        </Grid>
      </CardMedia>
      <CardContent>{text}</CardContent>
    </Card>
  );
};

const heartImages = ["heart1.png", "heart2.png", "heart3.png"];

const illustTexts = ["図書館", "ろうか", "げんかん(下足場)"];

const mamoruImages = ["atama.png", "tsukue.png", "kodomobeya.png", "kitchen.png", "waremono.png"]

const mamoruTexts = [
    "近くにあるもので、まず頭を守る。",
    "動けそうなら机などの下に隠れ、机の脚をしっかりつかむ。",
    "子ども部屋に子どもがいたら・・・",
    "キッチンにママがいたら・・・",
    "割れものがいっぱい"
]

export const P14Daijobu = () => {
    const classes = useStyles();
    return (
      <>
        <ResponsiveFontProvider>
          <Typography variant="h2" gutterBottom>
            「私は大丈夫!」
          </Typography>
          <Typography variant="h3" gutterBottom>
            って思ってない？
          </Typography>
        </ResponsiveFontProvider>
        <ResponsiveFontProvider>
          <Typography variant="h4" gutterBottom style={{color:"red"}}>
            それは、イヤなことを考えたくない心理です！
          </Typography>
        </ResponsiveFontProvider>

        <ResponsiveFontProvider>
          <Typography variant="h6" gutterBottom >
            確かな災害情報があったにもかかわらず、避難に結びつかなかったケースがありました。その理由のひとつは、非常事態が起きても「自分は大丈夫」という心理が働き、「油断」を生み、避難を遅くさせてしまったからです。
          </Typography>
        </ResponsiveFontProvider>

        <img
        src="/img/pages/Jishin/family_under_table.png"
        alt=""
        style={{ width: "20%" }}
      />

        <FlexImage image={imgPath + "madori.png"} />
        <Grid container>
          {heartImages.map((_, i) => (
            <Grid item xs={5} className={classes.grid}>
              <Photo image={imgPath + heartImages[i]} text={illustTexts[i]} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h3" gutterBottom>
          自分の身は自分で守ろう！！
        </Typography>
        <Typography variant="h6" gutterBottom>
          大地震がおきたとき、とっさの行動が命を分けます。
          すぐに行動するには、からだで覚えるしかありません。
          家族で話し合い、ふだんからイメージして実際に訓練しましょう。
        </Typography>
        <Grid container>
          {mamoruImages.map((_, i) => (
            <Grid item xs={6} className={classes.grid}>
              <Photo image={imgPath + mamoruImages[i]} text={mamoruTexts[i]} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };