import React from "react";
import { Link, CardContent } from "@mui/material";
import { Title, SubTitle, BodyText } from "../components/TitleComponents";
import {
  CardBase,
  TitleCardPart,
  TextCard,
  TitleTextImageCard,
  TitleImageTextCard,
  TitleTextCard,
  ImageTextCard,
} from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";
import { typography } from "@mui/system";


const img_path = "/img/pages/SandaP19BousaiSanpo";
const generateImagePath = (filename) => img_path + "/" + filename;

const SandaP19BousaiSanpo = () => {
  return (
    <>
      <SimpleTitle title="防災さんぽ" subtitle="普段からやってみよう！"/>
      <CardBase>
        <CardContent>
          <BodyText　>
            お家の周りの危険や避難場所を
            <br />
            市の防災マップでまずチェック！
            <br />
            チェックできたら家族で防災さんぽ!!
          </BodyText>
        </CardContent>
      </CardBase>
      <CardBase>

        <CardContent>
          <TitleCardPart title="防災さんぽのやり方" />
          <TitleImageTextCard title="用意するもの" image={generateImagePath("needed_item.png")} color = "orange" >
            <br/>
            ・避難所が入った自宅周辺の地図
            <br/>
            ・非常持ち出し袋
          </TitleImageTextCard>

          <TitleImageTextCard title="Check!!" image={generateImagePath("map_open.png")} color = "lightgreen">
            <br/>
            ・避難場所への経路を歩く
            <br/>
            ・かかる時間もしらべてみる
            <br/>
            ・昼と夜では全然違うので
            <br/>
            　それぞれ歩いてみよう！
          </TitleImageTextCard>

          <ImageTextCard image={generateImagePath("singboard.png")}>
              街灯・看板など
              <br/>
              落ちてきそうなもの
          </ImageTextCard>

          <ImageTextCard image={generateImagePath("crushed_glasses.png")}>
              住宅の瓦や、ビルの窓ガラスなど
              <br/>
              飛んできそうなもの
          </ImageTextCard>

          <ImageTextCard image={generateImagePath("stair_famiry.png")}>
              避難経路の階段・溝など
              <br/>
              自転車・ベビーカーでは通れない
              <br/>
              小さな子供は抱っこ,もしくは手をつないで歩く
          </ImageTextCard>

          <ImageTextCard image={generateImagePath("fall_over.png")}>
              ブロック塀・自転車・花壇・自動販売機
              <br/>
              地震で倒れそうなもの
          </ImageTextCard>

          <ImageTextCard image={generateImagePath("sings.png")}>
              通学路,習い事に使う道もチェック
          </ImageTextCard>

          <TitleImageTextCard title="要確認!!"  image={generateImagePath("telphone_searchbar.png")} color = "lightgreen"> 
          災害伝言ダイヤルの使い方は<Link href="/form">こちら</Link>
          
          </TitleImageTextCard>
        </CardContent>
      </CardBase>
    </>
  );
};

export { SandaP19BousaiSanpo };
