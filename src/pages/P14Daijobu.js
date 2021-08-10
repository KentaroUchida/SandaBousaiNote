import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Grid,
} from "@material-ui/core";

const imgPath = "/img/pages/P14Daijobu/";

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

const illustImages = ["tosyokan.png", "rouka.png", "genkan.png", "undoujou.png"];

const illustTexts = ["図書館", "ろうか", "げんかん(下足場)", "運動場"];

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
        <div style={{ display: "inline-flex" }}>
          <Typography variant="h4" gutterBottom>
            「私は大丈夫!」
          </Typography>
          <Typography variant="h5" gutterBottom>
            って思ってない？
          </Typography>
        </div>
        <div style={{ display: "inline-flex" }}>
          <Typography variant="h5" gutterBottom>
            それは、イヤなことを考えたくない
          </Typography>
          <Typography variant="h5" gutterBottom　style={{color:"red"}}>
            心理
          </Typography>
          <Typography variant="h5" gutterBottom>
            です！
          </Typography>
        </div>
        <FlexImage image={imgPath + "madori.png"} />
        <Grid container>
          {illustImages.map((_, i) => (
            <Grid item xs={6} className={classes.grid}>
              <Photo image={imgPath + illustImages[i]} text={illustTexts[i]} />
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