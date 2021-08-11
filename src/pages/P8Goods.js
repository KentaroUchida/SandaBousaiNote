import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

const normally_items = [
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

const hyakkin_items = [
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

const more_items = [
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

function Checkbox2lines(props) {
  return (
    <FormGroup row>
      <GridList cols={2} cellHeight="auto">
        {props.items.map((item, i) => {
          return (
            <Card>
              <CardActionArea>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.checked} onChange={props.handleChange} name={item.name}
                    />
                  }
                  label={item.name}
                />
                <CardMedia
                  component="img"
                  alt={item.path}
                  image={getPath(item.path)}
                  title={item.name}
                />
                <CardContent>
                  <Typography variant="body2" color="red">
                    {item.emphasis}
                  </Typography>
                  <Typography variant="body2">
                    {item.sub}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </GridList>
    </FormGroup>
  );
}

function Normally() {
  const [state, setState] = React.useState(
    Array(normally_items.length).fill(false)
  );

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <Card>
      <CardHeader
        title="ちょい足し防災"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Checkbox2lines items={normally_items} handleChange={handleChange}/>
      </CardContent>
    </Card>
  );
}

function Hyakkin() {
  return (
    <Card>
      <CardHeader
        title="百均でこれだけ揃う!!"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Checkbox2lines items={hyakkin_items}/>
      </CardContent>
    </Card>
  );
}

function More() {
  return (
    <Card>
      <CardHeader
        title="さらにあると便利"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        {more_items.map((item, i) => {
          return (
            <Card>
              <CardActionArea>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.checked} name={item.name}
                    />
                  }
                  label={item.name}
                />
                <CardMedia
                  component="img"
                  alt={item.path}
                  image={getPath(item.path)}
                  title={item.name}
                />
                <CardContent>
                  <Typography variant="body2">
                    {item.message}
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

class P8Goods extends React.Component {
  render() {
    return (<>
    <Normally/>
    <Hyakkin/>
    <More/>
    </>);
  }
}

export default P8Goods;