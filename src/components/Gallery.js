import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import Masonry from 'react-masonry-css';




function Gallery() {
    const history = useHistory();
    const images = [
      
      require("./../assets/img/gallery/3.jpg"),
      require("./../assets/img/gallery/1.JPG"),
      require("./../assets/img/gallery/23.jpg"),
      require("./../assets/img/gallery/2.jpg"),
    ];
    const breakpointColumnsObj = {
      default: 3, // default number of columns
      1200: 3, // screen width 1200px - 3 columns
      800: 2, // screen width 800px - 2 columns
      500: 1, // screen width 500px - 1 column
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
  return (
    <section id="gallery" className='my-5'>
        <h1 className="titleHead text-center mt-4">GALLERY</h1>
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