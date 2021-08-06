import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/core';
import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from 'react-minesweeper'
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
            <Minesweeper
                onWin={() => console.log("GAME WON")}
                onLose={() => console.log("GAME LOST")}
                bombChance={0.15} // 15% chance that a field will contain a bomb
                width={10} // amount of fields horizontally
                height={10} // amount of fields vertically
            />
        </div>
    );
    //return (
    //    <div>
    //       {props.children}
    //        {list}
    //    </div>
    //);
}