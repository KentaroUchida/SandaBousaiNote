import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

function Notice() {
  return (
  <Card raised>
    <CardHeader
      title="避難情報を常に確認！！"
      titleTypographyProps={{ align: 'center' }}
      style={{backgroundColor: "#ffff33"}}
    />
    <CardContent>
      <Typography>
        市は、河川氾濫や土砂災害のおそれがあるときに以下の情報を発令します。
        状況に応じて、自分の取るべき避難行動をすみやかに実行しましょう。
      </Typography>
    </CardContent>
  </Card>
  );
}

function getSteps() {
  return [
    '避難準備・高齢者など避難開始',
    '避難勧告',
    '避難指示(緊急)'
  ];
}

function getStepContent(step) {
  const texts = [
    { title: "災害発生が予想されるときに発令", items: ["家族と連絡を取る", "非常持ち出し品の準備", "高齢者や障がい者など、1人で避難ができない人への支援開始"] },
    { title: "避難行動が必要なときに発令", items: ["避難行動の開始\n※避難場所への移動が必要な場所は車ではなく、徒歩で移動", "1人で避難ができない人への支援開始"] },
    { title: "災害発生の危険性が非常に高く、今すぐ身を守る行動が必要なときに発令", items: ["ただちに避難行動を完了する", "屋外への移動が難しい場合、屋内への安全な場所へ移動"], option: "red" },
  ];
  if(step >= 0 && step <= 2) {
    const caution = texts[step].option ? "red" : null;
    return (<>
      <Typography style={{color: caution}}>{texts[step].title}</Typography>
      <List component="nav" aria-label="main">
        {texts[step].items.map((item,i) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <FiberManualRecordIcon/>
              </ListItemIcon>
              <ListItemText primary={item}/>
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
      <Stepper activeStep={activeStep}>
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
              {activeStep < steps.length - 1 ? "危険度上昇" : "こうなるともう遅い…"}
            </Button>
          </Grid>
        </div>
      </div>
    </div>
  );
}

function Check() {
  const checks = [
    {
      message: "あなたが住んでいる地区の危険性を確認しよう！",
      sub: "(台風、河川の氾濫、土砂災害など)",
      imgPath: "/img/pages/P6Mada/disaster.png"
    },
    {
      message: "あなたが住んでいる場所のハザードマップを確認しよう！",
      imgPath: "/img/pages/P6Mada/hazard.png"
    }
  ];
  return (<>
  {checks.map((check,index) => {
    return (
      <Card raised key={index}>
        <CardHeader
          title="チェック！"
          titleTypographyProps={{ align: 'center' }}
          style={{backgroundColor: "#90ee90"}}
        />
        <CardMedia
          component="img"
          alt="災害"
          image={check.imgPath}
          title="災害"
        />
        <CardContent>
          <Typography>{check.message}</Typography>
          <Typography variant="body2">{check.sub}</Typography>
        </CardContent>
      </Card>
    );
  })}
  </>);
}

function WarningLevel(){
  return(
    <div>
      <img 
        src="/img/pages/P6Mada/warning-levels.png"
        style={{ maxWidth: "100%", height: "auto" }}
        alt=""
      />
    </div>
  )
}
function Ask() {
  return (
    <Card raised>
      <CardHeader
        title="知ってた？"
        titleTypographyProps={{ align: 'center' }}
        style={{backgroundColor: "#ffc0cb"}}
      />
      <CardContent>
        <Grid container>
          <Typography style={{color: "red"}}>
            50cm
          </Typography>
          <Typography>
            の浸水でもう逃げられなくなるヨ！！
          </Typography>
        </Grid>
      </CardContent>

      <CardMedia
        component="img"
        alt="動けない人"
        image="/img/pages/P6Mada/cant-move.png"
        title="動けない人"
      />

      <CardContent>
        <Typography>
        浸水10cmで、小柄な女性が後退。横にひっぱられる力が強く、歩行困難となる。
        </Typography>
        <Divider/>
        <Typography>
        浸水30cmで、ひざの高さ(30cm)以下、くるぶしの高さ程度で、約6割の女性が転倒。
        </Typography>
        <Divider/>
        <Typography>
        浸水60cmで、乗用車が流れ出す。浸水100cmで、強固な板塀(暑さ3cm)が壊れるほどの威力。
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function P3Mada() {
  return (<>
    <Notice/>
    <CautionStep/>
    <WarningLevel/>
    <br/>
    <Divider/>
    <br/>
    <Check/>
    <Ask/>
  </>);
}