import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header/Header.js';
import Menubar from './menu/Menubar.js';
import Main from './main/Main.js';
import PlayerCard from './main/table/PlayerCard.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/player/:id">
        <PlayerCard />
      </Route>
      <Route exact path="/">
        <div>
          <Header />
          <Menubar />
          <Main />
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
