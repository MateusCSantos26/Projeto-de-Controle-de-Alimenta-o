import './App.css';
import logo from './ControledeAlimentação.gif';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Historico from './pages/historico/historico';
import Sobre from './pages/sobre/sobre';
import Info from './pages/info/info';

function App() {
  return (
    <Router>
      <header className="App-header">
      <img src={logo} className="Logo" />
      
        <nav class= "navMenu">
          <Link className="App-abas-primeiro" to="/">Adicionar alimentos</Link>
          <Link className="App-abas-primeiro" to="historico">Histórico</Link>
          <Link className="App-abas-primeiro" to="info">Informações</Link>
        </nav>
        
      </header>
      <Switch>
        
        <Route path="/historico">
          <Historico />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Sobre />
      </Route>
      </Switch>
      
    </Router>  
  );
}

export default App;
