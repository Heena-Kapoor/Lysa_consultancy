"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import ServiceArea from "./service-area";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const CloudServices = () => {
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
              <BreadcrumbNew title={"Cloud Services"} />
              <ServiceArea style_integraton={true} />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default CloudServices;
