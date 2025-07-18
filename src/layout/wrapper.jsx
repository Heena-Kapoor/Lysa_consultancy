'use client';
import React, { useEffect } from "react";
import {gsap} from "gsap";
// internal
import ScrollToTop from "@/hooks/scroll-to-top";
import { wowAnimation } from "@/utils/utils"; 
import { ScrollTrigger } from "@/plugins";
import Whatsappintegration from "@/common/whatsapp-integrate";


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      wowAnimation();
    }, 100);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);


  return (
    <>
      {children}
      <Whatsappintegration/>
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
