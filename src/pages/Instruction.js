import React from "react";
import {
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  CardBase,
  TitleCardPart,
} from "../components/CardComponents";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import {
// 	createTheme,
// 	responsiveFontSizes,
// } from '@mui/styles';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

const instructionText = [
  // 全ページに共通する説明
  "このアプリに入力した内容は自動的に保存されるため、次回アプリを起動した際も入力内容を確認できます",
  "左にスワイプすると前のページ，右にスワイプすると次のページに移動します",
  "矢印ボタンを押してページを移動することもできます",
  "目次ボタンをタップするとメニューが出てきます",
  "はてなボタンを押すと各ページの使い方の説明を見ることができます",
  "印刷ボタンを押すとPDFを作成することができます",
];
const text_emphasis = {
  color: "#FF5192"
}

const text_nomal = {
  color: 'black'
}

class Content extends React.Component {
 
  render() {
    return (
      <CardBase>
        <CardContent>
          <TitleCardPart title="さんだ防災ノートの使い方" />
          {instructionText.map((text, i) => {
            if(i===0){
              return (
                <div>
                  <Typography>
                    <ListItem>
                      <ListItemIcon>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText style={text_emphasis} primary={instructionText[i]} />
                    </ListItem>
                  </Typography>
                </div>
              );
            } else{
              return(<div>
                <Typography>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText style={text_nomal}secondary={instructionText[i]} />
                  </ListItem>
                </Typography>
              </div>);
              
            }
            
          })}
        </CardContent>
      </CardBase>
    );
  }
}

function Instruction() {
  return (
    <>
      <Content />
    </>
  );
}

export {Instruction}
