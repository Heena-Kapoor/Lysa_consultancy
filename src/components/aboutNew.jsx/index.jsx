"use client";

import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import PlanArea from "../homes/home-5/plan-area";
import ServiceArea from "./service-area";
import JourneyArea from "./journey-area";
import CompanyArea from "./company-area";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";

const About = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderSix/>
        <Breadcrumb title_top="About" title_bottom="Us" />
        <HeroBanner
          title="About"
          subtitle="Us"
          bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg"
        />
        <PlanArea />
        <ServiceArea />
        {/* <Brand /> */}
        {/* <AboutArea /> */}
        {/* <TeamArea bg_style={true} /> */}
        <JourneyArea />
        <CompanyArea />
        {/* <JobArea /> */}
        <CtaArea />
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default About;
