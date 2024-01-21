import React from "react";

function Footer() {
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
