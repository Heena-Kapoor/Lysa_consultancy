"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import CtaArea from "../contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import CrucialData from "./crucial-data";
import CloudDB from "./cloudDB";
import Getstarted from "./get-started";
import Whychoose from "./why-choose";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const ManagedCloud = () => {
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
              <BreadcrumbEight
                spanText={"Cloud Database Management"}
                title={
                  <>
                    Managed Cloud <br /> Database Service
                  </>
                }
                desc={
                  "Gain a competitive edge with end-to-end managed cloud database services! Capitalize on the full potential of your cloud infrastructure operations with LYSA. Our managed cloud database services ensure that every component of your cloud environment pulls its weight."
                }
              />
              <Whychoose style_carrer={true} />
              <CrucialData />
              <CloudDB />
              <Getstarted />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default ManagedCloud;
