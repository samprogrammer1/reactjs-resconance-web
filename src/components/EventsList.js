import React from "react";
import { Link } from "react-router-dom";

function EventsList() {
  return (
    <section id="evants" className="my-5 ">
      <h1 className="titleHead text-center ">EVENTS</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xxl-4 col-lg-4 col-12 col-sm-12">
            <div class="card">
              <a href="#">
                <img src="https://tenloc-eight.vercel.app/img/Mask%20group%20(13).png" />
                <div class="region_text">
                  <h5>Sports Events</h5>
                  <div class="region_buttons">
                    <Link to="/events/sports">Register Here</Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-4 col-12 col-sm-12">
            <div class="card">
              <a href="#">
                <img src="https://tenloc-eight.vercel.app/img/Mask%20group%20(13).png" />
                <div class="region_text">
                  <h5>Technical Events</h5>
                  <div class="region_buttons">
                    <Link to="/events/technical">Register Here</Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-4 col-12 col-sm-12">
            <div class="card">
              <a href="#">
                <img src="https://tenloc-eight.vercel.app/img/Mask%20group%20(13).png" />
                <div class="region_text">
                  <h5>Cultural Events</h5>
                  <div class="region_buttons">
                    <Link to="/events/caltural">Register Here</Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsList;
