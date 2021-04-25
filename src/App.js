import React from "react";
import './App.scss';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' />
      </Switch>
      <ItemListContainer />
    </Router>
  );
}

export default App;
