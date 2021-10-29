import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  ImageList,
  Typography,
} from "@mui/material";
import { SimpleTitle } from "../components/TitleComponents";

const styles = {
  card: {
    marginBottom: 4,
  },
  cardHeaderMain: {
  },
  cardHeaderCheckList: {
    bgcolor: "blue.light",
  },
  cardHeaderCheck: {
    bgcolor: "secondary.light",
  },
  cardHeaderSonae: {
    bgcolor: "success.light",
  },
  cardHeaderSonaeDark: {
    bgcolor: "success.dark",
  },
 
 
  cardHeaderRecommend: {
    bgcolor: "repeating-linear-gradient(45deg, #e0ffff, #e0ffff 12px, #ffffff 12px, #ffffff 24px)",
  },
  child: {
    marginLeft: 3,
  },
  parentCheckbox: {
    pointerEvents: "none",
  },
};



const zerothItems = [
  {
    name: "小銭",
    path: "coin",
  },
  {
    name: "モバイルバッテリー",
    path: "mobile_battery",
  },
  {
    name: "手鏡",
    path: "mirror",
  },
  {
    name: "口紅・リップ",
    path: "lipstick",
  },
  {
    name: "ヘアゴム",
    path: "hairband",
  },
  {
    name: "携帯トイレ",
    sub: "節水",
    path: "portable_toilets",
  },
  {
    name: "家族の写真・連絡先",
    path: "adress",
  },
  {
    name: "衛生用品ナプキン・おりものシート",
    path: "sanitary_napkin",
  },
  {
    name: "消毒液・ウエットティッシュ",
    sub : "感染症対策にも重要",
    path: "disinfectant_wetwipes",
  },
  {
    name: "大判ハンカチ",
    sub: "マスク、止血に",
    path: "handkerchief",
  },
  {
    name: "氷砂糖・アメ",
    path: "candy",
  },
  {
    name: "バンドエイト",
    path: "bandage",
  },
  {
    name: "マスク",
    sub : "感染症対策にも重要",
    path: "mask",
  },
  {
    name: "保温ブランケット",
    path: "blanket",
  },
  {
    name: "常備薬",
    path: "medicine_0",
  },
  {
    name: "ライト",
    path: "light_0",
  },
  {
    name: "ビニール袋",
    sub: "シート、防寒、水を運ぶ、など",
    path: "poli",
  },
  {
    name: "飲み物",
    path: "drink_S",
  },
  {
    name: "はさみ・つめきり",
    emphasis: "必須",
    path: "scissor",
  },
  {
    name: "体温計",
    sub: "感染症対策にも重要",
    path: "thermometer",
  },
];

const firstItems = [
  {
    name: "飲料水",
    sub: "500mlペットボトル3本",
    path: "drink_M",
  },
  {
    name: "オムツ・おしりふき・ポリ袋",
    path: "diaper",
  },
  {
    name: "ミルク・離乳食・おやつ",
    path: "baby_foods",
  },
  {
    name: "紙食器・はし・スプーン",
    path: "tableware",
  },
  {
    name: "ウエットティッシュ・ティッシュペーパー",
    path: "tissues",
  },
  {
    name: "歯磨き用品",
    path: "dentifrice",
  },
  {
    name: "ライト",
    path: "light_1",
  },
  {
    name: "母子手帳",
    sub: "アプリでも代用可、健康保険所のコピー",
    path: "bosi_book",
  },
  {
    name: "現金",
    path: "real_money",
  },
  {
    name: "着替え・靴",
    path: "clothes_shoes",
  },
  {
    name: "常備薬",
    path: "medicine_1",
  },
  
  {
    name: "その他・抱っこ紐・哺乳瓶",
    path: "others",
  },
];

const moreItems = [
  {
    name: "子供が好きなもの",
    message:
      "「これさえあれば子どもがご機嫌！」という、お菓子やおもちゃなど、子どもの心がほぐれるグッズ。",
    path: "for_children",
  },
  {
    name: "新聞紙",
    message:
      "暖を取ったり　紙食器を作ったり",
    path: "newspaper",
  },
];

function getPath(str) {
  return "/img/pages/SandaP12Goods/" + str + ".png";
}

function Sonaebox(props) {
  return (
    <FormGroup row>
      <ImageList cols={1} rowHeight="auto" gap ={0}>
      <Card sx={styles.card} >
          <CardHeader
            title="0次の備え"  
            sx={styles.cardHeaderSonae}
            titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
         「非常持ち出し品」として備えるものの中から、携帯できそうなものは、いつも使うバッグに入れ、身に付けてみよう！
         いつどこで被災するかわからない災害への安心感を持ち歩こう。
        </Typography>
        </CardContent>
      </Card>
      <Card sx={styles.card}>
          <CardHeader
            title="1次の備え"  
            sx={styles.cardHeaderSonae}
            titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          家庭や勤務先　多くの時間を過ごす場所には「非常持ち出し品」をそなえよう！いざという時に、さっと持ち出して逃げられるコンパクトな1パック。
        </Typography>
        </CardContent>
      </Card>
      <Card sx={styles.card}>
          <CardHeader
            title="2次の備え"  
            sx={styles.cardHeaderSonae}
            titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          非常時、ライフラインが途絶え、もしも助けの手が届かなかったとしても、何日間は時給自足してしのげる物品を備蓄しよう。
        </Typography>
        </CardContent>
      </Card>
        
      </ImageList>
    </FormGroup>
  );
}

