"use client";
import FooterFive from "@/layout/footers/footer-5";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import ContextProvider from "@/context/ContextProvider";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import HeaderFive from "@/layout/headers/header-5";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const Contact = () => {
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
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default Contact;
