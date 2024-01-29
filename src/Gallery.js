import React, { useState } from "react";
import Masonry from "react-masonry-css";
export default function Gallery() {
  const images = [
    require("./assets/img/gallery/1.JPG"),
    require("./assets/img/gallery/2.jpg"),
    require("./assets/img/gallery/23.jpg"),
    require("./assets/img/gallery/7.jpg"),
    require("./assets/img/gallery/3.jpg"),
    require("./assets/img/gallery/6.jpg"),
    require("./assets/img/gallery/4.jpg"),
   ,
   
    // Add more images here
  ];
  const breakpointColumnsObj = {
    default: 3, // default number of columns
    1200: 3, // screen width 1200px - 3 columns
    800: 2, // screen width 800px - 2 columns
    500: 1, // screen width 500px - 1 column
  };

  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState(false);
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
        <img src={tempimgsrc && tempimgsrc.toString()} />
      </div>
      <h1 className="titleHead text-center mt-5 mt-sm-1">GALLERY</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-5"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => getImg(image)}>
            <img
              src={image && image.toString()}
              alt={`Gallery item ${index}`}
              className="card"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}
