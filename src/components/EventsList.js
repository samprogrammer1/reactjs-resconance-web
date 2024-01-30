import React from "react";
import { Link } from "react-router-dom";
import data from '../assets/json/data.json'

function EventsList({event_poster}) {
  return (
    <section id="evants" className="my-5 ">
      <h1 className="titleHead small-title-head text-center ">EVENTS</h1>
      <div className="container mt-5">
        <div className="row">
          {
            event_poster.map((item , index) => {
              return (
                <div key={index} className="col-xxl-4 col-lg-4 col-md-6 col-12 col-sm-12">
                  <div className="card">
                    {/* <a href="#"> */}
                      {console.log()}
                      <img src={data.imageHost+item.img} />
                      <div className="region_text d-flex justify-content-center">
                        {/* <h5>{item.event_title} Events</h5> */}
                        <div className="region_buttons">
                          <Link to={`/events/${item.event_type}`}>Register Here</Link>
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default EventsList;
