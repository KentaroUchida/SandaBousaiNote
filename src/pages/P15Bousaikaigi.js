import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Grid,
  Link,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CircleOutlined from "@mui/icons-material/CircleOutlined";

const styles = {
  card: {
    marginBottom: 12,
  },
  cardHeaderMain: {},
  cardHeaderCheckList: {
    bgcolor: "primary.light",
  },
  cardHeaderCheck: {
    bgcolor: "secondary.light",
  },
  cardHeaderRecommend: {
    bgcolor:
      "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
  },
  child: {
    marginLeft: 4,
  },
  parentCheckbox: {
    pointerEvents: "none",
  },
};

function Main() {
  return (
    <Card sx={styles.card}>
      <CardHeader
        title="家族で防災カイギ"
        titleTypographyProps={{ align: "center" }}
        subheader="いざという時のために「今」できること"
        subheaderTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Typography paragraph>
          大地震が起きたとき、家族が別の場所にいて、離ればなれになることも。
          <br />
          避難場所にはたくさんの人が集まり、すぐに会えるとはかぎりません。
          <br />
          集合場所は時間と場所をピンポイントできめておきましょう。
        </Typography>
        <Typography color="textSecondary">
          （例えば）○○小学校の運動場の鉄棒の前 10時と15時に30分間待つ。
        </Typography>
      </CardContent>
    </Card>
  );
}

function CheckList() {
  let tmp = localStorage.getItem("P15Earthquake");
  const [earthquake, setEarthquake] = useState(tmp !== null ? tmp : "");
  useEffect(
    () => localStorage.setItem("P15Earthquake", earthquake),
    [earthquake]
  );
  const handleChangeEarthquake = (event) => setEarthquake(event.target.value);

  tmp = localStorage.getItem("P15Flood");
  const [flood, setFlood] = useState(tmp !== null ? tmp : "");
  useEffect(() => localStorage.setItem("P15Flood", flood));
  const handleChangeFlood = (event) => setFlood(event.target.value);
  const shelter = earthquake !== "" && flood !== "";

  tmp = localStorage.getItem("P15Place");
  const [place, setPlace] = useState(tmp !== null ? tmp : "");
  useEffect(() => localStorage.setItem("P15Place", place));
  const handleChangePlace = (event) => setPlace(event.target.value);
  const filledPlace = place !== "";

  tmp = localStorage.getItem("P15Home");
  const [home, setHome] = useState(
    tmp !== null
      ? JSON.parse(tmp)
      : {
          fixFurniture: false,
          glass: false,
          storage: false,
          arrangeFurniture: false,
        }
  );
  useEffect(() => localStorage.setItem("P15Home", JSON.stringify(home)));
  const handleChangeHome = (event) =>
    setHome({ ...home, [event.target.name]: event.target.checked });
  const { fixFurniture, glass, storage, arrangeFurniture } = home;
  const homeAll = fixFurniture && glass && storage && arrangeFurniture;

  tmp = localStorage.getItem("P15Stock");
  const [stock, setStock] = useState(
    tmp !== null
      ? JSON.parse(tmp)
      : {
          meal: false,
          water: false,
          stove: false,
          gas: false,
          toilet: false,
        }
  );
  useEffect(() => localStorage.setItem("P15Stock", JSON.stringify(stock)));
  const handleChangeStock = (event) =>
    setStock({ ...stock, [event.target.name]: event.target.checked });
  const { meal, water, stove, gas, toilet } = stock;
  const stockAll = meal && water && stove && gas && toilet;

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeaderCheckList}
        title="チェックリスト"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <FormControlLabel
          control={
            <Checkbox
              checked={shelter}
              name="shelter"
              sx={styles.parentCheckbox}
              icon={<CircleOutlined />}
              checkedIcon={<CheckCircle />}
            />
          }
          label="避難場所について家族で場所の確認などをしましたか？"
        />
        <Box sx={styles.child}>
          <TextField
            label="地震の場合"
            id="earthquake"
            value={earthquake}
            onChange={handleChangeEarthquake}
            variant="standard"
          />
          <TextField
            label="水害の場合"
            id="flood"
            value={flood}
            onChange={handleChangeFlood}
            variant="standard"
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={filledPlace}
              name="place"
              sx={styles.parentCheckbox}
              icon={<CircleOutlined />}
              checkedIcon={<CheckCircle />}
            />
          }
          label="家族の集合場所は決めましたか？"
        />
        <TextField
          label="集合場所"
          id="place"
          value={place}
          onChange={handleChangePlace}
          sx={styles.child}
          variant="standard"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={homeAll}
              name="home"
              sx={styles.parentCheckbox}
              icon={<CircleOutlined />}
              checkedIcon={<CheckCircle />}
            />
          }
          label="家の中の安全対策はできていますか？"
        />
        <FormGroup sx={styles.child}>
          <FormControlLabel
            control={
              <Checkbox
                checked={fixFurniture}
                onChange={handleChangeHome}
                name="fixFurniture"
              />
            }
            label="家具の固定"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={glass}
                onChange={handleChangeHome}
                name="glass"
              />
            }
            label="ガラス飛散防止"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={storage}
                onChange={handleChangeHome}
                name="storage"
              />
            }
            label="収納"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={arrangeFurniture}
                onChange={handleChangeHome}
                name="arrangeFurniture"
              />
            }
            label="家具の配置"
          />
        </FormGroup>

        <FormControlLabel
          control={
            <Checkbox
              checked={stockAll}
              name="home"
              sx={styles.parentCheckbox}
              icon={<CircleOutlined />}
              checkedIcon={<CheckCircle />}
            />
          }
          label="食料・トイレの備蓄はできていますか？"
        />
        <FormGroup sx={styles.child}>
          <FormControlLabel
            control={
              <Checkbox
                checked={meal}
                onChange={handleChangeStock}
                name="meal"
              />
            }
            label="食料"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={water}
                onChange={handleChangeStock}
                name="water"
              />
            }
            label="飲料水"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={stove}
                onChange={handleChangeStock}
                name="stove"
              />
            }
            label="カセットコンロ"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gas} onChange={handleChangeStock} name="gas" />
            }
            label="カセットコンロ用ボンベ"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={toilet}
                onChange={handleChangeStock}
                name="toilet"
              />
            }
            label="トイレ"
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
}

