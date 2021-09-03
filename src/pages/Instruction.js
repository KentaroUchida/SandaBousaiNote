import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
	createTheme,
	responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const instructionText = [
	"左上の三本線をタップするとメニューが出てきます",
	"メニューからそれぞれのページへ遷移することができます",
	"各ページから場面に応じた防災情報を確認できます",
	"右上の印刷ボタンを押すとPDFの作成ができます(作成中)",
	"左にスワイプすると前のページ，右にスワイプすると次のページに移動します",
	"入力した情報は保存され，次回以降も見ることができます",
	"保存した情報は消えてしまう可能性があります，あらかじめご了承ください",
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
				{instructionText.map((text, index) => {
					return (
						<div>
							<Typography>
								<ListItem>
									<ListItemIcon>
										<FiberManualRecordIcon />
									</ListItemIcon>
									<ListItemText primary={text} />
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