import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderArea = ({ subtitle, title, data, setting, showId }) => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  return (
    <>
      <div className="journey-area p-relative fix">
        <div className="journey-grey-bg grey-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey-section-box">
                <h5 className="inner-section-subtitle pt-30 pb-10 text-center">
                  {subtitle}
                </h5>
                <h3 className="ab-brand-title pb-0 mb-0 text-center">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="journey-slider-wrapper">
                <Swiper
                  {...setting}
                  onSliderMove={handleSlideChange}
                  onTransitionEnd={handleTransitionEnd}
                  modules={[Navigation, Scrollbar]}
                  className={`swiper-container pt-50 pb-50 ${
                    isDragged ? "dragged" : ""
                  }`}
                >
                  {data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="journey-slider-item p-relative"
                    >
                      {showId && (
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                      )}
                      <div className="journey-slider-meta">
                        <span>{item.date}</span>
                      </div>
                      <div className="journey-slider-content">
                        <h4 className="journey-slider-title">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div
                  className="swiper-button-prev"
                  style={{ color: "#6B14FA", top: "80px" }}
                ></div>
                <div
                  className="swiper-button-next"
                  style={{ color: "#6B14FA", top: "80px" }}
                ></div>

                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
