import React from "react";
import { Link, CardContent, Box } from "@mui/material";
import { BodyText, SimpleTitle } from "../components/TitleComponents";
import {
  CardBase,
  HeaderCardPart,
  ImageTextCard,
  TitleTextImageCard,
} from "../components/CardComponents";

const img_path = "/img/pages/SandaP10SandaSaigai";
const generateImagePath = (filename) => img_path + "/" + filename;

const SandaP10SandaBousai = () => {
  return (
    <>
      <SimpleTitle
        title="三田で考えられる災害"
        subtitle="避難所に行っても全員の食べ物がない！"
      />
      <CardBase>
        <CardContent>
          <BodyText>
            ・三田市の人口は、約11万人 (令和3年4月現在)
            <br />
            ・三田市の避難者想定数は、4,700人
            (市内伏在断層地震で震度6強の揺れを想定し、4,694人)
            <br />
            ・避難所受け入れは、28,798人
          </BodyText>
          <BodyText variant="caption">
            ※上記は、通常時の災害を想定した収容人数です。
            三田市では令和2年7月に三田市避難所運営マニュアル
            ～新型コロナウイルス感染症対応編～として改定
          </BodyText>
        </CardContent>
      </CardBase>
      <CardBase>
        <CardContent>
          <BodyText>
            市防災倉庫(狭間が丘)の備蓄計画
            <br />
            <br />
            ・主食のアルファ化米5,370食(うちお粥2,980食)
            <br />
            ・乾パン9,870食
            <br />
            ・クラッカー9,870食
          </BodyText>
          <BodyText variant="caption">
            ※市が業務を遂行するために必要な備蓄も含まれます。
          </BodyText>
        </CardContent>
      </CardBase>
      <ImageTextCard image={generateImagePath("food_bichiku.png")}>
        アレルギー専用の物、医療・介護・離乳食等の備蓄食料の数は少なく、
        避難される各個人で日頃から備蓄してもらう事が大切です。
        <br />
        <br />
        目安として、一人、3～7日分の備蓄を行いましょう！
      </ImageTextCard>

      <CardBase>
        <HeaderCardPart title="三田で想定される3つの災害" />
        <Box sx={{p: 2}}>
        <TitleTextImageCard
          title="地震"
          image={generateImagePath("sindo_bunpu.png")}
        >
          南海トラフ地震、有馬－高槻断層帯地震
        </TitleTextImageCard>
        <TitleTextImageCard
          title="水害"
          image={generateImagePath("suigai.png")}
        >
          三田市は、武庫川中流域に位置するため、上流部での集中豪雨による急激な増水(出水)氾濫に注意する必要がある。
          <br />
          <br />
          また、市内には多数のため池が分布しているため、大雨時には特に警戒を要する。
        </TitleTextImageCard>
        <TitleTextImageCard
          title="土砂災害"
          image={generateImagePath("dosya.png")}
        >
          急傾斜地でのがけ崩れ、地すべり。三田市内でも市域の中部、北部において危険箇所・区域の分布が多い。
        </TitleTextImageCard>
        </Box>
      </CardBase>

      <CardBase>
        <HeaderCardPart title="さんだ防災・防犯メールへの登録を！" />
        <CardContent>
          <BodyText>
            災害時には正確な情報の取得が大切です。
            <br />
            <br />
            三田市では、テレビ・ラジオ局への情報提供と合わせて、
            ホームページやさんだ防災・防犯メールにて最新の避難情報を提供しています。
            <br />
            <br />
            1.「緊急情報(避難勧告などの防災情報等)」
            <br />
            2.「お知らせ情報(不審者情報など)」
            <br />
            3.「気象情報」
            <br />
            <br />
            の3種類の情報をメールにて配信しています。
            <br />
            <br />
            ↓登録はこちらから
          </BodyText>
          <Link href="http://bosai.net/sanda/">http://bosai.net/sanda/</Link>
        </CardContent>
      </CardBase>
    </>
  );
};

export { SandaP10SandaBousai };
