import AppBar from "./layouts/AppBar";
import banner from "./assets/img/BANNER.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <AppBar />
      <section id="home">
        <div className="home-container">
          <img className="home-page-banner" src={banner} alt="image" />
        </div>
      </section>
      <div className="space">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <section id="timer" className="mt-3">
        <h1 className="titleHead text-center mt-4">RESONANCE 2024 START IN</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-11 col-md-8">
              <div className="row">
                <div className="col-3 text-center">
                  <h1 id="days" className="clock-timer">
                    00
                  </h1>
                  <p className="clock-head">Days</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="hours" className="clock-timer">
                    00
                  </h1>
                  <p className="clock-head">hours</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="minutes" className="clock-timer">
                    00
                  </h1>
                  <p className="clock-head">minutes</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="seconds" className="clock-timer">
                    00
                  </h1>
                  <p className="clock-head">seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timer-btn">
          <button className="ticket-btn" type="button">
            BUY TICKET
          </button>
        </div>
      </section>
      <section id="about" className="mb-5">
        <h1 className="titleHead text-center mt-4">ABOUT US</h1>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-12 col-sm-12">
              <h1 className="about-text">GET READY TO ENJOY WITH</h1>
              <h1 className="about-resonance">R E S O N A N C E</h1>
              <h1 className="about-num">2 0 2 4</h1>
              <div className="about-all-btn">
                <button id="about-more" className="about-btn" type="button">
                  KNOW MORE
                </button>
                <button id="about-rugistar" type="button">
                  RUGISTER NOW
                </button>
              </div>
            </div>
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
      <section id="resonance" className="">
        <h1 className="titleHead text-center mt-4">THE LINEUP OF RESOONANCE</h1>
        <div className="container mt-5">
          <div className="row">
            <Slider {...settings}>
              <div className="resonance-card col-3 d-flex justify-content-center">
                <div className="card">
                  <img
                    src={require("./assets/img/4.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 1</div>
                </div>
              </div>
              <div className="resonance-card col-3 d-flex justify-content-center">
                <div className="card">
                  <img
                    src={require("./assets/img/6.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 2</div>
                </div>
              </div>
              <div className="resonance-card col-3 d-flex justify-content-center">
                <div className="card">
                  <img
                    src={require("./assets/img/5.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 3</div>
                </div>
              </div>
              <div className="resonance-card col-3 d-flex justify-content-center">
                <div className="card">
                  <img
                    src={require("./assets/img/5.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 4 </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section id="evants">
        <h1 className="titleHead text-center ">EVANTS</h1>
        <div className="container">
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of evant- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Rugister Now
              </button>
            </div>
          </div>
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of evant- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Rugister Now
              </button>
            </div>
          </div>
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of evant- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Rugister Now
              </button>
            </div>
          </div>
          <div className="row see-more">
            <div className="col-xxl-2 col-md-4 col-sm-12 see-btn">
              <button className="see-more-btn" type="button">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <h1 className="titleHead text-center mt-4">GALLERY</h1>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./assets/img/4.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./assets/img/5.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-see-more">
          <button className="gallery-btn" type="button">
            SEE MORE
          </button>
        </div>
      </section>
      <footer>
        <div id="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="phone">
                  <h2>Phone</h2>
                  <p>+91 9876543210</p>
                </div>
                <div className="email">
                  <h2>Email</h2>
                  <p>Resonance2024@gmail.com</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="touch">
                  <h2>Keep In Touch</h2>
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-buttom">
          <div className="container">
            <div className="row footer-buttom">
              <div className="col-xxl-6 col-sm-6 copyright">
                <p>
                  copyright @ 2024 . <span>Resonance - JIET Jodhpur</span>
                </p>
              </div>
              <div className="col-xxl-6 col-sm-6 Terms">
                <p className="gap-2">
                  CRAFTED BY<a> SAMEER ALI</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
