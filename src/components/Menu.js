import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrintIcon from "@mui/icons-material/Print";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import {titles} from "../components/Title";

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
  hide: {
    display: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  content: {
    flexGrow: 1,
    p: 3,
  },
};


export default function ResponsiveDrawer(props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(props.now_index);
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
  ];

  const drawer = (
    <div>
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
              <ListItemText primary={String("ページ")+String(index)+String(".")+String(text)} />
            </ListItem>
          </Link>
        ))}
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const downloadPDF = async () => {
    const body = {
      form: {
        family: [],
        relatives: [],
        facilities: [],
        home: '',
        temporary: '',
        disaster: '',
        tsunami: '',
      },
      card: {
        flood:      {evacuation: '', shelter: ''},
        sediment:   {evacuation: '', shelter: ''},
        earthquake: {evacuation: '', shelter: ''},
        fire:       {evacuation: '', shelter: ''}
      },
      goods: {
        water: false,
        coin: false,
        chocolate_and_candy: false,
        battery: false,
        handkerchief: false,
        whistle: false,
        aid: false,
        diapers: false,
        address: false,
        poli: false,
        pin: false,
        picnic_sheet: false,
        mask: false,
        dentifrice_sheet: false,
        socks: false,
        scissor: false,
        bandage: false,
        whistle2: false,
        wrap: false,
        toilet: false,
        tape: false,
        pillow: false,
        glasses: false,
        wet_tissue: false,
        light: false,
        for_children: false,
        essential_oil: false,
      },
      foods: {
        water: false,
        can: false,
        soup: false,
        dryfood: false,
        stove: false,
        poli: false,
      },
      checkList: {
        earthquake: '',
        flood: '',
        place: '',
        fixFurniture: false,
        glass: false,
        storage: false,
        arrangeFurniture: false,
        meal: false,
        water: false,
        stove: false,
        gas: false,
        toilet: false,
      },
    };
    // コードが汚い
    const data = await (() => new Promise((resolve, reject) => {
      try {
        const faml = localStorage.getItem('familyList');
        if(faml) body.form.family = JSON.parse(faml);
        const rl = localStorage.getItem('relativeList');
        if(rl) body.form.family = JSON.parse(rl);
        const facl = localStorage.getItem('facilityList');
        if(facl) body.form.family = JSON.parse(facl);
        const home = localStorage.getItem('phone');
        if(home) body.form.home = home;
        const temporary = localStorage.getItem('ichiji');
        if(temporary) body.form.temporary = temporary;
        const disaster = localStorage.getItem('saigai');
        if(disaster) body.form.disaster = disaster;
        const tsunami = localStorage.getItem('tsunami');
        if(tsunami) body.form.tsunami = tsunami;

        const floodE = localStorage.getItem('suigai1');
        if(floodE) body.card.flood.evacuation = floodE;
        const floodS = localStorage.getItem('suigai2');
        if(floodS) body.card.flood.shelter = floodS;
        const sedimentE = localStorage.getItem('dosha1');
        if(sedimentE) body.card.sediment.evacuation = sedimentE;
        const sedimentS = localStorage.getItem('dosha2');
        if(sedimentS) body.card.sediment.shelter = sedimentS;
        const earthquakeE = localStorage.getItem('jishin1');
        if(earthquakeE) body.card.earthquake.evacuation = earthquakeE;
        const earthquakeS = localStorage.getItem('jishin2');
        if(earthquakeS) body.card.earthquake.shelter = earthquakeS;
        const fireE = localStorage.getItem('kasai1');
        if(fireE) body.card.fire.evacuation = fireE;
        const fireS = localStorage.getItem('kasai2');
        if(fireS) body.card.fire.shelter = fireS;

        const clm = localStorage.getItem('checkListMore');
        if(clm) Object.assign(body.goods, JSON.parse(clm));
        const clh = localStorage.getItem('checkListHyakkin');
        if(clh) {
          const tmp = JSON.parse(clh);
          if(tmp.whistle) body.goods.whistle2 = true;
          Object.assign(body.goods, tmp);
        }
        const cln = localStorage.getItem('checkListNormally');
        if(cln) Object.assign(body.goods, JSON.parse(cln));

        const fl = localStorage.getItem('foodList');
        if(fl) Object.assign(body.foods, JSON.parse(fl));

        const cleq = localStorage.getItem('P15Earthquake');
        if(cleq) body.checkList.earthquake = cleq;
        const clfl = localStorage.getItem('P15Flood');
        if(clfl) body.checkList.flood = clfl;
        const clpl = localStorage.getItem('P15Place');
        if(clpl) body.checkList.place = clpl;
        const clhm = localStorage.getItem('P15Home');
        if(clhm) Object.assign(body.checkList, JSON.parse(clhm));
        const clst = localStorage.getItem('P15Stock');
        if(clst) Object.assign(body.checkList, JSON.parse(clst));
        console.log(body);
        axios.post('https://mfdxebawsi.execute-api.us-east-1.amazonaws.com/Prod/create', body).then(res => {
          console.log(res.data);
          axios.get(res.data, {
            responseType: 'blob',
            dataType: 'binary',
          }).then(res => {
            console.log(res);
            resolve(res.data);
          });
        }).catch(err => {
          console.log(err);
        });
      } catch(err) {
        reject(err);
      }
    }))();

    const url = URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        'bousai_note.pdf'
    );
    document.body.appendChild(link);
    link.click();
  };

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
              <Typography variant="h6" noWrap style={{}}>
                {"三田防災ノート.P"+String(props.now_index)}
              </Typography>
            </div>
            <IconButton
              color="inherit"
              edge="end"
              onClick={downloadPDF}
            >
              <PrintIcon />
            </IconButton>
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
      <Box component="main" sx={styles.content}>
        <Toolbar />
        {props.children}
      </Box>
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
