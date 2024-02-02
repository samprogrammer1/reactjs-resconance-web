import React from 'react'

function About() {
  return (
    <section id="about" >
        <h1 className="titleHead small-title-head text-center my-4">ABOUT US</h1>
        <div className="container mt-5" id="about">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12 order-lg-1 order-2">
              <h1 className="about-text">GET READY TO ENJOY WITH</h1>
              <h1 className="about-resonance">R E S O N A N C E</h1>
              <h1 className="about-num">2 0 2 4</h1>
              <p>Welcome to Resonance, Jodhpur’s biggest vibrant Annual Festival hosted by the JIET Group, where creativity meets innovation. Dive into a mix of cultural, technical, and sports events designed to spark your imagination. Featuring special celebrity nights, from concerts to comedy, Resonance is an adventure in self-expression and discovery. Join us for an unforgettable experience!</p>
              <div className="about-all-btn">
                
                <button id="about-rugistar" type="button">
                  Register NOW
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 order-lg-2 order-1 ">
              <div className='card m-lg-5'>
                <img src={require('./../assets/img/about-banner.png')} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About