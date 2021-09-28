import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrintIcon from "@mui/icons-material/Print";
import WarningIcon from "@mui/icons-material/WarningSharp";
import HomeIcon from "@mui/icons-material/HomeSharp";
import DirectionsRunSharpIcon from "@mui/icons-material/DirectionsRunSharp";
import { makeStyles} from "@mui/styles";
import { useTheme} from "@mui/material/styles"
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";




const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    //backgroundColor: 'white !important',
    //activeBackgroundColor: 'white !important',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));




export default function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex,setSelectedIndex] = React.useState(props.now_index);
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

  const icons = [
    <HomeIcon />,
    <WarningIcon />,
    <WarningIcon />,
    <DirectionsRunSharpIcon />,
    <DirectionsRunSharpIcon />,
    <WarningIcon />,
    <HomeIcon />,
    <WarningIcon />,
    <DirectionsRunSharpIcon />,
    <DirectionsRunSharpIcon />,
    <WarningIcon />,
    <HomeIcon />,
    <WarningIcon />,
    <DirectionsRunSharpIcon />,
    <DirectionsRunSharpIcon />,
    <WarningIcon />,
    <WarningIcon />,
  ];

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
  ];
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List component="nav">
        {[
          "緊急時のわがやの情報",
          "トップ",
          "使い方",
          "グラっと地震が来たら！いのちを守る！できるだけケガをせず生き残る！",
          "揺れがおさまったら",
          "ほくせつママ＆パパの体験談",
          "まだ大丈夫は危険!",
          "いざ逃げる!",
          "防災グッズ",
          "食べ物がない!?",
          "パパの体験談",
          "どんな危険が起こる？",
          "落ちる! 倒れる! 動く!",
          "トイレが大変!",
          "私は大丈夫って思ってない?",
          "家族で防災カイギ",
          "お知らせ",
        ].map((text, index) => (
          <Link   to={links[index]} key={index} style={{ textDecoration: 'none' }}  >
            <Divider />
            <ListItem button selected={selectedIndex === index}  onClick={(event) => handleListItemClick(event,index)} handleDrawerClose >
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />

            </ListItem>
          </Link>
        ))}
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: mobileOpen,
        })}
      >
        <Toolbar>
          <Grid justifyContent="space-between" alignItems="center" container>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: "white",
                  textShadow: "1px 1px 100px rgba(255, 255, 255, 0.66)",
                  boxShadow: "inset 0 100px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19)",
                  borderBottom: "solid 2px #b5b5b5"
              }}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, mobileOpen && classes.hide)}

              >
                目次
              </Button>
              <Typography variant="h6" noWrap style={{}}>
                {props.title}
              </Typography>
            </div>
            <IconButton
              color="inherit"
              edge="end"
              // onClick={handleDrawerOpen}
            >
              <PrintIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            //open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
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
