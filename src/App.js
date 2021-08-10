import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Menu from './Menu'
import Form from './Form'

import {Jishin} from './Jishin/Main'
import {Taiken} from './Taiken/Main'
import {P10TaikenPapa} from './P10TaikenPapa/Main'

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
          <Route exact path='/P10TaikenPapa'>
            <P10TaikenPapa/>
          </Route>
          <Route exact path='/form'>
            <Form/>
          </Route>
        </Menu>
      </BrowserRouter>
  )
}

export default App;
