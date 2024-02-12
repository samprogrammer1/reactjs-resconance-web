import React from "react";

function Footer({ phone_no, facebook, instagram, youtube }) {
  return (
    <section id="contacts">
      <footer>
        <div id="footer-top">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="phone">
                  <h2>Contact Us</h2>
                  <a href="tel:+918890569447">
                    <p>
                      Bhavesh Kumar Parmar <br />
                      +91 88905 69447
                    </p>
                  </a>
                  <a href="tel:+918690756606">
                    <p>
                      Manavjeet Singh <br />
                      +91 8690756606
                    </p>
                  </a>
                </div>
                <div className="email">
                  <h2>Email</h2>
                  <a href="mailto:Studentcouncil@jietjodhpur.ac.in">
                    <p>Studentcouncil@jietjodhpur.ac.in</p>
                  </a>
                  <a href="mailto:Resonance@jietjodhpur.ac.in">
                    <p>Resonance@jietjodhpur.ac.in</p>
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="touch">
                  <h2>Keep In Touch</h2>
                  <div className="icon d-flex">
                    <a
                      href="https://www.instagram.com/jiet_universe?igsh=enR3dmxvYXk0MHRs"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram d-flex justify-content-center align-items-center"></i>
                    </a>
                    <a
                      href="https://youtube.com/@JIETUniverse?si=_gP3SDwRnJZIX6PA"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube d-flex justify-content-center align-items-center"></i>
                    </a>
                    <a
                      href="https://m.facebook.com/JIET.Jodhpur.Official"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook d-flex justify-content-center align-items-center"></i>
                    </a>
                  </div>
                  <div className="mt-4">
                    <h2 className="pb-0">Radio Partner</h2>
                    <div className="d-flex">
                      <img
                        src={require("../assets/img/sponsor/94.3MYFM-LOGO.jpg")}
                        alt="94.3 MyFM"
                        width="80px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-buttom">
          <div className="container-fluid">
            <div className="row footer-buttom">
              <div className="col-xl-4 col-md-4 copyright">
                <p>
                  copyright @ 2024 . <span>Resonance - JIET Jodhpur</span>
                </p>
              </div>
              <div className="col-xl-4 col-md-4 grid gap-5 Terms ">
                <p className="dev-sam">
                  Developed by
                  <a
                    className="text-light pl-5"
                    href="https://www.linkedin.com/in/sameer-ali-6b4926212/"
                    target="_blank"
                  >
                    {" "}
                    SAMEER ALI
                  </a>
                </p>
              </div>
              <div className="col-xl-4 col-md-4 grid gap-5 Terms ">
                <p className="gap-2">
                  Designed by
                  <a
                    className="text-light"
                    href="https://www.linkedin.com/in/navya-gehlot-50568623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    {" "}
                    Navya
                  </a>
                  &
                  <a
                    className="text-light"
                    href="https://www.linkedin.com/in/navjyoti-choudhary-b07a931ba"
                    target="_blank"
                  >
                    {" "}
                    Navjyoti
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
