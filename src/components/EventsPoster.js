import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function EventsPoster({posterData , image_path}) {
  console.log(posterData)
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
            {
              posterData.map((data, index)=>
                <SwiperSlide key={index}>
                  <div className='reflection-container'>
                    {(Array.from({ length: 100 }, (_, i) => i + 1)).map((cell) => (
                      <div key={cell} className={`reflection-grid-cell reflection-grid-cell-${cell}`}></div>
                    ))}
                    <div className='reflection-content'>
                      <div className="resonance-card px-3  d-flex justify-content-center">
                        <div className="card ">
                          <img
                            src={image_path + data.img}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="day">DAY {data.day}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </SwiperSlide>
              )
            }
            
            {/* Add more slides as needed */}
          </Swiper>
          </div>
        </div>
      </section>
  )
}

export default EventsPoster