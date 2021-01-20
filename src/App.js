import './App.css';
import Home from './pages/home/Home'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './pages/search-page/SearchPage'
import Mail from './pages/mail/Mail'
import MailHeader from './components/mail-header/MailHeader'
import MailHeaderSide from './components/mail-header-side/MailHeaderSide'

function App() {
  return (
    <div className="app">
      <Switch>
      <Route path='/mail'>
          <MailHeader/>
          <MailHeaderSide/>
        </Route>
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
