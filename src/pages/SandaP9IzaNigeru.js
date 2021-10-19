import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  CardBase,
  TitleCardPart,
  ImageCardPart,
} from "../components/CardComponents";
import { BodyText, SimpleTitle } from "../components/TitleComponents";

const imageBasePath = "img/pages/SandaP9IzaNigeru/";

const title = "いざ逃げる！";
const subtitle = "避難とは、安全な場所に身を置くこと！";
const mainContentTitle = "どんな所に避難しよう？";
const mainContentText = "様々な場所が避難先になり得ます。三角ボタンを押して詳細を見てみましょう！"

const shelters = [
  { title: "広域避難場所", text: "火災などの際に、一時的に逃げる場所。講演などが指定されている。", image: "tatemono_kouen.png"},
  { title: "市指定避難所", text: "自宅が被災した時に生活をする場。小・中学校や公民館など。", image: "hinanjo_seikatsu_family_smile.png"},
  { title: "在宅避難", text: "自宅が安全なら在宅で。しっかり備蓄しておきましょう。", image: "saigai_mochidashi_bag_kakunin_family.png"},
  { title: "親戚宅・友人宅", text: "「もしもの時はよろしくね！」と予め約束しておきましょう。", image: "shinseki.png"},
  { title: "ホテル・車中泊", text: "ホテルの立地や車の駐車場所の危険チェックも忘れずに！", image: "building_hotel_small.png"},
  { title: "福祉避難所", text: "障がいや介護など、特別な支援が必要な人のための避難所。", subText: "※一般の避難所が開設された後、必要と判断された場合に開設されます。", image: "tatemono_kaigo_shisetsu.png"},
];
const notices = [{
  title: "知ってた？",
  image1: "sign_A.png",
  texts1: ["避難場所も災害によっては危険な場所になります！"],
  image2: "tsunami_nigeru.png",
  texts2: ["洪水・津波のときは、高い所や海・川の遠くへ"],
}, {
  title: "CHECK!!",
  image1: "sign_B.png",
  texts1: [
    "家の近くにどんな場所があるか、普段から意識しておきましょう。",
    "海の近くに出かけた時は、津波避難場所・津波避難ビルをチェックしましょう。"
  ],
  image2: "shizensaigai_dosyakuzure.png",
  texts2: ["土砂のときは、山・崖から離れたところへ"],
}];

//const fromChuoBousaiKaigi = {
//  title: "中央防災会議より国民の皆さんへ",
//  texts: [
//    "行政は万能ではありません。皆さんの命を行政に委ねないでください。",
//    "避難するかしないか、最後は「あなた」の判断です。皆さんの命は皆さん自身で守ってください。",
//  ],
//};

export const TitleTextSubTextImageCard = ({
  title,
  image,
  color = "tertiary.main",
  children,
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <BodyText>{children.main}</BodyText>
        <BodyText variant="body2">{children.sub}</BodyText>
      </CardContent>
      <ImageCardPart image={image} />
    </CardBase>
  );
};

export const TwoContentsCard = ({
  title,
  image1,
  image2,
  texts1,
  texts2,
  color = "tertiary.main",
}) => {
  return (
    <CardBase>
      <CardContent>
        <TitleCardPart title={title} color={color} />
        <ImageCardPart image={image1} />
        {texts1.map((text, i) => {
          return <BodyText key={i}>{text}</BodyText>
        })}
        <Divider/>
        <ImageCardPart image={image2} />
        {texts2.map((text, i) => {
          return <BodyText key={i}>{text}</BodyText>
        })}
      </CardContent>
    </CardBase>
  );
};

function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<>
    {shelters.map((obj, i) => (
      <Accordion key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ backgroundColor: "tertiary.light" }}
        >
          <Typography sx={{ flexShrink: 0 }}>{obj.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{obj.text}</Typography>
          <Typography variant="body2">{obj.subText}</Typography>
          <ImageCardPart image={imageBasePath + obj.image } />
        </AccordionDetails>
      </Accordion>

    ))}
  </>);
}

export const SandaP9IzaNigeru = () => {
  return (<>
    <SimpleTitle title={title} subtitle={subtitle}/>

    <CardBase>
      <CardContent>
        <TitleCardPart title={mainContentTitle}/>
        <BodyText>{mainContentText}</BodyText>
        <ControlledAccordions/>
      </CardContent>
    </CardBase>

    {notices.map((obj, i) => (
      <TwoContentsCard
        title={obj.title}
        image1={imageBasePath + obj.image1}
        image2={imageBasePath + obj.image2}
        texts1={obj.texts1}
        texts2={obj.texts2}
        color="primary.light"
        key={i}
      />
    ))}
  </>);
};
