"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import FooterFive from "@/layout/footers/footer-5";
import ServiceDetailsArea from "../service-details/service-details-area";

const PrivacyPolicy = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbNew title={"Privacy Policy"} />
          <ServiceDetailsArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default PrivacyPolicy;
