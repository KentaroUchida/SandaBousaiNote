import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

const preparation = [
  {
    name: "飲料水",
    path: "water",
  },
  {
    name: "缶詰",
    path: "can",
  },
  {
    name: "スープ",
    path: "soup",
  },
  {
    name: "乾物",
    path: "dryfood",
  },
  {
    name: "カセットコンロ・ガス",
    path: "stove",
  },
  {
    name: "ポリ袋",
    path: "poli",
  },
];

function getPath(str) {
  return "/img/pages/P9Foods/" + str + ".png";
}

function Checkbox2lines(props) {
  return (
    <FormGroup row>
      <GridList cols={2} cellHeight="auto">
        {props.items.map((item) => {
          return (
            <Card key={item.path}>
              <CardActionArea>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.checked} onChange={props.onChange} name={item.path}
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
              </CardActionArea>
            </Card>
          );
        })}
      </GridList>
    </FormGroup>
  );
}

function Preparation(props) {
  const items = preparation.map(item => {item["checked"] = props.foodList[item.path]; return item;});

  return (
    <Card>
      <CardHeader
        title="備えておきたい 非常食・調理器具"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Checkbox2lines items={items} onChange={props.handleChange}/>
      </CardContent>
    </Card>
  );
}

function Info() {
  return (
    <FormGroup row>
      <GridList cols={2} cellHeight="auto">
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              alt={"調理"}
              image={getPath("cook")}
              title={"cook"}
            />
            <Typography>
              カセットコンロとガスボンベがあれば調理できます！
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              alt={"子供"}
              image={getPath("child")}
              title={"child"}
            />
            <Typography>
              小さな子は非常時でも食べ慣れないものは食べません!!
            </Typography>
          </CardContent>
        </Card>
      </GridList>
    </FormGroup>
  );
}

function Store() {
  return (<>
    <Card>
      <CardHeader
        title="1～3日分"
        titleTypographyProps={{ align: "center" }}
        subheader="冷蔵庫やバントリーがいつもいっぱい!それも備蓄です!"
        subheaderTypographyProps={{ align: "center" }}
        style={{backgroundColor: "yellow"}}
      />
      <CardContent>
        <CardMedia
          component="img"
          alt={"食パンなど"}
          image={getPath("bread")}
          title={"bread"}
        />
        <Typography>
        食パンや野菜などは、自然解凍により食べることも可能。
        </Typography>
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        title="4～7日分"
        titleTypographyProps={{ align: "center" }}
        subheader="美味しい備蓄を多めに用意し、食べたら買い足す「ローリングストック」をぜひ習慣に!"
        subheaderTypographyProps={{ align: "center" }}
        style={{backgroundColor: "orange"}}
      />
      <CardContent>
        <CardMedia
          component="img"
          alt={"ローリングストック"}
          image={getPath("stock")}
          title={"stock"}
        />
        <Typography>
        1.備蓄する食料・水を少し多めに用意する。
        </Typography>
        <Typography>
        2.定期的に古いものから食べる。
        </Typography>
        <Typography>
        3.食べた分を買い足し、補充する。
        </Typography>
      </CardContent>
    </Card>
  </>);
}

class P9Foods extends React.Component {
  constructor() {
    super();
    let storedFL = JSON.parse(localStorage.getItem("foodList"));
    if(storedFL) {
      for(let k in storedFL) {
        storedFL[k] = storedFL[k] === "1" ? true : false;
      }
    }
    this.state = {
      foodList: storedFL ? storedFL : {},
    }

    this.handleChange = this.handleChange.bind(this);
    this.storeLocalStorage = this.storeLocalStorage.bind(this);
  }

  handleChange(event) {
    const foodList = this.state.foodList;
    foodList[event.target.name] = event.target.checked;
    this.storeLocalStorage(foodList);
    this.setState({"foodList": foodList});
  }

  storeLocalStorage(foodList) {
    for(let k in foodList) {
      foodList[k] = foodList[k] ? "1" : "0";
    }
    localStorage.setItem("foodList", JSON.stringify(foodList));
  }

  render() {
    return (<>
    <Typography variant="h6">
      避難所に行っても 全員分の
    </Typography>
    <Typography variant="h5">
      食べ物がない?!
    </Typography>
    <Divider/>
    <Typography>
      巨大地震など発生直後は、ライフラインも壊滅状態となり、水や食料の不足が予想されます。
    </Typography>
    <Typography>
      さらにアレルギー対応食や幼児用の食事は手に入りません!
    </Typography>
    <Divider/>
    <Preparation foodList={this.state.foodList} handleChange={this.handleChange}/>
    <Divider/>
    <Info/>
    <br/>
    <Store/>
    </>);
  }
}

export default P9Foods;