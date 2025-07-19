"use client";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import HeaderFive from "@/layout/headers/header-5";
import { useEffect, useState } from "react";
import ContextProvider from "@/context/ContextProvider";
import Loader from "@/common/loader";

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ContextProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderFive />
          <main>
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid"} />
            <Portfolio />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </>
      )}
    </ContextProvider>
  );
};

export default Blog;
