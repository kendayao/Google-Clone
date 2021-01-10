
import './App.css';
import Home from './pages/home/Home'
import {Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