function Check() {
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeaderCheck}
        title="要確認"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Typography paragraph>
          災害時には、携帯は繋がりにくい場合があります。
          <br />
          災害用伝言ダイヤルやデータ通信によるLINEやTwitter、
          Facebookなどの複数のSNSの連絡手段も覚えておきましょう。
        </Typography>
        <Grid container justifyContent="space-around" alignItems="center">
          <Typography align="center">NTT災害ダイヤル</Typography>
          <Typography variant="h5">171</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Recommend() {
  const apps = [
    {
      name: "Yahoo!防災速報",
      text: "災害の情報をいち早くお知らせ",
      icon: "/img/pages/P15Bousaikaigi/yahoo.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.co.yahoo.android.emg",
      appStore: "https://apps.apple.com/jp/app/id481914139",
    },
    {
      name: "eお薬手帳",
      text: "いつでもどこでも確かなお薬情報を",
      icon: "/img/pages/P15Bousaikaigi/e.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.co.nichiyaku.okusuri&hl=ja&gl=US",
      appStore:
        "https://apps.apple.com/jp/app/e%E3%81%8A%E8%96%AC%E6%89%8B%E5%B8%B3/id1488714856?itsct=apps_box_link&itscg=30200",
    },
  ];

  return (
    <Card>
      <CardHeader
        style={{ backgroundImage: styles.cardHeaderRecommend.bgcolor }}
        title="防災おすすめアプリ"
        titleTypographyProps={{ align: "center" }}
      />
      {apps.map((app, i) => {
        return (
          <React.Fragment key={i.toString()}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs>
                <CardMedia alt={app.name} component="img" image={app.icon} />
              </Grid>
              <Grid item xs>
                <Container fixed>
                  <Grid item>
                    <Link href={app.googlePlay}>
                      <img
                        src="/img/pages/Home/hyogo_bousai_google_play_badge.png"
                        alt="Google Playリンク"
                        style={{ width: "160px", margin: "-10px" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={app.appStore}>
                      <img
                        src="/img/pages/Home/hyogo_bousai_app_store_black.svg"
                        alt="App Storeリンク"
                        style={{ width: "140px" }}
                      />
                    </Link>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
            <CardContent>
              <Typography variant="h5">{app.name}</Typography>
              <Typography variant="body2">{app.text}</Typography>
            </CardContent>
          </React.Fragment>
        );
      })}
    </Card>
  );
}

function P15Bousaikaigi() {
  return (
    <>
      <Main />
      <CheckList />
      <Check />
      <Recommend />
    </>
  );
}

export {P15Bousaikaigi}
