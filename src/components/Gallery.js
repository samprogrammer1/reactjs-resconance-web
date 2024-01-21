import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'




function Gallery() {
    const history = useHistory();

const navigateToGallery = () => {
  history.push('/gallery');
};
  return (
    <section id="gallery" className='my-5'>
        <h1 className="titleHead text-center mt-4">GALLERY</h1>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./../assets/img/4.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./../assets/img/5.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./../assets/img/5.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="card">
                <img
                  src={require("./../assets/img/5.jpg")}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-see-more mt-5">
          <button onClick={navigateToGallery} className="gallery-btn" type="button">
            SEE MORE
          </button>
        </div>
      </section>
  )
}

export default Gallery