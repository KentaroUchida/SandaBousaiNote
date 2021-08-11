import { useState } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import Home from "./pages/Home";

import Form from "./pages/P0Form";
import Menu from "./components/Menu";
import { Jishin } from "./pages/P3Jishin";
import { Taiken } from "./pages/P5Taiken";
import P8Goods from "./pages/P8Goods";
import { P10TaikenPapa } from "./pages/P10TaikenPapa";
import { P11KikenSouzou } from "./pages/P11KikenSouzou";
import { P12KikenJissai } from "./pages/P12KikenJissai";

const paths = [
  "/form",
  "/",
  "/jishin",
  "/taiken",
  "/goods",
  "/taikenPapa",
  "/souzou",
  "/jissai",
];

const pages = [
  <Form />,
  <Home />,
  <Jishin />,
  <Taiken />,
  <P8Goods />,
  <P10TaikenPapa />,
  <P11KikenSouzou />,
  <P12KikenJissai />,
];

function App() {
  const [pageIndex, setPageIndex] = useState(1);

  const ContentPage = ({ index }) => {
    const history = useHistory();
    const incrementPage = (pageIndex) => (pageIndex + 1) % pages.length;
    const decrementPage = (pageIndex) => (pageIndex - 1) % pages.length;
    const handleSwipe = useSwipeable(
      {
        onSwipedRight: (_) => {
          history.push(paths[incrementPage(pageIndex)]);
          setPageIndex((pageIndex) => incrementPage(pageIndex));
        },
        onSwipedLeft: (_) => {
          history.push(paths[decrementPage(pageIndex)]);
          setPageIndex((pageIndex) => decrementPage(pageIndex));
        },
      },
      [history]
    );
    return (
      <Route exact path={paths[index]} key={index}>
        <div {...handleSwipe}>{pages[index]}</div>
      </Route>
    );
  };

  return (
    <BrowserRouter>
      <Menu title="Home">
      {pages.map((_, i) => (
        <ContentPage index={i} />
      ))}
      </Menu>
    </BrowserRouter>
  );
}

export default App;
