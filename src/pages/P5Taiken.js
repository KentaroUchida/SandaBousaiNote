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

const taikenTitles = [
  "つながりの大事さを実感！",
  "充電器・バッテリーは必須！",
  "体質にあった特殊なものは要注意！！",
  "かならず確かな情報を！",
  "転倒防止策がいちばんの防災！",
  "不安を一人で抱えこまないで",
  "家族、命、ほんとうに大切なものを考えて！",
  "通信にも配慮を",
];

const taikenTexts = [
  "出勤途中に発災。子どもの無事が確認できるまで不安でしかたがなかった。子どもと離れ離れでも、子どもの無事を知らせてくれるママ友がいると安心。",
  "携帯の充電がなくなると、連絡を取ったり、情報を得たり、大切な事が何も出来なくなる。モバイルバッテリーは必需品。",
  "アレルギー対応物質はその日のうちに売り場からなくなりました。常備薬を含め、命に関わるものは必ず常備を！",
  "正しい情報を得るのが意外と困難。普段から行政のSNSや災害アプリなど、信頼できる情報元にアクセスする習慣をつけておかないと、肝心な時にネットから流れてくる不確かな情報に惑わされます。",
  "家具の転倒防止が役に立った。倒れない・壊れないのが一番の防災。台風の時もベランダに物を置いていた家庭の被害が大きかったようです。風で舞うと凶器になって、ガラスが割れた家もありました。",
  "親が不安を抱えていると、子どもも不安な気持ちになります。一人で抱え込まずに「怖かったね」と家族や友達と気持ちを共有するだけでもほっとできました。",
  "電車が停まっていても出勤を要請されたが、家は停電や断水で大混乱。家族のために仕事を休む勇気を！命より大切なものはありません。",
  "安否確認メールや電話は嬉しいけれど、受信するたびに電源がなくなり、大切な家族とのやり取りが出来なくなった。「知り合い」程度の不要不急の安否確認は、控えた方が良いかも。",
];

const taikenImages = [
  "img/pages/Taiken/tsunagari.png",
  "img/pages/Taiken/juden.png",
  "img/pages/Taiken/taishitsu.png",
  "img/pages/Taiken/app.png",
  "img/pages/Taiken/tansu.png",
  "img/pages/Taiken/huan.png",
  "img/pages/Taiken/taisetsu.png",
  "img/pages/Taiken/anpi.png",
];

const photoImages = [
  "img/pages/Taiken/pic1.png",
  "img/pages/Taiken/pic2.png",
  "img/pages/Taiken/pic3.png",
];

const photoTexts = [
  "いすに座っていたと思ったら・・・",
  "屋根がごっそり落ちてきました",
  "ベランダの壁を突き破り、隣家からタイヤが飛んできました",
];

export const P5Taiken = () => {
  return (
    <>
      <FlexImage image="img/pages/Taiken/title.png" />
      <ResponsiveFontProvider>
        <Typography variant="h3">
          大阪北部地震・台風21号を体験してほくせつママ&amp;パパの声をご紹介します。
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
        <Photo image={photoImages[i]} text={photoTexts[i]} />
      ))}
    </>
  );
};
