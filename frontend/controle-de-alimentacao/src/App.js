import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Historico from './pages/historico/historico';
import Sobre from './pages/sobre/sobre';

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="App-navbar">
          <Link className="App-abas-primeiro" to="/">Sobre</Link>
          <Link className="App-abas-primeiro" to="historico">Historico</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/historico">
          <Historico />
        </Route>
        <Route path="/">
          <Sobre />
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
