import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
}
// journey_data
const journey_data = [
  {
    id: "01",
    date: "Proficiency",
    title: <>Our Proficiency</>,
    description: <>We offer both reactive support and proactive direction on how IT can best meet our client’s evolving requirements. We are experts not only in the ever-changing IT landscape but also in the industries in which our clients operate.</>,
  },
  {
    id: "02",
    date: "People",
    title: <>Our People</>,
    description: <>LYSA's people are the company's face and voice. We see ourselves as IT champions for our clients and are able to provide remarkable services because of our dedication to employing the best people throughout the organization.</>,
  },
  {
    id: "03",
    date: "Culture",
    title: <>Our Culture</>,
    description: <>We operates on a culture of commitment to our clients, to exceptional delivery, to our expertise, and to our colleagues both within and outside of our company. Work with us to learn more about the culture that differentiates LYSA.</>,
  },
  {
    id: '04',
    date: "Leadership",
    title: <>Our Leadership</>,
    description: <>Our group of devoted and passionate leaders offers out-of-the-box IT solutions. Discover how the extensive expertise and background of our leadership team have made LYSA one of the fastest-growing data management organizations in India.</>,
  },
]

const JourneyArea = () => {

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
                <h5 className="inner-section-subtitle pt-20 pb-10">Know What We’re All About!</h5>
                <h3 className="ab-brand-title pb-0 mb-0">
                  Get The Inside Scoop About LYSA
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
                  className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                >
                  {journey_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="journey-slider-item p-relative"
                    >
                      <div className="journey-stroke-text">
                        <h2>{item.id}</h2>
                      </div>
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
                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyArea;