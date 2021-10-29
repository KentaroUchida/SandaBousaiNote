import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  CardContent,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { SimpleTitle, BodyText } from "../components/TitleComponents";
import {
  CardBase,
  ImageCardPart,
  HeaderCardPart,
  TitleTextImageCard,
} from "../components/CardComponents";

const charts = [
  {
    title: "①自分の状況確認",
    image: "saigaiji_kyuujo_fue_man.png",
    items: [
      "ケガをしていないかチェック",
      "何が起こったのか正しい情報をチェック",
      "津波や土砂災害の危険性があるときは、迷わず、すぐに避難行動をとりましょう",
      "負傷し、救急要請が必要なときは、笛やモノをたたき、音を出して救助要請をします",
    ],
  },
  {
    title: "②周囲の状況を確認",
    image: "kaji_shouka_bottle_man.png",
    items: [
      "足を怪我しないように室内でも靴かスリッパをはく",
      "被害がないときは、不在家族への安否確認をします(家族との連絡方法は決まっていますか？)",
      "火災が発生したときは、応急手当、閉じ込めからの救出、初期消火。周囲に呼びかけながら避難します",
    ],
  },
  {
    title: "③家族の安否確認",
    image: "bousai_gyousei_musen.png",
    items: [
      "誰もケガをしていないかを確認しよう",
      "近隣の被害確認(建物の被害状況・隣人の安否確認や救助・状況によっては支援を開始)",
      "情報収集(地域や自治体の状況を確認)",
    ],
  },
  {
    title: "④室内の被害確認",
    image: "jiko_jishin_kagu_tentou.png",
    items: ["ライフライン、ドアの開閉の確認、家具の被害、通信状況を確認しよう"],
  },
  {
    title: "⑤避難の判断",
    image: "breaker_switch_off.png",
    items: [
      "自宅にいるのか、避難所や友人・知人宅へ避難するのか各自で判断します",
      "ブレーカーをオフ!!自宅を離れる際は、ブレーカーをオフに！通電火災に注意！",
    ],
  },
];

const img_path = "/img/pages/P4Yurega";
const generateImagePath = (filename) => img_path + "/" + filename;

const ActionChartCard = ({ content }) => (
  <CardBase>
    <HeaderCardPart title={content.title} color="tertiary.main" />
    <ImageCardPart image={generateImagePath(content.image)} />
    <CardContent>
      {content.items.map((text, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <BodyText>{text}</BodyText>
          </ListItem>
        );
      })}
    </CardContent>
  </CardBase>
);

const Arrow = () => (
  <Box sx={{ justifyContent: "center", display: "flex" }}>
    <ArrowDownwardIcon sx={{ fontSize: 70, color: grey[600] }} />
  </Box>
);

function SandaP4Yurega() {
  return (
    <>
      <SimpleTitle title="ゆれがおさまったら" subtitle="その次の行動チャート" />
      {charts.map((content, i) => (
        <>
          <ActionChartCard content={content} key={`card-${i}`} />
          {i < charts.length - 1 ? <Arrow key={`arrow-${i}`} /> : ""}
        </>
      ))}
      <Box sx={{ height: 30 }} />
      <TitleTextImageCard
        title="会社から帰って来れないかも!?"
        image={generateImagePath("tatemono_buildings.png")}
        color="warning.main"
      >
        一斉帰宅による混乱を防ぐため、兵庫県は事業主に「従業員の一斉帰宅の抑制」をお願いしています。
        対策として「従業員の施設内待機」「最低3日分の備蓄」など。
        会社からすぐに帰って来れないかもしれません。
      </TitleTextImageCard>
    </>
  );
}

export { SandaP4Yurega };
