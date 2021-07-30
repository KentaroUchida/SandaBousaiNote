import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
//import Form from './Form'
import Menu from './Menu'
import Menu2 from './Menu2'
//import Jishin from './Jishin'

function App() {
  return (
    //<div className="App">
    //  <BrowserRouter>
    //    <Route exact path='/'>
    //      <Home/>
    //      <Menu/>
    //    </Route>
    //    <Route exact path='/form'>
    //      <Form/>
    //        <Menu/>
    //    </Route>
    //    <Route exact path='/jishin'>
    //      <Jishin/>
    //        <Menu/>
    //    </Route>
    //  </BrowserRouter>
    //</div>

    //大事なとこ
    //<div className="App">
    //  <Home>
    //    <Menu title="Home"/>
    //  </Home>
    //</div>

    <div className="App">
      <Menu title="Home">
        <Home/>
      </Menu>
    </div>
  );
}

export default App;
