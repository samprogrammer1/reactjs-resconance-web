import React from 'react'

function EventsList() {
  return (
    <section id="evants" className='my-5'>
        <h1 className="titleHead text-center ">EVENTS</h1>
        <div className="container">
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./../assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of event- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Register Now
              </button>
            </div>
          </div>
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./../assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of event- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Register Now
              </button>
            </div>
          </div>
          <div className="row evants">
            <div className="col-xxl-4 col-md-6 col-sm-12 evant-img-text">
              <div className="event-img">
                <img src={require("./../assets/img/1.png")} alt="..." />
              </div>
              <div className="evant-text">
                <p>
                  Feb 23(date)
                  <br /> sun - 10:00pm <br />
                  name of event- place
                </p>
              </div>
            </div>
            <div className="col-xxl-2 col-md-4 col-sm-12 evant-btn">
              <button className="details-btn" type="button">
                View Details
              </button>
              <button className="regiser-btn" type="button">
                Register Now
              </button>
            </div>
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

export default EventsList