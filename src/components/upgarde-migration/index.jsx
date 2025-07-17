"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
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
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const Upgrade = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbEight
            spanText={"Database Upgrade & Migration!"}
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
            title={"World’s Best Database Upgrade And Migration Services"}
            data={migration_data}
            setting={setting}
          />
          <Getstarted />
          <CtaArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default Upgrade;
