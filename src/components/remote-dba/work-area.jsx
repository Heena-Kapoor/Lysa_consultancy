import work_data from "@/data/work-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const setting = {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
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

const WorkArea = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };
  return (
    <>
      <div className="tp-project__area grey-bg pt-50 pb-50 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="tp-project__section-box wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <h3 className="tp-section-title">How we Work?</h3>
                <p>We take care the Database</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-xl-12">
              <div className="tp-project__slider-section">
                <Swiper
                  {...setting}
                  onSliderMove={handleSlideChange}
                  onTransitionEnd={handleTransitionEnd}
                  modules={[Navigation, Scrollbar]}
                  className={`swiper-container tp-project__slider-active ${
                    isDragged ? "dragged" : ""
                  }`}
                >
                  {work_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      <div className="tp-project__slider-wrapper">
                        <div className="tp-project__item d-flex align-items-center">
                          <div className="tp-project__thumb">
                            <Image
                              src={item.img_1}
                              alt="theme-pure"
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="tp-project__content">
                            <div className="tp-project__title-box">
                              <h4 className="tp-project__title-sm">
                                <Link href="/project-details">
                                  {item.title}
                                </Link>
                              </h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
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

export default WorkArea;
