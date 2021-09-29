import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useTheme} from "@mui/material/styles"

const styles = {
  root: {
    width: '100%',
  },
  button: {
    marginRight: 1,
  },
};

function transitionButton(step) {
  switch (step) {
    case 0:
      return '自分の状況を確認出来たら・・・';
    case 1:
      return '周囲の状況を確認出来たら・・・';
    case 2:
      return '家族の安否確認が出来たら・・・';
    case 3:
      return '室内の被害の確認が出来たら・・・';

    case 4:
      return 'さあ逃げよう';

    default:
      return 'unk';

  }
}

function Notice() {
  const theme = useTheme()
  return (
    <Card raised>
      <CardHeader
        title="ゆれがおさまったら"
        titleTypographyProps={{ align: 'center' }}
        style={{ backgroundColor: theme.palette.warning.main }}
      />
      <CardContent>
        <Typography>
          その次の行動チャート
        </Typography>
      </CardContent>
    </Card>
  );
}

function DontReturn() {
  const theme = useTheme()
  return (
    <Card raised>
      <CardHeader
        title="会社から帰ってこれないかも！？"
        titleTypographyProps={{ align: 'center' }}
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
  return [
    '',
    '',
    '',
    '',
    ''
  ];
}

function getStepContent(step) {
  const texts = [
    { title: "自分の状況確認", items: ["怪我をしていないかチェック", "何が起こったのか正しい情報をチェック", "土砂災害の危険性がある時\n※迷わず避難行動！！", "救急要請が必要な時\n※物をたたき、音を出して救助を要請"] },
    { title: "周囲の状況を確認", items: ["足を怪我しないように室内でも靴かスリッパをはく", "被害がないとき\n※（不在家族への安否確認）家族との連絡方法は決まっていますか？", "火災が発生した時\n※"] },
    { title: "家族の安否確認", items: ["誰も怪我をしていないかを確認しよう", "近隣の被害確認\n建物の被害状況\n隣人の安否確認・救助\n状況によっては支援を開始", "情報収集\n※地域や自治体の状況を確認"] },
    { title: "室内の被害確認", items: ["ライフライン、ドアの開閉の確認", "家具の被害、通信状況を確認"] },
    { title: "避難の判断", items: ["自宅で待機するか、避難所にいくか、各自で判断する"] },
  ];
  if (step >= 0 && step <= 5) {
    const caution = texts[step].option ? "red" : null;
    return (<>
      <Typography style={{ color: caution }}>{texts[step].title}</Typography>
      <List component="nav" aria-label="main">
        {texts[step].items.map((item,i) => {
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
    </>);
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
      <Stepper activeStep={activeStep} >
        {steps.map((label,i) => {
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
            <Button disabled={activeStep === 0} onClick={handleBack} sx={styles.button}>
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
function C1_5() {
  const theme = useTheme()
  const texts = [
    { title: "①自分の状況確認", items: ["怪我をしていないかチェック", "何が起こったのか正しい情報をチェック", "土砂災害の危険性がある時\n※迷わず避難行動！！", "救急要請が必要な時\n※物をたたき、音を出して救助を要請"] },
    { title: "②周囲の状況を確認", items: ["足を怪我しないように室内でも靴かスリッパをはく", "被害がないとき\n※（不在家族への安否確認）家族との連絡方法は決まっていますか？", "火災が発生した時\n※周囲に呼びかけながら避難します"] },
    { title: "③家族の安否確認", items: ["誰も怪我をしていないかを確認しよう", "近隣の被害確認\n建物の被害状況\n隣人の安否確認・救助\n状況によっては支援を開始", "情報収集\n※地域や自治体の状況を確認"] },
    { title: "④室内の被害確認", items: ["ライフライン、ドアの開閉の確認", "家具の被害、通信状況を確認"] },
    { title: "⑤避難の判断", items: ["自宅で待機するか、避難所にいくか、各自で判断する"] },
  ];
  return (
    <div>
      {texts.map((text,index) => {
        return (
          <div>
            <Card>
              <CardHeader
                title={text.title}
                titleTypographyProps={{ align: 'center' }}
                style={{ backgroundColor: theme.palette.tertiary.main }}
              />
              <CardContent
                style={{ backgroundColor: theme.palette.tertiary.light }}
              >
                {text.items.map(text => {
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
                  )
                })}
              </CardContent>
            </Card>
            <br />
            {
              index!==4 && 
              <Grid container alignItems="center" justify="center">
                <img src="/img/pages/P4Yurega/arrow.png" alt=""/>
              </Grid>
            }
            <br />
          </div>
        )
      })}
    </div>
  );
}

export default function P4Yurega() {
  return (<>
    <Notice />
    <br /><br />
    <C1_5 />
    <br />
    <DontReturn />
    <br />
    <CautionStep />


  </>);
}