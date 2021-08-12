import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const Title = () => {
  return (
    <ResponsiveFontProvider>
      <Typography variant="h1" gutterBottom>
        グラッと地震がきたら！
      </Typography>
      <Typography variant="h3" gutterBottom>
        いのちを守る！できるだけケガをせず生き残る！
      </Typography>
    </ResponsiveFontProvider>
  );
};

const ActionList = () => {
  return (
    <>
      <Typography variant="h6">１姿勢を低く</Typography>
      <Typography variant="h6">２判断する</Typography>
      <Typography variant="h6">３頭を守る</Typography>
      <Typography variant="h6">４避難する</Typography>
    </>
  );
};

const precautionStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#ffcc66",
  },
  media: {
    height: "100%",
  },
});

const PrecautionList1 = () => {
  const classes = precautionStyles();
  return (
    <Card className={classes.root} gutterBottom>
      <CardMedia>
        <img
          src="/img/pages/Jishin/jishin_tsukue.png"
          alt=""
          style={{ height: 200 }}
        />
      </CardMedia>
      <CardContent>
        テーブルや机などの下にもぐり身を守る。足は出さないように注意！
      </CardContent>
    </Card>
  );
};

const PrecautionList2 = () => {
  const classes = precautionStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img
          src="/img/pages/Jishin/gomi_waremono.png"
          alt=""
          style={{ height: 200 }}
        />
      </CardMedia>
      <CardContent>
        キッチンにいる人は、子供の名前を呼んではいけません。キッチンにはガラスや割れ物がいっぱいです。
      </CardContent>
    </Card>
  );
};

const PrecautionList3 = () => {
  const classes = precautionStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img
          src="/img/pages/Jishin/jiko_jishin_himoto.png"
          alt=""
          style={{ height: 200 }}
        />
      </CardMedia>
      <CardContent>
        火の元よりもまずは自分の身を守ること。大阪ガスでは、震度５以上の揺れを感知すると自動的にガスが止まるようになっています。
      </CardContent>
    </Card>
  );
};

const measureStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  cardTitle: {
    backgroundColor: "#ffc0cb",
    margin: theme.spacing(1),
  },
}));

const Measure = ({ title, text, image }) => {
  const classes = measureStyles();
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

const SafetyMeasures = () => {
  const classes = measureStyles();
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
            image="/img/pages/Jishin/shijin_taishin1.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="家具の配置を工夫"
            text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"
            image="/img/pages/Jishin/kagu_haiti.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="ガラスの飛散防止"
            text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"
            image="/img/pages/Jishin/curtain_pink.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Measure
            title="収納"
            text="家具の上など、高いところに重いものを置かない。重いものは家具の下部に、軽いものは上部に収納する。"
            image="/img/pages/Jishin/kagu_nimotsu_orosu.png"
          />
        </Grid>
      </Grid>
    </>
  );
};

export const P3Jishin = () => {
  return (
    <>
      <Title />
      <img
        src="/img/pages/Jishin/family_under_table.png"
        alt=""
        style={{ width: "100%" }}
      />
      <ActionList />

      <PrecautionList1 />
      <PrecautionList2 />
      <PrecautionList3 />
      <SafetyMeasures />
    </>
  );
};
