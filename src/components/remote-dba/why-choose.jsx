import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};
// journey_data
const journey_data = [
  {
    id: "01",
    date: "Database Growth",
    title: <>Understand Database Growth Trends</>,
    description: (
      <>
        To ensure that your database keeps performing optimally, we anticipate
        remote dba support and plan for enhanced capacity, extra hardware
        requisites, and resources.
      </>
    ),
  },
  {
    id: "02",
    date: "PostgreSQL",
    title: <>Rely On PostgreSQL - Certified DBAS</>,
    description: (
      <>
        Capitalize on LYSA's decades of expertise and some of the finest DBAs in
        the Certified DBA in Oracle, MySQL, PostgreSQL, etc. for complete data
        protection.
      </>
    ),
  },
  {
    id: "03",
    date: "Technical Leads",
    title: <>Get Designated Technical Leads</>,
    description: (
      <>
        Plan and coordinate operational tasks, events, and resources by relying
        on a primary contact and designated technical leads to help direct team
        efforts.
      </>
    ),
  },
  {
    id: "04",
    date: "Managed Operations",
    title: <>24x7 Managed Operations</>,
    description: (
      <>
        Our group of devoted and passionate leaders offers out-of-the-box IT
        solutions. Discover how the extensive expertise and background of our
        leadership team have made LYSA one of the fastest-growing data
        management organizations in India.
      </>
    ),
  },
  {
    id: "05",
    date: "DBA Team",
    title: <>Augment Your DBA Team</>,
    description: (
      <>
        Lessen expenses without compromising access to technical knowledge with
        our trained, certified, professional, and experienced DBA Team.
      </>
    ),
  },
];

const WhyChoose = () => {
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
                <h5 className="inner-section-subtitle pt-20 pb-10">
                  LYSA REMOTE DBA SUPPORT?
                </h5>
                <h3 className="ab-brand-title pb-0 mb-0">Why Choose</h3>
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
                  className={`swiper-container pt-50 ${
                    isDragged ? "dragged" : ""
                  }`}
                >
                  {journey_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="journey-slider-item p-relative"
                    >
                      {/* <div className="journey-stroke-text">
                        <h2>{item.id}</h2>
                      </div> */}
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

export default WhyChoose;
