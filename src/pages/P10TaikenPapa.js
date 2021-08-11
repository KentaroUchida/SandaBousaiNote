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
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  cardTitle: {
    backgroundColor: "#ffc0cb",
    margin: theme.spacing(1),
  },
}));

const FlexImage = ({ image }) => {
  return (
    <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
  );
};

const Taikendan = ({ title, text, image }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Paper elevation={3} className={classes.cardTitle}>
          <Typography variant="h5">{title}</Typography>
        </Paper>
        {text}
      </CardContent>
      <CardMedia>
        <Grid container justify="center">
          <img
            src={image}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </CardMedia>
    </Card>
  );
};

const Photo = ({ image }) => {
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
    </Card>
  );
};

const taikenTitles = [
  "台所はキケンがいっぱい！",
  "家具の固定はマスト！",
  "避難所でも盗難が！",
  "壊れた家屋にも盗難が！",
  "ため水が役立つ！",
  "車のガソリンは満タンに！",
  "エコノミー症候群にも注意！",
  "のどが乾かない食料を！",
];

const taikenTexts = [
  "食器戸棚の扉は地震でロックするものがよいです。あの激しい揺れでは食器は凶器と化し襲ってきます。実際台所はガラスの山でした。",
  "つっぱり棒は有効であるかどうかは地震の規模や揺れの方向によります。3.11では揺れがきつ過ぎて全く機能しておりませんでした。6強ではもたないのかもしれません。可能であれば、壁にネジで固定式が有効かと思います。",
  "残念ながら盗難に遭うケースもありました。皆貴重品をもって避難してますので、大金を持っている方などは注意が必要です。",
  "地震時に戸を開ける行為は、避難経路確保には有効でしたが、のちのち扉が歪んで閉まらず盗難にあうケースも住んでいたマンションでは発生していました。",
  "風呂の水は、ためたままにする。マンション等の集合住宅で屋上の給水タンクからの供給の場合、停電で供給されず、トイレが流せない事象になりました。風呂水を利用し流すことができました。",
  "3.11の後、ガソリンが買えず、6時間並んで20リッターしか買えない事になりました。3月とは言え東北ですので寒空の下、暖房にも活かせず、移動も出来ないことになりました。ガソリンの目安を決めて常に満タンにしましょう。我が家は半分減ったら満タンにしてます。車のエンジンがかかれば携帯電話等の充電も可能です。",
  "車の中で避難の際はエコノミー症候群にも注意。長時間膝を曲げてますので、適度に歩くなどしないといけません。",
  "備蓄食料も、乾パンなどもよいですが、なるべく喉が乾かないようなものがいいでしょう。水も貴重品となりますので、その辺も考慮したものを考えてみましょう。しょっぱい物なども喉が渇きます。避難所に届いた食料などでもせんべいなどもあり、ありがたいのですが、渡せない事もありました。",
];

const taikenImages = [
  "img/pages/P10TaikenPapa/kiken.png",
  "img/pages/P10TaikenPapa/must.png",
  "img/pages/P10TaikenPapa/tounan.png",
  "img/pages/P10TaikenPapa/tounan2.png",
  "img/pages/P10TaikenPapa/huro.png",
  "img/pages/P10TaikenPapa/gasorin.png",
  "img/pages/P10TaikenPapa/economy.png",
  "img/pages/P10TaikenPapa/food.png",
];

const photoImages = [
  "img/pages/P10TaikenPapa/pic1.png",
  "img/pages/P10TaikenPapa/pic2.png",
  "img/pages/P10TaikenPapa/pic3.png",
  "img/pages/P10TaikenPapa/pic4.png",
  "img/pages/P10TaikenPapa/pic5.png",
];

export const P10TaikenPapa = () => {
  return (
    <>
      <FlexImage image="img/pages/P10TaikenPapa/title.png" />
      <ResponsiveFontProvider>
        <Typography variant="h2">
          実際の3.11震災の当時、仙台に住んでいたパパの体験をご紹介します。
        </Typography>
      </ResponsiveFontProvider>
      {taikenTitles.map((_, i) => (
        <Taikendan
          title={taikenTitles[i]}
          text={taikenTexts[i]}
          image={taikenImages[i]}
        />
      ))}
      {photoImages.map((_, i) => (
        <Photo image={photoImages[i]} />
      ))}
    </>
  );
};
