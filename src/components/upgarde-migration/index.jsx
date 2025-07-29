"use client";
import ContextProvider from "@/context/ContextProvider";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import SliderArea from "@/common/slider-arae";
import Migration from "./migration";
import migration_data from "@/data/migration-data";
import DatabaseMigrationProcess from "./process-work";
import ZeroDownTime from "./zero-downtime";
import Getstarted from "./get-started";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";
import { useWindowSize } from "react-use";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const Upgrade = () => {
  const [loading, setLoading] = useState(true);
  // const { width } = useWindowSize();

  // let dynamicHeight;
  // if (width < 480) {
  //   dynamicHeight = "260px";
  // } else if (width >= 480 && width < 768) {
  //   dynamicHeight = "250px";
  // } else if (width >= 768 && width < 992) {
  //   dynamicHeight = "320px";
  // } else if (width >= 992 && width < 1200) {
  //   dynamicHeight = "330px";
  // } else if (width >= 1200 && width < 1400) {
  //   dynamicHeight = "300px";
  // } else if (width >= 1400 && width < 1600) {
  //   dynamicHeight = "340px";
  // } else if (width >= 1600 && width < 1920) {
  //   dynamicHeight = "300px";
  // } else {
  //   dynamicHeight = "300px";
  // }

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
                spanText={"Database\u00A0\u00A0Upgrade & Migration!"}
                title={
                  <>
                    Seamless DB <br /> Migration
                  </>
                }
                desc={
                  "Whether you need to move from one database to a different database, from one version to another, from on-premises to the cloud, or from one data center to another, upgrade and migrate with confidence with LYSA’s tested and trusted database services."
                }
              />
              <Migration />
              <DatabaseMigrationProcess />
              <ZeroDownTime />
              <SliderArea
                subtitle={"Overview Of Our Services!"}
                title={"World’s Best Database Upgrade and Migration Services"}
                data={migration_data}
                setting={setting}
                // height={dynamicHeight}
              />
              <Getstarted />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default Upgrade;
