import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Form from './pages/P0Form'
import Menu from './components/Menu'
import { Jishin } from './pages/P3Jishin'
import { Taiken } from './pages/P5Taiken'
import {P11KikenSouzou} from './pages/P11KikenSouzou'

function App() {
  return (
      <BrowserRouter>
        <Menu title="Home">
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/jishin'>
            <Jishin/>
          </Route>
          <Route exact path='/taiken'>
            <Taiken/>
          </Route>
          <Route exact path='/form'>
            <Form/>
          </Route>
          <Route exact path='/souzou'>
            <P11KikenSouzou/>
          </Route>
        </Menu>
      </BrowserRouter>
  )
}

export default App;
