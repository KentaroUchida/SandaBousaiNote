import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import Home from "./pages/Home";

import Form from "./pages/P0Form";
import Menu from "./components/Menu";
import { Jishin } from "./pages/P3Jishin";
import P4Yurega  from "./pages/P4Yurega";
import { Taiken } from "./pages/P5Taiken";
import P6Mada from './pages/P6Mada';
import { P7Izanigeru } from "./pages/P7Izanigeru";
import P8Goods from "./pages/P8Goods";
import { P10TaikenPapa } from "./pages/P10TaikenPapa";
import { P11KikenSouzou } from "./pages/P11KikenSouzou";
import { P12KikenJissai } from "./pages/P12KikenJissai";
import { P14Daijobu } from './pages/P14Daijobu'
import { P13Toilet } from "./pages/P13Toilet";
import { PinDropSharp } from "@material-ui/icons";

const paths = [
  "/form",
  "/",
  "/jishin",
  "/yurega",
  "/taiken",
  "/mada",
  "/izanigeru",
  "/goods",
  "/taikenPapa",
  "/souzou",
  "/jissai",
  "/daijobu",
  "/toilet",
];

const pages = [
  <Form />,
  <Home />,
  <Jishin />,
  <P4Yurega />,
  <Taiken />,
  <P6Mada />,
  <P7Izanigeru />,
  <P8Goods />,
  <P10TaikenPapa />,
  <P11KikenSouzou />,
  <P12KikenJissai />,
  <P14Daijobu />,
  <P13Toilet />,
];

const titles = [
  "入力フォーム",
  "Home",
  "地震が来たら！",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
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
