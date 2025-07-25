"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import SliderArea from "@/common/slider-arae";
import CloudExperience from "./cloud-experience";
import EnsureLong from "./ensure-long";
import cloud_migration_data from "@/data/cloud-migration";
import GetstartedCloud from "./get-started";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
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

const CloundMigration = () => {
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
                spanText={"AWS Cloud Services"}
                title={
                  <>
                    Fulfill maximum <br /> ROI with our <br /> Expert Cloud{" "}
                    <br /> Migration Services
                  </>
                }
                desc={
                  "With LYSA’s extensive cloud expertise, you will avert potential pitfalls and successfully attain your cloud migration objectives."
                }
              />
              <CloudExperience />
              <EnsureLong />
              <SliderArea
                subtitle={"Our Cloud Migration Process!"}
                title={
                  "LYSA has migrated hundreds of crucial workloads to the cloud smoothly."
                }
                data={cloud_migration_data}
                setting={setting}
              />
              <GetstartedCloud />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default CloundMigration;
