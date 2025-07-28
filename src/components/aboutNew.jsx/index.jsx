"use client";
import { useEffect, useState } from "react";
import ContextProvider from "@/context/ContextProvider";
import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import PlanArea from "../homes/home-5/plan-area";
import ServiceArea from "./service-area";
import CompanyArea from "./company-area";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import journey_data from "@/data/journey_data";
import SliderArea from "@/common/slider-arae";
import HeaderFive from "@/layout/headers/header-5";
import Loader from "@/common/loader";
import { useWindowSize } from "react-use";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const About = () => {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  let dynamicHeight;
  if (width < 420) {
    dynamicHeight = "370px";
  } else if (width >= 420 && width < 590) {
    dynamicHeight = "280px";
  } else if (width >= 590 && width < 650) {
    dynamicHeight = "410px";
  } else if (width >= 650 && width < 840) {
    dynamicHeight = "350px";
  } else if (width >= 840 && width <= 990) {
    dynamicHeight = "320px";
  } else {
    dynamicHeight = "280px";
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderFive />
          <Breadcrumb title_top="About" title_bottom="Us" />
          <HeroBanner
            title="About"
            subtitle="Us"
            bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg"
          />
          <PlanArea />
          <ServiceArea />
          <SliderArea
            subtitle={"Know What We’re All About!"}
            title={"Get the inside scoop about LYSA"}
            data={journey_data}
            setting={setting}
            showId={true}
            height={dynamicHeight}
          />
          <CompanyArea />
          <CtaArea />
          <FooterFive style_contact={true} style_team={true} />
        </>
      )}
    </ContextProvider>
  );
};

export default About;
