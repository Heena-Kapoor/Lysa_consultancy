"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
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
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const HighAvailibilty = () => {
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
