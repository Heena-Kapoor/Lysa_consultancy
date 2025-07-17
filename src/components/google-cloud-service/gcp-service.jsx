import React from "react";
import Image from "next/image";

const sales_content = {
  sub_title: <>MAKE THE MOST OF GCP SERVICES FOR YOUR BUSINESS!</>,
  title: <>Dream and Build with LYSA’s Google Cloud Services!</>,
  dub_title: <>Raise Your Game: Migrate To The Cloud Efficiently!</>,
  description: (
    <>
      <p>
        Capitalize on cloud operations, data, automation, and analytics by
        collaborating with LYSA. Our team is prepared to assist you in migrating
        and running your business-critical applications on Google Cloud with
        extensive capabilities throughout your migration and beyond.
      </p>
      <p>
        By working with LYSA, reap the benefits of Google Cloud services for
        your business. Take full advantage of GCP’s technologies and tools,
        innovation, and efficiencies to accelerate digital transformation,
        reduce costs, and capitalize on your investment.
      </p>
    </>
  ),
};
const { sub_title, title, dub_title, description } = sales_content;

const GCPservice = ({ style_service }) => {
  return (
    <>
      <div className="tp-sales-area pt-50 pb-70">
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
                <h4 className="tp-section-title-2 pb-15 ">
                  {style_service ? dub_title : title}
                </h4>
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
                  src="/assets/img/services/devops1.png"
                  alt="theme-pure"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GCPservice;
