
import './App.css';
import Home from './pages/home/Home'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Switch>
      <Route path='/search'>
          <h1>This is the search page</h1>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
