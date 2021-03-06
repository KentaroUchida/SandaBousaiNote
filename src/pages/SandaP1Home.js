import React from "react";
import {} from "../css/page.css";

const SandaP1Home = () => {
  return (
    <div className="frame1">
      <div className="frame2">
        <div className="home">
          <div className="homeHeader">
            <div className="overLine" />
            <div style={{marginTop:"10px",marginBottom:"10px"}}>
            <p style={{color:"#595656"}}>
              自然災害から命を守る！
            </p>
              <div style={{color:"#595656", fontSize:"30px", fontWeight:"bold"}}>
                さんだ<br/>親子防災ノート
              </div>
            </div>
            <div className="underLine" />
            <div className="homeImage">
              <img src="img/pages/SandaP1Home/jishin.png" alt="" width="33%" height="auto"/>
              <img src="img/pages/SandaP1Home/tatsumaki.png" alt="" width="33%" height="auto"/>
              <img src="img/pages/SandaP1Home/tsunami.png" alt="" width="33%" height="auto"/>
            </div>
          <img src="img/pages/SandaP1Home/logo.png" alt="" width="100%" height="auto"/>
          <div style={{color:"#595656"}}>
              災害に備えよう！
          </div>
          <p style={{color:"#595656"}}>
              さんだ女子防災部/三田市/神戸大学
          </p>
          <p style={{color:"#000000",fontSize:"13px"}}>
              (c) 2021.KobeSpiral Team3
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export {SandaP1Home}