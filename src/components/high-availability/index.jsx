"use client";
import ContextProvider from "@/context/ContextProvider";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import perks_data from "@/data/perks_data";
import SliderArea from "@/common/slider-arae";
import DowntimeArea from "./downtime";
import ReducedCost from "./reducedCost";
import Overview from "./overview";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";
import { useWindowSize } from "react-use";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const HighAvailibilty = () => {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  let dynamicHeight;
  if (width < 420) {
    dynamicHeight = "370px";
  } else if (width >= 900 && width < 1024) {
    dynamicHeight = "300px";
  } else if (width >= 1024 && width <= 1300) {
    dynamicHeight = "290px";
  } else if (width >= 1300 && width < 1355) {
    dynamicHeight = "260px";
  } else if (width >= 1355 && width < 1440) {
    dynamicHeight = "280px";
  } else if (width >= 1440 && width <= 1490) {
    dynamicHeight = "260px";
  }

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
                spanText={"High Availability"}
                title={
                  <>
                    Best Integrated <br /> High Available <br /> Technology!
                  </>
                }
                desc={
                  "Eliminate the risk of failure and ensure maximum uptime with LYSA’S high availability capabilities! LYSA has exclusive expertise in designing, implementing, and managing a high-availability architecture seamlessly."
                }
              />
              <SliderArea
                subtitle={"High Available Technology"}
                title={"The Perks with High Availability Solutions!"}
                data={perks_data}
                setting={setting}
                height={dynamicHeight}
              />
              <DowntimeArea />
              <Overview style_service={true} />
              <ReducedCost />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default HighAvailibilty;
