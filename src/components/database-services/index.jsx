"use client";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbNew from "@/common/breadcrumbs/breadcrumbNew";
import FooterFive from "@/layout/footers/footer-5";
import DatabaseServiceArea from "./databaseServiceArea";
import CtaArea from "../contact/cta-area";
import DatabaseInner from "./dataBaseInner";

const DatabaseService = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderFive />
        <main>
          <BreadcrumbNew title={"Database Services"} />
          <DatabaseServiceArea style_integraton={true} />
          <DatabaseInner />
          <CtaArea />
        </main>
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default DatabaseService;
