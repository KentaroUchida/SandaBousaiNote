import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@material-ui/core/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const instructionText = [
    "左上の三本線をタップするとメニューが出てきます",
    "メニューからそれぞれのページへ遷移することができます",
    "右上の印刷ボタンを押すとPDFの作成ができます(作成中)",
    "左にスワイプすると前のページ，右にスワイプすると次のページに移動します",
    "入力した情報は保存され，次回以降も見ることができます",
    "保存した情報は消えてしまう可能性があります，あらかじめご了承ください",
];

export default function Instruction(){
	return(<>
    <Grid container alignItems="center" justify="center">
        <h2>さんだ防災ノートの使い方</h2>
    </Grid>
    {instructionText.map((_,i) => (
        <ul>
            <li>{instructionText[i]}</li>
        </ul>
    ))}
	</>);
}