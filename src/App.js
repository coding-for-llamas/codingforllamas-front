import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './containers/Nav/Navbar';
import AppTemplate from './components/App-Main';
import FourOhFour from './containers/404';
import Footer from './containers/Footer/Footer';

const App = () => (
  <div id="App" className="App Site">
    <Router>
      <Navbar />
      <div className="siteContent">
        <Switch>
          <Route exact path="/" component={AppTemplate} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
