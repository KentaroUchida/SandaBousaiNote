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
import { useTheme } from "@mui/material/styles";

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
                  image={props.getPath(key)}
                  title={items[key].name}
                />
              </CardActionArea>
            </Card>
          );
        })}
      </ImageList>
    </FormGroup>
  );
}

function Preparation(props) {
  return (
    <Card>
      <CardHeader
        title="備えておきたい 非常食・調理器具"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Checkbox2Lines
          items={props.items}
          onChange={props.handleChange}
          getPath={getPath}
        />
      </CardContent>
    </Card>
  );
}

function Info() {
  return (
    <FormGroup row>
      <ImageList cols={2} rowHeight="auto">
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
      </ImageList>
    </FormGroup>
  );
}

function Store() {
  const theme = useTheme();
  return (
    <>
      <Card>
        <CardHeader
          title="1～3日分"
          titleTypographyProps={{ align: "center" }}
          subheader="冷蔵庫やバントリーがいつもいっぱい!それも備蓄です!"
          subheaderTypographyProps={{ align: "center" }}
          style={{ backgroundColor: theme.palette.warning.main }}
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
          style={{ backgroundColor: theme.palette.secondary.main }}
        />
        <CardContent>
          <CardMedia
            component="img"
            alt={"ローリングストック"}
            image={getPath("stock")}
            title={"stock"}
          />
          <Typography>1.備蓄する食料・水を少し多めに用意する。</Typography>
          <Typography>2.定期的に古いものから食べる。</Typography>
          <Typography>3.食べた分を買い足し、補充する。</Typography>
        </CardContent>
      </Card>
    </>
  );
}

class P9Foods extends React.Component {
  constructor() {
    super();
    const storedFLStr = localStorage.getItem("foodList");
    let foodList = {};
    if (storedFLStr !== null) {
      const storedFL = JSON.parse(storedFLStr);
      foodList = preparation.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            checked: storedFL[el.path] ? true : false,
          },
        }),
        {}
      );
    } else {
      foodList = preparation.reduce(
        (obj, el) => ({
          ...obj,
          [el.path]: {
            name: el.name,
            checked: false,
          },
        }),
        {}
      );
    }

    this.state = { foodList: foodList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const foodList = this.state.foodList;
    foodList[event.target.name].checked = event.target.checked;
    this.setState({ foodList: foodList });

    localStorage.setItem(
      "foodList",
      JSON.stringify(
        Object.keys(foodList).reduce(
          (obj, key) => ({ ...obj, [key]: foodList[key].checked }),
          {}
        )
      )
    );
  }

  render() {
    return (
      <>
        <Typography variant="h6">避難所に行っても 全員分の</Typography>
        <Typography variant="h5">食べ物がない?!</Typography>
        <Divider />
        <Typography>
          巨大地震など発生直後は、ライフラインも壊滅状態となり、水や食料の不足が予想されます。
        </Typography>
        <Typography>
          さらにアレルギー対応食や幼児用の食事は手に入りません!
        </Typography>
        <Divider />
        <Preparation
          items={this.state.foodList}
          handleChange={this.handleChange}
        />
        <Divider />
        <Info />
        <br />
        <Store />
      </>
    );
  }
}

export {P9Foods};
