import React, { useState, useEffect } from "react";
import { HeaderCardPart, CardBase,} from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const styles = {
  card: {
    marginBottom: 12,
  },
  cardHeaderMain: {},
  cardHeaderCheckList: {
    bgcolor: "blue.light",
  },
  cardHeaderCheck: {
    bgcolor: "secondary.light",
  },
  cardHeaderRecommend: {
    bgcolor:
      "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
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
  "自然災害は、想定していたものより、小さなもので済むことがあります。「避難したけど、何ごともなかった」そんな時なんとなく損した気分になりますね。\nでもそうじゃない！あなたは今回も自分の命、家族の命を守る行動をとれたのです!!自然災害は想定していた以上の被害が生じることもあります。油断しないで最善を尽くしましょう。",
];

/*
const daijobuImages = [
  "img/pages/SandaP11Daijobu/waremono.png",
  "img/pages/SandaP11Daijobu/kotei.png",
  "img/pages/SandaP11Daijobu/tounan1.png",
];
*/

function CheckList() {
  let tmp = localStorage.getItem("P11Sense");
  const [sense, setSense] = useState(
    tmp !== null
      ? JSON.parse(tmp)
      : {
          socializing: false,
          preparation: false,
          walking: false,
          camp: false,
          plasticBagCooking: false,
        }
  );
  useEffect(() => localStorage.setItem("P11Sense", JSON.stringify(sense)));
  const handleChangeSense = (event) =>
    setSense({ ...sense, [event.target.name]: event.target.checked });
  const { socializing, preparation, walking, camp, plasticBagCooking } = sense;

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.cardHeaderCheckList}
        title="普段から意識してみよう"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <FormControlLabel
          control={
            <Checkbox
              checked={socializing}
              onChange={handleChangeSense}
              name="socializing"
            />
          }
          label="友人・ご近所付き合い"
        />

        <FormGroup sx={styles.child}>
          ・顔見知りを増やすこと•挨拶する
          <br></br>
          ・子供を任せられる人
        </FormGroup>

        <FormControlLabel
          control={
            <Checkbox
              checked={preparation}
              onChange={handleChangeSense}
              name="preparation"
            />
          }
          label="家の中の備え"
        />
        <FormGroup sx={styles.child}>
          ・備蓄(詳しくはP13~14)
          <br></br>
          ・ものが落ちてこないように整理整頓
        </FormGroup>

        <FormControlLabel
          control={
            <Checkbox
              checked={walking}
              onChange={handleChangeSense}
              name="walking"
            />
          }
          label="防災さんぽ"
        />
        <FormGroup sx={styles.child}>(詳しくはP18)</FormGroup>

        <FormControlLabel
          control={
            <Checkbox checked={camp} onChange={handleChangeSense} name="camp" />
          }
          label="防災キャンプ"
          style={{ display: "block" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={plasticBagCooking}
              onChange={handleChangeSense}
              name="plasticBagCooking"
            />
          }
          label="ポリ袋クッキング"
        />
        <FormGroup sx={styles.child}>(詳しくはP14)</FormGroup>
      </CardContent>
    </Card>
  );
}

const SandaP11Daijobu = () => {
  // 文字列を改行
  // https://chaika.hatenablog.com/entry/2020/07/12/083000
  const texts = [];
  for (let i = 0; i < 3; i++) {
    const text = daijobuTexts[i].split(/(\n)/).map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item.match(/\n/) ? <br /> : item}
        </React.Fragment>
      );
    });
    texts.push(text);
  }

  return (
    <>
      <SimpleTitle
        title="「私は大丈夫！」って思ってない？"
        subtitle="それは、イヤなことを考えたくない心理です！"
      />
      {/* {daijobuTitles.map((_, i) => {
        return (
          <TitleTextCard title={daijobuTitles[i]} key={i}>
            {texts[i]}
          </TitleTextCard>
        );
      })} */}
      {daijobuTitles.map((_, i) => {
        return (
          <CardBase key={_}>
            <HeaderCardPart title={daijobuTitles[i]} color="tertiary.main" />
            <CardContent>
              {texts[i]}
            </CardContent>
          </CardBase>
        );
      })}

      <CheckList />
    </>
  );
};

export { SandaP11Daijobu };
