import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import VanillaTilt from 'vanilla-tilt';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function EventsPoster({ posterData, image_path }) {
  const tiltElements = useRef([]);
  const isMobile = window.innerWidth <= 640;
  const isTablet = window.innerWidth <= 768;

  // useEffect(() => {
  //   tiltElements.current.forEach((element) => {
  //     const tilt = VanillaTilt.init(element, {
  //       max: 9,
  //       speed: 300,
  //       // glare: true,
  //       // 'max-glare': 0.5,
  //     });
  
  //     return () => {
  //       tilt.destroy();
  //     };
  //   });
  // }, [tiltElements]);// Make sure to include tiltElements in the dependency array

  return (
    <section id="resonance" className="">
      <h1 className="titleHead small-title-head text-center my-4">DAYS</h1>
      <div className="container mt-5">
        <div className="row">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            initialSlide={isMobile ? 0 : isTablet ? 0 : 1}
            spaceBetween={0}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {posterData.map((data, index) => (
              <SwiperSlide key={index}>
                <div ref={(element) => (tiltElements.current[index] = element)} className="resonance-card mx-3  d-flex justify-content-center">
                  <div className="card ">
                    <img src={image_path + data.img} className="card-img-top" alt="..." />
                    <div className="day">DAY {data.day}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default EventsPoster;
