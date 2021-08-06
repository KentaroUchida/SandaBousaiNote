import React from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    <Card>
      <CardContent>
        <Paper elevation={3} className={classes.cardTitle}>
          <Typography variant="h5">{title}</Typography>
        </Paper>
        {text}
      </CardContent>
      <CardMedia>
        <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
      </CardMedia>
    </Card>
  );
};

const titles = [
    "つながりの大事さを実感！",
    "充電器・バッテリーは必須！",
    "体質にあった特殊なものは要注意！！",
    "かならず確かな情報を！",
    "転倒防止策がいちばんの防災！",
    "不安を一人で抱えこまないで",
    "家族、命、ほんとうに大切なものを考えて！",
    "通信にも配慮を"
]

const texts = [
    "出勤途中に発災。子どもの無事が確認できるまで不安でしかたがなかった。子どもと離れ離れでも、子どもの無事を知らせてくれるママ友がいると安心。",
    "テキスト",
    "テキスト",
    "テキスト",
    "テキスト",
    "テキスト",
    "テキスト",
    "テキスト",
]

const images = [
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
    "img/Taiken/tsunagari.png",
]

export const Taiken = () => {
  return (
    <>
      <FlexImage image="img/Taiken/title.png" />

      <Taikendan
        title="つながりの大事さを実感！"
        text="出勤途中に発災。子どもの無事が確認できるまで不安でしかたがなかった。子どもと離れ離れでも、子どもの無事を知らせてくれるママ友がいると安心。"
        image="img/Taiken/tsunagari.png"
      />
    </>
  );
};
