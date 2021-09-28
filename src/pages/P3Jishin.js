import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const Title = () => {
  return (
    <ResponsiveFontProvider>
      <Typography variant="h1" gutterbottom="true">
        グラッと地震がきたら！
      </Typography>
      <Typography variant="h3" gutterbottom="true">
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

const styles ={
  root: {
    width: "100%",
    bgcolor: "secondary.light",
  },
  media: {
    height: "100%",
  },
  grid: {
    display: "flex",
  },
  cardTitle: {
    bgcolor: "secondary.main",
    margin: 1,
  },
};

const PrecautionList1 = () => {
  return (
    <Card sx={styles.root} gutterbottom="true">
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
  return (
    <Card sx={styles.root}>
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
  return (
    <Card sx={styles.root}>
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

const Measure = ({ title, text, image }) => {
  return (
    <Card>
      <CardContent>
        <Paper elevation={3} sx={styles.cardTitle}>
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
  return (
    <>
      <Typography variant="h3" gutterbottom="true">
        たいせつな家族の命を守る「安全対策」の例
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sx={styles.grid}>
          <Measure
            title="家具の固定"
            text="L字金具などで固定する。2段重ねの家具は、つなぎ目を金具で連結させる。"
            image="/img/pages/Jishin/shijin_taishin1.png"
          />
        </Grid>
        <Grid item xs={6} sx={styles.grid}>
          <Measure
            title="家具の配置を工夫"
            text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"
            image="/img/pages/Jishin/kagu_haiti.png"
          />
        </Grid>
        <Grid item xs={6} sx={styles.grid}>
          <Measure
            title="ガラスの飛散防止"
            text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"
            image="/img/pages/Jishin/curtain_pink.png"
          />
        </Grid>
        <Grid item xs={6} sx={styles.grid}>
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
