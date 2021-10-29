import React from "react";
import {
  ImageTextCard,
  TitleTextImageCard,
} from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";

const taikenTitles = [
  "つながりの大事さを実感！",
  "充電器・バッテリーは必須！",
  "体質にあった特殊なものは要注意!!",
  "かならず確かな情報を！",
  "転倒防止策がいちばんの防災！",
  "不安を一人で抱えこまないで",
  "家族、命、ほんとうに大切なものを考えて！",
  "通信にも配慮を",
];

const taikenTexts = [
  "出勤途中に発災。子どもの無事が確認できるまで不安でしかたがなかった。子どもと離れ離れでも、子どもの無事を知らせてくれるママ友がいると安心。",
  "携帯の充電がなくなると、連絡を取ったり、情報を得たり、大切な事が何も出来なくなる。モバイルバッテリーは必需品。",
  "アレルギー対応物質はその日のうちに売り場からなくなりました。常備薬を含め、命に関わるものは必ず常備を！",
  "正しい情報を得るのが意外と困難。普段から行政のSNSや災害アプリなど、信頼できる情報元にアクセスする習慣をつけておかないと、肝心な時にネットから流れてくる不確かな情報に惑わされます。",
  "家具の転倒防止が役に立った。倒れない・壊れないのが一番の防災。台風の時もベランダに物を置いていた家庭の被害が大きかったようです。風で舞うと凶器になって、ガラスが割れた家もありました。",
  "親が不安を抱えていると、子どもも不安な気持ちになります。一人で抱え込まずに「怖かったね」と家族や友達と気持ちを共有するだけでもほっとできました。",
  "電車が停まっていても出勤を要請されたが、家は停電や断水で大混乱。家族のために仕事を休む勇気を！命より大切なものはありません。",
  "安否確認メールや電話は嬉しいけれど、受信するたびに電源がなくなり、大切な家族とのやり取りが出来なくなった。「知り合い」程度の不要不急の安否確認は、控えた方が良いかも。",
];

const taikenImages = [
  "img/pages/SandaP5MamaPapa/tsunagari.png",
  "img/pages/SandaP5MamaPapa/cable.png",
  "img/pages/SandaP5MamaPapa/kusuri.png",
  "img/pages/SandaP5MamaPapa/yahoo.png",
  "img/pages/SandaP5MamaPapa/kotei.png",
  "img/pages/SandaP5MamaPapa/fuan.png",
  "img/pages/SandaP5MamaPapa/kazoku.png",
  "img/pages/SandaP5MamaPapa/tsushin.png",
];

const photoImages = [
  "img/pages/SandaP5MamaPapa/higai1.jpg",
  "img/pages/SandaP5MamaPapa/higai2.jpg",
  "img/pages/SandaP5MamaPapa/higai3.jpg",
];

const photoTexts = [
  "いすに座っていたと思ったら・・・",
  "屋根がごっそり落ちてきました",
  "ベランダの壁を突き破り、隣家からタイヤが飛んできました",
];

const SandaP5MamaPapa = () => {
  return (
    <>
      <SimpleTitle
        title="ママ&パパの体験談"
        subtitle="地震や台風を体験したママ&パパの声をご紹介します。"
      />
      {taikenTitles.map((_, i) => (
        <TitleTextImageCard
          title={taikenTitles[i]}
          image={taikenImages[i]}
          key={i}
        >
          {taikenTexts[i]}
        </TitleTextImageCard>
      ))}
      {photoImages.map((_, i) => (
        <ImageTextCard image={photoImages[i]} key={i}>
          {photoTexts[i]}
        </ImageTextCard>
      ))}
    </>
  );
};

export { SandaP5MamaPapa };
