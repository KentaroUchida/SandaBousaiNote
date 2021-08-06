import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ListSubheader } from '@material-ui/core';

function NotificationList(props) {
  const lastIndex = props.notifications.size-1;
  return (
    <List
      component="nav"
      aria-label="main"
      subheader={
        <ListSubheader component="div">
          三田市からのお知らせ
        </ListSubheader>
      }
    >
      {props.notifications.map((n,i) => {
        return (
          <div>
            <Link href={n.url}>
              <ListItem>{n.title}</ListItem>
            </Link>
            <Divider/>
          </div>
        );
      })}
    </List>
  );
}

function DownloadLinks() {
  return (
    <div className="downloadLinks">
      <Paper>
        <Grid container spacing={2} alignContent="center">
          <Grid item>
            <Typography>ひょうご防災ネット</Typography>
            <Avatar variant="rounded" alt="ひょうご防災ネット アプリアイコン" src="/img/hyogo_bousai_icon.png"/>
          </Grid>

          <Grid item alignContent="center" style={{width: "50%"}}>
            <Container fixed>
            <Grid item>
              <Link href="https://play.google.com/store/apps/details?id=net.bosai.appli&hl=ja&gl=US">
                <img src="/img/hyogo_bousai_google_play_badge.png" alt="Google Playリンク" style={{width: "100%"}}/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://apps.apple.com/us/app/%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E9%98%B2%E7%81%BD%E3%83%8D%E3%83%83%E3%83%88/id1458839848?itsct=apps_box_link&itscg=30200">
                <img src="/img/hyogo_bousai_app_store_black.svg" alt="App Storeリンク" style={{width: "100%"}}/>
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
      ]
    };
  }

  render() {
    return(
      <div>
        Home
        <Paper>
          <NotificationList notifications={this.state.notifications}/>
        </Paper>
        <br></br>
        <DownloadLinks/>
      </div>
    );
  }
}

export default Home;