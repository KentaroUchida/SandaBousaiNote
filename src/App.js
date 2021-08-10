import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Menu from './components/Menu'
import Form from './pages/P0Form'
import { Jishin } from './pages/P3Jishin'
import { Taiken } from './pages/P5Taiken'

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
        </Menu>
      </BrowserRouter>
  )
}

export default App;
