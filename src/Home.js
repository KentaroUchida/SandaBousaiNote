import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

// コンテンツ一覧を仮置き中
const data = [
    ["グラッと地震がきたら！", "いのちを守る！できるだけケガをせず生き残る！"],
    ["ゆれがおさまったら", "その次の行動チャート"],
    ["まだ大丈夫は危険！", "土砂災害・水害はあっという間！"]
]
export default function Home(props) {
  const classes = useStyles();
  const title = "iiii";
  let list = [];
  for (let i in data) {
      list.push(<tr><th>{data[i]}</th><th> <Button variant="contained"> aaa </Button> </th></tr>);
      
  }
  
 
    return (
        <div>
            {list}
        </div>
    );
    //return (
    //    <div>
    //       {props.children}
    //        {list}
    //    </div>
    //);
}