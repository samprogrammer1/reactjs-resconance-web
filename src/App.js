import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppBar from "./layouts/AppBar";
import Home from "./Home";
import Footer from "./layouts/Footer";
import Gallery from "./Gallery";
import LoadingScreen from "./components/LoaderScreen";
import sports from "./sports";
import technical from "./technical";
import cultural from "./cultural";

// Components
const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
  </div>
);
// const s =
const App = () => {
  return (
    <>
      <LoadingScreen />
      <Router>
        <div>
          <ScrollToTop />
          <AppBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/sports" component={sports} />
            <Route path="/technical" component={technical} />
            <Route path="/cultural" component={cultural} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
