import React from "react";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { CardBase } from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";

const imageBasePath = "img/pages/SandaP8Mada/";

const CenterBox = styled("Box")({
  justifyContent: "center",
  display: "flex",
});

const styles = {
  image: {
    mb: 2,
    width: { sm: "auto" },
    height: { sm: "300px" },
  },
};

const EvacuationOrder = () => {
  const levels = [
    {
      title: "1 早期注意情報",
      subheader: (
        <>
          <div>(気象庁)</div>
          <div>情報を集めよう</div>
        </>
      ),
      headerSx: { bgcolor: "#fefad7" },
      caption: "今後気象情報悪化のおそれ",
      contentColor: "#fffef7",
    },
    {
      title: "2 大雨/洪水/高潮注意報",
      subheader: (
        <>
          <div>(気象庁)</div>
          <div>避難するときの準備をしよう</div>
        </>
      ),
      headerSx: { bgcolor: "#f8d92d" },
      caption: "気象状況悪化",
      contentColor: "#fdf6d5",
    },
    {
      title: "3 高齢者等避難",
      subheader: "避難を開始しよう",
      stProps: { align: "center", color: "white" },
      headerSx: { color: "white", bgcolor: "#ef5834" },
      caption: "災害のおそれあり",
      text: (
        <>
          <Typography sx={{ mt: 2 }}>避難に時間のかかる高齢者や</Typography>
          <Typography>障害のある人は、</Typography>
          <Typography>警戒レベル3高齢者避難で</Typography>
          <Typography sx={{ mb: 2 }}>危険な場所から避難しましょう。</Typography>
        </>
      ),
      subtext: (
        <Typography variant="caption">
          ※
          警戒レベル3は、高齢者等以外の人も必要に応じ普段の行動を見合わせ始めたり、避難の準備をしたり、危険を感じたら自主的に避難するタイミングです。
        </Typography>
      ),
      contentColor: "#fadcd0",
    },
    {
      title: "4 避難指示",
      subheader: "この時、避難完了！",
      stProps: { align: "center", color: "white" },
      headerSx: { color: "white", bgcolor: "#802a97" },
      caption: "災害のおそれ高い",
      text: (
        <>
          <Typography sx={{ mt: 2 }}>避難勧告は廃止されます。</Typography>
          <Typography>これからは警戒レベル4避難指示で</Typography>
          <Typography sx={{ mb: 2 }}>
            危険な場所から全員避難しましょう。
          </Typography>
        </>
      ),
      subtext: (
        <Typography variant="caption">
          ※
          避難指示は、これまでの避難勧告のタイミングで発令されることになります。
        </Typography>
      ),
      contentColor: "#e0d1e8",
    },
    {
      title: "5 緊急安全確保",
      subheader: (
        <>
          <div>屋内で身を守ろう</div>
          <div>(こうなるともう遅い…)</div>
        </>
      ),
      stProps: { align: "center", color: "white" },
      headerSx: { color: "white", bgcolor: "#2c2e35" },
      caption: "災害発生または切迫",
      text: (
        <>
          <Typography sx={{ mt: 2 }}>警戒レベル5は、すでに安全な</Typography>
          <Typography>避難ができず命が危険な状態です。</Typography>
          <Typography>警戒レベル5緊急安全確保の</Typography>
          <Typography sx={{ mb: 2 }}>発令を待ってはいけません！</Typography>
        </>
      ),
      subtext: (
        <Typography variant="caption">
          ※
          市町村が災害の状況を確実に把握できるものではない等の理由から、警戒レベル5は必ず発令できる情報ではありません。
        </Typography>
      ),
      contentColor: "#e2e3e4",
    },
  ];

  return (
    <CardBase>
      <CardHeader
        title="避難指示で必ず避難!!"
        titleTypographyProps={{ align: "center" }}
        subheader="警戒レベル4までに避難"
        subheaderTypographyProps={{ align: "center", color: "white" }}
        sx={{ color: "white", bgcolor: "#802a97" }}
      />
      <CardContent>
        {levels.map((l, i) => {
          return (
            <CardBase key={i}>
              <CardHeader
                title={l.title}
                titleTypographyProps={{ align: "center" }}
                subheader={l.subheader}
                subheaderTypographyProps={
                  l.stProps ? l.stProps : { align: "center" }
                }
                sx={l.headerSx}
              />
              <CardContent
                sx={{
                  bgcolor: l.contentColor,
                }}
              >
                <CenterBox>
                  <CardMedia
                    component="img"
                    image={imageBasePath + i + ".png"}
                    sx={styles.image}
                  />
                </CenterBox>
                <Typography variant="caption">{l.caption}</Typography>
                {l.text}
                {l.subtext}
              </CardContent>
            </CardBase>
          );
        })}
      </CardContent>
    </CardBase>
  );
};

const Check = () => {
  const checks = [
    {
      text: (
        <>
          <Typography>あなたが住んでいる地区の</Typography>
          <Typography>危険性を確認しよう！</Typography>
        </>
      ),
      subtext: (
        <Typography variant="caption">
          (台風、河川の氾濫、土砂災害 など)
        </Typography>
      ),
      imgName: "危険な場所",
    },
    {
      text: (
        <>
          <Typography>あなたが住んでいる場所の</Typography>
          <Typography>ハザードマップ(防災マップ)を</Typography>
          <Typography>確認しよう！</Typography>
        </>
      ),
      imgName: "ハザードマップ",
    },
  ];
  return (
    <>
      {checks.map((c, i) => {
        return (
          <CardBase key={i}>
            <CardHeader
              title="CHECK!!"
              titleTypographyProps={{ align: "center" }}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
              }}
            />
            <CardContent>
              <CenterBox>
                <CardMedia
                  component="img"
                  alt={c.imgName}
                  image={imageBasePath + "check" + i + ".png"}
                  title={c.imgName}
                  sx={styles.image}
                />
              </CenterBox>
              {c.text}
              {c.subtext}
            </CardContent>
          </CardBase>
        );
      })}
    </>
  );
};

const Notice = () => {
  return (
    <CardBase>
      <CardHeader
        title="知ってた？"
        titleTypographyProps={{ align: "center" }}
        subheader={
          <>
            <div>50cmの浸水で、</div>
            <div>もう逃げられなくなるヨ!!</div>
          </>
        }
        subheaderTypographyProps={{ align: "center" }}
        sx={{ bgcolor: "tertiary.main" }}
      />
      <CardContent>
        <CenterBox>
          <CardMedia
            component="img"
            alt="動けない"
            image={imageBasePath + "notice.png"}
            title="動けない"
            sx={styles.image}
          />
        </CenterBox>
        <Typography>
          浸水10cmで、小柄な女性が後退。横にひっぱられる力が強く、歩行困難となる。
        </Typography>
        <Typography>
          浸水30cmで、ひざの高さ(30cm)以下、くるぶしの高さ程度で、約6割の女性が転倒。
        </Typography>
        <Typography>浸水60cmで、乗用車が流れ出す。</Typography>
        <Typography>
          浸水100cmで、強固な板塀(暑さ3cm)が壊れるほどの威力。
        </Typography>
      </CardContent>
    </CardBase>
  );
};

export const SandaP8Mada = () => {
  return (
    <>
      <SimpleTitle
        title="「まだ大丈夫」は危険！"
        subtitle="土砂災害・水害はあっという間！"
      />

      <EvacuationOrder />
      <Check />
      <Notice />
    </>
  );
};
