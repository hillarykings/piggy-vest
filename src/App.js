import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route,  } from 'react-router-dom';

import Header from './components/header/header.component';
import HeroHolder from './components/heroholder/heroholder.component';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Header />
        <Route />
      </BrowserRouter>
      </header>
      <HeroHolder />
    </div>
  );
}

export default App;
