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


const HinanCard = () =>{
	return(<>
	<Card>
			<ResponsiveFontProvider>
				<Typography variant="h3" gutterBottom>
					わがやの災害避難カードを作ろう！
				</Typography>
			</ResponsiveFontProvider>
			<p>水害、土砂、地震、火災など災害によって複数の逃げる場所を持つことが大切です。</p>
			<img alt="" src="/img/pages/P7Izanigeru/bousaiMap.png" style={{ maxWidth: "80%", height: "auto"}}/>
		</Card>
	</>)
}

const instructionText = [
    "a",
    "i",
];

export default function Instruction(){
	return(<>
		<h2>三田防災ノートの使い方</h2>
        <ul>
            <li>左上の三本線をタップするとメニューが出てきます</li>
            <li>保存したデータは消えてしまうことがあります，あらかじめご了承ください</li>
        </ul>
        <List>
            <ListItemText>左上の三本線をタップするとメニューが出てきます</ListItemText>
            <ListItemText>保存したデータは消えてしまうことがあります，あらかじめご了承ください</ListItemText>
            <ListItemText>左にスワイプすると次のページ，右にスワイプすると前のページに移動します</ListItemText>
            
        </List>
	</>);
}