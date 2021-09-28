import React from 'react';
import {makeStyles} from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider"
import Button from '@mui/material/Button';
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Title = () => {
	return (
		<ThemeProvider theme={theme}>
			<ResponsiveFontProvider>
				<Typography variant="h2" gutterBottom>
					いざ逃げる！
				</Typography>
				<Typography variant="h4" gutterBottom>
					災害によって、避難場所がちがうよ!
				</Typography>
			</ResponsiveFontProvider>
		</ThemeProvider>
	);
}

const measureStyles = makeStyles((theme) => ({
	grid: {
		display: "flex",
	},
	cardTitle: {
		backgroundColor: theme.palette.tertiary.main,
		margin: theme.spacing(1),
	},
}));

const Measure = ({ title, image, text }) => {
	const classes = measureStyles();
	return (
		<Card>
			<CardContent>
				<Paper elevation={3} className={classes.cardTitle}>
					<Typography variant="h5">{title}</Typography>
				</Paper>
			</CardContent>
			<CardMedia>
				<img src={image} alt="" style={{ maxWidth: "100%", height: "auto" }} />
			</CardMedia>
			<CardContent>
				{text}
			</CardContent>
		</Card>
	);
};

const Shelter = () => {
	const classes = measureStyles();
	return (
		<>
			<Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
				<Grid item xs={12} className={classes.grid}>
					<Measure
						title="広域避難所・一次避難所"
						image="/img/pages/P7Izanigeru/tatemono_kouen.png"
						text="火災などの際に、一時的に逃げる場所。公園などが指定されている。"
					/>
				</Grid>
				<Grid item xs={12} className={classes.grid}>
					<Measure
						title="避難所"
						image="/img/pages/P7Izanigeru/hinanjo_seikatsu_family_smile.png"
						text="自宅が被災した際に生活をする場。小・中学校や公民館など。"
					/>
				</Grid>
				<Grid item xs={12} className={classes.grid}>
					<Measure
						title="福祉避難所"
						image="/img/pages/P7Izanigeru/tatemono_kaigo_shisetsu.png"
						text="障がいや介護など、特別な支援が必要な人のための避難所。"
					/>
				</Grid>
			</Grid>
		</>
	);
};

const Sitteta = () => {
	return (<>
		<Grid>
			<Grid>
				<img src="/img/pages/P7Izanigeru/sitteta.png" alt="" style={{ maxWidth: "30%", height: "auto" }} />
			</Grid>
			<Grid>
				<Card>
					<CardMedia>
						<img src="/img/pages/P7Izanigeru/hinanbasyo.png" alt="" style={{ maxWidth: "100%", height: "auto" }} />
					</CardMedia>
					<CardContent>
						避難場所も災害によっては危険な場所になります！
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</>)
}

const CheckPlace = () => {
	return (<>
		<img alt="" src="/img/pages/P7Izanigeru/pict.png" style={{ maxWidth: "100%", height: "auto" }} />
	</>
	);
};

const Notokiha = () => {
	const classes = measureStyles();
	return (<>
		<Grid container spacing={3} direction="row">
			<Grid item xs={6} className={classes.grid}>
				<Card>
					<CardMedia>
						<img alt="" src="/img/pages/P7Izanigeru/kouzui.png" style={{ maxWidth: "100%", height: "auto" }} />
					</CardMedia>
					<CardContent>
						洪水・津波の時は…<br></br>
						高い所へ<br></br>
						海・川の遠くへ
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6} className={classes.grid}>
				<Card>
					<CardMedia>
						<img alt="" src="/img/pages/P7Izanigeru/dosya.png" style={{ maxWidth: "100%", height: "auto" }} />
					</CardMedia>
					<CardContent>
						土砂の時は…<br></br>
						山・崖から離れたところへ
					</CardContent>
				</Card>
			</Grid>

		</Grid>
	</>)
}

const HinanCard = () => {
	return (<>
		<Card>
			<ResponsiveFontProvider>
				<Typography variant="h3" gutterBottom>
					わがやの災害避難カードを作ろう！
				</Typography>
			</ResponsiveFontProvider>
			<p>水害、土砂、地震、火災など災害によって複数の逃げる場所を持つことが大切です。</p>
			<img alt="" src="/img/pages/P7Izanigeru/bousaiMap.png" style={{ maxWidth: "80%", height: "auto" }} />
		</Card>
	</>)
}

class ShelterInformation extends React.Component {
	constructor() {
		super();
		this.state = {

		}
		this.setValues = this.setValues.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	setValues() {
		if (this.state.suigai1 !== undefined) localStorage.setItem('suigai1', this.state.suigai1);
		if (this.state.suigai2 !== undefined) localStorage.setItem('suigai2', this.state.suigai2);
		if (this.state.dosya1 !== undefined) localStorage.setItem('dosya1', this.state.dosya1);
		if (this.state.dosya2 !== undefined) localStorage.setItem('dosya2', this.state.dosya2);
		if (this.state.jishin1 !== undefined) localStorage.setItem('jishin1', this.state.jishin1);
		if (this.state.jishin2 !== undefined) localStorage.setItem('jishin2', this.state.jishin2);
		if (this.state.kasai1 !== undefined) localStorage.setItem('kasai1', this.state.kasai1);
		if (this.state.kasai2 !== undefined) localStorage.setItem('kasai2', this.state.kasai2);
		alert("避難先情報を保存しました")
	}
	render() {
		let suigai1 = localStorage.getItem('suigai1');
		let suigai2 = localStorage.getItem('suigai2');
		let dosya1 = localStorage.getItem('dosya1');
		let dosya2 = localStorage.getItem('dosya2');
		let jishin1 = localStorage.getItem('jishin1');
		let jishin2 = localStorage.getItem('jishin2');
		let kasai1 = localStorage.getItem('kasai1');
		let kasai2 = localStorage.getItem('kasai2');

		return (
			<div>
				<table border="1">
					<tr>
						<th></th>
						<th>まず逃げるところ</th>
						<th>家に帰れないときに過ごす場所</th>
					</tr>
					<tr>
						<th>水害</th>
						<th><TextField onChange={this.handleChange} id="suigai1" defaultValue={suigai1} variant="standard" /></th>
						<th><TextField onChange={this.handleChange} id="suigai2" defaultValue={suigai2} variant="standard" /></th>
					</tr>
					<tr>
						<th>土砂</th>
						<th><TextField onChange={this.handleChange} id="dosya1" defaultValue={dosya1} variant="standard" /></th>
						<th><TextField onChange={this.handleChange} id="dosya2" defaultValue={dosya2} variant="standard" /></th>
					</tr>
					<tr>
						<th>地震</th>
						<th><TextField onChange={this.handleChange} id="jishin1" defaultValue={jishin1} variant="standard" /></th>
						<th><TextField onChange={this.handleChange} id="jishin2" defaultValue={jishin2} variant="standard" /></th>
					</tr>
					<tr>
						<th>火災</th>
						<th><TextField onChange={this.handleChange} id="kasai1" defaultValue={kasai1} variant="standard" /></th>
						<th><TextField onChange={this.handleChange} id="kasai2" defaultValue={kasai2} variant="standard" /></th>
					</tr>
				</table>
				<Button onClick={this.setValues} variant="contained">
					保存
				</Button>
			</div>
		)
	}
}

export const P7Izanigeru = () => {
	return (<>
		<Title />
		<Shelter />
		<Sitteta />
		<CheckPlace />
		<Notokiha />
		<HinanCard />
		<ShelterInformation />
	</>);
}