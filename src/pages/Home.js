import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ListSubheader } from '@mui/material';

const styles = {
  root: {
    width: '100%',
    bgcolor: "#eeeeff",//theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
};

function NotificationList(props) {
  //const lastIndex = props.notifications.size-1;
  return (
    <Paper spacing={2} elevation={2}>
      <List
        component="nav"
        aria-label="main"
        subheader={
          <li/>
        }
        sx={styles.root}
      >
          <ListSubheader sx={{bgcolor: "#eeeeff"}}>
            三田市からのお知らせ
          </ListSubheader>
        {props.notifications.map((n,i) => {
          return (
            <div key={i}>
              <Link href={n.url}>
                <ListItem>{n.title}</ListItem>
              </Link>
              <Divider/>
            </div>
          );
        })}
      </List>
    </Paper>
  );
}

function DownloadLinks() {
  return (
    <div className="downloadLinks">
      <Paper elevation={2} style={{backgroundColor: "#eeeeff"}}>
        <Typography>
          ひょうご防災アプリは兵庫県および兵庫県内市・町から「避難に関する情報」などの緊急情報や、地震、津波、気象警報などの防災に関する様々な情報を利用者の方々に提供するアプリです。
        </Typography>
        <br></br>

        <Grid container spacing={2} alignContent="center">
          <Grid container item style={{width: "50%"}}>
            <Typography>ひょうご防災ネット</Typography>
            <img src="/img/pages/Home/hyogo_bousai_icon.png" alt="ひょうご防災ネット アプリアイコン" style={{width: "160px"}}/>
          </Grid>

          <Grid container item alignContent="center" style={{width: "50%"}}>
            <Container fixed>
            <Grid item>
              <Link href="https://play.google.com/store/apps/details?id=net.bosai.appli&hl=ja&gl=US">
                <img src="/img/pages/Home/hyogo_bousai_google_play_badge.png" alt="Google Playリンク" style={{width: "160px", margin: "-10px"}}/>
              </Link>
            </Grid>
            <Grid container item>
              <Link href="https://apps.apple.com/us/app/%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E9%98%B2%E7%81%BD%E3%83%8D%E3%83%83%E3%83%88/id1458839848?itsct=apps_box_link&itscg=30200">
                <img src="/img/pages/Home/hyogo_bousai_app_store_black.svg" alt="App Storeリンク" style={{width: "140px"}}/>
              </Link>
            </Grid>
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: [
        {
          title: "さんだ防災・防犯メールに登録を!!",
          url: "https://www.city.sanda.lg.jp/kikikanri/bouhanmail.html"
        },
        {
          title: "河川水位情報等",
          url: "https://www.city.sanda.lg.jp/kikikanri/kasensuii.html"
        },
        {
          title: "風水害時の避難について",
          url: "https://www.city.sanda.lg.jp/kikikanri/huusuigaihinan.html"
        },
        {
          title: "防災・気象情報",
          url: "https://www.city.sanda.lg.jp/kikikanri/bousai-kisyoujouhou.html"
        },
        {
          title: "災害時応援協定",
          url: "https://www.city.sanda.lg.jp/kikikanri/ouenkyoutei.html"
        },
        {
          title: "さんだ防災・防犯メールに登録を!!",
          url: "https://www.city.sanda.lg.jp/kikikanri/bouhanmail.html"
        },
        {
          title: "河川水位情報等",
          url: "https://www.city.sanda.lg.jp/kikikanri/kasensuii.html"
        },
        {
          title: "風水害時の避難について",
          url: "https://www.city.sanda.lg.jp/kikikanri/huusuigaihinan.html"
        },
        {
          title: "防災・気象情報",
          url: "https://www.city.sanda.lg.jp/kikikanri/bousai-kisyoujouhou.html"
        },
        {
          title: "災害時応援協定",
          url: "https://www.city.sanda.lg.jp/kikikanri/ouenkyoutei.html"
        },
      ]
    };
  }

  render() {
    return(
      <div>
        <Typography>
          さんだ防災ノート Webアプリ版
        </Typography>
        <br></br>
        <NotificationList notifications={this.state.notifications}/>
        <br></br>
        <DownloadLinks/>
      </div>
    );
  }
}

export default Home;