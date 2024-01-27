import React from 'react'

function TypeEvent() {
  return (
    <section id="events" className="my-md-5">
      <h1 className="titleHead text-center mt-5 pt-md-5 pt-sm-2">EVENTS</h1>
      <div className="container">
      <div className="space">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
        <div className="row">
          <div className="col-xxl-6 col-md-12 col-12 card">
            
            <div className="row events ">
              <div className="col-xxl-7    col-md-6 col-sm-12 evant-img-text">
                <div className="event-img">
                  <img src={require("./assets/img/1.png")} alt="..." />
                </div>
                <div className="evant-text">
                  <p>
                    <span className="name">Cricket</span><br/>
                    <span className="time">sun - 10:00pm </span><br />
                    <i class="fa-solid fa-location-dot"></i>&nbsp;
                    <span className="address" > place</span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-12 my-2 evant-btn">
                <button className="regiser-btn" type="button">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-6 col-md-12 col-12 card">
            <div className="row events ">
              <div className="col-xxl-7    col-md-6 col-sm-12 evant-img-text">
                <div className="event-img">
                  <img src={require("./../assets/img/1.png")} alt="..." />
                </div>
                <div className="evant-text">
                  <p>
                    <span className="name">Cricket</span><br/>
                    <span className="time">sun - 10:00pm </span><br />
                    <i class="fa-solid fa-location-dot"></i>&nbsp;
                    <span className="address" > place</span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-12 my-2 evant-btn">
                <button className="regiser-btn" type="button">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-md-12 col-12 card">
            <div className="row events ">
              <div className="col-xxl-7    col-md-6 col-sm-12 evant-img-text">
                <div className="event-img">
                  <img src={require("./../assets/img/1.png")} alt="..." />
                </div>
                <div className="evant-text">
                  <p>
                    <span className="name">Cricket</span><br/>
                    <span className="time">sun - 10:00pm </span><br />
                     <i class="fa-solid fa-location-dot"></i>&nbsp;
                    <span className="address" > place</span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-12 my-2 evant-btn">
                <button className="regiser-btn" type="button">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-md-12 col-12 card">
            <div className="row events ">
              <div className="col-xxl-7    col-md-6 col-sm-12 evant-img-text">
                <div className="event-img">
                  <img src={require("./../assets/img/1.png")} alt="..." />
                </div>
                <div className="evant-text">
                  <p>
                    <span className="name">Cricket</span><br/>
                    <span className="time">sun - 10:00pm </span><br />
                     <i class="fa-solid fa-location-dot"></i>&nbsp;
                    <span className="address" > place</span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-12 my-2 evant-btn">
                <button className="regiser-btn" type="button">
                  Register Now
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row see-more my-5">
          <div className="col-xxl-2 col-md-4 col-sm-12 see-btn">
            <button className="see-more-btn" type="button">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypeEvent