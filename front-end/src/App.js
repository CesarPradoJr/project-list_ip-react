//Arquivo onde centralizamos as rotas de todos os botões do nosso menu
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/Lista';
import List_filtered from './pages/Lista_Filtrada';
import List_exclude from './pages/List_Exclude';
import Exclude from './pages/Exclude';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/list' exact component={List} />
          <Route path='/filtered_list' component={List_filtered} />
          <Route path='/exclude' component={Exclude} />
          <Route path='/exclude_list' component={List_exclude} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
