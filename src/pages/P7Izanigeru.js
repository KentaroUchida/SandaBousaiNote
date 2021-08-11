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
import Button from '@material-ui/core/Button';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@material-ui/core/styles';
import { render } from '@testing-library/react';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Title = () => {
    return(
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

const Shelter1 = () => {
    return(
        <Card>
            <CardContent>
                広域避難所・一次避難所
            </CardContent>
            <CardMedia>
            <img 
                src="/img/pages/P7Izanigeru/tatemono_kouen.png"
                style={{ height: 300 }}
            />
            </CardMedia>
            <CardContent>
                火災などの際に、一時的に逃げる場所。<br></br>
                公園などが指定されている。
            </CardContent>
        </Card>
    )
}

const Shelter2 = () => {
    return(
        <Card>
            <CardContent>
                避難所
            </CardContent>
            <CardMedia>
            <img 
                src="/img/pages/P7Izanigeru/hinanjo_seikatsu_family_smile.png"
                style={{ height: 300 }}
            />
            
            </CardMedia>
            <CardContent>
               自宅が被災した際に生活をする場。<br></br>
               小・中学校や公民館など。
            </CardContent>
        </Card>
    )
}

const Shelter3 = () => {
    return(
        <Card>
            <CardContent>
                福祉避難所
            </CardContent>
            <CardMedia>
            <img 
                src="/img/pages/P7Izanigeru/tatemono_kaigo_shisetsu.png"
                style={{ height: 300 }}
            />
            
            </CardMedia>
            <CardContent>
                障がいや介護など、特別な支援が必要な人のための避難所。<br></br>
            </CardContent>
        </Card>
    )
}

const measureStyles = makeStyles((theme) => ({
	grid: {
		display: "flex",
	},
	cardTitle: {
		backgroundColor: "#ffc0cb",
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
			<Grid container direction="column" alignItems="center" justify="center" spacing={3}>
				<Grid item xs={15} className={classes.grid}>
					<Measure
						title="広域避難所・一次避難所"
						image="/img/pages/P7Izanigeru/tatemono_kouen.png"
						text="火災などの際に、一時的に逃げる場所。公園などが指定されている。"
					/>
				</Grid>
				<Grid item xs={15} className={classes.grid}>
					<Measure
						title="避難所"
						image="/img/pages/P7Izanigeru/hinanjo_seikatsu_family_smile.png"
						text="自宅が被災した際に生活をする場。小・中学校や公民館など。"
					/>
				</Grid>
				<Grid item xs={15} className={classes.grid}>
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
	return(<>
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

const CheckPlace = () =>{
	return(<>
		<img src="/img/pages/P7Izanigeru/pict.png" style={{ maxWidth: "100%", height: "auto" }}/>
		</>
	);
};

const Notokiha = () =>{
	return(<>
		<Grid  direction="row">
			<Grid>
				<Card>
					<CardMedia>
						<img src="/img/pages/P7Izanigeru/kouzui.png" style={{ maxWidth: "40%", height: "auto" }}/>
					</CardMedia>
					<CardContent>
						洪水・津波の時は…<br></br>
						高い所へ<br></br>
						海・川の遠くへ
					</CardContent>
				</Card>
			</Grid>
			<Grid>
				<Card>
					<CardMedia>
						<img src="/img/pages/P7Izanigeru/dosya.png" style={{ maxWidth: "40%", height: "auto" }}/>
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

const HinanCard = () =>{
	return(<>
	<Card>
			<ResponsiveFontProvider>
				<Typography variant="h3" gutterBottom>
					わがやの災害避難カードを作ろう！
				</Typography>
			</ResponsiveFontProvider>
			<p>水害、土砂、地震、火災など災害によって複数の逃げる場所を持つことが大切です。</p>
			<img src="/img/pages/P7Izanigeru/bousaiMap.png" style={{ maxWidth: "80%", height: "auto"}}/>
		</Card>
	</>)
}

class ShelterInformation extends React.Component {
	constructor(){
		super();
	}
	setValues(){
		alert("避難先情報を保存しました")
	}
	render(){
		let suigai1;
		let suigai2;
		let dosya1;
		let dosya2;
		let jishin1;
		let jishin2;
		let kasai1;
		let kasai2;

		return(
		<div>
		<table border="1">
			<tr>
				<th></th>
				<th>まず逃げるところ</th>
				<th>家に帰れないときに過ごす場所</th>
			</tr>
			<tr>
				<th>水害</th>
				<th><TextField onChange={this.handleChange} defaultValue={suigai1}/></th>
				<th><TextField onChange={this.handleChange} defaultValue={suigai2}/></th>
			</tr>
			<tr>
				<th>土砂</th>
				<th><TextField onChange={this.handleChange} defaultValue={dosya1}/></th>
				<th><TextField onChange={this.handleChange} defaultValue={dosya2}/></th>
			</tr>
			<tr>
				<th>地震</th>
				<th><TextField onChange={this.handleChange} defaultValue={jishin1}/></th>
				<th><TextField onChange={this.handleChange} defaultValue={jishin2}/></th>
			</tr>
			<tr>
				<th>火災</th>
				<th><TextField onChange={this.handleChange} defaultValue={kasai1}/></th>
				<th><TextField onChange={this.handleChange} defaultValue={kasai2}/></th>
			</tr>
		</table>
		<Button onClick={this.setValues} variant="contained" color="primary">
      保存
    </Button>
		</div>
		)
	}
}

export const P7Izanigeru= () => {
	return(<>
		<Title/>
		<Shelter/>
		<Sitteta/>
		<CheckPlace/>
		<Notokiha/>
		<HinanCard/>
		<ShelterInformation/>
	</>);
}