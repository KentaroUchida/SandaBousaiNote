// import React from "react";
import React, { useState, useEffect } from "react";
import { BodyText } from "../components/TitleComponents";
import {
  CardBase,
  TitleCardPart,
} from "../components/CardComponents";
// import { SimpleTitle } from "../components/TitleComponents";
import {
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import { Title, SubTitle} from "../components/TitleComponents";

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

const messages = [
  "大地震が起こったとき、家族が別の場所にいて離ればなれになることも。",
  "避難場所にたくさんの人が集まり、すぐ会えるとは限りません。",
  "集合場所は時間と場所をピンポイントで決めておきましょう。",
  "たとえば ○○小学校の運動場の鉄棒の前 10時と15時に30分間待つ。",
]

const Instruction = () => {
  return(
    <>
      <CardBase>
        <CardContent>
          {messages.map(message => {
            return <BodyText key={message}>{message}</BodyText>;
          })}
        </CardContent>
    </CardBase>
    </>
  )
}

const HinanCard = () => {
  const [shelters, setShelters] = useState(
    JSON.parse(localStorage.getItem("P18Shelters")) || {}
  );
  const handleChange = (event) => {
    setShelters({ ...shelters, [event.target.id]: event.target.value });
    localStorage.setItem(
      "P18Shelters",
      JSON.stringify({ ...shelters, [event.target.id]: event.target.value })
    );
  };

  const CheckList = () => {
    let tmp = localStorage.getItem("P18Place");
    const [place, setPlace] = useState(tmp !== null ? tmp : "");
    useEffect(() => localStorage.setItem("P18Place", place));
    const handleChangePlace = (event) => setPlace(event.target.value);
    const filledPlace = place !== "";

    tmp = localStorage.getItem("P18Home");
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
    useEffect(() => localStorage.setItem("P18Home", JSON.stringify(home)));
    const handleChangeHome = (event) =>
      setHome({ ...home, [event.target.name]: event.target.checked });
    const { fixFurniture, glass, storage, arrangeFurniture } = home;
    const homeAll = fixFurniture && glass && storage && arrangeFurniture;

    tmp = localStorage.getItem("P18Stock");
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
    useEffect(() => localStorage.setItem("P18Stock", JSON.stringify(stock)));
    const handleChangeStock = (event) =>
      setStock({ ...stock, [event.target.name]: event.target.checked });
    const { meal, water, stove, gas, toilet } = stock;
    const stockAll = meal && water && stove && gas && toilet;

    return (
      <CardBase>
        <CardContent>
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
      </CardBase>
    );
  }

  // const HinanTable = () => {
  //   return (
  //     <>
  //       <table border="1">
  //         <tr>
  //           <th></th>
  //           <th>まず逃げるところ</th>
  //           <th>家に帰れないときに過ごす場所</th>
  //         </tr>
  //         <tr>
  //           <th>水害</th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="suigai1"
  //               defaultValue={shelters.suigai1}
  //               variant="standard"
  //             />
  //           </th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="suigai2"
  //               defaultValue={shelters.suigai2}
  //               variant="standard"
  //             />
  //           </th>
  //         </tr>
  //         <tr>
  //           <th>土砂</th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="dosya1"
  //               defaultValue={shelters.dosya1}
  //               variant="standard"
  //             />
  //           </th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="dosya2"
  //               defaultValue={shelters.dosya2}
  //               variant="standard"
  //             />
  //           </th>
  //         </tr>
  //         <tr>
  //           <th>地震</th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="jishin1"
  //               defaultValue={shelters.jishin1}
  //               variant="standard"
  //             />
  //           </th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="jishin2"
  //               defaultValue={shelters.jishin2}
  //               variant="standard"
  //             />
  //           </th>
  //         </tr>
  //         <tr>
  //           <th>火災</th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="kasai1"
  //               defaultValue={shelters.kasai1}
  //               variant="standard"
  //             />
  //           </th>
  //           <th>
  //             <TextField
  //               onChange={handleChange}
  //               id="kasai2"
  //               defaultValue={shelters.kasai2}
  //               variant="standard"
  //             />
  //           </th>
  //         </tr>
  //       </table>
  //     </>
  //   )
  // }

  return(
    <>
      <CardBase>
        <CardContent>
          <TitleCardPart title="わがやの災害避難カードを作ろう!" />
          <BodyText>水害、土砂、地震，火災など、災害によって複数の逃げる場所を持つことが大切です。</BodyText>
          {/* <HinanTable /> */}
          <table border="1">
          <tr>
            <th></th>
            <th>まず逃げるところ</th>
            <th>家に帰れないときに過ごす場所</th>
          </tr>
          <tr>
            <th>水害</th>
            <th>
              <TextField
                onChange={handleChange}
                id="suigai1"
                defaultValue={shelters.suigai1}
                variant="standard"
              />
            </th>
            <th>
              <TextField
                onChange={handleChange}
                id="suigai2"
                defaultValue={shelters.suigai2}
                variant="standard"
              />
            </th>
          </tr>
          <tr>
            <th>土砂</th>
            <th>
              <TextField
                onChange={handleChange}
                id="dosya1"
                defaultValue={shelters.dosya1}
                variant="standard"
              />
            </th>
            <th>
              <TextField
                onChange={handleChange}
                id="dosya2"
                defaultValue={shelters.dosya2}
                variant="standard"
              />
            </th>
          </tr>
          <tr>
            <th>地震</th>
            <th>
              <TextField
                onChange={handleChange}
                id="jishin1"
                defaultValue={shelters.jishin1}
                variant="standard"
              />
            </th>
            <th>
              <TextField
                onChange={handleChange}
                id="jishin2"
                defaultValue={shelters.jishin2}
                variant="standard"
              />
            </th>
          </tr>
          <tr>
            <th>火災</th>
            <th>
              <TextField
                onChange={handleChange}
                id="kasai1"
                defaultValue={shelters.kasai1}
                variant="standard"
              />
            </th>
            <th>
              <TextField
                onChange={handleChange}
                id="kasai2"
                defaultValue={shelters.kasai2}
                variant="standard"
              />
            </th>
            </tr>
          </table>
          <CheckList />
        </CardContent>
      </CardBase>
    </>
  )
}

const Apps = () => {
  const apps = [
    {
      name: "Yahoo!防災速報",
      text: "災害の情報をいち早くお知らせ",
      icon: "/img/pages/SandaP18Bousaikaigi/Yahoo.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.co.yahoo.android.emg",
      appStore: "https://apps.apple.com/jp/app/id481914139",
    },
    {
      name: "eお薬手帳",
      text: "いつでもどこでも確かなお薬情報を",
      icon: "/img/pages/SandaP18Bousaikaigi/eOkusuri.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.co.nichiyaku.okusuri&hl=ja&gl=US",
      appStore:
        "https://apps.apple.com/jp/app/e%E3%81%8A%E8%96%AC%E6%89%8B%E5%B8%B3/id1488714856?itsct=apps_box_link&itscg=30200",
    },
    {
      name: "ひょうご防災ネット",
      text: "防災情報のポータルサイト。12外国語に対応!",
      icon: "/img/pages/SandaP18Bousaikaigi/HyougoBousai.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=net.bosai.appli&hl=ja",
      appStore:
      "https://apps.apple.com/us/app/%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E9%98%B2%E7%81%BD%E3%83%8D%E3%83%83%E3%83%88/id1458839848?itsct=apps_box_link&itscg=30200",
    },
    {
      name: "radiko",
      text: "災害時に情報を得る手段として、スマホにラジオアプリ。",
      icon: "/img/pages/SandaP18Bousaikaigi/radiko.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.radiko.Player&hl=ja",
      appStore:
        "https://apps.apple.com/jp/app/radiko/id370515585?itsct=apps_box_link&itscg=30200",
    },
    {
      name: "母子モ",
      text: "災害時にも、母子手帳情報がスマホに入っていると安心!",
      icon: "/img/pages/SandaP18Bousaikaigi/bosimo.png",
      googlePlay:
        "https://play.google.com/store/apps/details?id=jp.co.mti.BoshiAuthorize&hl=ja",
      appStore:
        "https://apps.apple.com/us/app/%E6%AF%8D%E5%AD%90%E6%89%8B%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA-%E6%AF%8D%E5%AD%90%E3%83%A2-%E9%9B%BB%E5%AD%90%E6%AF%8D%E5%AD%90%E6%89%8B%E5%B8%B3/id1106750564?itsct=apps_box_link&itscg=30200",
    },
  ];
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title="防災おすすめアプリ" />
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
      </CardContent>
    </CardBase>
  );
}

export const SandaP18Bousaikaigi = () => {
  return(
    <>
      <Title>家族で防災カイギ</Title>
      <SubTitle>いざという時のために「今」できること</SubTitle>
      {/* <SimpleTitle title="家族で防災会議" subtitle="いざという時のために「今」できること" /> */}
      <Instruction />
      <HinanCard />
      <Apps />
    </>
  )
}
