"use client";
import ContextProvider from "@/context/ContextProvider";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-5";
import BusinessBox from "./business-box";
import CtaArea from "./cta-area";
import FeatureArea from "./feature-area";
import HeroArea from "./hero-area";
import PlanArea from "./plan-area";
import ServiceArea from "./service-area";
import AnimateMouse from "./AnimateMouse";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const HomeFive = () => {
  const [loading, setLoading] = useState(true);

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
          <AnimateMouse />
          <HeaderFive />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main className="fix">
                <HeroArea />
                <PlanArea />
                <ServiceArea />
                <CtaArea />
                <FeatureArea />
                <BusinessBox />
              </main>
              <FooterFive bg_style={false} />
            </div>
          </div>
        </>
      )}
    </ContextProvider>
  );
};

export default HomeFive;
