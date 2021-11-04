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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { titles } from "../components/Titles";
import { hints } from "../components/Hints";

const drawerWidth = 350;

const styles = {
  root: {
    display: "flex",
  },
  main: {
    width: { sm: `calc(100vw - ${drawerWidth}px - 15px)` },
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
    "/",
    "/instruction",
    "/sandaOmoi",
    "/sandaJishin",
    "/sandaKoudouChart",
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
    "/sandaForm",
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
                  String("ページ") + String(index) + String(". ") + String(text)
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
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{
                  backgroundColor: "white",
                  textShadow: "1px 1px 100px rgba(255, 255, 255, 0.66)",
                  boxShadow:
                    "inset 0 100px 0 rgba(255,255,255,0.5), 0 1px 1px rgba(0, 0, 0, 0.19)",
                  borderBottom: "solid 1px #b5b5b5",
                }}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={styles.menuButton}
              >
                <b>目次</b>
              </Button>
            </Grid>

            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Link
                    to={
                      links[(props.now_index + links.length - 1) % links.length]
                    }
                    key={(props.now_index + links.length - 1) % links.length}
                  >
                    <IconButton edge="end">
                      <ArrowBackIcon />
                    </IconButton>
                  </Link>
                </Grid>

                <Grid item>
                  <Typography display="inline" color="primary" sx={{ml:1.8}}>
                    {props.now_index < 10 ? "0" : ""}
                  </Typography>
                  <Typography display="inline">
                    {props.now_index}
                    {"ページ"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Link
                    to={links[(props.now_index + 1) % links.length]}
                    key={(props.now_index + 1) % links.length}
                  >
                    <IconButton edge="end">
                      <ArrowForwardIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              {hints[props.now_index][0] === "NULL" ? (
                <IconButton
                  color="inherit"
                  edge="end"
                  sx={{ mr: "1px" }}
                  disabled
                >
                  <HelpOutlineIcon fontSize="large" color="primary" />
                </IconButton>
              ) : (
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleClickOpen}
                  sx={{ mr: "1px" }}
                >
                  <HelpOutlineIcon fontSize="large" />
                </IconButton>
              )}
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
                  <div id="alert-dialog-description">
                    {typeof hints[props.now_index] === "object" &&
                      hints[props.now_index].map((text, i) => {
                        return (
                          <ListItem key={i}>
                            <ListItemIcon>
                              <FiberManualRecordIcon />
                            </ListItemIcon>
                            {//<ListItemText primary={text} />}
                      }
                            {text}
                          </ListItem>
                        );
                      })}
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>確認しました</Button>
                </DialogActions>
              </Dialog>
              <DownloadDialog />
            </Grid>
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
      <Box component="main" sx={styles.main}>{props.children}</Box>
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

function DownloadDialog() {
  const [open, setOpen] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    if(downloading) setDownloading(false);
    if(failed) setFailed(false);
  };
  const downloadPDF = () => {
    setDownloading(true);
    setFailed(false);

    const body = {
      form: {
        family: JSON.parse(localStorage.getItem('familyList') || '{}'),
        // TODO: 親戚(relatives)と知人(acquaintance)のフォームを直して、ここに
        //       localStorageの読み込み処理を追記する
        shelter: localStorage.getItem('P20Hinanbasyo'),
        specified: localStorage.getItem('P20Shishitei'),
      },
      consciousness: JSON.parse(localStorage.getItem('P11Sense') || '{}'),
      goods:{
        zeroth: JSON.parse(localStorage.getItem('checkListZeroth') || '{}'),
        first: JSON.parse(localStorage.getItem('checkListFirst') || '{}'),
        more: JSON.parse(localStorage.getItem('checkListMore') || '{}'),
        second: JSON.parse(localStorage.getItem('checkListSecond') || '{}'),
        hyakkin: JSON.parse(localStorage.getItem('checkListHyakkin') || '{}'),
      }, foods: {
        foodList: JSON.parse(localStorage.getItem('foodList') || '{}'),
        cookingList: JSON.parse(localStorage.getItem('cookingList') || '{}'),
      }, card: {
        shelters: JSON.parse(localStorage.getItem('P18Shelters') || '{}'),
        place: localStorage.getItem('P18Place'),
        home: JSON.parse(localStorage.getItem('P18Home') || '{}'),
        stock: JSON.parse(localStorage.getItem('P18Stock') || '{}'),
      }
    };
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
        <PrintIcon fontSize="large" />
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

export { ResponsiveDrawer as Menu };
