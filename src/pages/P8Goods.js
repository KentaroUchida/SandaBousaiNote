import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';

const normallyItems = [
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
  }
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
  }
];

const moreItems = [
  {
    name: "子供が好きなもの",
    message: "「これさえあれば子どもがご機嫌！」という、お菓子やおもちゃなど、子どもの心がほぐれるグッズ。",
    path: "for_children",
  },
  {
    name: "精油(ティーツリー)",
    message: "ティーツリーは抗菌・殺菌作用があるので、アロマオイルとしてだけではなく掃除や洗濯にも活用できます。",
    path: "essential_oil",
  },

];

function getPath(str) {
  return "/img/pages/P8Goods/" + str + ".png";
}

function Checkbox2Lines(props) {
  const items = props.items;
  return (
    <FormGroup row>
      <ImageList cols={2} rowHeight="auto">
        {Object.keys(items).map(key => {
          return (
            <Card key={key}>
              <CardActionArea onClick={event => {
                event.target.name = key;
                event.target.checked = !items[key].checked
                props.onChange(event);
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={items[key].checked} name={key} onChange={props.onChange}
                    />
                  }
                  label={items[key].name}
                  onClick={event => {
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
                    {items[key].emphasis}
                  </Typography>
                  <Typography variant="body2">
                    {items[key].sub}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </ImageList>
    </FormGroup>
  );
}

class Normally extends React.Component {
  constructor() {
    super();
    const storedCLNStr = localStorage.getItem("checkListNormally");
    let normallyList = {};
    if(storedCLNStr !== null) {
      const storedCLN = JSON.parse(storedCLNStr);
      normallyList = normallyItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, sub: el.sub, emphasis: el.emphasis, checked: storedCLN[el.path] ? true : false
      }}), {});
    } else {
      normallyList = normallyItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, sub: el.sub, emphasis: el.emphasis, checked: false
      }}), {});
    }
    
    this.state = {items: normallyList};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({"items": items});

    localStorage.setItem("checkListNormally", JSON.stringify(
      Object.keys(items).reduce((obj, key) => ({...obj,
        [key]: items[key].checked
      }), {})
    ));
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="ちょい足し防災"
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Checkbox2Lines items={this.state.items} onChange={this.handleChange}/>
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
    if(storedCLNStr !== null) {
      const storedCLH = JSON.parse(storedCLNStr);
      hyakkinList = hyakkinItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, sub: el.sub, emphasis: el.emphasis, checked: storedCLH[el.path] ? true : false
      }}), {});
    } else {
      hyakkinList = hyakkinItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, sub: el.sub, emphasis: el.emphasis, checked: false
      }}), {});
    }

    this.state = {items: hyakkinList};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({"items": items});

    localStorage.setItem("checkListHyakkin", JSON.stringify(
      Object.keys(items).reduce((obj, key) => ({...obj,
        [key]: items[key].checked
      }), {})
    ));
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="百均でこれだけ揃う!!"
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Checkbox2Lines items={this.state.items} onChange={this.handleChange}/>
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
    if(storedCLMStr !== null) {
      const storedCLM = JSON.parse(storedCLMStr);
      moreList = moreItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, message: el.message, checked: storedCLM[el.path] ? true : false
      }}), {});
    } else {
      moreList = moreItems.reduce((obj, el) => ({...obj, [el.path]: {
        name: el.name, message: el.message, checked: false
      }}), {});
    }

    this.state = {items: moreList};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const items = this.state.items;
    items[event.target.name].checked = event.target.checked;
    this.setState({"items": items});

    localStorage.setItem("checkListMore", JSON.stringify(
      Object.keys(items).reduce((obj, key) => ({...obj,
        [key]: items[key].checked
      }), {})
    ));
  }

  render() {
    const items = this.state.items;
    return (
      <Card>
        <CardHeader
          title="さらにあると便利"
          titleTypographyProps={{ align: "center" }}
        />
        <CardContent>
          {Object.keys(items).map(key => {
            return (
              <Card key={key}>
                <CardActionArea onClick={event => {
                  event.target.name = key;
                  event.target.checked = !items[key].checked
                  this.handleChange(event);
                }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={items[key].checked} name={key} onChange={this.handleChange}
                      />
                    }
                    label={items[key].name}
                    onClick={event => {
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

export default function P8Goods(){
  return (<>
  <Typography variant="h6">
    非常時にホントに役立つ！
  </Typography>
  <Typography variant="h5">
    防災グッズ
  </Typography>
  <Divider/>
  <Normally/>
  <Hyakkin/>
  <More/>
  </>);
}