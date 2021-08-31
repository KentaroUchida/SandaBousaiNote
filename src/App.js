import { useEffect } from "react";
import { BrowserRouter, Route, useHistory, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import {useMediaQuery} from "@material-ui/core";

import Home from "./pages/Home";
import Instruction from "./pages/Instruction";
import P0Form from "./pages/P0Form";
import Menu from "./components/Menu";
import { P3Jishin } from "./pages/P3Jishin";
import P4Yurega from "./pages/P4Yurega";
import { P5Taiken } from "./pages/P5Taiken";
import P6Mada from "./pages/P6Mada";
import { P7Izanigeru } from "./pages/P7Izanigeru";
import P8Goods from "./pages/P8Goods";
import P9Foods from "./pages/P9Foods";
import { P10TaikenPapa } from "./pages/P10TaikenPapa";
import { P11KikenSouzou } from "./pages/P11KikenSouzou";
import { P12KikenJissai } from "./pages/P12KikenJissai";
import { P13Toilet } from "./pages/P13Toilet";
import { P14Daijobu } from "./pages/P14Daijobu";
import P15Bousaikaigi from "./pages/P15Bousaikaigi";
import { Top } from "./pages/Top";
import {SwipeNotifier} from './components/SwipeNotifier'

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
];

const titles = [
  "緊急時のわがやの情報",
  "トップ",
  "使い方",
  "グラっと地震が来たら！",
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
];

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
    const matches = useMediaQuery('(max-width:600px)')
    return (
      <Route exact path={paths[index]} key={index}>
        {
          index === 1 && matches && <SwipeNotifier/>
        }
        <Menu title={titles[index]}>
          <div {...handleSwipe}>{pages[index]}</div>
        </Menu>
      </Route>
    );
  };

  const ScrollToTop = () =>{
    const { pathname } = useLocation()

    useEffect(()=>{
      window.scrollTo(0,0)
    }, [pathname])

    return null
  }

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
    <BrowserRouter>
      <ScrollToTop/>
      {pages.map((_, i) => (
        <ContentPage index={i} key={i.toString()}/>
      ))}
    </BrowserRouter>
  );
}

export default App;
