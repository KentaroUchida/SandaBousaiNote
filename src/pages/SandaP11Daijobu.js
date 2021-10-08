import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import {
  ImageCard,
  ImageTextCard,
  TitleTextImageCard,
  TitleImagesCard,
} from "../components/CardComponents";
import { Title, SubTitle, BodyText } from "../components/TitleComponents";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormGroup  from '@mui/material/FormGroup';
import FormControlLabel  from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField  from '@mui/material/TextField';
import Box from '@mui/material/Box'


const styles = {
  card: {
    marginBottom: 12,
  },
  cardHeaderMain: {
  },
  cardHeaderCheckList: {
    bgcolor: "primary.light",
  },
  cardHeaderCheck: {
    bgcolor: "secondary.light",
  },
  cardHeaderRecommend: {
    bgcolor: "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
  },
  child: {
    marginLeft: 3,
  },
  parentCheckbox: {
    pointerEvents: "none",
  },
};

const daijobuTitles = [
  "1.体に避難行動をすり込ませます。",
  "2.勇気を出して、主体的に避難します。",
  "3.油断しないで、最善をつくす。",
];

const daijobuTexts = [
  "継続的に、様々な場所や場面を想定した防災訓練に取り組みます。すぐに行動するには体で覚えるしかありません。\nふだんからイメージして実際に訓練しましょう。",
  "今までに経験したことのない場面で迷ったとき、周囲の人と同じ行動を取ろうとすることがあります。\n周囲と異なる行動には抵抗があるかもしれませんが、声を掛けながら避難することは、自分だけでなく、周りの人の命を助けることにもなります。",
  "自然災害は、想定していたものより、小さなもので済むことがあります。「避難したけど、何ごともなかった」そんな時なんとなく損した気分になりますね。\nでもそうじゃない！あなたは今回も自分の命、家族の命を守る行動をとれたのです！！自然災害は想定していた以上の被害が生じることもあります。油断しないで最善を尽くしましょう。",
];

const daijobuImages = [
  "img/pages/P11Daijobu/waremono.png",
  "img/pages/P11Daijobu/kotei.png",
  "img/pages/P11Daijobu/tounan1.png",
];

function CheckList() {
  let tmp = localStorage.getItem("P15Earthquake");
  const [earthquake, setEarthquake] = useState(
    tmp !== null ? tmp : "");
  useEffect(() => localStorage.setItem("P15Earthquake", earthquake),[earthquake]);
  const handleChangeEarthquake = event => setEarthquake(event.target.value);


  tmp = localStorage.getItem("P15Flood");
  const [flood, setFlood] = useState(
    tmp !== null ? tmp : "");
  useEffect(() => localStorage.setItem("P15Flood", flood));
  const handleChangeFlood = event => setFlood(event.target.value);
  const shelter = earthquake !== "" && flood !== ""

  tmp = localStorage.getItem("P15Place");
  const [place, setPlace] = useState(
    tmp !== null ? tmp : "");
  useEffect(() => localStorage.setItem("P15Place", place));
  const handleChangePlace = event => setPlace(event.target.value);
  const filledPlace = place !== "";

  tmp = localStorage.getItem("P15Home");
  const [home, setHome] = useState(
    tmp !== null ? JSON.parse(tmp)
    : {
      fixFurniture: false,
      glass: false,
      storage: false,
      arrangeFurniture: false,
  });
  useEffect(() => localStorage.setItem("P15Home", JSON.stringify(home)));
  const handleChangeHome = event =>
    setHome({...home, [event.target.name]: event.target.checked});
  const { fixFurniture, glass, storage, arrangeFurniture } = home;
  const homeAll = fixFurniture && glass && storage && arrangeFurniture;

  tmp = localStorage.getItem("P15Stock");
  const [stock, setStock] = useState(
    tmp !== null ? JSON.parse(tmp)
    : {
      meal: false,
      water: false,
      stove: false,
      gas: false,
      toilet: false,
  });
  useEffect(() => localStorage.setItem("P15Stock", JSON.stringify(stock)));
  const handleChangeStock = event =>
    setStock({...stock, [event.target.name]: event.target.checked});
  const { meal, water, stove, gas, toilet } = stock;
  const stockAll = meal && water && stove && gas && toilet;

  return(
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeaderCheckList}
        title="普段から意識してみよう"
        titleTypographyProps={{ align: 'center' }}
      />
      <CardContent>
        <FormControlLabel
            control={
              <Checkbox
                checked={fixFurniture} onChange={handleChangeHome} name="fixFurniture"
              />
            }
            label="友人・ご近所付き合い"
          />
        <FormGroup sx={styles.child}>
          <ul>
            <li>顔見知りを増やすこと•挨拶する</li>
            <li>子供を任せられる人</li>
          </ul>
        </FormGroup>
        
        <FormControlLabel
          control={
            <Checkbox
              checked={fixFurniture} onChange={handleChangeHome} name="fixFurniture"
            />
          }
          label="家の中の備え"
        />
        <FormGroup sx={styles.child}>
          <ul>
            <li>備蓄(詳しくはP13~14)</li>
            <li>ものが落ちてこないように整理整頓</li>
          </ul>
        </FormGroup>

        <FormControlLabel
          control={
            <Checkbox
              checked={glass} onChange={handleChangeHome} name="glass"
            />
          }
          label="防災さんぽ"
        />
        <FormGroup sx={styles.child}>
          (詳しくはP18)
        </FormGroup>

        <FormControlLabel
          control={
            <Checkbox
              checked={storage} onChange={handleChangeHome} name="storage"
            />
          }
          label="防災キャンプ"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={arrangeFurniture} onChange={handleChangeHome} name="arrangeFurniture"
            />
          }
          label="ポリ袋クッキング"
        />
        <FormGroup sx={styles.child}>
          (詳しくはP14)
        </FormGroup>
      </CardContent>
    </Card>
  );
}

export const SandaP11Daijobu = () => {

  // 文字列を改行
  // https://chaika.hatenablog.com/entry/2020/07/12/083000
  const texts=[];
  for(let i=0; i<3; i++){
    const text = daijobuTexts[i].split(/(\n)/).map((item, index) => {
      return (
        <React.Fragment key={index}>
          { item.match(/\n/) ? <br /> : item }
        </React.Fragment>
      );
    });
    texts.push(text);
  };

  return(<>
    <Title>「私は大丈夫!」って思ってない？</Title>
    <SubTitle>それは、イヤなことを考えたくない心理です!</SubTitle>
    {
      daijobuTitles.map((_,i) => {
        return(
        <TitleTextImageCard
          title={daijobuTitles[i]}
          image={daijobuImages[i]}
        >
          {texts[i]}
        </TitleTextImageCard>  
      )})
    }
    <CheckList/>
  </>)
}