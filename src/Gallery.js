import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { useHistory } from "react-router-dom";
import imghost from "./assets/json/data.json"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Gallery() {
  const history = useHistory();
  const [isLoading, setIsLoader] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_GET_API);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      const found = result.data.gallery;
      console.log(found)
        setData(found);
      setIsLoader(false);
    } catch (error) {
      history.push('/404');
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const breakpointColumnsObj = {
    default: 3, // default number of columns
    1200: 3, // screen width 1200px - 3 columns
    800: 2, // screen width 800px - 2 columns
    500: 2, // screen width 500px - 1 column
  };

  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <section id="gallery" className="container mt-md-5 mt-sm-1 pt-1">
       <div className="space">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className={model ? "model open" : "model"}>
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
        <img src={tempimgsrc} />
      </div>
      <h1 className="titleHead text-center mt-lg-5 mt-sm-1">GALLERY</h1>
      {isLoading ? 
          <div
          className="container d-flex justify-content-center vh-100 w-100 align-items-center"
        >
          <h2>Coming Soon</h2>
        </div>
         : <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-5"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => (
          <div key={index} onClick={() => getImg(imghost.imageHost +item.img)}>
            <LazyLoadImage
              alt={`Gallery item ${index}`}
              effect="blur"
              src={imghost.imageHost +item.img} 
              className="card"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        ))}
      </Masonry>}
    </section>
  );
}