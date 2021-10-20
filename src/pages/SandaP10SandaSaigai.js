import React from "react";
import { Title, SubTitle, BodyText } from "../components/TitleComponents";
import {
  TextCard,
  TitleTextCard,
  TitleImageTextCard,
} from "../components/CardComponents";

const img_path = "/img/pages/SandaP10SandaSaigai";
const generateImagePath = (filename) => img_path + "/" + filename;

const SandaP10SandaBousai = () => {
  return (
    <>
      <Title>三田で考えられる災害</Title>
      <SubTitle>避難所に行っても全員の食べ物がない!</SubTitle>
      <TextCard>
        三田市の人口は約11万人(令和3年4月現在)
        <br />
        避難所受け入れは、28,798人
        <br />
        ※上記は、通常時の災害を想定した収容人数です。
        三田市では令和2年7月に三田市避難所運営マニュアル
        ～新型コロナウイルス感染症対応編～として改定
      </TextCard>
      <TitleTextCard title="市防災倉庫(狭間が丘)の備蓄計画">
        ・主食のアルファ化米5,370食(うちお粥2,980食)
        <br />
        ・乾パン9,870食、クラッカー9,870食
        <br />
        ※市が業務を遂行するために必要な備蓄も含まれます。
      </TitleTextCard>
      <TextCard>
        三田市の避難者想定数・・・4,700人(市内伏在断層地震で震度6強の揺れを想定し、4,694人)
        <br />
        アレルギー専用の物、医療・介護・離乳食等の備蓄食料の数は少なく、
        避難される各個人で日頃から備蓄してもらう事が大切です。
        <br />
        目安として、一人、3～7日分の備蓄を行いましょう!
      </TextCard>

      <SubTitle>三田で想定される3つの災害</SubTitle>
      <TitleImageTextCard
        title="地震"
        image={generateImagePath("sindo_bunpu.png")}
      >
        南海トラフ地震、有馬－高槻断層帯地震
      </TitleImageTextCard>
      <TitleImageTextCard title="水害" image={generateImagePath("suigai.png")}>
        三田市は、武庫川中流域に位置するため、上流部での集中豪雨による急激な増水(出水)氾濫に注意する必要がある。
        <br />
        また、市内には多数のため池が分布しているため、大雨時には特に警戒を要する。
      </TitleImageTextCard>
      <TitleImageTextCard
        title="土砂災害"
        image={generateImagePath("dosya.png")}
      >
        急傾斜地でのがけ崩れ、地すべり。三田市内でも市域の中部、北部において危険箇所・区域の分布が多い。
      </TitleImageTextCard>
    </>
  );
};
