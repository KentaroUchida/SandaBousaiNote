import React from "react";
import { ImageCard } from "../components/CardComponents";
import {} from "../css/page.css";



const SandaP2Omoi = () => {
  return (
    <div className="omoi">
      <div className="letter2"/>
      <div className="letter3"/>
      <div className="letter">
        <div className="omoiSubTitle">
          さんだ女子防災部
        </div>
        <div className="omoiTitle">
          私たちの想い
        </div>
        <div className="omoiNormal">
          <p>3・11の東日本大震災。<br/>大きな災害を目の当たりにして、<br/>「自分が生活している場所で大きな災害が起こった時に、子どもの命を守ることができるのだろうか」と<br/>とても不安になりました。</p>
          <p>何からどのように始めていいかわからない<br/>大切なのはわかっているけど<br/>普段の生活に追われて後回しになってしまう。</p>
          <p>そんな私たちでも、知ることで<br/>備えることができると知りました。<br/>知って、学んで、備えることで守れる命があります。</p>
        </div>
        <div className="omoiImpact">
          <p>「その時わが子をまもれますか?」</p>
        </div>
        <div className="omoiNormal">
          <p>そんな想いでこの<br/>「さんだ親子防災ノート」<br/>を作りました。<br/>一緒に親子で備えていきましょう。</p>
          <p>特定非営利活動法人ミラクルウィッシュ<br/>さんだ女子防災部<br/>2021年10月</p>
        </div>
        <div className="omoiImage">
          <ImageCard image="img/pages/P2Omoi/img1.jpg"/>
          <ImageCard image="img/pages/P2Omoi/img2.jpg"/>
          <ImageCard image="img/pages/P2Omoi/img3.jpg"/>
        </div>
      </div>
    </div>
  );
};

export {SandaP2Omoi}