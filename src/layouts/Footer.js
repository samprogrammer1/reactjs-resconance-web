import React from "react";

function Footer({phone_no , facebook , instagram , youtube}) {
  return (
    <section id="contacts" >
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
                <div className="icon d-flex">
                  <a href={instagram}>
                    <i className="fa-brands fa-instagram d-flex justify-content-center align-items-center"></i>
                  </a>
                  <a href={youtube} >
                    <i className="fa-brands fa-youtube d-flex justify-content-center align-items-center"></i>
                  </a>
                  <a href={facebook}>
                    <i className="fa-brands fa-facebook d-flex justify-content-center align-items-center"></i>
                  </a>
                  
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
                CRAFTED BY
                <a
                  className="text-light"
                  href="https://www.linkedin.com/in/sameer-ali-6b4926212/"
                  target="_blank"
                >
                  {" "}
                  SAMEER ALI
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  );
}

export default Footer;
