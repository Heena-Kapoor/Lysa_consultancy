import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";

import shape_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";
import PhoneFour from "@/svg/phone-4";

const BreadcrumbEight = ({ spanText, title, desc }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  return (
    <>
      <div className="breadcrumb__area pt-80 pb-10 p-relative blue-bg-2 fix">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="breadcrumb__content z-index-3 mb-60">
                  <div
                    className="breadcrumb__text wow tpfadeIn"
                    data-wow-duration=".9s"
                    data-wow-delay=".6s"
                  >
                    <span>{spanText}</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    {title}
                  </h3>
                  <div className="row g-0 z-index-3 align-items-center justify-content-between mb-40">
                    {/* Left Column: Paragraph Text */}
                    <div className="col-xl-8 col-lg-8 col-md-12 mb-3 mb-md-0">
                      <p className="text-white mb-0">{desc}</p>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="col-xl-4 col-lg-4 col-md-12">
                      <div className="breadcrumb__client-info d-flex align-items-center justify-content-lg-end gap-3 mt-3 mt-lg-0">
                        <span className="text-white mb-0">
                          Call for any question
                          <br />
                          <span className="mt-1 mb-0 text-white">
                            (+91) 8595-363-651
                          </span>
                        </span>

                        <div className="breadcrumb__live-btn">
                          <Link
                            className="tp-btn-inner white-bg text-black d-flex align-items-center gap-2"
                            href="/"
                          >
                            <PhoneFour height={18} width={18} /> Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbEight;
