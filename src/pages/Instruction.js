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
	"左上の三本線をタップするとメニューが出てきます",
	"メニューからそれぞれのページへ遷移することができます",
	"各ページから場面に応じた防災情報を確認できます",
	"右上の印刷ボタンを押すとPDFの作成ができます(作成中)",
	"左にスワイプすると前のページ，右にスワイプすると次のページに移動します",
	"入力した情報は保存され，次回以降も見ることができます",
	"入力した情報はブラウザの保存領域に記録されますが，設定等によりやむを得ず消えてしまうことがあります"
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