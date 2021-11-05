import React from "react";
import {
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CardBase, HeaderCardPart, } from "../components/CardComponents";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const instructionText = [
  // 全ページに共通する説明
  "このアプリに入力した内容は自動的に保存されるため、次回アプリを起動した際も入力内容を確認できます",
  "左にスワイプすると前のページ、右にスワイプすると次のページに移動します",
  "矢印ボタンを押してページを移動することもできます",
  "目次ボタンをタップするとメニューが出てきます",
  "はてなボタンを押すと各ページの使い方の説明を見ることができます",
  "印刷ボタンを押すとPDFを作成することができます",
];
const text_emphasis = {
  color: "#FF5192",
};

const text_nomal = {
  color: "black",
};

class Content extends React.Component {
  render() {
    return (
      <CardBase>
        <HeaderCardPart title="さんだ防災ノートの使い方" color="tertiary.main"/>
        <CardContent>
          {instructionText.map((text, i) => {
            return (
              <ListItem key={i}>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                {i === 0 ? (
                  <ListItemText style={text_emphasis} primary={text} />
                ) : (
                  <ListItemText style={text_nomal} secondary={text} />
                )}
              </ListItem>
            );
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

export { Instruction };
