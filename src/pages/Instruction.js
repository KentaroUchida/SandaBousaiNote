import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import {
// 	createTheme,
// 	responsiveFontSizes,
// } from '@mui/styles';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);


const instructionText = [
	// 全ページに共通する説明
	"左にスワイプすると前のページ，右にスワイプすると次のページに移動します",
	"矢印ボタンを押してページを移動することもできます",
	"目次ボタンをタップするとメニューが出てきます",
	"ヘルプボタンを押すと使い方の説明を見ることができます",
	"印刷ボタンを押すとPDFを作成することができます",
];

class Title extends React.Component {
	render() {
		return (
			<div>
				<Grid container alignItems="center" justify="center">
					<h2>さんだ防災ノートの使い方</h2>
				</Grid>
			</div>
		);
	}
}
class Content extends React.Component {
	render() {
		return (
			<div>
				{instructionText.map((text,i) => {
					return (
						<div>
							<Typography>
								<ListItem>
									<ListItemIcon>
										<FiberManualRecordIcon />
									</ListItemIcon>
									<ListItemText primary={instructionText[i]} />
								</ListItem>
							</Typography>
						</div>
					);
				})}
			</div>
		);
	}
}

export default function Instruction() {
	return (<>
		<Title />
		<Content />
	</>);
}