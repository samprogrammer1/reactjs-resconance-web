import AppBar from "./layouts/AppBar";
import banner from "./assets/img/main-banner.png";

import TimeCounter from "./components/TimeCounter";
import EventsPoster from "./components/EventsPoster";
import About from "./components/About";
import EventsList from "./components/EventsList";
import Gallery from "./components/Gallery";
import Footer from "./layouts/Footer";

function Home() {
  return (
    <div className="App">
      <section id="home">
        <div className="home-container">
          <img className="home-page-banner" src={banner} alt="image" />
        </div>
        <div className="space">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <TimeCounter />
        <EventsPoster />
      </section>
      
      
      <About />
      <EventsList />
      <Gallery />
      
      
      
      
      
    </div>
  );
}

export default Home;
