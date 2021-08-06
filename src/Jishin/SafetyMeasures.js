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

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  cardTitle: {
    backgroundColor: "#ffc0cb",
    margin: theme.spacing(1),
  },
}));

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
        <img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
      </CardMedia>
    </Card>
  );
};

export const SafetyMeasures = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        たいせつな家族の命を守る「安全対策」の例
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="家具の固定"
            text="L字金具などで固定する。2段重ねの家具は、つなぎ目を金具で連結させる。"
            image="/img/shijin_taishin1.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="家具の配置を工夫"
            text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"
            image="/img/kagu_haiti.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="ガラスの飛散防止"
            text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"
            image="/img/curtain_pink.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
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
