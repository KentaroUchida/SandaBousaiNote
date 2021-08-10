import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Menu from './Menu'
import Form from './Form'

import {Jishin} from './Jishin/Main'
import {Taiken} from './Taiken/Main'
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
