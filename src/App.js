import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch , Redirect} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop"; 
import AppBar from './layouts/AppBar';
import Home from './Home';
import Footer from './layouts/Footer';
import Gallery from './Gallery';
import NotFound from './NotFound';
import LoadingScreen from './components/LoaderScreen';
import TypeEvent from './TypeEvent';
import Accommodation from './Accommodation';


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
          <Route path="/events/:type" component={TypeEvent} />
          <Route path="/accommodation" component={Accommodation} />

          {/* Custom 404 page */}
          <Route path="/404" component={NotFound} /> 
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
