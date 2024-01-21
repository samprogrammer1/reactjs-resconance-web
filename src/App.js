import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop"; 
import AppBar from './layouts/AppBar';
import Home from './Home';
import Footer from './layouts/Footer';
import Gallery from './Gallery';

// Components
const NotFound = () => <div><h2>404 Not Found</h2></div>;

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <AppBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
