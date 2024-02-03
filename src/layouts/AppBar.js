import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link as ScrollLink } from "react-scroll";

function AppBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [activeSection, setActiveSection] = useState("");
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasVisible(true);
  };

  const closeOffcanvas = () => {
    setOffcanvasVisible(false);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    closeOffcanvas();
  };
  useEffect(() => {
    closeOffcanvas();
  },[location])
  console.log(offcanvasVisible)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={require("./../assets/img/logo1.png")} width="120px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end custom-canvas-bg text-bg-dark custom-canvas-bg ${offcanvasVisible && 'show'}`}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                {currentPath != "/" ? (
                  <NavLink 
                    className={`nav-link ${
                      activeSection === "home" ? "active" : ""
                    }`}
                    
                    to="/"
                    onClick={() => handleLinkClick("home")}
                    // data-bs-dismiss="offcanvas"
                  >
                    Home
                  </NavLink>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    className={`nav-link ${
                      activeSection === "home" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("home")}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    Home
                  </ScrollLink>
                )}
              </li>

              <li className="nav-item">
                {currentPath != "/" ? (
                  <Link className="nav-link" to="/" >
                    About
                  </Link>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    className={`nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("about")}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    About
                  </ScrollLink>
                )}
              </li>
              <li className="nav-item">
                {currentPath != "/" ? (
                  <Link className={`nav-link ${
                    activeSection === "events" ? "active" : ""
                  }`} to="/events" onClick={() => handleLinkClick("events")}>
                    Events
                  </Link>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="evants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    className={`nav-link ${
                      activeSection === "evants" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("evants")}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >Events</ScrollLink>
                )}
              </li>

              <li className="nav-item">
                {currentPath != "/" ? (
                  <Link className="nav-link" to="/" onClick={() => handleLinkClick("gallery")}>
                    Gallery
                  </Link>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    className={`nav-link ${
                      activeSection === "gallery" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("gallery")}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    Gallery
                  </ScrollLink>
                )}
              </li>
              <li className="nav-item">
                <ScrollLink
                  // activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className={`nav-link ${
                    activeSection === "contacts" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("gallery")}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Contact
                </ScrollLink>
              </li>
              <li className="nav-item">
                  <NavLink className={`nav-link ${
                    currentPath === "/notices" ? "active" : ""
                  }`} onClick={() => handleLinkClick("notices")}  to="/notices"   >
                    Notices
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
