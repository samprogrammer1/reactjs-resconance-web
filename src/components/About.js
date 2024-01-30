import React from 'react'

function About() {
  return (
    <section id="about" >
        <h1 className="titleHead small-title-head text-center my-4">ABOUT US</h1>
        <div className="container" id="about">
          <div className="row">
            <div className="col-xl-4 col-md-12 col-sm-12">
              <h1 className="about-text">GET READY TO ENJOY WITH</h1>
              <h1 className="about-resonance">R E S O N A N C E</h1>
              <h1 className="about-num">2 0 2 4</h1>
              <div className="about-all-btn">
                
                <button id="about-rugistar" type="button">
                  Register NOW
                </button>
                <button id="about-more" className="about-btn" type="button">
                  Accommodation
                </button>
              </div>
            </div>
            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
  )
}

export default About