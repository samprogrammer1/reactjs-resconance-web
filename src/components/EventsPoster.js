import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function EventsPoster() {
  return (
    <section id="resonance" className="">
        <h1 className="titleHead text-center mt-4">THE LINEUP OF RESONANCE</h1>
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
           initialSlide={1}
           spaceBetween={0}
           modules={[EffectCoverflow, Pagination]}
           className="mySwiper"
          >
            <SwiperSlide><div className="resonance-card px-3  d-flex justify-content-center">
                <div className="card ">
                  <img
                    src={require("./../assets/img/4.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 1</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="resonance-card px-3 d-flex justify-content-center">
                <div className="card ">
                  <img
                    src={require("./../assets/img/6.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 1</div>
                </div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
            <div className="resonance-card px-3 d-flex justify-content-center">
              <div className="card ">
                  <img
                    src={require("./../assets/img/5.jpg")}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="day">DAY 1</div>
                </div>
            </div>
            </SwiperSlide>
            
            {/* Add more slides as needed */}
          </Swiper>
          </div>
        </div>
      </section>
  )
}

export default EventsPoster