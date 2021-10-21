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
import { Title, SubTitle,SimpleTitle} from "../components/TitleComponents";

const styles = {
  card: {
    marginBottom: 12,
  },
  cardHeaderMain: {
  },
  cardHeaderCheckList: {
    bgcolor: "primary.light",
  },
  cardHeaderCheck: {
    bgcolor: "secondary.light",
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



const secondItems = [
  {
    name: "飲料水",
    path: "water",
  },
  {
    name: "小銭",
    path: "coin",
  },
  {
    name: "チョコレート・あめ",
    path: "chocolate_and_candy",
  },
  {
    name: "充電器・バッテリー",
    path: "battery",
  },
  {
    name: "大判ハンカチ",
    sub: "マスク、止血に",
    path: "handkerchief",
  },
  {
    name: "ふえ",
    sub: "助けを呼ぶ体力がなくなる",
    path: "whistle",
  },
  {
    name: "救急用品",
    path: "aid",
  },
  {
    name: "紙おむつ・生理用品",
    path: "diapers",
  },
  {
    name: "家族の写真・連絡先",
    path: "address",
  },
  {
    name: "ポリ袋",
    sub: "シート、防寒、水を運ぶ、など",
    path: "poli",
  },
  {
    name: "安全ピン",
    sub: "節水ボトルを作る、着替え時、など",
    path: "pin",
  },
];

const hyakkinItems = [
  {
    name: "レジャーシート",
    sub: "着替え時、目隠し",
    path: "picnic_sheet",
  },
  {
    name: "マスク",
    path: "mask",
  },
  {
    name: "歯磨きシート",
    path: "dentifrice_sheet",
  },
  {
    name: "靴下・手袋",
    sub: "ワレモノだらけで危険",
    path: "socks",
  },
  {
    name: "はさみ・つめきり",
    emphasis: "必須",
    path: "scissor",
  },
  {
    name: "ばんそうこう・ほうたい",
    path: "bandage",
  },
  {
    name: "ふえ",
    sub: "助けを呼ぶ体力がなくなる",
    path: "whistle",
  },
  {
    name: "ラップ",
    sub: "食器の代わり、ケガの手当",
    path: "wrap",
  },
  {
    name: "携帯トイレ",
    sub: "節水",
    path: "toilet",
  },
  {
    name: "養生テープ・マジック",
    sub: "名札、伝言を残す",
    path: "tape",
  },
  {
    name: "簡易まくら",
    path: "pillow",
  },
  {
    name: "めがね",
    sub: "コンタクトは大変",
    path: "glasses",
  },
  {
    name: "除菌シート",
    sub: "洗顔、お風呂代わりに",
    path: "wet_tissue",
  },
  {
    name: "LEDライト",
    path: "light",
  },
  {
    name:"aaa",
    path:"wet_tissue2"
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
    name: "精油(ティーツリー)",
    message:
      "ティーツリーは抗菌・殺菌作用があるので、アロマオイルとしてだけではなく掃除や洗濯にも活用できます。",
    path: "essential_oil",
  },
];

function getPath(str) {
  return "/img/pages/SandaP13Goods/" + str + ".png";
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
                  //component="img"
                  alt={items[key].name}
                  //image={getPath(key)}
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

class Second extends React.Component {
  constructor() {
    super();
    const storedCLNStr = localStorage.getItem("checkListSecond");
    let secondList = {};
    if (storedCLNStr !== null) {
      const storedCLN = JSON.parse(storedCLNStr);
      secondList = secondItems.reduce(
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
      secondList = secondItems.reduce(
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

    this.state = { items: secondList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({ items: items });

    localStorage.setItem(
      "checkListSecond",
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
          title="0次の備え:いつものバッグに"  
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
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

class Hyakkin extends React.Component {
  constructor() {
    super();
    const storedCLNStr = localStorage.getItem("checkListHyakkin");
    let hyakkinList = {};
    if (storedCLNStr !== null) {
      const storedCLH = JSON.parse(storedCLNStr);
      hyakkinList = hyakkinItems.reduce(
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
      hyakkinList = hyakkinItems.reduce(
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

    this.state = { items: hyakkinList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({ items: items });

    localStorage.setItem(
      "checkListHyakkin",
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
          title="1次の備え：非常持ち出し品"
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
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
                    //component="img"
                    alt={items[key].name}
                    //image={getPath(key)}
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

function SandaP13Goods2() {
  return (
    <>
      <SimpleTitle title="防災グッズを備えよう２" subtitle="非常時にホントに役に立つ"/>
      <Divider />
      <Second />
      <Hyakkin />
    </>
  );
}

export {SandaP13Goods2}