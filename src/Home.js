import AppBar from "./layouts/AppBar";
import banner from "./assets/img/main-banner.png";

import TimeCounter from "./components/TimeCounter";
import EventsPoster from "./components/EventsPoster";
import About from "./components/About";
import EventsList from "./components/EventsList";
import Gallery from "./components/Gallery";
import Footer from "./layouts/Footer";
import { useEffect, useState } from "react";
function Home() {
  
  const [isLoading , setIsLoader] = useState(true);
  const [data , setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_GET_API);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();
      setData(result.data);
      setIsLoader(false)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  },[])

  return (
    isLoading ? <div
      className="container"
    >
      <h2>Coming Soon</h2>
    </div> : <div className="App">
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
      <EventsPoster 
        posterData={data.slider_data} 
        image_path={data.image_path}
      />
    </section>
    
    
    <About />
    <EventsList
      event_poster={data.event_type_list}
    />
    <Gallery />
  </div>
    
  );
}

export default Home;
