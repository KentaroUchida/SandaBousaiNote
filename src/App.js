import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import Home from "./pages/Home";

import P0Form from "./pages/P0Form";
import Menu from "./components/Menu";
import {P3Jishin} from "./pages/P3Jishin";
import P4Yurega  from "./pages/P4Yurega";
import {P5Taiken} from "./pages/P5Taiken";
import P6Mada from './pages/P6Mada';
import {P7Izanigeru} from "./pages/P7Izanigeru";
import P8Goods from "./pages/P8Goods";
import P9Foods from "./pages/P9Foods";
import {P10TaikenPapa} from "./pages/P10TaikenPapa";
import {P11KikenSouzou} from "./pages/P11KikenSouzou";
import {P12KikenJissai} from "./pages/P12KikenJissai";
import {P13Toilet} from "./pages/P13Toilet";
import {P14Daijobu} from './pages/P14Daijobu';
import P15Bousaikaigi from "./pages/P15Bousaikaigi";


const paths = [
  "/form",
  "/", 
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
];

const pages = [
  <P0Form />,
  <Home />,
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
];

const titles = [
  "緊急時のわがやの情報",
  "Home",
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
  //"家族で防災カイギ",
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
    return (
      <Route exact path={paths[index]} key={index}>
        <Menu title = {titles[index]}>
          <div {...handleSwipe}>{pages[index]}</div>
        </Menu>
      </Route>
    );
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
    <BrowserRouter>
      {pages.map((_, i) => (
        <ContentPage index={i} />
      ))}
    </BrowserRouter>
  );
}

export default App;