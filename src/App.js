
import './App.css';
import Home from './pages/home/Home'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './pages/search-page/SearchPage'


function App() {
  return (
    <div className="app">
      <Switch>
      <Route path='/search'>
          <SearchPage/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
