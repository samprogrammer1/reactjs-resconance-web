import React from "react";
import { Link } from "react-router-dom";
import data from '../assets/json/data.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function EventsList({event_poster}) {
  return (
    <section id="evants" className="my-5 ">
      <h1 className="titleHead small-title-head text-center ">EVENTS</h1>
      <div className="container mt-5">
        <div className="row">
          {
            event_poster.map((item , index) => {
              return (
                <div key={index} className="col-xxl-3 col-lg-3 col-md-6 col-12 col-sm-12">
                  <div className="card">
                      <LazyLoadImage
                        alt={`${item.event_title} events ` }
                        effect="blur"
                        src={data.imageHost+item.img} 
                      />
                      <div className="region_text d-flex justify-content-center">
                        {/* <h5>{item.event_title} Events</h5> */}
                        <div className="region_buttons">
                          {
                            item.event_type !== "fashion" ?
                              item.data.length === 0 ? 
                              <a href="#" >Coming Soon</a> : 
                              <Link to={`/events/${item.event_type}`}>Register Here</Link> :
                              item.data.length === 0 ? <a href="#" >Coming Soon</a>:
                             <a href="https://forms.gle/wPYBkWncjAsMiZb97" target="_blank" >Register Now</a>
                          }
                          
                        </div>
                      </div>
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
