"use client";
import FooterFive from "@/layout/footers/footer-5";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderSix from "@/layout/headers/header-6";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";

const Contact = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderSix />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <BreadcrumbNew title={"Contact Us"} />
              <ContactInner />
              <ContactFormArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default Contact;
