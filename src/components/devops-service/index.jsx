"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import DiffrenceArea from "./difference";
import GetResult from "./get-result";
import PerksGain from "./perks-gain";
import SliderArea from "@/common/slider-arae";
import devops_data from "@/data/devops-data";
import WhychooseLysa from "./whychooseLysa";
import Getstarted from "./get-started";
import DevopsLysa from "./devopsLysa";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
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
  autoplay: {
    delay: 5000, // 5 seconds
    disableOnInteraction: false, // continues after user interaction
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

const DevOps = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ContextProvider>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HeaderFive />
            <main>
              <BreadcrumbEight
                spanText={"DevOps"}
                title={
                  <>
                    Speed up <br /> Business with <br /> DevOps Consulting{" "}
                    <br /> Services
                  </>
                }
                desc={
                  "Our DevOps Consulting Services, increase the pace of your innovation and accelerate speed to market for a competitive advantage."
                }
              />
              <DiffrenceArea />
              <PerksGain />
              <SliderArea
                subtitle={"Assisting you through DevOps."}
                title={"Attain DevOps Success with our Consulting Services!"}
                data={devops_data}
                setting={setting}
                height={"300px"}
              />
              <GetResult />
              <WhychooseLysa />
              <Getstarted />
              <DevopsLysa />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default DevOps;
