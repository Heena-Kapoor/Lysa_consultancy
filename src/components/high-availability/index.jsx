"use client";

import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";

const HighAvailibilty = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbEight
            spanText={"Best Integrated"}
            title={"Available Technology!"}
            desc={
              "Eliminate the risk of failure and ensure maximum uptime with LYSA’S high availability capabilities! LYSA has exclusive expertise in designing, implementing, and managing a high-availability architecture seamlessly."
            }
          />
          <CtaArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default HighAvailibilty;