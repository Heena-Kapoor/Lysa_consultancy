import useSticky from "@/hooks/use-sticky";
import Offcanvus from "@/common/offcanvus";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";
import CallUsButton from "./CallUsButton";

const HeaderFive = ({ style_2 }) => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`header-bottom__area header-sticky-bg-2 header-bottom__transparent header-bottom__bdr z-index-5 white-bg header-bottom__plr-5 ${
            style_2 ? "inner-header-2" : ""
          } ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/services/lysalogo.png"
                      alt="lysa_logo"
                      width={70}
                      height={70}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 col-lg-8 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-5 text-center">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <CallUsButton />
                    <a
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderFive;
