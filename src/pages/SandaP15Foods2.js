import React from "react";

import { CardContent } from "@mui/material";
import {
  CardBase,
  HeaderCardPart,
  ImageCardPart,
  ImageTextCard,
} from "../components/CardComponents";
import { SimpleTitle2, BodyText } from "../components/TitleComponents";

const img_path = "/img/pages/SandaP14P15Foods";
const generateImagePath = (filename) => img_path + "/" + filename + ".png";

const SandaP15Foods2 = () => {
  return (
    <>
      <SimpleTitle2
        title="食べ物がない?! その2"
        subtitle="避難所に行っても 全員分の"
      />
      <CardBase>
        <HeaderCardPart title="7日間の食事の仕方" />
      </CardBase>

      <CardBase>
        <HeaderCardPart title="1～3日分" />
        <CardContent>
          <BodyText>冷蔵庫・冷凍庫の食材を活用。</BodyText>

          <ImageTextCard image={generateImagePath("food_katsuyou")}>
            食パンや野菜などは、自然解凍により食べることも可能。
          </ImageTextCard>

          <ImageTextCard image={generateImagePath("cooler")}>
            停電時、クーラーボックスや保冷材を活用して食材の保存を。
            <br />
            <br />
            氷は溶かして飲料水として活用も可能。
          </ImageTextCard>
        </CardContent>
      </CardBase>

      <CardBase>
        <HeaderCardPart title="4～7日分" />
        <CardContent>
          <BodyText>ローリングストック法で備蓄した非常食を活用。</BodyText>

          <ImageTextCard image={generateImagePath("bichiku")}>
            1. 備蓄する食料・水を少し多めに用意する。
          </ImageTextCard>
          <ImageTextCard image={generateImagePath("old_food")}>
            2. 定期的に古いものから食べる。
          </ImageTextCard>
          <ImageTextCard image={generateImagePath("kaitashi")}>
            3. 食べた分を買い足し、補充する。
          </ImageTextCard>

          <BodyText>
            ・野菜や果物の缶詰で栄養補給。
            <br />
            <br />
            ・乾麺は湯で時間の短いものを。
            <br />
            <br />
            ・食欲がない時はスープ類を活用！
          </BodyText>
        </CardContent>
      </CardBase>

      <ImageTextCard image={generateImagePath("baby_eat")}>
        長期保存できる非常食より、いつも食べているものが◎。
        <br />
        <br />
        小さな子は非常時でも食べなれないものは食べません!!
      </ImageTextCard>

      <CardBase>
        <HeaderCardPart title="ローリングストックで美味しく食べて楽しく備蓄！" />
        <CardContent>
          <ImageCardPart image={generateImagePath("rolling_stock")} />
          <BodyText>
            定期的(1か月に1,2度)に食べて
            <br />
            食べた分を買い足し備蓄していく方法です。
            <br />
            <br />
            ・普段食べなれているものを多めに。
            <br />
            <br />
            ・賞味期限が数か月でもよい。
            <br />
            <br />
            ・液体ミルク・離乳食・アレルギー対応。
            <br />
            <br />
            など家庭にあったものを備えましょう！
          </BodyText>
        </CardContent>
      </CardBase>
    </>
  );
};

export {SandaP15Foods2}