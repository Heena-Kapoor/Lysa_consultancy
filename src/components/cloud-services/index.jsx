"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import ServiceArea from "./service-area";

const CloudServices = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbNew title={"Cloud Services"} />
          <ServiceArea style_integraton={true}/>
          <CtaArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default CloudServices;
