import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Masonry from 'react-masonry-css';
import ENV_DATA from './../assets/json/data.json'



function Gallery({imageData}) {
    const history = useHistory();
    const breakpointColumnsObj = {
      default: 3, // default number of columns
      1200: 3, // screen width 1200px - 3 columns
      800: 2, // screen width 800px - 2 columns
      500: 2, // screen width 500px - 1 column
    };
  
    const [model, setModel] = useState(false);
    const [tempimgsrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
    };

const navigateToGallery = () => {
  history.push('/gallery');
};
const isMobile = window.innerWidth <= 800;
  return (
    <section id="gallery" className='my-5'>
        <h1 className="titleHead small-title-head text-center mt-4">GALLERY</h1>
        <div className={model ? "model open" : "model"}>
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
        <img src={tempimgsrc} />
      </div>
        <div className="container">
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-5"
        columnClassName="my-masonry-grid_column"
      >
        {imageData.map((item, index) => (
          <div key={index} onClick={() => getImg(ENV_DATA.imageHost +item.img)}>
            <img
              src={ENV_DATA.imageHost +item.img}
              alt={`Gallery item ${index}`}
              className="card"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        ))}
        {isMobile && <div  onClick={() => getImg(require("../assets/img/gallery/1.jpg"))}>
            <img
              src={require("./../assets/img/gallery/1.jpg")}
              alt={`Gallery item `}
              className="card"
              style={{ width: "100%", display: "block" }}
            />
          </div>}
      </Masonry>
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