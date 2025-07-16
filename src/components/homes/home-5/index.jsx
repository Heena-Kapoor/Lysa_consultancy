'use client';
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

const HomeFive = () => {
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
};

export default HomeFive;
