import React from "react";
import { CardContent, Box } from "@mui/material";
import {
  ImageTextCard,
  TitleTextImageCard,
  TitleCardPart,
  CardBase,
  ImageCardPart,
} from "../components/CardComponents";
import { SubTitle, SimpleTitle, BodyText } from "../components/TitleComponents";

const img_path = "/img/pages/P3Jishin";
const generateImagePath = (filename) => img_path + "/" + filename;

const P3Jishin = () => {
  return (
    <>
      <SimpleTitle
        title="グラッと地震がきたら！"
        subtitle={
          <>
            いのちを守る！
            <br />
            できるだけケガをせず生き残る！
          </>
        }
      />
      <ImageTextCard image={generateImagePath("family_under_table.png")}>
        1. 姿勢を低く
        <br />
        2. 頭を守る(机の下など)
        <br />
        3. ゆれがおさまったら避難する
      </ImageTextCard>

      <ImageTextCard image={generateImagePath("jishin_tsukue.png")}>
        テーブルや机などの下にもぐり身を守る。
        <br />
        足は出さないように注意！
      </ImageTextCard>
      <ImageTextCard image={generateImagePath("gomi_waremono.png")}>
        キッチンにいるママは、子供の名前を呼んではいけません。
        <br />
        キッチンはガラスが割れて危険がいっぱい！
      </ImageTextCard>
      <ImageTextCard image={generateImagePath("jiko_jishin_himoto.png")}>
        火の元よりもまずは自分の身を守ること。
        <br />
        震度５の揺れを感知すると自動的にガスはとまるようになっています。
      </ImageTextCard>

      <SubTitle>たいせつな家族の命を守る「安全対策」の例</SubTitle>
      <TitleTextImageCard
        title="家具の固定"
        image={generateImagePath("shijin_taishin1.png")}
      >
        L字金具などで固定する。
        <br />
        2段重ねの家具は、つなぎ目を金具で連結させる。
      </TitleTextImageCard>
      <TitleTextImageCard
        title="家具の配置を工夫"
        image={generateImagePath("kagu_haiti.png")}
      >
        (特に子どもや高齢者の部屋)
        <br />
        倒れても下敷きにならない家具の配置にする。
        <br />
        寝室にスリッパや靴を置いておく。
      </TitleTextImageCard>
      <CardBase>
        <CardContent>
          <TitleCardPart title="ガラスの飛散防止" />
          <BodyText>
            窓ガラスに飛散防止フィルムをはる。 または、強化ガラスに替える。
            <br />
            食器棚のガラスにも飛散防止フィルムをはる。
          </BodyText>
          <ImageCardPart image={generateImagePath("kagu_window.png")} />
          <Box sx={{ height: 30 }} />
          <BodyText>
            カーテンなどを閉めておくだけでもガラスの飛散を軽減できます。
          </BodyText>
          <ImageCardPart image={generateImagePath("curtain_pink.png")} />
        </CardContent>
      </CardBase>
      <TitleTextImageCard
        title="収納"
        image={generateImagePath("kagu_nimotsu_orosu.png")}
      >
        家具の上など、高いところに重いものを置かない。
        <br />
        重いものは家具の下部に、軽いものは上部に収納する。
      </TitleTextImageCard>
    </>
  );
};

export { P3Jishin };
