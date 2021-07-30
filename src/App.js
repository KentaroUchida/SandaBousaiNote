import { BrowserRouter, Route } from 'react-router-dom';

//import Home from './Home'
//import Form from './Form'
import {Jishin} from './Jishin/Main'

function App() {
  return (
   <>
      <BrowserRouter>
        <Route exact path='/'>
          <Jishin/>
        </Route>
        <Route exact path='/form'>
          <Jishin/>
        </Route>
        <Route exact path='/jishin'>
          <Jishin/>
        </Route>
      </BrowserRouter>
   </> 
  )
}

export default App;
