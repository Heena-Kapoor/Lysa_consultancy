"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import SliderArea from "@/common/slider-arae";
import AWSservice from "./aws-service";
import Experience from "./experience";
import aws_data from "@/data/aws-data";
import Getstarted from "./get-started";
import AwsLysa from "./lysa-aws";
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
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};

const AwsCloud = () => {
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
                    LYSA AWS Cloud <br /> Services: <br /> Foundation of <br />{" "}
                    Digital Success
                  </>
                }
                desc={
                  "With LYSA CONSULTANCY's secure and scalable AWS cloud Services, you can HIRE US For the Foundation Of Your Digital Success."
                }
              />
              <AWSservice />
              <Experience />
              <Getstarted />
              <SliderArea
                subtitle={"Why Partner with LYSA for AWS Cloud Services?"}
                title={"Let Us Take Care of Your Cloud Management."}
                data={aws_data}
                setting={setting}
              />
              <AwsLysa />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default AwsCloud;
