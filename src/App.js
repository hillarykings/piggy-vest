import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route,  } from 'react-router-dom';

import Header from './components/header/header.component';
import HeroHolder from './components/heroholder/heroholder.component';
import Promotional from './components/promotional/promotional.component';
import HowItWorks from './components/howitworks/howitworks.component';
import { SaverOfTheMonth } from './components/saverofthemonth/saverofthemonth.component';
import { VerifiedCustomerstories } from './components/verifiedcustomerstories/verifiedcustomerstories.component';
import Footer from './components/footer/footer.component';



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
      <Promotional />
      <HowItWorks />
      <SaverOfTheMonth />
      <VerifiedCustomerstories />
      <Footer />
    </div>
  );
}

export default App;
