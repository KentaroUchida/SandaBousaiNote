import React from "react";
import Typography from "@mui/material/Typography";
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";
import {
  ImageCard,
  ImageTextCard,
  TitleTextImageCard,
} from "../components/CardContents";


export const P3Jishin = () => {
  return (
    <>
      <ResponsiveFontProvider>
        <Typography variant="h1" gutterbottom="true">
          グラッと地震がきたら！
        </Typography>
        <Typography variant="h3" gutterbottom="true">
          いのちを守る！できるだけケガをせず生き残る！
        </Typography>
      </ResponsiveFontProvider>
      <ImageCard image="/img/pages/Jishin/family_under_table.png" />
      <Typography variant="h6">１姿勢を低く</Typography>
      <Typography variant="h6">２判断する</Typography>
      <Typography variant="h6">３頭を守る</Typography>
      <Typography variant="h6">４避難する</Typography>

      <ImageTextCard
        image="/img/pages/Jishin/jishin_tsukue.png"
        text="テーブルや机などの下にもぐり身を守る。足は出さないように注意！"
      />
      <ImageTextCard
        image="/img/pages/Jishin/gomi_waremono.png"
        text="キッチンにいる人は、子供の名前を呼んではいけません。キッチンにはガラスや割れ物がいっぱいです。"
      />
      <ImageTextCard
        image="/img/pages/Jishin/jiko_jishin_himoto.png"
        text="火の元よりもまずは自分の身を守ること。大阪ガスでは、震度５以上の揺れを感知すると自動的にガスが止まるようになっています。"
      />

      <Typography variant="h4" gutterbottom="true">
        たいせつな家族の命を守る「安全対策」の例
      </Typography>
      <TitleTextImageCard
        title="家具の固定"
        text="L字金具などで固定する。2段重ねの家具は、つなぎ目を金具で連結させる。"
        image="/img/pages/Jishin/shijin_taishin1.png"
      />
      <TitleTextImageCard
        title="家具の配置を工夫"
        text="(特に子どもや高齢者の部屋)倒れても下敷きにならない家具の配置にする。寝室にスリッパや靴を置いておく。"
        image="/img/pages/Jishin/kagu_haiti.png"
      />
      <TitleTextImageCard
        title="ガラスの飛散防止"
        text="窓ガラスに飛散防止フィルムをはる。または、強化ガラスに替える。食器棚のガラスにも飛散防止フィルムをはる。"
        image="/img/pages/Jishin/curtain_pink.png"
      />
      <TitleTextImageCard
        title="収納"
        text="家具の上など、高いところに重いものを置かない。重いものは家具の下部に、軽いものは上部に収納する。"
        image="/img/pages/Jishin/kagu_nimotsu_orosu.png"
      />
    </>
  );
};
