import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import Menu from './Menu'
import Form from './Form'

import {Jishin} from './Jishin/Main'

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
          <Route exact path='/form'>
            <Form/>
          </Route>
        </Menu>
      </BrowserRouter>
  )
}

export default App;
