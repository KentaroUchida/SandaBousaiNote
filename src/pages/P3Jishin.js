import React from "react";
import Typography from "@mui/material/Typography";
import {
  ImageCard,
  ImageTextCard,
  TitleTextImageCard,
} from "../components/CardComponents";
import { Title, SubTitle, BodyText } from "../components/TitleComponents";

export const P3Jishin = () => {
  return (
    <>
      <Title>グラッと地震がきたら！</Title>
      <SubTitle>
        いのちを守る！
        <br />
        できるだけケガをせず生き残る！
      </SubTitle>
      <ImageCard image="/img/pages/Jishin/family_under_table.png" />
      <BodyText>
        1.姿勢を低く
        <br />
        2.判断する
        <br />
        3.頭を守る
        <br />
        4.避難する
      </BodyText>

      <ImageTextCard image="/img/pages/Jishin/jishin_tsukue.png">
        テーブルや机などの下にもぐり身を守る。
        <br />
        足は出さないように注意！
      </ImageTextCard>
      <ImageTextCard image="/img/pages/Jishin/gomi_waremono.png">
        キッチンにいる人は、子供の名前を呼んではいけません。
        <br />
        キッチンにはガラスや割れ物がいっぱいです。
      </ImageTextCard>
      <ImageTextCard image="/img/pages/Jishin/jiko_jishin_himoto.png">
        火の元よりもまずは自分の身を守ること。
        <br />
        大阪ガスでは、震度５以上の揺れを感知すると自動的にガスが止まるようになっています。
      </ImageTextCard>

      <Typography variant="h4" gutterbottom="true">
        たいせつな家族の命を守る「安全対策」の例
      </Typography>
      <TitleTextImageCard
        title="家具の固定"
        image="/img/pages/Jishin/shijin_taishin1.png"
      >
        L字金具などで固定する。
        <br />
        2段重ねの家具は、つなぎ目を金具で連結させる。
      </TitleTextImageCard>
      <TitleTextImageCard
        title="家具の配置を工夫"
        image="/img/pages/Jishin/kagu_haiti.png"
      >
        (特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。
        <br />
        寝室にスリッパや靴を置いておく。
      </TitleTextImageCard>
      <TitleTextImageCard
        title="ガラスの飛散防止"
        image="/img/pages/Jishin/curtain_pink.png"
      >
        窓ガラスに飛散防止フィルムをはる。
        <br />
        または、強化ガラスに替える。
        <br />
        食器棚のガラスにも飛散防止フィルムをはる。
      </TitleTextImageCard>
      <TitleTextImageCard
        title="収納"
        image="/img/pages/Jishin/kagu_nimotsu_orosu.png"
      >
        家具の上など、高いところに重いものを置かない。
        <br />
        重いものは家具の下部に、軽いものは上部に収納する。
      </TitleTextImageCard>
    </>
  );
};
