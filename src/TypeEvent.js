import React, { useState, useEffect } from "react";
import { useParams  , useHistory} from "react-router-dom";
import EnvData from "./assets/json/data.json"

function TypeEvent() {
  const { type } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoader] = useState(true);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_GET_API);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      const found = result.data.event_type_list.find(
        (item) => item.event_type === type
      );
      if (found) {
        setTitle(found.event_title);
        setData(found.data);
      }else {
        history.push('/404');
        return;
      }
      setIsLoader(false);
    } catch (error) {
      history.push('/404');
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="events" className="my-md-5">
      <h1 className="titleHead text-center mt-5 pt-md-5 pt-sm-2">{title} Events</h1>
      <div className="container">
        <div className="space">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        {
          isLoading && <div
          className="container d-flex justify-content-center vh-100 w-100 align-items-center"
        >
          <h2>Coming Soon</h2>
        </div>
        }
        <div className="row">
          {data.length == 0 && <div
          className="container coming-soon d-flex justify-content-center vh-100 w-100 align-items-center"
        >
          <h2 className="text-light">Coming Soon</h2>
        </div>}

          {data.map((item, index) => {
            return (
              <div key={index} className="col-xxl-6 col-md-12 col-12 card">
                <div className="row events ">
                  <div className="col-xxl-8    col-md-8 col-sm-12 evant-img-text">
                    <div className="col-4 event-img">
                      <img
                        src={EnvData.imageHost+item.event_img}
                      />
                    </div>
                    <div className=" col-8 evant-text">
                      <p>
                        <span className="name">{item.event_name}</span>
                        <br />
                        {/* <i className="fa-solid fa-location-dot"></i>&nbsp; */}
                        <span className="address">{item.event_desc}.</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-4  col-12 my-2  evant-btn">
                    {
                      item.rules_link && <a href={item.rules_link} target="_blank">
                        <button className="details-btn" type="button">
                          Rules
                        </button>
                      </a>
                    }
                    <a href={item.event_link} target="_blank">
                      <button className="regiser-btn" type="button">
                        Register Now
                      </button>
                    </a>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TypeEvent;