function Checkbox2Lines(props) {
  const items = props.items;
  return (
    <FormGroup row>
      <ImageList cols={2} rowHeight="auto">
        {Object.keys(items).map((key) => {
          return (
            <Card key={key}>
              <CardActionArea
                onClick={(event) => {
                  event.target.name = key;
                  event.target.checked = !items[key].checked;
                  props.onChange(event);
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={items[key].checked}
                      name={key}
                      onChange={props.onChange}
                    />
                  }
                  label={items[key].name}
                  onClick={(event) => {
                    event.stopPropagation(); // CardActionAreaのonClickを無効化
                  }}
                />
                <CardMedia
                  component="img"
                  alt={items[key].name}
                  image={getPath(key)}
                  title={items[key].name}
                />
                <CardContent>
                  <Typography variant="body2">{items[key].emphasis}</Typography>
                  <Typography variant="body2">{items[key].sub}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </ImageList>
    </FormGroup>
  );
}

class Sonae extends React.Component {
  render() {
    return (
      <Card sx={styles.card}>
        <CardHeader
          title="非常時に備える３ステップ"  
          sx={styles.cardHeaderSonaeDark}
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
        <Typography variant="h6"　align = 'center'>
          まずは１次から備えよう
        </Typography>
          <Sonaebox/>
        </CardContent>
      </Card>
    );
  }
}



class Zeroth extends React.Component {
  constructor() {
    super();
    const storedCLNStr = localStorage.getItem("checkListZeroth");
    let zerothList = {};
    if (storedCLNStr !== null) {
      const storedCLN = JSON.parse(storedCLNStr);
      zerothList = zerothItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            sub: el.sub,
            emphasis: el.emphasis,
            checked: storedCLN[el.path] ? true : false,
          },
        }),
        {}
      );
    } else {
      zerothList = zerothItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            sub: el.sub,
            emphasis: el.emphasis,
            checked: false,
          },
        }),
        {}
      );
    }

    this.state = { items: zerothList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({ items: items });

    localStorage.setItem(
      "checkListZeroth",
      JSON.stringify(
        Object.keys(items).reduce(
          (obj, key) => ({ ...obj, [key]: items[key].checked }),
          {}
        )
      )
    );
  }

  render() {
    return (
      <Card sx={styles.card}>
        <CardHeader
          title="0次の備え"
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
          subheader="いつものバッグに"
          subheaderTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Checkbox2Lines
            items={this.state.items}
            onChange={this.handleChange}
          />
        </CardContent>
      </Card>
    );
  }
}

class First extends React.Component {
  constructor() {
    super();
    const storedCLNStr = localStorage.getItem("checkListFirst");
    let firstList = {};
    if (storedCLNStr !== null) {
      const storedCLH = JSON.parse(storedCLNStr);
      firstList = firstItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            sub: el.sub,
            emphasis: el.emphasis,
            checked: storedCLH[el.path] ? true : false,
          },
        }),
        {}
      );
    } else {
      firstList = firstItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            sub: el.sub,
            emphasis: el.emphasis,
            checked: false,
          },
        }),
        {}
      );
    }

    this.state = { items: firstList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({ items: items });

    localStorage.setItem(
      "checkListFirst",
      JSON.stringify(
        Object.keys(items).reduce(
          (obj, key) => ({ ...obj, [key]: items[key].checked }),
          {}
        )
      )
    );
  }

  render() {
    return (
      <Card sx={styles.card}>
        <CardHeader
          title="1次の備え"
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
          subheader="非常持ち出し品"
          subheaderTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Checkbox2Lines
            items={this.state.items}
            onChange={this.handleChange}
          />
        </CardContent>
      </Card>
    );
  }
}

class More extends React.Component {
  constructor() {
    super();
    const storedCLMStr = localStorage.getItem("checkListMore");
    let moreList = {};
    if (storedCLMStr !== null) {
      const storedCLM = JSON.parse(storedCLMStr);
      moreList = moreItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            message: el.message,
            checked: storedCLM[el.path] ? true : false,
          },
        }),
        {}
      );
    } else {
      moreList = moreItems.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            message: el.message,
            checked: false,
          },
        }),
        {}
      );
    }

    this.state = { items: moreList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({ items: items });

    localStorage.setItem(
      "checkListMore",
      JSON.stringify(
        Object.keys(items).reduce(
          (obj, key) => ({ ...obj, [key]: items[key].checked }),
          {}
        )
      )
    );
  }

  render() {
    const items = this.state.items;
    return (
      <Card sx={styles.card}>
        <CardHeader
          title="さらにあると便利"
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
          {Object.keys(items).map((key) => {
            return (
              <Card key={key}>
                <CardActionArea
                  onClick={(event) => {
                    event.target.name = key;
                    event.target.checked = !items[key].checked;
                    this.handleChange(event);
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={items[key].checked}
                        name={key}
                        onChange={this.handleChange}
                      />
                    }
                    label={items[key].name}
                    onClick={(event) => {
                      event.stopPropagation(); // CardActionAreaのonClickを無効化
                    }}
                  />
                  <CardMedia
                    component="img"
                    alt={items[key].name}
                    image={getPath(key)}
                    title={items[key].name}
                  />
                  <CardContent>
                    <Typography variant="body2">
                      {items[key].message}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

function SandaP12Goods1() {
  return (
    <>
       <SimpleTitle title="防災グッズを備えよう１" subtitle="非常時にホントに役に立つ"/>
      <Sonae />
      <Divider />
      <Zeroth />
      <First />
      <More />
    </>
  );
}

export {SandaP12Goods1}