"use client";
import FooterFive from "@/layout/footers/footer-5";
import CtaArea from "../contact/cta-area";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import FaqArea from "../homes/home-2/faq-area";
import HeaderFive from "@/layout/headers/header-5";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";

const FAQ = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <BreadcrumbNew title={"Help & FAQs"} />
        <FaqArea style_service={true} />
        <CtaArea />
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default FAQ;
