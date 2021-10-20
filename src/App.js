import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery, Box, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import {
  Home,
  Top,
  Instruction,
  P0Form,
  P3Jishin,
  P4Yurega,
  P5Taiken,
  P6Mada,
  P7Izanigeru,
  P8Goods,
  P9Foods,
  P10TaikenPapa,
  P11KikenSouzou,
  P12KikenJissai,
  P13Toilet,
  P14Daijobu,
  P15Bousaikaigi,
  SandaP5MamaPapa,
  SandaP7TaikenPapa,
  SandaP9IzaNigeru,
  SandaP10SandaBousai,
  SandaP11Daijobu,
} from "./pages";
import { Menu, SwipeNotifier, titles } from "./components";
import { CustomThemeA } from "./components/Theme";

const paths = [
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
  "/bousaikaigi",
  "/oshirase",
  "/sandaMamaPapa",
  "/sandaTaiken",
  "/sandaIzaNigeru",
  "/sandaSandaBousai",
  "/sandaDaijobu",
];

const pages = [
  <P0Form />,
  <Top />,
  <Instruction />,
  <P3Jishin />,
  <P4Yurega />,
  <P5Taiken />,
  <P6Mada />,
  <P7Izanigeru />,
  <P8Goods />,
  <P9Foods />,
  <P10TaikenPapa />,
  <P11KikenSouzou />,
  <P12KikenJissai />,
  <P13Toilet />,
  <P14Daijobu />,
  <P15Bousaikaigi />,
  <Home />,
  <SandaP5MamaPapa />,
  <SandaP7TaikenPapa/>,
  <SandaP9IzaNigeru/>,
  <SandaP10SandaBousai/>,
  <SandaP11Daijobu/>,
];

const styles = {
  content: {
    minHeight: "100vh",
    flexGrow: 1,
    p: 3,
  },
};

function App() {
  const ContentPage = ({ index }) => {
    const history = useHistory();
    const incrementPage = (pageIndex) => (pageIndex + 1) % pages.length;
    const decrementPage = (pageIndex) =>
      (pageIndex + pages.length - 1) % pages.length;
    const searchIndex = (path) => paths.findIndex((el) => el === path);
    const handleSwipe = useSwipeable(
      {
        onSwipedRight: (_) => {
          history.push(
            paths[decrementPage(searchIndex(history.location.pathname))]
          );
        },
        onSwipedLeft: (_) => {
          history.push(
            paths[incrementPage(searchIndex(history.location.pathname))]
          );
        },
      },
      [history]
    );
    const matches = useMediaQuery("(max-width:600px)");
    return (
      <Route exact path={paths[index]} key={index}>
        {index === 1 && matches && <SwipeNotifier />}
        <Menu title={titles[index]} now_index={index}>
          <Box {...handleSwipe} sx={styles.content}>
            <Toolbar />
            {pages[index]}
          </Box>
        </Menu>
      </Route>
    );
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    // <BrowserRouter>
    //   <Menu title="Home">
    //     <Route exact path='/'>
    //       <Home/>
    //     </Route>
    //     <Route exact path='/jishin'>
    //       <Jishin/>
    //     </Route>
    //     <Route exact path='/taiken'>
    //       <Taiken/>
    //     </Route>
    //     <Route exact path='/taikenPapa'>
    //       <P10TaikenPapa/>
    //     </Route>
    //     <Route exact path='/form'>
    //       <Form/>
    //     </Route>
    //     <Route exact path='/souzou'>
    //       <P11KikenSouzou/>
    //     </Route>
    //     <Route exact path="/jissai">
    //       <P12KikenJissai/>
    //     </Route>
    //     <Route exact path='/daijobu'>
    //       <P14Daijobu/>
    //     </Route>
    //   </Menu>
    // </BrowserRouter>
    <EmotionThemeProvider theme={CustomThemeA}>
      <ThemeProvider theme={CustomThemeA}>
        <BrowserRouter>
          <ScrollToTop />
          {pages.map((_, i) => (
            <ContentPage index={i} key={i.toString()} />
          ))}
        </BrowserRouter>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}

export default App;
