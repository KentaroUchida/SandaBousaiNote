import React from "react";
import { Typography, Card, CardContent, CardMedia, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardTitle: {
    backgroundColor: "#ffc0cb",
  },
  media: {
    height: "100%"
  }
});

const Measure = ({ title, text, image }) => {
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
        <img src={image} alt="" style={{height: 200}}/>
      </CardMedia>
    </Card>
  );
};

export const SafetyMeasures = () => {
  return (
    <>
      <Typography variant="h3">
        たいせつな家族の命を守る「安全対策」の例
      </Typography>
      <Measure title="家具の固定" text="L字金具などで固定する。2段重ねの家具は、つなぎ目を金具で連結させる。" image="/img/shijin_taishin1.png"/>
      <Measure title="家具の配置を工夫" text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"/>
      <Measure title="ガラスの飛散防止" text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"/>
      <Measure title="収納" text="家具の上など、高いところに重いものを置かない。重いものは家具の下部に、軽いものは上部に収納する。"/>
    </>
  );
};
