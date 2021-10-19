import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CardBase, TitleCardPart } from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";

const imageBasePath = "img/pages/SandaP17Toilet/";
const title = "トイレが大変!!";
const subtitle = "いちばん困る！ストレスになる！";

const Coagulant = () => {
  const [num, setNum] = React.useState(0);
  const handleChange = (event) => {
    setNum(event.target.value);
  };
  return (<CardBase>
    <CardContent>
      <TitleCardPart title="凝固剤の必要数を知ろう！"/>
      <Typography>1日のトイレの回数は5～7回。</Typography>
      <Typography>最低でも3回。</Typography>
      <Typography>できれば7日分の備蓄が必要。</Typography>

      <Typography sx={{mt: 4}}>おむつを使うお子さんを除く、家族の人数を入力すると必要数が算出されます。</Typography>
      <Grid container alignItems="flex-end">
        <Grid item xs>
          <TextField
            label="家族の人数"
            id="num"
            type="number"
            variant="standard"
            value={num}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs>
          <Typography> 人 × 7日分 = </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="caption">最低必要数</Typography>
          <Typography>{num * 35}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </CardBase>);
};

const MakeToilet = () => {
  const steps = [
    {
      label: 'ゴミ袋を便座に二重にかぶせる。',
      description: `ゴミ袋は消臭効果の高いものを使う。
      汚物はゴミ収集が開始されるまで自宅に置くことになります`,
    },
    {
      label: '短冊状に切って、くしゃくしゃにした新聞紙をゴミ袋の中に敷き詰める。',
    },
    {
      label: '用を足した後、水分を固める効果のある凝固剤を上からかける。',
    },
    {
      label: '内側のゴミ袋を鳥だし、空気を抜いて口を強く縛る。',
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (<CardBase>
    <CardContent>
      <TitleCardPart title="緊急用トイレの作り方" color="primary.light"/>
      <Typography>「続き」ボタンを押してチェックしましょう！</Typography>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{mt: 4}}>
        {steps.map((step, index) => (
          <Step key={step.label} classes="theme.secondary">
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {index % 2 === 0 && <CardMedia component="img" image={imageBasePath + "make" + index + ".png"}/>}
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={activeStep >= steps.length - 1}
                >
                  {index === steps.length - 1 ? '完了！' : '続き'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  戻る
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </CardContent>
  </CardBase>);
};

const Poncho = () => {
  return (<CardBase>
    <CardContent>
      <TitleCardPart title="女性はポンチョがあると便利！" color="warning.light"/>
      <Typography>もしものときのために車の中にも積んでおくといいかも！</Typography>
      <Typography>キャンプにも使えます</Typography>
      <Grid container justifyContent="left" alignItems="flex-end" sx={{mt: 2}}>
        <Grid item xs={7}>
          <CardMedia component="img" image={imageBasePath + "poncho0.png"}/>
        </Grid>
        <Grid item xs={3}>
          <CardMedia component="img" image={imageBasePath + "poncho1.png"}/>
        </Grid>
      </Grid>
      <Grid container justifyContent="left" alignItems="flex-end" sx={{mt: 2}}>
        <Grid item xs>
          <CardMedia component="img" image={imageBasePath + "camp.png"}/>
        </Grid>
        <Grid item xs>
          <CardMedia component="img" image={imageBasePath + "car.png"}/>
        </Grid>
      </Grid>
   </CardContent>
  </CardBase>);
};

const Difference = () => {
  const [num, setNum] = React.useState(0);
  const handleChange = (event) => {
    setNum(event.target.value);
  };

  const kinds = [
    {name: "5倍巻", m: 250, g: 409, d: 12},
    {name: "2倍巻", m: 100, g: 241, d: 12},
    {name: "1.5倍巻", m: 75, g: 158, d: 10},
    {name: "普通巻", m: 50, g: 124, d: 10},
  ];
  return (<CardBase>
    <CardContent>
      <TitleCardPart title="トイレットペーパーの違い" color="success.light"/>
      <Typography variant="h6">普通巻きより2倍巻、5倍巻のものがコンパクトでおすすめ</Typography>
      <CardMedia component="img" image={imageBasePath + "difference.png"}/>
      <Typography variant="caption">画像出典：あかね空</Typography>
      <Grid container sx={{mt: 2}}>
        {kinds.map((k, i) => (
          <Grid item xs key={i}>
            <Typography>{k.name}</Typography>
            <Typography variant="body2">{k.m} m</Typography>
            <Typography variant="body2">{k.g} g</Typography>
            <Typography variant="caption">直径 {k.d} cm</Typography>
        </Grid>
        ))}
      </Grid>
      <Divider sx={{my: 1}}/>
      <Typography sx={{mt: 1}}>トイレットペーパーの平均的な使用量は、1人当たり1週間程度で1ロール、4人家族の場合には、1か月で16ロール程度が必要。</Typography>
      <Typography variant="caption">日本家庭紙工業会より</Typography>

      <Typography variant="h6" sx={{mt: 2}}>あなたの家族の必要数は?</Typography>
      <Typography sx={{mb: 2}}>家族の人数を入力してみましょう！</Typography>
      <Grid container alignItems="flex-end">
        <Grid item xs>
          <TextField
            label="家族の人数"
            id="num"
            type="number"
            variant="standard"
            value={num}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs>
          <Typography> 人 × 1か月 = </Typography>
        </Grid>
        <Grid item xs>
          <Typography>{num * 4} ロール</Typography>
        </Grid>
      </Grid>
      <Typography variant="caption">※あくまで最低量の目安です。</Typography>
   </CardContent>
  </CardBase>);
};

export const SandaP17Toilet = () => {
  return (<>
    <SimpleTitle title={title} subtitle={subtitle}/>

    <CardBase>
      <CardContent>
        <Typography>
          東日本大震災が起きてから9時間以内にトイレに生きたくなった人は78%(調査:日本トイレ研究所)。
        </Typography>
        <Typography>
          でも安易に水を流すのは待って！マンションのトイレの配管は、上下の部屋とつながっていて破損したら使えません！
        </Typography>
        <CardMedia component="img" image={imageBasePath + "backflow.png"} height="140" sx={{mt: 2}}/>
        <Typography variant="caption">逆流するかも...</Typography>
      </CardContent>
    </CardBase>

    <CardBase>
      <CardContent>
        <Typography>
          避難所のトイレは、狭い・段差あり、和式、男女共用のところも多く、便器は足の踏み場もないくらいに排泄物でいっぱいになることも。
        </Typography>
        <Typography>災害用のトイレは必ず家庭に備蓄しておきましょう！</Typography>
        <Grid container alignItems="center">
          {[0, 1, 2].map(i => (
            <Grid item xs key={i}>
              <CardMedia component="img" image={imageBasePath + "toilet" + i + ".png"}/>
            </Grid>
          ))}
        </Grid>
        <Typography variant="caption">トイレは1人1日5~7回  |  家族の人数分用意しよう！</Typography>
        <Typography sx={{mt: 4}}>詳しくは以下リンクをチェック！</Typography>
        <Link href="http://www.toilet.or.jp/toilet-guide/product/list.html" underline="hover">災害用トイレ製品一覧(日本トイレ研究所)</Link>
      </CardContent>
    </CardBase>

    <Coagulant/>
    <MakeToilet/>
    <Poncho/>
    <Difference/>
    <Typography variant="caption">画像出典：株式会社サンコー</Typography>
  </>);
};