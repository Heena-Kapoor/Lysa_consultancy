import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>Get Smart Migration With LYSA!</>,
  title: (
    <>
      <span>Prepare & Plan</span> Upgrade
    </>
  ),
  dub_title: <>Prepare & Plan Upgrade</>,
  description: (
    <>
      LYSA upgrade services can assist you to utilize the latest version of the
      Oracle database to achieve process enhancements. Our Upgrade services
      include superior processes and proprietary tools that assist to reduce
      risk, reduce downtime, and increase predictability, making upgrades
      smoother, faster, easier, and more efficient. To minimize business impact,
      we offer Off-peak hours upgrades and migration.
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const Migration = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-10 pb-70">
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
                  src="/assets/img/lysa/upgration-migration/prepare-nplan-upgration.webp"
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

export default Migration;
