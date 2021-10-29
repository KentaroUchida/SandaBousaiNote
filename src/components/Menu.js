import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { titles } from "../components/Titles";
import { hints}   from "../components/Hints"

const drawerWidth = 350;

const styles = {
  root: {
    display: "flex",
  },
  drawer: {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
  appBar: {
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    marginLeft: { sm: `${drawerWidth}px` },
  },
  menuButton: {
    marginRight: 1,
    display: { xs: "block", sm: "none" },
  },
  helpButton: {
    marginLeft: 5,
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(props.now_index);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = [
    "/form",
    "/",
    "/instruction",
    "/jishin",
    "/koudouChart",
    "/Taiken",
    "/mada",
    "/izanigeru",
    "/bousaiGoods",
    "/foods",
    "/papaTaiken",
    "/souzou",
    "/otiru",
    "/toilet",
    "/daijobu",
    "/bousaiKaigi",
    "/oshirase",
    "/sandaHome",
    "/sandaOmoi",
    "/sandaMamaPapa",
    "/sandaKikenJissai",
    "/sandaTaiken",
    "/sandaMada",
    "/sandaIzaNigeru",
    "/sandaSandaBousai",
    "/sandaDaijobu",
    "/sandaGoods1",
    "/sandaGoods2",
    "/sandaFoods1",
    "/sandaFoods2",
    "/sandaToilet",
    "/sandaBousaikaigi",
    "/sandaBousaiSanpo",
  ];

  const drawer = (
    <>
      <Toolbar />
      <List component="nav">
        {titles.map((text, index) => (
          <Link
            to={links[index]}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Divider />
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemText
                primary={
                  String("ページ") + String(index) + String(".") + String(text)
                }
              />
            </ListItem>
          </Link>
        ))}
        <Divider />
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Grid justifyContent="space-between" alignItems="center" container>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: "white",
                  textShadow: "1px 1px 100px rgba(255, 255, 255, 0.66)",
                  boxShadow:
                    "inset 0 100px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19)",
                  borderBottom: "solid 2px #b5b5b5",
                }}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={styles.menuButton}
              >
                目次
              </Button>

              <Link
                to={links[(props.now_index + links.length - 1) % links.length]}
                key={(props.now_index + links.length - 1) % links.length}
              >
                <IconButton edge="end">
                  <ArrowBackIosNewIcon />
                </IconButton>
              </Link>

              <Typography marginRight="-12px"> {props.now_index} </Typography>

              <Link
                to={links[(props.now_index + 1) % links.length]}
                key={(props.now_index + 1) % links.length}
              >
                <IconButton edge="end">
                  <ArrowForwardIosIcon />
                </IconButton>{" "}
              </Link>

              <IconButton color="inherit" edge = "end" onClick = {handleClickOpen} sx={styles.helpButton}>
                <HelpOutlineIcon/>
              </IconButton> 
              <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"三田防災ノートP" + String(props.now_index)}
          <br />
          説明ページ
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div>
        {typeof hints[props.now_index] === "object" && hints[props.now_index].map((text, i) => {
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>確認しました</Button>
        </DialogActions>
      </Dialog>
              

            </div>
            <DownloadDialog />
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={styles.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": styles.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box sx={styles.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Box>
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": styles.drawerPaper,
          }}
          variant="permanent"
          //open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">{props.children}</Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//export default ResponsiveDrawer;

function DownloadDialog() {
  const [open, setOpen] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    if (failed) setFailed(false);
  };
  const downloadPDF = () => {
    setDownloading(true);
    setFailed(false);
    const body = { form: {}, card: {}, goods: {}, checkList: {} };
    [
      ["family", "familyList"],
      ["relatives", "relativeList"],
      ["facilities", "facilityList"],
    ].forEach((keys) => {
      const tmp = localStorage.getItem(keys[1]);
      body.form[keys[0]] = tmp ? JSON.parse(tmp) : [];
    });
    [
      ["home", "phone"],
      ["temporary", "P0Hinanbasyo"],
      ["disaster", "P0Shishitei"],
    ].forEach((keys) => {
      body.form[keys[0]] = localStorage.getItem(keys[1]);
    });
    const cardString = localStorage.getItem("P17Izanigeru");
    const cardTmp = cardString ? JSON.parse(cardString) : {};
    [
      ["flood", "suigai"],
      ["sediment", "dosya"],
      ["earthquake", "jishin"],
      ["fire", "kasai"],
    ].forEach((keys) => {
      body.card[keys[0]] = {};
      ["evacuation", "shelter"].forEach(
        (k, i) => (body.card[keys[0]][k] = cardTmp[keys[1] + (i + 1)])
      );
    });
    const clm = localStorage.getItem("checkListMore");
    if (clm) Object.assign(body.goods, JSON.parse(clm));
    const clh = localStorage.getItem("checkListHyakkin");
    if (clh) {
      const tmp = JSON.parse(clh);
      if (tmp.whistle) body.goods.whistle2 = true;
      Object.assign(body.goods, tmp);
    }
    const cln = localStorage.getItem("checkListNormally");
    if (cln) Object.assign(body.goods, JSON.parse(cln));
    const fl = localStorage.getItem("foodList");
    body.foods = fl ? JSON.parse(fl) : {};

    body.checkList.earthquake = localStorage.getItem("P15Earthquake");
    body.checkList.flood = localStorage.getItem("P15Flood");
    body.checkList.place = localStorage.getItem("P15Place");
    const clhm = localStorage.getItem("P15Home");
    if (clhm) Object.assign(body.checkList, JSON.parse(clhm));
    const clst = localStorage.getItem("P15Stock");
    if (clst) Object.assign(body.checkList, JSON.parse(clst));

    console.log(body);
    axios
      .post(
        "https://mfdxebawsi.execute-api.us-east-1.amazonaws.com/Prod/create",
        body
      )
      .then((res) => {
        console.log(res.data);
        return axios.get(res.data, {
          responseType: "blob",
          dataType: "binary",
        });
      })
      .then((res) => {
        const url = URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "bousai_note.pdf");
        document.body.appendChild(link);
        link.click();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setFailed(true);
      })
      .finally(() => {
        setDownloading(false);
      });
  };

  return (
    <>
      <IconButton color="inherit" edge="end" onClick={handleClickOpen}>
        <PrintIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          さんだ防災ノート
          <br />
          PDFダウンロード
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            防災ノートのPDF版をダウンロードすることができます。
            <br />
            PDFには、本Webアプリに保存された情報が書き込まれます。印刷したいときなどにご利用ください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={downloadPDF} autoFocus>
            {downloading ? "ダウンロード中" : "ダウンロード"}
          </Button>
        </DialogActions>
        {failed && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              サーバエラーにより、ダウンロードに失敗しました。
              <br />
              お手数ですが、こちらのリンクからダウンロードしてください。
              <br />
              ** ここにさんだ防災ノートのURLが書かれます **
            </DialogContentText>
          </DialogContent>
        )}
        {downloading && <LinearProgress />}
      </Dialog>
    </>
  );
}

export { ResponsiveDrawer as Menu};
