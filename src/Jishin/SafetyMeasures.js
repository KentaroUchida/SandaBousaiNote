import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: 450,
  },
  cardTitle: {
    backgroundColor: "#ffc0cb",
  }
});

const Measure = ({ title, text, image }) => {
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
        <img src={image} alt="" style={{ width: "100%" }} />
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
      <Grid container spacing={3}>
          <Grid item xs={6}>
      <Measure
        title="家具の固定"
        text="L字金具などで固定する。2段重ねの家具は、つなぎ目を金具で連結させる。"
        image="/img/shijin_taishin1.png"
      />
      </Grid>
          <Grid item xs={6}>
      <Measure
        title="家具の配置を工夫"
        text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"
        image="/img/kagu_haiti.png"
      />
      </Grid>
          <Grid item xs={6}>
      <Measure
        title="ガラスの飛散防止"
        text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"
        image="/img/curtain_pink.png"
      />
      </Grid>
          <Grid item xs={6}>
      <Measure
        title="収納"
        text="家具の上など、高いところに重いものを置かない。重いものは家具の下部に、軽いものは上部に収納する。"
        image="/img/kagu_nimotsu_orosu.png"
      />
      </Grid>
      </Grid>
    </>
  );
};
