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
import WhyChoose from "./why-choose";

const RemoteDBAsupport = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbEight />
          <SloutionArea style_carrer={true} />
          <WhyChoose/>
          <ResultArea style_service={true} spacing="pt-80 pb-30" />
          <WorkArea />
          <CtaArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default RemoteDBAsupport;
