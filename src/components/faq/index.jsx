"use client";
import FooterFive from "@/layout/footers/footer-5";
import CtaArea from "../contact/cta-area";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import HeaderFive from "@/layout/headers/header-5";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import FaqArea from "../homes/home-2/faq-area";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const FAQ = () => {
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
            <AnimateMouse />
            <HeaderFive />
            <BreadcrumbNew title={"Help & FAQs"} />
            <FaqArea style_service={true} />
            <CtaArea />
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default FAQ;
