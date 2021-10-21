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
    name: "水",
    sub : "ひとり1日3Lが目安",
    path: "drink_L",
  },
  {
    name: "食糧",
    path: "foods",
  },
  {
    name: "トイレ用品",
    path: "toiletry",
  },
  {
    name: "ランタン・ヘッドライト",
    path: "light_2",
  },
  {
    name: "モバイルバッテリー",
    path: "mobile_battery_2",
  },
  {
    name: "ポータブル電源",
    path: "power_supply",
  },
  {
    name: "救急セット",
    path: "first_aid",
  },
  {
    name: "サニタリー用品",
    path: "sanitary_2",
  },
  {
    name: "携帯ラジオ",
    path: "radio",
  },
  {
    name: "電池",
    path: "battery",
  },
  {
    name: "コンロ・ボンベ・湯煎可能なポリ袋",
    sub: "調理器具があればなおよし",
    path: "burner",
  },
  {
    name: "ほうき・ちりとり",
    sub: "電気を使わないもの",
    path: "broom",
  },
  {
    name: "体拭きシート・ドライシャンプー・カイロ・冷えピタ",
    sub: "どの季節にも対応できるようにしよう",
    path: "bath",
  },
  {
    name: "その他・家族の連絡先・ハザードマップ",
    sub: "何が起こるか知る事、心構え",
    path: "other_2",
  },
];

const hyakkinItems = [
  {
    name: "給水容器",
    path: "water_tank",
  },
  {
    name: "ブランケット",
    path: "blanket_100",
  },
  {
    name: "カイロ",
    path: "cairo",
  },
  {
    name: "冷却シート",
    path: "cold_sheets",
  },
  {
    name: "レインコート",
    path: "raincoat",
  },
  {
    name: "リュック用防水カバー",
    path: "wp_cover",
  },
  {
    name: "携帯トイレ",
    path: "portable_toilets_100",
  },
  {
    name: "電池・ライト",
    sub: "100均のものは電池がすぐ切れる",
    path: "battery_light",
  },
  {
    name: "ポリ袋",
    path: "poli_100",
  },
  {
    name: "ラップ",
    sup: "食器代わり、ケガの手当",
    path: "rap",
  },
  {
    name: "油性ペン",
    sub: "名札、伝言を残す",
    path: "pen",
  },
  {
    name: "ガムテープ",
    sub : "伝言をかける",
    path: "tape",
  },
  {
    name: "ばんそうこう",
    path: "bandage_100",
  },
  {
    name: "めがね",
    sub: "コンタクトは大変",
    path: "glasses",
  },
  {
    name: "除菌シート",
    sub: "洗顔、お風呂代わりに",
    path: "wet_sheet",
  },
  {
    name: "使い捨てパンツ",
    path: "dis_pants",
  },
  {
    name: "体ふきシート",
    path: "body_sheet",
  },
  {
    name: "はさみ（裁縫セット）",
    path: "sewing",
  },
 
  {
    name: "ヘッドライト",
    path: "headlight",
  },
  {
    name:"軍手",
    sub :"ワレモノだらけで危険",
    path:"glove"
  },
  {
    name:"歯ブラシセット",
    path:"toothbrush_set"
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
          title="2次の備え"  
          sx={styles.cardHeaderCheckList}
          titleTypographyProps={{ align: "center" }}
          subheader="お家にストック"
          subheaderTypographyProps={{ align: "center" }}
        />
        <CardContent>
        <Typography>基本の在宅避難時用　防災備蓄</Typography>
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
          title="100均でそろう防災グッズ"
          sx={styles.cardHeaderCheck}
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Typography> 百均で購入したものをは、長持ちしないものも多いので注意しよう！</Typography>
          <Checkbox2Lines
            items={this.state.items}
            onChange={this.handleChange}
          />
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