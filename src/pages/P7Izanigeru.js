import React from 'react';
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

const styles = {
	grid: {
		display: "flex",
	},
	cardTitle: {
		bgcolor: "tertiary.main",
		margin: 1,
	},
};

const Measure = ({ title, image, text }) => {
	return (
		<Card>
			<CardContent>
				<Paper elevation={3} sx={styles.cardTitle}>
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
	return (
		<>
			<Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
				<Grid item xs={12} sx={styles.grid}>
					<Measure
						title="広域避難所・一次避難所"
						image="/img/pages/P7Izanigeru/tatemono_kouen.png"
						text="火災などの際に、一時的に逃げる場所。公園などが指定されている。"
					/>
				</Grid>
				<Grid item xs={12} sx={styles.grid}>
					<Measure
						title="避難所"
						image="/img/pages/P7Izanigeru/hinanjo_seikatsu_family_smile.png"
						text="自宅が被災した際に生活をする場。小・中学校や公民館など。"
					/>
				</Grid>
				<Grid item xs={12} sx={styles.grid}>
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
	return (<>
		<Grid container spacing={3} direction="row">
			<Grid item xs={6} sx={styles.grid}>
				<Card>
					<CardMedia>
						<img alt="津波災害" src="/img/pages/P7Izanigeru/kouzui.png" style={{ maxWidth: "100%", height: "auto" }} />
					</CardMedia>
					<CardContent>
						洪水・津波の時は…<br></br>
						高い所へ<br></br>
						海・川の遠くへ
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6} sx={styles.grid}>
				<Card>
					<CardMedia>
						<img alt="土砂災害" src="/img/pages/P7Izanigeru/dosya.png" style={{ maxWidth: "100%", height: "auto" }} />
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
			<img alt="防災マップ" src="/img/pages/P7Izanigeru/bousaiMap.png" style={{ maxWidth: "80%", height: "auto" }} />
		</Card>
	</>)
}

const ShelterInformation = () => {
  const [shelters, setShelters] = React.useState(JSON.parse(localStorage.getItem("P17Izanigeru") || {}));
	const handleChange = (event) => {
    setShelters({...shelters, [event.target.id]: event.target.value});
    localStorage.setItem("P17Izanigeru", JSON.stringify({...shelters, [event.target.id]: event.target.value}));
  }
  return (<>
      <table border="1">
        <tr>
          <th></th>
          <th>まず逃げるところ</th>
          <th>家に帰れないときに過ごす場所</th>
        </tr>
        <tr>
          <th>水害</th>
          <th><TextField onChange={handleChange} id="suigai1" defaultValue={shelters.suigai1} variant="standard" /></th>
          <th><TextField onChange={handleChange} id="suigai2" defaultValue={shelters.suigai2} variant="standard" /></th>
        </tr>
        <tr>
          <th>土砂</th>
          <th><TextField onChange={handleChange} id="dosya1" defaultValue={shelters.dosya1} variant="standard" /></th>
          <th><TextField onChange={handleChange} id="dosya2" defaultValue={shelters.dosya2} variant="standard" /></th>
        </tr>
        <tr>
          <th>地震</th>
          <th><TextField onChange={handleChange} id="jishin1" defaultValue={shelters.jishin1} variant="standard" /></th>
          <th><TextField onChange={handleChange} id="jishin2" defaultValue={shelters.jishin2} variant="standard" /></th>
        </tr>
        <tr>
          <th>火災</th>
          <th><TextField onChange={handleChange} id="kasai1" defaultValue={shelters.kasai1} variant="standard" /></th>
          <th><TextField onChange={handleChange} id="kasai2" defaultValue={shelters.kasai2} variant="standard" /></th>
        </tr>
      </table>
      {/* <Button onClick={this.setValues} variant="contained">
        保存
      </Button> */}
  </>)
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