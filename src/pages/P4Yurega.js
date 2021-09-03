import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Textsms } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

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
  return (
    <Card raised>
      <CardHeader
        title="ゆれがおさまったら"
        titleTypographyProps={{ align: 'center' }}
        style={{ backgroundColor: "#ffff33" }}
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
  return (
    <Card raised>
      <CardHeader
        title="会社から帰ってこれないかも！？"
        titleTypographyProps={{ align: 'center' }}
        style={{ backgroundColor: "#ffff33" }}
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
        {texts[step].items.map(item => {
          return (
            <ListItem>
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
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} >
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          {getStepContent(activeStep)}
          <Grid container justifyContent="flex-start">
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              戻る
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
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
function C1_4() {
  const texts = [
    { title: "①自分の状況確認", items: ["怪我をしていないかチェック", "何が起こったのか正しい情報をチェック", "土砂災害の危険性がある時\n※迷わず避難行動！！", "救急要請が必要な時\n※物をたたき、音を出して救助を要請"] },
    { title: "②周囲の状況4を確認", items: ["足を怪我しないように室内でも靴かスリッパをはく", "被害がないとき\n※（不在家族への安否確認）家族との連絡方法は決まっていますか？", "火災が発生した時\n※周囲に呼びかけながら避難します"] },
    { title: "③家族の安否確認", items: ["誰も怪我をしていないかを確認しよう", "近隣の被害確認\n建物の被害状況\n隣人の安否確認・救助\n状況によっては支援を開始", "情報収集\n※地域や自治体の状況を確認"] },
    { title: "④室内の被害確認", items: ["ライフライン、ドアの開閉の確認", "家具の被害、通信状況を確認"] },
  ];
  return (
    <div>
      {texts.map(text => {
        return (
          <div>
            <Card>
              <CardHeader
                title={text.title}
                titleTypographyProps={{ align: 'center' }}
              />
              <CardContent>
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
            <Grid container alignItems="center" justify="center">
              <img src="/img/pages/P4Yurega/arrow.png" />
            </Grid>
            <br />
          </div>
        )
      })}
    </div>
  );
}

function C5() {
  const texts = [
    { title: "⑤避難の判断", items: ["自宅で待機するか、避難所にいくか、各自で判断する"] },
  ];
  return (
    <div>
      {texts.map((text, index) => {
        return (
          <div>
            <Card>
              <CardHeader
                title={text.title}
                titleTypographyProps={{ align: 'center' }}
              />
              <CardContent>
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
    <C1_4 />
    <C5 />
    <br />
    <DontReturn />
    <br />
    <CautionStep />


  </>);
}