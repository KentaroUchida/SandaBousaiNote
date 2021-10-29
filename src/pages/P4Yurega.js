import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { SimpleTitle, BodyText } from "../components/TitleComponents";
import {
  CardBase,
  ImageCardPart,
  HeaderCardPart,
  TitleTextImageCard,
} from "../components/CardComponents";

const styles = {
  root: {
    width: "100%",
  },
  button: {
    marginRight: 1,
  },
};

function transitionButton(step) {
  switch (step) {
    case 0:
      return "自分の状況を確認出来たら・・・";
    case 1:
      return "周囲の状況を確認出来たら・・・";
    case 2:
      return "家族の安否確認が出来たら・・・";
    case 3:
      return "室内の被害の確認が出来たら・・・";

    case 4:
      return "さあ逃げよう";

    default:
      return "unk";
  }
}

function Notice() {
  const theme = useTheme();
  return (
    <Card raised>
      <CardHeader
        title="ゆれがおさまったら"
        titleTypographyProps={{ align: "center" }}
        style={{ backgroundColor: theme.palette.warning.main }}
      />
      <CardContent>
        <Typography>その次の行動チャート</Typography>
      </CardContent>
    </Card>
  );
}

function DontReturn() {
  const theme = useTheme();
  return (
    <Card raised>
      <CardHeader
        title="会社から帰ってこれないかも！？"
        titleTypographyProps={{ align: "center" }}
        style={{ backgroundColor: theme.palette.warning.main }}
      />
      <CardContent>
        <Typography>
          一斉帰宅による混乱を防ぐため、大阪府は事業主に「従業員の一斉帰宅の抑制」をお願いしています。対策として「従業員の施設内待機」「最低3日分の備蓄」など。場合によっては会社から帰ってこれないかもしれません。
        </Typography>
      </CardContent>
    </Card>
  );
}

function getSteps() {
  return ["", "", "", "", ""];
}

