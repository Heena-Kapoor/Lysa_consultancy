"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import ResultArea from "./result-area";
import SloutionArea from "./solution-area";
import WorkArea from "./work-area";
import SliderArea from "@/common/slider-arae";
import whychoose_data from "@/data/why-choose-data";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

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

const RemoteDBAsupport = () => {
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
            <AnimateMouse />
            <HeaderFive />
            <main>
              <BreadcrumbEight
                spanText={"REMOTE DBA"}
                title={
                  <>
                    Solve & Upgrade
                    <br />
                    Your Remote DBA <br />
                    Issues With Us!
                  </>
                }
                desc={
                  "To manage your on-premises deployments, our Remote DBA Support offers database management and 24x7 coverage. Our services include Oracle, MySQL, PostgreSQL, and MongoDB."
                }
              />
              <SloutionArea style_carrer={true} />
              <SliderArea
                subtitle={"LYSA REMOTE DBA SUPPORT?"}
                title={"Why Choose"}
                data={whychoose_data}
                setting={setting}
              />
              <ResultArea style_service={true} spacing="pt-80 pb-30" />
              <WorkArea />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default RemoteDBAsupport;
