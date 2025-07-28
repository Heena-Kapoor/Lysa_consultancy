"use client";
import ContextProvider from "@/context/ContextProvider";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import FooterFive from "@/layout/footers/footer-5";
import DatabaseServiceArea from "./databaseServiceArea";
import CtaArea from "../contact/cta-area";
import DatabaseInner from "./dataBaseInner";
import { useEffect, useState } from "react";
import Loader from "@/common/loader";

const DatabaseService = () => {
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
              <BreadcrumbNew title={"Database Services"} />
              <DatabaseServiceArea style_integraton={true} />
              <DatabaseInner />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </>
        )}
      </ContextProvider>
    </>
  );
};

export default DatabaseService;
