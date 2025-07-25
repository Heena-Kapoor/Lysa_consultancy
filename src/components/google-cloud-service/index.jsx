"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import GCPservice from "./gcp-service";
import PerksofGoogle from "./perks-of-google";
import LysaProcess from "./lysa";
import KeyFactor from "./key-factor";
import GcpLysa from "./lyca-gcp";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const GoogleCloudService = () => {
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
                spanText={"Google Cloud Services"}
                title={
                  <>
                    A Seamless <br /> Migration to <br /> Google Cloud <br />{" "}
                    Services!
                  </>
                }
                desc={
                  "Migrate and run your business on Google Cloud services seamlessly with managed cloud and application services from a reputable and credible partner and a google cloud platform, LYSA."
                }
              />
              <LysaProcess />
              <GCPservice />
              <PerksofGoogle />
              <KeyFactor style_service={true} />
              <GcpLysa />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default GoogleCloudService;
