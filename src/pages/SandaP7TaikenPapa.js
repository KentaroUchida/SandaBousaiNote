import { CardContent } from "@mui/material";
import React from "react";
import {
  ImageCard,
  HeaderCardPart,
  CardBase,
  ImageCardPart,
} from "../components/CardComponents";
import { BodyText, SimpleTitle } from "../components/TitleComponents";

const taikenTitles = [
  "台所はキケンがいっぱい！",
  "家具の固定はマスト！",
  "避難所でも盗難が！",
  "壊れた家屋にも盗難が！",
  "ため水が役立つ！",
  "車のガソリンは満タンに！",
  "エコノミー症候群にも注意！",
  "のどが乾かない食料を！",
];

const taikenTexts = [
  "食器戸棚の扉は地震でロックするものがよいです。\nあの激しい揺れでは食器は凶器と化し襲ってきます。\n実際台所はガラスの山でした。",
  "つっぱり棒は有効であるかどうかは地震の規模や揺れの方向によります。\n3.11では揺れがきつ過ぎて全く機能しておりませんでした。\n6強ではもたないのかもしれません。\n可能であれば、壁にネジで固定式が有効かと思います。",
  "残念ながら盗難に遭うケースもありました。\n皆貴重品をもって避難してますので、大金を持っている方などは注意が必要です。",
  "地震時に戸を開ける行為は避難経路確保には有効でした。\nしかし、のちのち扉が歪んで閉まらず盗難にあうケースも住んでいたマンションでは発生していました。",
  "風呂の水は、ためたままにする。\nマンション等の集合住宅で屋上の給水タンクからの供給の場合、停電で供給されず、トイレが流せない事象になりました。\n風呂水を利用し流すことができました。",
  "3.11の後、ガソリンが買えず、6時間並んで20リッターしか買えない事になりました。\n3月とは言え東北ですので寒空の下、暖房にも活かせず、移動も出来ないことになりました。\nガソリンの目安を決めて常に満タンにしましょう。我が家は半分減ったら満タンにしてます。\n車のエンジンがかかれば携帯電話等の充電も可能です。",
  "車の中で避難の際はエコノミー症候群にも注意。\n長時間膝を曲げてますので、適度に歩くなどしないといけません。",
  "備蓄食料も、乾パンなどもよいですが、なるべく喉が乾かないようなものがいいでしょう。\n水も貴重品となりますので、その辺も考慮したものを考えてみましょう。\nしょっぱい物なども喉が渇きます。\n避難所に届いた食料などでもせんべいなどもあり、ありがたいのですが、渡せない事もありました。",
];

const taikenImages = [
  "img/pages/SandaP7TaikenPapa/waremono.png",
  "img/pages/SandaP7TaikenPapa/kotei.png",
  "img/pages/SandaP7TaikenPapa/tounan1.png",
  "img/pages/SandaP7TaikenPapa/tounan2.png",
  "img/pages/SandaP7TaikenPapa/furo.png",
  "img/pages/SandaP7TaikenPapa/gasorin.png",
  "img/pages/SandaP7TaikenPapa/economy.png",
  "img/pages/SandaP7TaikenPapa/food.png",
];

const imageSrc = [
  "img/pages/SandaP7TaikenPapa/higai1.jpg",
  "img/pages/SandaP7TaikenPapa/higai2.jpg",
  "img/pages/SandaP7TaikenPapa/higai3.jpg",
  "img/pages/SandaP7TaikenPapa/higai4.jpg",
  "img/pages/SandaP7TaikenPapa/higai5.jpg",
];

const SandaP7TaikenPapa = () => {
  // 文字列を改行
  // https://chaika.hatenablog.com/entry/2020/07/12/083000
  const texts = [];
  for (let i = 0; i < 8; i++) {
    const text = taikenTexts[i].split(/(\n)/).map((item, index) => {
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
        title="東日本大震災のパパの体験談"
        subtitle="実際の3.11震災の当時、仙台に住んでいたパパの体験をご紹介します。"
      />

      {taikenTitles.map((_, i) => {
        return (
          <CardBase key={i}>
            <HeaderCardPart title={taikenTitles[i]} color="tertiary.main" />
            <CardContent>
              <BodyText>{texts[i]}</BodyText>
              <ImageCardPart image={taikenImages[i]} />
            </CardContent>
          </CardBase>
        );
      })}

      <CardBase>
        <HeaderCardPart title="震災時の写真です" color="tertiary.main" />
        <CardContent>
          {imageSrc.map((_, i) => {
            return <ImageCard image={imageSrc[i]} key={i} />;
          })}
        </CardContent>
      </CardBase>
    </>
  );
};

export { SandaP7TaikenPapa };