function getStepContent(step) {
  const texts = [
    {
      title: "自分の状況確認",
      items: [
        "怪我をしていないかチェック",
        "何が起こったのか正しい情報をチェック",
        "土砂災害の危険性がある時\n※迷わず避難行動!!",
        "救急要請が必要な時\n※物をたたき、音を出して救助を要請",
      ],
    },
    {
      title: "周囲の状況を確認",
      items: [
        "足を怪我しないように室内でも靴かスリッパをはく",
        "被害がないとき\n※（不在家族への安否確認）家族との連絡方法は決まっていますか？",
        "火災が発生した時\n※",
      ],
    },
    {
      title: "家族の安否確認",
      items: [
        "誰も怪我をしていないかを確認しよう",
        "近隣の被害確認\n建物の被害状況\n隣人の安否確認・救助\n状況によっては支援を開始",
        "情報収集\n※地域や自治体の状況を確認",
      ],
    },
    {
      title: "室内の被害確認",
      items: ["ライフライン、ドアの開閉の確認", "家具の被害、通信状況を確認"],
    },
    {
      title: "避難の判断",
      items: ["自宅で待機するか、避難所にいくか、各自で判断する"],
    },
  ];
  if (step >= 0 && step <= 5) {
    const caution = texts[step].option ? "red" : null;
    return (
      <>
        <Typography style={{ color: caution }}>{texts[step].title}</Typography>
        <List component="nav" aria-label="main">
          {texts[step].items.map((item, i) => {
            return (
              <ListItem key={i}>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }
}

function CautionStep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div sx={styles.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, i) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={i} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          {getStepContent(activeStep)}
          <Grid container justifyContent="flex-start">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={styles.button}
            >
              戻る
            </Button>

            <Button
              variant="contained"
              onClick={handleNext}
              sx={styles.button}
              disabled={activeStep >= steps.length - 1}
            >
              {transitionButton(activeStep)}
            </Button>
          </Grid>
        </div>
      </div>
    </div>
  );
}

const charts = [
  {
    title: "①自分の状況確認",
    image: "saigaiji_kyuujo_fue_man.png",
    items: [
      "ケガをしていないかチェック",
      "何が起こったのか正しい情報をチェック",
      "津波や土砂災害の危険性があるときは、迷わず、すぐに避難行動をとりましょう",
      "負傷し、救急要請が必要なときは、笛やモノをたたき、音を出して救助要請をします",
    ],
  },
  {
    title: "②周囲の状況を確認",
    image: "kaji_shouka_bottle_man.png",
    items: [
      "足を怪我しないように室内でも靴かスリッパをはく",
      "被害がないときは、不在家族への安否確認をします(家族との連絡方法は決まっていますか？)",
      "火災が発生したときは、応急手当、閉じ込めからの救出、初期消火。周囲に呼びかけながら避難します",
    ],
  },
  {
    title: "③家族の安否確認",
    image: "bousai_gyousei_musen.png",
    items: [
      "誰もケガをしていないかを確認しよう",
      "近隣の被害確認(建物の被害状況・隣人の安否確認や救助・状況によっては支援を開始)",
      "情報収集(地域や自治体の状況を確認)",
    ],
  },
  {
    title: "④室内の被害確認",
    image: "jiko_jishin_kagu_tentou.png",
    items: ["ライフライン、ドアの開閉の確認、家具の被害、通信状況を確認しよう"],
  },
  {
    title: "⑤避難の判断",
    image: "breaker_switch_off.png",
    items: [
      "自宅にいるのか、避難所や友人・知人宅へ避難するのか各自で判断します",
      "ブレーカーをオフ!!自宅を離れる際は、ブレーカーをオフに！通電火災に注意！",
    ],
  },
];

const img_path = "/img/pages/P4Yurega";
const generateImagePath = (filename) => img_path + "/" + filename;

function C1_5() {
  const theme = useTheme();
  return (
    <div>
      {charts.map((text, index) => {
        return (
          <div>
            <Card>
              <CardHeader
                title={text.title}
                titleTypographyProps={{ align: "center" }}
                style={{ backgroundColor: theme.palette.tertiary.main }}
              />
              <CardContent
                style={{ backgroundColor: theme.palette.tertiary.light }}
              >
                {text.items.map((text) => {
                  return (
                    <div>
                      <Typography>
                        <ListItem>
                          <ListItemIcon>
                            <FiberManualRecordIcon />
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      </Typography>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
            <br />
            {index !== 4 && (
              <Grid container alignItems="center" justify="center">
                <img src="/img/pages/P4Yurega/arrow.png" alt="" />
              </Grid>
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
}

const ActionChartCard = ({ content }) => (
  <CardBase>
    <HeaderCardPart title={content.title} color="tertiary.main" />
    <ImageCardPart image={generateImagePath(content.image)} />
    <CardContent>
      {content.items.map((text, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <BodyText>{text}</BodyText>
          </ListItem>
        );
      })}
    </CardContent>
  </CardBase>
);

const Arrow = () => (
  <Box sx={{ justifyContent: "center", display: "flex" }}>
    <ArrowDownwardIcon sx={{ fontSize: 70, color: grey[600] }} />
  </Box>
);

function P4Yurega() {
  return (
    <>
      <SimpleTitle title="ゆれがおさまったら" subtitle="その次の行動チャート" />
      {charts.map((content, i) => (
        <>
          <ActionChartCard content={content} key={`card-${i}`} />
          {i < charts.length - 1 ? <Arrow key={`arrow-${i}`} /> : ""}
        </>
      ))}
      <Box sx={{ height: 30 }} />
      <TitleTextImageCard
        title="会社から帰って来れないかも!?"
        image={generateImagePath("tatemono_buildings.png")}
        color="warning.main"
      >
        一斉帰宅による混乱を防ぐため、兵庫県は事業主に「従業員の一斉帰宅の抑制」をお願いしています。
        対策として「従業員の施設内待機」「最低3日分の備蓄」など。
        会社からすぐに帰って来れないかもしれません。
      </TitleTextImageCard>
    </>
  );
}

export { P4Yurega };
