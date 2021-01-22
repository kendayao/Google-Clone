import './App.css';
import Home from './pages/home/Home'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './pages/search-page/SearchPage'
import Mail from './pages/mail/Mail'
import MailHeader from './components/mail-header/MailHeader'
import MailBody from './components/mail-body/MailBody'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/mail/:mailId'>
          <MailHeader/>
          <MailBody/>
        </Route>
      <Route path='/mail'>
          <MailHeader/>
          <MailBody/>
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
