import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>Reduced Cost With LYSA!</>,
  title: (
    <>
      <span>Integrated and Comprehensive</span> High Available Technologies!
    </>
  ),
  dub_title: <>Integrated and Comprehensive High Available Technologies!</>,
  description: (
    <>
      LYSA has a unique understanding of how to design, implement, and manage a
      High Availability architecture that accomplishes all the business goals
      efficiently. Utilizing Oracle Database High Availability capabilities, we
      assist customers with addressing both planned and unplanned outages. We
      offer architecture, lifecycle, and configuration best practices for Oracle
      Databases, empowering high-availability service levels for databases.
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const ReducedCost = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-70 pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box pb-20">
                <h4
                  className="inner-section-subtitle"
                  style={{ lineHeight: "1" }}
                >
                  {sub_title}
                </h4>
                <h3 className="tp-section-title-3 pb-15 ">
                  {style_service ? dub_title : title}
                </h3>
                <p className="tp-title-anim">{description}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-sales-img-wrapper p-relative text-end">
                <Image
                  src="/assets/img/lysa/high-available/integrated-comprehensive.webp"
                  alt="theme-pure"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReducedCost;
